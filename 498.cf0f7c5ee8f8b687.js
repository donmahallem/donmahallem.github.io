"use strict";(self.webpackChunkDonMahallem=self.webpackChunkDonMahallem||[]).push([[498],{3498:(Ye,R,s)=>{s.r(R),s.d(R,{RepoModule:()=>ze,RepoRoutingModule:()=>Q});var M=s(0),K=s(4004),e=s(5e3),_=s(9808),m=s(3874);const z=["*"];let Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-repo-stats-box-item"]],inputs:{icon:"icon"},ngContentSelectors:z,decls:3,vars:1,consts:[["aria-hidden","true"]],template:function(t,a){1&t&&(e.F$t(),e.TgZ(0,"mat-icon",0),e._uU(1),e.qZA(),e.Hsn(2)),2&t&&(e.xp6(1),e.Oqu(a.icon))},directives:[m.Hw],styles:["[_nghost-%COMP%]{padding:2px 5px;line-height:30px;display:inline-flex;vertical-align:middle;align-items:center;justify-content:center}[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%]{-webkit-margin-end:6px;margin-inline-end:6px}"]}),n})(),J=(()=>{class n{constructor(){this.repository=void 0}get starCount(){var t;return(null===(t=null==this?void 0:this.repository)||void 0===t?void 0:t.stargazers_count)||0}get forkCount(){var t;return(null===(t=null==this?void 0:this.repository)||void 0===t?void 0:t.forks_count)||0}get issueCount(){var t;return(null===(t=null==this?void 0:this.repository)||void 0===t?void 0:t.open_issues_count)||0}get subscriberCount(){var t;return(null===(t=null==this?void 0:this.repository)||void 0===t?void 0:t.subscribers_count)||0}get language(){var t;return(null===(t=null==this?void 0:this.repository)||void 0===t?void 0:t.language)||"unknown"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-repo-stats-box"]],inputs:{repository:"repository"},decls:10,vars:10,consts:function(){let o,t,a,i,r,d,c,u,p,h;return o=$localize`:␟e4650031316f48ce5f8332c23ee6d133bbdf575d␟5489093403543596640:{VAR_PLURAL, plural, =0 {No stars} =1 {One star} =2 {Two stars} other {{INTERPOLATION} stars}}`,o=e.Zx4(o,{VAR_PLURAL:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),t=$localize`:repo stats box|number of stars@@repoStatsBoxStarCount␟766ae8d146417fdef134e2806d394e4a99bcc39e␟7833728255287868176:${o}:ICU:
`,a=$localize`:␟39bcc91b21f4cf44b1f541315595ab6f1561ff7b␟7034682569130921088:{VAR_PLURAL, plural, =0 {No forks} =1 {One fork} =2 {Two forks} other {{INTERPOLATION} forks}}`,a=e.Zx4(a,{VAR_PLURAL:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),i=$localize`:repo stats box|number of forks@@repoStatsBoxForkCount␟aced7fd79edb1dfca6195455b8c10caaf1fabe5c␟6653807237536913828: ${a}:ICU:
`,r=$localize`:␟d8636e98578c402fd4ce1716cb3519028fe5f7ee␟3094441978952548330:{VAR_PLURAL, plural, =0 {No issues} =1 {One issue} =2 {Two issues} other {{INTERPOLATION} issues}}`,r=e.Zx4(r,{VAR_PLURAL:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),d=$localize`:repo stats box|number of issues@@repoStatsBoxIssueCount␟43a9b4ba1471ca83d0a3b47e750aa0fe6752fe06␟7430323096509155112: ${r}:ICU:
`,c=$localize`:␟bda11a39815c53c6c4dc89e60c7d3deba4628149␟5985169424002391507:{VAR_PLURAL, plural, =0 {No subscribers} =1 {One subscriber} =2 {Two subscribers} other {{INTERPOLATION}
    subscribers}}`,c=e.Zx4(c,{VAR_PLURAL:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),u=$localize`:repo stats box|number of subscribers@@repoStatsBoxSubscriberCount␟c4157042ed9fae24b0e0a9067200ca3a3299866d␟7037625894220328863: ${c}:ICU:
`,p=$localize`:␟0df791851171919fe877ce258a1cbe49ac3273b5␟9220390582374991433:{VAR_SELECT, select, unknown {Unknown} other {{INTERPOLATION}}}`,p=e.Zx4(p,{VAR_SELECT:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),h=$localize`:repo stats box|repository language@@repoStatsBoxLanguage␟51711eb5762f2055e069037bd8619603d63fa870␟5453019568878574084: ${p}:ICU:
`,[["icon","star"],t,["icon","call_split"],i,["icon","warning"],d,["icon","mail_outline"],u,["icon","language"],h]},template:function(t,a){1&t&&(e.TgZ(0,"app-repo-stats-box-item",0),e.SDv(1,1),e.qZA(),e.TgZ(2,"app-repo-stats-box-item",2),e.SDv(3,3),e.qZA(),e.TgZ(4,"app-repo-stats-box-item",4),e.SDv(5,5),e.qZA(),e.TgZ(6,"app-repo-stats-box-item",6),e.SDv(7,7),e.qZA(),e.TgZ(8,"app-repo-stats-box-item",8),e.SDv(9,9),e.qZA()),2&t&&(e.xp6(1),e.pQV(a.starCount)(a.starCount),e.QtT(1),e.xp6(2),e.pQV(a.forkCount)(a.forkCount),e.QtT(3),e.xp6(2),e.pQV(a.issueCount)(a.issueCount),e.QtT(5),e.xp6(2),e.pQV(a.subscriberCount)(a.subscriberCount),e.QtT(7),e.xp6(2),e.pQV(a.language)(a.language),e.QtT(9))},directives:[Y],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr}[_nghost-%COMP%]   app-repo-stats-box-item[_ngcontent-%COMP%]{grid-column:span 1}@media (max-width: 300px){[_nghost-%COMP%]   app-repo-stats-box-item[_ngcontent-%COMP%]{grid-column:span 4}}@media (min-width: 301px) and (max-width: 500px){[_nghost-%COMP%]   app-repo-stats-box-item[_ngcontent-%COMP%]{grid-column:span 2}}"]}),n})();var q=s(2379),g=s(149),A=s(7423);function W(n,o){if(1&n&&(e.TgZ(0,"mat-tree-node",3),e._UZ(1,"button",4),e._uU(2),e.qZA()),2&n){const t=o.$implicit;e.xp6(2),e.hij(" ",t.name," ")}}function ee(n,o){if(1&n&&(e.TgZ(0,"mat-tree-node",3),e.TgZ(1,"button",5),e.TgZ(2,"mat-icon",6),e._uU(3),e.qZA(),e.qZA(),e._uU(4),e.qZA()),2&n){const t=o.$implicit,a=e.oxw();e.xp6(1),e.uIk("aria-label","toggle "+t.name),e.xp6(2),e.hij(" ",a.treeControl.isExpanded(t)?"expand_more":"chevron_right"," "),e.xp6(1),e.hij(" ",t.name," ")}}const te=[{children:[{name:"Apple"},{name:"Banana"},{name:"Fruit loops"}],name:"Fruit"},{children:[{children:[{name:"Broccoli"},{name:"Brussel sprouts"}],name:"Green"},{children:[{name:"Pumpkins"},{name:"Carrots"}],name:"Orange"}],name:"Vegetables"}],ne=(n,o)=>({expandable:!!n.children&&n.children.length>0,level:o,name:n.name});let oe=(()=>{class n{constructor(){this.treeControl=new q.C2(t=>t.level,t=>t.expandable),this.treeFlattener=new g.JZ(ne,t=>t.level,t=>t.expandable,t=>t.children),this.dataSource=new g.kc(this.treeControl,this.treeFlattener),this.hasChild=(t,a)=>a.expandable,this.dataSource.data=te}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-object-tree"]],decls:3,vars:3,consts:[[3,"dataSource","treeControl"],["matTreeNodePadding","",4,"matTreeNodeDef"],["matTreeNodePadding","",4,"matTreeNodeDef","matTreeNodeDefWhen"],["matTreeNodePadding",""],["mat-icon-button","","disabled",""],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"]],template:function(t,a){1&t&&(e.TgZ(0,"mat-tree",0),e.YNc(1,W,3,1,"mat-tree-node",1),e.YNc(2,ee,5,3,"mat-tree-node",2),e.qZA()),2&t&&(e.Q6J("dataSource",a.dataSource)("treeControl",a.treeControl),e.xp6(2),e.Q6J("matTreeNodeDefWhen",a.hasChild))},directives:[g.gi,g.fQ,g.uo,g.ah,A.lW,g.eu,m.Hw],styles:[""],changeDetection:0}),n})();var S=s(4834),O=s(515),b=s(262);class D{derangeVersion(o){const t=o.match(/[0-9].*/);return t?t[0]:o}}var ae=s(1135),ie=s(4482),y=s(5403),de=(s(5032),s(5577)),F=s(520);let ce=(()=>{class n{constructor(t){this.http=t}getRawFile(t){return this.http.get(t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(F.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),T=(()=>{class n{constructor(t){this.downloadService=t,this.packageSubject=new ae.X(void 0)}set package(t){this.packageSubject.next(t)}get package(){return this.packageSubject.value}observePackage(){return this.packageSubject.pipe((0,ie.e)((t,a)=>{const i=new Set;t.subscribe(new y.Q(a,r=>{const d=r;i.has(d)||(i.add(d),a.next(r))}))}),(0,de.z)(t=>this.downloadService.getRawFile(t)))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(ce))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var E=s(3191),I=s(727),k=s(449);const L=new e.OlP("CdkAccordion");let le=0,pe=(()=>{class n{constructor(t,a,i){this.accordion=t,this._changeDetectorRef=a,this._expansionDispatcher=i,this._openCloseAllSubscription=I.w0.EMPTY,this.closed=new e.vpe,this.opened=new e.vpe,this.destroyed=new e.vpe,this.expandedChange=new e.vpe,this.id="cdk-accordion-child-"+le++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=i.listen((r,d)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===d&&this.id!==r&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(t){t=(0,E.Ig)(t),this._expanded!==t&&(this._expanded=t,this.expandedChange.emit(t),t?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,E.Ig)(t)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(L,12),e.Y36(e.sBO),e.Y36(k.A8))},n.\u0275dir=e.lG2({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[e._Bn([{provide:L,useValue:void 0}])]}),n})(),ue=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})();class x{attach(o){return this._attachedHost=o,o.attach(this)}detach(){let o=this._attachedHost;null!=o&&(this._attachedHost=null,o.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(o){this._attachedHost=o}}class he extends x{constructor(o,t,a,i){super(),this.component=o,this.viewContainerRef=t,this.injector=a,this.componentFactoryResolver=i}}class w extends x{constructor(o,t,a){super(),this.templateRef=o,this.viewContainerRef=t,this.context=a}get origin(){return this.templateRef.elementRef}attach(o,t=this.context){return this.context=t,super.attach(o)}detach(){return this.context=void 0,super.detach()}}class _e extends x{constructor(o){super(),this.element=o instanceof e.SBq?o.nativeElement:o}}let fe=(()=>{class n extends class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(o){return o instanceof he?(this._attachedPortal=o,this.attachComponentPortal(o)):o instanceof w?(this._attachedPortal=o,this.attachTemplatePortal(o)):this.attachDomPortal&&o instanceof _e?(this._attachedPortal=o,this.attachDomPortal(o)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(o){this._disposeFn=o}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}{constructor(t,a,i){super(),this._componentFactoryResolver=t,this._viewContainerRef=a,this._isInitialized=!1,this.attached=new e.vpe,this.attachDomPortal=r=>{const d=r.element,c=this._document.createComment("dom-portal");r.setAttachedHost(this),d.parentNode.insertBefore(c,d),this._getRootNode().appendChild(d),this._attachedPortal=r,super.setDisposeFn(()=>{c.parentNode&&c.parentNode.replaceChild(d,c)})},this._document=i}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(t){t.setAttachedHost(this);const a=null!=t.viewContainerRef?t.viewContainerRef:this._viewContainerRef,r=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),d=a.createComponent(r,a.length,t.injector||a.injector);return a!==this._viewContainerRef&&this._getRootNode().appendChild(d.hostView.rootNodes[0]),super.setDisposeFn(()=>d.destroy()),this._attachedPortal=t,this._attachedRef=d,this.attached.emit(d),d}attachTemplatePortal(t){t.setAttachedHost(this);const a=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context);return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=a,this.attached.emit(a),a}_getRootNode(){const t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e._Vd),e.Y36(e.s_b),e.Y36(_.K0))},n.\u0275dir=e.lG2({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[e.qOj]}),n})(),me=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),n})();var v=s(508),Pe=s(8778),Oe=s(1884),Me=s(8675),C=s(9300),Ce=s(5698),N=s(1159),$=s(6360),U=s(7579),Ae=s(6451),l=s(1777);const Te=["body"];function Ee(n,o){}const xe=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],ve=["mat-expansion-panel-header","*","mat-action-row"];function Ne(n,o){if(1&n&&e._UZ(0,"span",2),2&n){const t=e.oxw();e.Q6J("@indicatorRotate",t._getExpandedState())}}const Re=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Se=["mat-panel-title","mat-panel-description","*"],B=new e.OlP("MAT_ACCORDION"),G="225ms cubic-bezier(0.4,0.0,0.2,1)",H={indicatorRotate:(0,l.X$)("indicatorRotate",[(0,l.SB)("collapsed, void",(0,l.oB)({transform:"rotate(0deg)"})),(0,l.SB)("expanded",(0,l.oB)({transform:"rotate(180deg)"})),(0,l.eR)("expanded <=> collapsed, void => collapsed",(0,l.jt)(G))]),bodyExpansion:(0,l.X$)("bodyExpansion",[(0,l.SB)("collapsed, void",(0,l.oB)({height:"0px",visibility:"hidden"})),(0,l.SB)("expanded",(0,l.oB)({height:"*",visibility:"visible"})),(0,l.eR)("expanded <=> collapsed, void => collapsed",(0,l.jt)(G))])};let be=(()=>{class n{constructor(t){this._template=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Rgc))},n.\u0275dir=e.lG2({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]}),n})(),De=0;const Z=new e.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let X=(()=>{class n extends pe{constructor(t,a,i,r,d,c,u){super(t,a,i),this._viewContainerRef=r,this._animationMode=c,this._hideToggle=!1,this.afterExpand=new e.vpe,this.afterCollapse=new e.vpe,this._inputChanges=new U.x,this._headerId="mat-expansion-panel-header-"+De++,this._bodyAnimationDone=new U.x,this.accordion=t,this._document=d,this._bodyAnimationDone.pipe((0,Oe.x)((p,h)=>p.fromState===h.fromState&&p.toState===h.toState)).subscribe(p=>{"void"!==p.fromState&&("expanded"===p.toState?this.afterExpand.emit():"collapsed"===p.toState&&this.afterCollapse.emit())}),u&&(this.hideToggle=u.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=(0,E.Ig)(t)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this.opened.pipe((0,Me.O)(null),(0,C.h)(()=>this.expanded&&!this._portal),(0,Ce.q)(1)).subscribe(()=>{this._portal=new w(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const t=this._document.activeElement,a=this._body.nativeElement;return t===a||a.contains(t)}return!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(B,12),e.Y36(e.sBO),e.Y36(k.A8),e.Y36(e.s_b),e.Y36(_.K0),e.Y36($.Qb,8),e.Y36(Z,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,a,i){if(1&t&&e.Suo(i,be,5),2&t){let r;e.iGM(r=e.CRH())&&(a._lazyContent=r.first)}},viewQuery:function(t,a){if(1&t&&e.Gf(Te,5),2&t){let i;e.iGM(i=e.CRH())&&(a._body=i.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(t,a){2&t&&e.ekj("mat-expanded",a.expanded)("_mat-animation-noopable","NoopAnimations"===a._animationMode)("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[e._Bn([{provide:B,useValue:void 0}]),e.qOj,e.TTD],ngContentSelectors:ve,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,a){1&t&&(e.F$t(xe),e.Hsn(0),e.TgZ(1,"div",0,1),e.NdJ("@bodyExpansion.done",function(r){return a._bodyAnimationDone.next(r)}),e.TgZ(3,"div",2),e.Hsn(4,1),e.YNc(5,Ee,0,0,"ng-template",3),e.qZA(),e.Hsn(6,2),e.qZA()),2&t&&(e.xp6(1),e.Q6J("@bodyExpansion",a._getExpandedState())("id",a.id),e.uIk("aria-labelledby",a._headerId),e.xp6(4),e.Q6J("cdkPortalOutlet",a._portal))},directives:[fe],styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[H.bodyExpansion]},changeDetection:0}),n})();class ye{}const Fe=(0,v.sb)(ye);let Ie=(()=>{class n extends Fe{constructor(t,a,i,r,d,c,u){super(),this.panel=t,this._element=a,this._focusMonitor=i,this._changeDetectorRef=r,this._animationMode=c,this._parentChangeSubscription=I.w0.EMPTY;const p=t.accordion?t.accordion._stateChanges.pipe((0,C.h)(h=>!(!h.hideToggle&&!h.togglePosition))):O.E;this.tabIndex=parseInt(u||"")||0,this._parentChangeSubscription=(0,Ae.T)(t.opened,t.closed,p,t._inputChanges.pipe((0,C.h)(h=>!!(h.hideToggle||h.disabled||h.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe((0,C.h)(()=>t._containsFocus())).subscribe(()=>i.focusVia(a,"program")),d&&(this.expandedHeight=d.expandedHeight,this.collapsedHeight=d.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case N.L_:case N.K5:(0,N.Vb)(t)||(t.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t))}}focus(t,a){t?this._focusMonitor.focusVia(this._element,t,a):this._element.nativeElement.focus(a)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(X,1),e.Y36(e.SBq),e.Y36(Pe.tE),e.Y36(e.sBO),e.Y36(Z,8),e.Y36($.Qb,8),e.$8M("tabindex"))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(t,a){1&t&&e.NdJ("click",function(){return a._toggle()})("keydown",function(r){return a._keydown(r)}),2&t&&(e.uIk("id",a.panel._headerId)("tabindex",a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),e.Udp("height",a._getHeaderHeight()),e.ekj("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after","after"===a._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===a._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===a._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[e.qOj],ngContentSelectors:Se,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(t,a){1&t&&(e.F$t(Re),e.TgZ(0,"span",0),e.Hsn(1),e.Hsn(2,1),e.Hsn(3,2),e.qZA(),e.YNc(4,Ne,1,1,"span",1)),2&t&&(e.xp6(4),e.Q6J("ngIf",a._showToggle()))},directives:[_.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n'],encapsulation:2,data:{animation:[H.indicatorRotate]},changeDetection:0}),n})(),ke=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),n})(),Le=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),n})(),j=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.ez,v.BQ,ue,me]]}),n})();var P=s(9650);function we(n,o){if(1&n&&(e.TgZ(0,"a",4),e.DtL(1,5),e.TgZ(2,"mat-icon",6),e._uU(3,"archive"),e.qZA(),e.TgZ(4,"h3",7),e._uU(5),e.qZA(),e.TgZ(6,"p",7),e.SDv(7,8),e.qZA(),e.qZA()),2&n){const t=o.$implicit,a=e.oxw();e.pQV(t[0])(t[1]),e.QtT(1),e.hYB("href","https://www.npmjs.com/package/",t[0],"/v/",a.derangeVersion(t[1]),"",e.LSH),e.xp6(5),e.Oqu(t[0]),e.xp6(2),e.pQV(t[1]),e.QtT(7)}}let $e=(()=>{class n extends D{constructor(){super(...arguments),this.packages=[],this.header="",this.description=""}getPackageCount(){return this.packages?this.packages.length:0}isDisabled(){return this.getPackageCount()<1}}return n.\u0275fac=function(){let o;return function(a){return(o||(o=e.n5z(n)))(a||n)}}(),n.\u0275cmp=e.Xpm({type:n,selectors:[["app-npm-package-list"]],inputs:{packages:"packages",header:"header",description:"description"},features:[e._Bn([T]),e.qOj],decls:9,vars:5,consts:function(){let o,t,a;return o=$localize`:␟b25cbcd9328377cb3798e5ca26aa03327a10e221␟5605518079501406304:{VAR_PLURAL, plural, =0 {No package detected} =1 {One package detected} =2 {Two packages detected} other {{INTERPOLATION} packages detected}}`,o=e.Zx4(o,{VAR_PLURAL:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),t=$localize`:npm package list|Version Title Tag@@npm_version_title_tag␟3ebeab8fda7b04d95360f06166b5dd44bcfd70ff␟536561987224910001:Package Dependency ${"\ufffd0\ufffd"}:INTERPOLATION: with Version: ${"\ufffd1\ufffd"}:INTERPOLATION_1:`,a=$localize`:npm package list|The npm version@@version_x␟8e27f44bb34f2856524403136fdd70bd4e68ae1a␟6186731904468754174:Version: ${"\ufffd0\ufffd"}:INTERPOLATION:`,[[3,"disabled"],o,["dense",""],["mat-list-item","","target","_blank",3,"href","title",4,"ngFor","ngForOf"],["mat-list-item","","target","_blank",3,"href",6,"title"],["title",t],["matListIcon",""],["matLine",""],a]},template:function(t,a){1&t&&(e.TgZ(0,"mat-expansion-panel",0),e.TgZ(1,"mat-expansion-panel-header"),e.TgZ(2,"mat-panel-title"),e._uU(3),e.qZA(),e.TgZ(4,"mat-panel-description"),e.SDv(5,1),e._uU(6," "),e.qZA(),e.qZA(),e.TgZ(7,"mat-nav-list",2),e.YNc(8,we,8,6,"a",3),e.qZA(),e.qZA()),2&t&&(e.Q6J("disabled",a.isDisabled()),e.xp6(3),e.Oqu(a.header),e.xp6(2),e.pQV(a.getPackageCount())(a.getPackageCount()),e.QtT(5),e.xp6(3),e.Q6J("ngForOf",a.packages))},directives:[X,Ie,Le,ke,P.Hk,_.sg,P.Tg,m.Hw,P.Nh,v.X2],styles:["[_nghost-%COMP%]{display:block}span.package-version[_ngcontent-%COMP%]{font-family:monospace;-webkit-padding-start:20px;padding-inline-start:20px}span.package-title[_ngcontent-%COMP%]{font-weight:700}"]}),n})(),Ue=(()=>{class n extends D{constructor(t,a){super(),this.packageService=t,this.changeDetectorRef=a,this.dependencies=[],this.devDependencies=[],this.optionalDependencies=[]}set packageUrl(t){this.packageService.package=t}convertMapToArray(t){return t?Object.keys(t).map(a=>[a,t[a]]):[]}ngAfterViewInit(){this.loadSubscription=this.packageService.observePackage().pipe((0,b.K)(t=>O.E)).subscribe(t=>{this.dependencies=this.convertMapToArray(t.dependencies),this.devDependencies=this.convertMapToArray(t.devDependencies),this.optionalDependencies=this.convertMapToArray(t.optionalDependencies),this.changeDetectorRef.detectChanges()})}ngOnDestroy(){this.loadSubscription&&this.loadSubscription.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-npm-package-info"]],inputs:{packageUrl:"packageUrl"},features:[e._Bn([T]),e.qOj],decls:7,vars:3,consts:function(){let o,t,a,i,r;return o=$localize`:npm package file|title@@npmPackageInfoTitle␟a0cb312abd62d123cb4cf1452203fdd51ac99f1c␟846961538715002266:Npm Package Info`,t=$localize`:npm package file|subtitle@@npmPackageInfoSubtitle␟ce4beeaf9c2a03ec66593d990b9cb5f418a530e4␟609233393926798648:Information about the package.json file located at the repository root directory.`,a=$localize`:npm package file|package list dependencies header@@npmPackageListDependencies␟7e352128519f70bc6757bc2f7459ac4ac66f0c27␟5548713791919881935:Dependencies`,i=$localize`:npm package file|package list dev dependencies header@@npmPackageListDevDependencies␟86ade9f6965f1cf583ccfcb596cdee95046e0bb4␟471685310476725833:Development Dependencies`,r=$localize`:npm package file|package list optional dependencies header@@npmPackageListOptionalDependencies␟3b4a280cb893a0556eeec0ac2324b70cd689c18a␟7666874249783812852:Optional Dependencies`,[[1,"mat-h2"],o,[1,"mat-caption"],t,["header",a,3,"packages"],["header",i,3,"packages"],["header",r,3,"packages"]]},template:function(t,a){1&t&&(e.TgZ(0,"h2",0),e.SDv(1,1),e.qZA(),e.TgZ(2,"p",2),e.SDv(3,3),e.qZA(),e._UZ(4,"app-npm-package-list",4),e._UZ(5,"app-npm-package-list",5),e._UZ(6,"app-npm-package-list",6)),2&t&&(e.xp6(4),e.Q6J("packages",a.dependencies),e.xp6(1),e.Q6J("packages",a.devDependencies),e.xp6(1),e.Q6J("packages",a.optionalDependencies))},directives:[$e],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:stretch;overflow:auto}[_nghost-%COMP%]   app-npm-package-list[_ngcontent-%COMP%]{margin-top:10px}"]}),n})();function Be(n,o){if(1&n&&(e.TgZ(0,"h3",5),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(null==t.repository?null:t.repository.description)}}function Ge(n,o){if(1&n&&(e.ynx(0),e._UZ(1,"mat-divider"),e._UZ(2,"app-npm-package-info",6),e.BQk()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("packageUrl",t.npmPackageUrl)}}let He=(()=>{class n{constructor(t,a){this.activatedRoute=t,this.cdRef=a,this.repository=void 0}ngAfterViewInit(){this.updateSubscription=this.activatedRoute.data.pipe((0,K.U)(t=>t.repo)).subscribe(t=>{this.setRepository(t)})}setRepository(t){this.repository=t,this.cdRef.detectChanges()}ngOnDestroy(){this.updateSubscription&&this.updateSubscription.unsubscribe()}isJavascript(){if(this.repository&&this.repository.language){const t=this.repository.language.toLowerCase();return"typescript"===t||"javascript"===t}return!1}get npmPackageUrl(){return`https://raw.githubusercontent.com/${this.repository.full_name}/master/package.json`}hasDescription(){var t;return"string"==typeof(null===(t=null==this?void 0:this.repository)||void 0===t?void 0:t.description)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(M.gz),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-repo-detail"]],decls:10,vars:6,consts:[[1,"mat-display-1"],["class","mat-display-4",4,"ngIf"],[3,"repository"],[3,"href"],[4,"ngIf"],[1,"mat-display-4"],["role","complementary",3,"packageUrl"]],template:function(t,a){1&t&&(e.TgZ(0,"h1",0),e._uU(1),e.qZA(),e.YNc(2,Be,2,1,"h3",1),e._UZ(3,"app-repo-stats-box",2),e._UZ(4,"app-object-tree"),e.TgZ(5,"a",3),e._uU(6,"On Github"),e.qZA(),e.TgZ(7,"h4"),e._uU(8),e.qZA(),e.YNc(9,Ge,3,1,"ng-container",4)),2&t&&(e.xp6(1),e.Oqu(null==a.repository?null:a.repository.full_name),e.xp6(1),e.Q6J("ngIf",a.hasDescription()),e.xp6(1),e.Q6J("repository",a.repository),e.xp6(2),e.s9C("href",null==a.repository?null:a.repository.html_url,e.LSH),e.xp6(3),e.Oqu(null==a.repository?null:a.repository.language),e.xp6(1),e.Q6J("ngIf",a.isJavascript()))},directives:[_.O5,J,oe,S.d,Ue],styles:[""],changeDetection:0}),n})();var Ze=s(8118),Xe=s(8624);let V=(()=>{class n{constructor(t,a,i){this.platformId=t,this.api=a,this.router=i}resolve(t,a){return this.api.getRepo(Ze.N.github.username,t.params.reponame).pipe((0,b.K)(i=>{if(i instanceof F.UA){if(404===i.status&&(0,_.NF)(this.platformId))return this.router.navigate(["repos"]),O.E;if(403===i.status)return console.log("Rate limit"),O.E}return O.E}))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(e.Lbi),e.LFG(Xe.q),e.LFG(M.F0))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();const je=[{component:He,path:":reponame",resolve:{repo:V}}];let Q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[M.Bz.forChild(je)],M.Bz]}),n})();var Ve=s(3954),Qe=s(2916);let Ke=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.ez,g.dp,m.Ps,A.ot,j,P.ie],_.ez,g.dp,m.Ps,A.ot,j,P.ie]}),n})(),ze=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[V],imports:[[_.ez,Q,Ve.N6,S.t,P.ie,Qe._,Ke,m.Ps]]}),n})()}}]);