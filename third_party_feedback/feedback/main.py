# coding:utf8
from flask import Flask, request, jsonify
import sqlite3


app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False


conn = sqlite3.connect('question.db',check_same_thread=False)


def init_db():
    conn.execute('CREATE TABLE ANSWER(ITEM ID,PARTICIPANT TEXT,INTERVIEWER TEXT, POSITION_OF_ITEM TEXT,SELECTED_STATE TEXT)')
    # cursor = conn.cursor()
    conn.execute("INSERT INTO ANSWER(ITEM,PARTICIPANT,INTERVIEWER, POSITION_OF_ITEM,SELECTED_STATE) VALUES(10000,'111','史尼丹','1','A')")
    conn.commit()
    # conn.close()
    # cursor.close()


@app.route("/api/allquestion",methods=['GET'])
def get_all_question():
    pass


@app.route("/api/addquestion",methods=['POST'])
def add_question():
    pass

@app.route("/api/allanswer",methods=['GET'])
def get_all_answer():
    result = conn.execute("SELECT ITEM,PARTICIPANT,INTERVIEWER, POSITION_OF_ITEM,SELECTED_STATE FROM ANSWER")
    rjson = {}
    res = []
    for r in result:
        print(r)
        rjson = {
            "item": r[0],
            "participant": r[1],
            "interviewer": r[2],
            "position_of_item": r[3],
            "selected_state": r[4]
        }
        res.append(rjson)

    return jsonify(res)

@app.route("/api/addanswer",methods=['POST'])
def add_answer():
    # name = request.form['name']
    """
    {
        "name": "abelit",
        "sex": 1,
        "details": {
            "name": "John",
            "url": "https://www.baidu.com"
        }
    }   
    """
    # name = request.get_json()['details']["url"]

    # name = request.json.get("details", None)
    """
    $.ajax({
            type: 'POST',
            url: '/sql_lab/execute_sql',
            data: JSON.stringify( {sql: editor.getValue(), strategy: 'render_json', database: $('#database-picker').val()}),
            dataType: "json",
            contentType: "application/json; charset=utf-8",       
    })

    {
        "interviewer": "chenying",
        "item": 10001,
        "participant": "112",
        "position_of_item": "2",
        "selected_state": "C"
    }
    """

    item = request.json.get('item', None)
    participant = request.json.get('participant', None)
    interviewer = request.json.get('interviewer', None)
    position_of_item = request.json.get('position_of_item', None)
    selected_state = request.json.get('selected_state', None)
    # print("hh")
    print(item)
    status = None
    msg = None
    try:
        cursor = conn.cursor()
        SQL_TEXT = "INSERT INTO ANSWER (ITEM,PARTICIPANT,INTERVIEWER, POSITION_OF_ITEM,SELECTED_STATE) VALUES ({},'{}','{}','{}','{}');".format(item,participant,interviewer,position_of_item,selected_state)
        print(SQL_TEXT)
        conn.execute(SQL_TEXT)
        conn.commit()
        status = 200
        msg = "成功"
    except Exception as err:
        msg = err
        status = 600

    return jsonify({"msg": msg,"status":status})
    # return jsonify(request.get_json())


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
