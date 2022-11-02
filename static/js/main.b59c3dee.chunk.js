(this["webpackJsonpcocktail-bar"]=this["webpackJsonpcocktail-bar"]||[]).push([[0],{11:function(e,t,a){e.exports={grid:"CardAPI_grid__1FKc8"}},16:function(e,t,a){},2:function(e,t,a){e.exports={card:"Card_card__26voZ",card_image:"Card_card_image__2nfQf",shadow:"Card_shadow__dXRnc",actions:"Card_actions__2aaga",like_button:"Card_like_button__3Xlg0",click_like_button:"Card_click_like_button__RPVrN",click_delete_button:"Card_click_delete_button__15W9r",delete_button:"Card_delete_button__278h_",card_list:"Card_card_list__1h2SV"}},22:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),n=a(5),r=a.n(n),d=(a(16),a(4)),s=a.n(d),l=a(1),o=function(){return Object(l.jsx)("div",{className:s.a.headbar,children:Object(l.jsx)("div",{className:s.a.module,children:Object(l.jsx)("div",{className:s.a.logo,children:Object(l.jsx)("h1",{className:s.a.title,children:"cocktails"})})})})},A=a(10),j=a(11),k=a.n(j),b=a(2),_=a.n(b),u=a(6),h=Object(u.b)({name:"cocktails",initialState:{drinks:[]},reducers:{addCocktailsToStore:function(e,t){e.drinks=t.payload},likeCocktail:function(e,t){var a=e.drinks.findIndex((function(e){return e.idDrink===t.payload}));e.drinks[a].liked=!e.drinks[a].liked},removeCocktail:function(e,t){e.drinks=e.drinks.filter((function(e){return e.idDrink!==t.payload}))}}}),m=h.actions,O=m.addCocktailsToStore,x=m.likeCocktail,f=m.removeCocktail,g=function(e){return e.cocktails.drinks},C=h.reducer,v=a(3),w=function(e){var t=Object(v.b)();return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:_.a.card,children:[Object(l.jsxs)("div",{className:_.a.card_image,children:[Object(l.jsx)("img",{src:e.data.strDrinkThumb,alt:e.data.strDrink}),Object(l.jsx)("div",{className:_.a.shadow}),Object(l.jsxs)("div",{className:_.a.actions,children:[Object(l.jsx)("div",{className:e.data.liked?_.a.like_button+" "+_.a.liked:_.a.like_button,children:Object(l.jsx)("button",{className:e.data.liked?_.a.click_like_button+" "+_.a.liked:_.a.click_like_button,onClick:function(){return t(x(e.data.idDrink))},children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAALpQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8hwkwQAAAD50Uk5TAAIhYomTeUAHCGEgCV/U//WXGxyY9tNegfrX2IApq6rj+fPykY8fkv7DxDg3Kta8/b4NdenqBEHCRQX8lETtSTt0AAAAwElEQVR4nK2SxxKCMBRFQ6RYkKgIGhEFC8WK2EX+/7dMiIwImXHjXb05Z5F57waAv0aANVGSlToADUWWxGZLYFxta4ik0+3pfYNO5kDNxBAjlpH1HvCYcttAlRg2EZMqR2hKhMMTDhEuT7hEzHhiToTGEyYRC55YEuHhKsceXcQPyjzws81hWBYryI61Lr2vbfLzbndFbtmfw3v7KMfRARYriY8nxs9y/F3W5XqjPLw/Kj3qfpI8dW7Fafr7GwDwAsY4GZwQppW3AAAAAElFTkSuQmCC",alt:"Like"})})}),Object(l.jsx)("div",{className:_.a.delete_button,children:Object(l.jsx)("button",{className:_.a.click_delete_button,onClick:function(){return t(f(e.data.idDrink))},children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB5QTFRFAAAA////////////////////////////////////JHyblQAAAAp0Uk5TADmq1eP/HCsOv4J61VIAAAA0SURBVHicY2DACxiVlASgTGNjk9BQZ2NjKAcCMHUkKYGBGphTGgoG4YOe0wnxzgz8oYEEAOeHK8Qr6kBaAAAAAElFTkSuQmCC",alt:"Delete"})})})]})]}),Object(l.jsx)("div",{className:_.a.card_list,children:Object(l.jsx)("h3",{children:e.data.strDrink})})]})})};var p=function(){var e=Object(c.useState)(null),t=Object(A.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(!1),r=Object(A.a)(n,2),d=r[0],s=r[1],o=Object(v.c)(g),j=Object(v.b)();return Object(c.useEffect)((function(){fetch("https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail").then((function(e){return e.json()})).then((function(e){s(!0),j(O(e.drinks))}),(function(e){s(!0),i(e)}))}),[]),a?Object(l.jsxs)("div",{children:[" Error: ",a.message," "]}):d?Object(l.jsx)("div",{className:k.a.grid,children:o.map((function(e){return Object(l.jsx)(w,{data:e},e.strDrink)}))}):Object(l.jsx)("div",{children:" Loading... "})};var N=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsx)(p,{})]})},E=Object(u.a)({reducer:{cocktails:C}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(v.a,{store:E,children:Object(l.jsx)(N,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){e.exports={headbar:"Header_headbar__2X8U5",title:"Header_title__2zH3K",module:"Header_module__3VNBO",logo:"Header_logo__2Ta-m"}}},[[22,1,2]]]);
//# sourceMappingURL=main.b59c3dee.chunk.js.map