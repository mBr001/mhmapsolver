(function(){var t,e,n,r,o,a,i;t="table[data-sortable]",r=/^-?[£$¤]?[\d,.]+%?$/,i=/^\s+|\s+$/g,n=["click"],a="ontouchstart"in document.documentElement,a&&n.push("touchstart"),e=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},o={init:function(e){var n,r,a,i,u;for(null==e&&(e={}),null==e.selector&&(e.selector=t),r=document.querySelectorAll(e.selector),u=[],a=0,i=r.length;a<i;a++)n=r[a],u.push(o.initTable(n));return u},initTable:function(t){var e,n,r,a,i,u;if(1===(null!=(u=t.tHead)?u.rows.length:void 0)&&"true"!==t.getAttribute("data-sortable-initialized")){for(t.setAttribute("data-sortable-initialized","true"),r=t.querySelectorAll("th"),e=a=0,i=r.length;a<i;e=++a)n=r[e],"false"!==n.getAttribute("data-sortable")&&o.setupClickableTH(t,n,e);return t}},setupClickableTH:function(t,r,a){var i,u,l,s,c,d;for(l=o.getColumnType(t,a),u=function(e){var n,i,u,s,c,d,f,p,h,g,b,m,v,y,A,T,C,S,w,E,D,N,x,j;if(e.handled===!0)return!1;for(e.handled=!0,f="true"===this.getAttribute("data-sorted"),p=this.getAttribute("data-sorted-direction"),u=f?"ascending"===p?"descending":"ascending":l.defaultSortDirection,g=this.parentNode.querySelectorAll("th"),v=0,C=g.length;v<C;v++)r=g[v],r.setAttribute("data-sorted","false"),r.removeAttribute("data-sorted-direction");if(this.setAttribute("data-sorted","true"),this.setAttribute("data-sorted-direction",u),h=t.tBodies[0],d=[],f){for(j=h.rows,T=0,E=j.length;T<E;T++)i=j[T],d.push(i);for(d.reverse(),N=0,D=d.length;N<D;N++)c=d[N],h.appendChild(c)}else{for(m=null!=l.compare?l.compare:function(t,e){return e-t},n=function(t,e){return t[0]===e[0]?t[2]-e[2]:l.reverse?m(e[0],t[0]):m(t[0],e[0])},x=h.rows,s=y=0,S=x.length;y<S;s=++y)c=x[s],b=o.getNodeValue(c.cells[a]),null!=l.comparator&&(b=l.comparator(b)),d.push([b,c,s]);for(d.sort(n),A=0,w=d.length;A<w;A++)c=d[A],h.appendChild(c[1])}return"function"==typeof window.CustomEvent&&"function"==typeof t.dispatchEvent?t.dispatchEvent(new CustomEvent("Sortable.sorted",{bubbles:!0})):void 0},d=[],s=0,c=n.length;s<c;s++)i=n[s],d.push(e(r,i,u));return d},getColumnType:function(t,e){var n,r,a,i,u,l,s,c,d,f,p;if(r=null!=(d=t.querySelectorAll("th")[e])?d.getAttribute("data-sortable-type"):void 0,null!=r)return o.typesObject[r];for(f=t.tBodies[0].rows,u=0,s=f.length;u<s;u++)for(n=f[u],a=o.getNodeValue(n.cells[e]),p=o.types,l=0,c=p.length;l<c;l++)if(i=p[l],i.match(a))return i;return o.typesObject.alpha},getNodeValue:function(t){var e;return t?(e=t.getAttribute("data-value"),null!==e?e:"undefined"!=typeof t.innerText?t.innerText.replace(i,""):t.textContent.replace(i,"")):""},setupTypes:function(t){var e,n,r,a;for(o.types=t,o.typesObject={},a=[],n=0,r=t.length;n<r;n++)e=t[n],a.push(o.typesObject[e.name]=e);return a}},o.setupTypes([{name:"numeric",defaultSortDirection:"descending",match:function(t){return t.match(r)},comparator:function(t){return parseFloat(t.replace(/[^0-9.-]/g,""),10)||0}},{name:"date",defaultSortDirection:"ascending",reverse:!0,match:function(t){return!isNaN(Date.parse(t))},comparator:function(t){return Date.parse(t)||0}},{name:"alpha",defaultSortDirection:"ascending",match:function(){return!0},compare:function(t,e){return t.localeCompare(e)}}]),setTimeout(o.init,0),"function"==typeof define&&define.amd?define(function(){return o}):"undefined"!=typeof exports?module.exports=o:window.Sortable=o}).call(this);