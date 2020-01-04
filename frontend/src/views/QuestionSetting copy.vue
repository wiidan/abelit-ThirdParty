<template>
  <v-container>
    <v-tabs background-color="primary" center-active dark>
      <v-tab @click="type = 1">上传题库</v-tab>
      <v-tab @click="type = 2">手动填写</v-tab>
      <v-tab @click="type = 3;tableHeaders=[];tabledata=[];qtype=''">查看题库</v-tab>
      <v-tab @click="type = 4;tableHeaders=[];tabledata=[];qtype=''">查看答案</v-tab>
      <v-tab @click="type = 5">版本设置</v-tab>
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
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3" class="pa-8">
          <v-btn color="primary" @click="getQuestion" large>
            <v-icon>search</v-icon>
          </v-btn>
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
  </v-container>
</template>

<script>
import questiontype from "@/assets/data/questiontype.json";
import { mapState } from "vuex";
import XLSX from "xlsx";

export default {
  data: () => ({
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
    getAnswer(type, version, participant) {
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
          alert("题型不存在");
      }

      this.$axios
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
    async downloadAnswer(pid, qid,version) {
      console.log({
        participant: pid,
        questionid: qid,
        aversion: version
      });

      var url;
      console.log(qid);
      switch (qid) {
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
          alert("题型不存在");
      }

      this.$axios
        .get(url, {
          params: { version: version, participant: pid }
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

          console.log("foobar");
      console.log("I am downloadAnswer");
      var exportData = XLSX.utils.json_to_sheet(this.tableAData);
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, exportData, "export_data");
      XLSX.writeFile(wb, "demo.xlsx");
        })
        .catch(err => {
          console.log(err);
        });


      
    },
    viewDetailAnswer(pid, qid) {
      this.dialog = true;
      console.log({ participant: pid, questionid: qid });
      this.getAnswer(qid, this.aversion, pid);
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

