(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e16a314"],{"8c57":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.eqTtoQuestions,(function(e){return[t.eqTtoQuestions.indexOf(e)===t.currentItem?r("eq-tto",{key:e.id,attrs:{block:e,startTime:t.startTime},on:{cUpdateItem:function(e){return t.pUpdateItem(e)}}}):t._e()]})),r("v-row",[r("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.popupDialog,callback:function(e){t.popupDialog=e},expression:"popupDialog"}},[r("v-card",{staticClass:"pt-5 yellow lighten-4"},[r("v-card-text",{staticClass:"display-1",staticStyle:{"text-indent":"2em"}},[t._v(t._s(t.eqLangLabels[t.$vuetify.lang.current].popup_window_exmple))]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"light-green darken-3",large:""},on:{click:function(e){t.popupDialog=!1}}},[t._v(t._s(t.eqLangLabels[t.$vuetify.lang.current].btn_ok_exmple))]),r("v-spacer")],1)],1)],1)],1)],2)},i=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"grey lighten-5",attrs:{fluid:""}},[r("v-card",{attrs:{justify:"center",align:"start"}},[r("v-card-title",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}]},[r("v-row",[r("v-col",[r("v-alert",{attrs:{dense:"",type:"info"}},[t._v(t._s(t.eqLangLabels[t.$vuetify.lang.current].question))])],1)],1)],1),r("v-card-text",[r("v-row",[r("v-col",{staticClass:"px-8",attrs:{cols:"3"}},[r("v-row",{staticClass:"pt-8",attrs:{justify:"end"}},[r("v-btn",{staticClass:"primary",attrs:{fab:"",large:"",dark:""},on:{click:function(e){return t.chooseAnswer("A")}}},[t._v("A")])],1),r("v-row",{staticClass:"my-2",attrs:{justify:"end"}},[r("v-btn",{staticClass:"yellow darken-3",attrs:{large:"",dark:""},on:{click:function(e){return t.chooseAnswer("AB")}}},[t._v("A & B")])],1),r("v-row",{staticClass:"my-2",attrs:{justify:"end"}},[r("v-btn",{staticClass:"purple",attrs:{fab:"",large:"",dark:""},on:{click:function(e){return t.chooseAnswer("B")}}},[t._v("B")])],1),r("v-row",{staticClass:"my-2",attrs:{justify:"end"}},[t.step>0?r("v-btn",{staticClass:"teal",on:{click:t.reset}},[r("v-icon",[t._v("refresh")])],1):t._e()],1)],1),1==t.slide?r("v-col",{staticClass:"px-8",attrs:{cols:"9"}},[r("v-row",{attrs:{justify:"start",align:"center"}},[r("div",[r("div",{staticStyle:{"text-align":"center"},style:t.cStyle1},[t._v(t._s(Math.floor(t.currentYear)+t.eqLangLabels[t.$vuetify.lang.current].years+(t.currentYear%1*12!=0?","+t.currentYear%1*12+t.eqLangLabels[t.$vuetify.lang.current].months:""))+" ")]),r("canvas",{ref:"canvas1",attrs:{id:"canvas1"}})]),r("table",{ref:"table1",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[r("tr",{staticStyle:{height:"50px"}},t._l(t.allContent(t.topYear),(function(e){return r("td",{key:e,class:e<=4*t.currentYear?"light-green lighten-1":"",staticStyle:{"text-align":"center",width:"24px"}})})),0)])]),r("v-row",{staticClass:"pt-12 mt-12",attrs:{justify:"start",align:"center"}},[r("table",{ref:"table2",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[r("tr",{staticStyle:{height:"50px"}},t._l(t.allContent(t.topYear),(function(t){return r("td",{key:t,staticClass:"blue lighten-2",staticStyle:{"text-align":"center",width:"24px"}})})),0)]),r("div",[r("canvas",{ref:"canvas2",attrs:{id:"canvas2"}})])])],1):t._e(),2==t.slide?r("v-col",{staticClass:"px-8",attrs:{cols:"9"}},[r("v-row",{attrs:{justify:"start"}},[r("div",[r("div",{staticStyle:{"text-align":"center"},style:t.cStyle3},[t._v(t._s(Math.floor(t.currentYearB)+t.eqLangLabels[t.$vuetify.lang.current].years+(t.currentYearB%1*12!=0?","+t.currentYearB%1*12+t.eqLangLabels[t.$vuetify.lang.current].months:"")))]),r("canvas",{ref:"canvas3",attrs:{id:"canvas3"}})]),r("table",{ref:"table3",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[r("tr",{staticStyle:{height:"50px"}},t._l(t.allContent(t.topYearB),(function(e){return r("td",{key:e,class:e<=4*t.currentYearB?"light-green lighten-1":"",staticStyle:{"text-align":"center",width:"16px"}})})),0)])]),r("v-row",{staticClass:"pt-12 mt-12",attrs:{justify:"start",align:"center"}},[r("table",{ref:"table4",attrs:{border:"1",cellspacing:"0",cellpadding:"0"}},[r("tr",{staticStyle:{height:"50px"}},t._l(t.allContent(t.topYearB),(function(t){return r("td",{key:t,class:t<=40?"light-green lighten-1":"blue lighten-2",staticStyle:{"text-align":"center",width:"16px"}})})),0)]),r("div",[r("canvas",{ref:"canvas4",attrs:{id:"canvas4"}}),r("canvas",{ref:"canvas5",attrs:{id:"canvas5"}})])])],1):t._e()],1),1==t.slide&&t.block.source_text?r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-row",[r("div",{staticClass:"message-box pa-5 mt-5",staticStyle:{"margin-left":"200px","text-align":"left"}},t._l(t.block.source_text.split("*"),(function(e){return r("div",{key:e.key},[""!=e?r("li",[r("span",[t._v(t._s(e))])]):t._e()])})),0)])],1)],1):t._e(),2==t.slide?r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-row",[r("div",{staticClass:"message-box-1 pa-5 mt-5",staticStyle:{"margin-left":"200px","text-align":"left"}},[r("span",[t._v("完全健康")])])])],1)],1):t._e(),2==t.slide&&t.block.source_text?r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-row",[r("div",{staticClass:"message-box-2 pa-5 mt-5",staticStyle:{"margin-left":"200px","text-align":"left"}},t._l(t.block.source_text.split("*"),(function(e){return r("div",{key:e.key},[""!=e?r("li",[r("span",[t._v(t._s(e))])]):t._e()])})),0)])],1)],1):t._e()],1),r("v-divider")],1),r("v-row",[r("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.popupDialog,callback:function(e){t.popupDialog=e},expression:"popupDialog"}},[r("v-card",{staticClass:"pt-5 yellow lighten-4"},[r("v-card-text",{staticClass:"display-1",staticStyle:{"text-indent":"2em"}},[t.popA?r("span",[t._v(t._s(t.eqLangLabels[t.$vuetify.lang.current].msg_response_41+t.currentYear+t.eqLangLabels[t.$vuetify.lang.current].msg_response_42))]):t._e(),t.popA_to_B?r("span",[t._v(t._s(t.eqLangLabels[t.$vuetify.lang.current].popup_window))]):t._e(),t.popAZero?r("span",[t._v(t._s(t.eqLangLabels[t.$vuetify.lang.current].msg_response_43))]):t._e(),t.popBFull?r("span",[t._v(t._s(t.eqLangLabels[t.$vuetify.lang.current].msg_response_53))]):t._e(),t.popB?r("span",[t._v(t._s(t.eqLangLabels[t.$vuetify.lang.current].msg_response_51+t.currentBYear+t.eqLangLabels[t.$vuetify.lang.current].msg_response_52))]):t._e()]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"light-green darken-3",large:""},on:{click:t.closeDialog}},[t._v(t._s(t.eqLangLabels[t.$vuetify.lang.current].btn_ok_exmple))]),r("v-spacer")],1)],1)],1)],1)],1)},a=[],c=r("2f62");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h={name:"EqTto",props:["block","startTime"],data:function(){return{cStyle1:"",cStyle3:"",showDetail:!1,currentYear:10,topYear:10,step:0,currentYearB:10,topYearB:20,stepB:0,selected:[],tableWidth:"",slide:1,stepDirection:0,resets:0,currentTime:"",endTime:0,usedTime:"00:00:00",itemStartTime:0,itemEndTime:0,itemUsedTime:"00:00:00",bAlertText:"",ttoAnswer:"",popupDialog:!1,popA:!1,popB:!1,popA_to_B:!1,popAZero:!1,popBFull:!1}},methods:{reset:function(){var t=this;this.resets++,this.slide=1,this.currentYear=10,this.step=0,this.currentYearB=10,this.stepB=0,this.stepDirection=0,this.$nextTick((function(){1===t.slide&&(t.drawLine("canvas1",t.$refs.table1.offsetWidth,20,t.$refs.table1.offsetWidth/t.topYear*t.currentYear,10,0),t.cStyle1=t.getStyle(t.$refs.table1.offsetWidth,t.topYear,t.currentYear),t.drawLine("canvas2",t.$refs.table2.offsetWidth,20,t.$refs.table2.offsetWidth,10,0)),2===t.slide&&(t.drawLine("canvas3",t.$refs.table3.offsetWidth,20,t.$refs.table3.offsetWidth/t.topYearB*t.currentYearB,10,0),t.cStyle3=t.getStyle(t.$refs.table3.offsetWidth,t.topYearB,t.currentYearB))}))},chooseAnswer:function(t){var e=this;if("A"===t){if(1===this.slide)0===this.step?this.currentYear=this.currentYear-10:1===this.step?(this.popA_to_B=!0,this.popupDialog=!0,this.slide=2,this.stepDirection++):2===this.step?this.currentYear--:this.step>=3&&(this.stepDirection>=1&&.5===this.currentYear&&(this.popA_to_B=!0,this.popupDialog=!0,this.slide=2,this.stepDirection++),this.currentYear>0&&this.currentYear<=1||this.currentYear>9&&this.currentYear<=10||this.currentYear%1===.5||this.selected[this.selected.length-1]!=t?this.currentYear=this.currentYear-.5:0===this.currentYear?(this.popA_to_B=!0,this.popupDialog=!0,this.slide=2,this.stepDirection++):this.currentYear--);else if(2===this.slide)if(this.stepDirection<=1){if(1===this.stepB)this.currentYearB=this.currentYearB-5;else if(2===this.stepB)this.currentYearB--;else if(this.stepB>=3)if(this.currentYearB>0&&this.currentYearB<=1||this.currentYearB>9&&this.currentYearB<=10||this.currentYearB%1===.5||this.selected[this.selected.length-1]!=t)this.currentYearB=this.currentYearB-.5;else{if(0===this.currentYearB)return;this.currentYearB--}}else{if(0===this.stepB)return void this.stepB++;if(this.currentYearB>0&&this.currentYearB<=1||this.currentYearB>9&&this.currentYearB<=10||this.currentYearB%1===.5||this.selected[this.selected.length-1]!=t)this.currentYearB=this.currentYearB-.5;else{if(0===this.currentYearB)return;this.currentYearB--}}}else if("B"===t)if(1===this.slide){if(0===this.step)return;if(1===this.step)this.currentYear=this.currentYear+5;else if(2===this.step)this.currentYear++;else if(this.step>=3)if(this.currentYear>=0&&this.currentYear<1||this.currentYear>=9&&this.currentYear<10||this.currentYear%1===.5||this.selected[this.selected.length-1]!=t)this.currentYear=this.currentYear+.5;else{if(this.currentYear>=10)return;this.currentYear++}}else 2===this.slide&&(this.currentYearB>=10?(this.slide=1,this.stepDirection++,this.stepB=0,this.currentYear=this.currentYear+.5):this.stepDirection<=1?this.stepB>=3&&(this.currentYearB>=0&&this.currentYearB<1||this.currentYearB>=9&&this.currentYearB<10||this.currentYearB%1===.5||this.selected[this.selected.length-1]!=t)?this.currentYearB=this.currentYearB+.5:this.currentYearB++:this.currentYearB>=0&&this.currentYearB<1||this.currentYearB>=9&&this.currentYearB<10||this.currentYearB%1===.5||this.selected[this.selected.length-1]!=t?this.currentYearB=this.currentYearB+.5:(this.currentYearB++,console.log("here ...")));else{this.stepDirection%2==0?0==this.currentYear?alert(this.eqLangLabels[this.$vuetify.lang.current].msg_response_43):alert(this.eqLangLabels[this.$vuetify.lang.current].msg_response_41+(10-this.currentYear)+this.eqLangLabels[this.$vuetify.lang.current].msg_response_42):0==this.currentYearB?alert(this.eqLangLabels[this.$vuetify.lang.current].msg_response_53):alert(this.eqLangLabels[this.$vuetify.lang.current].msg_response_51+(20-this.currentYearB)+this.eqLangLabels[this.$vuetify.lang.current].msg_response_52);var r=0;r=this.stepDirection%2==0?.1*this.currentYear:.1*(this.currentYearB-10);var s={questionid:this.examType.id,participant:this.userInfo.participant,interviewer:this.userInfo.interviewer,item:this.block.name,position_of_item:this.block.id,tto_value:r,used_time:this.itemUsedTime,composite_switches:this.stepDirection,resets:this.resets,number_of_moves:this.step,block:this.block.block,version:this.qVersion};this.ttoAnswer=s,this.itemStartTime=new Date,this.itemEndTime=0,this.itemUsedTime="00:00:00",this.getUsedTime(),this.updateItem()}if(this.selected.push(t),this.step++,2===this.slide&&this.stepB++,"A"!=t&&"B"!=t)return!1;this.currentYear>=0&&1===this.slide&&this.$nextTick((function(){e.drawLine("canvas1",e.$refs.table1.offsetWidth,20,e.$refs.table1.offsetWidth/e.topYear*e.currentYear,10,0),e.cStyle1=e.getStyle(e.$refs.table1.offsetWidth,e.topYear,e.currentYear),console.log(e.cStyle1),e.drawLine("canvas2",e.$refs.table2.offsetWidth,20,e.$refs.table2.offsetWidth,10,0)})),this.currentYearB>=0&&2===this.slide&&this.$nextTick((function(){e.drawLine("canvas3",e.$refs.table3.offsetWidth,20,e.$refs.table3.offsetWidth/e.topYearB*e.currentYearB,10,0),e.drawLine("canvas4",e.$refs.table4.offsetWidth/2,20,e.$refs.table4.offsetWidth/2,10,0),e.cStyle3=e.getStyle(e.$refs.table3.offsetWidth,e.topYearB,e.currentYearB),e.drawLine("canvas5",e.$refs.table4.offsetWidth/2,20,e.$refs.table4.offsetWidth/2,10,0)}))},drawLine:function(t,e,r,s,i,n){var a=document.getElementById(t);if(null==a)return!1;if(a.height=r,a.width=e,0===s)return!1;var c=a.getContext("2d");function l(t,e,r,s,i,n,a){var c=new Array(s,i),l=new Array(n,a);t.beginPath(),t.translate(e,r,0),t.moveTo(c[0],c[1]),t.lineTo(l[0],l[1]),t.fill(),t.stroke(),t.save(),t.translate(l[0],l[1]);var o=(l[0]-c[0])/(l[1]-c[1]);o=Math.atan(o),l[1]-c[1]>=0?t.rotate(-o):t.rotate(Math.PI-o),t.lineTo(-5,-10),t.lineTo(0,-5),t.lineTo(5,-10),t.lineTo(0,0),t.fill(),t.restore(),t.closePath()}l(c,0,i,0+n+5,0,s+n-5,0),l(c,0+n+5,0,5,0,0,0)},start:function(){this.itemStartTime=new Date},end:function(){this.endTime=new Date,this.usedTime=this.startTime?this.getFormatTime(this.startTime,this.endTime):"00:00:00",this.itemEndTime=new Date,this.itemUsedTime=this.itemStartTime?this.getFormatTime(this.itemStartTime,this.itemEndTime):"00:00:00"},getFormatTime:function(t,e){var r=(e-t)%864e5,s=Math.floor(r/36e5),i=r%36e5,n=Math.floor(i/6e4),a=i%6e4,c=Math.round(a/1e3);return s<10&&(s="0"+s),n<10&&(n="0"+n),c<10&&(c="0"+c),s+":"+n+":"+c},getUsedTime:function(){setInterval(this.end,1e3)},getStyle:function(t,e,r){var s=t,i=t-t/e*r;return s==i&&(i-=30),console.log,"width: "+s+"px; padding-right: "+i+"px;"},updateItem:function(){this.$emit("cUpdateItem",this.ttoAnswer)},closeDialog:function(){this.popupDialog=!1,this.popA=!1,this.popB=!1,this.popA_to_B=!1,this.popAZero=!1,this.popBFull=!1}},created:function(){this.start(),this.getUsedTime()},beforeDestroy:function(){clearInterval(this.startTime),clearInterval(this.endTime),clearInterval(this.usedTime),clearInterval(this.itemStartTime),clearInterval(this.itemEndTime),clearInterval(this.itemUsedTime)},mounted:function(){this.drawLine("canvas1",this.$refs.table1.offsetWidth,20,this.$refs.table1.offsetWidth,10,0),this.drawLine("canvas2",this.$refs.table2.offsetWidth,20,this.$refs.table2.offsetWidth,10,0)},computed:o({allContent:function(){return function(t){for(var e=[],r=1;r<=4*t;r++)e.push(r);return e}}},Object(c["b"])(["userInfo","examType","qVersion","eqLangLabels"]))},p=h,f=(r("9f16"),r("2877")),d=Object(f["a"])(p,n,a,!1,null,"1ff04e3a",null),g=d.exports;function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y={components:{EqTto:g},data:function(){return{eqTtoQuestions:[{}],currentItem:0,startTime:0,ttoAnswers:[],popupDialog:!0}},created:function(){this.getQuestion(),this.startTime=new Date},mounted:function(){console.log("EQ tto Exam")},computed:m({},Object(c["b"])(["userInfo","qVersion","eqLangLabels"])),methods:{pUpdateItem:function(t){this.ttoAnswers.push(t),this.currentItem++,this.currentItem>this.eqTtoQuestions.length-1&&(this.$store.dispatch("setAllAnswer",this.ttoAnswers),this.$router.push({path:"/eq/end"}))},getQuestion:function(){var t=this;this.$axios.get("/api/question/tto",{params:{block:this.userInfo.blockQuestion,version:this.qVersion}}).then((function(e){t.eqTtoQuestions=e.data})).catch((function(t){console.log(t)}))}}},_=y,Y=Object(f["a"])(_,s,i,!1,null,null,null);e["default"]=Y.exports},"9cee":function(t,e,r){},"9f16":function(t,e,r){"use strict";var s=r("9cee"),i=r.n(s);i.a}}]);
//# sourceMappingURL=chunk-3e16a314.80babed4.js.map