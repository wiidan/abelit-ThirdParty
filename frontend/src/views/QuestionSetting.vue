<template>
  <v-container>
    <v-tabs background-color="primary" center-active dark>
      <v-tab @click="type = 1">上传题库</v-tab>
      <v-tab @click="type = 2">手动填写</v-tab>
      <v-tab @click="type = 3;tableHeaders=[];tabledata=[];qtype=''">查看题库</v-tab>
      <v-tab @click="type = 4;tableHeaders=[];tabledata=[];qtype=''">查看答案</v-tab>
      <v-tab @click="type = 5">版本设置</v-tab>
      <v-tab @click="type = 6">数据库初始化</v-tab>
    </v-tabs>
    <div v-if="type==1" style="margin-top: 15%">
      <v-row>
        <v-col cols="12">
          <v-row class="px-10">
            <v-subheader>上传题库</v-subheader>
            <v-file-input v-model="file" label="选择文件" :show-size="1000" outlined></v-file-input>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-row justify="end" class="px-10">
            <v-btn color="primary" @click="uploadFile">上传</v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar" color="primary" :timeout="2000">{{msg}}</v-snackbar>
    </div>
    <div v-if="type==2" style="margin-top: 15%">
      <span>此模块尚未开放</span>
    </div>

    <div v-if="type==3">
      <v-row>
        <v-col cols="3">
          <v-row>
            <v-col>
              <v-subheader>题目类型</v-subheader>
            </v-col>
            <v-col>
              <v-select
                :items="questionTypes"
                v-model="qtype"
                item-value="id"
                item-text="name"
                label="选题题型"
                outlined
                dense
                @change="getQuestionVersion"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-row>
            <v-col>
              <v-subheader>题库版本</v-subheader>
            </v-col>
            <v-col>
              <v-select
                :items="questionVersions"
                v-model="qversion"
                item-value="version"
                item-text="version"
                label="选择版本号"
                outlined
                dense
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3" class="pa-8">
          <v-btn color="primary" dark @click="getQuestion">查询</v-btn>
          <v-btn color="error" dark @click="deleteQuestion" class="ml-5">删除题库</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-data-table
            :headers="tableHeaders"
            :items="tableData"
            :items-per-page="10"
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
    </div>

    <div v-if="type==4">
      <v-row>
        <v-col cols="12" sm="4">
          <v-row>
            <v-subheader>版本</v-subheader>
            <v-select
              :items="answerVersions"
              v-model="aversion"
              item-value="version"
              item-text="version"
              label="选择版本号"
              outlined
            ></v-select>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-data-table
            :headers="tablePHeaders"
            :items="tablePData"
            :items-per-page="10"
            class="elevation-1"
          >
            <template v-slot:item.TTO="{ item }">
              <v-icon
                small
                class="mr-2"
                color="primary"
                v-if="item.TTO > 0"
                @click="viewDetailAnswer(item.participant,item.TTO)"
              >remove_red_eye</v-icon>
              <v-icon
                small
                v-if="item.TTO > 0"
                color="primary"
                @click="downloadAnswer(item.participant,item.TTO)"
              >file_download</v-icon>
            </template>
            <template v-slot:item.DCE="{ item }">
              <v-icon
                small
                class="mr-2"
                color="primary"
                v-if="item.DCE > 0"
                @click="viewDetailAnswer(item.participant,item.DCE)"
              >remove_red_eye</v-icon>
              <v-icon
                small
                v-if="item.DCE > 0"
                color="primary"
                @click="downloadAnswer(item.participant,item.DCE)"
              >file_download</v-icon>
            </template>
            <template v-slot:item.Opened="{ item }">
              <v-icon
                small
                class="mr-2"
                color="primary"
                v-if="item.Opened > 0"
                @click="viewDetailAnswer(item.participant,item.Opened)"
              >remove_red_eye</v-icon>
              <v-icon
                small
                v-if="item.Opened > 0"
                color="primary"
                @click="downloadAnswer(item.participant,item.Opened)"
              >file_download</v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
      <v-row>
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
        >
          <v-card tile>
            <v-toolbar flat dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-icon
                icon
                dark
                @click="downloadAnswer(tableAData[0].participant,tableAData[0].questionid)"
              >file_download</v-icon>
              <v-toolbar-title></v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-data-table
                    :headers="tableAHeaders"
                    :items="tableAData"
                    :items-per-page="10"
                    class="elevation-1"
                  ></v-data-table>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <div style="flex: 1 1 auto;"></div>
        </v-dialog>
      </v-row>
    </div>
    <div v-if="type==0">
      <v-row justify="center" align="center" style="height: 500px;">
        <v-col cols="4">
          <v-row>
            <v-subheader>设置题库版本</v-subheader>
            <v-select
              :items="questionTypes"
              v-model="qtype"
              item-value="id"
              item-text="name"
              label="选择版本"
              outlined
              dense
            ></v-select>
            <v-btn class="primary" large>设置</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div v-if="type == 6">
      <v-row justify="center" class="mt-12">
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="adminpwd"
            label="请输入管理员密码"
            type="password"
            prepend-inner-icon="lock"
            outlined
            required
            dense
            solo
            flat
          >
            <template v-slot:append-outer>
              <v-btn outlined height="41" dense color="amber" @click="initdb">
                <span>初始化</span>
              </v-btn>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import questiontype from "@/assets/data/questiontype.json";
