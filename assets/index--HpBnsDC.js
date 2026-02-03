(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=globalThis,$e=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),xe=new WeakMap;let Et=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if($e&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&xe.set(t,e))}return e}toString(){return this.cssText}};const Pt=n=>new Et(typeof n=="string"?n:n+"",void 0,at),Rt=(n,e)=>{if($e)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),i=ae.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,n.appendChild(r)}},Ie=$e?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Pt(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:kt,defineProperty:zt,getOwnPropertyDescriptor:xt,getOwnPropertyNames:It,getOwnPropertySymbols:Ot,getPrototypeOf:Ct}=Object,ge=globalThis,Oe=ge.trustedTypes,Bt=Oe?Oe.emptyScript:"",Tt=ge.reactiveElementPolyfillSupport,Y=(n,e)=>n,le={toAttribute(n,e){switch(e){case Boolean:n=n?Bt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ae=(n,e)=>!kt(n,e),Ce={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:Ae};Symbol.metadata??=Symbol("metadata"),ge.litPropertyMetadata??=new WeakMap;class j extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&zt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:s}=xt(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get(){return i?.call(this)},set(a){const o=i?.call(this);s.call(this,a),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ce}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;const e=Ct(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){const t=this.properties,r=[...It(t),...Ot(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Ie(i))}else e!==void 0&&t.push(Ie(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Rt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:le).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:le;this._$Em=i,this[i]=a.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??Ae)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}}j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[Y("elementProperties")]=new Map,j[Y("finalized")]=new Map,Tt?.({ReactiveElement:j}),(ge.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=globalThis,ue=Se.trustedTypes,Be=ue?ue.createPolicy("lit-html",{createHTML:n=>n}):void 0,ot="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+O,Dt=`<${ht}>`,N=document,te=()=>N.createComment(""),ne=n=>n===null||typeof n!="object"&&typeof n!="function",Ee=Array.isArray,Wt=n=>Ee(n)||typeof n?.[Symbol.iterator]=="function",we=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,De=/>/g,W=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),We=/'/g,Me=/"/g,ct=/^(?:script|style|textarea|title)$/i,Mt=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),b=Mt(1),K=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),He=new WeakMap,H=N.createTreeWalker(N,129);function lt(n,e){if(!Ee(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Be!==void 0?Be.createHTML(e):e}const Ht=(n,e)=>{const t=n.length-1,r=[];let i,s=e===2?"<svg>":e===3?"<math>":"",a=Q;for(let o=0;o<t;o++){const h=n[o];let u,l,c=-1,p=0;for(;p<h.length&&(a.lastIndex=p,l=a.exec(h),l!==null);)p=a.lastIndex,a===Q?l[1]==="!--"?a=Te:l[1]!==void 0?a=De:l[2]!==void 0?(ct.test(l[2])&&(i=RegExp("</"+l[2],"g")),a=W):l[3]!==void 0&&(a=W):a===W?l[0]===">"?(a=i??Q,c=-1):l[1]===void 0?c=-2:(c=a.lastIndex-l[2].length,u=l[1],a=l[3]===void 0?W:l[3]==='"'?Me:We):a===Me||a===We?a=W:a===Te||a===De?a=Q:(a=W,i=void 0);const d=a===W&&n[o+1].startsWith("/>")?" ":"";s+=a===Q?h+Dt:c>=0?(r.push(u),h.slice(0,c)+ot+h.slice(c)+O+d):h+O+(c===-2?o:d)}return[lt(n,s+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class re{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let s=0,a=0;const o=e.length-1,h=this.parts,[u,l]=Ht(e,t);if(this.el=re.createElement(u,r),H.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=H.nextNode())!==null&&h.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ot)){const p=l[a++],d=i.getAttribute(c).split(O),f=/([.?@])?(.*)/.exec(p);h.push({type:1,index:s,name:f[2],strings:d,ctor:f[1]==="."?Nt:f[1]==="?"?Ut:f[1]==="@"?Lt:ve}),i.removeAttribute(c)}else c.startsWith(O)&&(h.push({type:6,index:s}),i.removeAttribute(c));if(ct.test(i.tagName)){const c=i.textContent.split(O),p=c.length-1;if(p>0){i.textContent=ue?ue.emptyScript:"";for(let d=0;d<p;d++)i.append(c[d],te()),H.nextNode(),h.push({type:2,index:++s});i.append(c[p],te())}}}else if(i.nodeType===8)if(i.data===ht)h.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(O,c+1))!==-1;)h.push({type:7,index:s}),c+=O.length-1}s++}}static createElement(e,t){const r=N.createElement("template");return r.innerHTML=e,r}}function Z(n,e,t=n,r){if(e===K)return e;let i=r!==void 0?t._$Co?.[r]:t._$Cl;const s=ne(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(n),i._$AT(n,t,r)),r!==void 0?(t._$Co??=[])[r]=i:t._$Cl=i),i!==void 0&&(e=Z(n,i._$AS(n,e.values),i,r)),e}class Ft{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??N).importNode(t,!0);H.currentNode=i;let s=H.nextNode(),a=0,o=0,h=r[0];for(;h!==void 0;){if(a===h.index){let u;h.type===2?u=new se(s,s.nextSibling,this,e):h.type===1?u=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(u=new Gt(s,this,e)),this._$AV.push(u),h=r[++o]}a!==h?.index&&(s=H.nextNode(),a++)}return H.currentNode=N,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class se{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),ne(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Wt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&ne(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=re.createElement(lt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const s=new Ft(i,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=He.get(e.strings);return t===void 0&&He.set(e.strings,t=new re(e)),t}k(e){Ee(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const s of e)i===t.length?t.push(r=new se(this.O(te()),this.O(te()),this,this.options)):r=t[i],r._$AI(s),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ve{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,t=this,r,i){const s=this.strings;let a=!1;if(s===void 0)e=Z(this,e,t,0),a=!ne(e)||e!==this._$AH&&e!==K,a&&(this._$AH=e);else{const o=e;let h,u;for(e=s[0],h=0;h<s.length-1;h++)u=Z(this,o[r+h],t,h),u===K&&(u=this._$AH[h]),a||=!ne(u)||u!==this._$AH[h],u===g?e=g:e!==g&&(e+=(u??"")+s[h+1]),this._$AH[h]=u}a&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Nt extends ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Ut extends ve{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Lt extends ve{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??g)===K)return;const r=this._$AH,i=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==g&&(r===g||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Gt{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const Vt=Se.litHtmlPolyfillSupport;Vt?.(re,se),(Se.litHtmlVersions??=[]).push("3.2.1");const jt=(n,e,t)=>{const r=t?.renderBefore??e;let i=r._$litPart$;if(i===void 0){const s=t?.renderBefore??null;r._$litPart$=i=new se(e.insertBefore(te(),s),s,void 0,t??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let w=class extends j{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}};w._$litElement$=!0,w.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:w});const Kt=globalThis.litElementPolyfillSupport;Kt?.({LitElement:w});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:Ae},qt=(n=Zt,e,t)=>{const{kind:r,metadata:i}=t;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(t.name,n),r==="accessor"){const{name:a}=t;return{set(o){const h=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,h,n)},init(o){return o!==void 0&&this.P(a,void 0,n),o}}}if(r==="setter"){const{name:a}=t;return function(o){const h=this[a];e.call(this,o),this.requestUpdate(a,h,n)}}throw Error("Unsupported decorator location: "+r)};function P(n){return(e,t)=>typeof t=="object"?qt(n,e,t):((r,i,s)=>{const a=i.hasOwnProperty(s);return i.constructor.createProperty(s,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(i,s):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(n){return P({...n,state:!0,attribute:!1})}var Jt=Object.getOwnPropertyDescriptor,Qt=(n,e,t,r)=>{for(var i=r>1?void 0:r?Jt(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let Fe=class extends w{render(){return b`
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
        `}};Fe=Qt([A("apartment-basic-info")],Fe);var Xt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,ut=(n,e,t,r)=>{for(var i=r>1?void 0:r?Yt(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=(r?a(e,t,i):a(i))||i);return r&&i&&Xt(e,t,i),i};let _e=class extends w{constructor(){super(...arguments),this.selectedImage=null}createRenderRoot(){return this}openImage(n){this.selectedImage=n}closeImage(){this.selectedImage=null}render(){return b`
      <div class="home-content">
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
          ${Array.from({length:4},(n,e)=>b`
              <img
                src="/images/start/0${e}.avif"
                alt="Startseite Bild ${e+1}"
                @click="${()=>this.openImage(`/images/start/0${e}.avif`)}"
              />
            `)}
        </div>

        ${this.selectedImage?b`
              <div class="modal" @click="${this.closeImage}">
                <div class="image-container">
                  <img src="${this.selectedImage}" alt="Vergrößerte Ansicht" />
                </div>
              </div>
            `:null}
      </div>
    `}};ut([L()],_e.prototype,"selectedImage",2);_e=ut([A("apartment-home-content")],_e);var en=Object.getOwnPropertyDescriptor,tn=(n,e,t,r)=>{for(var i=r>1?void 0:r?en(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let Ne=class extends w{createRenderRoot(){return this}render(){return b`
            <div class="apartment-home">
                <slider-component></slider-component>
                <div class="home-content-wrapper">
                    <apartment-home-content></apartment-home-content>
                </div>
            </div>
        `}};Ne=tn([A("apartment-home")],Ne);var nn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,Pe=(n,e,t,r)=>{for(var i=r>1?void 0:r?rn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=(r?a(e,t,i):a(i))||i);return r&&i&&nn(e,t,i),i};let de=class extends w{constructor(){super(...arguments),this.selectedImage=1,this.currentIndex=1}createRenderRoot(){return this}render(){return b`
      <div class="apartment-view">
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
              location="/images/garten/"
              imageHeight="750px"
              updateIndex="${this.selectedImage}"
              numberOfPictures="17"
              imageExtension="avif"
              @index-changed="${n=>this.currentIndex=n.detail.index}"
            ></slider-component>
          </div>
          <div class="pictures">
            ${Array.from({length:17},(n,e)=>b`
                <img
                  class="${this.currentIndex===e+1?"active":""}"
                  src="/images/garten/${e+1}.avif"
                  alt="Gartenblick Bild ${e+1}"
                  @click="${()=>{this.selectedImage=e+1,this.currentIndex=e+1}}"
                />
              `)}
          </div>
        </div>
      </div>
    `}};Pe([L()],de.prototype,"selectedImage",2);Pe([L()],de.prototype,"currentIndex",2);de=Pe([A("apartment-garden-view")],de);var sn=Object.defineProperty,an=Object.getOwnPropertyDescriptor,Re=(n,e,t,r)=>{for(var i=r>1?void 0:r?an(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=(r?a(e,t,i):a(i))||i);return r&&i&&sn(e,t,i),i};let pe=class extends w{constructor(){super(...arguments),this.selectedImage=1,this.currentIndex=1}createRenderRoot(){return this}render(){return b`
      <div class="apartment-view">
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
              location="/images/rachel/"
              imageHeight="750px"
              updateIndex="${this.selectedImage}"
              numberOfPictures="16"
              imageExtension="avif"
              @index-changed="${n=>this.currentIndex=n.detail.index}"
            ></slider-component>
          </div>
          <div class="pictures">
            ${Array.from({length:16},(n,e)=>b`
                <img
                  class="${this.currentIndex===e+1?"active":""}"
                  src="/images/rachel/${e+1}.avif"
                  alt="Rachelblick Bild ${e+1}"
                  @click="${()=>{this.selectedImage=e+1,this.currentIndex=e+1}}"
                />
              `)}
          </div>
        </div>
      </div>
    `}};Re([L()],pe.prototype,"selectedImage",2);Re([L()],pe.prototype,"currentIndex",2);pe=Re([A("apartment-rachel-view")],pe);var on=Object.getOwnPropertyDescriptor,hn=(n,e,t,r)=>{for(var i=r>1?void 0:r?on(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let Ue=class extends w{createRenderRoot(){return this}render(){return b`
            <div class="content-page">
                <h1>Sommer in Langdorf</h1>
                <div class="textWithPic">
                    <div>
                        <p>Langdorf liegt am Südhang des Großen Arbers, im Herzen des Bayerischen Waldes. Der Ort und seine Umgebung bieten eine Fülle an individuellen Freizeitmöglichkeiten – egal, ob im Frühling, im Sommer oder im Herbst. Erleben Sie die schier unendlichen Wälder und die Natur des Bayerischen Waldes beim Wandern, Mountainbiken, Nordic-Walking, Kanu fahren, Rafting, Gleitschirmfliegen u.v.m. Die Möglichkeiten scheinen fast unbegrenzt.</p>
                        <p>Die bekannten Bayerwald-Gipfel Großer Arber, Osser, Falkenstein und Rachel laden zu herrlichen Gipfeltouren ein.</p>
                    </div>
                    <img src="/images/summer/2.avif" alt="Sommeraktivität Bild 1">
                </div>
                <h2>Der Große Arber – „König des Bayerischen Waldes“</h2>
                <p>Der Große Arber ist mit 1456m der höchste Berg des Bayerischen Waldes. Zusammen mit dem Großen und dem kleinen Arbersee ist der Große Arber eines der attraktivsten Ziele im Bayerischen Wald.</p>
                <div class="textWithPic">
                    <p>Eine Wanderung zum Großen Arber – z.B. über die Rißlochfälle – ist fast schon ein Muss für jeden Urlaubsgast.</p>
                    <img src="/images/summer/1.avif" alt="Sommeraktivität Bild 2">
                </div>
                <div class="textWithPic">
                    <img src="/images/summer/0.avif" alt="Sommeraktivität Bild 3">
                    <p>Wer nicht so gut zu Fuß ist, fährt mit der Arber Gondelbahn hoch zum Gipfel und genießt den herrlichen Panoramablick.</p>
                </div>
                <h2>Aktivzentrum am Bretterschachten</h2>
                <div class="textWithPic">
                    <p>
                        Im Winter eines der bekanntesten Langlaufgebiete Mitteleuropas, bietet das 1120m hoch gelegene Aktivzentrum Bodenmais am Bretterschachten auch in den warmen Jahreszeiten eine Vielzahl von Freizeitmöglichkeiten.
                        Es ist Ausgangspunkt für herrliche Nordic-Walking, Mountainbike- und Wandertouren.
                    </p>
                    <img src="/images/summer/6.avif" alt="Sommeraktivität Bild 4">
                </div>
                <h2>Der Silberberg</h2>
                <div class="textWithPic">
                    <p>
                        Der 955m hohe Silberberg ist der Hausberg von Bodenmais. Früher wurden hier Erze abgebaut, heute ist der Silberberg ein Freizeit-Paradies und Ausflugsziel für die ganze Familie.
                        Die Silberberg-Sesselbahn mit der Sommerrodelbahn, der neuen Tubingbahn, dem Kinder-Klettergarten, den Abenteuer-Spielplätzen und der Silberberg-Alm bieten Freizeitspaß für Groß und Klein.
                    </p>
                    <img src="/images/summer/3.avif" alt="Sommeraktivität Bild 5">
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
            </div>
        `}};Ue=hn([A("summer-activities")],Ue);var cn=Object.getOwnPropertyDescriptor,ln=(n,e,t,r)=>{for(var i=r>1?void 0:r?cn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let Le=class extends w{createRenderRoot(){return this}render(){return b`
      <div class="content-page">
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
          <img src="/images/winter/1.avif" alt="Winteraktivität Bild 1" />
        </div>
        <div class="textWithPic">
          <p>
            Das Loipennetz im Aktivzentrum Bodenmais am Bretterschachten zählt zu
            den besten und schneesichersten Skilanglaufgebieten in Mitteleuropa.
            114 Loipenkilometer für die klassische Technik und 110 km für die
            Skating-Technik bieten auf einer Höhe zwischen 1100 und 1300 Metern
            Laufspaß pur.
          </p>
          <img src="/images/winter/4.avif" alt="Winteraktivität Bild 2" />
        </div>
        <h2>Schneeschuhtouren</h2>
        <div class="textWithPic">
          <p>
            Erleben Sie den unberührten Winterwald, Natur und glitzernden Schnee
            auf einer Schneeschuhtour durch das Winterwonderland rund um Langdorf.
            Vorkenntnisse sind nicht erforderlich.
          </p>
          <img src="/images/winter/3.avif" alt="Winteraktivität Bild 3" />
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
      </div>
    `}};Le=ln([A("winter-activities")],Le);var un=Object.getOwnPropertyDescriptor,dn=(n,e,t,r)=>{for(var i=r>1?void 0:r?un(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let Ge=class extends w{createRenderRoot(){return this}render(){return b`
            <div class="content-page">
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
            </div>
        `}};Ge=dn([A("house-rules")],Ge);var pn=Object.getOwnPropertyDescriptor,fn=(n,e,t,r)=>{for(var i=r>1?void 0:r?pn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let Ve=class extends w{createRenderRoot(){return this}render(){return b`
            <div class="price-component">
                <h1>Preise</h1>
                <div class="cards">
                    <price-card header="Sommer" range="(01.04.-30.09.)" twoPersons="85 Euro" threeToFourPersons="105 Euro" fivePersons="115 Euro"></price-card>
                    <price-card header="Winter" range="(07.01.-31.03.) & (1.10.-21.12.)" twoPersons="95 Euro" threeToFourPersons="115 Euro" fivePersons="125 Euro"></price-card>
                    <price-card header="Weihnachten/Neujahr" range="(22.12.-06.01.)" twoPersons="100 Euro" threeToFourPersons="120 Euro" fivePersons="130 Euro"></price-card>
                </div>
                <p>Kinder unter 3 Jahren frei, 3-7Jahre 10 Euro pro Tag,</p>
                <p>Endreinigung 60 Euro einmalig</p>
                <p>Kurzzeitzuschlag bis 3 Nächte 20 Euro einmalig</p>
            </div>
        `}};Ve=fn([A("price-component")],Ve);var mn=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,q=(n,e,t,r)=>{for(var i=r>1?void 0:r?gn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=(r?a(e,t,i):a(i))||i);return r&&i&&mn(e,t,i),i};let U=class extends w{constructor(){super(...arguments),this.header="",this.range="",this.twoPersons="",this.threeToFourPersons="",this.fivePersons=""}createRenderRoot(){return this}render(){return b`
            <div class="price-card">
                <h4>${this.header}</h4>
                ${this.range}<br>
                2 Personen: ${this.twoPersons}<br>
                3-4 Personen: ${this.threeToFourPersons}<br>
                5 Personen: ${this.fivePersons}
            </div>
        `}};q([P({type:String})],U.prototype,"header",2);q([P({type:String})],U.prototype,"range",2);q([P({type:String})],U.prototype,"twoPersons",2);q([P({type:String})],U.prototype,"threeToFourPersons",2);q([P({type:String})],U.prototype,"fivePersons",2);U=q([A("price-card")],U);var vn=Object.getOwnPropertyDescriptor,bn=(n,e,t,r)=>{for(var i=r>1?void 0:r?vn(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=a(i)||i);return i};let je=class extends w{createRenderRoot(){return this}render(){return b`
      <div class="content-page">
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
      </div>
    `}};je=bn([A("impressum-component")],je);var wn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,T=(n,e,t,r)=>{for(var i=r>1?void 0:r?_n(e,t):e,s=n.length-1,a;s>=0;s--)(a=n[s])&&(i=(r?a(e,t,i):a(i))||i);return r&&i&&wn(e,t,i),i};let x=class extends w{constructor(){super(...arguments),this.updateIndex=5,this.location="/images/start/",this.imageHeight="60rem",this.numberOfPictures=6,this.imageExtension="avif",this.fading=!1,this.currentIndex=5,this.pendingIndex=null}createRenderRoot(){return this}changeImage(n){if(this.fading)return;this.fading=!0,this.pendingIndex=n;const e=`${this.location}${n}.${this.imageExtension}`,t=new Image;t.src=e;const r=new Promise(s=>setTimeout(s,200)),i=new Promise(s=>{t.onload=s,t.onerror=s});Promise.all([r,i]).then(()=>{this.currentIndex=this.pendingIndex,this.pendingIndex=null,this.fading=!1})}shift(n){const e=(this.currentIndex+n-1+this.numberOfPictures)%this.numberOfPictures+1;this.dispatchEvent(new CustomEvent("index-changed",{detail:{index:e},bubbles:!0,composed:!0})),this.changeImage(e)}updated(n){n.has("updateIndex")&&this.pendingIndex===null&&this.changeImage(this.updateIndex)}render(){return b`
            <div class="slider-component">
                <div class="slider-container" style="height: ${this.imageHeight}">
                    <button @click="${()=>this.shift(-1)}"> < </button>
                    <img class="${this.fading?"fade-out":""}" src="${this.location}${this.currentIndex}.${this.imageExtension}" alt="">
                    <button @click="${()=>this.shift(1)}"> > </button>
                </div>
            </div>
        `}};T([P({type:Number})],x.prototype,"updateIndex",2);T([P({type:String})],x.prototype,"location",2);T([P({type:String})],x.prototype,"imageHeight",2);T([P({type:Number})],x.prototype,"numberOfPictures",2);T([P({type:String})],x.prototype,"imageExtension",2);T([L()],x.prototype,"fading",2);T([L()],x.prototype,"currentIndex",2);x=T([A("slider-component")],x);function yn(n){for(var e=[],t=0;t<n.length;){var r=n[t];if(r==="*"||r==="+"||r==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(r==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(r==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(r==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(r===":"){for(var i="",s=t+1;s<n.length;){var a=n.charCodeAt(s);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){i+=n[s++];continue}break}if(!i)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:i}),t=s;continue}if(r==="("){var o=1,h="",s=t+1;if(n[s]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<n.length;){if(n[s]==="\\"){h+=n[s++]+n[s++];continue}if(n[s]===")"){if(o--,o===0){s++;break}}else if(n[s]==="("&&(o++,n[s+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(s));h+=n[s++]}if(o)throw new TypeError("Unbalanced pattern at ".concat(t));if(!h)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:h}),t=s;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function ke(n,e){e===void 0&&(e={});for(var t=yn(n),r=e.prefixes,i=r===void 0?"./":r,s=e.delimiter,a=s===void 0?"/#?":s,o=[],h=0,u=0,l="",c=function($){if(u<t.length&&t[u].type===$)return t[u++].value},p=function($){var v=c($);if(v!==void 0)return v;var k=t[u],be=k.type,St=k.index;throw new TypeError("Unexpected ".concat(be," at ").concat(St,", expected ").concat($))},d=function(){for(var $="",v;v=c("CHAR")||c("ESCAPED_CHAR");)$+=v;return $},f=function($){for(var v=0,k=a;v<k.length;v++){var be=k[v];if($.indexOf(be)>-1)return!0}return!1},R=function($){var v=o[o.length-1],k=$||(v&&typeof v=="string"?v:"");if(v&&!k)throw new TypeError('Must have text between two parameters, missing text after "'.concat(v.name,'"'));return!k||f(k)?"[^".concat(C(a),"]+?"):"(?:(?!".concat(C(k),")[^").concat(C(a),"])+?")};u<t.length;){var _=c("CHAR"),y=c("NAME"),G=c("PATTERN");if(y||G){var S=_||"";i.indexOf(S)===-1&&(l+=S,S=""),l&&(o.push(l),l=""),o.push({name:y||h++,prefix:S,suffix:"",pattern:G||R(S),modifier:c("MODIFIER")||""});continue}var m=_||c("ESCAPED_CHAR");if(m){l+=m;continue}l&&(o.push(l),l="");var D=c("OPEN");if(D){var S=d(),I=c("NAME")||"",J=c("PATTERN")||"",V=d();p("CLOSE"),o.push({name:I||(J?h++:""),pattern:I&&!J?R(S):J,prefix:S,suffix:V,modifier:c("MODIFIER")||""});continue}p("END")}return o}function dt(n,e){return pt(ke(n,e),e)}function pt(n,e){e===void 0&&(e={});var t=ze(e),r=e.encode,i=r===void 0?function(h){return h}:r,s=e.validate,a=s===void 0?!0:s,o=n.map(function(h){if(typeof h=="object")return new RegExp("^(?:".concat(h.pattern,")$"),t)});return function(h){for(var u="",l=0;l<n.length;l++){var c=n[l];if(typeof c=="string"){u+=c;continue}var p=h?h[c.name]:void 0,d=c.modifier==="?"||c.modifier==="*",f=c.modifier==="*"||c.modifier==="+";if(Array.isArray(p)){if(!f)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(p.length===0){if(d)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var R=0;R<p.length;R++){var _=i(p[R],c);if(a&&!o[l].test(_))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(_,'"'));u+=c.prefix+_+c.suffix}continue}if(typeof p=="string"||typeof p=="number"){var _=i(String(p),c);if(a&&!o[l].test(_))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(_,'"'));u+=c.prefix+_+c.suffix;continue}if(!d){var y=f?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(y))}}return u}}function C(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ze(n){return n&&n.sensitive?"":"i"}function $n(n,e){if(!e)return n;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,i=t.exec(n.source);i;)e.push({name:i[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),i=t.exec(n.source);return n}function An(n,e,t){var r=n.map(function(i){return ft(i,e,t).source});return new RegExp("(?:".concat(r.join("|"),")"),ze(t))}function Sn(n,e,t){return En(ke(n,t),e,t)}function En(n,e,t){t===void 0&&(t={});for(var r=t.strict,i=r===void 0?!1:r,s=t.start,a=s===void 0?!0:s,o=t.end,h=o===void 0?!0:o,u=t.encode,l=u===void 0?function(v){return v}:u,c=t.delimiter,p=c===void 0?"/#?":c,d=t.endsWith,f=d===void 0?"":d,R="[".concat(C(f),"]|$"),_="[".concat(C(p),"]"),y=a?"^":"",G=0,S=n;G<S.length;G++){var m=S[G];if(typeof m=="string")y+=C(l(m));else{var D=C(l(m.prefix)),I=C(l(m.suffix));if(m.pattern)if(e&&e.push(m),D||I)if(m.modifier==="+"||m.modifier==="*"){var J=m.modifier==="*"?"?":"";y+="(?:".concat(D,"((?:").concat(m.pattern,")(?:").concat(I).concat(D,"(?:").concat(m.pattern,"))*)").concat(I,")").concat(J)}else y+="(?:".concat(D,"(").concat(m.pattern,")").concat(I,")").concat(m.modifier);else{if(m.modifier==="+"||m.modifier==="*")throw new TypeError('Can not repeat "'.concat(m.name,'" without a prefix and suffix'));y+="(".concat(m.pattern,")").concat(m.modifier)}else y+="(?:".concat(D).concat(I,")").concat(m.modifier)}}if(h)i||(y+="".concat(_,"?")),y+=t.endsWith?"(?=".concat(R,")"):"$";else{var V=n[n.length-1],$=typeof V=="string"?_.indexOf(V[V.length-1])>-1:V===void 0;i||(y+="(?:".concat(_,"(?=").concat(R,"))?")),$||(y+="(?=".concat(_,"|").concat(R,")"))}return new RegExp(y,ze(t))}function ft(n,e,t){return n instanceof RegExp?$n(n,e):Array.isArray(n)?An(n,e,t):Sn(n,e,t)}function M(n){return typeof n=="object"&&!!n}function ie(n){return typeof n=="function"}function z(n){return typeof n=="string"}function fe(n=[]){return Array.isArray(n)?n:[n]}function B(n){return`[Vaadin.Router] ${n}`}class mt extends Error{code;context;constructor(e){super(B(`Page not found (${e.pathname})`)),this.context=e,this.code=404}}const F=Symbol("NotFoundResult");function gt(n){return new mt(n)}function vt(n){return(Array.isArray(n)?n[0]:n)??""}function me(n){return vt(n?.path)}function Pn(n){return Array.isArray(n)&&n.length>0?n:void 0}const ye=new Map;ye.set("|false",{keys:[],pattern:/(?:)/u});function Ke(n){try{return decodeURIComponent(n)}catch{return n}}function Rn(n,e,t=!1,r=[],i){const s=`${n}|${String(t)}`,a=vt(e);let o=ye.get(s);if(!o){const l=[];o={keys:l,pattern:ft(n,l,{end:t,strict:n===""})},ye.set(s,o)}const h=o.pattern.exec(a);if(!h)return null;const u={...i};for(let l=1;l<h.length;l++){const c=o.keys[l-1],p=c.name,d=h[l];(d!==void 0||!Object.hasOwn(u,p))&&(c.modifier==="+"||c.modifier==="*"?u[p]=d?d.split(/[/?#]/u).map(Ke):[]:u[p]=d&&Ke(d))}return{keys:[...r,...o.keys],params:u,path:h[0]}}var kn=Rn;function bt(n,e,t,r,i){let s,a,o=0,h=me(n);return h.startsWith("/")&&(t&&(h=h.substring(1)),t=!0),{next(u){if(n===u)return{done:!0,value:void 0};n.__children??=Pn(n.children);const l=n.__children??[],c=!n.__children&&!n.children;if(!s&&(s=kn(h,e,c,r,i),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:n}};if(s&&l.length>0)for(;o<l.length;){if(!a){const d=l[o];d.parent=n;let f=s.path.length;f>0&&e.charAt(f)==="/"&&(f+=1),a=bt(d,e.substring(f),t,s.keys,s.params)}const p=a.next(u);if(!p.done)return{done:!1,value:p.value};a=null,o+=1}return{done:!0,value:void 0}}}}var zn=bt;function xn(n){if(ie(n.route.action))return n.route.action(n)}function In(n,e){let t=n;for(;t;)if(t=t.parent,t===e)return!0;return!1}function On(n){return!!n&&typeof n=="object"&&"next"in n&&"params"in n&&"result"in n&&"route"in n}class Cn extends Error{code;context;constructor(e,t){let r=`Path '${e.pathname}' is not properly resolved due to an error.`;const i=me(e.route);i&&(r+=` Resolution had failed on route: '${i}'`),super(r,t),this.code=t?.code,this.context=e}warn(){console.warn(this.message)}}function Bn(n,e){const{path:t,route:r}=e;if(r&&!r.__synthetic){const i={path:t,route:r};if(r.parent&&n.chain)for(let s=n.chain.length-1;s>=0&&n.chain[s].route!==r.parent;s--)n.chain.pop();n.chain?.push(i)}}class wt{baseUrl;#n;errorHandler;resolveRoute;#e;constructor(e,{baseUrl:t="",context:r,errorHandler:i,resolveRoute:s=xn}={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t,this.errorHandler=i,this.resolveRoute=s,Array.isArray(e)?this.#e={__children:e,__synthetic:!0,action:()=>{},path:""}:this.#e={...e,parent:void 0},this.#n={...r,hash:"",async next(){return F},params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#n}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.__children??[]]}removeRoutes(){this.#e.__children=[]}async resolve(e){const t=this,r={...this.#n,...z(e)?{pathname:e}:e,next:u},i=zn(this.#e,this.__normalizePathname(r.pathname)??r.pathname,!!this.baseUrl),s=this.resolveRoute;let a=null,o=null,h=r;async function u(l=!1,c=a?.value?.route,p){const d=p===null?a?.value?.route:void 0;if(a=o??i.next(d),o=null,!l&&(a.done||!In(a.value.route,c)))return o=a,F;if(a.done)throw gt(r);h={...r,params:a.value.params,route:a.value.route,chain:h.chain?.slice()},Bn(h,a.value);const f=await s(h);return f!=null&&f!==F?(h.result=On(f)?f.result:f,t.#n=h,h):await u(l,c,f)}try{return await u(!0,this.#e)}catch(l){const c=l instanceof mt?l:new Cn(h,{code:500,cause:l});if(this.errorHandler)return h.result=this.errorHandler(c),h;throw l}}setRoutes(e){this.#e.__children=[...fe(e)]}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=e.startsWith("/")?new URL(t).origin+e:`./${e}`,i=new URL(r,t).href;if(i.startsWith(t))return i.slice(t.length)}addRoutes(e){return this.#e.__children=[...this.#e.__children??[],...fe(e)],this.getRoutes()}}function _t(n,e,t,r){const i=e.name??r?.(e);if(i&&(n.has(i)?n.get(i)?.push(e):n.set(i,[e])),Array.isArray(t))for(const s of t)s.parent=e,_t(n,s,s.__children??s.children,r)}function Ze(n,e){const t=n.get(e);if(t){if(t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t[0]}}function Tn(n,e={}){if(!(n instanceof wt))throw new TypeError("An instance of Resolver is expected");const t=new Map,r=new Map;return(i,s)=>{let a=Ze(r,i);if(!a&&(r.clear(),_t(r,n.root,n.root.__children,e.cacheKeyProvider),a=Ze(r,i),!a))throw new Error(`Route "${i}" not found`);let o=a.fullPath?t.get(a.fullPath):void 0;if(!o){let l=me(a),c=a.parent;for(;c;){const f=me(c);f&&(l=`${f.replace(/\/$/u,"")}/${l.replace(/^\//u,"")}`),c=c.parent}const p=ke(l),d=Object.create(null);for(const f of p)z(f)||(d[f.name]=!0);o={keys:d,tokens:p},t.set(l,o),a.fullPath=l}let u=pt(o.tokens,{encode:encodeURIComponent,...e})(s)||"/";if(e.stringifyQueryParams&&s){const l={};for(const[p,d]of Object.entries(s))!(p in o.keys)&&d&&(l[p]=d);const c=e.stringifyQueryParams(l);c&&(u+=c.startsWith("?")?c:`?${c}`)}return u}}var Dn=Tn;const Wn=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,oe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Mn(){function n(){return!0}return yt(n)}function Hn(){try{return Fn()?!0:Nn()?oe?!Un():!Mn():!1}catch{return!1}}function Fn(){return localStorage.getItem("vaadin.developmentmode.force")}function Nn(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Un(){return!!(oe&&Object.keys(oe).map(e=>oe[e]).filter(e=>e.productionMode).length>0)}function yt(n,e){if(typeof n!="function")return;const t=Wn.exec(n.toString());if(t)try{n=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return n(e)}window.Vaadin=window.Vaadin||{};const qe=function(n,e){if(window.Vaadin.developmentMode)return yt(n,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Hn());function Ln(){/*! vaadin-dev-mode:start
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

  vaadin-dev-mode:end **/}const Gn=function(){if(typeof qe=="function")return qe(Ln)};function Vn(n,e=window.Vaadin??={}){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}Vn();Gn();const jn=n=>{const e=getComputedStyle(n).getPropertyValue("animation-name");return e&&e!=="none"},Kn=(n,e)=>{const t=()=>{n.removeEventListener("animationend",t),e()};n.addEventListener("animationend",t)};async function Zn(n,e){return n.classList.add(e),await new Promise(t=>{if(jn(n)){const r=n.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;n.setAttribute("style",`position: absolute; ${i}`),Kn(n,()=>{n.classList.remove(e),n.removeAttribute("style"),t()})}else n.classList.remove(e),t()})}var Je=Zn;function $t(n){if(!n||!z(n.path))throw new Error(B('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!ie(n.action)&&!Array.isArray(n.children)&&!ie(n.children)&&!z(n.component)&&!z(n.redirect))throw new Error(B(`Expected route config "${n.path}" to include either "component, redirect" or "action" function but none found.`));n.redirect&&["bundle","component"].forEach(e=>{e in n&&console.warn(B(`Route config "${String(n.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function Qe(n){fe(n).forEach(e=>$t(e))}function qn({next:n,...e}){return e}function he(n,e){const t=e.__effectiveBaseUrl;return t?new URL(n.replace(/^\//u,""),t).pathname:n}function At(n){return n.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`:e,"")}function Jn(n){return At(n.map(e=>e.route))}function E({chain:n=[],hash:e="",params:t={},pathname:r="",redirectFrom:i,resolver:s,search:a=""},o){const h=n.map(u=>u.route);return{baseUrl:s?.baseUrl??"",getUrl:(u={})=>s?he(dt(Jn(n))({...t,...u}),s):"",hash:e,params:t,pathname:r,redirectFrom:i,route:o??(Array.isArray(h)?h.at(-1):void 0)??null,routes:h,search:a,searchParams:new URLSearchParams(a)}}function Xe(n,e){const t={...n.params};return{redirect:{from:n.pathname,params:t,pathname:e}}}function Qn(n,e){if(e.location=E(n),n.chain){const t=n.chain.map(r=>r.route).indexOf(n.route);n.chain[t].element=e}return e}function ce(n,e,...t){if(typeof n=="function")return n.apply(e,t)}function Ye(n,e,...t){return r=>r&&M(r)&&("cancel"in r||"redirect"in r)?r:ce(e?.[n],e,...t)}function Xn(n,e){if(!Array.isArray(n)&&!M(n))throw new Error(B(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(n)}`));const t=fe(n);t.forEach(r=>$t(r)),e.__children=t}function ee(n,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${n}`,{cancelable:n==="go",detail:e}))}function Yn(n){if(typeof n!="object")return String(n);const[e="Unknown"]=/ (.*)\]$/u.exec(String(n))??[];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(n)}`:e}function er(n){const{port:e,protocol:t}=n,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?n.hostname:n.host;return`${t}//${s}`}function et(n){if(n instanceof Element)return n.nodeName.toLowerCase()}function tt(n){if(n.defaultPrevented||n.button!==0||n.shiftKey||n.ctrlKey||n.altKey||n.metaKey)return;let e=n.target;const t=n instanceof MouseEvent?n.composedPath():n.path??[];for(let h=0;h<t.length;h++){const u=t[h];if("nodeName"in u&&u.nodeName.toLowerCase()==="a"){e=u;break}}for(;e&&e instanceof Node&&et(e)!=="a";)e=e.parentNode;if(!e||et(e)!=="a")return;const r=e;if(r.target&&r.target.toLowerCase()!=="_self"||r.hasAttribute("download")||r.hasAttribute("router-ignore")||r.pathname===window.location.pathname&&r.hash!==""||(r.origin||er(r))!==window.location.origin)return;const{hash:s,pathname:a,search:o}=r;ee("go",{hash:s,pathname:a,search:o})&&n instanceof MouseEvent&&(n.preventDefault(),n.type==="click"&&window.scrollTo(0,0))}const tr={activate(){window.document.addEventListener("click",tt)},inactivate(){window.document.removeEventListener("click",tt)}};var nr=tr;function nt(n){if(n.state==="vaadin-router-ignore")return;const{hash:e,pathname:t,search:r}=window.location;ee("go",{hash:e,pathname:t,search:r})}const rr={activate(){window.addEventListener("popstate",nt)},inactivate(){window.removeEventListener("popstate",nt)}};var ir=rr;let rt=[];const sr={CLICK:nr,POPSTATE:ir};function it(n=[]){rt.forEach(e=>e.inactivate()),n.forEach(e=>e.activate()),rt=n}const ar=256;function X(){return{cancel:!0}}const st={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return F}};class or extends wt{location=E({resolver:this});ready=Promise.resolve(this.location);#n=new WeakSet;#e=new WeakSet;#l=this.#b.bind(this);#a=0;#s;__previousContext;#o;#r=null;#t=null;constructor(e,t){const i=document.head.querySelector("base")?.getAttribute("href");super([],{baseUrl:i?new URL(i,document.URL).href.replace(/[^/]*$/u,""):void 0,...t,resolveRoute:async s=>await this.#w(s)}),it(Object.values(sr)),this.setOutlet(e),this.subscribe()}async#w(e){const{route:t}=e;if(ie(t.children)){let i=await t.children(qn(e));ie(t.children)||({children:i}=t),Xn(i,t)}const r={component:i=>{const s=document.createElement(i);return this.#e.add(s),s},prevent:X,redirect:i=>Xe(e,i)};return await Promise.resolve().then(async()=>{if(this.#i(e))return await ce(t.action,t,e,r)}).then(i=>{if(i!=null&&(typeof i=="object"||typeof i=="symbol")&&(i instanceof HTMLElement||i===F||M(i)&&"redirect"in i))return i;if(z(t.redirect))return r.redirect(t.redirect)}).then(i=>{if(i!=null)return i;if(z(t.component))return r.component(t.component)})}setOutlet(e){e&&this.#g(e),this.#s=e}getOutlet(){return this.#s}async setRoutes(e,t=!1){return this.__previousContext=void 0,this.#o=void 0,Qe(e),super.setRoutes(e),t||this.#b(),await this.ready}addRoutes(e){return Qe(e),super.addRoutes(e)}async render(e,t=!1){this.#a+=1;const r=this.#a,i={...st,...z(e)?{hash:"",search:"",pathname:e}:e,__renderId:r};return this.ready=this.#_(i,t),await this.ready}async#_(e,t){const{__renderId:r}=e;try{const i=await this.resolve(e),s=await this.#h(i);if(!this.#i(s))return this.location;const a=this.__previousContext;if(s===a)return this.#c(a,!0),this.location;if(this.location=E(s),t&&this.#c(s,r===1),ee("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.#v(s,a),this.__previousContext=s,this.location;this.#A(s,a);const o=this.#k(s);if(this.#R(s),this.#P(s,a),await o,this.#i(s))return this.#S(),this.__previousContext=s,this.location}catch(i){if(r===this.#a){t&&this.#c(this.context);for(const s of this.#s?.children??[])s.remove();throw this.location=E(Object.assign(e,{resolver:this})),ee("error",{router:this,error:i,...e}),i}}return this.location}async#h(e,t=e){const r=await this.#u(t),s=r!==t?r:e,o=he(At(r.chain??[]),this)===r.pathname,h=async(l,c=l.route,p)=>{const d=await l.next(!1,c,p);return d===null||d===F?o?l:c.parent!=null?await h(l,c.parent,d):d:d},u=await h(r);if(u==null||u===F)throw gt(s);return u!==r?await this.#h(s,u):await this.#y(r)}async#u(e){const{result:t}=e;if(t instanceof HTMLElement)return Qn(e,t),e;if(t&&"redirect"in t){const r=await this.#m(t.redirect,e.__redirectCount,e.__renderId);return await this.#u(r)}throw t instanceof Error?t:new Error(B(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Yn(t)}". Double check the action return value for the route.`))}async#y(e){return await this.#$(e).then(async t=>t===this.__previousContext||t===e?t:await this.#h(t))}async#$(e){const t=this.__previousContext??{},r=t.chain??[],i=e.chain??[];let s=Promise.resolve(void 0);const a=o=>Xe(e,o);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let o=0;o<Math.min(r.length,i.length)&&!(r[o].route!==i[o].route||r[o].path!==i[o].path&&r[o].element!==i[o].element||!this.#f(r[o].element,i[o].element));e.__divergedChainIndex++,o++);if(e.__skipAttach=i.length===r.length&&e.__divergedChainIndex===i.length&&this.#f(e.result,t.result),e.__skipAttach){for(let o=i.length-1;o>=0;o--)s=this.#d(s,e,{prevent:X},r[o]);for(let o=0;o<i.length;o++)s=this.#p(s,e,{prevent:X,redirect:a},i[o]),r[o].element.location=E(e,r[o].route)}else for(let o=r.length-1;o>=e.__divergedChainIndex;o--)s=this.#d(s,e,{prevent:X},r[o])}if(!e.__skipAttach)for(let o=0;o<i.length;o++)o<e.__divergedChainIndex?o<r.length&&r[o].element&&(r[o].element.location=E(e,r[o].route)):(s=this.#p(s,e,{prevent:X,redirect:a},i[o]),i[o].element&&(i[o].element.location=E(e,i[o].route)));return await s.then(async o=>{if(o&&M(o)){if("cancel"in o&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if("redirect"in o)return await this.#m(o.redirect,e.__redirectCount,e.__renderId)}return e})}async#d(e,t,r,i){const s=E(t);let a=await e;if(this.#i(t)&&(a=Ye("onBeforeLeave",i.element,s,r,this)(a)),!(M(a)&&"redirect"in a))return a}async#p(e,t,r,i){const s=E(t,i.route),a=await e;if(this.#i(t))return Ye("onBeforeEnter",i.element,s,r,this)(a)}#f(e,t){return e instanceof Element&&t instanceof Element?this.#e.has(e)&&this.#e.has(t)?e.localName===t.localName:e===t:!1}#i(e){return e.__renderId===this.#a}async#m(e,t=0,r=0){if(t>ar)throw new Error(B(`Too many redirects when rendering ${e.from}`));return await this.resolve({...st,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:t+1,__renderId:r})}#g(e=this.#s){if(!(e instanceof Element||e instanceof DocumentFragment))throw new TypeError(B(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`))}#c({pathname:e,search:t="",hash:r=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const s=i?"replaceState":"pushState";window.history[s](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#v(e,t){let r=this.#s;for(let i=0;i<(e.__divergedChainIndex??0);i++){const s=t?.chain?.[i].element;if(s)if(s.parentNode===r)e.chain[i].element=s,r=s;else break}return r}#A(e,t){this.#g(),this.#E();const r=this.#v(e,t);this.#r=[],this.#t=Array.from(r?.children??[]).filter(s=>this.#n.has(s)&&s!==e.result);let i=r;for(let s=e.__divergedChainIndex??0;s<(e.chain?.length??0);s++){const a=e.chain[s].element;a&&(i?.appendChild(a),this.#n.add(a),i===r&&this.#r.push(a),i=a)}}#S(){if(this.#t)for(const e of this.#t)e.remove();this.#t=null,this.#r=null}#E(){if(this.#t&&this.#r){for(const e of this.#r)e.remove();this.#t=null,this.#r=null}}#P(e,t){if(!(!t?.chain||e.__divergedChainIndex==null))for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.#i(e);r--){const i=t.chain[r].element;if(i)try{const s=E(e);ce(i.onAfterLeave,i,s,{},this)}finally{if(this.#t?.includes(i))for(const s of i.children)s.remove()}}}#R(e){if(!(!e.chain||e.__divergedChainIndex==null))for(let t=e.__divergedChainIndex;t<e.chain.length&&this.#i(e);t++){const r=e.chain[t].element;if(r){const i=E(e,e.chain[t].route);ce(r.onAfterEnter,r,i,{},this)}}}async#k(e){const t=this.#t?.[0],r=this.#r?.[0],i=[],{chain:s=[]}=e;let a;for(let o=s.length-1;o>=0;o--)if(s[o].route.animate){a=s[o].route.animate;break}if(t&&r&&a){const o=M(a)&&a.leave?a.leave:"leaving",h=M(a)&&a.enter?a.enter:"entering";i.push(Je(t,o)),i.push(Je(r,h))}return await Promise.all(i),e}subscribe(){window.addEventListener("vaadin-router-go",this.#l)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#l)}#b(e){const{pathname:t,search:r,hash:i}=e instanceof CustomEvent?e.detail:window.location;z(this.__normalizePathname(t))&&(e?.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:i},!0))}static setTriggers(...e){it(e)}urlForName(e,t){return this.#o||(this.#o=Dn(this,{cacheKeyProvider(r){return"component"in r&&typeof r.component=="string"?r.component:void 0}})),he(this.#o(e,t??void 0),this)}urlForPath(e,t){return he(dt(e)(t??void 0),this)}static go(e){const{pathname:t,search:r,hash:i}=z(e)?new URL(e,"http://a"):e;return ee("go",{pathname:t,search:r,hash:i})}}const hr=()=>{const n=document.getElementById("app");new or(n).setRoutes([{path:"/",component:"apartment-home"},{path:"/wohnung/gartenblick",component:"apartment-garden-view"},{path:"/wohnung/rachelblick",component:"apartment-rachel-view"},{path:"/aktivitaeten/sommer",component:"summer-activities"},{path:"/aktivitaeten/winter",component:"winter-activities"},{path:"/hausordnung",component:"house-rules"},{path:"/preise",component:"price-component"},{path:"/kontakt",component:"impressum-component"}])};window.addEventListener("load",()=>{hr()});
