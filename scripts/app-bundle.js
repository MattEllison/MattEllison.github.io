var __decorate=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};define("app",["require","exports","aurelia-dependency-injection","./resources/service/blobStorage","./resources/service/visionapi"],function(e,t,i,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var i=this;this.blobStorage=e,this.visionAPI=t,this.message="Hello World!",this.pictures=new Array,this.blobStorage.GetPictures().then(function(e){console.log("Got pics",e),e.forEach(function(e){i.blobStorage.GetBlobCaption(e.filename).then(function(t){e.caption=t,i.pictures.push(e)})})})}return e=__decorate([i.autoinject,__metadata("design:paramtypes",[n.BloblStorage,r.VisionApi])],e)}();t.App=o}),define("environment",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={debug:!1,testing:!1}}),define("main",["require","exports","./environment"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configure=function(e){e.use.standardConfiguration().feature("resources"),i.default.debug&&e.use.developmentLogging(),i.default.testing&&e.use.plugin("aurelia-testing"),e.start().then(function(){return e.setRoot()})}}),define("Models/Picture",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){return function(){}}();t.Picture=i}),define("Models/VisionResponse",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){return function(e){this.caption=e.description.captions[0].text,this.name=this.caption=e.description.captions[0].text}}();t.VisionResponse=i}),define("resources/index",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configure=function(e){}});var __decorate=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};define("resources/elements/form-upload",["require","exports","./../service/visionapi","aurelia-dependency-injection","./../service/blobStorage","aurelia-framework","aurelia-binding"],function(e,t,i,n,r,o,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){this.blobStorage=e,this.visionAPI=t}return e.prototype.filedropped=function(e){e.preventDefault(),this.dragging=!1,this.files=e.dataTransfer.files,this.Submit()},e.prototype.dragOver=function(e){e.preventDefault(),this.dragging=!0},e.prototype.Submit=function(){var e=this;this.pictureloading=!0,this.blobStorage.SavePicture(this.files[0]).then(function(t){e.visionAPI.processImage(t.url).then(function(i){t.caption=i.caption,e.blobStorage.updateMetaDataForPicture(t).then(function(t){e.pictures.push(t),e.pictureloading=!1})})})},__decorate([o.bindable({defaultBindingMode:a.bindingMode.twoWay}),__metadata("design:type",Object)],e.prototype,"pictureloading",void 0),__decorate([o.bindable({defaultBindingMode:a.bindingMode.twoWay}),__metadata("design:type",Object)],e.prototype,"pictures",void 0),e=__decorate([n.autoinject,__metadata("design:paramtypes",[r.BloblStorage,i.VisionApi])],e)}();t.FormUpload=s});var __decorate=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};define("resources/elements/uploaded-picture",["require","exports","aurelia-binding","./../service/blobStorage","aurelia-framework"],function(e,t,i,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this.blobStorage=e}return e.prototype.DeleteImage=function(e){var t=this;this.blobStorage.DeleteImage(e).then(function(){var i=t.pictures.indexOf(e);t.pictures.splice(i,1)})},__decorate([r.bindable,__metadata("design:type",Object)],e.prototype,"pic",void 0),__decorate([r.bindable({defaultBindingMode:i.bindingMode.twoWay}),__metadata("design:type",Object)],e.prototype,"pictures",void 0),e=__decorate([r.autoinject,__metadata("design:paramtypes",[n.BloblStorage])],e)}();t.UploadedPicture=o});var __decorate=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};define("resources/service/blobStorage",["require","exports","aurelia-dependency-injection","./../../Models/Picture","aurelia-http-client"],function(e,t,i,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this.httpClient=e,this.pictureContainer="https://catstorageorix.blob.core.windows.net/temp",this.sharedKeyInfo="sv=2017-04-17&ss=bfqt&srt=sco&sp=rwdlacup&se=2017-11-24T20:50:05Z&st=2017-11-04T12:50:05Z&spr=https&sig=lTzCFbApWqiRXlCJ6RHSim9BP2GsYMucxtVGxssxfWg%3D"}return e.prototype.SavePicture=function(e){var t=this;return(new r.HttpClient).configure(function(e){e.withHeader("x-ms-blob-type","BlockBlob")}).put(this.pictureContainer+"/"+e.name+"?"+this.sharedKeyInfo,e).then(function(i){var r=new n.Picture;return r.filename=e.name,r.url=t.pictureContainer+"/"+e.name,r})},e.prototype.updateMetaDataForPicture=function(e){console.log("Meta data update",e);var t=(new r.HttpClient).configure(function(e){e.withHeader("x-ms-blob-type","BlockBlob")});return console.log("Vision response",e),t.createRequest(this.pictureContainer+"/"+e.filename+"?comp=metadata&"+this.sharedKeyInfo).withHeader("x-ms-meta-caption",e.caption).asPut().send().then(function(){return e})},e.prototype.GetPictures=function(){var e=this,t=(new r.HttpClient).configure(function(e){e.withHeader("Content-Type","application/json")}),i=this.pictureContainer+"?restype=container&comp=list&"+this.sharedKeyInfo;return console.log("Container Emails",i),t.get(i).then(function(t){var i=new Array;console.log("Getting Pics",t);var r=(new DOMParser).parseFromString(t.response,"text/xml");console.log(r);for(var o=r.getElementsByTagName("Blob"),a=0;a<o.length;a++){console.log("Blob",o[a]);var s=o[a].getElementsByTagName("name")[0].innerHTML;console.log("Name",s);var c=new n.Picture;c.caption=s,c.name=s,c.url=e.pictureContainer+"/"+s,c.filename=s,i.push(c)}return i})},e.prototype.GetBlobCaption=function(e){var t=new r.HttpClient;return console.log("Blob url ",this.pictureContainer+"/"+e+"?"+this.sharedKeyInfo),t.get(this.pictureContainer+"/"+e+"?"+this.sharedKeyInfo).then(function(e){return e.headers.headers["x-ms-meta-caption"].value})},e.prototype.DeleteImage=function(e){return this.httpClient.delete(e.url+"?"+this.sharedKeyInfo)},e=__decorate([i.autoinject,__metadata("design:paramtypes",[r.HttpClient])],e)}();t.BloblStorage=o}),define("resources/service/visionapi",["require","exports","./../../Models/VisionResponse","aurelia-http-client"],function(e,t,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){var e=this;this.subscriptionKey="311f1c6de3f946e68713e6ca28c580d7",this.azureVisionAnalyzerAPI="https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=description",this.httpClient=(new n.HttpClient).configure(function(t){t.withHeader("Ocp-Apim-Subscription-Key",e.subscriptionKey)})}return e.prototype.processImage=function(e){return console.log("Processing image",e),this.httpClient.post(this.azureVisionAnalyzerAPI,{url:e}).then(function(e){return console.log("I did get a result",e),new i.VisionResponse(JSON.parse(e.response))})},e}();t.VisionApi=r}),define("text!app.html",["module"],function(e){e.exports='<template><require from="./resources/elements/form-upload"></require><require from="./resources/elements/uploaded-picture"></require><h1>Upload Pictures</h1><form-upload pictures.bind="pictures" pictureloading.bind="pictureloading"></form-upload><div id="pictures"><div class="picture" repeat.for="pic of pictures"><uploaded-picture pictures.bind="pictures" pic.bind="pic"></uploaded-picture></div><div class="picture" if.bind="pictureloading"><img src="../loading.gif" alt=""></div></div><style>#pictures{display:flex}#pictures .picture{padding:10px;width:250px}</style></template>'}),define("text!resources/elements/form-upload.html",["module"],function(e){e.exports='<template><form class="box has-advanced-upload" dragover.trigger="dragOver($event)" dragleave.trigger="dragging = false" drop.trigger="filedropped($event)"><div class="box__input ${dragging ? \'dragging\':\'\'}"><input change.delegate="Submit()" class="box__file" type="file" name="file" id="file" files.bind="files" single><label for="file"><i class="fa fa-upload fa-5x"></i><div if.bind="dragging">Let go to upload!</div><div else><div><strong>Click here to upload</strong> <span class="box__dragndrop">or drag it here</span></div></div></label></div></form><style>.box__file{display:none}.box__input{background-color:#fff;outline:2px dashed #000;padding:50px;text-align:center}.box__input.dragging{background-color:#f0f8ff}label{font-family:\'Trebuchet MS\',\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\',Arial,sans-serif;font-size:200%;cursor:pointer}label i{opacity:.2}</style></template>'}),define("text!resources/elements/uploaded-picture.html",["module"],function(e){e.exports='<template><div><a click.delegate="DeleteImage(pic)" href="#" style="float:right">Delete</a><div><img width="250px" src.bind="pic.url"></div><div>${pic.caption}</div></div></template>'});