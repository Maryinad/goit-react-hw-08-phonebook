"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[494],{2494:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,i,a,o,s=t(168),c=t(6444),l=c.ZP.h2(r||(r=(0,s.Z)(["\n  text-align: center;\n  display: block;\n  font-size: 46px;\n  color: #2c3a47;\n  font-weight: 700;\n"]))),d=c.ZP.h2(i||(i=(0,s.Z)(["\n  text-align: center;\n  display: block;\n  font-size: 46px;\n  color: #2c3a47;\n  font-weight: 700;\n"]))),u=c.ZP.li(a||(a=(0,s.Z)(["\n  text-align: center;\n  display: block;\n  font-size: 26px;\n  color: #2c3a47;\n  font-weight: 700;\n"]))),h=c.ZP.button(o||(o=(0,s.Z)(["\n  margin-top: 20px;\n  margin-left: 20px;\n  padding: 8px 16px;\n  font-size: 22px;\n  font-weight: 700;\n  background-color: #fd7272;\n  color: white;\n  border-radius: 4px;\n  border: none;\n"]))),p=t(9434),x=t(7647),m=t(184);function f(n){var e=n.name,t=n.number,r=n.id,i=(0,p.I0)();return(0,m.jsxs)(u,{children:[(0,m.jsx)("span",{children:e}),(0,m.jsxs)("span",{children:[" ",t]}),(0,m.jsx)(h,{onClick:function(){return n=r,void i((0,x._f)(n));var n},children:"Delete"})]})}var g,b,v=t(2791),Z=t(3521),j=t(6351);function w(){var n=(0,p.v9)(j.CY),e=(0,p.v9)(j.zh),t=(0,p.I0)();(0,v.useEffect)((function(){t((0,x.K2)())}),[t]);var r=(0,p.v9)(j.e1);return console.log("filteredContacts",r),(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(Z.a,{}),null!==e&&(0,m.jsx)("p",{children:"Ooops... something went wrong"}),(0,m.jsx)("ul",{children:r.length>0&&r.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(f,{id:e,name:t,number:r},e)})}))})]})}var k=c.ZP.h2(g||(g=(0,s.Z)(["\n  font-size: 36px;\n  font-weight: 700;\n  color: #fd7272;\n  text-align: center;\n"]))),y=c.ZP.input(b||(b=(0,s.Z)(["\n  align-item: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 200px;\n  min-height: 30px;\n  border: 3px solid #2c3a47;\n  min-width: 200px;\n  min-height: 30px;\n  border-radius: 4px;\n"]))),P=t(1634);function z(){var n=(0,p.I0)(),e=(0,p.v9)(j.Gd);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(k,{children:"Find contact by name"}),(0,m.jsx)(y,{type:"text",name:"filter",onChange:function(e){n((0,P.U)(e.target.value))},value:e})]})}var C,F,A,I,_,D,N=t(9439),S=c.ZP.form(C||(C=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  min-width: 300px;\n"]))),q=c.ZP.label(F||(F=(0,s.Z)(["\n  display: block;\n  font-size: 32px;\n  color: #fd7272;\n  font-weight: 700;\n"]))),E=c.ZP.label(A||(A=(0,s.Z)(["\n  display: block;\n  font-size: 32px;\n  color: #fd7272;\n  font-weight: 700;\n"]))),K=c.ZP.input(I||(I=(0,s.Z)(["\n  border: 3px solid #2c3a47;\n  min-width: 200px;\n  min-height: 30px;\n  border-radius: 4px;\n"]))),B=c.ZP.input(_||(_=(0,s.Z)(["\n  border: 3px solid #2c3a47;\n  min-width: 200px;\n  min-height: 30px;\n  border-radius: 4px;\n"]))),G=c.ZP.button(D||(D=(0,s.Z)(["\n  display: block;\n  margin-top: 20px;\n  padding: 15px 25px;\n  font-size: 22px;\n  font-weight: 700;\n  background-color: #fd7272;\n  color: white;\n  border-radius: 4px;\n  border: none;\n"])));function J(){var n=(0,p.I0)(),e=(0,p.v9)(j.Af),t=(0,v.useState)(""),r=(0,N.Z)(t,2),i=r[0],a=r[1],o=(0,v.useState)(""),s=(0,N.Z)(o,2),c=s[0],l=s[1],d=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":a(r.trim());break;case"number":l(r.trim())}},u=function(){a(""),l("")};return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(S,{onSubmit:function(t){if(t.preventDefault(),e.some((function(n){return n.name===i})))alert("Contact ".concat(i," is already exist"));else{var r={name:i,number:c};n((0,x.el)(r)),u()}},children:[(0,m.jsx)(q,{htmlFor:"",children:"Name"}),(0,m.jsx)(K,{type:"text",name:"name",onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:i,required:!0}),(0,m.jsx)(E,{htmlFor:"",children:"Number"}),(0,m.jsx)(B,{type:"tel",name:"number",onChange:d,value:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,m.jsx)(G,{type:"submit",children:"Add contact"})]})})}var L=t(8683),M=t(7689);var O=function(n,e){return function(t){var r=(0,p.v9)((function(n){return n.auth.isLoggedIn})),i=(0,p.v9)((function(n){return n.auth.isRefreshing}));return r&&!i?(0,m.jsx)(n,(0,L.Z)({},t)):(0,m.jsx)(M.Fg,{to:e})}}((function(){var n=(0,p.I0)(),e=(0,p.v9)((function(n){return n.auth.userData.name}));return(0,v.useEffect)((function(){null!==e&&n((0,x.K2)())}),[n,e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{children:"Phonebook"}),(0,m.jsx)(J,{}),(0,m.jsx)(d,{children:"Contacts"}),(0,m.jsx)(z,{}),(0,m.jsx)(w,{})]})}),"/log-in")}}]);
//# sourceMappingURL=494.fcab1a6b.chunk.js.map