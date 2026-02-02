(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=globalThis,Re=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),He=new WeakMap;let ct=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Re&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=He.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&He.set(t,e))}return e}toString(){return this.cssText}};const Pt=n=>new ct(typeof n=="string"?n:n+"",void 0,ze),x=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((r,i,s)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[s+1],n[0]);return new ct(t,n,ze)},kt=(n,e)=>{if(Re)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),i=he.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,n.appendChild(r)}},Be=Re?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Pt(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Rt,defineProperty:zt,getOwnPropertyDescriptor:It,getOwnPropertyNames:Ot,getOwnPropertySymbols:Ct,getPrototypeOf:Tt}=Object,ve=globalThis,Fe=ve.trustedTypes,Dt=Fe?Fe.emptyScript:"",Mt=ve.reactiveElementPolyfillSupport,ee=(n,e)=>n,pe={toAttribute(n,e){switch(e){case Boolean:n=n?Dt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ie=(n,e)=>!Rt(n,e),Ne={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:Ie};Symbol.metadata??=Symbol("metadata"),ve.litPropertyMetadata??=new WeakMap;class K extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&zt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:s}=It(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return i?.call(this)},set(a){const o=i?.call(this);s.call(this,a),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ne}static _$Ei(){if(this.hasOwnProperty(ee("elementProperties")))return;const e=Tt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ee("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee("properties"))){const t=this.properties,r=[...Ot(t),...Ct(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Be(i))}else e!==void 0&&t.push(Be(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:pe).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:pe;this._$Em=i,this[i]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??Ie)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}}K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[ee("elementProperties")]=new Map,K[ee("finalized")]=new Map,Mt?.({ReactiveElement:K}),(ve.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=globalThis,fe=Oe.trustedTypes,Ue=fe?fe.createPolicy("lit-html",{createHTML:n=>n}):void 0,ht="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,lt="?"+C,Wt=`<${lt}>`,L=document,ne=()=>L.createComment(""),re=n=>n===null||typeof n!="object"&&typeof n!="function",Ce=Array.isArray,Ht=n=>Ce(n)||typeof n?.[Symbol.iterator]=="function",_e=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Le=/-->/g,Ge=/>/g,B=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),je=/'/g,Ve=/"/g,dt=/^(?:script|style|textarea|title)$/i,Bt=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),v=Bt(1),Z=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Ke=new WeakMap,N=L.createTreeWalker(L,129);function ut(n,e){if(!Ce(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ue!==void 0?Ue.createHTML(e):e}const Ft=(n,e)=>{const t=n.length-1,r=[];let i,s=e===2?"<svg>":e===3?"<math>":"",a=X;for(let o=0;o<t;o++){const c=n[o];let d,l,h=-1,p=0;for(;p<c.length&&(a.lastIndex=p,l=a.exec(c),l!==null);)p=a.lastIndex,a===X?l[1]==="!--"?a=Le:l[1]!==void 0?a=Ge:l[2]!==void 0?(dt.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=B):l[3]!==void 0&&(a=B):a===B?l[0]===">"?(a=i??X,h=-1):l[1]===void 0?h=-2:(h=a.lastIndex-l[2].length,d=l[1],a=l[3]===void 0?B:l[3]==='"'?Ve:je):a===Ve||a===je?a=B:a===Le||a===Ge?a=X:(a=B,i=void 0);const u=a===B&&n[o+1].startsWith("/>")?" ":"";s+=a===X?c+Wt:h>=0?(r.push(d),c.slice(0,h)+ht+c.slice(h)+C+u):c+C+(h===-2?o:u)}return[ut(n,s+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class ie{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let s=0,a=0;const o=e.length-1,c=this.parts,[d,l]=Ft(e,t);if(this.el=ie.createElement(d,r),N.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=N.nextNode())!==null&&c.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ht)){const p=l[a++],u=i.getAttribute(h).split(C),f=/([.?@])?(.*)/.exec(p);c.push({type:1,index:s,name:f[2],strings:u,ctor:f[1]==="."?Ut:f[1]==="?"?Lt:f[1]==="@"?Gt:we}),i.removeAttribute(h)}else h.startsWith(C)&&(c.push({type:6,index:s}),i.removeAttribute(h));if(dt.test(i.tagName)){const h=i.textContent.split(C),p=h.length-1;if(p>0){i.textContent=fe?fe.emptyScript:"";for(let u=0;u<p;u++)i.append(h[u],ne()),N.nextNode(),c.push({type:2,index:++s});i.append(h[p],ne())}}}else if(i.nodeType===8)if(i.data===lt)c.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(C,h+1))!==-1;)c.push({type:7,index:s}),h+=C.length-1}s++}}static createElement(e,t){const r=L.createElement("template");return r.innerHTML=e,r}}function q(n,e,t=n,r){if(e===Z)return e;let i=r!==void 0?t._$Co?.[r]:t._$Cl;const s=re(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(n),i._$AT(n,t,r)),r!==void 0?(t._$Co??=[])[r]=i:t._$Cl=i),i!==void 0&&(e=q(n,i._$AS(n,e.values),i,r)),e}class Nt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??L).importNode(t,!0);N.currentNode=i;let s=N.nextNode(),a=0,o=0,c=r[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new ce(s,s.nextSibling,this,e):c.type===1?d=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(d=new jt(s,this,e)),this._$AV.push(d),c=r[++o]}a!==c?.index&&(s=N.nextNode(),a++)}return N.currentNode=L,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ce{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),re(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==Z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ht(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&re(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ie.createElement(ut(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const s=new Nt(i,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=Ke.get(e.strings);return t===void 0&&Ke.set(e.strings,t=new ie(e)),t}k(e){Ce(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const s of e)i===t.length?t.push(r=new ce(this.O(ne()),this.O(ne()),this,this.options)):r=t[i],r._$AI(s),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class we{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(e,t=this,r,i){const s=this.strings;let a=!1;if(s===void 0)e=q(this,e,t,0),a=!re(e)||e!==this._$AH&&e!==Z,a&&(this._$AH=e);else{const o=e;let c,d;for(e=s[0],c=0;c<s.length-1;c++)d=q(this,o[r+c],t,c),d===Z&&(d=this._$AH[c]),a||=!re(d)||d!==this._$AH[c],d===m?e=m:e!==m&&(e+=(d??"")+s[c+1]),this._$AH[c]=d}a&&!i&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ut extends we{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class Lt extends we{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class Gt extends we{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){if((e=q(this,e,t,0)??m)===Z)return;const r=this._$AH,i=e===m&&r!==m||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==m&&(r===m||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class jt{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const Vt=Oe.litHtmlPolyfillSupport;Vt?.(ie,ce),(Oe.litHtmlVersions??=[]).push("3.2.1");const Kt=(n,e,t)=>{const r=t?.renderBefore??e;let i=r._$litPart$;if(i===void 0){const s=t?.renderBefore??null;r._$litPart$=i=new ce(e.insertBefore(ne(),s),s,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let w=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Kt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};w._$litElement$=!0,w.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:w});const Zt=globalThis.litElementPolyfillSupport;Zt?.({LitElement:w});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:Ie},Jt=(n=qt,e,t)=>{const{kind:r,metadata:i}=t;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(t.name,n),r==="accessor"){const{name:a}=t;return{set(o){const c=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,c,n)},init(o){return o!==void 0&&this.P(a,void 0,n),o}}}if(r==="setter"){const{name:a}=t;return function(o){const c=this[a];e.call(this,o),this.requestUpdate(a,c,n)}}throw Error("Unsupported decorator location: "+r)};function P(n){return(e,t)=>typeof t=="object"?Jt(n,e,t):((r,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(i,s):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(n){return P({...n,state:!0,attribute:!1})}var Qt=Object.getOwnPropertyDescriptor,Xt=(n,e,t,r)=>{for(var i=r>1?void 0:r?Qt(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let Ze=class extends w{render(){return v`
            <p>Zum Reinigen Ihrer Kleidung steht eine Waschmaschine und Wäscheständer gegen kleinen Aufpreis zur Verfügung.</p>
            <p>NICHTRAUCHERWOHNUNG: (Auf dem Balkon oder im Freien kann selbstverständlich geraucht werden)</p>
            <p>Der Konsum und die Mitnahme jeglicher Art von Cannabis ist auf dem Bereich des Ferienhauses und in der Ferienwohnung einschließlich der Außenbereiche verboten.</p>
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
        `}};Ze=Xt([A("apartment-basic-info")],Ze);var Yt=Object.defineProperty,en=Object.getOwnPropertyDescriptor,pt=(n,e,t,r)=>{for(var i=r>1?void 0:r?en(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=(r?a(e,t,i):a(i))||i);return r&&i&&Yt(e,t,i),i};let ge=class extends w{constructor(){super(...arguments),this.selectedImage=null}openImage(n){this.selectedImage=n}closeImage(){this.selectedImage=null}render(){return v`
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
        ${Array.from({length:4},(n,e)=>v`
            <img
              src="/images/start/0${e}.avif"
              alt=""
              @click="${()=>this.openImage(`/images/start/0${e}.avif`)}"
            />
          `)}
      </div>

      ${this.selectedImage?v`
            <div class="modal" @click="${this.closeImage}">
              <div class="image-container">
                <img src="${this.selectedImage}" alt="" />
              </div>
            </div>
          `:null}
    `}};ge.styles=x`
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
  `;pt([G()],ge.prototype,"selectedImage",2);ge=pt([A("apartment-home-content")],ge);var tn=Object.getOwnPropertyDescriptor,nn=(n,e,t,r)=>{for(var i=r>1?void 0:r?tn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let $e=class extends w{render(){return v`
            <slider-component></slider-component>
            <apartment-home-content></apartment-home-content>
        `}};$e.styles=x`
        :host {
            display: block;
            align-items: center;

            apartment-home-content {
                margin: -150px 25% 0;
            }
        }
    `;$e=nn([A("apartment-home")],$e);var rn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,Te=(n,e,t,r)=>{for(var i=r>1?void 0:r?sn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=(r?a(e,t,i):a(i))||i);return r&&i&&rn(e,t,i),i};let se=class extends w{constructor(){super(...arguments),this.selectedImage=1,this.currentIndex=1}render(){return v`
      <slider-component></slider-component>
      <div class="content">
        <h1>Ferienwohnung Gartenblick</h1>
        <p>
          In unserer neu gestalteten Ferienwohnung im OG ist für 2-5 Personen
          reichlich Platz vorhanden. Sie finden einen gehobenen Wohnkomfort auf
          110qm Wohnfläche vor.
        </p>
        <p>
          Die Wohnung wurde im Sommer 2024 nach umfangreicher Modernisierung und
          Renovierung fertiggestellt.
        </p>
        <p>
          Das gemütliche Wohnzimmer mit großer Couch und Flachbildschirm Sat-TV
          lädt zum Verweilen ein. Der komplett ausgestattet offene Küchenbereich
          mit Geschirrspüler, Kühlschrank, Gefrierschrank, E-Herd, Backofen,
          Mikrowelle, Wasserkocher, Kaffeevollautomat und Toaster lässt keine
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
        <p>Zudem steht ein geräumiger Südbalkon zur Verfügung.</p>
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
          ${Array.from({length:17},(n,e)=>v`
              <img
                class="${this.currentIndex===e+1?"active":""}"
                src="/images/garten/${e+1}.avif"
                alt=""
                @click="${()=>{this.selectedImage=e+1,this.currentIndex=e+1}}"
              />
            `)}
        </div>
      </div>
    `}};se.styles=x`
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
  `;Te([G()],se.prototype,"selectedImage",2);Te([G()],se.prototype,"currentIndex",2);se=Te([A("apartment-garden-view")],se);var an=Object.defineProperty,on=Object.getOwnPropertyDescriptor,De=(n,e,t,r)=>{for(var i=r>1?void 0:r?on(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=(r?a(e,t,i):a(i))||i);return r&&i&&an(e,t,i),i};let ae=class extends w{constructor(){super(...arguments),this.selectedImage=1,this.currentIndex=1}render(){return v`
      <slider-component></slider-component>
      <div class="content">
        <h1>Ferienwohnung Rachelblick</h1>
        <p>
          In unserer neu gestalteten Ferienwohnung im EG ist für 2-5 Personen
          reichlich Platz vorhanden. Sie finden einen gehobenen Wohnkomfort auf
          110qm Wohnfläche vor.
        </p>
        <p>
          Die Wohnung wurde im Herbst 2024 nach umfangreicher Modernisierung und
          Renovierung fertiggestellt.
        </p>
        <p>
          Das gemütliche Wohnzimmer mit großer Couch und Flachbildschirm Sat-TV
          lädt zum Verweilen ein. Der komplett ausgestattet offene Küchenbereich
          mit Tresen und Barhocker, Geschirrspüler, Kühlschrank, Gefrierschrank,
          E-Herd, Backofen, Mikrowelle, Wasserkocher, Kaffeevollautomat und
          Toaster lässt keine Wünsche offen.
        </p>
        <p>
          Die Ferienwohnung verfügt über 3 separate moderne Schlafzimmer mit
          Boxspringbetten. 2 Zimmer mit Doppelbett 180x200m, 1 Zimmer mit
          Einzelbett 140x200m.
        </p>
        <p>
          Das geräumige Badezimmer mit ebenerdiger Dusche und Regenbrause,
          Badewanne, großen Spiegel, Hand- und Badetücher runden das Gesamtbild
          ab.
        </p>
        <p>
          Zudem steht ein geräumiger Ostbalkon, der sich über die gesamte
          Hauslänge erstreckt zur Verfügung. Von dort aus können Sie über eine
          Treppe direkt in den Garten gelangen.
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
          ${Array.from({length:16},(n,e)=>v`
              <img
                class="${this.currentIndex===e+1?"active":""}"
                src="/images/rachel/${e+1}.avif"
                alt=""
                @click="${()=>{this.selectedImage=e+1,this.currentIndex=e+1}}"
              />
            `)}
        </div>
      </div>
    `}};ae.styles=x`
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
  `;De([G()],ae.prototype,"selectedImage",2);De([G()],ae.prototype,"currentIndex",2);ae=De([A("apartment-rachel-view")],ae);var cn=Object.getOwnPropertyDescriptor,hn=(n,e,t,r)=>{for(var i=r>1?void 0:r?cn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let Ae=class extends w{render(){return v`
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
        `}};Ae.styles=x`
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
  `;Ae=hn([A("summer-activities")],Ae);var ln=Object.getOwnPropertyDescriptor,dn=(n,e,t,r)=>{for(var i=r>1?void 0:r?ln(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let Se=class extends w{render(){return v`
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
    `}};Se.styles=x`
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
  `;Se=dn([A("winter-activities")],Se);var un=Object.getOwnPropertyDescriptor,pn=(n,e,t,r)=>{for(var i=r>1?void 0:r?un(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let Ee=class extends w{render(){return v`
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
        `}};Ee.styles=x`
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
  `;Ee=pn([A("house-rules")],Ee);var fn=Object.getOwnPropertyDescriptor,gn=(n,e,t,r)=>{for(var i=r>1?void 0:r?fn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let xe=class extends w{render(){return v`
            <h1>Preise</h1>
            <div class="cards">
                <price-card header="Sommer" range="(01.04.-30.09.)" twoPersons="85 Euro" threeToFourPersons="105 Euro" fivePersons="115 Euro"></price-card>
                <price-card header="Winter" range="(07.01.-31.03.) & (1.10.-21.12.)" twoPersons="95 Euro" threeToFourPersons="115 Euro" fivePersons="125 Euro"></price-card>
                <price-card header="Weihnachten/Neujahr" range="(22.12.-06.01.)" twoPersons="100 Euro" threeToFourPersons="120 Euro" fivePersons="130 Euro"></price-card>
            </div>
            <p>Kinder unter 3 Jahren frei, 3-7Jahre 10 Euro pro Tag,</p>
            <p>Endreinigung 60 Euro einmalig</p>
            <p>Kurzzeitzuschlag bis 3 Nächte 20 Euro einmalig</p>
        `}};xe.styles=x`
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
    `;xe=gn([A("price-component")],xe);var mn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,J=(n,e,t,r)=>{for(var i=r>1?void 0:r?bn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=(r?a(e,t,i):a(i))||i);return r&&i&&mn(e,t,i),i};let M=class extends w{constructor(){super(...arguments),this.header="",this.range="",this.twoPersons="",this.threeToFourPersons="",this.fivePersons=""}render(){return v`
            <h4>${this.header}</h4>
            ${this.range}<br>
            2 Personen: ${this.twoPersons}<br>
            3-4 Personen: ${this.threeToFourPersons}<br>
            5 Personen: ${this.fivePersons}
        `}};M.styles=x`
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
    `;J([P({type:String})],M.prototype,"header",2);J([P({type:String})],M.prototype,"range",2);J([P({type:String})],M.prototype,"twoPersons",2);J([P({type:String})],M.prototype,"threeToFourPersons",2);J([P({type:String})],M.prototype,"fivePersons",2);M=J([A("price-card")],M);var vn=Object.getOwnPropertyDescriptor,wn=(n,e,t,r)=>{for(var i=r>1?void 0:r?vn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let Pe=class extends w{render(){return v`
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
    `}};Pe.styles=x`
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
  `;Pe=wn([A("impressum-component")],Pe);var yn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,W=(n,e,t,r)=>{for(var i=r>1?void 0:r?_n(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=(r?a(e,t,i):a(i))||i);return r&&i&&yn(e,t,i),i};let I=class extends w{constructor(){super(...arguments),this.updateIndex=5,this.location="/images/start/",this.sliderZIndex=-1,this.imageHeight="60rem",this.numberOfPictures=6,this.fading=!1,this.currentIndex=5,this.pendingIndex=null}changeImage(n){this.fading||(this.fading=!0,this.pendingIndex=n,setTimeout(()=>{this.currentIndex=this.pendingIndex,this.pendingIndex=null,this.fading=!1},200))}shift(n){const e=(this.currentIndex+n-1+this.numberOfPictures)%this.numberOfPictures+1;this.dispatchEvent(new CustomEvent("index-changed",{detail:{index:e},bubbles:!0,composed:!0})),this.changeImage(e)}updated(n){n.has("updateIndex")&&this.pendingIndex===null&&this.changeImage(this.updateIndex)}render(){return v`
            <div class="slider-container">
                <button @click="${()=>this.shift(-1)}"> < </button>
                <img class="${this.fading?"fade-out":""}" style="z-index: ${this.sliderZIndex}; max-height: ${this.imageHeight}" src="${this.location}${this.currentIndex}.jpg" alt="">
                <button @click="${()=>this.shift(1)}"> > </button>
            </div>
        `}};I.styles=x`
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
    `;W([P({type:Number})],I.prototype,"updateIndex",2);W([P({type:String})],I.prototype,"location",2);W([P({type:Number})],I.prototype,"sliderZIndex",2);W([P({type:String})],I.prototype,"imageHeight",2);W([P({type:Number})],I.prototype,"numberOfPictures",2);W([G()],I.prototype,"fading",2);W([G()],I.prototype,"currentIndex",2);I=W([A("slider-component")],I);function $n(n){for(var e=[],t=0;t<n.length;){var r=n[t];if(r==="*"||r==="+"||r==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(r==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(r==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(r==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(r===":"){for(var i="",s=t+1;s<n.length;){var a=n.charCodeAt(s);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){i+=n[s++];continue}break}if(!i)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:i}),t=s;continue}if(r==="("){var o=1,c="",s=t+1;if(n[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<n.length;){if(n[s]==="\\"){c+=n[s++]+n[s++];continue}if(n[s]===")"){if(o--,o===0){s++;break}}else if(n[s]==="("&&(o++,n[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));c+=n[s++]}if(o)throw new TypeError("Unbalanced pattern at ".concat(t));if(!c)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:c}),t=s;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function Me(n,e){e===void 0&&(e={});for(var t=$n(n),r=e.prefixes,i=r===void 0?"./":r,s=e.delimiter,a=s===void 0?"/#?":s,o=[],c=0,d=0,l="",h=function($){if(d<t.length&&t[d].type===$)return t[d++].value},p=function($){var b=h($);if(b!==void 0)return b;var R=t[d],ye=R.type,xt=R.index;throw new TypeError("Unexpected ".concat(ye," at ").concat(xt,", expected ").concat($))},u=function(){for(var $="",b;b=h("CHAR")||h("ESCAPED_CHAR");)$+=b;return $},f=function($){for(var b=0,R=a;b<R.length;b++){var ye=R[b];if($.indexOf(ye)>-1)return!0}return!1},k=function($){var b=o[o.length-1],R=$||(b&&typeof b=="string"?b:"");if(b&&!R)throw new TypeError('Must have text between two parameters, missing text after "'.concat(b.name,'"'));return!R||f(R)?"[^".concat(T(a),"]+?"):"(?:(?!".concat(T(R),")[^").concat(T(a),"])+?")};d<t.length;){var y=h("CHAR"),_=h("NAME"),j=h("PATTERN");if(_||j){var S=y||"";i.indexOf(S)===-1&&(l+=S,S=""),l&&(o.push(l),l=""),o.push({name:_||c++,prefix:S,suffix:"",pattern:j||k(S),modifier:h("MODIFIER")||""});continue}var g=y||h("ESCAPED_CHAR");if(g){l+=g;continue}l&&(o.push(l),l="");var H=h("OPEN");if(H){var S=u(),O=h("NAME")||"",Q=h("PATTERN")||"",V=u();p("CLOSE"),o.push({name:O||(Q?c++:""),pattern:O&&!Q?k(S):Q,prefix:S,suffix:V,modifier:h("MODIFIER")||""});continue}p("END")}return o}function ft(n,e){return gt(Me(n,e),e)}function gt(n,e){e===void 0&&(e={});var t=We(e),r=e.encode,i=r===void 0?function(c){return c}:r,s=e.validate,a=s===void 0?!0:s,o=n.map(function(c){if(typeof c=="object")return new RegExp("^(?:".concat(c.pattern,")$"),t)});return function(c){for(var d="",l=0;l<n.length;l++){var h=n[l];if(typeof h=="string"){d+=h;continue}var p=c?c[h.name]:void 0,u=h.modifier==="?"||h.modifier==="*",f=h.modifier==="*"||h.modifier==="+";if(Array.isArray(p)){if(!f)throw new TypeError('Expected "'.concat(h.name,'" to not repeat, but got an array'));if(p.length===0){if(u)continue;throw new TypeError('Expected "'.concat(h.name,'" to not be empty'))}for(var k=0;k<p.length;k++){var y=i(p[k],h);if(a&&!o[l].test(y))throw new TypeError('Expected all "'.concat(h.name,'" to match "').concat(h.pattern,'", but got "').concat(y,'"'));d+=h.prefix+y+h.suffix}continue}if(typeof p=="string"||typeof p=="number"){var y=i(String(p),h);if(a&&!o[l].test(y))throw new TypeError('Expected "'.concat(h.name,'" to match "').concat(h.pattern,'", but got "').concat(y,'"'));d+=h.prefix+y+h.suffix;continue}if(!u){var _=f?"an array":"a string";throw new TypeError('Expected "'.concat(h.name,'" to be ').concat(_))}}return d}}function T(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function We(n){return n&&n.sensitive?"":"i"}function An(n,e){if(!e)return n;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,i=t.exec(n.source);i;)e.push({name:i[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),i=t.exec(n.source);return n}function Sn(n,e,t){var r=n.map(function(i){return mt(i,e,t).source});return new RegExp("(?:".concat(r.join("|"),")"),We(t))}function En(n,e,t){return xn(Me(n,t),e,t)}function xn(n,e,t){t===void 0&&(t={});for(var r=t.strict,i=r===void 0?!1:r,s=t.start,a=s===void 0?!0:s,o=t.end,c=o===void 0?!0:o,d=t.encode,l=d===void 0?function(b){return b}:d,h=t.delimiter,p=h===void 0?"/#?":h,u=t.endsWith,f=u===void 0?"":u,k="[".concat(T(f),"]|$"),y="[".concat(T(p),"]"),_=a?"^":"",j=0,S=n;j<S.length;j++){var g=S[j];if(typeof g=="string")_+=T(l(g));else{var H=T(l(g.prefix)),O=T(l(g.suffix));if(g.pattern)if(e&&e.push(g),H||O)if(g.modifier==="+"||g.modifier==="*"){var Q=g.modifier==="*"?"?":"";_+="(?:".concat(H,"((?:").concat(g.pattern,")(?:").concat(O).concat(H,"(?:").concat(g.pattern,"))*)").concat(O,")").concat(Q)}else _+="(?:".concat(H,"(").concat(g.pattern,")").concat(O,")").concat(g.modifier);else{if(g.modifier==="+"||g.modifier==="*")throw new TypeError('Can not repeat "'.concat(g.name,'" without a prefix and suffix'));_+="(".concat(g.pattern,")").concat(g.modifier)}else _+="(?:".concat(H).concat(O,")").concat(g.modifier)}}if(c)i||(_+="".concat(y,"?")),_+=t.endsWith?"(?=".concat(k,")"):"$";else{var V=n[n.length-1],$=typeof V=="string"?y.indexOf(V[V.length-1])>-1:V===void 0;i||(_+="(?:".concat(y,"(?=").concat(k,"))?")),$||(_+="(?=".concat(y,"|").concat(k,")"))}return new RegExp(_,We(t))}function mt(n,e,t){return n instanceof RegExp?An(n,e):Array.isArray(n)?Sn(n,e,t):En(n,e,t)}function F(n){return typeof n=="object"&&!!n}function oe(n){return typeof n=="function"}function z(n){return typeof n=="string"}function me(n=[]){return Array.isArray(n)?n:[n]}function D(n){return`[Vaadin.Router] ${n}`}class bt extends Error{code;context;constructor(e){super(D(`Page not found (${e.pathname})`)),this.context=e,this.code=404}}const U=Symbol("NotFoundResult");function vt(n){return new bt(n)}function wt(n){return(Array.isArray(n)?n[0]:n)??""}function be(n){return wt(n?.path)}function Pn(n){return Array.isArray(n)&&n.length>0?n:void 0}const ke=new Map;ke.set("|false",{keys:[],pattern:/(?:)/u});function qe(n){try{return decodeURIComponent(n)}catch{return n}}function kn(n,e,t=!1,r=[],i){const s=`${n}|${String(t)}`,a=wt(e);let o=ke.get(s);if(!o){const l=[];o={keys:l,pattern:mt(n,l,{end:t,strict:n===""})},ke.set(s,o)}const c=o.pattern.exec(a);if(!c)return null;const d={...i};for(let l=1;l<c.length;l++){const h=o.keys[l-1],p=h.name,u=c[l];(u!==void 0||!Object.hasOwn(d,p))&&(h.modifier==="+"||h.modifier==="*"?d[p]=u?u.split(/[/?#]/u).map(qe):[]:d[p]=u&&qe(u))}return{keys:[...r,...o.keys],params:d,path:c[0]}}var Rn=kn;function yt(n,e,t,r,i){let s,a,o=0,c=be(n);return c.startsWith("/")&&(t&&(c=c.substring(1)),t=!0),{next(d){if(n===d)return{done:!0,value:void 0};n.__children??=Pn(n.children);const l=n.__children??[],h=!n.__children&&!n.children;if(!s&&(s=Rn(c,e,h,r,i),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:n}};if(s&&l.length>0)for(;o<l.length;){if(!a){const u=l[o];u.parent=n;let f=s.path.length;f>0&&e.charAt(f)==="/"&&(f+=1),a=yt(u,e.substring(f),t,s.keys,s.params)}const p=a.next(d);if(!p.done)return{done:!1,value:p.value};a=null,o+=1}return{done:!0,value:void 0}}}}var zn=yt;function In(n){if(oe(n.route.action))return n.route.action(n)}function On(n,e){let t=n;for(;t;)if(t=t.parent,t===e)return!0;return!1}function Cn(n){return!!n&&typeof n=="object"&&"next"in n&&"params"in n&&"result"in n&&"route"in n}class Tn extends Error{code;context;constructor(e,t){let r=`Path '${e.pathname}' is not properly resolved due to an error.`;const i=be(e.route);i&&(r+=` Resolution had failed on route: '${i}'`),super(r,t),this.code=t?.code,this.context=e}warn(){console.warn(this.message)}}function Dn(n,e){const{path:t,route:r}=e;if(r&&!r.__synthetic){const i={path:t,route:r};if(r.parent&&n.chain)for(let s=n.chain.length-1;s>=0&&n.chain[s].route!==r.parent;s--)n.chain.pop();n.chain?.push(i)}}class _t{baseUrl;#n;errorHandler;resolveRoute;#e;constructor(e,{baseUrl:t="",context:r,errorHandler:i,resolveRoute:s=In}={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t,this.errorHandler=i,this.resolveRoute=s,Array.isArray(e)?this.#e={__children:e,__synthetic:!0,action:()=>{},path:""}:this.#e={...e,parent:void 0},this.#n={...r,hash:"",async next(){return U},params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#n}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.__children??[]]}removeRoutes(){this.#e.__children=[]}async resolve(e){const t=this,r={...this.#n,...z(e)?{pathname:e}:e,next:d},i=zn(this.#e,this.__normalizePathname(r.pathname)??r.pathname,!!this.baseUrl),s=this.resolveRoute;let a=null,o=null,c=r;async function d(l=!1,h=a?.value?.route,p){const u=p===null?a?.value?.route:void 0;if(a=o??i.next(u),o=null,!l&&(a.done||!On(a.value.route,h)))return o=a,U;if(a.done)throw vt(r);c={...r,params:a.value.params,route:a.value.route,chain:c.chain?.slice()},Dn(c,a.value);const f=await s(c);return f!=null&&f!==U?(c.result=Cn(f)?f.result:f,t.#n=c,c):await d(l,h,f)}try{return await d(!0,this.#e)}catch(l){const h=l instanceof bt?l:new Tn(c,{code:500,cause:l});if(this.errorHandler)return c.result=this.errorHandler(h),c;throw l}}setRoutes(e){this.#e.__children=[...me(e)]}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=e.startsWith("/")?new URL(t).origin+e:`./${e}`,i=new URL(r,t).href;if(i.startsWith(t))return i.slice(t.length)}addRoutes(e){return this.#e.__children=[...this.#e.__children??[],...me(e)],this.getRoutes()}}function $t(n,e,t,r){const i=e.name??r?.(e);if(i&&(n.has(i)?n.get(i)?.push(e):n.set(i,[e])),Array.isArray(t))for(const s of t)s.parent=e,$t(n,s,s.__children??s.children,r)}function Je(n,e){const t=n.get(e);if(t){if(t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t[0]}}function Mn(n,e={}){if(!(n instanceof _t))throw new TypeError("An instance of Resolver is expected");const t=new Map,r=new Map;return(i,s)=>{let a=Je(r,i);if(!a&&(r.clear(),$t(r,n.root,n.root.__children,e.cacheKeyProvider),a=Je(r,i),!a))throw new Error(`Route "${i}" not found`);let o=a.fullPath?t.get(a.fullPath):void 0;if(!o){let l=be(a),h=a.parent;for(;h;){const f=be(h);f&&(l=`${f.replace(/\/$/u,"")}/${l.replace(/^\//u,"")}`),h=h.parent}const p=Me(l),u=Object.create(null);for(const f of p)z(f)||(u[f.name]=!0);o={keys:u,tokens:p},t.set(l,o),a.fullPath=l}let d=gt(o.tokens,{encode:encodeURIComponent,...e})(s)||"/";if(e.stringifyQueryParams&&s){const l={};for(const[p,u]of Object.entries(s))!(p in o.keys)&&u&&(l[p]=u);const h=e.stringifyQueryParams(l);h&&(d+=h.startsWith("?")?h:`?${h}`)}return d}}var Wn=Mn;const Hn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,le=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Bn(){function n(){return!0}return At(n)}function Fn(){try{return Nn()?!0:Un()?le?!Ln():!Bn():!1}catch{return!1}}function Nn(){return localStorage.getItem("vaadin.developmentmode.force")}function Un(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ln(){return!!(le&&Object.keys(le).map(e=>le[e]).filter(e=>e.productionMode).length>0)}function At(n,e){if(typeof n!="function")return;const t=Hn.exec(n.toString());if(t)try{n=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return n(e)}window.Vaadin=window.Vaadin||{};const Qe=function(n,e){if(window.Vaadin.developmentMode)return At(n,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Fn());function Gn(){/*! vaadin-dev-mode:start
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

  vaadin-dev-mode:end **/}const jn=function(){if(typeof Qe=="function")return Qe(Gn)};function Vn(n,e=window.Vaadin??={}){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}Vn();jn();const Kn=n=>{const e=getComputedStyle(n).getPropertyValue("animation-name");return e&&e!=="none"},Zn=(n,e)=>{const t=()=>{n.removeEventListener("animationend",t),e()};n.addEventListener("animationend",t)};async function qn(n,e){return n.classList.add(e),await new Promise(t=>{if(Kn(n)){const r=n.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;n.setAttribute("style",`position: absolute; ${i}`),Zn(n,()=>{n.classList.remove(e),n.removeAttribute("style"),t()})}else n.classList.remove(e),t()})}var Xe=qn;function St(n){if(!n||!z(n.path))throw new Error(D('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!oe(n.action)&&!Array.isArray(n.children)&&!oe(n.children)&&!z(n.component)&&!z(n.redirect))throw new Error(D(`Expected route config "${n.path}" to include either "component, redirect" or "action" function but none found.`));n.redirect&&["bundle","component"].forEach(e=>{e in n&&console.warn(D(`Route config "${String(n.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function Ye(n){me(n).forEach(e=>St(e))}function Jn({next:n,...e}){return e}function de(n,e){const t=e.__effectiveBaseUrl;return t?new URL(n.replace(/^\//u,""),t).pathname:n}function Et(n){return n.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`:e,"")}function Qn(n){return Et(n.map(e=>e.route))}function E({chain:n=[],hash:e="",params:t={},pathname:r="",redirectFrom:i,resolver:s,search:a=""},o){const c=n.map(d=>d.route);return{baseUrl:s?.baseUrl??"",getUrl:(d={})=>s?de(ft(Qn(n))({...t,...d}),s):"",hash:e,params:t,pathname:r,redirectFrom:i,route:o??(Array.isArray(c)?c.at(-1):void 0)??null,routes:c,search:a,searchParams:new URLSearchParams(a)}}function et(n,e){const t={...n.params};return{redirect:{from:n.pathname,params:t,pathname:e}}}function Xn(n,e){if(e.location=E(n),n.chain){const t=n.chain.map(r=>r.route).indexOf(n.route);n.chain[t].element=e}return e}function ue(n,e,...t){if(typeof n=="function")return n.apply(e,t)}function tt(n,e,...t){return r=>r&&F(r)&&("cancel"in r||"redirect"in r)?r:ue(e?.[n],e,...t)}function Yn(n,e){if(!Array.isArray(n)&&!F(n))throw new Error(D(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(n)}`));const t=me(n);t.forEach(r=>St(r)),e.__children=t}function te(n,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${n}`,{cancelable:n==="go",detail:e}))}function er(n){if(typeof n!="object")return String(n);const[e="Unknown"]=/ (.*)\]$/u.exec(String(n))??[];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(n)}`:e}function tr(n){const{port:e,protocol:t}=n,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?n.hostname:n.host;return`${t}//${s}`}function nt(n){if(n instanceof Element)return n.nodeName.toLowerCase()}function rt(n){if(n.defaultPrevented||n.button!==0||n.shiftKey||n.ctrlKey||n.altKey||n.metaKey)return;let e=n.target;const t=n instanceof MouseEvent?n.composedPath():n.path??[];for(let c=0;c<t.length;c++){const d=t[c];if("nodeName"in d&&d.nodeName.toLowerCase()==="a"){e=d;break}}for(;e&&e instanceof Node&&nt(e)!=="a";)e=e.parentNode;if(!e||nt(e)!=="a")return;const r=e;if(r.target&&r.target.toLowerCase()!=="_self"||r.hasAttribute("download")||r.hasAttribute("router-ignore")||r.pathname===window.location.pathname&&r.hash!==""||(r.origin||tr(r))!==window.location.origin)return;const{hash:s,pathname:a,search:o}=r;te("go",{hash:s,pathname:a,search:o})&&n instanceof MouseEvent&&(n.preventDefault(),n.type==="click"&&window.scrollTo(0,0))}const nr={activate(){window.document.addEventListener("click",rt)},inactivate(){window.document.removeEventListener("click",rt)}};var rr=nr;function it(n){if(n.state==="vaadin-router-ignore")return;const{hash:e,pathname:t,search:r}=window.location;te("go",{hash:e,pathname:t,search:r})}const ir={activate(){window.addEventListener("popstate",it)},inactivate(){window.removeEventListener("popstate",it)}};var sr=ir;let st=[];const ar={CLICK:rr,POPSTATE:sr};function at(n=[]){st.forEach(e=>e.inactivate()),n.forEach(e=>e.activate()),st=n}const or=256;function Y(){return{cancel:!0}}const ot={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return U}};class cr extends _t{location=E({resolver:this});ready=Promise.resolve(this.location);#n=new WeakSet;#e=new WeakSet;#l=this.#v.bind(this);#a=0;#s;__previousContext;#o;#r=null;#t=null;constructor(e,t){const i=document.head.querySelector("base")?.getAttribute("href");super([],{baseUrl:i?new URL(i,document.URL).href.replace(/[^/]*$/u,""):void 0,...t,resolveRoute:async s=>await this.#w(s)}),at(Object.values(ar)),this.setOutlet(e),this.subscribe()}async#w(e){const{route:t}=e;if(oe(t.children)){let i=await t.children(Jn(e));oe(t.children)||({children:i}=t),Yn(i,t)}const r={component:i=>{const s=document.createElement(i);return this.#e.add(s),s},prevent:Y,redirect:i=>et(e,i)};return await Promise.resolve().then(async()=>{if(this.#i(e))return await ue(t.action,t,e,r)}).then(i=>{if(i!=null&&(typeof i=="object"||typeof i=="symbol")&&(i instanceof HTMLElement||i===U||F(i)&&"redirect"in i))return i;if(z(t.redirect))return r.redirect(t.redirect)}).then(i=>{if(i!=null)return i;if(z(t.component))return r.component(t.component)})}setOutlet(e){e&&this.#m(e),this.#s=e}getOutlet(){return this.#s}async setRoutes(e,t=!1){return this.__previousContext=void 0,this.#o=void 0,Ye(e),super.setRoutes(e),t||this.#v(),await this.ready}addRoutes(e){return Ye(e),super.addRoutes(e)}async render(e,t=!1){this.#a+=1;const r=this.#a,i={...ot,...z(e)?{hash:"",search:"",pathname:e}:e,__renderId:r};return this.ready=this.#y(i,t),await this.ready}async#y(e,t){const{__renderId:r}=e;try{const i=await this.resolve(e),s=await this.#c(i);if(!this.#i(s))return this.location;const a=this.__previousContext;if(s===a)return this.#h(a,!0),this.location;if(this.location=E(s),t&&this.#h(s,r===1),te("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.#b(s,a),this.__previousContext=s,this.location;this.#A(s,a);const o=this.#k(s);if(this.#P(s),this.#x(s,a),await o,this.#i(s))return this.#S(),this.__previousContext=s,this.location}catch(i){if(r===this.#a){t&&this.#h(this.context);for(const s of this.#s?.children??[])s.remove();throw this.location=E(Object.assign(e,{resolver:this})),te("error",{router:this,error:i,...e}),i}}return this.location}async#c(e,t=e){const r=await this.#d(t),s=r!==t?r:e,o=de(Et(r.chain??[]),this)===r.pathname,c=async(l,h=l.route,p)=>{const u=await l.next(!1,h,p);return u===null||u===U?o?l:h.parent!=null?await c(l,h.parent,u):u:u},d=await c(r);if(d==null||d===U)throw vt(s);return d!==r?await this.#c(s,d):await this.#_(r)}async#d(e){const{result:t}=e;if(t instanceof HTMLElement)return Xn(e,t),e;if(t&&"redirect"in t){const r=await this.#g(t.redirect,e.__redirectCount,e.__renderId);return await this.#d(r)}throw t instanceof Error?t:new Error(D(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${er(t)}". Double check the action return value for the route.`))}async#_(e){return await this.#$(e).then(async t=>t===this.__previousContext||t===e?t:await this.#c(t))}async#$(e){const t=this.__previousContext??{},r=t.chain??[],i=e.chain??[];let s=Promise.resolve(void 0);const a=o=>et(e,o);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let o=0;o<Math.min(r.length,i.length)&&!(r[o].route!==i[o].route||r[o].path!==i[o].path&&r[o].element!==i[o].element||!this.#f(r[o].element,i[o].element));e.__divergedChainIndex++,o++);if(e.__skipAttach=i.length===r.length&&e.__divergedChainIndex===i.length&&this.#f(e.result,t.result),e.__skipAttach){for(let o=i.length-1;o>=0;o--)s=this.#u(s,e,{prevent:Y},r[o]);for(let o=0;o<i.length;o++)s=this.#p(s,e,{prevent:Y,redirect:a},i[o]),r[o].element.location=E(e,r[o].route)}else for(let o=r.length-1;o>=e.__divergedChainIndex;o--)s=this.#u(s,e,{prevent:Y},r[o])}if(!e.__skipAttach)for(let o=0;o<i.length;o++)o<e.__divergedChainIndex?o<r.length&&r[o].element&&(r[o].element.location=E(e,r[o].route)):(s=this.#p(s,e,{prevent:Y,redirect:a},i[o]),i[o].element&&(i[o].element.location=E(e,i[o].route)));return await s.then(async o=>{if(o&&F(o)){if("cancel"in o&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if("redirect"in o)return await this.#g(o.redirect,e.__redirectCount,e.__renderId)}return e})}async#u(e,t,r,i){const s=E(t);let a=await e;if(this.#i(t)&&(a=tt("onBeforeLeave",i.element,s,r,this)(a)),!(F(a)&&"redirect"in a))return a}async#p(e,t,r,i){const s=E(t,i.route),a=await e;if(this.#i(t))return tt("onBeforeEnter",i.element,s,r,this)(a)}#f(e,t){return e instanceof Element&&t instanceof Element?this.#e.has(e)&&this.#e.has(t)?e.localName===t.localName:e===t:!1}#i(e){return e.__renderId===this.#a}async#g(e,t=0,r=0){if(t>or)throw new Error(D(`Too many redirects when rendering ${e.from}`));return await this.resolve({...ot,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:t+1,__renderId:r})}#m(e=this.#s){if(!(e instanceof Element||e instanceof DocumentFragment))throw new TypeError(D(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`))}#h({pathname:e,search:t="",hash:r=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const s=i?"replaceState":"pushState";window.history[s](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#b(e,t){let r=this.#s;for(let i=0;i<(e.__divergedChainIndex??0);i++){const s=t?.chain?.[i].element;if(s)if(s.parentNode===r)e.chain[i].element=s,r=s;else break}return r}#A(e,t){this.#m(),this.#E();const r=this.#b(e,t);this.#r=[],this.#t=Array.from(r?.children??[]).filter(s=>this.#n.has(s)&&s!==e.result);let i=r;for(let s=e.__divergedChainIndex??0;s<(e.chain?.length??0);s++){const a=e.chain[s].element;a&&(i?.appendChild(a),this.#n.add(a),i===r&&this.#r.push(a),i=a)}}#S(){if(this.#t)for(const e of this.#t)e.remove();this.#t=null,this.#r=null}#E(){if(this.#t&&this.#r){for(const e of this.#r)e.remove();this.#t=null,this.#r=null}}#x(e,t){if(!(!t?.chain||e.__divergedChainIndex==null))for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.#i(e);r--){const i=t.chain[r].element;if(i)try{const s=E(e);ue(i.onAfterLeave,i,s,{},this)}finally{if(this.#t?.includes(i))for(const s of i.children)s.remove()}}}#P(e){if(!(!e.chain||e.__divergedChainIndex==null))for(let t=e.__divergedChainIndex;t<e.chain.length&&this.#i(e);t++){const r=e.chain[t].element;if(r){const i=E(e,e.chain[t].route);ue(r.onAfterEnter,r,i,{},this)}}}async#k(e){const t=this.#t?.[0],r=this.#r?.[0],i=[],{chain:s=[]}=e;let a;for(let o=s.length-1;o>=0;o--)if(s[o].route.animate){a=s[o].route.animate;break}if(t&&r&&a){const o=F(a)&&a.leave?a.leave:"leaving",c=F(a)&&a.enter?a.enter:"entering";i.push(Xe(t,o)),i.push(Xe(r,c))}return await Promise.all(i),e}subscribe(){window.addEventListener("vaadin-router-go",this.#l)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#l)}#v(e){const{pathname:t,search:r,hash:i}=e instanceof CustomEvent?e.detail:window.location;z(this.__normalizePathname(t))&&(e?.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:i},!0))}static setTriggers(...e){at(e)}urlForName(e,t){return this.#o||(this.#o=Wn(this,{cacheKeyProvider(r){return"component"in r&&typeof r.component=="string"?r.component:void 0}})),de(this.#o(e,t??void 0),this)}urlForPath(e,t){return de(ft(e)(t??void 0),this)}static go(e){const{pathname:t,search:r,hash:i}=z(e)?new URL(e,"http://a"):e;return te("go",{pathname:t,search:r,hash:i})}}const hr=()=>{const n=document.getElementById("app");new cr(n).setRoutes([{path:"/",component:"apartment-home"},{path:"/wohnung/gartenblick",component:"apartment-garden-view"},{path:"/wohnung/rachelblick",component:"apartment-rachel-view"},{path:"/aktivitaeten/sommer",component:"summer-activities"},{path:"/aktivitaeten/winter",component:"winter-activities"},{path:"/hausordnung",component:"house-rules"},{path:"/preise",component:"price-component"},{path:"/kontakt",component:"impressum-component"}])};window.addEventListener("load",()=>{hr()});
