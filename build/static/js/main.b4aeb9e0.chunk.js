(this.webpackJsonpamyburkecounseling=this.webpackJsonpamyburkecounseling||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(21),s=c.n(i),o=c(5),l=c(3),r=c(14);var d=function(){var e=arguments,t=this,c=Object(n.useState)(!1),a=Object(r.a)(c,2),i=a[0],s=a[1],o=Object(n.useRef)(null),l=function(){0===window.scrollY?s(!1):window.scrollY>o.current.getBoundingClientRect().bottom?s(!0):s(!1)},d=function(c){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var s=t,o=e,l=i&&!n;clearTimeout(n),n=setTimeout((function(){n=null,i||c.apply(s,o)}),a),l&&c.apply(s,o)}};return Object(n.useEffect)((function(){return window.addEventListener("scroll",d(l)),function(){window.removeEventListener("scroll",(function(){return l}))}}),[d,l]),{isSticky:i,element:o}},u=c.p+"static/media/logo.989f6963.svg",m=c(0),h=function(){return Object(m.jsx)("header",{children:Object(m.jsx)("div",{id:"banner",className:"width text-center",children:Object(m.jsxs)(o.b,{to:"/",className:"image-link",children:[Object(m.jsx)("img",{src:u,alt:"Amy Burke Counseling",id:"logo",className:"center-y",width:"550px"}),Object(m.jsx)("h1",{className:"display-hidden",children:"Amy Burke Counseling"})]})})})},j=c.p+"static/media/logomark_black.d550f920.svg",f=function(e){var t=e.sticky,c=["nav","bg-pink","text-center"];return t?c.push("sticky"):c.length=3,Object(m.jsx)("nav",{className:c.join(" "),children:Object(m.jsxs)("div",{className:"width",children:[Object(m.jsx)(o.c,{exact:!0,to:"/",activeClassName:"active",children:"home"}),Object(m.jsx)(o.c,{to:"/about",activeClassName:"active",children:"about"}),t&&Object(m.jsx)("img",{src:j,alt:"Amy Burke Counseling",title:"Amy Burke Counseling",id:"logo",width:"30"}),Object(m.jsx)(o.c,{to:"/rates",activeClassName:"active",children:"rates"}),Object(m.jsx)(o.c,{to:"/contact",activeClassName:"active",children:"contact"})]})})},b=c(9),p=function(e){var t=e.element;return Object(n.useEffect)((function(){document.title="Amy Burke Counseling"}),[]),Object(m.jsx)("section",{id:"home",ref:t,children:Object(m.jsxs)("div",{className:"width text-center",children:[Object(m.jsx)("p",{children:"Traumatic experiences and mental health difficulties can leave you feeling isolated and out of control of your own life. If you are experiencing significant distress in your life and you are not sure what to do next, I encourage you to reach out for help. Counseling can help you gain perspective, explore options you may have, and help you to feel empowered again."}),Object(m.jsxs)("div",{id:"services",children:[Object(m.jsx)(g,{icon:"user",name:"adults"}),Object(m.jsx)(g,{icon:"child",name:"children & adolescents"}),Object(m.jsx)(g,{icon:"home",name:"families"}),Object(m.jsx)(g,{icon:"users",name:"group"})]})]})})},g=function(e){return Object(m.jsxs)("div",{className:"service-icon",children:[Object(m.jsx)(b.a,{icon:e.icon,className:"t-dark-pink",size:"3x"}),Object(m.jsx)("div",{children:e.name})]})},y=c.p+"static/media/amy.a3874821.jpg",x=function(e){var t=e.element;return Object(n.useEffect)((function(){document.title="About | Amy Burke Counseling"}),[]),Object(m.jsx)("section",{id:"about",className:"content",ref:t,children:Object(m.jsxs)("div",{className:"width grid",children:[Object(m.jsx)("h2",{className:"cell s-full s-text-center m-text-left",children:"about me"}),Object(m.jsx)("div",{className:"cell s-full m-third text-center img-container",children:Object(m.jsx)("img",{src:y,alt:"Amy Burke",className:"img-about"})}),Object(m.jsxs)("div",{className:"cell s-full m-twothirds",children:[Object(m.jsx)("p",{children:"I graduated from Spring Hill College with a Bachelor\u2019s in Psychology and the University of Montevallo with a Master\u2019s in Clinical Mental Health Counseling. I am also an Associate Licensed Counselor under the supervision of Wanda Bowden, LPC-S. My specialties are working with survivors of trauma, particularly domestic violence and sexual assault, as well as a variety of mood and anxiety disorders. If you are seeking help, I am here to walk alongside you in your healing journey."}),Object(m.jsx)("div",{className:"sep"}),Object(m.jsx)("p",{children:"I believe each person is unique, therefore I use a variety of treatment approaches and techniques tailored to fit each individual\u2019s needs. I use treatment approaches including cognitive-behavioral, solution-focused, mindfulness, and humanistic approaches. I also believe in the importance of the neurobiology of trauma and incorporate coping with physiological symptoms and physical self-care."}),Object(m.jsx)("div",{className:"sep"}),Object(m.jsxs)("p",{children:["I believe counseling is a collaborative process between counselor and client. You are the expert on your life, and I have training and skills to encourage positive change. Together, I believe we can find effective ways to deal with problems in your life and promote your optimal mental health. I hope you will ",Object(m.jsx)(o.b,{to:"/contact",title:"contact me",children:"reach out"})," to see if I am the right fit for you!"]})]})]})})},O=function(e){var t=e.element;return Object(n.useEffect)((function(){document.title="Rates | Amy Burke Counseling"}),[]),Object(m.jsx)("section",{id:"rates",className:"content",ref:t,children:Object(m.jsx)("div",{className:"width",children:Object(m.jsx)("p",{className:"text-center m-text-left",children:"Currently I do not accept private insurance. I accept Medicaid and private pay, and I offer sliding scale rates. I also offer a free 15-minute phone consultation to discuss rates, answer your questions, and help you determine if I am the right fit for you."})})})},v=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){var e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAY_GvPsWB5ZeGnukWFLVb4xtN4OtQZEiA",e.id="maps_script",e.addEventListener("load",(function(){return a(!0)})),document.getElementById("maps_script")||document.body.appendChild(e)})),Object(n.useEffect)((function(){if(c&&c){var e=new window.google.maps.Map(document.getElementById("map"),{center:{lat:33.511219,lng:-86.816567},zoom:15,styles:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#959595"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]}),t=new window.google.maps.InfoWindow({content:'<div id="infoContainer" class="text-center"><a href="https://goo.gl/maps/yQ9xQrrwZA22" target="_blank">Get Directions to Amy Burke Counseling</a></div>',maxWidth:200}),n=new window.google.maps.Marker({position:e.getCenter(),title:"Amy Burke Counseling",optimized:!1,icon:{url:'data:image/svg+xml;utf-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640.25 640.25"><defs><style>.cls-1{fill:%23333333;}</style></defs><title>logomark</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M562.71,219.58a5.15,5.15,0,0,0-2.14-5.22c-16.6-9-48.37,21.35-53.35,28-11.62,4.75-23.48,9.73-35.34,14.47a4.75,4.75,0,0,0-1.89-4c-15.42-8.54-43.16,16.6-51.7,25.85-22.52,8.77-45.05,17.78-67.58,26.08-.47-.71-.71-1.42-1.18-2.13,31.77-19,62.84-38.66,93.9-58.58.95.48,2.61.48,4.74,0,8.3-1.66,20.16-8.53,26.32-14,5.93-5.21,12.81-11.61,12.81-19.91,0-1.66-1.19-4-3.08-4.51-17.55-5.45-41.26,28.46-46,37.47-29.88,19-60,38.17-90.34,56.2-.48-.48-.71-.95-1.19-1.43,10.2-9.25,20.39-18.73,30.35-28.22a7.85,7.85,0,0,0,4.27-.71c7.83-2.37,19-10.67,24.43-16.83,4.74-5.46,10.43-11.86,10.43-19.45,16.84-16.36,33.67-32.48,50.51-48.85a9.58,9.58,0,0,0,4-.71c7.82-2.37,19-10.67,24.42-16.83,5.22-5.93,11.39-12.81,10.44-21.11-.24-1.89-1.66-4-3.56-4.27-18.26-3.32-38.18,33.91-41.5,42.69-15.41,14.7-30.59,29.64-46,44.34a2.43,2.43,0,0,0-1.9-1.19c-18-3.32-37.7,33.2-41.49,42.45-9,8.54-18.26,17.07-27.51,25.37l-.24-.23c23-31.07,45.29-62.61,67.58-94.14a9.88,9.88,0,0,0,4.27-1.43c7.35-4,16.6-14.22,20.87-21.34,4-6.64,8.77-14.7,6.4-22.76-.47-1.66-2.61-3.56-4.27-3.56-16.83.24-28.69,33.2-32,46.48-22.05,31.3-44.11,62.6-67.11,93.43.24-.48.24-.95.48-1.19C361.15,244.24,381.3,198,401.46,152a13.4,13.4,0,0,0,4.27-2.37c7.35-5.93,15.88-19,19.44-27.51,3.32-8.06,7.11-18,2.85-26.56a6,6,0,0,0-5.46-3.08c-18.49,3.32-25.84,41.5-27.27,57.15-14,32.25-28,64.5-42.44,96.51,7.11-24.43,14-48.85,20.86-73.27a9.45,9.45,0,0,0,3.56-2.61c6.64-6.64,13.52-20.87,15.89-29.88,2.13-8.3,4.74-18.73-.48-26.56a6.06,6.06,0,0,0-5.69-2.37c-17.78,5.45-20.39,42.92-19.92,59.05-10.19,35.33-19.91,70.66-30.59,105.75,5-50,8.54-100.06,12.34-150.1,1.18-.47,2.37-1.89,3.79-4.5,4.74-8.07,7.35-23.48,7.35-32.73-.24-8.77-.47-19.44-7.59-25.61-1.42-1.18-4.5-1.66-6.16-.71-14,9-9.25,40.08-4.75,57.39-4,55-7.82,110.26-13.75,165-2.84-33.44-6.64-67.11-10.43-100.54a13.38,13.38,0,0,0,2.61-4.27c3.55-8.78,4-24.19,2.84-33.44-1.42-8.77-3.08-19.21-10.91-24.42-1.66-1-4.74-1.19-6.16,0-13,10.91-3.8,41.73,3.08,58.09,3.32,30.36,6.88,60.47,9.72,90.82-14.22-47.66-29.88-94.61-45-141.56a10.11,10.11,0,0,0,.47-2.85c1.43-9.24-1.66-24.66-5.21-33.19-3.32-8.07-7.59-17.79-16.37-21.11-1.89-.47-5,0-6.16,1.66-10.67,14.7,9.25,45.77,19.44,58.57,15.18,47,30.59,93.67,44.82,140.86-10.67-23.48-22.53-47-33.67-70.19.71-1.19.95-2.61,1.18-5.22.48-9.25-3.79-24.19-8.06-32.49-4-7.82-9-17.31-18-19.68-1.9-.47-5,.48-5.93,2.14-8.53,14,8.54,38.88,20.39,52.64,12.34,26.08,25.38,51.93,37.23,78.25-30.35-42.92-64.26-83.94-94.85-126.86a10.94,10.94,0,0,0-.23-2.61c-.95-9.49-7.83-23.48-13.52-30.83-5.22-7.11-11.62-15.41-21.11-16.12-1.89-.24-4.74,1.18-5.45,2.84-6.88,17.55,21.82,43.16,34.62,52.64,33.2,46.24,70,90.11,102,137.06-.24.24-.24.48-.48.48-9-9.49-18-19-27.27-28.46-3.32-8.77-11.38-19.92-17.78-25.84-5.46-5.22-12.1-11.39-19.68-12.33l-13.52-13.52a11.88,11.88,0,0,0-.71-3.56c-2.61-9-11.62-21.58-18.5-28-6.4-6.16-14-13.28-23.47-12.57-1.9.24-4.51,1.9-5,4-3.56,18,28.22,38.66,42.44,46,3.56,3.32,7.12,6.87,10.44,10.43,0,.24-.24.71-.24,1-4.74,22.76,46.95,49.32,49.09,48.85L296.88,299c-43.63-30.83-88.44-60.47-133-90.11a15.82,15.82,0,0,0-1.19-3.56c-4-8.53-14.7-19.68-22.53-24.9-7.11-5.21-15.88-11.14-25.13-9-1.9.48-4,2.61-4,4.75-1.19,19.2,36.28,35.33,50.5,39.6,40.79,27.27,81.81,54.54,121.89,82.75-6.4-3.08-13-5.92-19.45-8.77-4.26-5-12.56-10.67-18.26-13-5.45-2.37-12.09-5-18-2.37-15.88-6.88-31.77-13.52-47.66-20.16a13,13,0,0,0-2.13-3.79c-5.46-7.59-18.26-16.13-27-19.92-7.82-3.56-17.78-7.59-26.32-3.56a5.88,5.88,0,0,0-3.08,5.22c2.85,19.92,45.77,28,59,28.93,15.18,6.4,30.12,12.8,45.3,19.21,5,12.33,32.72,17.07,40.78,17.78,10.2,4.27,20.4,8.77,30.35,13.52v.71C239,298.78,180.69,287.64,122.6,275.78a16.13,16.13,0,0,0-2.85-2.85c-7.11-6.16-21.58-11.61-30.83-13.27C80.39,258,70,256.34,62.6,262c-1.66,1.18-2.84,4-1.9,5.92,7.83,20.16,58.34,16.37,66.64,14.23,51.22,10.2,102.44,20.16,153.42,32-33-1.66-65.68-2.6-98.65-3.55-.47-1.19-1.89-2.37-4-3.56-8.06-5-23.24-8.06-32.72-8.3-8.77-.24-19.21-.24-25.61,6.64-1.42,1.66-2.13,4.51-1,6.17,10.91,18.26,58.57,7.11,67.58,3.55,37,1.19,74,2.14,110.74,4.51a7.4,7.4,0,0,0,.48,1.9c-54.54,7.82-108.85,17.54-163.15,27-.71-1.19-2.13-2.14-5.22-2.85-9-2.13-24.66-1-33.67,1.66-8.3,2.37-18.49,5.46-22.52,14-1,1.9-.72,5,.94,6.17,15.65,14.23,57.39-10,65.45-16.13,45.53-8.06,91.06-16.12,136.59-23-33.44,10.67-66.64,22.06-99.83,33.44-.48-.95-1.9-1.66-4.75-2.14-8.06-1.18-21.34,1.43-28.69,4.51-7.11,2.84-15.41,6.4-18.26,14a4.76,4.76,0,0,0,1.43,5.22c14.22,10.43,46.71-12.57,54.3-19.45,38.89-13,77.78-26.56,116.9-38.65a2.94,2.94,0,0,0,1.42-.24,11.35,11.35,0,0,0,.72,1.66c-7.12,3.8-14.23,7.59-21.35,11.62-.23-1.18-1.89-1.9-5.69-1.66-8.06.48-20.39,5.69-27,10.2-6.4,4.27-13.75,9.48-14.94,17.55v.71c-21.1,12.33-42.21,24.66-63.07,37a5.36,5.36,0,0,0-6.64-.71,2.55,2.55,0,0,0-1.19.24C148,404.78,112.64,413.79,120,431.81v.47a9,9,0,0,0,3.55,5.22c13.52,14.23,36.76-17.55,44.58-26.08a5.57,5.57,0,0,0,1.19-6.41c20.87-12.33,41.5-24.42,62.36-36.51.24.47.72.71,1,.95,15.18,6.64,39.37-18,47.43-28.22,6.88-3.8,14-7.83,20.87-11.38a36.46,36.46,0,0,0,3.79,4.74c-29.88,25.37-58.81,51.93-88,78-1-.23-2.38,0-4.75.71-7.82,2.14-18.49,10.2-24.18,16.13-5,5.45-11.15,12.33-10.44,20.39.24,1.66,1.66,3.8,3.32,4,16.84,3.32,35.57-28.22,40.55-39.12,28.69-26.09,57.39-52.17,86.79-77.31a4.9,4.9,0,0,0,1.42.95c-34.38,43.87-67.34,89.16-100.3,134a8.13,8.13,0,0,0-4.51,1.42c-7.35,3.56-16.6,13-21.1,19.92-4.27,6.17-9,14-6.88,21.82a4.54,4.54,0,0,0,4,3.55c16.13.48,28.69-30.35,32.73-43.39,31.06-42.45,62.12-84.89,94.37-126.39-5.69,10.91-11.14,21.82-16.6,33a.73.73,0,0,0-.47.24c-6.88,4.27-14.94,14.94-18.73,22.05-3.32,6.88-7.36,14.94-4.51,22.53a8.21,8.21,0,0,0,1.19,1.89c-4,8.3-8.07,16.84-12.1,25.38a9.17,9.17,0,0,0-2.84,1.66c-6.41,4.74-14,15.88-17.31,23.24-2.85,6.87-6.41,15.41-3.09,22.76.72,1.42,2.85,3.08,4.51,2.85,16.36-2.38,23.48-35.81,24.9-49.09l12.8-26.32c17.08-6.64,25.14-47.66,24.66-51.46l7.12-14.23c-1.9,11.39-3.32,23-4.51,34.63C294,432.05,285.74,466,277.2,499.63l-2.13,2.13c-5.46,5.93-10.44,18.26-12.09,26.32-1.66,7.36-3.32,16.37,1.42,22.77a5.25,5.25,0,0,0,5,1.9c14.7-5.22,15.65-36,14.7-50.75,5.22-20.63,10.2-41.26,15.41-61.89-2.13,42.68-1.42,85.37,0,128.29.71,23.47.71,47.42-.23,71.13C132.08,628.86,0,489.91,0,320.12,0,143.23,143.23,0,320.12,0,496.78,0,640.25,143.23,640.25,320.12c0,176.66-143.47,320.13-320.13,320.13h-1.66c.48-13.76,1-27.27,1.19-41,.24-9,.47-18,.24-27.27-1.43-43.63-2.38-87-.48-130.18,1.42-19,2.85-38.18,4.51-57.15.95-9,2.37-18,3.79-27.27,4.74,46.95,10.67,93.9,16.6,140.62a25.61,25.61,0,0,0-1.42,2.61c-3.56,7.59-5,21.34-4,29.64.47,7.82,1.66,17.07,8.3,22a5.58,5.58,0,0,0,5.45.24c11.62-8.78,5.69-34.86.71-50-4.74-36.51-9.48-73-13.75-109.79C346,415.21,352.37,437.74,359,460c-1.18,6.64,0,16.6,1.9,24.19a5.76,5.76,0,0,0,.24,2.84,7.93,7.93,0,0,0,1.42,2.85c2.61,7.11,5.93,15.65,13.52,18.73,1.42.71,4.26.24,5.21-1.19,10.44-13-7.35-42.68-15.41-53.82-9.49-32.73-19-65.45-27.75-98.41,21.11,42.92,43.4,85.36,65.69,127.57a4,4,0,0,0,0,2.37c.24,8.3,5.45,21.11,10,28.22a55,55,0,0,0,8.77,11.15,19.43,19.43,0,0,0,8.78,4.5c1.66.24,4.26-.95,5-2.37,6.64-14-13.05-36-24.43-46.48-24.19-46-48.61-92-71.14-138.48,18.26,25.85,37,51.22,56,76.59a6.76,6.76,0,0,0,.23,2.14c1.19,8.3,7.83,20.39,13,26.79,5,5.93,10.91,13,19.21,13.52,1.9,0,4.27-1.19,4.74-2.85,5.22-14.93-18-35.09-30.35-44.1-18.26-24.43-36.52-49.09-54.3-74.22,38.41,36.28,78.25,71.37,117.62,106.71a16,16,0,0,0,.94,2.37c3.8,7.35,13.52,17.07,20.4,21.58,6.4,4.26,14.46,9.48,22.52,7.35,1.66-.48,3.56-2.38,3.56-4.27.48-15.89-28.93-28.69-42.92-33.2-37-33.2-74.22-66.16-110.5-100.07,26.32,16.6,52.88,32.49,79.44,48.38a11,11,0,0,0,1.42,2.13c4.74,6.64,16.12,14.7,23.48,18,7.11,3.32,15.88,6.88,23.47,3.56,1.42-.71,3.08-2.85,2.85-4.74C489.43,391,455.76,383,442,381.3c-30.59-18.49-61.18-36.75-91.3-56.2,49.8,19.45,100.54,37,151.05,54.78.24.24.48.71.95.95,5.69,6.16,18,12.33,25.85,14.7.47.24.71.24,1.18.47h.72c6.87,2.14,15.17,4,21.81-.23a5,5,0,0,0,2.14-5c-5-18.26-48.62-19.68-57.15-18.74-43.4-15.41-87-30.82-130.19-47.18,28.93,5.45,57.86,10.43,87,15.65a20.94,20.94,0,0,0,1.9,1.42c6.87,4.74,20.15,8.06,28.45,8.77,7.59.48,17.08,1,23-4.74,1.19-1.19,1.9-4,1.19-5.45-8.77-16.84-51.93-9-60-6.17-32-5.69-64.27-11.14-96-17.78v-1.66c50.74,0,101.49-1.9,152.24-3.32a10.58,10.58,0,0,0,3.79,2.13c7.59,3.32,21.34,4.51,29.64,3.56,7.59-.95,16.84-2.14,21.82-9,.95-1.43,1.18-4,0-5.46-11.62-14.7-51.7.24-59.52,4.75-42.69,1.18-85.13,2.6-127.58,2.84,28.7-4.74,57.15-10.2,85.61-15.65.71.95,2.13,1.66,4.74,2.37,8.06,1.9,21.81.24,29.88-2.37,7.35-2.13,16.12-5.22,19.68-12.8a5.61,5.61,0,0,0-.95-5.46c-13.75-11.86-48.61,9-57.15,15.41-34.14,6.41-68.29,12.81-102.67,18.26a6.83,6.83,0,0,0-.48-2.13c23.24-8.77,46.48-17.79,69.48-27,.47,1.18,2.13,1.89,5.69,1.89,8.3.24,21.34-4.26,28.46-8.3,5.92-3.32,12.8-7.35,15.65-13.75,14-5.69,28-11.38,41.73-17.07a10.25,10.25,0,0,0,4.74.95c8.3,0,21.58-4.27,28.7-8.54C552.75,232.39,561.05,227.64,562.71,219.58Z"/></g></g></svg>',size:new window.google.maps.Size(40,40),scaledSize:new window.google.maps.Size(40,40),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(0,0)},map:e});n.addListener("click",(function(){document.getElementById("infoContainer")?t.close():t.open(e,n)}))}}),[c]),Object(m.jsx)("div",{id:"map"})},w=function(e){return Object(m.jsx)("a",{href:e.link,title:e.title,children:Object(m.jsx)(b.a,{icon:["fab",e.icon],"aria-hidden":"true"})})},k=function(e){var t=e.element;return Object(n.useEffect)((function(){document.title="Contact | Amy Burke Counseling"}),[]),Object(m.jsxs)("section",{id:"contact",ref:t,children:[Object(m.jsxs)("div",{className:"grid content width",children:[Object(m.jsxs)("div",{className:"cell s-full m-half center-x",children:[Object(m.jsx)("h2",{children:"get in touch"}),Object(m.jsxs)("div",{id:"info",children:[Object(m.jsxs)("div",{className:"contact-block",children:[Object(m.jsx)(b.a,{icon:"phone",title:"phone"}),Object(m.jsx)("a",{href:"tel:205-598-7843",children:"205-598-7843"})]}),Object(m.jsxs)("div",{className:"contact-block",children:[Object(m.jsx)(b.a,{icon:"envelope",title:"email"}),Object(m.jsx)("a",{href:"mailto:amyburkecounseling@gmail.com",children:"amyburkecounseling@gmail.com"})]}),Object(m.jsxs)("div",{className:"contact-block",children:[Object(m.jsx)(b.a,{icon:"map-marker-alt",title:"address"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"bold margin-bottom-05",children:"Practicing with In Touch Counseling Agency, LLC"}),Object(m.jsxs)("p",{children:["1229 3rd Avenue North ",Object(m.jsx)("br",{}),"Birmingham, AL 35203"]})]})]}),Object(m.jsxs)("div",{id:"social-links",children:[Object(m.jsx)(w,{link:"https://www.facebook.com/Amy-Burke-Counseling-319973825294765/",title:"Visit on Facebook",icon:"facebook-square"}),Object(m.jsx)(w,{link:"https://www.instagram.com/amyburkecounseling/",title:"Visit on Instagram",icon:"instagram"})]})]})]}),Object(m.jsx)("div",{className:"cell s-full m-half",children:Object(m.jsx)(v,{})})]}),Object(m.jsx)("div",{id:"referral",className:"width text-center",children:Object(m.jsx)("a",{href:"https://hannahsteindesigns.com/",target:"_blank",rel:"noopener noreferrer",alt:"this site was created by Hannah Stein",children:"designed & developed by hannah stein"})})]})},C=function(e){var t=e.element;return Object(n.useEffect)((function(){document.title="Page Not Found | Amy Burke Counseling"}),[]),Object(m.jsxs)("section",{className:"content width",ref:t,children:[Object(m.jsx)("h3",{children:"Page not found"}),Object(m.jsxs)("p",{children:["Oops! It seems like there has been an error. You can ",Object(m.jsx)(o.b,{to:"/",children:"go back to the home page"})," and try again or ",Object(m.jsx)(o.b,{to:"/contact",children:"contact me"})," if you're still having issues."]})]})},N=c.p+"static/media/logomark_pink.b38529f7.svg",T=function(e){return Object(m.jsx)("a",{href:e.link,title:e.title,className:"social",children:Object(m.jsx)(b.a,{icon:["fab",e.icon],"aria-hidden":"true"})})},I=function(){return Object(m.jsx)("footer",{id:"footer",children:Object(m.jsxs)("div",{className:"width text-center wrapper grid",children:[Object(m.jsxs)("div",{id:"footer-col-1",className:"cell s-full m-third",children:[Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"tel:205-598-7843",children:"205-598-7843"})}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"mailto:amyburkecounseling@gmail.com",children:"amyburkecounseling@gmail.com"})}),Object(m.jsx)(T,{link:"https://www.facebook.com/Amy-Burke-Counseling-319973825294765/",title:"Visit on Facebook",icon:"facebook-square"}),Object(m.jsx)(T,{link:"https://www.instagram.com/amyburkecounseling/",title:"Visit on Instagram",icon:"instagram"})]}),Object(m.jsxs)("div",{id:"footer-col-2",className:"cell s-third m-third",children:[Object(m.jsx)("img",{id:"footer-icon",src:N,width:"40px",alt:"Amy Burke Counseling"}),Object(m.jsxs)("div",{className:"small",children:["\xa9 2019 - ",(new Date).getFullYear()]})]}),Object(m.jsxs)("div",{id:"footer-col-3",className:"cell s-full m-third",children:[Object(m.jsx)("h6",{children:"In Touch Counseling Agency, LLC"}),Object(m.jsx)("p",{children:"1229 3rd Avenue North, Birmingham, AL 35203"})]})]})})},A=function(){var e=Object(l.f)();function t(){"function"===typeof window.ga&&(window.ga("set","page",window.location.pathname),window.ga("send","pageview"))}return Object(n.useEffect)((function(){t(),e.listen(t)}),[e]),Object(m.jsx)("div",{id:"GA_temp"})},B=c(12),L=c(19),E=c(10);B.b.add(L.a,L.b,E.a,E.b,E.c,E.d,E.e,E.f,E.g);var S=[{path:"/",component:p,exact:!0},{path:"/about",component:x,exact:!1},{path:"/rates",component:O,exact:!1},{path:"/contact",component:k,exact:!1},{path:"",component:C,exact:!1}],_=function(){var e=d(),t=e.isSticky,c=e.element;return Object(m.jsx)(o.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{}),Object(m.jsx)(f,{sticky:t}),Object(m.jsx)(l.c,{children:S.map((function(e){return Object(m.jsx)(l.a,{path:e.path,exact:e.exact,children:Object(m.jsx)(e.component,{element:c})},e.path)}))}),Object(m.jsx)(I,{}),Object(m.jsx)(A,{})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};c(35);s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root")),P()}},[[36,1,2]]]);
//# sourceMappingURL=main.b4aeb9e0.chunk.js.map