(this["webpackJsonpdropshipping-calculator"]=this["webpackJsonpdropshipping-calculator"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n(5),i=n(1),r=n(3),j=n(6),a=(n(15),n(0));function l(){var e=Object(s.useState)({productCost:58,shippingCost:5,transactionFee:.03,fixedCosts:100,sellingPrice:75,numberSold:10,productExpenses:0,shippingExpenses:0,transactionExpenses:0,totalExpenses:0,revenue:0,profit:0}),t=Object(j.a)(e,2),n=t[0],c=t[1];function l(e){var t;e.preventDefault();var s=n.productCost*n.numberSold,j=n.shippingCost*n.numberSold,a=Math.ceil(n.sellingPrice*n.numberSold*n.transactionFee),l=Math.ceil(s+j+a+n.fixedCosts),h=n.sellingPrice*n.numberSold,d=Math.ceil(h-l);c(Object(r.a)(Object(r.a)({},n),{},(t={},Object(i.a)(t,e.target.name,e.target.value),Object(i.a)(t,"productExpenses",s),Object(i.a)(t,"shippingExpenses",j),Object(i.a)(t,"transactionExpenses",a),Object(i.a)(t,"totalExpenses",l),Object(i.a)(t,"revenue",h),Object(i.a)(t,"profit",d),t)))}return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{className:"table-input",children:Object(a.jsxs)("table",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Product Cost"}),Object(a.jsx)("th",{children:"Shipping Cost"}),Object(a.jsx)("th",{children:"Transaction Fee"}),Object(a.jsx)("th",{children:"Fixed Costs"}),Object(a.jsx)("th",{children:"Selling Price"}),Object(a.jsx)("th",{children:"Number Sold"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"productCost",value:n.productCost,onChange:l,minLength:0,maxLength:1e8})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"shippingCost",value:n.shippingCost,onChange:l,minLength:0,maxLength:1e8})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"transactionFee",value:n.transactionFee,onChange:l,minLength:0,maxLength:1e8})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"fixedCosts",value:n.fixedCosts,onChange:l,minLength:0,maxLength:1e8})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"sellingPrice",value:n.sellingPrice,onChange:l,minLength:0,maxLength:1e8})}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"number",name:"numberSold",value:n.numberSold,onChange:l,minLength:0,maxLength:1e8})})]})]})}),Object(a.jsx)("div",{className:"table",children:Object(a.jsxs)("table",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Product Expenses"}),Object(a.jsx)("th",{children:"Shipping Expenses"}),Object(a.jsx)("th",{children:"Transaction Expenses"}),Object(a.jsx)("th",{children:"Total Expenses"}),Object(a.jsx)("th",{children:"Revenue"}),Object(a.jsx)("th",{children:"Profit"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:n.productExpenses}),Object(a.jsx)("td",{children:n.shippingExpenses}),Object(a.jsx)("td",{children:n.transactionExpenses}),Object(a.jsx)("td",{children:n.totalExpenses}),Object(a.jsx)("td",{children:n.revenue}),Object(a.jsx)("td",{children:n.profit})]})]})})]})})})}var h=document.getElementById("root");Object(c.createRoot)(h).render(Object(a.jsx)(s.StrictMode,{children:Object(a.jsx)(l,{})}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f715be96.chunk.js.map