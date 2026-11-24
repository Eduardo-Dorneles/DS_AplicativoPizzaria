import mysql.connector
from pathlib import Path

# troca aqui pra rodar com outro usuario
USUARIO = "root"
SENHA = "123456"
ARQUIVO = "database.sql"

# atendente: "Atende@123" e "teste_atendente.sql"
# cozinheiro: "Cozinha@123" e "teste_cozinheiro.sql"

conexao = mysql.connector.connect(
    host="localhost",
    port=3306,
    user=USUARIO,
    password=SENHA
)

cursor = conexao.cursor()

with open(Path(__file__).parent / ARQUIVO, "r", encoding="utf-8") as arquivo:
    sql = arquivo.read()

for comando in sql.split(";"):
    comando = comando.strip()

    if comando:
        try:
            cursor.execute(comando)
            if cursor.with_rows:
                for linha in cursor.fetchall():
                    print(linha)
        except mysql.connector.Error as erro:
            print("NEGADO:", erro.msg)

conexao.commit()

cursor.close()
conexao.close()

print("Arquivo SQL executado com sucesso!")
