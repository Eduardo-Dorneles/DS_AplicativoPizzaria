import mysql.connector
from pathlib import Path

# roda o teste de cada usuario logado como ele mesmo
# no fim da rollback, entao o teste nao muda nada no banco
usuarios = [
    ("atendente", "Atende@123", "teste_atendente.sql"),
    ("cozinheiro", "Cozinha@123", "teste_cozinheiro.sql"),
]

for usuario, senha, arquivo in usuarios:
    print(f"\n===== {usuario} =====")

    conexao = mysql.connector.connect(
        host="localhost",
        port=3306,
        user=usuario,
        password=senha,
        database="Palladares"
    )
    cursor = conexao.cursor()

    sql = (Path(__file__).parent / arquivo).read_text(encoding="utf-8")
    acertos = 0
    total = 0

    for bloco in sql.split(";"):
        linhas = [l for l in bloco.strip().splitlines() if l.strip()]
        comando = "\n".join(l for l in linhas if not l.strip().startswith("--")).strip()
        if not comando:
            continue

        # o comentario em cima do comando diz se e pra deixar ou bloquear
        comentarios = [l for l in linhas if l.strip().startswith("--")]
        deve_deixar = "NAO PODE" not in comentarios[-1]

        # DROP/CREATE/ALTER salvam tudo sozinhos (commit), entao desfaz antes
        if comando.upper().startswith(("DROP", "CREATE", "ALTER")):
            conexao.rollback()

        try:
            cursor.execute(comando)
            if cursor.with_rows:
                cursor.fetchall()
            deixou = True
            erro = ""
        except mysql.connector.Error as e:
            deixou = False
            erro = e.msg

        total += 1
        if deixou == deve_deixar:
            acertos += 1
            marca = "OK  "
        else:
            marca = "ERRO"

        resultado = "deixou" if deixou else "bloqueou"
        print(f"[{marca}] {resultado:8} | {comando.splitlines()[0]}")
        if erro and deixou != deve_deixar:
            print(f"        {erro}")

    conexao.rollback()
    cursor.close()
    conexao.close()

    print(f"{acertos}/{total} certos")
