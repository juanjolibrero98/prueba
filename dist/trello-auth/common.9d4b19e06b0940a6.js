"use strict";(self.webpackChunktrello_auth=self.webpackChunktrello_auth||[]).push([[592],{4961:(D,E,l)=>{l.d(E,{f:()=>S});var f=l(2340),p=l(9325),g=l(1571),y=l(529);let S=(()=>{class a{constructor(u){this.http=u,this.apiUrl=f.N.API_URL}getUsers(){return this.http.get(`${this.apiUrl}/api/v1/users`,{context:(0,p.a)()})}updateInfoUser(u,v,w,n){return this.http.put(`${this.apiUrl}/api/v1/users/${u}`,{email:v,name:w,avatar:n},{context:(0,p.a)()})}}return a.\u0275fac=function(u){return new(u||a)(g.LFG(y.eN))},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},5017:(D,E,l)=>{l.d(E,{A8:()=>v,Z9:()=>g,eX:()=>a,k:()=>w,o2:()=>p,yy:()=>S});var f=l(1571);class p{}function g(n){return n&&"function"==typeof n.connect}class S{applyChanges(e,t,s,h,i){e.forEachOperation((c,d,_)=>{let r,o;if(null==c.previousIndex){const m=s(c,d,_);r=t.createEmbeddedView(m.templateRef,m.context,m.index),o=1}else null==_?(t.remove(d),o=3):(r=t.get(d),t.move(r,_),o=2);i&&i({context:r?.context,operation:o,record:c})})}detach(){}}class a{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(e,t,s,h,i){e.forEachOperation((c,d,_)=>{let r,o;null==c.previousIndex?(r=this._insertView(()=>s(c,d,_),_,t,h(c)),o=r?1:0):null==_?(this._detachAndCacheView(d,t),o=3):(r=this._moveView(d,_,t,h(c)),o=2),i&&i({context:r?.context,operation:o,record:c})})}detach(){for(const e of this._viewCache)e.destroy();this._viewCache=[]}_insertView(e,t,s,h){const i=this._insertViewFromCache(t,s);if(i)return void(i.context.$implicit=h);const c=e();return s.createEmbeddedView(c.templateRef,c.context,c.index)}_detachAndCacheView(e,t){const s=t.detach(e);this._maybeCacheView(s,t)}_moveView(e,t,s,h){const i=s.get(e);return s.move(i,t),i.context.$implicit=h,i}_maybeCacheView(e,t){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{const s=t.indexOf(e);-1===s?e.destroy():t.remove(s)}}_insertViewFromCache(e,t){const s=this._viewCache.pop();return s&&t.insert(s,e),s||null}}let v=(()=>{class n{constructor(){this._listeners=[]}notify(t,s){for(let h of this._listeners)h(t,s)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(s=>t!==s)}}ngOnDestroy(){this._listeners=[]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=f.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const w=new f.OlP("_ViewRepeater")}}]);