(this["webpackJsonpworkday-schedule-exporter"]=this["webpackJsonpworkday-schedule-exporter"]||[]).push([[0],{15:function(e,t){},23:function(e,t,n){},30:function(e,t){},31:function(e,t){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(16),s=n.n(c),i=(n(23),n(12)),o=n.n(i),l=n(17),u=n(18),d=n(4),h=n(5),p=n(13),f=n(3),j=n.n(f),v=n(9),b=n.n(v),O={SELECTING:"",SUCCESS:"File Successfully Uploaded! Downloading...",ERROR:"An Unexpected Error Occured: Check that the spreadsheet is a valid schedule"},D={DATES:{A:["2021-08-25","2021-10-13"],B:["2021-10-20","2021-12-10"],C:["2022-01-25","2022-03-04"],D:["2022-03-14","2022-05-03"]},SPECIAL_SCHEDULES:{"2021-8-25":"MO","2021-1-12":"MO","2021-5-3":"FR"}},S={M:"MO",T:"TU",W:"WE",R:"TH",F:"FR"},x=function(){function e(){Object(d.a)(this,e)}return Object(h.a)(e,null,[{key:"load",value:function(e,t){var n=this,r=new FileReader,a=!!r.readAsBinaryString;r.onload=function(e){var r=e.target.result,c=j.a.read(r,{type:a?"binary":"array"}),s=c.SheetNames[0],i=c.Sheets[s];n.convert(i,t)},a?r.readAsBinaryString(e):r.readAsArrayBuffer(e)}},{key:"convert",value:function(e,t){e["!ref"]="L16";for(var n=null,r=j.a.utils.decode_range("A1:K50"),a=4+r.s.r;a<r.e.r;a++)if(null!=e[j.a.utils.encode_cell({r:a,c:0})]){var c=e[j.a.utils.encode_cell({r:a,c:0})].v,s=e[j.a.utils.encode_cell({r:a,c:1})].v,i=e[j.a.utils.encode_cell({r:a,c:5})].v,o=e[j.a.utils.encode_cell({r:a,c:6})].v;if(null!=c){for(var l=c[c.indexOf("Term")-2],u=D.DATES[l],d=o.split(" | "),h=d[0].split("-"),f=0;f<h.length;f++)h[f]=S[h[f]];var v=d[1].split(" - "),x=b()(u[0]+" "+v[0],"YYYY-MM-DD h:m A"),g=b()(u[0]+" "+v[1],"YYYY-MM-DD h:m A"),y=b()(u[1]+" "+v[1],"YYYY-MM-DD h:m A"),E={title:s,location:d[2],description:i,start:new Date(x.format()),end:new Date(g.format()),recurrence:{frequency:"WEEKLY",weekdays:h,end:new Date(y.format())}};null==n?n=new p.ICalendar(E):n.addEvent(new p.ICalendar(E))}}n?(n.download("Workday Schedule.ics"),t(O.SUCCESS)):t(O.ERROR)}}]),e}(),g=n(2),y=n(8),E=n(7),m=(n(33),n(0)),C=function(e){Object(y.a)(n,e);var t=Object(E.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={counter:0},r.onDragEnter=r.onDragEnter.bind(Object(g.a)(r)),r.onDragLeave=r.onDragLeave.bind(Object(g.a)(r)),r.onDrop=r.onDrop.bind(Object(g.a)(r)),r}return Object(h.a)(n,[{key:"suppress",value:function(e){e.stopPropagation(),e.preventDefault()}},{key:"onDragEnter",value:function(e){this.suppress(e),this.setState({counter:this.state.counter+1})}},{key:"onDragLeave",value:function(e){this.suppress(e),this.setState({counter:this.state.counter-1})}},{key:"onDrop",value:function(e){this.suppress(e);var t=e.dataTransfer.files;t&&t[0]&&(this.setState({counter:0}),this.props.handleFile(t[0]))}},{key:"render",value:function(){return Object(m.jsx)("div",{onDrop:this.onDrop,onDragEnter:this.onDragEnter,onDragLeave:this.onDragLeave,onDragOver:this.suppress,className:"FileInputDragDrop"+(0===this.state.counter?"":" active"),children:this.props.children})}}]),n}(a.a.Component),k=["xlsx","xlsb","xlsm","xls","xml","csv","txt","ods","fods","uos","sylk","dif","dbf","prn","qpw","123","wb*","wq*","html","htm"].map((function(e){return"."+e})).join(","),w=(n(35),function(e){Object(y.a)(n,e);var t=Object(E.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).handleChange=r.handleChange.bind(Object(g.a)(r)),r}return Object(h.a)(n,[{key:"handleChange",value:function(e){var t=e.target.files;t&&t[0]&&this.props.handleFile(t[0])}},{key:"render",value:function(){return Object(m.jsxs)("form",{className:"FileInputButton",children:[Object(m.jsx)("label",{htmlFor:"file",children:this.props.children}),Object(m.jsx)("input",{type:"file",id:"file",accept:k,onChange:this.handleChange})]})}}]),n}(a.a.Component));n(36);var A=function(){var e=Object(r.useState)(O.SELECTING),t=Object(u.a)(e,2),n=t[0],a=t[1],c=function(e){s(e)},s=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.load(t,a);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(C,{handleFile:function(e){return c(e)},children:Object(m.jsx)("p",{children:"Drop to Upload"})}),Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("h1",{children:"Workday Schedule Exporter"}),Object(m.jsx)("p",{children:"Upload an .XLSX or .CSV spreadsheet and convert it to an .ICS"})]}),Object(m.jsx)(w,{handleFile:function(e){return c(e)},children:"Select File"}),Object(m.jsx)("p",{children:n})]})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.eed858a2.chunk.js.map