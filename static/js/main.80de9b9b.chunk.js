(this.webpackJsonppathfinder=this.webpackJsonppathfinder||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);for(var s=e(1),r=e.n(s),o=e(3),i=e.n(o),a=(e(9),e(4)),c=e(0),u=function(t){return!0===t.start?Object(c.jsx)("div",{className:"node",style:{backgroundColor:"red",borderColor:"grey"}}):!0===t.end?Object(c.jsx)("div",{className:"node",style:{backgroundColor:"blue",borderColor:"grey"}}):!0===t.close&&!1===t.path&&!1===t.seen?Object(c.jsx)("div",{className:"node close"}):!0===t.open?Object(c.jsx)("div",{className:"node open"}):!0===t.path?Object(c.jsx)("div",{className:"node path"}):Object(c.jsx)("div",{className:"node"})},d=[],f=function(t,n){return 10*(Math.abs(t.x-n.x)+Math.abs(t.y-n.y))},l=function(t){return t.gCost+t.hCost},p=function(){var t=!1;return d.forEach((function(n){n.isOpen&&(t?(l(n)<l(t)||l(n)===l(t)&&n.hCost<=t.hCost)&&(t=n):t=n)})),t},h=function(t,n){for(var e,s=[],r=-1;r<=1;r++)for(var o=function(o){0===r&&0===o||(-1===r?e=t.find((function(t){return n.id+o-10===t.id})):0===r?e=t.find((function(t){return n.id+o===t.id})):1===r&&(e=t.find((function(t){return n.id+10+o===t.id})))),e&&e.x>=0&&e.y>=0&&e.x<11&&e.y<11&&(0===r&&0===o||e.isClosed||s.push(e))},i=-1;i<=1;i++)o(i);return s},b=[],C=1,x=9;x>=0;x--)for(var j=0;j<=9;j++)b.push({id:C,x:j,y:x,gCost:0,hCost:0,parent:null,isOpen:!1,isClosed:!1,seen:!1,start:!1,end:!1,openListIndex:0,path:!1}),C++;var g=function(){var t=Object(s.useRef)(),n=[],e=Object(s.useState)(b),o=Object(a.a)(e,2),i=o[0],l=o[1],C=function(n,e){var s=t.current,r=Math.floor((n.clientX-s.offsetLeft)/(s.clientWidth/10)),o=Math.abs(Math.ceil((n.clientY-s.offsetTop-s.clientWidth)/(s.clientWidth/10)));if(0===n.button&&0===e){var a=function(t,n,e){return e.map((function(e){return!e.start||e.x===t&&e.y===n||(e.start=!1),e.x===t&&e.y===n&&(e.start=!e.start,e.end&&(e.end=!1),e.isClosed&&(e.isClosed=!1)),e}))}(r,o,i);l(a)}else if(2===n.button&&1===e){n.preventDefault();var c=function(t,n,e){return e.map((function(e){return!e.end||e.x===t&&e.y===n||(e.end=!1),e.x===t&&e.y===n&&(e.end=!e.end,e.isClosed&&(e.isClosed=!1),e.start&&(e.start=!1)),e}))}(r,o,i);l(c)}else if(1===n.button&&0===e){var u=function(t,n,e){return e.map((function(e){return e.x===t&&e.y===n&&(e.isClosed=!e.isClosed,e.end&&(e.end=!1),e.start&&(e.start=!1)),e}))}(r,o,i);l(u)}};return i.forEach((function(t){n.push(Object(c.jsx)(u,{x:t.x,y:t.y,start:t.start,end:t.end,close:t.isClosed,open:t.isOpen,path:t.path,seen:t.seen},t.id))})),Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)("div",{className:"grid",onMouseDown:function(t){return C(t,0)},onContextMenu:function(t){C(t,1)},ref:t,children:n}),Object(c.jsx)("button",{className:"btn-lg btn-primary",onClick:function(){var t=function(t){var n,e,s=100,r=[],o=t.find((function(t){return!0===t.start})),i=t.find((function(t){return!0===t.end}));o.gCost=0,o.hCost=f(i,o),n=o;do{if(h(t,n).forEach((function(t){var e;t.isOpen?t.gCost>n.gCost+10*f(n,t)&&(t.gCost=n.gCost+10*f(n,t),t.parent=n):((e=t).isOpen=!0,d.push(e),t.hCost=10*f(t,i),t.gCost=14*f(t,n),t.parent=n,t.openListIndex=d.length,d.push(t))})),(e=n).seen=!0,e.isOpen=!1,e.isClosed=!0,d.splice(n.openListIndex,1),(n=p())===i){for(;n.parent;)r.push(n),n.path=!0,n=n.parent;return r.push(n),n.path=!0,console.log(d),r}s--}while(n&&0!==s);return r}(i);0===t.length&&alert("no path");var n=[];i.forEach((function(e){var s=t.find((function(t){return t.id===e.id}));s?n.push(s):n.push(e),s=!1})),l(n)},style:{marginTop:"30px"},children:"Start"})]})},v=function(){return Object(c.jsx)(g,{})},O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,12)).then((function(n){var e=n.getCLS,s=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;e(t),s(t),r(t),o(t),i(t)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),O()},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.80de9b9b.chunk.js.map