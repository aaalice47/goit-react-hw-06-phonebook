(this.webpackJsonpaaalice47=this.webpackJsonpaaalice47||[]).push([[0],{12:function(t,e,n){t.exports={enter:"Slide_enter__bPpln",enterActive:"Slide_enterActive__2fBoN",exit:"Slide_exit__cINaf",exitActive:"Slide_exitActive__3qo3z"}},14:function(t,e,n){t.exports={enter:"Filter.pop_enter__3nAM6",enterActive:"Filter.pop_enterActive__1jf0z",exit:"Filter.pop_exit__2sorj",exitActive:"Filter.pop_exitActive__33ckJ"}},18:function(t,e,n){t.exports={button:"ContactList_button__1RuFy",list:"ContactList_list__2T7aG"}},23:function(t,e,n){t.exports={filter:"Filter_filter__1E5tH"}},24:function(t,e,n){t.exports={app:"App_app__1IksY"}},25:function(t,e,n){t.exports={container:"Message_container__1oZBM"}},29:function(t,e,n){t.exports=n(38)},38:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),i=n(26),l=n(7),s=n(9),u=n(10),m=n(15),p=n(11),d=n(16),f=n(22),_=n.n(f),b=n(39),h=n(8),C=n(4),E=n.n(C),v=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(t){n.setState(Object(h.a)({},t.target.name,t.target.value))},n.handleSubmit=function(t){t.preventDefault(),n.state.name&&n.state.number&&n.props.onAddContact(Object(l.a)({},n.state)),n.clearState()},n.clearState=function(){n.setState({name:"",number:""})},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:E.a.ContactForm,onSubmit:this.handleSubmit},c.a.createElement("label",{htmlFor:"name",className:E.a.label},"Name",c.a.createElement("input",{id:"name",className:E.a.input1,type:"text",name:"name",value:e,onChange:this.handleChange})),c.a.createElement("label",{htmlFor:"number"},"Number",c.a.createElement("input",{pattern:"[0-9]+$",id:"number",className:E.a.input2,type:"number",name:"number",value:n,onChange:this.handleChange})),c.a.createElement("button",{className:E.a.button,type:"submit"},"Add Contact"))}}]),e}(a.Component),x=n(23),g=n.n(x),F=function(t){var e=t.onChangeFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{htmlFor:"filter"},"Find contacts by name",c.a.createElement("input",{id:"filter",className:g.a.filter,type:"text",name:"filter",onChange:e})))},y=n(18),A=n.n(y),S=n(40),N=n(12),O=n.n(N),j=function(t){var e=t.contacts,n=t.onDeleteContact;return c.a.createElement(S.a,{component:"ul",className:A.a.list},e.map((function(t){var e=t.id,a=t.name,r=t.number;return c.a.createElement(b.a,{key:e,timeout:250,unmountOnExit:!0,classNames:O.a},c.a.createElement("li",{key:e},c.a.createElement("button",{className:A.a.button,type:"button",onClick:function(){return n(e)}},"Delete"),a,": ",r))})))},k=n(24),w=n.n(k),L=function(){return c.a.createElement("h1",null,"Phonebook")},M=n(25),D=n.n(M),I=function(){return c.a.createElement("div",{className:D.a.container},c.a.createElement("p",null,"Contact already exists!"))},J=n(14),K=n.n(J),z=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",didMount:!1,contactExists:!1},n.filterContacts=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},n.changeFilter=function(t){n.setState({filter:t.target.value})},n.isAlreadyAdded=function(t,e){return e.find((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}))},n.addContact=function(t){var e=n.state.contacts,a=Object(l.a)({},t,{id:_()()});n.isAlreadyAdded(t,e)?n.setState((function(t){return{contactExists:!t.contactExists}}),(function(){return setTimeout((function(){n.setState((function(t){return{contactExists:!t.contactExists}}))}),1e3)})):n.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[a])}}))},n.deleteContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&t.length>0&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,a=t.didMount,r=t.contactExists,o=this.filterContacts(n,e);return c.a.createElement("div",{className:w.a.app},c.a.createElement(b.a,{in:a,timeout:250,classNames:O.a,appear:!0},c.a.createElement(L,null)),c.a.createElement(v,{onAddContact:this.addContact}),n.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Contacts"),c.a.createElement(b.a,{in:n.length>1,timeout:250,classNames:K.a,unmountOnExit:!0},c.a.createElement(F,{onChangeFilter:this.changeFilter})),c.a.createElement(j,{contacts:o,onDeleteContact:this.deleteContact})),c.a.createElement(b.a,{in:r,timeout:250,classNames:K.a,unmountOnExit:!0},c.a.createElement(I,null)))}}]),e}(a.Component);o.a.render(c.a.createElement(z,null),document.getElementById("root"))},4:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1zvAA",label:"ContactForm_label__378f8",button:"ContactForm_button__1MLZK",input1:"ContactForm_input1__2gn4K",input2:"ContactForm_input2__-FHK5"}}},[[29,1,2]]]);
//# sourceMappingURL=main.34763bde.chunk.js.map