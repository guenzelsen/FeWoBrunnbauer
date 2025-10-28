var bn=Object.defineProperty;var gt=n=>{throw TypeError(n)};var vn=(n,e,t)=>e in n?bn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var O=(n,e,t)=>vn(n,typeof e!="symbol"?e+"":e,t),Ne=(n,e,t)=>e.has(n)||gt("Cannot "+t);var g=(n,e,t)=>(Ne(n,e,"read from private field"),t?t.call(n):e.get(n)),z=(n,e,t)=>e.has(n)?gt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),E=(n,e,t,i)=>(Ne(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),f=(n,e,t)=>(Ne(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=globalThis,ot=Pe.ShadowRoot&&(Pe.ShadyCSS===void 0||Pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),mt=new WeakMap;let Nt=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ot&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=mt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&mt.set(t,e))}return e}toString(){return this.cssText}};const wn=n=>new Nt(typeof n=="string"?n:n+"",void 0,ct),D=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,r,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[s+1],n[0]);return new Nt(t,n,ct)},yn=(n,e)=>{if(ot)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=Pe.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)}},bt=ot?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return wn(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_n,defineProperty:$n,getOwnPropertyDescriptor:An,getOwnPropertyNames:xn,getOwnPropertySymbols:Sn,getPrototypeOf:En}=Object,j=globalThis,vt=j.trustedTypes,kn=vt?vt.emptyScript:"",Ue=j.reactiveElementPolyfillSupport,me=(n,e)=>n,Te={toAttribute(n,e){switch(e){case Boolean:n=n?kn:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ht=(n,e)=>!_n(n,e),wt={attribute:!0,type:String,converter:Te,reflect:!1,hasChanged:ht};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),j.litPropertyMetadata??(j.litPropertyMetadata=new WeakMap);class ce extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=wt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&$n(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=An(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){const c=r==null?void 0:r.call(this);s.call(this,a),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??wt}static _$Ei(){if(this.hasOwnProperty(me("elementProperties")))return;const e=En(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me("properties"))){const t=this.properties,i=[...xn(t),...Sn(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(bt(r))}else e!==void 0&&t.push(bt(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yn(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const a=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Te).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){var s;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Te;this._$Em=r,this[r]=c.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??ht)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,a]of r)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}ce.elementStyles=[],ce.shadowRootOptions={mode:"open"},ce[me("elementProperties")]=new Map,ce[me("finalized")]=new Map,Ue==null||Ue({ReactiveElement:ce}),(j.reactiveElementVersions??(j.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=globalThis,De=be.trustedTypes,yt=De?De.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ut="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,Lt="?"+L,Pn=`<${Lt}>`,re=document,we=()=>re.createComment(""),ye=n=>n===null||typeof n!="object"&&typeof n!="function",lt=Array.isArray,zn=n=>lt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Le=`[ 	
\f\r]`,fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,$t=/>/g,Q=RegExp(`>|${Le}(?:([^\\s"'>=/]+)(${Le}*=${Le}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,xt=/"/g,Gt=/^(?:script|style|textarea|title)$/i,Rn=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),x=Rn(1),le=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),St=new WeakMap,Y=re.createTreeWalker(re,129);function Vt(n,e){if(!lt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(e):e}const In=(n,e)=>{const t=n.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",a=fe;for(let c=0;c<t;c++){const o=n[c];let d,l,h=-1,p=0;for(;p<o.length&&(a.lastIndex=p,l=a.exec(o),l!==null);)p=a.lastIndex,a===fe?l[1]==="!--"?a=_t:l[1]!==void 0?a=$t:l[2]!==void 0?(Gt.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=Q):l[3]!==void 0&&(a=Q):a===Q?l[0]===">"?(a=r??fe,h=-1):l[1]===void 0?h=-2:(h=a.lastIndex-l[2].length,d=l[1],a=l[3]===void 0?Q:l[3]==='"'?xt:At):a===xt||a===At?a=Q:a===_t||a===$t?a=fe:(a=Q,r=void 0);const m=a===Q&&n[c+1].startsWith("/>")?" ":"";s+=a===fe?o+Pn:h>=0?(i.push(d),o.slice(0,h)+Ut+o.slice(h)+L+m):o+L+(h===-2?c:m)}return[Vt(n,s+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class _e{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,a=0;const c=e.length-1,o=this.parts,[d,l]=In(e,t);if(this.el=_e.createElement(d,i),Y.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=Y.nextNode())!==null&&o.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(Ut)){const p=l[a++],m=r.getAttribute(h).split(L),b=/([.?@])?(.*)/.exec(p);o.push({type:1,index:s,name:b[2],strings:m,ctor:b[1]==="."?Cn:b[1]==="?"?Tn:b[1]==="@"?Dn:Be}),r.removeAttribute(h)}else h.startsWith(L)&&(o.push({type:6,index:s}),r.removeAttribute(h));if(Gt.test(r.tagName)){const h=r.textContent.split(L),p=h.length-1;if(p>0){r.textContent=De?De.emptyScript:"";for(let m=0;m<p;m++)r.append(h[m],we()),Y.nextNode(),o.push({type:2,index:++s});r.append(h[p],we())}}}else if(r.nodeType===8)if(r.data===Lt)o.push({type:2,index:s});else{let h=-1;for(;(h=r.data.indexOf(L,h+1))!==-1;)o.push({type:7,index:s}),h+=L.length-1}s++}}static createElement(e,t){const i=re.createElement("template");return i.innerHTML=e,i}}function de(n,e,t=n,i){var a,c;if(e===le)return e;let r=i!==void 0?(a=t._$Co)==null?void 0:a[i]:t._$Cl;const s=ye(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((c=r==null?void 0:r._$AO)==null||c.call(r,!1),s===void 0?r=void 0:(r=new s(n),r._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=de(n,r._$AS(n,e.values),r,i)),e}class On{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??re).importNode(t,!0);Y.currentNode=r;let s=Y.nextNode(),a=0,c=0,o=i[0];for(;o!==void 0;){if(a===o.index){let d;o.type===2?d=new ke(s,s.nextSibling,this,e):o.type===1?d=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(d=new Mn(s,this,e)),this._$AV.push(d),o=i[++c]}a!==(o==null?void 0:o.index)&&(s=Y.nextNode(),a++)}return Y.currentNode=re,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ke{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=de(this,e,t),ye(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&ye(this._$AH)?this._$AA.nextSibling.data=e:this.T(re.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=_e.createElement(Vt(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const a=new On(r,this),c=a.u(this.options);a.p(t),this.T(c),this._$AH=a}}_$AC(e){let t=St.get(e.strings);return t===void 0&&St.set(e.strings,t=new _e(e)),t}k(e){lt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new ke(this.O(we()),this.O(we()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Be{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(e,t=this,i,r){const s=this.strings;let a=!1;if(s===void 0)e=de(this,e,t,0),a=!ye(e)||e!==this._$AH&&e!==le,a&&(this._$AH=e);else{const c=e;let o,d;for(e=s[0],o=0;o<s.length-1;o++)d=de(this,c[i+o],t,o),d===le&&(d=this._$AH[o]),a||(a=!ye(d)||d!==this._$AH[o]),d===$?e=$:e!==$&&(e+=(d??"")+s[o+1]),this._$AH[o]=d}a&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Cn extends Be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class Tn extends Be{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}class Dn extends Be{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=de(this,e,t,0)??$)===le)return;const i=this._$AH,r=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==$&&(i===$||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Mn{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){de(this,e)}}const Ge=be.litHtmlPolyfillSupport;Ge==null||Ge(_e,ke),(be.litHtmlVersions??(be.litHtmlVersions=[])).push("3.2.1");const Wn=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new ke(e.insertBefore(we(),s),s,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=class extends ce{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return le}};var Ft;S._$litElement$=!0,S.finalized=!0,(Ft=globalThis.litElementHydrateSupport)==null||Ft.call(globalThis,{LitElement:S});const Ve=globalThis.litElementPolyfillSupport;Ve==null||Ve({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hn={attribute:!0,type:String,converter:Te,reflect:!1,hasChanged:ht},Bn=(n=Hn,e,t)=>{const{kind:i,metadata:r}=t;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(t.name,n),i==="accessor"){const{name:a}=t;return{set(c){const o=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,o,n)},init(c){return c!==void 0&&this.P(a,void 0,n),c}}}if(i==="setter"){const{name:a}=t;return function(c){const o=this[a];e.call(this,c),this.requestUpdate(a,o,n)}}throw Error("Unsupported decorator location: "+i)};function M(n){return(e,t)=>typeof t=="object"?Bn(n,e,t):((i,r,s)=>{const a=r.hasOwnProperty(s);return r.constructor.createProperty(s,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(r,s):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function se(n){return M({...n,state:!0,attribute:!1})}var Fn=Object.getOwnPropertyDescriptor,Nn=(n,e,t,i)=>{for(var r=i>1?void 0:i?Fn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(r)||r);return r};let Et=class extends S{render(){return x`
            <p>Zum Reinigen Ihrer Kleidung steht eine Waschmaschine und Wäscheständer gegen kleinen Aufpreis zur Verfügung.</p>
            <p>NICHTRAUCHERWOHNUNG: (Auf dem Balkon oder im Freien kann selbstverständlich graucht werden)</p>
            <p>Der Konsum und die Mitnahme jeglicher Art von Cannabis ist auf dem Breich des Ferienhauses und in der Ferienwohnung einschließlich der Außenbereiche verboten.</p>
            <p>WLAN und Parkplätze stehen Ihnen kostenfrei zur Verfügung.</p>
            <h3>An- und Abreise:</h3>
            <p>Anreise ist von 14:00Uhr bis 21:00Uhr möglich.</p>
            <p>Abreise ist von 07:00Uhr bis spätestens 10:00Uhr möglich.</p>
            <p>Andere An- und Abreisezeiten sind nach Rücksprache möglich.</p>
            <p>Die Schlüsselübergabe erfolgt persönlich vor Ort.</p>
            <h3>Unsere Preise beinhalten:</h3>
            <p>Folgende Nebenkosten: Strom, Wasser, Bettwäsche, Handtücher, Heizung, gesetzliche Mehrwertsteuer</p>
            <p>Kostenlosen WLAN-Zugang</p>
            <p>Kinderhochstuhl, Kinderreisebett, Tritt fürs Waschbecken auf Anfrage</p>
            <p>Ski-/Radunterstellraum</p>
            <p>Schlittenverleih</p>
            <h3>Endreinigung</h3>
            <p>Gebühr wird separat erhoben</p>
            <h3>Aufenthaltsgebühr</h3>
            <p>Gebühr wird separat erhoben</p>
            <h3>Haustiere</h3>
            <p>Bitte haben Sie Verständnis, dass wir leider keine Haustiere aufnehmen können</p>
            <h3>Storno</h3>
            <p>Storno klingt unangenehm und ist es auch - für Sie wie für uns.</p>
            <p>Bitte schließen Sie bei Bedarf eine Reiserücktrittsversicherung ab</p>
        `}};Et=Nn([R("apartment-basic-info")],Et);var Un=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,jt=(n,e,t,i)=>{for(var r=i>1?void 0:i?Ln(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=(i?a(e,t,r):a(r))||r);return i&&r&&Un(e,t,r),r};let Me=class extends S{constructor(){super(...arguments),this.selectedImage=null}openImage(n){this.selectedImage=n}closeImage(){this.selectedImage=null}render(){return x`
      <div class="welcome">
        <h2>Wilkommen</h2>
        <p>
          Unser neu gestaltetes Ferienhaus liegt direkt im Ortskern von Langdorf
          in ruhiger und dennoch zentraler Lage. Aufgeteilt in zwei separate
          geschmackvolle Ferienwohnungen mit jeweils 110qm Wohnfläche. Jede
          Wohneinheit bietet reichlich Platz für 2-5 Personen.
        </p>
        <p>
          Diese sind aufgeteilt in eine modern ausgestattete offene Küche,
          Wohnzimmer, drei geräumige Schlafzimmer, Badezimmer mit Badewanne und
          Regendusche, große Balkone, Grillplatz im Garten.
        </p>
        <p>
          Langdorf und seine Umgebung bietet sowohl für Aktivurlauber als auch
          für Erholungssuchende eine Vielzahl von Möglichkeiten - egal zu
          welcher Jahreszeit. Genießen Sie die traumhafte Landschaft des
          Bayerischen Waldes am Fuße des großen Arbers, erkunden Sie den
          Nationpark Bayerischer Wald oder besuchen Sie historische Städte
          Passau oder des UNESCO Weltkulturerbe Regensburg. Verbringen Sie
          schöne Tage in familiäre Atmosphäre, aber auch Zeit für sich und die
          Natur.
        </p>
        <p>
          Wir, die Gastgeber Karin und Michael Brunnbauer, freuen uns darauf Sie
          begrüßen zu dürfen.
        </p>
        <p>Rufen Sie einfach an oder kontaktieren Sie uns über E-Mail.</p>
      </div>
      <div class="pictures">
        ${Array.from({length:4},(n,e)=>x`
            <img
              src="/images/start/0${e}.avif"
              alt=""
              @click="${()=>this.openImage(`/images/start/0${e}.avif`)}"
            />
          `)}
      </div>

      ${this.selectedImage?x`
            <div class="modal" @click="${this.closeImage}">
              <div class="image-container">
                <img src="${this.selectedImage}" alt="" />
              </div>
            </div>
          `:null}
    `}};Me.styles=D`
    :host {
      display: block;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.8);
    }

    .welcome {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .pictures {
      align-content: center;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

      img {
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
        object-fit: cover;
        display: block;
      }

      img:hover {
        transform: scale(1.1);
      }
    }

    /* Modal styling */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }

    .modal .image-container {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      max-width: 60%;
      max-height: 80%;
    }

    .modal img {
      display: block;
      max-width: 50%;
      max-height: 50%;
      width: 50%;
      height: 50%;
      border-radius: 10px;
      animation: fadeIn 0.3s ease-in-out;
    }

    .modal .close-btn {
      position: absolute;
      top: 20px;
      right: 400px;
      background: white;
      color: black;
      font-size: 24px;
      border: none;
      cursor: pointer;
      padding: 10px;
      border-radius: 50%;
      transition: background 0.2s;
    }

    .modal .close-btn:hover {
      background: red;
      color: white;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;jt([se()],Me.prototype,"selectedImage",2);Me=jt([R("apartment-home-content")],Me);var Gn=Object.getOwnPropertyDescriptor,Vn=(n,e,t,i)=>{for(var r=i>1?void 0:i?Gn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(r)||r);return r};let je=class extends S{render(){return x`
            <slider-component></slider-component>
            <apartment-home-content></apartment-home-content>
        `}};je.styles=D`
        :host {
            display: block;
            align-items: center;

            apartment-home-content {
                margin: -150px 25% 0;
            }
        }
    `;je=Vn([R("apartment-home")],je);var jn=Object.defineProperty,Kn=Object.getOwnPropertyDescriptor,dt=(n,e,t,i)=>{for(var r=i>1?void 0:i?Kn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=(i?a(e,t,r):a(r))||r);return i&&r&&jn(e,t,r),r};let $e=class extends S{constructor(){super(...arguments),this.selectedImage=1,this.currentIndex=1}render(){return x`
      <slider-component></slider-component>
      <div class="content">
        <h1>Ferienwohnung Gartenblick</h1>
        <p>
          In unserer neu gestalteten Ferienwohunung im OG ist für 2-5 Personen
          reichlich Platz vorhanden. Sie finden einen gehobenen Wohnkomfort auf
          110qm Wohnfläche vor.
        </p>
        <p>
          Die Wohnung wurde im Sommer 2024 nach umfangreicher Modernisierung und
          Renovierung fertiggestellt.
        </p>
        <p>
          Das gemütliche Wohnzimmer mit großer Courch und Flachbildschirm Sat-TV
          lädt zum Verweilen ein. Der komplett ausgestattet offene Küchenbereich
          mit Geschirrspüler, Kühlschrank, Gefrierschrank, E-Herd, Backofen,
          Mikrowelle, Wasserkocher, Kaffevollautomat und Toaster lässt keine
          Wünsche offen.
        </p>
        <p>
          Die Ferienwohnung verfügt über 3 separate moderne Schlafzimmer. 2
          Zimmer mit Doppelbett 180x200m (Boxspringbett/Französisches Bett), 1
          Zimmer mit Einzelbett 140x200m.
        </p>
        <p>
          Das geräumige Badezimmer mit ebenerdiger Dusche und Regenbrause,
          Badewanne, großen Spiegel, Hand- und Badetücher runden das Gesamtbild
          ab.
        </p>
        <p>Zudem steht ein gräumiger Südbalkon zur Verfügung.</p>
        <p>
          Im Sommer können Sie entspannte Grillabende in unserem Garten mit
          Sitzmöglichkeiten verbringen.
        </p>
        <p>Gas- und Holzkohlegrill kann dafür bereitgestellt werden.</p>
        <p>Elektrische Rolläden in der gesamten Wohnung.</p>
        <apartment-basic-info></apartment-basic-info>
        <div class="slider">
          <slider-component
            sliderZIndex="5"
            location="/images/garten/"
            imageHeight="750px"
            updateIndex="${this.selectedImage}"
            numberOfPictures="17"
            @index-changed="${n=>this.currentIndex=n.detail.index}"
          ></slider-component>
        </div>
        <div class="pictures">
          ${Array.from({length:17},(n,e)=>x`
              <img
                class="${this.currentIndex===e+1?"active":""}"
                src="/images/garten/${e+1}.avif"
                alt=""
                @click="${()=>{this.selectedImage=e+1,this.currentIndex=e+1}}"
              />
            `)}
        </div>
      </div>
    `}};$e.styles=D`
    :host {
      .pictures {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;

        img {
          width: 100%;
          height: auto;
          aspect-ratio: 1/1;
          object-fit: cover;
          display: block;
        }

        img:hover,
        img.active {
          transform: scale(1.1);
        }
      }

      /* Modal styling */
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
      }

      .modal .image-container {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        max-width: 60%;
        max-height: 80%;
      }

      .modal img {
        display: block;
        max-width: 50%;
        max-height: 50%;
        width: 50%;
        height: 50%;
        border-radius: 10px;
        animation: fadeIn 0.3s ease-in-out;
      }

      .modal .close-btn {
        position: absolute;
        top: 20px;
        right: 400px;
        background: white;
        color: black;
        font-size: 24px;
        border: none;
        cursor: pointer;
        padding: 10px;
        border-radius: 50%;
        transition: background 0.2s;
      }

      .modal .close-btn:hover {
        background: red;
        color: white;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .content {
        margin: -150px 25% 0;
        display: block;
        line-height: 1.6;
        color: #333;
        background: rgba(255, 255, 255, 0.8);
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 5;
      }

      .slider {
        padding-bottom: 2rem;
        display: block;
      }
    }
  `;dt([se()],$e.prototype,"selectedImage",2);dt([se()],$e.prototype,"currentIndex",2);$e=dt([R("apartment-garden-view")],$e);var Zn=Object.defineProperty,qn=Object.getOwnPropertyDescriptor,ut=(n,e,t,i)=>{for(var r=i>1?void 0:i?qn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=(i?a(e,t,r):a(r))||r);return i&&r&&Zn(e,t,r),r};let Ae=class extends S{constructor(){super(...arguments),this.selectedImage=1,this.currentIndex=1}render(){return x`
      <slider-component></slider-component>
      <div class="content">
        <h1>Ferienwohnung Rachelblick</h1>
        <p>
          In unserer neu gestalteten Ferienwohunung im EG ist für 2-5 Personen
          reichlich Platz vorhanden. Sie finden einen gehobenen Wohnkomfort auf
          110qm Wohnfläche vor.
        </p>
        <p>
          Die Wohnung wurde im Herbst 2024 nach umfangreicher Modernisierung und
          Renovierung fertiggestellt.
        </p>
        <p>
          Das gemütliche Wohnzimmer mit großer Courch und Flachbildschirm Sat-TV
          lädt zum Verweilen ein. Der komplett ausgestattet offene Küchenbereich
          mit Tresen und Barhocker, Geschirrspüler, Kühlschrank, Gefrierschrank,
          E-Herd, Backofen, Mikrowelle, Wasserkocher, Kaffevollautomat und
          Toaster lässt keine Wünsche offen.
        </p>
        <p>
          Die Ferienwohnung verfügt über 3 separate moderne Schlafzimmer mit
          Boxspringbetten. 2 Zimmer mit Doppelbett 180x200m, 1 Zimmer mit
          Einzelbett 140x200m.
        </p>
        <p>
          Das geräumige Badezimmer mit ebenerdiger Dusche und Regenbrause,
          Badewanne, großenm Spiegel, Hand- und Badetücher runden das Gesamtbild
          ab.
        </p>
        <p>
          Zudem steht ein gräumiger Ostbalkon, der sich über die gesamte
          Hauslägne erstreckt zur Verfügung. Von dort aus können Sie über eine
          Treppe ddirekt in den 'Garten gelangen.
        </p>
        <p>
          Im Sommer können Sie entspannte Grillabende in unserem Garten mit
          Sitzmöglichkeiten verbringen. Gas- und Holzkohlegrill kann dafür
          bereitgestellt werden.
        </p>
        <p>Elektrische Rolläden in der gesamten Wohnung.</p>
        <apartment-basic-info></apartment-basic-info>
        <div class="slider">
          <slider-component
            sliderZIndex="5"
            location="/images/rachel/"
            imageHeight="750px"
            updateIndex="${this.selectedImage}"
            numberOfPictures="16"
            @index-changed="${n=>this.currentIndex=n.detail.index}"
          ></slider-component>
        </div>
        <div class="pictures">
          ${Array.from({length:16},(n,e)=>x`
              <img
                class="${this.currentIndex===e+1?"active":""}"
                src="/images/rachel/${e+1}.avif"
                alt=""
                @click="${()=>{this.selectedImage=e+1,this.currentIndex=e+1}}"
              />
            `)}
        </div>
      </div>
    `}};Ae.styles=D`
    :host {
      .pictures {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;

        img {
          width: 100%;
          height: auto;
          aspect-ratio: 1/1;
          object-fit: cover;
          display: block;
        }

        img:hover,
        img.active {
          transform: scale(1.1);
        }
      }

      /* Modal styling */
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
      }

      .modal .image-container {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        max-width: 60%;
        max-height: 80%;
      }

      .modal img {
        display: block;
        max-width: 50%;
        max-height: 50%;
        width: 50%;
        height: 50%;
        border-radius: 10px;
        animation: fadeIn 0.3s ease-in-out;
      }

      .modal .close-btn {
        position: absolute;
        top: 20px;
        right: 400px;
        background: white;
        color: black;
        font-size: 24px;
        border: none;
        cursor: pointer;
        padding: 10px;
        border-radius: 50%;
        transition: background 0.2s;
      }

      .modal .close-btn:hover {
        background: red;
        color: white;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .content {
        margin: -150px 25% 0;
        display: block;
        line-height: 1.6;
        color: #333;
        background: rgba(255, 255, 255, 0.8);
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      .slider {
        padding-bottom: 2rem;
        display: block;
      }
    }
  `;ut([se()],Ae.prototype,"selectedImage",2);ut([se()],Ae.prototype,"currentIndex",2);Ae=ut([R("apartment-rachel-view")],Ae);var Jn=Object.getOwnPropertyDescriptor,Qn=(n,e,t,i)=>{for(var r=i>1?void 0:i?Jn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(r)||r);return r};let Ke=class extends S{render(){return x`
            <h1>Sommer in Langdorf</h1>
            <div class="textWithPic">
                <div>
                    <p>Langdorf liegt am Südhang des Großen Arbers, im Herzen des Bayerischen Waldes. Der Ort und seine Umgebung bieten eine Fülle an individuellen Freizeitmöglichkeiten – egal, ob im Frühling, im Sommer oder im Herbst. Erleben Sie die schier unendlichen Wälder und die Natur des Bayerischen Waldes beim Wandern, Mountainbiken, Nordic-Walking, Kanu fahren, Rafting, Gleitschirmfliegen u.v.m. Die Möglichkeiten scheinen fast unbegrenzt.</p>
                    <p>Die bekannten Bayerwald-Gipfel Großer Arber, Osser, Falkenstein und Rachel laden zu herrlichen Gipfeltouren ein.</p>
                </div>
                <img src="/images/summer/2.avif" alt="">
            </div>
            <h2>Der Große Arber – „König des Bayerischen Waldes“</h2>
            <p>Der Große Arber ist mit 1456m der höchste Berg des Bayerischen Waldes. Zusammen mit dem Großen und dem kleinen Arbersee ist der Große Arber eines der attraktivsten Ziele im Bayerischen Wald.</p>
            <div class="textWithPic">
                <p>Eine Wanderung zum Großen Arber – z.B. über die Rißlochfälle – ist fast schon ein Muss für jeden Urlaubsgast.</p>
                <img src="/images/summer/1.avif" alt="">
            </div>
            <div class="textWithPic">
                <img src="/images/summer/0.avif" alt="">
                <p>Wer nicht so gut zu Fuß ist, fährt mit der Arber Gondelbahn hoch zum Gipfel und genießt den herrlichen Panoramablick.</p>
            </div>
            <h2>Aktivzentrum am Bretterschachten</h2>
            <div class="textWithPic">
                <p>
                    Im Winter eines der bekanntesten Langlaufgebiete Mitteleuropas, bietet das 1120m hoch gelegene Aktivzentrum Bodenmais am Bretterschachten auch in den warmen Jahreszeiten eine Vielzahl von Freizeitmöglichkeiten.
                    Es ist Ausgangspunkt für herrliche Nordic-Walking, Mountainbike- und Wandertouren.
                </p>
                <img src="/images/summer/6.avif" alt="">
            </div>
            <h2>Der Silberberg</h2>
            <div class="textWithPic">
                <p>
                    Der 955m hohe Silberberg ist der Hausberg von Bodenmais. Früher wurden hier Erze abgebaut, heute ist der Silberberg ein Freizeit-Paradies und Ausflugsziel für die ganze Familie.
                    Die Silberberg-Sesselbahn mit der Sommerrodelbahn, der neuen Tubingbahn, dem Kinder-Klettergarten, den Abenteuer-Spielplätzen und der Silberberg-Alm bieten Freizeitspaß für Groß und Klein.
                </p>
                <img src="/images/summer/3.avif" alt=""></img>
            </div>
            <h2>Der Nationalpark Bayerischer Wald</h2>
            <p>Erfahren Sie Natur hautnah im Nationalpark Bayerischer Wald, dem 1. Nationalpark Deutschlands.</p>
            <div class="textWithPic">
                <p>Beobachten Sie Tiere in ihrer natürlichen Umgebung und bestaunen Sie seltene Pflanzen – alles gemäß dem Leitspruch „Natur Natur sein lassen“.</p>
            </div>
            <p>Dazu gibt es sehens- und erlebenswerte Besuchereinrichtungen im Nationalpark Bayerischer Wald, wie z. B. das Nationalparkzentrum Falkenstein bei Ludwigsthal mit dem Besucherzentrum Haus zur Wildnis und dem Tierfreigelände mit Steinhöhle oder Nationalpark am Lusen bei Neuschönau mit dem Hans-Eisenmann-Haus, dem großen Tierfreigelände, dem Pflanzen- und dem Gesteinsfreigelände und dem abenteuerlichen Baumwipfelpfad.</p>
            <h2>Nähere Informationen und weitere Freizeitmöglichkeiten</h2>
            <ul>
                <li>Langdorfer Aussichtsturm</li>
                <li>Rißlochfälle Bodenmais</li>
                <li>Baumwipfelpfad Neuschönau, St. Englmar</li>
                <li>Schwellhäusl</li>
                <li>Arbersee</li>
                <li>Joska Glasparadies</li>
                <li>Glasdorf Weinfurtner</li>
                <li>Pullman City Eging am See</li>
                <li>Bikepark Geisskopf</li>
                <li>Freibad Regen</li>
                <li>Freibad Bodenmais</li>
            </ul>
        `}};Ke.styles=D`
    :host {
      display: block;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f9;
      padding: 2rem;
      border-radius: 8px;
      margin: 0 25%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      .textWithPic {
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          min-width: 150px;
          min-height: 150px;
          height: 150px;
          width: 150px;
          padding: 20px;
        }
      }
    }
  `;Ke=Qn([R("summer-activities")],Ke);var Xn=Object.getOwnPropertyDescriptor,Yn=(n,e,t,i)=>{for(var r=i>1?void 0:i?Xn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(r)||r);return r};let Ze=class extends S{render(){return x`
      <h1>Winter in Langdorf</h1>
      <p>
        Langdorf und seine Umgebung bieten eine Vielzahl von
        Wintersportmöglichkeiten.
      </p>
      <h2>Flutlichtloipe Langdorf</h2>
      <p>
        Diese 1,1 km lange Langlaufloipe eignet sich hervorragend als Übungs-
        und Trainingsrunde und ist sowohl für Diagonal- als auch für
        Skatingtechnik präpariert. Längere, bestens präparierte Loipen befinden
        sich in der näheren Umgebung.
      </p>
      <h2>Skigebiet Silberberg</h2>
      <p>
        Praktisch vor der Haustür lockt das familienfreundliche Skigebiet
        Silberberg mit dem Kinder-Skipark – ideal für die ersten Steh- und
        Rutschversuche auf zwei Brettern.
      </p>
      <h2>Familienspaß Großer Arber</h2>
      <div class="textWithPic">
        <p>
          Der 1456 m hohe Große Arber bietet ausgedehnte Abfahrten in allen
          Schwierigkeitsgraden. Eine moderne Gondelbahn, zwei 6er-Sesselbahnen
          und mehrere Schlepplifte bringen große und kleine Skifahrer sowie
          Snowboarder, Skitourengeher und Besucher in wenigen Minuten hinein ins
          Skivergnügen.
        </p>
        <img src="/images/winter/1.avif" alt="" />
      </div>
      <div class="textWithPic">
        <p>
          Das Loipennetz im Aktivzentrum Bodenmais am Bretterschachten zählt zu
          den besten und schneesichersten Skilanglaufgebieten in Mitteleuropa.
          114 Loipenkilometer für die klassische Technik und 110 km für die
          Skating-Technik bieten auf einer Höhe zwischen 1100 und 1300 Metern
          Laufspaß pur.
        </p>
        <img src="/images/winter/4.avif" alt="" />
      </div>
      <h2>Schneeschuhtouren</h2>
      <div class="textWithPic">
        <p>
          Erleben Sie den unberührten Winterwald, Natur und glitzernden Schnee
          auf einer Schneeschuhtour durch das Winterwonderland rund um Langdorf.
          Vorkenntnisse sind nicht erforderlich.
        </p>
        <img src="/images/winter/3.avif" alt="" />
      </div>
      <h2>Winterrodelbahnen</h2>
      <p>
        Die Winterrodelbahn direkt im Dorf oder am Silberberg bietet Rodelspaß
        pur.
      </p>
      <h2>Eishalle Regen</h2>
      <p>
        Die Eishalle Regen bietet im Winter für Familien Freizeitspaß für Groß
        und Klein.
      </p>
      <p>
        Der Öffenltich eislauf ist ein Spaß für die ganze Familie. Egal, ob es
        draußen regnet oder die Sonne scheint, hier kann man sich jeden
        Dienstag, Mittwoch und Sonntag so richtig austoben.
      </p>
      <h2>Nähere Informationen und weitere Freizeitmöglichkeiten:</h2>
      <ul>
        <li>Hallenbad Aquacur Bad Kötzing</li>
        <li>Hallenbad und Bayerwaldsauna Zwiesel</li>
        <li>Hallenbad Elypso Deggendorf</li>
        <li>Joska Glasparadis</li>
        <li>Glasdorf Weinfurtner</li>
      </ul>
    `}};Ze.styles=D`
    :host {
      display: block;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f9;
      padding: 2rem;
      border-radius: 8px;
      margin: 0 25%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      .textWithPic {
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          min-width: 150px;
          min-height: 150px;
          height: 150px;
          width: 150px;
          padding: 20px;
        }
      }
    }
  `;Ze=Yn([R("winter-activities")],Ze);var ei=Object.getOwnPropertyDescriptor,ti=(n,e,t,i)=>{for(var r=i>1?void 0:i?ei(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(r)||r);return r};let qe=class extends S{render(){return x`
            <h1>Hausordnung</h1>

            <section>
                <h2>Liebe Feriengäste,</h2>
                <p>Unsere Ferienwohnung soll Ihnen ein zweites Zuhause sein. Sie sollen sich wohlfühlen und ausruhen können. Wir haben uns mit der Einrichtung viel Mühe gegeben und hoffen, dass Sie alles vorfinden, was Sie benötigen. Die nachstehende Hausordnung soll eine Hilfestellung für einen harmonischen Aufenthalt sein. Außerdem haben wir einige Regeln aufgeführt, von denen wir hoffen, dass sie Ihr Verständnis finden. Durch eine ordentliche Behandlung der Wohnung helfen Sie uns auch in Zukunft, Ihnen und anderen Gästen zufriedenstellende Räumlichkeiten anzubieten.</p>
            </section>

            <section>
                <h2>Allgemein</h2>
                <p>Sollten Sie irgendetwas in der Einrichtung vermissen oder wenn Sie Hilfe brauchen, wenden Sie sich vertrauensvoll an uns. Sämtliche Dinge, die sich in der Ferienwohnung oder auf dem Balkon bzw. der Terrasse befinden, sind dort zuhause und sollen von den Gästen benutzt werden. Bitte gehen Sie mit der gesamten Einrichtung und dem Inventar sorgsam um und behandeln Sie das Mietobjekt pfleglich. Tragen Sie bitte Sorge dafür, dass auch Ihre Mitreisenden die Mietbedingungen einhalten.</p>
            </section>

            <section>
                <h2>Küche</h2>
                <p>Bitte gehen Sie pfleglich mit der Kücheneinrichtung und den technischen Geräten um. Da eine verschmutzte Küche niemanden erfreut, stellen Sie bitte Geschirr, Töpfe und Besteck nur in sauberem und trockenem Zustand in die Schränke. Stellen Sie heiße Töpfe und andere heiße Gegenstände bitte nicht ohne Untersetzer auf die Tische oder die Arbeitsplatte. Benutzen Sie zum Schneiden immer ein Schneidebrett als Unterlage. Hinterlassen Sie den Innenraum von Backofen und Mikrowelle bitte im sauberen Zustand.</p>
            </section>

            <section>
                <h2>Raucher</h2>
                <p>Rauchen ist in der Ferienwohnung nicht erlaubt. Auch jegliche Art von Cannabis ist im Bereich des Ferienhauses verboten. Bitte verlassen Sie zum Rauchen die Ferienwohnung oder benutzen Sie dazu den Balkon. Entsorgen Sie bitte die vollständig erkalteten Zigarettenreste in die Mülltonne.</p>
            </section>

            <section>
                <h2>Beschädigungen</h2>
                <p>Niemand beschädigt absichtlich Sachen, es kann jedoch jedem passieren, dass einmal etwas kaputt geht. Wir würden uns freuen, wenn Sie den entstandenen Schaden mitteilen und ihn nicht erst nach Ihrer Abreise bei der Endreinigung feststellen. Der Mieter haftet für Beschädigungen in Höhe der Wiederbeschaffungskosten.</p>
            </section>

            <section>
                <h2>Lüften</h2>
                <p>Wir bitten Sie, die Räume ausreichend zu lüften, mindestens 1x Stoßlüftung am Tag für 5-10 min. Bei gekippten Fenstern bitten wir Sie, die Heizung dementsprechend zu drosseln. Im Winter ausschließlich Stoßlüftung, zur Vermeidung von Schimmelbildung, drosseln Sie zudem die Heizung während des Lüftvorgangs. Im Winter bitte keine gekippten Fenster.</p>
            </section>

            <section>
                <h2>Sorgfaltspflicht</h2>
                <p>Wir bitten unsere Gäste, das Mietobjekt pfleglich zu behandeln und dafür Sorge zu tragen, dass auch Mitreisende und Angehörige die Mietbedingungen einhalten. Die Eingangstür soll grundsätzlich geschlossen sein und beim Verlassen des Hauses per Schlüssel verschlossen werden. Ebenso sind alle Fenster bei Verlassen der Wohnung zu schließen, um mögliche Schäden durch Unwetter oder Einbruch zu vermeiden. Mit den Ressourcen Wasser und Strom ist schonend umzugehen.</p>
            </section>

            <section>
                <h2>Entsorgung</h2>
                <p>Der Abfall wird nach Restmüll, Papier in der Küche sortiert. Für Glas, Dosen, Folien, Tetra Pak stehen Ihnen separate Behältnisse zur Mülltrennung zur Verfügung. Alle Mülleimer und der Kosmetikeimer im Bad bitte nur mit Mülltüten benutzen. In die Küchenspüle, der Toilette, die Waschbecken und Dusche dürfen keine Abfälle, Essensreste, schädliche Flüssigkeiten oder Ähnliches geworfen bzw. geschüttet werden! Vermeiden Sie alles, was zu Verstopfung der Leitungen führen kann (keine Hygieneartikel in die Toilette).</p>
            </section>

            <section>
                <h2>Reinigung</h2>
                <p>Sollten Ihnen mal ein Missgeschick (extremer Schmutz, Flüssigkeiten auf den Boden oder Arbeitsflächen usw.) passieren, bitten wir Sie, dies sofort zu beseitigen. Wir bitten Sie, die Ferienwohnung bei Abreise besenrein zu hinterlassen und alles benutzte Geschirr wieder sauber in die Schränke einzuräumen.</p>
            </section>

            <section>
                <h2>Internet/WLAN</h2>
                <p>In der Ferienwohnung ist ein kabelloser Internetanschluss (WLAN) vorhanden. Bitte fragen Sie uns nach dem Zugangs-Code. Die Nutzung des Internets mit Ihrem eigenen WLAN-fähigen Endgerät (Notebook, Smartphone etc.) über den WLAN-Anschluss ist für den Mieter kostenlos. Sie nutzen das Internet auf eigene Gefahr, der Vermieter schließt jede Haftung im Zusammenhang mit der Internetnutzung des Mieters aus. Für die Nutzung des Internetzugangs über WLAN sind zusätzlich die WLAN-Nutzungsregeln zu berücksichtigen. Bitte haben Sie aber Verständnis dafür, dass wir uns gegen Missbrauch mit einer Unterschrift ihrerseits absichern müssen.</p>
            </section>

            <section>
                <h2>Haustiere</h2>
                <p>Das Mitbringen von Haustieren ist nicht erlaubt.</p>
            </section>
            
            <section>
                <h2>Parkmöglichkeiten</h2>
                <p>Es kann 1 Auto direkt im Innenhof geparkt werden, ein weiterer Parkplatz kann auf Anfrage durch den Vermieter zugewiesen werden. Soweit Ihnen ein Stellplatz zur Verfügung gestellt wird, kommt dadurch kein Verwahrungsvertrag zustande. Bei Abhandenkommen oder Beschädigung auf dem Grundstück abestellter oder rangierter Kraftfarhzeuge und deren Inhalte haftet der Vermieter nicht, außer bei Vorsatz oder grober Fahrlässigkeit.</p>
            </section>
            
            <section>
                <h2>Hausrecht</h2>
                <p>Bei sofort notwendiger Reparatur kann es unerlässlich sein, dass der Vermieter die Ferienwohung ohne Wissen des Gastes betreten muss.</p>
            </section>
            
            <section>
                <h2>Schlüssel</h2>
                <p>Bitte geben Sie die Schlüssel nie aus der Hand. Ein Verlust der Schlüssel ist umgehend zu melden und der Gast haftet bis zur Höhe der Wiederbeschaffungskosten.</p>
            </section>
            
            <section>
                <h2>Kündigung</h2>
                <p>Bei mehrfachen Verstoß gegen die Mietbedingungen kann der Vermieter den Mietvertrag einseitig kündigen und der Gast hat die Ferienwohung sofort zu verlassen. Ein Anspruch auf Rückerstattung des Mietpreises besteht in diesem Falle nicht.</p>
            </section>
            
            <section>
                <h2>Haftung</h2>
                <p>Der Vermieter haftet nicht für Wertgegenstände des Gastes/der Gäste.</p>
            </section>
            
            <section>
                <h2>An- und Abreise</h2>
                <p>Die Anreise erfolgt nach Absprache. Am Abreisetag bitten wir unsere Gäste die Ferienwohnung bis spätestens 10 Uhr freizugeben. Bei Ihrer Abreise sollte die Ferienwohung wieder so aussehen, wie Sie sie vorgefunden haben. Die Endreinigung wird vom Hauseigentümer übernommen.</p>
            </section>
            
            <section class="note">
                <p>Mit der Buchung der Ferienwohnung gehen wir davon aus, dass die Hausordnung anerkannt wird.</p>
                <p>Vielen Dank für Ihre Aufmerksamkeit</p>
                <p>Wir wünschen Ihnen einen angenehmen Aufenthalt, viel Spaß, Entspannung und Erholung. Bei Fragen stehen wir Ihnen gern zur Verfügung.</p>
                <b>Ihre Gastgeber</b>
                <p><b>Familie Brunnbauer</b></p>
            </section>
        `}};qe.styles=D`
    :host {
        display: block;
        text-align: center;
        line-height: 1.6;
        color: #333;
        background-color: #f4f4f9;
        padding: 2rem;
        border-radius: 8px;
        margin: 0 25%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
        section {
            margin-bottom: 20px;
        }
        .note {
            margin-top: 100px;
        }
    }
  `;qe=ti([R("house-rules")],qe);var ni=Object.getOwnPropertyDescriptor,ii=(n,e,t,i)=>{for(var r=i>1?void 0:i?ni(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(r)||r);return r};let Je=class extends S{render(){return x`
            <h1>Preise</h1>
            <div class="cards">
                <price-card header="Sommer" range="(01.04.-30.09.)" twoPersons="85 Euro" threeToFourPersons="105 Euro" fivePersons="115 Euro"></price-card>
                <price-card header="Winter" range="(07.01.-31.03.) & (1.10.-21.12.)" twoPersons="95 Euro" threeToFourPersons="115 Euro" fivePersons="125 Euro"></price-card>
                <price-card header="Weihnachten/Neujahr" range="(22.12.-06.01.)" twoPersons="100 Euro" threeToFourPersons="120 Euro" fivePersons="130 Euro"></price-card>
            </div>
            <p>Kinder unter 3 Jahren frei, 3-7Jahre 10 Euro pro Tag,</p>
            <p>Endreinigung 60 Euro einmalig</p>
            <p>Kurzzeitzuschlag bis 3 Nächte 20 Euro einmalig</p>
        `}};Je.styles=D`
        :host {
            display: block;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f9;
            padding: 2rem;
            border-radius: 8px;
            margin: 0 25%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            
            .cards {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                gap: 16px;
            }
        }
    `;Je=ii([R("price-component")],Je);var ri=Object.defineProperty,si=Object.getOwnPropertyDescriptor,ue=(n,e,t,i)=>{for(var r=i>1?void 0:i?si(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=(i?a(e,t,r):a(r))||r);return i&&r&&ri(e,t,r),r};let Z=class extends S{constructor(){super(...arguments),this.header="",this.range="",this.twoPersons="",this.threeToFourPersons="",this.fivePersons=""}render(){return x`
            <h4>${this.header}</h4>
            ${this.range}<br>
            2 Personen: ${this.twoPersons}<br>
            3-4 Personen: ${this.threeToFourPersons}<br>
            5 Personen: ${this.fivePersons}
        `}};Z.styles=D`
        :host {
            display: block;
            line-height: 1.6;
            color: #333;
            background-color: lightgray;
            padding: 8px;
            border-radius: 8px;
            margin: 2rem auto;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 350px;
            text-align: center;
        }
    `;ue([M({type:String})],Z.prototype,"header",2);ue([M({type:String})],Z.prototype,"range",2);ue([M({type:String})],Z.prototype,"twoPersons",2);ue([M({type:String})],Z.prototype,"threeToFourPersons",2);ue([M({type:String})],Z.prototype,"fivePersons",2);Z=ue([R("price-card")],Z);var ai=Object.getOwnPropertyDescriptor,oi=(n,e,t,i)=>{for(var r=i>1?void 0:i?ai(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=a(r)||r);return r};let Qe=class extends S{render(){return x`
      <h2>Kontakt:</h2>
      <p>Unsere E-Mail-Adressen:</p>
      <a href="mailto:Fwh.gartenblick@gmail.com">Fwh.gartenblick@gmail.com</a>
      <br>
      <a href="mailto:Fwh.rachelblick@gmail.com">Fwh.rachelblick@gmail.com</a>
      <br>
      <br>
      <p>Unsere Adresse:</p>
      <address>
          <p>Ferienhaus Brunnbauer</p>
          <p>Regenerstraße 11</p>
          <p>94264 Langdorf</p>
      </address>
      <br>
      <p>Gerne können Sie auch telefonisch bei uns buchen, rufen Sie uns an unter Tel. 09921/959790 oder Mobil. 0151/28991796.</p>
      <p>Wir möchten Ihnen das Buchen oder Anfrage so einfach und schnell wie möglich anbieten, deshalb verzichten wir auf ein Kontaktformular.</p>
      <p>Zögern Sie nicht und rufen Sie uns an, wir werden alle Ihre Fragen beantworten.<br></p>
      <br>
      <p>Wir freuen uns auf Ihre Nachricht oder Anruf.</p>
      <br>
      <p>Ihre Familie Brunnbauer</p>
    `}};Qe.styles=D`
    :host {
      display: block;
      line-height: 1.6;
      color: #333;
      background-color: #f4f4f9;
      padding: 2rem;
      border-radius: 8px;
        margin: 0 25%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    h2 {
      margin-top: 1.5rem;
      color: #555;
    }

    p, 
    address {
      margin: 0.5rem 0;
    }

    a {
      color: #4CAF50;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `;Qe=oi([R("impressum-component")],Qe);var ci=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,q=(n,e,t,i)=>{for(var r=i>1?void 0:i?hi(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(r=(i?a(e,t,r):a(r))||r);return i&&r&&ci(e,t,r),r};let F=class extends S{constructor(){super(...arguments),this.updateIndex=5,this.location="/images/start/",this.sliderZIndex=-1,this.imageHeight="60rem",this.numberOfPictures=6,this.fading=!1,this.currentIndex=5,this.pendingIndex=null}changeImage(n){this.fading||(this.fading=!0,this.pendingIndex=n,setTimeout(()=>{this.currentIndex=this.pendingIndex,this.pendingIndex=null,this.fading=!1},200))}shift(n){const e=(this.currentIndex+n-1+this.numberOfPictures)%this.numberOfPictures+1;this.dispatchEvent(new CustomEvent("index-changed",{detail:{index:e},bubbles:!0,composed:!0})),this.changeImage(e)}updated(n){n.has("updateIndex")&&this.pendingIndex===null&&this.changeImage(this.updateIndex)}render(){return x`
            <div class="slider-container">
                <button @click="${()=>this.shift(-1)}"> < </button>
                <img class="${this.fading?"fade-out":""}" style="z-index: ${this.sliderZIndex}; max-height: ${this.imageHeight}" src="${this.location}${this.currentIndex}.jpg" alt="">
                <button @click="${()=>this.shift(1)}"> > </button>
            </div>
        `}};F.styles=D`
        :host {
            display: flex;
            width: 100%;

            .slider-container {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
            }

            .fade-out {
                opacity: 0 !important;
            }
            
            img {
                width: 100%;
                display: block;
                opacity: 1;
                transition: opacity 0.2s ease-in-out;
            }
            
            button {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                padding: 10px;
                cursor: pointer;
                font-size: 24px;
                z-index: 9999;
            }
            
            button:hover {
                background: rgba(0, 0, 0, 0.7);
            }
            
            button:first-of-type {
                left: 10px;
            }

            button:last-of-type {
                right: 10px;
            }
        }
    `;q([M({type:Number})],F.prototype,"updateIndex",2);q([M({type:String})],F.prototype,"location",2);q([M({type:Number})],F.prototype,"sliderZIndex",2);q([M({type:String})],F.prototype,"imageHeight",2);q([M({type:Number})],F.prototype,"numberOfPictures",2);q([se()],F.prototype,"fading",2);q([se()],F.prototype,"currentIndex",2);F=q([R("slider-component")],F);function li(n){for(var e=[],t=0;t<n.length;){var i=n[t];if(i==="*"||i==="+"||i==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(i==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(i==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(i==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(i===":"){for(var r="",s=t+1;s<n.length;){var a=n.charCodeAt(s);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){r+=n[s++];continue}break}if(!r)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:r}),t=s;continue}if(i==="("){var c=1,o="",s=t+1;if(n[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<n.length;){if(n[s]==="\\"){o+=n[s++]+n[s++];continue}if(n[s]===")"){if(c--,c===0){s++;break}}else if(n[s]==="("&&(c++,n[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));o+=n[s++]}if(c)throw new TypeError("Unbalanced pattern at ".concat(t));if(!o)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:o}),t=s;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function pt(n,e){e===void 0&&(e={});for(var t=li(n),i=e.prefixes,r=i===void 0?"./":i,s=e.delimiter,a=s===void 0?"/#?":s,c=[],o=0,d=0,l="",h=function(P){if(d<t.length&&t[d].type===P)return t[d++].value},p=function(P){var A=h(P);if(A!==void 0)return A;var W=t[d],Fe=W.type,mn=W.index;throw new TypeError("Unexpected ".concat(Fe," at ").concat(mn,", expected ").concat(P))},m=function(){for(var P="",A;A=h("CHAR")||h("ESCAPED_CHAR");)P+=A;return P},b=function(P){for(var A=0,W=a;A<W.length;A++){var Fe=W[A];if(P.indexOf(Fe)>-1)return!0}return!1},w=function(P){var A=c[c.length-1],W=P||(A&&typeof A=="string"?A:"");if(A&&!W)throw new TypeError('Must have text between two parameters, missing text after "'.concat(A.name,'"'));return!W||b(W)?"[^".concat(G(a),"]+?"):"(?:(?!".concat(G(W),")[^").concat(G(a),"])+?")};d<t.length;){var y=h("CHAR"),_=h("NAME"),ae=h("PATTERN");if(_||ae){var I=y||"";r.indexOf(I)===-1&&(l+=I,I=""),l&&(c.push(l),l=""),c.push({name:_||o++,prefix:I,suffix:"",pattern:ae||w(I),modifier:h("MODIFIER")||""});continue}var v=y||h("ESCAPED_CHAR");if(v){l+=v;continue}l&&(c.push(l),l="");var J=h("OPEN");if(J){var I=m(),N=h("NAME")||"",pe=h("PATTERN")||"",oe=m();p("CLOSE"),c.push({name:N||(pe?o++:""),pattern:N&&!pe?w(I):pe,prefix:I,suffix:oe,modifier:h("MODIFIER")||""});continue}p("END")}return c}function Kt(n,e){return Zt(pt(n,e),e)}function Zt(n,e){e===void 0&&(e={});var t=ft(e),i=e.encode,r=i===void 0?function(o){return o}:i,s=e.validate,a=s===void 0?!0:s,c=n.map(function(o){if(typeof o=="object")return new RegExp("^(?:".concat(o.pattern,")$"),t)});return function(o){for(var d="",l=0;l<n.length;l++){var h=n[l];if(typeof h=="string"){d+=h;continue}var p=o?o[h.name]:void 0,m=h.modifier==="?"||h.modifier==="*",b=h.modifier==="*"||h.modifier==="+";if(Array.isArray(p)){if(!b)throw new TypeError('Expected "'.concat(h.name,'" to not repeat, but got an array'));if(p.length===0){if(m)continue;throw new TypeError('Expected "'.concat(h.name,'" to not be empty'))}for(var w=0;w<p.length;w++){var y=r(p[w],h);if(a&&!c[l].test(y))throw new TypeError('Expected all "'.concat(h.name,'" to match "').concat(h.pattern,'", but got "').concat(y,'"'));d+=h.prefix+y+h.suffix}continue}if(typeof p=="string"||typeof p=="number"){var y=r(String(p),h);if(a&&!c[l].test(y))throw new TypeError('Expected "'.concat(h.name,'" to match "').concat(h.pattern,'", but got "').concat(y,'"'));d+=h.prefix+y+h.suffix;continue}if(!m){var _=b?"an array":"a string";throw new TypeError('Expected "'.concat(h.name,'" to be ').concat(_))}}return d}}function G(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ft(n){return n&&n.sensitive?"":"i"}function di(n,e){if(!e)return n;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,r=t.exec(n.source);r;)e.push({name:r[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),r=t.exec(n.source);return n}function ui(n,e,t){var i=n.map(function(r){return qt(r,e,t).source});return new RegExp("(?:".concat(i.join("|"),")"),ft(t))}function pi(n,e,t){return fi(pt(n,t),e,t)}function fi(n,e,t){t===void 0&&(t={});for(var i=t.strict,r=i===void 0?!1:i,s=t.start,a=s===void 0?!0:s,c=t.end,o=c===void 0?!0:c,d=t.encode,l=d===void 0?function(A){return A}:d,h=t.delimiter,p=h===void 0?"/#?":h,m=t.endsWith,b=m===void 0?"":m,w="[".concat(G(b),"]|$"),y="[".concat(G(p),"]"),_=a?"^":"",ae=0,I=n;ae<I.length;ae++){var v=I[ae];if(typeof v=="string")_+=G(l(v));else{var J=G(l(v.prefix)),N=G(l(v.suffix));if(v.pattern)if(e&&e.push(v),J||N)if(v.modifier==="+"||v.modifier==="*"){var pe=v.modifier==="*"?"?":"";_+="(?:".concat(J,"((?:").concat(v.pattern,")(?:").concat(N).concat(J,"(?:").concat(v.pattern,"))*)").concat(N,")").concat(pe)}else _+="(?:".concat(J,"(").concat(v.pattern,")").concat(N,")").concat(v.modifier);else{if(v.modifier==="+"||v.modifier==="*")throw new TypeError('Can not repeat "'.concat(v.name,'" without a prefix and suffix'));_+="(".concat(v.pattern,")").concat(v.modifier)}else _+="(?:".concat(J).concat(N,")").concat(v.modifier)}}if(o)r||(_+="".concat(y,"?")),_+=t.endsWith?"(?=".concat(w,")"):"$";else{var oe=n[n.length-1],P=typeof oe=="string"?y.indexOf(oe[oe.length-1])>-1:oe===void 0;r||(_+="(?:".concat(y,"(?=").concat(w,"))?")),P||(_+="(?=".concat(y,"|").concat(w,")"))}return new RegExp(_,ft(t))}function qt(n,e,t){return n instanceof RegExp?di(n,e):Array.isArray(n)?ui(n,e,t):pi(n,e,t)}function X(n){return typeof n=="object"&&!!n}function xe(n){return typeof n=="function"}function B(n){return typeof n=="string"}function We(n=[]){return Array.isArray(n)?n:[n]}function K(n){return`[Vaadin.Router] ${n}`}class Jt extends Error{constructor(t){super(K(`Page not found (${t.pathname})`));O(this,"code");O(this,"context");this.context=t,this.code=404}}const ie=Symbol("NotFoundResult");function Qt(n){return new Jt(n)}function Xt(n){return(Array.isArray(n)?n[0]:n)??""}function He(n){return Xt(n==null?void 0:n.path)}function gi(n){return Array.isArray(n)&&n.length>0?n:void 0}const Xe=new Map;Xe.set("|false",{keys:[],pattern:/(?:)/u});function kt(n){try{return decodeURIComponent(n)}catch{return n}}function mi(n,e,t=!1,i=[],r){const s=`${n}|${String(t)}`,a=Xt(e);let c=Xe.get(s);if(!c){const l=[];c={keys:l,pattern:qt(n,l,{end:t,strict:n===""})},Xe.set(s,c)}const o=c.pattern.exec(a);if(!o)return null;const d={...r};for(let l=1;l<o.length;l++){const h=c.keys[l-1],p=h.name,m=o[l];(m!==void 0||!Object.hasOwn(d,p))&&(h.modifier==="+"||h.modifier==="*"?d[p]=m?m.split(/[/?#]/u).map(kt):[]:d[p]=m&&kt(m))}return{keys:[...i,...c.keys],params:d,path:o[0]}}var bi=mi;function Yt(n,e,t,i,r){let s,a,c=0,o=He(n);return o.startsWith("/")&&(t&&(o=o.substring(1)),t=!0),{next(d){if(n===d)return{done:!0,value:void 0};n.__children??(n.__children=gi(n.children));const l=n.__children??[],h=!n.__children&&!n.children;if(!s&&(s=bi(o,e,h,i,r),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:n}};if(s&&l.length>0)for(;c<l.length;){if(!a){const m=l[c];m.parent=n;let b=s.path.length;b>0&&e.charAt(b)==="/"&&(b+=1),a=Yt(m,e.substring(b),t,s.keys,s.params)}const p=a.next(d);if(!p.done)return{done:!1,value:p.value};a=null,c+=1}return{done:!0,value:void 0}}}}var vi=Yt;function wi(n){if(xe(n.route.action))return n.route.action(n)}function yi(n,e){let t=n;for(;t;)if(t=t.parent,t===e)return!0;return!1}function _i(n){return!!n&&typeof n=="object"&&"next"in n&&"params"in n&&"result"in n&&"route"in n}class $i extends Error{constructor(t,i){let r=`Path '${t.pathname}' is not properly resolved due to an error.`;const s=He(t.route);s&&(r+=` Resolution had failed on route: '${s}'`);super(r,i);O(this,"code");O(this,"context");this.code=i==null?void 0:i.code,this.context=t}warn(){console.warn(this.message)}}function Ai(n,e){var r;const{path:t,route:i}=e;if(i&&!i.__synthetic){const s={path:t,route:i};if(i.parent&&n.chain)for(let a=n.chain.length-1;a>=0&&n.chain[a].route!==i.parent;a--)n.chain.pop();(r=n.chain)==null||r.push(s)}}var ee,k;class en{constructor(e,{baseUrl:t="",context:i,errorHandler:r,resolveRoute:s=wi}={}){O(this,"baseUrl");z(this,ee);O(this,"errorHandler");O(this,"resolveRoute");z(this,k);if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t,this.errorHandler=r,this.resolveRoute=s,Array.isArray(e)?E(this,k,{__children:e,__synthetic:!0,action:()=>{},path:""}):E(this,k,{...e,parent:void 0}),E(this,ee,{...i,hash:"",async next(){return ie},params:{},pathname:"",resolver:this,route:g(this,k),search:"",chain:[]})}get root(){return g(this,k)}get context(){return g(this,ee)}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...g(this,k).__children??[]]}removeRoutes(){g(this,k).__children=[]}async resolve(e){const t=this,i={...g(this,ee),...B(e)?{pathname:e}:e,next:d},r=vi(g(this,k),this.__normalizePathname(i.pathname)??i.pathname,!!this.baseUrl),s=this.resolveRoute;let a=null,c=null,o=i;async function d(l=!1,h=(m=>(m=a==null?void 0:a.value)==null?void 0:m.route)(),p){var y,_;const b=p===null?(y=a==null?void 0:a.value)==null?void 0:y.route:void 0;if(a=c??r.next(b),c=null,!l&&(a.done||!yi(a.value.route,h)))return c=a,ie;if(a.done)throw Qt(i);o={...i,params:a.value.params,route:a.value.route,chain:(_=o.chain)==null?void 0:_.slice()},Ai(o,a.value);const w=await s(o);return w!=null&&w!==ie?(o.result=_i(w)?w.result:w,E(t,ee,o),o):await d(l,h,w)}try{return await d(!0,g(this,k))}catch(l){const h=l instanceof Jt?l:new $i(o,{code:500,cause:l});if(this.errorHandler)return o.result=this.errorHandler(h),o;throw l}}setRoutes(e){g(this,k).__children=[...We(e)]}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=e.startsWith("/")?new URL(t).origin+e:`./${e}`,r=new URL(i,t).href;if(r.startsWith(t))return r.slice(t.length)}addRoutes(e){return g(this,k).__children=[...g(this,k).__children??[],...We(e)],this.getRoutes()}}ee=new WeakMap,k=new WeakMap;function tn(n,e,t,i){var s;const r=e.name??(i==null?void 0:i(e));if(r&&(n.has(r)?(s=n.get(r))==null||s.push(e):n.set(r,[e])),Array.isArray(t))for(const a of t)a.parent=e,tn(n,a,a.__children??a.children,i)}function Pt(n,e){const t=n.get(e);if(t){if(t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t[0]}}function xi(n,e={}){if(!(n instanceof en))throw new TypeError("An instance of Resolver is expected");const t=new Map,i=new Map;return(r,s)=>{let a=Pt(i,r);if(!a&&(i.clear(),tn(i,n.root,n.root.__children,e.cacheKeyProvider),a=Pt(i,r),!a))throw new Error(`Route "${r}" not found`);let c=a.fullPath?t.get(a.fullPath):void 0;if(!c){let l=He(a),h=a.parent;for(;h;){const b=He(h);b&&(l=`${b.replace(/\/$/u,"")}/${l.replace(/^\//u,"")}`),h=h.parent}const p=pt(l),m=Object.create(null);for(const b of p)B(b)||(m[b.name]=!0);c={keys:m,tokens:p},t.set(l,c),a.fullPath=l}let d=Zt(c.tokens,{encode:encodeURIComponent,...e})(s)||"/";if(e.stringifyQueryParams&&s){const l={};for(const[p,m]of Object.entries(s))!(p in c.keys)&&m&&(l[p]=m);const h=e.stringifyQueryParams(l);h&&(d+=h.startsWith("?")?h:`?${h}`)}return d}}var Si=xi;const Ei=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ze=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ki(){function n(){return!0}return nn(n)}function Pi(){try{return zi()?!0:Ri()?ze?!Ii():!ki():!1}catch{return!1}}function zi(){return localStorage.getItem("vaadin.developmentmode.force")}function Ri(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ii(){return!!(ze&&Object.keys(ze).map(e=>ze[e]).filter(e=>e.productionMode).length>0)}function nn(n,e){if(typeof n!="function")return;const t=Ei.exec(n.toString());if(t)try{n=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return n(e)}window.Vaadin=window.Vaadin||{};const zt=function(n,e){if(window.Vaadin.developmentMode)return nn(n,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Pi());function Oi(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const Ci=function(){if(typeof zt=="function")return zt(Oi)};function Ti(n,e=window.Vaadin??(window.Vaadin={})){e.registrations??(e.registrations=[]),e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}Ti();Ci();const Di=n=>{const e=getComputedStyle(n).getPropertyValue("animation-name");return e&&e!=="none"},Mi=(n,e)=>{const t=()=>{n.removeEventListener("animationend",t),e()};n.addEventListener("animationend",t)};async function Wi(n,e){return n.classList.add(e),await new Promise(t=>{if(Di(n)){const i=n.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;n.setAttribute("style",`position: absolute; ${r}`),Mi(n,()=>{n.classList.remove(e),n.removeAttribute("style"),t()})}else n.classList.remove(e),t()})}var Rt=Wi;function rn(n){if(!n||!B(n.path))throw new Error(K('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!xe(n.action)&&!Array.isArray(n.children)&&!xe(n.children)&&!B(n.component)&&!B(n.redirect))throw new Error(K(`Expected route config "${n.path}" to include either "component, redirect" or "action" function but none found.`));n.redirect&&["bundle","component"].forEach(e=>{e in n&&console.warn(K(`Route config "${String(n.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function It(n){We(n).forEach(e=>rn(e))}function Hi({next:n,...e}){return e}function Re(n,e){const t=e.__effectiveBaseUrl;return t?new URL(n.replace(/^\//u,""),t).pathname:n}function sn(n){return n.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`:e,"")}function Bi(n){return sn(n.map(e=>e.route))}function C({chain:n=[],hash:e="",params:t={},pathname:i="",redirectFrom:r,resolver:s,search:a=""},c){const o=n.map(d=>d.route);return{baseUrl:(s==null?void 0:s.baseUrl)??"",getUrl:(d={})=>s?Re(Kt(Bi(n))({...t,...d}),s):"",hash:e,params:t,pathname:i,redirectFrom:r,route:c??(Array.isArray(o)?o.at(-1):void 0)??null,routes:o,search:a,searchParams:new URLSearchParams(a)}}function Ot(n,e){const t={...n.params};return{redirect:{from:n.pathname,params:t,pathname:e}}}function Fi(n,e){if(e.location=C(n),n.chain){const t=n.chain.map(i=>i.route).indexOf(n.route);n.chain[t].element=e}return e}function Ie(n,e,...t){if(typeof n=="function")return n.apply(e,t)}function Ct(n,e,...t){return i=>i&&X(i)&&("cancel"in i||"redirect"in i)?i:Ie(e==null?void 0:e[n],e,...t)}function Ni(n,e){if(!Array.isArray(n)&&!X(n))throw new Error(K(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(n)}`));const t=We(n);t.forEach(i=>rn(i)),e.__children=t}function ve(n,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${n}`,{cancelable:n==="go",detail:e}))}function Ui(n){if(typeof n!="object")return String(n);const[e="Unknown"]=/ (.*)\]$/u.exec(String(n))??[];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(n)}`:e}function Li(n){const{port:e,protocol:t}=n,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?n.hostname:n.host;return`${t}//${s}`}function Tt(n){if(n instanceof Element)return n.nodeName.toLowerCase()}function Dt(n){if(n.defaultPrevented||n.button!==0||n.shiftKey||n.ctrlKey||n.altKey||n.metaKey)return;let e=n.target;const t=n instanceof MouseEvent?n.composedPath():n.path??[];for(let o=0;o<t.length;o++){const d=t[o];if("nodeName"in d&&d.nodeName.toLowerCase()==="a"){e=d;break}}for(;e&&e instanceof Node&&Tt(e)!=="a";)e=e.parentNode;if(!e||Tt(e)!=="a")return;const i=e;if(i.target&&i.target.toLowerCase()!=="_self"||i.hasAttribute("download")||i.hasAttribute("router-ignore")||i.pathname===window.location.pathname&&i.hash!==""||(i.origin||Li(i))!==window.location.origin)return;const{hash:s,pathname:a,search:c}=i;ve("go",{hash:s,pathname:a,search:c})&&n instanceof MouseEvent&&(n.preventDefault(),n.type==="click"&&window.scrollTo(0,0))}const Gi={activate(){window.document.addEventListener("click",Dt)},inactivate(){window.document.removeEventListener("click",Dt)}};var Vi=Gi;function Mt(n){if(n.state==="vaadin-router-ignore")return;const{hash:e,pathname:t,search:i}=window.location;ve("go",{hash:e,pathname:t,search:i})}const ji={activate(){window.addEventListener("popstate",Mt)},inactivate(){window.removeEventListener("popstate",Mt)}};var Ki=ji;let Wt=[];const Zi={CLICK:Vi,POPSTATE:Ki};function Ht(n=[]){Wt.forEach(e=>e.inactivate()),n.forEach(e=>e.activate()),Wt=n}const qi=256;function ge(){return{cancel:!0}}const Bt={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return ie}};var Se,he,Ee,te,V,ne,H,T,u,an,on,Oe,Ye,cn,hn,et,tt,nt,U,it,rt,Ce,st,ln,dn,un,pn,fn,gn,at;class Ji extends en{constructor(t,i){const r=document.head.querySelector("base"),s=r==null?void 0:r.getAttribute("href");super([],{baseUrl:s?new URL(s,document.URL).href.replace(/[^/]*$/u,""):void 0,...i,resolveRoute:async a=>await f(this,u,an).call(this,a)});z(this,u);O(this,"location",C({resolver:this}));O(this,"ready",Promise.resolve(this.location));z(this,Se,new WeakSet);z(this,he,new WeakSet);z(this,Ee,f(this,u,at).bind(this));z(this,te,0);z(this,V);O(this,"__previousContext");z(this,ne);z(this,H,null);z(this,T,null);Ht(Object.values(Zi)),this.setOutlet(t),this.subscribe()}setOutlet(t){t&&f(this,u,rt).call(this,t),E(this,V,t)}getOutlet(){return g(this,V)}async setRoutes(t,i=!1){return this.__previousContext=void 0,E(this,ne,void 0),It(t),super.setRoutes(t),i||f(this,u,at).call(this),await this.ready}addRoutes(t){return It(t),super.addRoutes(t)}async render(t,i=!1){E(this,te,g(this,te)+1);const r=g(this,te),s={...Bt,...B(t)?{hash:"",search:"",pathname:t}:t,__renderId:r};return this.ready=f(this,u,on).call(this,s,i),await this.ready}subscribe(){window.addEventListener("vaadin-router-go",g(this,Ee))}unsubscribe(){window.removeEventListener("vaadin-router-go",g(this,Ee))}static setTriggers(...t){Ht(t)}urlForName(t,i){return g(this,ne)||E(this,ne,Si(this,{cacheKeyProvider(r){return"component"in r&&typeof r.component=="string"?r.component:void 0}})),Re(g(this,ne).call(this,t,i??void 0),this)}urlForPath(t,i){return Re(Kt(t)(i??void 0),this)}static go(t){const{pathname:i,search:r,hash:s}=B(t)?new URL(t,"http://a"):t;return ve("go",{pathname:i,search:r,hash:s})}}Se=new WeakMap,he=new WeakMap,Ee=new WeakMap,te=new WeakMap,V=new WeakMap,ne=new WeakMap,H=new WeakMap,T=new WeakMap,u=new WeakSet,an=async function(t){const{route:i}=t;if(xe(i.children)){let s=await i.children(Hi(t));xe(i.children)||({children:s}=i),Ni(s,i)}const r={component:s=>{const a=document.createElement(s);return g(this,he).add(a),a},prevent:ge,redirect:s=>Ot(t,s)};return await Promise.resolve().then(async()=>{if(f(this,u,U).call(this,t))return await Ie(i.action,i,t,r)}).then(s=>{if(s!=null&&(typeof s=="object"||typeof s=="symbol")&&(s instanceof HTMLElement||s===ie||X(s)&&"redirect"in s))return s;if(B(i.redirect))return r.redirect(i.redirect)}).then(s=>{if(s!=null)return s;if(B(i.component))return r.component(i.component)})},on=async function(t,i){var s;const{__renderId:r}=t;try{const a=await this.resolve(t),c=await f(this,u,Oe).call(this,a);if(!f(this,u,U).call(this,c))return this.location;const o=this.__previousContext;if(c===o)return f(this,u,Ce).call(this,o,!0),this.location;if(this.location=C(c),i&&f(this,u,Ce).call(this,c,r===1),ve("location-changed",{router:this,location:this.location}),c.__skipAttach)return f(this,u,st).call(this,c,o),this.__previousContext=c,this.location;f(this,u,ln).call(this,c,o);const d=f(this,u,gn).call(this,c);if(f(this,u,fn).call(this,c),f(this,u,pn).call(this,c,o),await d,f(this,u,U).call(this,c))return f(this,u,dn).call(this),this.__previousContext=c,this.location}catch(a){if(r===g(this,te)){i&&f(this,u,Ce).call(this,this.context);for(const c of((s=g(this,V))==null?void 0:s.children)??[])c.remove();throw this.location=C(Object.assign(t,{resolver:this})),ve("error",{router:this,error:a,...t}),a}}return this.location},Oe=async function(t,i=t){const r=await f(this,u,Ye).call(this,i),a=r!==i?r:t,o=Re(sn(r.chain??[]),this)===r.pathname,d=async(h,p=h.route,m)=>{const b=await h.next(!1,p,m);return b===null||b===ie?o?h:p.parent!=null?await d(h,p.parent,b):b:b},l=await d(r);if(l==null||l===ie)throw Qt(a);return l!==r?await f(this,u,Oe).call(this,a,l):await f(this,u,cn).call(this,r)},Ye=async function(t){const{result:i}=t;if(i instanceof HTMLElement)return Fi(t,i),t;if(i&&"redirect"in i){const r=await f(this,u,it).call(this,i.redirect,t.__redirectCount,t.__renderId);return await f(this,u,Ye).call(this,r)}throw i instanceof Error?i:new Error(K(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Ui(i)}". Double check the action return value for the route.`))},cn=async function(t){return await f(this,u,hn).call(this,t).then(async i=>i===this.__previousContext||i===t?i:await f(this,u,Oe).call(this,i))},hn=async function(t){const i=this.__previousContext??{},r=i.chain??[],s=t.chain??[];let a=Promise.resolve(void 0);const c=o=>Ot(t,o);if(t.__divergedChainIndex=0,t.__skipAttach=!1,r.length){for(let o=0;o<Math.min(r.length,s.length)&&!(r[o].route!==s[o].route||r[o].path!==s[o].path&&r[o].element!==s[o].element||!f(this,u,nt).call(this,r[o].element,s[o].element));t.__divergedChainIndex++,o++);if(t.__skipAttach=s.length===r.length&&t.__divergedChainIndex===s.length&&f(this,u,nt).call(this,t.result,i.result),t.__skipAttach){for(let o=s.length-1;o>=0;o--)a=f(this,u,et).call(this,a,t,{prevent:ge},r[o]);for(let o=0;o<s.length;o++)a=f(this,u,tt).call(this,a,t,{prevent:ge,redirect:c},s[o]),r[o].element.location=C(t,r[o].route)}else for(let o=r.length-1;o>=t.__divergedChainIndex;o--)a=f(this,u,et).call(this,a,t,{prevent:ge},r[o])}if(!t.__skipAttach)for(let o=0;o<s.length;o++)o<t.__divergedChainIndex?o<r.length&&r[o].element&&(r[o].element.location=C(t,r[o].route)):(a=f(this,u,tt).call(this,a,t,{prevent:ge,redirect:c},s[o]),s[o].element&&(s[o].element.location=C(t,s[o].route)));return await a.then(async o=>{if(o&&X(o)){if("cancel"in o&&this.__previousContext)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if("redirect"in o)return await f(this,u,it).call(this,o.redirect,t.__redirectCount,t.__renderId)}return t})},et=async function(t,i,r,s){const a=C(i);let c=await t;if(f(this,u,U).call(this,i)&&(c=Ct("onBeforeLeave",s.element,a,r,this)(c)),!(X(c)&&"redirect"in c))return c},tt=async function(t,i,r,s){const a=C(i,s.route),c=await t;if(f(this,u,U).call(this,i))return Ct("onBeforeEnter",s.element,a,r,this)(c)},nt=function(t,i){return t instanceof Element&&i instanceof Element?g(this,he).has(t)&&g(this,he).has(i)?t.localName===i.localName:t===i:!1},U=function(t){return t.__renderId===g(this,te)},it=async function(t,i=0,r=0){if(i>qi)throw new Error(K(`Too many redirects when rendering ${t.from}`));return await this.resolve({...Bt,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:i+1,__renderId:r})},rt=function(t=g(this,V)){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(K(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))},Ce=function({pathname:t,search:i="",hash:r=""},s){if(window.location.pathname!==t||window.location.search!==i||window.location.hash!==r){const a=s?"replaceState":"pushState";window.history[a](null,document.title,t+i+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}},st=function(t,i){var s;let r=g(this,V);for(let a=0;a<(t.__divergedChainIndex??0);a++){const c=(s=i==null?void 0:i.chain)==null?void 0:s[a].element;if(c)if(c.parentNode===r)t.chain[a].element=c,r=c;else break}return r},ln=function(t,i){var a;f(this,u,rt).call(this),f(this,u,un).call(this);const r=f(this,u,st).call(this,t,i);E(this,H,[]),E(this,T,Array.from((r==null?void 0:r.children)??[]).filter(c=>g(this,Se).has(c)&&c!==t.result));let s=r;for(let c=t.__divergedChainIndex??0;c<(((a=t.chain)==null?void 0:a.length)??0);c++){const o=t.chain[c].element;o&&(s==null||s.appendChild(o),g(this,Se).add(o),s===r&&g(this,H).push(o),s=o)}},dn=function(){if(g(this,T))for(const t of g(this,T))t.remove();E(this,T,null),E(this,H,null)},un=function(){if(g(this,T)&&g(this,H)){for(const t of g(this,H))t.remove();E(this,T,null),E(this,H,null)}},pn=function(t,i){var r;if(!(!(i!=null&&i.chain)||t.__divergedChainIndex==null))for(let s=i.chain.length-1;s>=t.__divergedChainIndex&&f(this,u,U).call(this,t);s--){const a=i.chain[s].element;if(a)try{const c=C(t);Ie(a.onAfterLeave,a,c,{},this)}finally{if((r=g(this,T))!=null&&r.includes(a))for(const c of a.children)c.remove()}}},fn=function(t){if(!(!t.chain||t.__divergedChainIndex==null))for(let i=t.__divergedChainIndex;i<t.chain.length&&f(this,u,U).call(this,t);i++){const r=t.chain[i].element;if(r){const s=C(t,t.chain[i].route);Ie(r.onAfterEnter,r,s,{},this)}}},gn=async function(t){var o,d;const i=(o=g(this,T))==null?void 0:o[0],r=(d=g(this,H))==null?void 0:d[0],s=[],{chain:a=[]}=t;let c;for(let l=a.length-1;l>=0;l--)if(a[l].route.animate){c=a[l].route.animate;break}if(i&&r&&c){const l=X(c)&&c.leave?c.leave:"leaving",h=X(c)&&c.enter?c.enter:"entering";s.push(Rt(i,l)),s.push(Rt(r,h))}return await Promise.all(s),t},at=function(t){const{pathname:i,search:r,hash:s}=t instanceof CustomEvent?t.detail:window.location;B(this.__normalizePathname(i))&&(t!=null&&t.preventDefault&&t.preventDefault(),this.render({pathname:i,search:r,hash:s},!0))};const Qi=()=>{const n=document.getElementById("app");new Ji(n).setRoutes([{path:"/",component:"apartment-home"},{path:"/wohnung/gartenblick",component:"apartment-garden-view"},{path:"/wohnung/rachelblick",component:"apartment-rachel-view"},{path:"/aktivitaeten/sommer",component:"summer-activities"},{path:"/aktivitaeten/winter",component:"winter-activities"},{path:"/hausordnung",component:"house-rules"},{path:"/preise",component:"price-component"},{path:"/kontakt",component:"impressum-component"}])};window.addEventListener("load",()=>{Qi()});