import { mapState } from "vuex";
import XLSX from "xlsx";

export default {
  data: () => ({
    adminpwd: "",
    type: 1,
    file: [],
    msg: "",
    snackbar: false,
    questionTypes: questiontype,
    questionVersions: [],
    qtype: "",
    qversion: "",
    answerVersions: [{ version: "V17" }],
    aversion: "",
    tableHeaders: [],
    tableData: [],
    dialog: false,
    tableAHeaders: [],
    tableAData: []
  }),
  methods: {
    uploadFile() {
      let forData = new FormData();
      forData.append("file", this.file);

      if (this.file == "") {
        alert("请选择上传文件！");
      }

      this.$axios
        .post("/api/upload", forData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log(res);
          this.msg = "文件上传成功！";
          this.snackbar = true;

          //   setTimeout(() => {
          //       this.snackbar = false;
          //   }, 2000);
        })
        .catch(err => {
          console.log(err);
          console.log("failed");
        });
    },
    getQuestion() {
      this.tableHeaders = [];
      this.tableData = [];
      var url;
      switch (this.qtype) {
        case 1:
          url = "/api/question/dce";
          break;
        case 2:
          url = "/api/question/tto";
          break;
        case 3:
          url = "/api/question/ttofeedback";
          break;
        case 4:
          url = "/api/question/open";
          break;
        default:
          alert("请选择题库类型");
      }
      console.log(this.qversion);
      this.$axios
        .get(url, {
          params: { block: "all", version: this.qversion || "all" }
        })
        .then(res => {
          //   console.log(res.data)
          var objData = res.data;

          var objHeader = [];
          var objKey = Object.keys(objData[0]);

          for (let i = 0; i < objKey.length; i++) {
            objHeader.push({
              text: objKey[i],
              value: objKey[i]
            });
          }

          this.tableHeaders = objHeader;
          this.tableData = objData;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async getAnswer(type, version, participant) {
      var url;
      console.log(type);
      switch (type) {
        case 1:
          url = "/api/answer/dce";
          break;
        case 2:
          url = "/api/answer/tto";
          break;
        case 3:
          url = "/api/answer/ttofeedback";
          break;
        case 4:
          url = "/api/answer/open";
          break;
        default:
          alert("请选择题库类型！");
      }

      await this.$axios
        .get(url, {
          params: { version: version, participant: participant }
        })
        .then(res => {
          //   console.log(res.data)
          var objData = res.data;

          var objHeader = [];
          var objKey = Object.keys(objData[0]);

          for (let i = 0; i < objKey.length; i++) {
            objHeader.push({
              text: objKey[i],
              value: objKey[i]
            });
          }
          //   console.log(objHeader)
          this.tableAHeaders = objHeader;
          this.tableAData = objData;
          console.log("I am getAnswer function.");
        })
        .catch(err => {
          console.log(err);
        });
      // console.log(this.qtype);
    },
    getQuestionVersion() {
      this.questionVersions = [];
      var url;
      switch (this.qtype) {
        case 1:
          url = "/api/question/dce";
          break;
        case 2:
          url = "/api/question/tto";
          break;
        case 3:
          url = "/api/question/ttofeedback";
          break;
        case 4:
          url = "/api/question/open";
          break;
        default:
          alert("题型不存在");
      }

      this.$axios
        .get(url, {
          params: { block: "all" }
        })
        .then(res => {
          var objData = res.data;

          var objVersion = [];

          for (let i = 0; i < objData.length; i++) {
            if (objVersion.indexOf(objData[i].version) == -1) {
              objVersion.push({ version: objData[i].version });
            }
          }
          objVersion.push("all");
          this.questionVersions = objVersion;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getParticipant() {
      let url = "/api/participant";
      this.$axios
        .get(url, {
          params: { version: this.qVersion || "V17" }
        })
        .then(res => {
          console.log(res.data);
          var objData = res.data;

          var objHeader = [];
          var objKey = Object.keys(objData[0]);

          for (let i = 0; i < objKey.length; i++) {
            objHeader.push({
              text: objKey[i],
              value: objKey[i]
            });
          }
          //   console.log(objHeader)
          this.tablePHeaders = objHeader;
          this.tablePData = objData;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async downloadAnswer(pid, qid) {
      if (this.aversion == "") {
        alert("请选择版本号！");
        return false;
      }

      await this.getAnswer(qid, this.aversion, pid);

      console.log("I am downloadAnswer");
      var filename;
      var questionName;
      var answerTime;

      switch (qid) {
        case 1:
          questionName = "DCE";
          break;
        case 2:
          questionName = "TTO";
          break;
        case 3:
          questionName = "TTO Feedback";
          break;
        case 4:
          questionName = "Open end questions";
          break;
        default:
          questionName = "unkonwn";
      }

      answerTime = this.tableAData[0].created_timestamp;

      let syear = new Date(answerTime).getFullYear();
      let smonth = new Date(answerTime).getMonth();
      let sdate = new Date(answerTime).getDate();
      let shour = new Date(answerTime).getHours();

      smonth = smonth + 1;
      if (smonth < 10) {
        smonth = "0" + smonth.toString();
      }

      if (sdate < 10) {
        sdate = "0" + sdate.toString();
      }

      if (shour < 10) {
        shour = "0" + shour.toString();
      }

      filename =
        questionName +
        "_" +
        this.aversion +
        "_" +
        pid +
        "_" +
        syear.toString() +
        smonth.toString() +
        sdate.toString() +
        shour.toString();
      console.log(filename);
      var exportData = XLSX.utils.json_to_sheet(this.tableAData);
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, exportData, questionName + " Answer");
      XLSX.writeFile(wb, filename + ".xlsx");
    },
    viewDetailAnswer(pid, qid) {
      if (this.aversion == "") {
        alert("请选择版本号！");
        return false;
      }

      this.dialog = true;
      console.log({ participant: pid, questionid: qid });
      this.getAnswer(qid, this.aversion, pid);
    },
    initdb() {
      let url = "/admin/initdb";
      console.log(this.adminpwd);
      this.$axios
        .post(url, {
          adminpwd: this.adminpwd
        })
        .then(res => {
          alert(res.data.msg);
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteQuestion() {
      let url = "/api/question/delete";
      if (this.qversion == "") {
        alert("请选择题库版本号！");
        return false;
      }
      if (this.qtype == "") {
        alert("请选择题库类型！");
        return false;
      }

      this.$axios
        .post(url, {
          questionid: this.qtype,
          version: this.qversion
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapState(["qVersion"])
  },
  mounted() {
    this.getParticipant();
  }
};
</script>

<style lang="scss">
.v-input__append-outer {
  margin: 0 !important;
}
</style>