(self.webpackChunk_donmahallem_github_page=self.webpackChunk_donmahallem_github_page||[]).push([[958],{6958:function(e,t,n){"use strict";n.r(t),n.d(t,{RepoModule:function(){return Ne},RepoRoutingModule:function(){return Re}});var a=n(9927),i=n(5207),o=n(7716),s=n(8583),r=n(4664);const c=["*"];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-repo-stats-box-item"]],inputs:{icon:"icon"},ngContentSelectors:c,decls:3,vars:1,consts:[["aria-hidden","true"]],template:function(e,t){1&e&&(o.F$t(),o.TgZ(0,"mat-icon",0),o._uU(1),o.qZA(),o.Hsn(2)),2&e&&(o.xp6(1),o.Oqu(t.icon))},directives:[r.Hw],styles:["[_nghost-%COMP%]{padding:2px 5px;line-height:30px;display:inline-flex;vertical-align:middle;align-items:center;justify-content:center}[_nghost-%COMP%]   mat-icon[_ngcontent-%COMP%]{-webkit-margin-end:6px;margin-inline-end:6px}"]}),e})(),d=(()=>{class e{constructor(){this.repository=void 0}get starCount(){return this.repository&&this.repository.stargazers_count?this.repository.stargazers_count:0}get forkCount(){return this.repository&&this.repository.forks_count?this.repository.forks_count:0}get issueCount(){return this.repository&&this.repository.open_issues_count?this.repository.open_issues_count:0}get subscriberCount(){return this.repository&&this.repository.subscribers_count?this.repository.subscribers_count:0}get language(){return this.repository&&this.repository.language?this.repository.language:"unknown"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-repo-stats-box"]],inputs:{repository:"repository"},decls:10,vars:10,consts:function(){let e,t,n,a,i,s,r,c,p,d;return e=$localize`:␟e4650031316f48ce5f8332c23ee6d133bbdf575d␟5489093403543596640:{VAR_PLURAL, plural, =0 {No stars} =1 {One star} =2 {Two stars} other {{INTERPOLATION} stars}}`,e=o.Zx4(e,{VAR_PLURAL:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),t=$localize`:repo stats box|number of stars@@repoStatsBoxStarCount␟766ae8d146417fdef134e2806d394e4a99bcc39e␟7833728255287868176:${e}:ICU:
`,n=$localize`:␟39bcc91b21f4cf44b1f541315595ab6f1561ff7b␟7034682569130921088:{VAR_PLURAL, plural, =0 {No forks} =1 {One fork} =2 {Two forks} other {{INTERPOLATION} forks}}`,n=o.Zx4(n,{VAR_PLURAL:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),a=$localize`:repo stats box|number of forks@@repoStatsBoxForkCount␟aced7fd79edb1dfca6195455b8c10caaf1fabe5c␟6653807237536913828: ${n}:ICU:
`,i=$localize`:␟d8636e98578c402fd4ce1716cb3519028fe5f7ee␟3094441978952548330:{VAR_PLURAL, plural, =0 {No issues} =1 {One issue} =2 {Two issues} other {{INTERPOLATION} issues}}`,i=o.Zx4(i,{VAR_PLURAL:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),s=$localize`:repo stats box|number of issues@@repoStatsBoxIssueCount␟43a9b4ba1471ca83d0a3b47e750aa0fe6752fe06␟7430323096509155112: ${i}:ICU:
`,r=$localize`:␟bda11a39815c53c6c4dc89e60c7d3deba4628149␟5985169424002391507:{VAR_PLURAL, plural, =0 {No subscribers} =1 {One subscriber} =2 {Two subscribers} other {{INTERPOLATION}
    subscribers}}`,r=o.Zx4(r,{VAR_PLURAL:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),c=$localize`:repo stats box|number of subscribers@@repoStatsBoxSubscriberCount␟c4157042ed9fae24b0e0a9067200ca3a3299866d␟7037625894220328863: ${r}:ICU:
`,p=$localize`:␟0df791851171919fe877ce258a1cbe49ac3273b5␟9220390582374991433:{VAR_SELECT, select, unknown {Unknown} other {{INTERPOLATION}}}`,p=o.Zx4(p,{VAR_SELECT:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),d=$localize`:repo stats box|repository language@@repoStatsBoxLanguage␟51711eb5762f2055e069037bd8619603d63fa870␟5453019568878574084: ${p}:ICU:
`,[["icon","star"],t,["icon","call_split"],a,["icon","warning"],s,["icon","mail_outline"],c,["icon","language"],d]},template:function(e,t){1&e&&(o.TgZ(0,"app-repo-stats-box-item",0),o.SDv(1,1),o.qZA(),o.TgZ(2,"app-repo-stats-box-item",2),o.SDv(3,3),o.qZA(),o.TgZ(4,"app-repo-stats-box-item",4),o.SDv(5,5),o.qZA(),o.TgZ(6,"app-repo-stats-box-item",6),o.SDv(7,7),o.qZA(),o.TgZ(8,"app-repo-stats-box-item",8),o.SDv(9,9),o.qZA()),2&e&&(o.xp6(1),o.pQV(t.starCount)(t.starCount),o.QtT(1),o.xp6(2),o.pQV(t.forkCount)(t.forkCount),o.QtT(3),o.xp6(2),o.pQV(t.issueCount)(t.issueCount),o.QtT(5),o.xp6(2),o.pQV(t.subscriberCount)(t.subscriberCount),o.QtT(7),o.xp6(2),o.pQV(t.language)(t.language),o.QtT(9))},directives:[p],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr}[_nghost-%COMP%]   app-repo-stats-box-item[_ngcontent-%COMP%]{grid-column:span 1}@media (max-width: 300px){[_nghost-%COMP%]   app-repo-stats-box-item[_ngcontent-%COMP%]{grid-column:span 4}}@media (min-width: 301px) and (max-width: 500px){[_nghost-%COMP%]   app-repo-stats-box-item[_ngcontent-%COMP%]{grid-column:span 2}}"]}),e})();var l=n(3243),h=n(1933),u=n(1095);function g(e,t){if(1&e&&(o.TgZ(0,"mat-tree-node",3),o._UZ(1,"button",4),o._uU(2),o.qZA()),2&e){const e=t.$implicit;o.xp6(2),o.hij(" ",e.name," ")}}function m(e,t){if(1&e&&(o.TgZ(0,"mat-tree-node",3),o.TgZ(1,"button",5),o.TgZ(2,"mat-icon",6),o._uU(3),o.qZA(),o.qZA(),o._uU(4),o.qZA()),2&e){const e=t.$implicit,n=o.oxw();o.xp6(1),o.uIk("aria-label","toggle "+e.name),o.xp6(2),o.hij(" ",n.treeControl.isExpanded(e)?"expand_more":"chevron_right"," "),o.xp6(1),o.hij(" ",e.name," ")}}const f=[{name:"Fruit",children:[{name:"Apple"},{name:"Banana"},{name:"Fruit loops"}]},{name:"Vegetables",children:[{name:"Green",children:[{name:"Broccoli"},{name:"Brussel sprouts"}]},{name:"Orange",children:[{name:"Pumpkins"},{name:"Carrots"}]}]}],b=(e,t)=>({expandable:!!e.children&&e.children.length>0,name:e.name,level:t});let x=(()=>{class e{constructor(){this.treeControl=new l.C2(e=>e.level,e=>e.expandable),this.treeFlattener=new h.JZ(b,e=>e.level,e=>e.expandable,e=>e.children),this.dataSource=new h.kc(this.treeControl,this.treeFlattener),this.hasChild=(e,t)=>t.expandable,this.dataSource.data=f}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-object-tree"]],decls:3,vars:3,consts:[[3,"dataSource","treeControl"],["matTreeNodePadding","",4,"matTreeNodeDef"],["matTreeNodePadding","",4,"matTreeNodeDef","matTreeNodeDefWhen"],["matTreeNodePadding",""],["mat-icon-button","","disabled",""],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"]],template:function(e,t){1&e&&(o.TgZ(0,"mat-tree",0),o.YNc(1,g,3,1,"mat-tree-node",1),o.YNc(2,m,5,3,"mat-tree-node",2),o.qZA()),2&e&&(o.Q6J("dataSource",t.dataSource)("treeControl",t.treeControl),o.xp6(2),o.Q6J("matTreeNodeDefWhen",t.hasChild))},directives:[h.gi,h.fQ,h.uo,h.ah,u.lW,h.eu,r.Hw],styles:[""],changeDetection:0}),e})();var _=n(1769),y=n(6149),v=n(5894),k=n(5094),T=n(4297),A=n(5076),w=(n(6186),n(7216)),C=n(1841);let P=(()=>{class e{constructor(e){this.http=e}getRawFile(e){return this.http.get(e)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(C.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),O=(()=>{class e{constructor(e){this.downloadService=e,this.packageSubject=new k.X(void 0)}set package(e){this.packageSubject.next(e)}get package(){return this.packageSubject.value}observePackage(){return this.packageSubject.pipe((0,T.e)(function(e,t){var n=new Set;e.subscribe(new A.Q(t,function(e){var a=e;n.has(a)||(n.add(a),t.next(e))}))}),(0,w.z)(e=>this.downloadService.getRawFile(e)))}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(P))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})();var R=n(9490),S=n(6889),I=n(8839),D=n(8345);const N=new o.OlP("CdkAccordion");let Z=0,E=(()=>{class e{constructor(e,t,n){this.accordion=e,this._changeDetectorRef=t,this._expansionDispatcher=n,this._openCloseAllSubscription=I.w0.EMPTY,this.closed=new o.vpe,this.opened=new o.vpe,this.destroyed=new o.vpe,this.expandedChange=new o.vpe,this.id="cdk-accordion-child-"+Z++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=n.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(e){e=(0,R.Ig)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,R.Ig)(e)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(N,12),o.Y36(o.sBO),o.Y36(D.A8))},e.\u0275dir=o.lG2({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[o._Bn([{provide:N,useValue:void 0}])]}),e})(),L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),e})();class U{attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;null!=e&&(this._attachedHost=null,e.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(e){this._attachedHost=e}}class q extends U{constructor(e,t,n,a){super(),this.component=e,this.viewContainerRef=t,this.injector=n,this.componentFactoryResolver=a}}class z extends U{constructor(e,t,n){super(),this.templateRef=e,this.viewContainerRef=t,this.context=n}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}}class H extends U{constructor(e){super(),this.element=e instanceof o.SBq?e.nativeElement:e}}let F=(()=>{class e extends class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(e){return e instanceof q?(this._attachedPortal=e,this.attachComponentPortal(e)):e instanceof z?(this._attachedPortal=e,this.attachTemplatePortal(e)):this.attachDomPortal&&e instanceof H?(this._attachedPortal=e,this.attachDomPortal(e)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}{constructor(e,t,n){super(),this._componentFactoryResolver=e,this._viewContainerRef=t,this._isInitialized=!1,this.attached=new o.vpe,this.attachDomPortal=e=>{const t=e.element,n=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})},this._document=n}get portal(){return this._attachedPortal}set portal(e){(!this.hasAttached()||e||this._isInitialized)&&(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(e){e.setAttachedHost(this);const t=null!=e.viewContainerRef?e.viewContainerRef:this._viewContainerRef,n=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),a=t.createComponent(n,t.length,e.injector||t.injector);return t!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=e,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(e){e.setAttachedHost(this);const t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context);return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}_getRootNode(){const e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o._Vd),o.Y36(o.s_b),o.Y36(s.K0))},e.\u0275dir=o.lG2({type:e,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[o.qOj]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),e})();var M=n(2458),V=n(8068),Q=n(2687),Y=n(9978),$=n(4689),j=n(4294),J=n(6461),G=n(6237),X=n(3763),K=n(7238);const W=["body"];function ee(e,t){}const te=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],ne=["mat-expansion-panel-header","*","mat-action-row"];function ae(e,t){if(1&e&&o._UZ(0,"span",2),2&e){const e=o.oxw();o.Q6J("@indicatorRotate",e._getExpandedState())}}const ie=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],oe=["mat-panel-title","mat-panel-description","*"],se=new o.OlP("MAT_ACCORDION"),re={indicatorRotate:(0,K.X$)("indicatorRotate",[(0,K.SB)("collapsed, void",(0,K.oB)({transform:"rotate(0deg)"})),(0,K.SB)("expanded",(0,K.oB)({transform:"rotate(180deg)"})),(0,K.eR)("expanded <=> collapsed, void => collapsed",(0,K.jt)("225ms cubic-bezier(0.4,0.0,0.2,1)"))]),bodyExpansion:(0,K.X$)("bodyExpansion",[(0,K.SB)("collapsed, void",(0,K.oB)({height:"0px",visibility:"hidden"})),(0,K.SB)("expanded",(0,K.oB)({height:"*",visibility:"visible"})),(0,K.eR)("expanded <=> collapsed, void => collapsed",(0,K.jt)("225ms cubic-bezier(0.4,0.0,0.2,1)"))])};let ce=(()=>{class e{constructor(e){this._template=e}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.Rgc))},e.\u0275dir=o.lG2({type:e,selectors:[["ng-template","matExpansionPanelContent",""]]}),e})(),pe=0;const de=new o.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let le=(()=>{class e extends E{constructor(e,t,n,a,i,s,r){super(e,t,n),this._viewContainerRef=a,this._animationMode=s,this._hideToggle=!1,this.afterExpand=new o.vpe,this.afterCollapse=new o.vpe,this._inputChanges=new S.x,this._headerId="mat-expansion-panel-header-"+pe++,this._bodyAnimationDone=new S.x,this.accordion=e,this._document=i,this._bodyAnimationDone.pipe((0,Q.x)((e,t)=>e.fromState===t.fromState&&e.toState===t.toState)).subscribe(e=>{"void"!==e.fromState&&("expanded"===e.toState?this.afterExpand.emit():"collapsed"===e.toState&&this.afterCollapse.emit())}),r&&(this.hideToggle=r.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=(0,R.Ig)(e)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this.opened.pipe((0,Y.O)(null),(0,$.h)(()=>this.expanded&&!this._portal),(0,j.q)(1)).subscribe(()=>{this._portal=new z(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(se,12),o.Y36(o.sBO),o.Y36(D.A8),o.Y36(o.s_b),o.Y36(s.K0),o.Y36(G.Qb,8),o.Y36(de,8))},e.\u0275cmp=o.Xpm({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(e,t,n){if(1&e&&o.Suo(n,ce,5),2&e){let e;o.iGM(e=o.CRH())&&(t._lazyContent=e.first)}},viewQuery:function(e,t){if(1&e&&o.Gf(W,5),2&e){let e;o.iGM(e=o.CRH())&&(t._body=e.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,t){2&e&&o.ekj("mat-expanded",t.expanded)("_mat-animation-noopable","NoopAnimations"===t._animationMode)("mat-expansion-panel-spacing",t._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[o._Bn([{provide:se,useValue:void 0}]),o.qOj,o.TTD],ngContentSelectors:ne,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,t){1&e&&(o.F$t(te),o.Hsn(0),o.TgZ(1,"div",0,1),o.NdJ("@bodyExpansion.done",function(e){return t._bodyAnimationDone.next(e)}),o.TgZ(3,"div",2),o.Hsn(4,1),o.YNc(5,ee,0,0,"ng-template",3),o.qZA(),o.Hsn(6,2),o.qZA()),2&e&&(o.xp6(1),o.Q6J("@bodyExpansion",t._getExpandedState())("id",t.id),o.uIk("aria-labelledby",t._headerId),o.xp6(4),o.Q6J("cdkPortalOutlet",t._portal))},directives:[F],styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[re.bodyExpansion]},changeDetection:0}),e})();class he{}const ue=(0,M.sb)(he);let ge=(()=>{class e extends ue{constructor(e,t,n,a,i,o,s){super(),this.panel=e,this._element=t,this._focusMonitor=n,this._changeDetectorRef=a,this._animationMode=o,this._parentChangeSubscription=I.w0.EMPTY;const r=e.accordion?e.accordion._stateChanges.pipe((0,$.h)(e=>!(!e.hideToggle&&!e.togglePosition))):y.E;this.tabIndex=parseInt(s||"")||0,this._parentChangeSubscription=(0,X.T)(e.opened,e.closed,r,e._inputChanges.pipe((0,$.h)(e=>!!(e.hideToggle||e.disabled||e.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe((0,$.h)(()=>e._containsFocus())).subscribe(()=>n.focusVia(t,"program")),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case J.L_:case J.K5:(0,J.Vb)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(le,1),o.Y36(o.SBq),o.Y36(V.tE),o.Y36(o.sBO),o.Y36(de,8),o.Y36(G.Qb,8),o.$8M("tabindex"))},e.\u0275cmp=o.Xpm({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(e,t){1&e&&o.NdJ("click",function(){return t._toggle()})("keydown",function(e){return t._keydown(e)}),2&e&&(o.uIk("id",t.panel._headerId)("tabindex",t.tabIndex)("aria-controls",t._getPanelId())("aria-expanded",t._isExpanded())("aria-disabled",t.panel.disabled),o.Udp("height",t._getHeaderHeight()),o.ekj("mat-expanded",t._isExpanded())("mat-expansion-toggle-indicator-after","after"===t._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===t._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[o.qOj],ngContentSelectors:oe,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,t){1&e&&(o.F$t(ie),o.TgZ(0,"span",0),o.Hsn(1),o.Hsn(2,1),o.Hsn(3,2),o.qZA(),o.YNc(4,ae,1,1,"span",1)),2&e&&(o.xp6(4),o.Q6J("ngIf",t._showToggle()))},directives:[s.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}\n'],encapsulation:2,data:{animation:[re.indicatorRotate]},changeDetection:0}),e})(),me=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=o.lG2({type:e,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),e})(),fe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=o.lG2({type:e,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),e})(),be=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[s.ez,M.BQ,L,B]]}),e})();var xe=n(3093);function _e(e,t){if(1&e&&(o.TgZ(0,"a",4),o.DtL(1,5),o.TgZ(2,"mat-icon",6),o._uU(3,"archive"),o.qZA(),o.TgZ(4,"h3",7),o._uU(5),o.qZA(),o.TgZ(6,"p",7),o.SDv(7,8),o.qZA(),o.qZA()),2&e){const e=t.$implicit,n=o.oxw();o.pQV(e[0])(e[1]),o.QtT(1),o.hYB("href","https://www.npmjs.com/package/",e[0],"/v/",n.derangeVersion(e[1]),"",o.LSH),o.xp6(5),o.Oqu(e[0]),o.xp6(2),o.pQV(e[1]),o.QtT(7)}}let ye=(()=>{class e{constructor(){this.packages=[],this.header="",this.description=""}derangeVersion(e){return e.match(/[0-9].*/)[0]}getPackageCount(){return this.packages?this.packages.length:0}isDisabled(){return this.getPackageCount()<1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-npm-package-list"]],inputs:{packages:"packages",header:"header",description:"description"},features:[o._Bn([O])],decls:9,vars:5,consts:function(){let e,t,n;return e=$localize`:␟b25cbcd9328377cb3798e5ca26aa03327a10e221␟5605518079501406304:{VAR_PLURAL, plural, =0 {No package detected} =1 {One package detected} =2 {Two packages detected} other {{INTERPOLATION} packages detected}}`,e=o.Zx4(e,{VAR_PLURAL:"\ufffd0\ufffd",INTERPOLATION:"\ufffd1\ufffd"}),t=$localize`:npm package list|Version Title Tag@@npm_version_title_tag␟3ebeab8fda7b04d95360f06166b5dd44bcfd70ff␟536561987224910001:Package Dependency ${"\ufffd0\ufffd"}:INTERPOLATION: with Version: ${"\ufffd1\ufffd"}:INTERPOLATION_1:`,n=$localize`:npm package list|The npm version@@version_x␟8e27f44bb34f2856524403136fdd70bd4e68ae1a␟6186731904468754174:Version: ${"\ufffd0\ufffd"}:INTERPOLATION:`,[[3,"disabled"],e,["dense",""],["mat-list-item","","target","_blank",3,"href","title",4,"ngFor","ngForOf"],["mat-list-item","","target","_blank",3,"href",6,"title"],["title",t],["matListIcon",""],["matLine",""],n]},template:function(e,t){1&e&&(o.TgZ(0,"mat-expansion-panel",0),o.TgZ(1,"mat-expansion-panel-header"),o.TgZ(2,"mat-panel-title"),o._uU(3),o.qZA(),o.TgZ(4,"mat-panel-description"),o.SDv(5,1),o._uU(6," "),o.qZA(),o.qZA(),o.TgZ(7,"mat-nav-list",2),o.YNc(8,_e,8,6,"a",3),o.qZA(),o.qZA()),2&e&&(o.Q6J("disabled",t.isDisabled()),o.xp6(3),o.Oqu(t.header),o.xp6(2),o.pQV(t.getPackageCount())(t.getPackageCount()),o.QtT(5),o.xp6(3),o.Q6J("ngForOf",t.packages))},directives:[le,ge,fe,me,xe.Hk,s.sg,xe.Tg,r.Hw,xe.Nh,M.X2],styles:["[_nghost-%COMP%]{display:block}span.package-version[_ngcontent-%COMP%]{font-family:monospace;-webkit-padding-start:20px;padding-inline-start:20px}span.package-title[_ngcontent-%COMP%]{font-weight:700}"]}),e})(),ve=(()=>{class e{constructor(e,t){this.packageService=e,this.changeDetectorRef=t,this.dependencies=[],this.devDependencies=[],this.optionalDependencies=[]}set packageUrl(e){this.packageService.package=e}convertMapToArray(e){return e?Object.keys(e).map(t=>[t,e[t]]):[]}ngAfterViewInit(){this.loadSubscription=this.packageService.observePackage().pipe((0,v.K)(e=>y.E)).subscribe(e=>{this.dependencies=this.convertMapToArray(e.dependencies),this.devDependencies=this.convertMapToArray(e.devDependencies),this.optionalDependencies=this.convertMapToArray(e.optionalDependencies),this.changeDetectorRef.detectChanges()})}derangeVersion(e){return e.match(/[0-9].*/)[0]}ngOnDestroy(){this.loadSubscription&&this.loadSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(O),o.Y36(o.sBO))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-npm-package-info"]],inputs:{packageUrl:"packageUrl"},features:[o._Bn([O])],decls:7,vars:3,consts:function(){let e,t,n,a,i;return e=$localize`:npm package file|title@@npmPackageInfoTitle␟a0cb312abd62d123cb4cf1452203fdd51ac99f1c␟846961538715002266:Npm Package Info`,t=$localize`:npm package file|subtitle@@npmPackageInfoSubtitle␟ce4beeaf9c2a03ec66593d990b9cb5f418a530e4␟609233393926798648:Information about the package.json file located at the repository root directory.`,n=$localize`:npm package file|package list dependencies header@@npmPackageListDependencies␟7e352128519f70bc6757bc2f7459ac4ac66f0c27␟5548713791919881935:Dependencies`,a=$localize`:npm package file|package list dev dependencies header@@npmPackageListDevDependencies␟86ade9f6965f1cf583ccfcb596cdee95046e0bb4␟471685310476725833:Development Dependencies`,i=$localize`:npm package file|package list optional dependencies header@@npmPackageListOptionalDependencies␟3b4a280cb893a0556eeec0ac2324b70cd689c18a␟7666874249783812852:Optional Dependencies`,[[1,"mat-h2"],e,[1,"mat-caption"],t,["header",n,3,"packages"],["header",a,3,"packages"],["header",i,3,"packages"]]},template:function(e,t){1&e&&(o.TgZ(0,"h2",0),o.SDv(1,1),o.qZA(),o.TgZ(2,"p",2),o.SDv(3,3),o.qZA(),o._UZ(4,"app-npm-package-list",4),o._UZ(5,"app-npm-package-list",5),o._UZ(6,"app-npm-package-list",6)),2&e&&(o.xp6(4),o.Q6J("packages",t.dependencies),o.xp6(1),o.Q6J("packages",t.devDependencies),o.xp6(1),o.Q6J("packages",t.optionalDependencies))},directives:[ye],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:stretch;overflow:auto}[_nghost-%COMP%]   app-npm-package-list[_ngcontent-%COMP%]{margin-top:10px}"]}),e})();function ke(e,t){if(1&e&&(o.TgZ(0,"h3",5),o._uU(1),o.qZA()),2&e){const e=o.oxw();o.xp6(1),o.Oqu(null==e.repository?null:e.repository.description)}}function Te(e,t){if(1&e&&(o.ynx(0),o._UZ(1,"mat-divider"),o._UZ(2,"app-npm-package-info",6),o.BQk()),2&e){const e=o.oxw();o.xp6(2),o.Q6J("packageUrl",e.npmPackageUrl)}}let Ae=(()=>{class e{constructor(e,t){this.activatedRoute=e,this.cdRef=t,this.repository=void 0}ngAfterViewInit(){this.updateSubscription=this.activatedRoute.data.pipe((0,i.U)(e=>e.repo)).subscribe(e=>{this.setRepository(e)})}setRepository(e){this.repository=e,this.cdRef.detectChanges()}ngOnDestroy(){this.updateSubscription&&this.updateSubscription.unsubscribe()}isJavascript(){if(this.repository&&this.repository.language){const e=this.repository.language.toLowerCase();return"typescript"===e||"javascript"===e}return!1}get npmPackageUrl(){return`https://raw.githubusercontent.com/${this.repository.full_name}/master/package.json`}hasDescription(){return!!this.repository&&"string"==typeof this.repository.description}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(a.gz),o.Y36(o.sBO))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-repo-detail"]],decls:10,vars:6,consts:[[1,"mat-display-1"],["class","mat-display-4",4,"ngIf"],[3,"repository"],[3,"href"],[4,"ngIf"],[1,"mat-display-4"],["role","complementary",3,"packageUrl"]],template:function(e,t){1&e&&(o.TgZ(0,"h1",0),o._uU(1),o.qZA(),o.YNc(2,ke,2,1,"h3",1),o._UZ(3,"app-repo-stats-box",2),o._UZ(4,"app-object-tree"),o.TgZ(5,"a",3),o._uU(6,"On Github"),o.qZA(),o.TgZ(7,"h4"),o._uU(8),o.qZA(),o.YNc(9,Te,3,1,"ng-container",4)),2&e&&(o.xp6(1),o.Oqu(null==t.repository?null:t.repository.full_name),o.xp6(1),o.Q6J("ngIf",t.hasDescription()),o.xp6(1),o.Q6J("repository",t.repository),o.xp6(2),o.s9C("href",null==t.repository?null:t.repository.html_url,o.LSH),o.xp6(3),o.Oqu(null==t.repository?null:t.repository.language),o.xp6(1),o.Q6J("ngIf",t.isJavascript()))},directives:[s.O5,d,x,_.d,ve],styles:[""],changeDetection:0}),e})();var we=n(9019),Ce=n(6401);let Pe=(()=>{class e{constructor(e,t,n){this.platformId=e,this.api=t,this.router=n}resolve(e,t){return this.api.getRepo(we.N.github.username,e.params.reponame).pipe((0,v.K)(e=>404===e.status&&(0,s.NF)(this.platformId)?(this.router.navigate(["repos"]),y.E):403===e.status?(console.log("Rate limit"),y.E):y.E))}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(o.Lbi),o.LFG(Ce.q),o.LFG(a.F0))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})();const Oe=[{component:Ae,path:":reponame",resolve:{repo:Pe}}];let Re=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[a.Bz.forChild(Oe)],a.Bz]}),e})();var Se=n(4929),Ie=n(2916);let De=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[s.ez,h.dp,r.Ps,u.ot,be,xe.ie],s.ez,h.dp,r.Ps,u.ot,be,xe.ie]}),e})(),Ne=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[Pe],imports:[[s.ez,Re,Se.N6,_.t,xe.ie,Ie._,De,r.Ps]]}),e})()}}]);