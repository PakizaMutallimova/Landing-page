!function(t){var i=t;i._N2=i._N2||{_r:[],_d:[],r:function(){this._r.push(arguments)},d:function(){this._d.push(arguments)}};var n,o=t.document,s=(o.documentElement,t.setTimeout),r=t.clearTimeout,h=i._N2,a=(t.requestAnimationFrame,function(t,i=null,n=null,s=null){const r=o.createElement(t);return i&&("string"==typeof i?b(r,i):w(r,i)),n&&d(r,n),s&&m(r,s),r}),u=function(t,i,n){return a("div",t,i,n)},c=Object.assign,l=function(t,i){for(var o=Object(t),s=1;s<arguments.length;s++){var r=arguments[s];if(null!==r&&r!==n)for(var h in r)null!==r[h]&&Object.prototype.hasOwnProperty.call(r,h)&&("object"==typeof r[h]&&(r[h].constructor===Object||Array.isArray(r[h]))?(Array.isArray(r[h])?o[h]=[]:("object"!=typeof o[h]||Array.isArray(o[h]))&&(o[h]={}),o[h]=l(o[h],r[h])):o[h]=r[h])}return o},f=function(t,i,n){t.setAttribute(i,n)},d=function(t,i){for(var n in i)f(t,n,i[n])},p=function(t,i){return t.dataset[i]},v=function(t,i,n){t.dataset[i]=n},m=function(t,i){for(let n in i)v(t,n,i[n])},x=function(t,i,n){t.style.setProperty(i,n)},g=function(t,i){for(var n in i)x(t,n,i[n])},b=function(t,i){t.classList.add(i)},w=function(t,i){i.forEach((function(i){t.classList.add(i)}))};navigator.userAgent.indexOf("+http://www.google.com/bot.html")>-1||i.requestIdleCallback,i.cancelIdleCallback;!function(t){if("complete"===o.readyState||"interactive"===o.readyState)t();else if(Document&&Document.prototype&&Document.prototype.addEventListener&&Document.prototype.addEventListener!==o.addEventListener){const i=()=>{t(),t=()=>{}};o.addEventListener("DOMContentLoaded",i),o.addEventListener("readystatechange",(()=>{"complete"!==o.readyState&&"interactive"!==o.readyState||i()})),Document.prototype.addEventListener.call(o,"DOMContentLoaded",i)}else o.addEventListener("DOMContentLoaded",t)}((function(){o.body})),h.d("SmartSliderFrontendBackgroundAnimation",["SmartSliderMainAnimationSimple"],(function(){function t(t,i,n){this._currentBackgroundAnimation=!1,h.SmartSliderMainAnimationSimple.prototype.constructor.call(this,t,i),this.isReverseAllowed=!1,this.bgAnimationElement=this.sliderElement.querySelector(".n2-ss-background-animation"),this.slider.parameters.perspective>0&&this.bgAnimationElement&&x(this.bgAnimationElement,"perspective",this.slider.parameters.perspective+"px"),this.backgroundAnimations=c({global:0,speed:"normal"},n),this.backgrounds=t.backgrounds.getBackgroundImages()}return t.prototype=Object.create(h.SmartSliderMainAnimationSimple.prototype),t.prototype.constructor=t,t.prototype.getBackgroundAnimation=function(t,i){if(this.slider.parameters.backgroundParallax)return!1;if(i.hasBackgroundVideo()||t.hasBackgroundVideo())return!1;var n=this.backgroundAnimations.global,o=this.backgroundAnimations.speed;if(this.p=!1,i.backgroundAnimation){var s=i.backgroundAnimation;n=s.animation,o=s.speed,s.color&&(this.p=s.color)}if(!n)return!1;const r=Math.floor(Math.random()*n.length);return!!this.canAnimateWithBackgroundMode(n[r].allowedBackgroundModes,i.background.mode,t.background.mode)&&[n[r],o]},t.prototype.canAnimateWithBackgroundMode=function(t,i,n){return!!(!t||t.includes(i)&&t.includes(n))},t.prototype.allowedOnDevice=function(t){return t===n||!t||!n2const.isPhone&&!n2const.isTablet},t.prototype._initAnimation=function(t,i,n){this._currentBackgroundAnimation=!1;var o=t.background,s=i.background;if(o&&s){const a=new h.SmartSliderBackgroundAnimationBackgroundInterfaceFrontend(o),u=new h.SmartSliderBackgroundAnimationBackgroundInterfaceFrontend(s),c=this.getBackgroundAnimation(t,i);if(!1!==c&&this.allowedOnDevice(c[0].desktopOnly)){var r=1;switch(c[1]){case"superSlow10":r=10;break;case"superSlow":r=3;break;case"slow":r=1.5;break;case"fast":r=.75;break;case"superFast":r=.5}return this._currentBackgroundAnimation=new h["SmartSliderBackgroundAnimation"+c[0].type](this,a,u,c[0],r,n),h.SmartSliderMainAnimationSimple.prototype._initAnimation.apply(this,arguments),this._currentBackgroundAnimation.postSetup(),void this.timeline.set({},{onComplete:function(){this._currentBackgroundAnimation&&(this._currentBackgroundAnimation.ended(),this._currentBackgroundAnimation=!1)}.bind(this)})}}h.SmartSliderMainAnimationSimple.prototype._initAnimation.apply(this,arguments)},t.prototype.onChangeToComplete=function(t,i){this._currentBackgroundAnimation&&(this._currentBackgroundAnimation.ended(),this._currentBackgroundAnimation=!1),h.SmartSliderMainAnimationSimple.prototype.onChangeToComplete.apply(this,arguments)},t.prototype.onReverseChangeToComplete=function(t,i,n){this._currentBackgroundAnimation&&(this._currentBackgroundAnimation.revertEnded(),this._currentBackgroundAnimation=!1),h.SmartSliderMainAnimationSimple.prototype.onReverseChangeToComplete.apply(this,arguments)},t.prototype.getExtraDelay=function(){return this._currentBackgroundAnimation?this._currentBackgroundAnimation.getExtraDelay():0},t.prototype.hasBackgroundAnimation=function(){return this._currentBackgroundAnimation},t})),h.d("SmartSliderBackgroundAnimationAbstract",(function(){function t(t,i,n,o,s,r){this.durationMultiplier=s,this.original={currentImage:i,currentImageElement:i.backgroundElement,currentImageSMW:h.MW.I(i.backgroundElement),nextImage:n,nextImageElement:n.backgroundElement,nextImageSMW:h.MW.I(n.backgroundElement)},this.animationProperties=o,this.reversed=r,this.sliderBackgroundAnimation=t,this.timeline=t.timeline,this.containerElement=t.bgAnimationElement,this.shiftedBackgroundAnimation=t.parameters.shiftedBackgroundAnimation,this.clonedImages={}}return t.prototype.postSetup=function(){},t.prototype.ended=function(){},t.prototype.revertEnded=function(){},t.prototype.placeNextImage=function(){this.clonedImages.nextImage=this.original.nextImageElement.cloneNode(!0),g(this.clonedImages.nextImage,{position:"absolute",top:0,left:0,transform:"translate3d(0,0,0)",opacity:1}),this.containerElement.appendChild(this.clonedImages.nextImage)},t.prototype.placeCurrentImage=function(){this.clonedImages.currentImage=this.original.currentImageElement.cloneNode(!0),g(this.clonedImages.currentImage,{position:"absolute",top:0,left:0,transform:"translate3d(0,0,0)",opacity:1}),this.containerElement.appendChild(this.clonedImages.currentImage)},t.prototype.hideOriginals=function(){x(this.original.currentImageElement,"opacity",0),x(this.original.nextImageElement,"opacity",0)},t.prototype.resetAll=function(){x(this.original.currentImageElement,"opacity",1),x(this.original.nextImageElement,"opacity",1),this.containerElement.innerHTML=""},t.prototype.getExtraDelay=function(){return 10/60},t})),h.d("SmartSliderBackgroundAnimationBackgroundInterface",(function(){return class{constructor(t){this.backgroundElement=t}getImage(){return this.backgroundElement.querySelector("img").currentSrc}getSize(){const t=this.backgroundElement.getBoundingClientRect();return[t.width,t.height]}hasImage(){return!0}isCover(){return!0}getOpacity(){return 1}getBlur(){return 0}isOverlay(){return!1}getOverlay(){return!1}getFocusX(){return.5}getFocusY(){return.5}getColor(){return"RGBA(0,0,0,0)"}}})),h.d("SmartSliderBackgroundAnimationBackgroundInterfaceFrontend","SmartSliderBackgroundAnimationBackgroundInterface",(function(){class t extends h.SmartSliderBackgroundAnimationBackgroundInterface{constructor(t){super(t.element),this.background=t}hasImage(){return this.background.hasImage()}getImage(){return super.getImage()}isCover(){return!this.hasImage()||"fill"===p(this.background.element,"mode")}getOpacity(){return+p(this.background.elements.image.imageElements[0],"opacity")/100}getBlur(){return+this.background.elements.image.blur}isOverlay(){return!!p(this.background.elements.color.el,"overlay")}getFocusX(){return+p(this.background.elements.image.imageElements[0],"x")/100}getFocusY(){return+p(this.background.elements.image.imageElements[0],"y")/100}getColor(t){const i=this.background.elements.color.el,n=p(i,"gradient"),o=t.canvas.width,s=t.canvas.height;let r=0;if(n){let h=0,a=0,u=0,c=0;switch(n){case"horizontal":u=o;break;case"vertical":c=s;break;case"diagonal1":r=45;break;case"diagonal2":r=135}if(0!==r){const t=(180-r)/180*Math.PI,i=Math.abs(o*Math.sin(t))+Math.abs(s*Math.cos(t)),n=Math.sin(t)*i/2,l=Math.cos(t)*i/2,f=o/2,d=s/2;h=f-n,a=d-l,u=f+n,c=d+l}let l=t.createLinearGradient(h,a,u,c);return l.addColorStop(0,p(i,"colorStart")),l.addColorStop(1,p(i,"colorEnd")),l}return p(i,"color")}}return t})),h.d("SmartSliderBackgroundAnimationCubic",["SmartSliderBackgroundAnimationTiled"],(function(){function t(){h.SmartSliderBackgroundAnimationTiled.prototype.constructor.apply(this,arguments)}return t.prototype=Object.create(h.SmartSliderBackgroundAnimationTiled.prototype),t.prototype.constructor=t,t.prototype.setup=function(){var t=l({columns:1,rows:1,fullCube:!0,tiles:{delay:.2,sequence:"Parallel"},depth:50,main:{side:"Left",duration:.5,ease:"easeInOutCubic",direction:"horizontal",real3D:!0},pre:[],post:[]},this.animationProperties);t.fullCube=!0,this.reversed&&(t.invert!==n&&l(t.main,t.invert),t.invertTiles!==n&&c(t.tiles,t.invertTiles)),h.SmartSliderBackgroundAnimationTiled.prototype.setup.call(this,t)},t.prototype.renderTile=function(t,i,n,o,s,r){var a=o.depth;switch(a){case"width":a=i;break;case"height":a=n}switch(o.main.side){case"Top":case"Bottom":a=n;break;case"Left":case"Right":a=i}o.main.real3D&&x(t,"transform-style","preserve-3d");var c=u(),l=h.MW.I(c);g(c,{position:"absolute",left:0,top:0,width:"100%",height:"100%","transform-style":"preserve-3d"}),l.z=-a/2,t.appendChild(c);var f=0;"horizontal"===o.main.direction&&(f=180);var d=this.getSide(c,i,n,0,0,-a/2,180,0,f),p={Back:d,BackInvert:d};(o.fullCube||"vertical"===o.main.direction)&&(p.Bottom=this.getSide(c,i,a,0,n-a/2,0,-90,0,0),p.Top=this.getSide(c,i,a,0,-a/2,0,90,0,0)),p.Front=this.getSide(c,i,n,0,0,a/2,0,0,0),(o.fullCube||"horizontal"===o.main.direction)&&(p.Left=this.getSide(c,a,n,-a/2,0,0,0,-90,0),p.Right=this.getSide(c,a,n,i-a/2,0,0,0,90,0));var v=this.clonedCurrent().cloneNode(!0);g(v,{position:"absolute",top:-r+"px",left:-s+"px"}),p.Front.appendChild(v);var m=this.clonedNext().cloneNode(!0);return g(m,{position:"absolute",top:-r+"px",left:-s+"px"}),p[o.main.side].appendChild(m),h.MW.I(c)},t.prototype.getSide=function(t,i,n,o,s,r,a,c,l){var f=u();return f.className="n2-bganim-side",g(f,{width:i+"px",height:n+"px","backface-visibility":"hidden"}),t.appendChild(f),h.MW.I(f).setValues({x:o,y:s,z:r,rotationZ:l,rotationY:c,rotationX:a}),f},t.prototype.transform=function(t,i,n){var o,s,r;for(o=0;o<t.pre.length;o++)r=(s=c({},t.pre[o])).duration*this.durationMultiplier,delete s.duration,this.timeline.to(i,r,s,n),n+=r;for(this["transform"+t.main.side](t.main,i,n),n+=t.main.duration*this.durationMultiplier,o=0;o<t.post.length;o++)r=(s=c({},t.post[o])).duration*this.durationMultiplier,delete s.duration,this.timeline.to(i,r,s,n),n+=r},t.prototype.transformLeft=function(t,i,n){this._transform(t,i,n,0,90,0)},t.prototype.transformRight=function(t,i,n){this._transform(t,i,n,0,-90,0)},t.prototype.transformTop=function(t,i,n){this._transform(t,i,n,-90,0,0)},t.prototype.transformBottom=function(t,i,n){this._transform(t,i,n,90,0,0)},t.prototype.transformBack=function(t,i,n){"horizontal"===t.direction?this._transform(t,i,n,0,180,0):this._transform(t,i,n,180,0,0)},t.prototype.transformBackInvert=function(t,i,n){"horizontal"===t.direction?this._transform(t,i,n,0,-180,0):this._transform(t,i,n,-180,0,0)},t.prototype._transform=function(t,i,n,o,s,r){this.timeline.to(i,t.duration*this.durationMultiplier,{rotationX:o,rotationY:s,rotationZ:r,ease:t.ease},n)},t})),h.d("SmartSliderBackgroundAnimationExplode",["SmartSliderBackgroundAnimationTiled"],(function(){function t(){h.SmartSliderBackgroundAnimationTiled.prototype.constructor.apply(this,arguments)}return t.prototype=Object.create(h.SmartSliderBackgroundAnimationTiled.prototype),t.prototype.constructor=t,t.prototype.setup=function(){var t=l({columns:1,rows:1,reverse:!1,tiles:{delay:0,sequence:"Parallel"},main:{duration:.5,zIndex:2,current:{ease:"easeInOutCubic"}}},this.animationProperties);this.placeNextImage(),g(this.clonedImages.nextImage,{overflow:"hidden",width:"100%",height:"100%"}),h.SmartSliderBackgroundAnimationTiled.prototype.setup.call(this,t)},t.prototype.renderTile=function(t,i,n,o,s,r){var a=u(),c=this.clonedCurrent().cloneNode(!0);return g(a,{position:"absolute",left:0,top:0,width:i+"px",height:n+"px",overflow:"hidden","z-index":o.main.zIndex,perspective:"1000px",transformStyle:"preserve-3d"}),g(c,{position:"absolute",top:-r+"px",left:-s+"px"}),a.appendChild(c),t.appendChild(a),{current:a,tileSMW:h.MW.I(t)}},t.prototype.transform=function(t,i,n){var o=c({},t.main.current);o.rotationX=90*(3*Math.random()-1),o.rotationY=90*(3*Math.random()-1),o.rotationZ=90*(3*Math.random()-1),this.timeline.to(i.tileSMW,t.main.duration*this.durationMultiplier,o,n)},t})),h.d("SmartSliderBackgroundAnimationExplodeReversed",["SmartSliderBackgroundAnimationTiled"],(function(){function t(){h.SmartSliderBackgroundAnimationTiled.prototype.constructor.apply(this,arguments)}return t.prototype=Object.create(h.SmartSliderBackgroundAnimationTiled.prototype),t.prototype.constructor=t,t.prototype.setup=function(){var t=l({columns:1,rows:1,reverse:!1,tiles:{delay:0,sequence:"Parallel"},main:{duration:.5,zIndex:2,current:{ease:"easeInOutCubic"}}},this.animationProperties);this.placeCurrentImage(),g(this.clonedImages.currentImage,{overflow:"hidden",width:"100%",height:"100%"}),h.SmartSliderBackgroundAnimationTiled.prototype.setup.call(this,t)},t.prototype.renderTile=function(t,i,n,o,s,r){var a=u(),c=this.clonedNext().cloneNode(!0);return g(a,{position:"absolute",left:0,top:0,width:i+"px",height:n+"px",overflow:"hidden","z-index":o.main.zIndex,perspective:"1000px","transform-style":"preserve-3d"}),g(c,{position:"absolute",top:-r+"px",left:-s+"px"}),a.appendChild(c),t.appendChild(a),{next:a,tileSMW:h.MW.I(t)}},t.prototype.transform=function(t,i,n){var o=l({},t.main.current);o.rotationX=90*(3*Math.random()-1),o.rotationY=90*(3*Math.random()-1),o.rotationZ=30*(3*Math.random()-1),this.timeline.fromTo(i.tileSMW,t.main.duration*this.durationMultiplier,o,{ease:o.ease,rotationX:0,rotationY:0,rotationZ:0,opacity:1,x:0,y:0,z:0,scale:1},n)},t})),h.d("SmartSliderBackgroundAnimationFlat",["SmartSliderBackgroundAnimationTiled"],(function(){function t(){h.SmartSliderBackgroundAnimationTiled.prototype.constructor.apply(this,arguments)}return t.prototype=Object.create(h.SmartSliderBackgroundAnimationTiled.prototype),t.prototype.constructor=t,t.prototype.setup=function(){var t=l({columns:1,rows:1,tiles:{cropOuter:!1,crop:!0,delay:0,sequence:"Parallel"},main:{type:"next",duration:.5,real3D:!0,zIndex:1,current:{ease:"easeInOutCubic"},next:{ease:"easeInOutCubic"}}},this.animationProperties);this.reversed&&(t.invert!==n&&l(t.main,t.invert),t.invertTiles!==n&&c(t.tiles,t.invertTiles)),h.SmartSliderBackgroundAnimationTiled.prototype.setup.call(this,t),t.tiles.cropOuter&&x(this.container,"overflow","hidden")},t.prototype.renderTile=function(t,i,n,o,s,r){o.tiles.crop&&x(t,"overflow","hidden");var a=u(),c=this.clonedCurrent().cloneNode(!0);g(a,{position:"absolute",left:0,top:0,width:i+"px",height:n+"px",overflow:"hidden","z-index":o.main.zIndex}),g(c,{position:"absolute",top:-r+"px",left:-s+"px"}),a.appendChild(c),t.appendChild(a);var l,f,d=u(),p=this.clonedNext().cloneNode(!0);return g(d,{position:"absolute",left:0,top:0,width:i+"px",height:n+"px",overflow:"hidden","z-index":1}),g(p,{position:"absolute",top:-r+"px",left:-s+"px"}),d.appendChild(p),t.appendChild(d),o.main.real3D&&(l="transform-style",f="preserve-3d",[t,a,d].forEach((function(t){x(t,l,f)}))),{current:a,currentSMW:h.MW.I(a),next:d,nextSMW:h.MW.I(d)}},t.prototype.transform=function(t,i,n){var o=t.main;o.current.transformOrigin&&(i.currentSMW.transformOrigin=o.current.transformOrigin),"current"!=o.type&&"both"!=o.type||this.timeline.to(i.currentSMW,o.duration*this.durationMultiplier,o.current,n),"next"!=o.type&&"both"!=o.type||(o.next.transformOrigin&&(i.nextSMW.transformOrigin=o.next.transformOrigin),this.timeline.fromTo(i.nextSMW,o.duration*this.durationMultiplier,o.next,{ease:o.next.ease,rotationX:0,rotationY:0,rotationZ:0,opacity:1,x:0,y:0,z:0,xP:0,yP:0,scale:1},n))},t})),h.d("SmartSliderBackgroundAnimationSlices",["SmartSliderBackgroundAnimationFluxAbstract"],(function(){function t(){h.SmartSliderBackgroundAnimationFluxAbstract.prototype.constructor.apply(this,arguments),this.setup()}return t.prototype=Object.create(h.SmartSliderBackgroundAnimationFluxAbstract.prototype),t.prototype.constructor=t,t.prototype.setup=function(){var t=l({slices:6,direction:"horizontal",isReversed:!1,tiles:{delay:.05,sequence:"normal",duration:.6,stages:[{},{},{}]}},this.animationProperties);this.container=u(),g(this.container,{position:"absolute",left:0,top:0,width:this.w+"px",height:this.h+"px",overflow:"hidden",perspective:"1000px"});var i,o,s=[];if("horizontal"===t.direction){for(var r=Math.floor(this.h/t.slices),a=this.h-t.slices*r,c=Math.ceil(a/t.slices),f=a,d=0,p=0;p<t.slices;p++){var v=r;f>0&&(v+=o=f>=c?c:f,f-=o),(i=u()).className="tile n2-bganim-tile-overlay-colored",g(i,{position:"absolute",top:d+"px",left:0,width:"100%",height:v+"px","z-index":1e6}),this.sliderBackgroundAnimation.p&&x(i,"background-color",this.sliderBackgroundAnimation.p),this.container.appendChild(i),s.push(h.MW.I(i)),d+=v}t.tiles.stages[0].x=this.w,t.tiles.stages[1].x=0,t.tiles.stages[2].x=-this.w}else if("vertical"===t.direction){for(var m=Math.floor(this.w/t.slices),b=this.w-t.slices*m,w=Math.ceil(b/t.slices),S=0,y=0;y<t.slices;y++){var k=m;b>0&&(k+=o=b>=w?w:b,b-=o),(i=u()).className="tile n2-bganim-tile-overlay-colored",g(i,{position:"absolute",top:0,left:S+"px",width:k+"px",height:"100%","z-index":1e6}),this.sliderBackgroundAnimation.p&&x(i,"background-color",this.sliderBackgroundAnimation.p),this.container.appendChild(i),s.push(h.MW.I(i)),S+=k}t.tiles.stages[0].y=this.h,t.tiles.stages[1].y=0,t.tiles.stages[2].y=-this.h}(this.reversed&&!t.isReversed||!this.reversed&&t.isReversed)&&(t.tiles.stages=t.tiles.stages.reverse());var M=u(),A=this.clonedCurrent().cloneNode(!0);g(M,{position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden","z-index":99999}),g(A,{position:"absolute",top:0,left:0}),M.appendChild(A),this.container.appendChild(M);var B=u(),O=h.MW.I(B),I=this.clonedNext().cloneNode(!0);g(B,{position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden","z-index":99999}),O.opacity=0,g(I,{position:"absolute",top:0,left:0}),B.appendChild(I),this.container.appendChild(B);var z,C,j=this.timeline.totalDuration();switch(t.tiles.sequence){case"FromSide":for(z=Math.floor(t.slices/2),C=0;C<s.length;C++)this.timeline.fromTo(s[C],t.tiles.duration*this.durationMultiplier,t.tiles.stages[0],t.tiles.stages[1],j+t.tiles.delay*Math.abs(Math.abs(z-C)-z));break;case"FromCenter":for(z=Math.floor(t.slices/2),C=0;C<s.length;C++)this.timeline.fromTo(s[C],t.tiles.duration*this.durationMultiplier,t.tiles.stages[0],t.tiles.stages[1],j+t.tiles.delay*Math.abs(z-C));break;default:for(C=0;C<s.length;C++)this.timeline.fromTo(s[C],t.tiles.duration*this.durationMultiplier,t.tiles.stages[0],t.tiles.stages[1],j+t.tiles.delay*C)}this.timeline.set(O,{opacity:1});var F=this.timeline.totalDuration()+.3;switch(t.tiles.sequence){case"FromSide":for(z=Math.floor(t.slices/2),C=0;C<s.length;C++)this.timeline.to(s[C],t.tiles.duration*this.durationMultiplier,t.tiles.stages[2],F+t.tiles.delay*Math.abs(Math.abs(z-C)-z));break;case"FromCenter":for(z=Math.floor(t.slices/2),C=0;C<s.length;C++)this.timeline.to(s[C],t.tiles.duration*this.durationMultiplier,t.tiles.stages[2],F+t.tiles.delay*Math.abs(z-C));break;default:for(C=0;C<s.length;C++)this.timeline.to(s[C],t.tiles.duration*this.durationMultiplier,t.tiles.stages[2],F+t.tiles.delay*C)}t.nextImage!==n&&this.timeline.fromTo(O,this.timeline.totalDuration()-F+1,t.nextImage[0],t.nextImage[1],F),this.duration=this.timeline.totalDuration()-j,this.containerElement.appendChild(this.container),this.preSetup()},t})),h.d("SmartSliderBackgroundAnimationSlixes",["SmartSliderBackgroundAnimationTiled"],(function(){function t(){h.SmartSliderBackgroundAnimationTiled.prototype.constructor.apply(this,arguments)}return t.prototype=Object.create(h.SmartSliderBackgroundAnimationTiled.prototype),t.prototype.constructor=t,t.prototype.setup=function(){var t=l({columns:2,rows:2,main:{duration:2,zIndex:2}},this.animationProperties);this.placeNextImage(),g(this.clonedImages.nextImage,{overflow:"hidden",width:"100%",height:"100%"}),h.SmartSliderBackgroundAnimationTiled.prototype.setup.call(this,t)},t.prototype.renderTile=function(t,i,n,o,s,r){x(this.container,"overflow","hidden");var a=u(),c=this.clonedCurrent().cloneNode(!0);return g(a,{position:"absolute",left:0,top:0,width:i+"px",height:n+"px",overflow:"hidden","z-index":o.main.zIndex}),g(c,{position:"absolute",top:-r+"px",left:-s+"px"}),a.appendChild(c),t.appendChild(a),g(t,{perspective:"1000px","transform-style":"preserve-3d"}),{current:a,tileSMW:h.MW.I(t)}},t.prototype.animate=function(t,i,n){this.timeline.to(n[0][0].tileSMW,t.main.duration*this.durationMultiplier,{xP:-100,ease:"easeInOutCubic"},0),this.timeline.to(n[0][1].tileSMW,t.main.duration*this.durationMultiplier,{xP:-100,ease:"easeInOutCubic"},.3),this.timeline.to(n[1][0].tileSMW,t.main.duration*this.durationMultiplier,{xP:100,ease:"easeInOutCubic"},.15),this.timeline.to(n[1][1].tileSMW,t.main.duration*this.durationMultiplier,{xP:100,ease:"easeInOutCubic"},.45);var o=u();g(o,{position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden"}),this.clonedImages.nextImage.parentNode.prepend(o),o.appendChild(this.clonedImages.nextImage),this.timeline.fromTo(this.clonedImages.nextImage,t.main.duration*this.durationMultiplier,{scale:1.3},{scale:1},.45)},t})),h.d("SmartSliderBackgroundAnimationTiled",["SmartSliderBackgroundAnimationFluxAbstract"],(function(){function t(){h.SmartSliderBackgroundAnimationFluxAbstract.prototype.constructor.apply(this,arguments),this.setup()}return t.prototype=Object.create(h.SmartSliderBackgroundAnimationFluxAbstract.prototype),t.prototype.constructor=t,t.prototype.setup=function(t){var i=u();g(i,{position:"absolute",left:0,top:0,width:this.w+"px",height:this.hc+"px",perspective:"1000px",transform:"translate3d(0,0,0)"}),this.container=i;for(var n=[],o=[],s=t.columns,r=t.rows,h=Math.floor(this.w/s),a=Math.floor(this.h/r),c=this.w-s*h,l=Math.ceil(c/s),f=this.h-r*a,d=Math.ceil(f/r),p=0,v=0;v<s;v++){n[v]=[];var m=h,x=0;if(c>0)m+=S=c>=l?l:c,c-=S;for(var b=f,w=0;w<r;w++){var S,y=a;if(b>0)y+=S=b>=d?d:b,b-=S;var k=u();k.className="tile",g(k,{position:"absolute",top:x+"px",left:p+"px",width:m+"px",height:y+"px","z-index":-Math.abs(v-parseInt(s/2))+s-Math.abs(w-parseInt(r/2))}),i.appendChild(k);var M=this.renderTile(k,m,y,t,p,x);o.push(M),n[v][w]=M,x+=y}p+=m}this.containerElement.appendChild(i),this.preSetup(),this.animate(t,o,n)},t.prototype.animate=function(t,i,n){this["sequence"+t.tiles.sequence](this.transform.bind(this,t),i,n,t.tiles.delay*this.durationMultiplier)},t.prototype.sequenceParallel=function(t,i){t(i,null)},t.prototype.sequenceRandom=function(t,i,n,o){for(var s=this.timeline.totalDuration(),r=0;r<i.length;r++)t(i[r],s+Math.random()*o)},t.prototype.sequenceForwardCol=function(t,i,n,o){for(var s=this.timeline.totalDuration(),r=0;r<i.length;r++)t(i[r],s+o*r)},t.prototype.sequenceBackwardCol=function(t,i,n,o){for(var s=this.timeline.totalDuration(),r=i.length-1,h=0;h<i.length;h++)t(i[h],s+o*(r-h))},t.prototype.sequenceForwardRow=function(t,i,n,o){for(var s=this.timeline.totalDuration(),r=0,h=0;h<n[0].length;h++)for(var a=0;a<n.length;a++)t(n[a][h],s+o*r),r++},t.prototype.sequenceBackwardRow=function(t,i,n,o){for(var s=this.timeline.totalDuration(),r=i.length-1,h=0;h<n[0].length;h++)for(var a=0;a<n.length;a++)t(n[a][h],s+o*r),r--},t.prototype.sequenceForwardDiagonal=function(t,i,n,o){for(var s=this.timeline.totalDuration(),r=0;r<n[0].length;r++)for(var h=0;h<n.length;h++)t(n[h][r],s+o*(h+r))},t.prototype.sequenceBackwardDiagonal=function(t,i,n,o){for(var s=this.timeline.totalDuration(),r=n[0].length+n.length-2,h=0;h<n[0].length;h++)for(var a=0;a<n.length;a++)t(n[a][h],s+o*(r-a-h))},t})),h.d("SmartSliderBackgroundAnimationTurn",["SmartSliderBackgroundAnimationFluxAbstract"],(function(){function t(){h.SmartSliderBackgroundAnimationFluxAbstract.prototype.constructor.apply(this,arguments);var t=l({perspective:1.5*this.w,duration:.8,direction:"left"},this.animationProperties);this.reversed&&("left"===t.direction?t.direction="right":t.direction="left");var i=parseInt(this.w/2);g(this.clonedCurrent(),{position:"absolute",top:0,left:("left"===t.direction?this.w/2*-1:0)+"px"}),g(this.clonedNext(),{position:"absolute",top:0,left:("left"===t.direction?0:this.w/2*-1)+"px"});var n=u();n.className="tab",g(n,{width:i+"px",height:this.h+"px",position:"absolute",top:"0",left:("left"===t.direction?i:"0")+"px","z-index":101,"transform-style":"preserve-3d","transform-origin":"left"===t.direction?"0 0":i+"px 0"});var o=u();o.className="n2-ff-3d",o.appendChild(this.clonedCurrent()),g(o,{width:i+"px",height:this.h+"px",position:"absolute",top:0,left:0,overflow:"hidden","backface-visibility":"hidden","transform-style":"preserve-3d"}),n.appendChild(o);var s=u();s.className="n2-ff-3d",s.appendChild(this.clonedNext()),g(s,{width:i+"px",height:this.h+"px",position:"absolute",top:0,left:0,overflow:"hidden",transform:"rotateZ(0deg) rotateY(180deg)","backface-visibility":"hidden","transform-style":"preserve-3d"}),n.appendChild(s);var r=u(),a=this.clonedCurrent().cloneNode(!0);x(a,"left","left"===t.direction?0:-i+"px"),g(r,{position:"absolute",top:0,left:"left"===t.direction?"0":i+"px",width:i+"px",height:this.h+"px","z-index":100,overflow:"hidden"}),r.appendChild(a);var c=u();c.className="overlay",g(c,{position:"absolute",top:0,left:"left"===t.direction?i+"px":0,width:i+"px",height:this.h+"px",background:"#000",opacity:1,overflow:"hidden"});var f=u();g(f,{width:this.w+"px",height:this.h+"px",position:"absolute",top:0,left:0,perspective:t.perspective+"px","perspective-origin":"50% 50%"}),f.appendChild(n),f.appendChild(r),f.appendChild(c),this.placeNextImage(),g(this.clonedImages.nextImage,{overflow:"hidden",width:"100%",height:"100%"}),this.containerElement.appendChild(f),this.preSetup(),this.timeline.to(h.MW.I(n),t.duration*this.durationMultiplier,{rotationY:"left"===t.direction?-180:180},0),this.timeline.to(h.MW.I(c),t.duration*this.durationMultiplier,{opacity:0},0)}return t.prototype=Object.create(h.SmartSliderBackgroundAnimationFluxAbstract.prototype),t.prototype.constructor=t,t})),h.d("SmartSliderBackgroundAnimationFluxAbstract",["SmartSliderBackgroundAnimationAbstract"],(function(){function t(){this.shiftedPreSetup=!1,this._clonedCurrent=!1,this._clonedNext=!1,h.SmartSliderBackgroundAnimationAbstract.prototype.constructor.apply(this,arguments);var t=this.original.currentImageElement.getBoundingClientRect();this.w=Math.ceil(t.width),this.h=t.height,this.hc=Math.ceil(t.height)}return t.prototype=Object.create(h.SmartSliderBackgroundAnimationAbstract.prototype),t.prototype.constructor=t,t.prototype.clonedCurrent=function(){return this._clonedCurrent||(this._clonedCurrent=this.original.currentImageElement.cloneNode(!0),g(this._clonedCurrent,{width:this.w+"px",height:this.h+"px",transform:"translate3d(0,0,0)",opacity:1})),this._clonedCurrent},t.prototype.clonedNext=function(){return this._clonedNext||(this._clonedNext=this.original.nextImageElement.cloneNode(!0),g(this._clonedNext,{width:this.w+"px",height:this.h+"px",transform:"translate3d(0,0,0)",opacity:1})),this._clonedNext},t.prototype.preSetup=function(){0!=this.shiftedBackgroundAnimation?this.shiftedPreSetup=!0:this._preSetup()},t.prototype._preSetup=function(t){this.timeline.set(this.original.currentImageSMW,{opacity:0},0),this.original.nextImageSMW.opacity=0},t.prototype.postSetup=function(){this.timeline.set(this.original.nextImageSMW,{opacity:1})},t.prototype.ended=function(){this.original.currentImageSMW.opacity=1,this.containerElement.innerHTML=""},t.prototype.revertEnded=function(){this.original.nextImageSMW.opacity=1,this.containerElement.innerHTML=""},t})),h.d("smartslider-backgroundanimation")}(window);