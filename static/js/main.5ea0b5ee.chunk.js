(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(7),a=n.n(s),i=n(2),o=n(3),h=n(5),l=n(4),d=n(0),j=function(e){var t=e.name,n=e.email,r=e.id;return Object(d.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(r,".png?size=200x200"),alt:"robots"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:n})]})]})},b=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},u=function(e){e.searchField;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},O=function(e){return Object(d.jsx)("div",{style:{margin:"10px",padding:"10px",overflowY:"scroll",border:"2px solid #000",height:"70vh"},children:e.children})},p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("div",{className:"tc",children:Object(d.jsx)("h1",{className:"h1",children:"Oops, something went wrong!"})}):this.props.children}}]),n}(r.Component),m=(n(13),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(u,{searchChange:this.onSearchChange}),Object(d.jsx)(O,{children:Object(d.jsx)(p,{children:Object(d.jsx)(b,{robots:r})})})]}):Object(d.jsx)("div",{className:"tc",children:Object(d.jsx)("h1",{className:"f1",children:"Loading..."})})}}]),n}(r.Component));n(14),n(15);a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5ea0b5ee.chunk.js.map