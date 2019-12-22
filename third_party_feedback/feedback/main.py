# coding:utf8
from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os


app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

# 跨域设置
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/initdb')
def init_db():
    os.remove('question.db')

    # 连接数据库
    conn = sqlite3.connect('question.db',check_same_thread=False)

    all_table_text = "SELECT lower(name),sql FROM sqlite_master WHERE type='table' ORDER BY 1"
    cursor = conn.cursor()

    result = cursor.execute(all_table_text)

    for table in result:
        conn.execute("drop table {0}".format(table[0]))

    SQL_TEXT = ["create table tto_question(id integer, presentation text,type text, name text,block integer,source_text text)","create table interviewer(id integer, name text)"]

    for sql in SQL_TEXT:
        conn.execute(sql)

    result = cursor.execute(all_table_text)
    table_list = []

    for table in result:
        table_list.append({"name": table[0], "sql": table[1]})


    cursor.close()
    conn.close()
    return jsonify({"status": 200, "msg": "Reinit database successfully!","tables": table_list})

   


@app.route("/api/addmoreanswer",methods=['POST'])
def add_more_answer():
    content = request.get_json()

    # print(content)
    # print(type(content))

    # for row in content:
    #     print(row['item'])

    status = None
    msg = None

    try:
        cursor = conn.cursor()
        for row in content:
            SQL_TEXT = "INSERT INTO ANSWER (ITEM,PARTICIPANT,INTERVIEWER, POSITION_OF_ITEM,SELECTED_STATE) VALUES ({},'{}','{}','{}','{}');".format(row['item'],row['participant'],row['interviewer'],row['position_of_item'],row['selected_state'])
            conn.execute(SQL_TEXT)
        conn.commit()
        status = 200
        msg = "成功"
    except Exception as err:
        msg = err
        status = 600

    return jsonify({"msg": msg,"status":status})
    # return jsonify(request.get_json())

if __name__ == "__main__":
    # init_db()
    app.run(host="0.0.0.0",debug=True)
