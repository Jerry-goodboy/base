!function(){var e=null;!function(){function t(e){function t(){try{o.doScroll("left")}catch(e){return void a(t,50)}n("poll")}function n(t){"readystatechange"==t.type&&"complete"!=s.readyState||(("load"==t.type?r:s)[d](p+t.type,n,!1),l||!(l=!0))||e.call(r,t.type||t)}var i=s.addEventListener,l=!1,c=!0,u=i?"addEventListener":"attachEvent",d=i?"removeEventListener":"detachEvent",p=i?"":"on";if("complete"==s.readyState)e.call(r,"lazy");else{if(s.createEventObject&&o.doScroll){try{c=!r.frameElement}catch(e){}c&&t()}s[u](p+"DOMContentLoaded",n,!1),s[u](p+"readystatechange",n,!1),r[u](p+"load",n,!1)}}function n(){p&&t(function(){var e=g.length;v(e?function(){for(var t=0;t<e;++t)!function(e){a(function(){r.exports[g[e]].apply(r,arguments)},0)}(t)}:void 0)})}for(var r=window,a=r.setTimeout,s=document,o=s.documentElement,i=s.head||s.getElementsByTagName("head")[0]||o,l="",c=(y=s.scripts).length;--c>=0;){var u=y[c],d=u.src.match(/^[^#?]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(d){l=d[1]||"",u.parentNode.removeChild(u);break}}var p=!0,f=[],h=[],g=[];for(l.replace(/[&?]([^&=]+)=([^&]+)/g,function(e,t,n){n=decodeURIComponent(n),"autorun"==(t=decodeURIComponent(t))?p=!/^[0fn]/i.test(n):"lang"==t?f.push(n):"skin"==t?h.push(n):"callback"==t&&g.push(n)}),c=0,l=f.length;c<l;++c)!function(){var t=s.createElement("script");t.onload=t.onerror=t.onreadystatechange=function(){!t||t.readyState&&!/loaded|complete/.test(t.readyState)||(t.onerror=t.onload=t.onreadystatechange=e,--m||a(n,0),t.parentNode&&t.parentNode.removeChild(t),t=e)},t.type="text/javascript",t.src="https://google-code-prettify.googlecode.com/svn/loader/lang-"+encodeURIComponent(f[c])+".js",i.insertBefore(t,i.firstChild)}(f[c]);for(var m=f.length,y=[],c=0,l=h.length;c<l;++c)y.push("https://google-code-prettify.googlecode.com/svn/loader/skins/"+encodeURIComponent(h[c])+".css");y.push(""),function(e){function t(r){if(r!==n){var a=s.createElement("link");a.rel="stylesheet",a.type="text/css",r+1<n&&(a.error=a.onerror=function(){t(r+1)}),a.href=e[r],i.appendChild(a)}}var n=e.length;t(0)}(y);var v=function(){window.PR_SHOULD_USE_CONTINUATION=!0;var t;return function(){function n(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=u[n])?t:"0"<=n&&n<="7"?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){return e<32?(e<16?"\\x0":"\\x")+e.toString(16):"\\"===(e=String.fromCharCode(e))||"-"===e||"]"===e||"^"===e?"\\"+e:e}function r(e){var r=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a=["["];(s="^"===r[0])&&a.push("^");for(var s=s?1:0,o=r.length;s<o;++s){l=r[s];if(/\\[bdsw]/i.test(l))a.push(l);else{var i,l=t(l);s+2<o&&"-"===r[s+1]?(i=t(r[s+2]),s+=2):i=l,e.push([l,i]),i<65||l>122||(i<65||l>90||e.push([32|Math.max(65,l),32|Math.min(i,90)]),i<97||l>122||e.push([-33&Math.max(97,l),-33&Math.min(i,122)]))}}for(e.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]}),r=[],o=[],s=0;s<e.length;++s)(l=e[s])[0]<=o[1]+1?o[1]=Math.max(o[1],l[1]):r.push(o=l);for(s=0;s<r.length;++s)l=r[s],a.push(n(l[0])),l[1]>l[0]&&(l[1]+1>l[0]&&a.push("-"),a.push(n(l[1])));return a.push("]"),a.join("")}for(var a=0,s=!1,o=!1,i=0,l=e.length;i<l;++i){var c=e[i];if(c.ignoreCase)o=!0;else if(/[a-z]/i.test(c.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0,o=!1;break}}for(var u={b:8,t:9,n:10,v:11,f:12,r:13},d=[],i=0,l=e.length;i<l;++i){if((c=e[i]).global||c.multiline)throw Error(""+c);d.push("(?:"+function(e){for(var t=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),o=t.length,i=[],l=0,c=0;l<o;++l){var u=t[l];"("===u?++c:"\\"===u.charAt(0)&&(u=+u.substring(1))&&(u<=c?i[u]=-1:t[l]=n(u))}for(l=1;l<i.length;++l)-1===i[l]&&(i[l]=++a);for(c=l=0;l<o;++l)"("===(u=t[l])?(++c,i[c]||(t[l]="(?:")):"\\"===u.charAt(0)&&(u=+u.substring(1))&&u<=c&&(t[l]="\\"+i[u]);for(l=0;l<o;++l)"^"===t[l]&&"^"!==t[l+1]&&(t[l]="");if(e.ignoreCase&&s)for(l=0;l<o;++l)u=t[l],e=u.charAt(0),u.length>=2&&"["===e?t[l]=r(u):"\\"!==e&&(t[l]=u.replace(/[A-Za-z]/g,function(e){return e=e.charCodeAt(0),"["+String.fromCharCode(-33&e,32|e)+"]"}));return t.join("")}(c)+")")}return RegExp(d.join("|"),o?"gi":"g")}function r(e,t){function n(e){var l=e.nodeType;if(1==l){if(!r.test(e.className)){for(l=e.firstChild;l;l=l.nextSibling)n(l);"br"!==(l=e.nodeName.toLowerCase())&&"li"!==l||(a[i]="\n",o[i<<1]=s++,o[i++<<1|1]=e)}}else 3!=l&&4!=l||(l=e.nodeValue).length&&(l=t?l.replace(/\r\n?/g,"\n"):l.replace(/[\t\n\r ]+/g," "),a[i]=l,o[i<<1]=s,s+=l.length,o[i++<<1|1]=e)}var r=/(?:^|\s)nocode(?:\s|$)/,a=[],s=0,o=[],i=0;return n(e),{a:a.join("").replace(/\n$/,""),d:o}}function s(e,t,n,r){t&&(e={a:t,e:e},n(e),r.push.apply(r,e.g))}function o(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling)var r=n.nodeType,t=1===r?t?e:n:3===r&&C.test(n.nodeValue)?e:t;return t===e?void 0:t}function i(t,r){function a(e){for(var t=e.e,n=[t,"pln"],c=0,u=e.a.match(o)||[],p={},f=0,h=u.length;f<h;++f){var g,m=u[f],y=p[m],v=void 0;if("string"==typeof y)g=!1;else{var b=i[m.charAt(0)];if(b)v=m.match(b[1]),y=b[0];else{for(g=0;g<l;++g)if(b=r[g],v=m.match(b[1])){y=b[0];break}v||(y="pln")}!(g=y.length>=5&&"lang-"===y.substring(0,5))||v&&"string"==typeof v[1]||(g=!1,y="src"),g||(p[m]=y)}if(b=c,c+=m.length,g){g=v[1];var x=m.indexOf(g),w=x+g.length;v[2]&&(w=m.length-v[2].length,x=w-g.length),y=y.substring(5),s(t+b,m.substring(0,x),a,n),s(t+b+x,g,d(y,g),n),s(t+b+w,m.substring(w),a,n)}else n.push(t+b,y)}e.g=n}var o,i={};!function(){for(var a=t.concat(r),s=[],l={},c=0,u=a.length;c<u;++c){var d=a[c],p=d[3];if(p)for(var f=p.length;--f>=0;)i[p.charAt(f)]=d;p=""+(d=d[1]),l.hasOwnProperty(p)||(s.push(d),l[p]=e)}s.push(/[\S\s]/),o=n(s)}();var l=r.length;return a}function l(t){var n=[],r=[];t.tripleQuotedStrings?n.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,e,"'\""]):t.multiLineStrings?n.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,e,"'\"`"]):n.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,e,"\"'"]),t.verbatimStrings&&r.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,e]);var a=t.hashComments;if(a&&(t.cStyleComments?(a>1?n.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,e,"#"]):n.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,e,"#"]),r.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,e])):n.push(["com",/^#[^\n\r]*/,e,"#"])),t.cStyleComments&&(r.push(["com",/^\/\/[^\n\r]*/,e]),r.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,e])),a=t.regexLiterals){var s=(a=a>1?"":"\n\r")?".":"[\\S\\s]";r.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(/(?=[^/*"+a+"])(?:[^/\\x5B\\x5C"+a+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+a+"]|\\x5C"+s+")*(?:\\x5D|$))+/)")])}return(a=t.types)&&r.push(["typ",a]),(a=(""+t.keywords).replace(/^ | $/g,"")).length&&r.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),e]),n.push(["pln",/^\s+/,e," \r\n\t "]),a="^.[^\\s\\w.$@'\"`/\\\\]*",t.regexLiterals&&(a+="(?!s*/)"),r.push(["lit",/^@[$_a-z][\w$@]*/i,e],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,e],["pln",/^[$_a-z][\w$@]*/i,e],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,e,"0123456789"],["pln",/^\\[\S\s]?/,e],["pun",RegExp(a),e]),i(n,r)}function c(e,t,n){function r(e){var t=e.nodeType;if(1!=t||s.test(e.className)){if((3==t||4==t)&&n){var l=e.nodeValue,c=l.match(o);c&&(t=l.substring(0,c.index),e.nodeValue=t,(l=l.substring(c.index+c[0].length))&&e.parentNode.insertBefore(i.createTextNode(l),e.nextSibling),a(e),t||e.parentNode.removeChild(e))}}else if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)r(e)}function a(e){function t(e,n){var r=n?e.cloneNode(!1):e;if(a=e.parentNode){var a=t(a,1),s=e.nextSibling;a.appendChild(r);for(var o=s;o;o=s)s=o.nextSibling,a.appendChild(o)}return r}for(;!e.nextSibling;)if(!(e=e.parentNode))return;for(var n,e=t(e.nextSibling,0);(n=e.parentNode)&&1===n.nodeType;)e=n;c.push(e)}for(var s=/(?:^|\s)nocode(?:\s|$)/,o=/\r\n?|\n/,i=e.ownerDocument,l=i.createElement("li");e.firstChild;)l.appendChild(e.firstChild);for(var c=[l],u=0;u<c.length;++u)r(c[u]);t===(0|t)&&c[0].setAttribute("value",t);var d=i.createElement("ol");d.className="linenums";for(var t=Math.max(0,t-1|0)||0,u=0,p=c.length;u<p;++u)l=c[u],l.className="L"+(u+t)%10,l.firstChild||l.appendChild(i.createTextNode(" ")),d.appendChild(l);e.appendChild(d)}function u(e,t){for(var n=t.length;--n>=0;){var r=t[n];N.hasOwnProperty(r)?f.console&&console.warn("cannot override language handler %s",r):N[r]=e}}function d(e,t){return e&&N.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),N[e]}function p(e){n=e.h;try{c=(o=r(e.c,e.i)).a;e.a=c,e.d=o.d,e.e=0,d(n,c)(e);var t=(t=/\bMSIE\s(\d+)/.exec(navigator.userAgent))&&+t[1]<=8,n=/\n/g,a=e.a,s=a.length,o=0,i=e.d,l=i.length,c=0,u=e.g,p=u.length,h=0;u[p]=s;var g,m;for(m=g=0;m<p;)u[m]!==u[m+2]?(u[g++]=u[m++],u[g++]=u[m++]):m+=2;for(p=g,m=g=0;m<p;){for(var y=u[m],v=u[m+1],b=m+2;b+2<=p&&u[b+1]===v;)b+=2;u[g++]=y,u[g++]=v,m=b}u.length=g;var x,w=e.c;w&&(x=w.style.display,w.style.display="none");try{for(;c<l;){var S,C=i[c+2]||s,N=u[h+2]||s,b=Math.min(C,N),E=i[c+1];if(1!==E.nodeType&&(S=a.substring(o,b))){t&&(S=S.replace(n,"\r")),E.nodeValue=S;var k=E.ownerDocument,_=k.createElement("span");_.className=u[h+1];var T=E.parentNode;T.replaceChild(_,E),_.appendChild(E),o<C&&(i[c+1]=E=k.createTextNode(a.substring(b,C)),T.insertBefore(E,_.nextSibling))}(o=b)>=C&&(c+=2),o>=N&&(h+=2)}}finally{w&&(w.style.display=x)}}catch(e){f.console&&console.log(e&&e.stack||e)}}var f=window,h=["break,continue,do,else,for,if,return,while"],g=[[h,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],m=[g,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],y=[g,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],v=[y,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],b=[h,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],x=[h,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],w=[h,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],S=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,C=/\S/,N={};u(l({keywords:[m,v,g=[g,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",b,x,h=[h,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"]],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),["default-code"]),u(i([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),u(i([["pln",/^\s+/,e," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,e,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]),u(i([],[["atv",/^[\S\s]+/]]),["uq.val"]),u(l({keywords:m,hashComments:!0,cStyleComments:!0,types:S}),["c","cc","cpp","cxx","cyc","m"]),u(l({keywords:"null,true,false"}),["json"]),u(l({keywords:v,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:S}),["cs"]),u(l({keywords:y,cStyleComments:!0}),["java"]),u(l({keywords:h,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),u(l({keywords:b,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),u(l({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),u(l({keywords:x,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),u(l({keywords:g,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),u(l({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),u(l({keywords:w,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),u(i([],[["str",/^[\S\s]+/]]),["regex"]);var E=f.PR={createSimpleLexer:i,registerLangHandler:u,sourceDecorator:l,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(e,t,n){var r=document.createElement("div");return r.innerHTML="<pre>"+e+"</pre>",r=r.firstChild,n&&c(r,n,!0),p({h:t,j:n,c:r,i:1}),r.innerHTML},prettyPrint:t=t=function(t,n){function r(){for(var n=f.PR_SHOULD_USE_CONTINUATION?g.now()+250:1/0;y<l.length&&g.now()<n;y++){for(var i=l[y],u=N,d=i;(d=d.previousSibling)&&((k=(7===(E=d.nodeType)||8===E)&&d.nodeValue)?/^\??prettify\b/.test(k):3===E&&!/\S/.test(d.nodeValue));)if(k){u={},k.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(e,t,n){u[t]=n});break}if(d=i.className,(u!==N||b.test(d))&&!x.test(d)){for(E=!1,k=i.parentNode;k;k=k.parentNode)if(C.test(k.tagName)&&k.className&&b.test(k.className)){E=!0;break}if(!E){if(i.className+=" prettyprinted",!(E=u.lang)){var h,E=d.match(v);!E&&(h=o(i))&&S.test(h.tagName)&&(E=h.className.match(v)),E&&(E=E[1])}if(w.test(i.tagName))k=1;else var k=i.currentStyle,_=s.defaultView,k=(k=k?k.whiteSpace:_&&_.getComputedStyle?_.getComputedStyle(i,e).getPropertyValue("white-space"):0)&&"pre"===k.substring(0,3);(_="true"===(_=u.linenums)||+_)||(_=!!(_=d.match(/\blinenums\b(?::(\d+))?/))&&(!_[1]||!_[1].length||+_[1])),_&&c(i,_,k),p(m={h:E,c:i,j:_,i:k})}}}y<l.length?a(r,250):"function"==typeof t&&t()}for(var s=(i=n||document.body).ownerDocument||document,i=[i.getElementsByTagName("pre"),i.getElementsByTagName("code"),i.getElementsByTagName("xmp")],l=[],u=0;u<i.length;++u)for(var d=0,h=i[u].length;d<h;++d)l.push(i[u][d]);var i=e,g=Date;g.now||(g={now:function(){return+new Date}});var m,y=0,v=/\blang(?:uage)?-([\w.]+)(?!\S)/,b=/\bprettyprint\b/,x=/\bprettyprinted\b/,w=/pre|xmp/i,S=/^code$/i,C=/^(?:pre|code|xmp)$/i,N={};r()}};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return E})}(),t}();m||a(n,0)}()}();