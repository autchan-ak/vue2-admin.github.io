(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6674bc0f","chunk-0b9168f0","chunk-8c4f60d8","chunk-3ba07e1c","chunk-d6ced9d0","chunk-7cf46faa","chunk-c6255dfe","chunk-2d0d7e28"],{"032a":function(t,e,a){"use strict";a("31fa")},"31fa":function(t,e,a){},3399:function(t,e,a){},"565b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box_card"},[e("div",{staticClass:"box_card_border"},[e("span",{staticClass:"box_card_title"},[t._v("树状图")]),e("el-row",{attrs:{gutter:20}},[e("div",{staticClass:"right"},[e("el-button-group",{staticStyle:{height:"20px"}},[e("el-button",{attrs:{type:0==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(0)}}},[t._v("近七天")]),e("el-button",{attrs:{type:1==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(1)}}},[t._v("本月")]),e("el-button",{attrs:{type:2==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(2)}}},[t._v("本季")]),e("el-button",{attrs:{type:3==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(3)}}},[t._v("本年")])],1)],1),e("div",{staticClass:"mg-top"},[0==t.index?e("ve-histogram",{attrs:{height:"350px",data:t.chartData[t.index],extend:t.chartExtend[t.index]}}):1==t.index?e("ve-histogram",{attrs:{height:"350px",data:t.chartData[t.index]}}):(t.index,e("ve-bar",{attrs:{height:"350px",data:t.chartData[t.index]}}))],1)])],1)])},n=[],s=(a("d3b7"),a("159b"),a("4e82"),{components:{},data:function(){return{index:0,chartExtend:[{color:["#E4004F","#64C9FA"],settings:{dataOrder:{label:"销售额-1季度",order:"asc"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0},boundaryGap:!1},series:function(t){return t.forEach((function(t){t.barWidth=20,t.label={color:"#666",show:!0,position:"top"}})),t}}],chartData:[{columns:["日期","销售额-1季度","销售额-2季度"],rows:[{"日期":"1月1日","销售额-1季度":2523,"销售额-2季度":1523},{"日期":"1月2日","销售额-1季度":4933,"销售额-2季度":1232},{"日期":"1月3日","销售额-1季度":9523,"销售额-2季度":3768},{"日期":"1月4日","销售额-1季度":7588,"销售额-2季度":3252},{"日期":"1月5日","销售额-1季度":5632,"销售额-2季度":2536},{"日期":"1月6日","销售额-1季度":4454,"销售额-2季度":6565}]},{columns:["日期","销售额-1季度","销售额-2季度","销售额-3季度"],rows:[{"日期":"1月1日","销售额-1季度":1523,"销售额-2季度":3523,"销售额-3季度":4523},{"日期":"1月2日","销售额-1季度":3533,"销售额-2季度":1232,"销售额-3季度":2232},{"日期":"1月3日","销售额-1季度":2523,"销售额-2季度":9768,"销售额-3季度":5768},{"日期":"1月4日","销售额-1季度":4588,"销售额-2季度":5252,"销售额-3季度":6252},{"日期":"1月5日","销售额-1季度":5632,"销售额-2季度":2536,"销售额-3季度":1536},{"日期":"1月6日","销售额-1季度":6773,"销售额-2季度":4454,"销售额-3季度":2454}]},{columns:["支付方式","占比"],rows:[{"支付方式":"小程序","占比":25},{"支付方式":"IOS客户端","占比":39},{"支付方式":"安卓客户端","占比":50},{"支付方式":"H5移动端","占比":10},{"支付方式":"PC端","占比":5}]},{columns:["支付方式","排序"],rows:[{"支付方式":"小程序","排序":25},{"支付方式":"IOS客户端","排序":39},{"支付方式":"安卓客户端","排序":50},{"支付方式":"H5移动端","排序":10},{"支付方式":"PC端","排序":5}]}],interval:null}},mounted:function(){},methods:{showData:function(t){var e=this;this.index=t,this.interval&&(clearInterval(this.interval),this.interval=null),3==t&&(this.interval=setInterval((function(){e.chartData[t].rows.forEach((function(t){t["排序"]+=Math.round(20*Math.random())})),e.chartData[t].rows=e.chartData[t].rows.sort((function(t,e){return t["排序"]-e["排序"]}))}),1e3))}}}),r=s,o=(a("5a06"),a("2877")),l=Object(o["a"])(r,i,n,!1,null,"bf937fbe",null);e["default"]=l.exports},"5a06":function(t,e,a){"use strict";a("7a32")},"6f65":function(t,e,a){"use strict";a("c90c")},"795e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box_card"},[e("div",{staticClass:"box_card_border"},[e("span",{staticClass:"box_card_title"},[t._v("漏斗图")]),e("div",{staticClass:"mg-top"},[e("ve-funnel",{attrs:{data:t.funnelData,height:"370px",settings:t.funnelSettings}})],1)])])},n=[],s={data:function(){return{funnelSettings:{sequence:["微信","支付宝","余额"],itemStyle:{opacity:.9},label:{formatter:"{b}({c}%)"}},funnelData:{columns:["name","proportion"],rows:[{name:"支付宝",proportion:35},{name:"微信",proportion:39},{name:"余额",proportion:26}]}}}},r=s,o=a("2877"),l=Object(o["a"])(r,i,n,!1,null,null,null);e["default"]=l.exports},"7a32":function(t,e,a){},8366:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{xs:12,sm:12,md:8,lg:6,xl:6}},[e("div",{staticClass:"cards-list",style:{borderColor:t.bj}},[e("div",{staticClass:"cards-list-name"},[t._v(t._s(t.title))]),e("div",{staticClass:"cards-list-main",style:{background:t.bj}},[e("svg-icon",{staticClass:"icon-svg",attrs:{icon:t.img}}),e("count-to",{attrs:{startVal:0,endVal:t.number,duration:3e3}})],1)])])},n=[],s=(a("a9e3"),a("ec1b")),r=a.n(s),o={name:"Statistics",components:{countTo:r.a},props:{number:{type:Number,default:2022},title:{type:String,required:!0},bj:{type:String,default:"#0badf9"},img:{type:String,default:""}}},l=o,c=(a("6f65"),a("2877")),u=Object(c["a"])(l,i,n,!1,null,"2255f0d6",null);e["default"]=u.exports},"9ff5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box_card"},[e("div",{staticClass:"box_card_border"},[e("span",{staticClass:"box_card_title"},[t._v("仪表盘")]),e("el-row",{attrs:{gutter:20}},[e("div",{staticClass:"right"},[e("el-button-group",{staticStyle:{height:"20px"}},[e("el-button",{attrs:{type:0==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(0)}}},[t._v("内压")]),e("el-button",{attrs:{type:1==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(1)}}},[t._v("车速")]),e("el-button",{attrs:{type:2==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(2)}}},[t._v("钟表")])],1)],1),e("div",{class:1==t.index?"mg-top2":"mg-top"},[0==t.index?e("ve-gauge",{attrs:{height:"350px",data:t.chartData[t.index],settings:t.chartSettings[t.index]}}):1==t.index?e("ve-gauge",{attrs:{height:"300px",data:t.chartData[t.index],settings:t.chartSettings[t.index]}}):e("ve-gauge",{attrs:{height:"350px",data:t.chartData[t.index],settings:t.chartSettings[t.index]}})],1)])],1)])},n=[],s=(a("b680"),a("b0c0"),a("99af"),{components:{},data:function(){return{index:0,chartData:[{columns:["type","value"],rows:[{type:"内压",value:48}]},{columns:["type","value"],rows:[{type:"时速",value:48}]},{columns:["type","value"],rows:[{type:"时间",value:0}]}],chartSettings:[{seriesMap:{"内压":{radius:"70%",axisLine:{lineStyle:{color:[[.2,"#30d8b6"],[.5,"#9830fa"],[.8,"#6ab9f1"],[1,"#fa7c92"]],width:10,shadowBlur:2,shadowColor:"red"}},axisTick:{length:15,lineStyle:{color:"auto",shadowColor:"#fff",shadowBlur:10}},axisLabel:{textStyle:{fontWeight:"bolder",color:"#49a9f2",shadowColor:"#fff",shadowBlur:100}},splitLine:{length:15,lineStyle:{width:3,color:"#fff",shadowColor:"#fff",shadowBlur:10}},pointer:{width:5,shadowColor:"red",shadowBlur:50},title:{show:!0},detail:{show:!0}}}},{seriesMap:{"时速":{tooltip:{formatter:"{a}:{c}"},radius:"100%",startAngle:180,endAngle:0,min:0,max:240,splitNumber:12,itemStyle:{color:"#58D9F9",shadowColor:"rgba(0,138,255,0.45)",shadowBlur:10,shadowOffsetX:2,shadowOffsetY:2},progress:{show:!0,roundCap:!0,width:180},pointer:{length:"75%",width:16,offsetCenter:[200,"50%"]},axisLine:{roundCap:!0,lineStyle:{width:18}},axisTick:{splitNumber:2,lineStyle:{width:2,color:"#999"}},splitLine:{length:12,lineStyle:{width:3,color:"#999"}},axisLabel:{distance:10,color:"#999",fontSize:14},detail:{backgroundColor:"#fff",borderColor:"#999",borderWidth:2,width:"60%",lineHeight:40,height:40,borderRadius:8,offsetCenter:[0,"35%"],valueAnimation:!0,formatter:function(t){return"{value|"+t.toFixed(0)+"}{unit|km/h}"},rich:{value:{fontSize:20,fontWeight:"bolder",color:"#777"},unit:{fontSize:20,color:"#999",padding:[0,0,0,10]}}},data:[{value:200}]}}},{seriesMap:{"时间":{tooltip:{formatter:"北京时间"},min:0,max:12,splitNumber:12,startAngle:90,endAngle:-269.999,animation:0,axisLine:{lineStyle:{color:[[1,"#d73d32"]],width:10}},axisLabel:{show:!1},axisTick:{show:!0},splitLine:{show:!0,length:15,lineStyle:{width:2,color:"#999"}},pointer:{shadowColor:"#000",shadowBlur:10,length:"50%",width:3,color:"#000",itemStyle:{color:"#000"}},detail:{show:!1},data:[{value:0,name:""},{value:0,name:""},{value:0,name:""}]}}}],TimeInterval:null}},mounted:function(){2==this.index&&this.getTime()},methods:{showData:function(t){this.index=t,2==t?this.getTime():clearInterval(this.TimeInterval)},getTime:function(){var t=this;this.TimeInterval=setInterval((function(){var e=new Date,a=e.getHours(),i=e.getMinutes()/5,n=e.getSeconds()/5;a+=e.getMinutes()/60,t.chartSettings[2].seriesMap["时间"].data[0].value=a,t.chartSettings[2].seriesMap["时间"].data[1].value=i,t.chartSettings[2].seriesMap["时间"].data[2].value=n,t.chartSettings[2].seriesMap["时间"].data[0].name="".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds())}),1e3)}}}),r=s,o=(a("032a"),a("2877")),l=Object(o["a"])(r,i,n,!1,null,"719f3319",null);e["default"]=l.exports},a35d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"mg-top"},[e("el-row",{attrs:{gutter:15}},[e("el-col",{staticClass:"mg-bottom",attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[e("VPie")],1),e("el-col",{staticClass:"mg-bottom",attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[e("Ring")],1),e("el-col",{staticClass:"mg-bottom",attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[e("VLine")],1),e("el-col",{staticClass:"mg-bottom",attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[e("VHistogram")],1),e("el-col",{staticClass:"mg-bottom",attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[e("VFunnel")],1),e("el-col",{staticClass:"mg-bottom",attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[e("VGauge")],1)],1)],1)])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"template-describe"},[e("p",[t._v("依赖于echarts4+")]),e("a",{attrs:{href:"https://v-charts.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看文档")]),e("br")])}],s=a("8366"),r=a("fcdb"),o=a("ba89"),l=a("ef84"),c=a("565b"),u=a("795e"),d=a("9ff5"),h={name:"VCharts",components:{VHistogram:c["default"],Statistics:s["default"],VFunnel:u["default"],VGauge:d["default"],VPie:r["default"],Ring:o["default"],VLine:l["default"]}},f=h,m=a("2877"),p=Object(m["a"])(f,i,n,!1,null,null,null);e["default"]=p.exports},ba89:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box_card"},[e("div",{staticClass:"box_card_border"},[e("span",{staticClass:"box_card_title"},[t._v("空心圆环")]),e("el-row",{attrs:{gutter:20}},[e("div",{staticClass:"mg-top"},[e("ve-ring",{staticClass:"ve-ring",attrs:{settings:{roseType:"radius"},height:"370px",data:t.scaleData,colors:t.colors}}),e("div",{staticClass:"ring-detailed"},t._l(t.scaleData.rows,(function(a,i){return e("div",{key:i},[e("div",[e("span",{style:{color:t.colors[i]}},[t._v("●")]),e("span",[t._v(" "+t._s(a["类目"]))])]),e("span",[t._v("￥"+t._s(a["金额"]))])])})),0)],1)])],1)])},n=[],s={components:{},data:function(){return{colors:["#F141AF","#F85E1F","#9830FA","#0C99FD","#25D9B4","#1AA2FC"],scaleData:{columns:["类目","金额"],rows:[{"类目":"安心蔬菜","金额":1393},{"类目":"时令水果","金额":3530},{"类目":"乳品早点","金额":2923},{"类目":"酒水饮料","金额":1723},{"类目":"速冻食品","金额":3792},{"类目":"其他","金额":4593}]}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},r=s,o=(a("fe9b"),a("2877")),l=Object(o["a"])(r,i,n,!1,null,"652b1720",null);e["default"]=l.exports},c87e:function(t,e,a){"use strict";a("dd54")},c90c:function(t,e,a){},dc31:function(t,e,a){"use strict";a("f1fd")},dd54:function(t,e,a){},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(a);)a=a.replace(n,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,n="webkit moz ms o".split(" "),s=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=s=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=s=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,l=0;l<n.length&&(!s||!r);l++)o=n[l],e.requestAnimationFrame=s=s||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];s&&r||(e.requestAnimationFrame=s=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),n=window.setTimeout((function(){t(e+a)}),a);return i=e+a,n},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=s,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,i){var n,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(n=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),i){var l=Object.create(o.computed||null);Object.keys(i).forEach((function(t){var e=i[t];l[t]=function(){return e}})),o.computed=l}return{esModule:n,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},ef84:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box_card"},[e("div",{staticClass:"box_card_border"},[e("span",{staticClass:"box_card_title"},[t._v("折线图")]),e("el-row",{attrs:{gutter:20}},[e("div",{staticClass:"right"},[e("el-button-group",{staticStyle:{height:"20px"}},[e("el-button",{attrs:{type:0==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(0)}}},[t._v("近七天")]),e("el-button",{attrs:{type:1==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(1)}}},[t._v("本月")]),e("el-button",{attrs:{type:2==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(2)}}},[t._v("本年")])],1)],1),e("div",{staticClass:"mg-top"},[0==t.index||1==t.index?e("ve-line",{attrs:{height:"350px",data:t.chartData[t.index],extend:t.chartExtend[t.index]}}):e("ve-line",{attrs:{height:"350px",data:t.chartData[t.index]}})],1)])],1)])},n=[],s={components:{},data:function(){return{index:0,chartExtend:[{series:{smooth:!1},color:["#E4004F","#64C9FA"]},{series:{smooth:!1,step:"middle"}}],chartData:[{columns:["日期","销售额-1季度","销售额-2季度"],rows:[{"日期":"1月1日","销售额-1季度":1523,"销售额-2季度":3523},{"日期":"1月2日","销售额-1季度":3533,"销售额-2季度":1232},{"日期":"1月3日","销售额-1季度":2523,"销售额-2季度":9768},{"日期":"1月4日","销售额-1季度":4588,"销售额-2季度":5252},{"日期":"1月5日","销售额-1季度":5632,"销售额-2季度":2536},{"日期":"1月6日","销售额-1季度":6773,"销售额-2季度":4454}]},{columns:["日期","销售额-1季度","销售额-2季度"],rows:[{"日期":"1月1日","销售额-1季度":2523,"销售额-2季度":1523},{"日期":"1月2日","销售额-1季度":4933,"销售额-2季度":1232},{"日期":"1月3日","销售额-1季度":9523,"销售额-2季度":3768},{"日期":"1月4日","销售额-1季度":7588,"销售额-2季度":3252},{"日期":"1月5日","销售额-1季度":5632,"销售额-2季度":2536},{"日期":"1月6日","销售额-1季度":6773,"销售额-2季度":4454}]},{columns:["支付方式","占比"],rows:[{"支付方式":"小程序","占比":25},{"支付方式":"IOS客户端","占比":39},{"支付方式":"安卓客户端","占比":50},{"支付方式":"H5移动端","占比":10},{"支付方式":"PC端","占比":5}]}]}},methods:{showData:function(t){this.index=t}}},r=s,o=(a("dc31"),a("2877")),l=Object(o["a"])(r,i,n,!1,null,"4f2bef6e",null);e["default"]=l.exports},f1fd:function(t,e,a){},fcdb:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box_card"},[e("div",{staticClass:"box_card_border"},[e("span",{staticClass:"box_card_title"},[t._v("实心饼图")]),e("el-row",{attrs:{gutter:20}},[e("div",{staticClass:"right"},[e("el-button-group",{staticStyle:{height:"20px"}},[e("el-button",{attrs:{type:0==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(0)}}},[t._v("近七天")]),e("el-button",{attrs:{type:1==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(1)}}},[t._v("本月")]),e("el-button",{attrs:{type:2==t.index?"primary":"",size:"mini"},on:{click:function(e){return t.showData(2)}}},[t._v("本年")])],1)],1),e("div",{staticClass:"mg-top"},[0==t.index?e("ve-pie",{attrs:{height:"350px",data:t.chartData[t.index],settings:{roseType:"area"}}}):1==t.index?e("ve-pie",{attrs:{height:"350px",data:t.chartData[t.index],settings:{roseType:"radius"}}}):e("ve-pie",{attrs:{height:"350px",data:t.chartData[t.index]}})],1)])],1)])},n=[],s={data:function(){return{index:0,chartData:[{columns:["name","proportion"],rows:[{name:"支付宝",proportion:35},{name:"微信",proportion:39},{name:"余额",proportion:26}]},{columns:["支付方式","占比"],rows:[{"支付方式":"支付宝","占比":35},{"支付方式":"微信","占比":39},{"支付方式":"余额","占比":26}]},{columns:["支付方式","占比"],rows:[{"支付方式":"小程序","占比":25},{"支付方式":"IOS客户端","占比":39},{"支付方式":"安卓客户端","占比":50},{"支付方式":"H5移动端","占比":10},{"支付方式":"PC端","占比":5}]}]}},mounted:function(){var t=this;setTimeout((function(){t.chartData[0].rows[2].proportion=80;var e=t.chartData[0].rows;t.chartData[0].rows=[],t.$nextTick((function(){t.chartData[0].rows=e}))}),5e3)},methods:{showData:function(t){this.index=t}}},r=s,o=(a("c87e"),a("2877")),l=Object(o["a"])(r,i,n,!1,null,"1085a54e",null);e["default"]=l.exports},fe9b:function(t,e,a){"use strict";a("3399")}}]);