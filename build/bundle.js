!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=5)}([function(e,r){e.exports=require("express")},function(e,r,t){"use strict";(function(e){var n=t(4),o=t(3),s=t(6),u=t(0),i=t(7),c=t(8),a=t(9),l=t(10),f=t(11),p=u();o.config(),p.set("views",i.join(e,"views")),p.set("view engine","jade"),p.use(a("dev")),p.use(u.json()),p.use(u.urlencoded({extended:!1})),p.use(c()),p.use(u.static(i.join(e,"public"))),p.use("/",l),p.use("/users",f),p.use("/aws",n.a),p.use(function(e,r,t){t(s(404))}),p.use(function(e,r,t,n){t.locals.message=e.message,t.locals.error="development"===r.app.get("env")?e:{},t.status(e.status||500),t.send("Error happened")}),r.a=p}).call(this,"/")},function(e,r){e.exports=require("aws-sdk")},function(e,r){e.exports=require("dotenv")},function(e,r,t){"use strict";var n=t(0),o=t(2),s=t.n(o),u=new class{putObjectInS3(e){console.log("Hey");var r=req.files.file,t=new s.a.S3({params:{Bucket:process.env.BUCKET_NAME}});console.log(process.env.BUCKET_NAME),t.createBucket(function(){var e={Key:r.name,Body:r};t.upload(e,function(e,t){console.log("PRINT FILE:",r),e?console.log("ERROR MSG: ",e):console.log("Successfully uploaded data")})})}};const i=n.Router();i.put("/files",function(e,r,t){u.putObjectInS3()});r.a=i},function(e,r,t){"use strict";t.r(r);var n=t(1),o=t(12)("temp:server"),s=t(13),u=function(e){var r=parseInt(e,10);if(isNaN(r))return e;if(r>=0)return r;return!1}(process.env.PORT||"3000");n.a.set("port",u);var i=s.createServer(n.a);i.listen(u),console.log("Server started!"),i.on("error",function(e){if("listen"!==e.syscall)throw e;var r="string"==typeof u?"Pipe "+u:"Port "+u;switch(e.code){case"EACCES":console.error(r+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(r+" is already in use"),process.exit(1);break;default:throw e}}),i.on("listening",function(){var e=i.address(),r="string"==typeof e?"pipe "+e:"port "+e.port;o("Listening on "+r)})},function(e,r){e.exports=require("http-errors")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("cookie-parser")},function(e,r){e.exports=require("morgan")},function(e,r,t){var n=t(0).Router();n.get("/",function(e,r,t){r.send("Home")}),e.exports=n},function(e,r,t){var n=t(0).Router();n.get("/",function(e,r,t){r.send("respond with a resource")}),e.exports=n},function(e,r){e.exports=require("debug")},function(e,r){e.exports=require("http")}]);