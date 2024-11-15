import{E as r,S as a,M as N,d as w,B as D,i as R,t as k,a as v,g as M,r as V,b as A}from"./dropdown.mine55b";const x="carousel",$="bs.carousel",l=`.${$}`,I=".data-api",H="ArrowLeft",K="ArrowRight",P=500,u="next",_="prev",d="left",E="right",W=`slide${l}`,T=`slid${l}`,Y=`keydown${l}`,B=`mouseenter${l}`,G=`mouseleave${l}`,J=`dragstart${l}`,U=`load${l}${I}`,j=`click${l}${I}`,b="carousel",m="active",F="slide",q="carousel-item-end",Q="carousel-item-start",X="carousel-item-next",z="carousel-item-prev",C=".active",S=".carousel-item",Z=C+S,tt=".carousel-item img",et=".carousel-indicators",st="[data-bs-slide], [data-bs-slide-to]",it='[data-bs-ride="carousel"]',nt={[H]:E,[K]:d},rt={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},ot={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class c extends D{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=a.findOne(et,this._element),this._addEventListeners(),this._config.ride===b&&this.cycle()}static get Default(){return rt}static get DefaultType(){return ot}static get NAME(){return x}next(){this._slide(u)}nextWhenVisible(){!document.hidden&&R(this._element)&&this.next()}prev(){this._slide(_)}pause(){this._isSliding&&k(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){r.one(this._element,T,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){r.one(this._element,T,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const n=t>s?u:_;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&r.on(this._element,Y,t=>this._keydown(t)),this._config.pause==="hover"&&(r.on(this._element,B,()=>this.pause()),r.on(this._element,G,()=>this._maybeEnableCycle())),this._config.touch&&v.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of a.find(tt,this._element))r.on(s,J,n=>n.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(d)),rightCallback:()=>this._slide(this._directionToOrder(E)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),P+this._config.interval))}};this._swipeHelper=new v(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=nt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=a.findOne(C,this._indicatorsElement);e.classList.remove(m),e.removeAttribute("aria-current");const s=a.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(m),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(this._isSliding)return;const s=this._getActive(),n=t===u,i=e||M(this._getItems(),s,n,this._config.wrap);if(i===s)return;const p=this._getItemIndex(i),g=O=>r.trigger(this._element,O,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:p});if(g(W).defaultPrevented||!s||!i)return;const L=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(p),this._activeElement=i;const h=n?Q:q,f=n?X:z;i.classList.add(f),V(i),s.classList.add(h),i.classList.add(h);const y=()=>{i.classList.remove(h,f),i.classList.add(m),s.classList.remove(m,f,h),this._isSliding=!1,g(T)};this._queueCallback(y,s,this._isAnimated()),L&&this.cycle()}_isAnimated(){return this._element.classList.contains(F)}_getActive(){return a.findOne(Z,this._element)}_getItems(){return a.find(S,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return A()?t===d?_:u:t===d?u:_}_orderToDirection(t){return A()?t===_?d:E:t===_?E:d}static jQueryInterface(t){return this.each(function(){const e=c.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}if(r.on(document,j,st,function(o){const t=a.getElementFromSelector(this);if(!t||!t.classList.contains(b))return;o.preventDefault();const e=c.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){e.to(s),e._maybeEnableCycle();return}if(N.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()}),r.on(window,U,()=>{const o=a.find(it);for(const t of o)c.getOrCreateInstance(t)}),w(c),window.bootstrap=window.bootstrap||{},window.bootstrap.Carousel=c,Joomla&&Joomla.getOptions){const o=Joomla.getOptions("bootstrap.carousel");typeof o=="object"&&o!==null&&Object.keys(o).forEach(t=>{const e=o[t],s={interval:e.interval?e.interval:5e3,keyboard:e.keyboard?e.keyboard:!0,pause:e.pause?e.pause:"hover",slide:e.slide?e.slide:!1,wrap:e.wrap?e.wrap:!0,touch:e.touch?e.touch:!0},n=Array.from(document.querySelectorAll(t));n.length&&n.map(i=>new window.bootstrap.Carousel(i,s))})}export{c as C};
