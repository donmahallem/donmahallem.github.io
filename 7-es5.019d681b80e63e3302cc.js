!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{bM1r:function(t,r,a){"use strict";a.r(r),a.d(r,"ReposModule",function(){return S});var i,o=a("ofXK"),s=a("f0Cb"),c=a("zkoq"),u=a("MutI"),p=a("0DDv"),f=a("EY2u"),h=a("JIr8"),b=a("o0su"),v=a("cxbk"),g=a("fXoL"),l=a("tyNb"),d=((i=function(){function t(n,r){e(this,t),this.api=n,this.router=r}return n(t,[{key:"resolve",value:function(e,t){var n=this;return this.api.getRepo(v.a.github.username,e.params.reponame).pipe(Object(h.a)(function(e){return 404===e.status&&n.router.navigate(["stops"]),f.a}))}}]),t}()).\u0275fac=function(e){return new(e||i)(g.Zb(b.a),g.Zb(l.b))},i.\u0275prov=g.Hb({token:i,factory:i.\u0275fac}),i),m=a("lJxs"),k=a("NFeN"),y=a("FKr1");function R(e,t){if(1&e&&(g.Rb(0,"h3",7),g.qc(1),g.Qb()),2&e){var n=g.ec().$implicit;g.Bb(1),g.rc(n.header)}}function w(e,t){1&e&&g.Mb(0,"mat-divider")}var I=function(e){return["/repo",e]};function P(e,t){if(1&e&&(g.Pb(0),g.pc(1,R,2,1,"h3",1),g.Rb(2,"a",2),g.Rb(3,"mat-icon",3),g.qc(4,"folder"),g.Qb(),g.Rb(5,"h4",4),g.qc(6),g.Qb(),g.Rb(7,"p",5),g.qc(8),g.Qb(),g.Qb(),g.pc(9,w,1,0,"mat-divider",6),g.Ob()),2&e){var n=t.$implicit;g.Bb(1),g.hc("ngIf",n.hasHeader),g.Bb(1),g.hc("routerLink",g.kc(5,I,n.repo.name)),g.Bb(4),g.rc(n.repo.name),g.Bb(2),g.sc(" ",n.repo.updated_at," "),g.Bb(1),g.hc("ngIf",n.hasDivider)}}var L,C=((L=function(){function t(n){e(this,t),this.cdRef=n,this.items=[]}return n(t,[{key:"repositories",set:function(e){this.items=e.sort(function(e,t){return e.name.localeCompare(t.name)}).map(function(e,t,n){var r=t>0?n[t-1].name.charAt(0).toUpperCase():"",a=n[t].name.charAt(0).toUpperCase(),i=t<n.length-1?n[t+1].name.charAt(0).toUpperCase():"";return{hasDivider:t!==n.length-1&&a!==i,hasHeader:0===t||a!==r,header:a,repo:e}}),this.cdRef.detectChanges()}}]),t}()).\u0275fac=function(e){return new(e||L)(g.Lb(g.h))},L.\u0275cmp=g.Fb({type:L,selectors:[["app-repo-list"]],inputs:{repositories:"repositories"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],["matSubheader","",4,"ngIf"],["mat-list-item","",3,"routerLink"],["matListIcon",""],["matLine",""],["matLine","",1,"demo-2"],[4,"ngIf"],["matSubheader",""]],template:function(e,t){1&e&&(g.Rb(0,"mat-nav-list"),g.pc(1,P,10,7,"ng-container",0),g.Qb()),2&e&&(g.Bb(1),g.hc("ngForOf",t.items))},directives:[u.e,o.h,o.i,u.b,l.d,k.a,u.a,y.b,u.d,s.a],styles:[""],changeDetection:0}),L),B=a("bTqV"),O=function(e){return["/repos",e]};function q(e,t){if(1&e&&(g.Rb(0,"a",2),g.qc(1,"Previos"),g.Qb()),2&e){var n=g.ec();g.hc("routerLink",g.kc(1,O,n.page-1))}}function N(e,t){if(1&e&&(g.Rb(0,"a",2),g.qc(1,"Next"),g.Qb()),2&e){var n=g.ec();g.hc("routerLink",g.kc(1,O,n.page+1))}}var Q,j,D,F,E=((Q=function(){function t(n,r){e(this,t),this.activatedRoute=n,this.cdRef=r,this.repos=[],this.page=1}return n(t,[{key:"ngAfterViewInit",value:function(){var e=this;this.updateSubscription=this.activatedRoute.data.pipe(Object(m.a)(function(e){return e.repos})).subscribe(function(t){e.update(t)})}},{key:"getCurrentPage",value:function(){var e=this.activatedRoute.snapshot.params;return e.page?parseInt(e.page,10):1}},{key:"hasNextPage",value:function(){return 25===this.repos.length}},{key:"hasPreviousPage",value:function(){return this.getCurrentPage()>1}},{key:"update",value:function(e){this.repos=e,this.page=this.getCurrentPage(),this.cdRef.detectChanges()}},{key:"ngOnDestroy",value:function(){this.updateSubscription.unsubscribe()}}]),t}()).\u0275fac=function(e){return new(e||Q)(g.Lb(l.a),g.Lb(g.h))},Q.\u0275cmp=g.Fb({type:Q,selectors:[["app-repos-overview"]],decls:3,vars:3,consts:[[3,"repositories"],["mat-stroked-button","","color","accent",3,"routerLink",4,"ngIf"],["mat-stroked-button","","color","accent",3,"routerLink"]],template:function(e,t){1&e&&(g.Mb(0,"app-repo-list",0),g.pc(1,q,2,3,"a",1),g.pc(2,N,2,3,"a",1)),2&e&&(g.hc("repositories",t.repos),g.Bb(1),g.hc("ngIf",t.hasPreviousPage()),g.Bb(1),g.hc("ngIf",t.hasNextPage()))},directives:[C,o.i,B.a,l.d],styles:[""],changeDetection:0}),Q),J=a("tk/3"),M=a("vkgz"),x=((j=function(){function t(n,r){e(this,t),this.api=n,this.router=r,this.INT_REGEX=/^([1-9]+|0*[1-9][0-9]+)$/}return n(t,[{key:"validatePage",value:function(e){return this.INT_REGEX.test(e)}},{key:"resolve",value:function(e,t){var n=this,r=1;if(e.params.page){if(!this.validatePage(e.params.page))return this.router.navigate(["repos","list"]),f.a;r=e.params.page}return this.api.getUserRepos(v.a.github.username,25,r).pipe(Object(M.a)(function(e){if(0===e.length&&1!==r)throw new J.c({status:404})}),Object(h.a)(function(e){return 404===e.status&&n.router.navigate(["404"]),f.a}))}}]),t}()).\u0275fac=function(e){return new(e||j)(g.Zb(b.a),g.Zb(l.b))},j.\u0275prov=g.Hb({token:j,factory:j.\u0275fac}),j),A=[{component:E,path:"",pathMatch:"full",resolve:{repos:x}},{component:E,path:":page",resolve:{repos:x}}],H=((F=function t(){e(this,t)}).\u0275fac=function(e){return new(e||F)},F.\u0275mod=g.Jb({type:F}),F.\u0275inj=g.Ib({imports:[[l.e.forChild(A)],l.e]}),F),S=((D=function t(){e(this,t)}).\u0275fac=function(e){return new(e||D)},D.\u0275mod=g.Jb({type:D}),D.\u0275inj=g.Ib({providers:[x,d],imports:[[o.b,H,c.a,s.b,u.c,p.a]]}),D)}}])}();