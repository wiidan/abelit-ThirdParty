# coding:utf8
from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

# 跨域设置
cors = CORS(app, resources={r"/*": {"origins": "*"}})

# 连接数据库
conn = sqlite3.connect('question.db',check_same_thread=False)

def init_db():
    conn.execute('create table interviewer(id int,)')
    conn.commit()


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
