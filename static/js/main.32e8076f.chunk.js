(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],[,function(t,e,a){t.exports={list__statistic:"Statistics_list__statistic__3zYcb",list__statistic__el:"Statistics_list__statistic__el__1RJEm"}},,function(t,e,a){t.exports={wrapper__btn:"FeedbackOptions_wrapper__btn__2lAYS",btn:"FeedbackOptions_btn__37AzK"}},,function(t,e,a){t.exports={title__h1:"Section_title__h1__24S61",title__h3:"Section_title__h3__qaguA"}},,,,,function(t,e,a){t.exports={wrapper:"FeedBack_wrapper__38f8O"}},function(t,e,a){t.exports={span__warning:"Notification_span__warning__3oiup"}},,,,,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),n=a(2),c=a.n(n),i=a(6),l=a.n(i),r=(a(19),a(20),a(7)),_=a(8),o=a(9),j=a(13),b=a(12),d=a(10),u=a.n(d),p=a(1),h=a.n(p);function O(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,i=t.percentage;return Object(s.jsxs)("ul",{className:h.a.list__statistic,children:[Object(s.jsxs)("li",{className:h.a.list__statistic__el,children:[Object(s.jsx)("span",{children:"Good : "}),Object(s.jsx)("span",{className:h.a.span__statistic,children:e})]}),Object(s.jsxs)("li",{className:h.a.list__statistic__el,children:[Object(s.jsx)("span",{children:"Neutral : "}),Object(s.jsx)("span",{className:h.a.span__statistic,children:a})]}),Object(s.jsxs)("li",{className:h.a.list__statistic__el,children:[Object(s.jsx)("span",{children:"Bad : "}),Object(s.jsx)("span",{className:h.a.span__statistic,children:n})]}),Object(s.jsxs)("li",{className:h.a.list__statistic__el,children:[Object(s.jsx)("span",{children:"Total : "}),Object(s.jsx)("span",{className:h.a.span__statistic,children:c})]}),Object(s.jsxs)("li",{className:h.a.list__statistic__el,children:[Object(s.jsx)("span",{children:"Positive statistic : "}),Object(s.jsxs)("span",{className:h.a.span__statistic,children:[i,"%"]})]})]})}var x=a(3),m=a.n(x);function f(t){var e=t.listenerOnClick;return Object(s.jsxs)("div",{className:m.a.wrapper__btn,children:[Object(s.jsx)("button",{className:m.a.btn,type:"button",name:"good",onClick:e,children:"Good"}),Object(s.jsx)("button",{className:m.a.btn,type:"button",name:"neutral",onClick:e,children:"Neutral"}),Object(s.jsx)("button",{className:m.a.btn,type:"button",name:"bad",onClick:e,children:"Bad"})]})}var g=a(5),N=a.n(g);function v(t){var e=t.title,a=t.flag,n=t.children,c=function(){return a?Object(s.jsx)("h1",{className:N.a.title__h1,children:e}):Object(s.jsx)("h3",{className:N.a.title__h3,children:e})};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(c,{}),n]})}var k=a(11),w=a.n(k);function F(){return Object(s.jsx)("span",{className:w.a.span__warning,children:"Non feedbacks given "})}var S=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(_.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0,total:0,percentage:0},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPercentage=function(){var e=t.state.good,a=t.countTotalFeedback();return a?Math.ceil(100/a*e):0},t.handleFeedback=function(e){var a=e.target.name;t.setState(Object(r.a)({},a,t.state[a]+1))},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad,c=this.countTotalFeedback(),i=this.countPercentage();return Object(s.jsxs)("div",{className:u.a.wrapper,children:[Object(s.jsx)(v,{title:"Please leave feedback",flag:!0,children:Object(s.jsx)(f,{listenerOnClick:this.handleFeedback})}),Object(s.jsx)(v,{title:"Statistics",flag:!1,children:c>0?Object(s.jsx)(O,{good:e,neutral:a,bad:n,total:c,percentage:i}):Object(s.jsx)(F,{})})]})}}]),a}(n.Component);function y(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(S,{})})}l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.32e8076f.chunk.js.map