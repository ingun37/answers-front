!function(e){"use strict";var t={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:d,table:d,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/};function n(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||y.defaults,this.rules=t.normal,this.options.pedantic?this.rules=t.pedantic:this.options.gfm&&(this.rules=t.gfm)}t._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,t._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,t.def=h(t.def).replace("label",t._label).replace("title",t._title).getRegex(),t.bullet=/(?:[*+-]|\d{1,9}\.)/,t.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,t.item=h(t.item,"gm").replace(/bull/g,t.bullet).getRegex(),t.list=h(t.list).replace(/bull/g,t.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+t.def.source+")").getRegex(),t._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",t._comment=/<!--(?!-?>)[\s\S]*?-->/,t.html=h(t.html,"i").replace("comment",t._comment).replace("tag",t._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),t.paragraph=h(t._paragraph).replace("hr",t.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",t._tag).getRegex(),t.blockquote=h(t.blockquote).replace("paragraph",t.paragraph).getRegex(),t.normal=b({},t),t.gfm=b({},t.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),t.pedantic=b({},t.normal,{html:h("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",t._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:d,paragraph:h(t.normal._paragraph).replace("hr",t.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",t.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()}),n.rules=t,n.lex=function(e,t){return new n(t).lex(e)},n.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},n.prototype.token=function(e,n){var r,s,i,a,l,o,c,h,p,g,f,d,b,x,k,y;for(e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),1<i[0].length&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e)){var v=this.tokens[this.tokens.length-1];e=e.substring(i[0].length),v&&"paragraph"===v.type?v.text+="\n"+i[0].trimRight():(i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?i:_(i,"\n")}))}else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2]?i[2].trim():i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if((i=this.rules.nptable.exec(e))&&(o={type:"table",header:m(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===o.align.length){for(e=e.substring(i[0].length),f=0;f<o.align.length;f++)o.align[f]=/^ *-+: *$/.test(o.align[f])?"right":/^ *:-+: *$/.test(o.align[f])?"center":/^ *:-+ *$/.test(o.align[f])?"left":null;for(f=0;f<o.cells.length;f++)o.cells[f]=m(o.cells[f],o.header.length);this.tokens.push(o)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,n),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),c={type:"list_start",ordered:x=1<(a=i[2]).length,start:x?+a:"",loose:!1},this.tokens.push(c),r=!(h=[]),b=(i=i[0].match(this.rules.item)).length,f=0;f<b;f++)g=(o=i[f]).length,~(o=o.replace(/^ *([*+-]|\d+\.) */,"")).indexOf("\n ")&&(g-=o.length,o=o.replace(this.options.pedantic?/^ {1,4}/gm:new RegExp("^ {1,"+g+"}","gm"),"")),f!==b-1&&(l=t.bullet.exec(i[f+1])[0],(1<a.length?1===l.length:1<l.length||this.options.smartLists&&l!==a)&&(e=i.slice(f+1).join("\n")+e,f=b-1)),s=r||/\n\n(?!\s*$)/.test(o),f!==b-1&&(r="\n"===o.charAt(o.length-1),s||(s=r)),s&&(c.loose=!0),y=void 0,(k=/^\[[ xX]\] /.test(o))&&(y=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),h.push(p={type:"list_item_start",task:k,checked:y,loose:s}),this.tokens.push(p),this.token(o,!1),this.tokens.push({type:"list_item_end"});if(c.loose)for(b=h.length,f=0;f<b;f++)h[f].loose=!0;this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):u(i[0]):i[0]});else if(n&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),d=i[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[d]||(this.tokens.links[d]={href:i[2],title:i[3]});else if((i=this.rules.table.exec(e))&&(o={type:"table",header:m(i[1].replace(/^ *| *\| *$/g,"")),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3]?i[3].replace(/\n$/,"").split("\n"):[]}).header.length===o.align.length){for(e=e.substring(i[0].length),f=0;f<o.align.length;f++)o.align[f]=/^ *-+: *$/.test(o.align[f])?"right":/^ *:-+: *$/.test(o.align[f])?"center":/^ *:-+ *$/.test(o.align[f])?"left":null;for(f=0;f<o.cells.length;f++)o.cells[f]=m(o.cells[f].replace(/^ *\| *| *\| *$/g,""),o.header.length);this.tokens.push(o)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2].charAt(0)?1:2,text:i[1]});else if(n&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var r={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:d,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:d,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/};function s(e,t){if(this.options=t||y.defaults,this.links=e,this.rules=r.normal,this.renderer=this.options.renderer||new i,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=r.pedantic:this.options.gfm&&(this.rules=this.options.breaks?r.breaks:r.gfm)}function i(e){this.options=e||y.defaults}function a(){}function l(e){this.tokens=[],this.token=null,this.options=e||y.defaults,this.options.renderer=this.options.renderer||new i,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new o}function o(){this.seen={}}function u(e,t){if(t){if(u.escapeTest.test(e))return e.replace(u.escapeReplace,(function(e){return u.replacements[e]}))}else if(u.escapeTestNoEncode.test(e))return e.replace(u.escapeReplaceNoEncode,(function(e){return u.replacements[e]}));return e}function c(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}function h(e,t){return e=e.source||e,t=t||"",{replace:function(t,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function p(e,t,n){if(e){try{var r=decodeURIComponent(c(n)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!f.test(n)&&(n=function(e,t){return g[" "+e]||(g[" "+e]=/^[^:]+:\/*[^/]*$/.test(e)?e+"/":_(e,"/",!0)),e=g[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}r._punctuation="!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~",r.em=h(r.em).replace(/punctuation/g,r._punctuation).getRegex(),r._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,r._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,r._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,r.autolink=h(r.autolink).replace("scheme",r._scheme).replace("email",r._email).getRegex(),r._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,r.tag=h(r.tag).replace("comment",t._comment).replace("attribute",r._attribute).getRegex(),r._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,r._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,r._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,r.link=h(r.link).replace("label",r._label).replace("href",r._href).replace("title",r._title).getRegex(),r.reflink=h(r.reflink).replace("label",r._label).getRegex(),r.normal=b({},r),r.pedantic=b({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:h(/^!?\[(label)\]\((.*?)\)/).replace("label",r._label).getRegex(),reflink:h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",r._label).getRegex()}),r.gfm=b({},r.normal,{escape:h(r.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),r.gfm.url=h(r.gfm.url,"i").replace("email",r.gfm._extended_email).getRegex(),r.breaks=b({},r.gfm,{br:h(r.br).replace("{2,}","*").getRegex(),text:h(r.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),s.rules=r,s.output=function(e,t,n){return new s(t,n).output(e)},s.prototype.output=function(e){for(var t,n,r,i,a,l,o="";e;)if(a=this.rules.escape.exec(e))e=e.substring(a[0].length),o+=u(a[1]);else if(a=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(a[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(a[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(this.inRawBlock=!1),e=e.substring(a[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):u(a[0]):a[0];else if(a=this.rules.link.exec(e)){var c=x(a[2],"()");if(-1<c){var h=4+a[1].length+c;a[2]=a[2].substring(0,c),a[0]=a[0].substring(0,h).trim(),a[3]=""}e=e.substring(a[0].length),this.inLink=!0,r=a[2],i=this.options.pedantic?(t=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))?(r=t[1],t[3]):"":a[3]?a[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(a,{href:s.escapes(r),title:s.escapes(i)}),this.inLink=!1}else if((a=this.rules.reflink.exec(e))||(a=this.rules.nolink.exec(e))){if(e=e.substring(a[0].length),t=(a[2]||a[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=a[0].charAt(0),e=a[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(a,t),this.inLink=!1}else if(a=this.rules.strong.exec(e))e=e.substring(a[0].length),o+=this.renderer.strong(this.output(a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.em.exec(e))e=e.substring(a[0].length),o+=this.renderer.em(this.output(a[6]||a[5]||a[4]||a[3]||a[2]||a[1]));else if(a=this.rules.code.exec(e))e=e.substring(a[0].length),o+=this.renderer.codespan(u(a[2].trim(),!0));else if(a=this.rules.br.exec(e))e=e.substring(a[0].length),o+=this.renderer.br();else if(a=this.rules.del.exec(e))e=e.substring(a[0].length),o+=this.renderer.del(this.output(a[1]));else if(a=this.rules.autolink.exec(e))e=e.substring(a[0].length),r="@"===a[2]?"mailto:"+(n=u(this.mangle(a[1]))):n=u(a[1]),o+=this.renderer.link(r,null,n);else if(this.inLink||!(a=this.rules.url.exec(e))){if(a=this.rules.text.exec(e))e=e.substring(a[0].length),o+=this.renderer.text(this.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):u(a[0]):a[0]:u(this.smartypants(a[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{if("@"===a[2])r="mailto:"+(n=u(a[0]));else{for(;l=a[0],a[0]=this.rules._backpedal.exec(a[0])[0],l!==a[0];);n=u(a[0]),r="www."===a[1]?"http://"+n:n}e=e.substring(a[0].length),o+=this.renderer.link(r,null,n)}return o},s.escapes=function(e){return e?e.replace(s.rules._escapes,"$1"):e},s.prototype.outputLink=function(e,t){var n=t.href,r=t.title?u(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,u(e[1]))},s.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},s.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;s<r;s++)t=e.charCodeAt(s),.5<Math.random()&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},i.prototype.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var s=this.options.highlight(e,r);null!=s&&s!==e&&(n=!0,e=s)}return r?'<pre><code class="'+this.options.langPrefix+u(r,!0)+'">'+(n?e:u(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:u(e,!0))+"</code></pre>"},i.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},i.prototype.html=function(e){return e},i.prototype.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},i.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},i.prototype.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},i.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},i.prototype.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},i.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},i.prototype.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},i.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},i.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},i.prototype.strong=function(e){return"<strong>"+e+"</strong>"},i.prototype.em=function(e){return"<em>"+e+"</em>"},i.prototype.codespan=function(e){return"<code>"+e+"</code>"},i.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},i.prototype.del=function(e){return"<del>"+e+"</del>"},i.prototype.link=function(e,t,n){if(null===(e=p(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<a href="'+u(e)+'"';return t&&(r+=' title="'+t+'"'),r+">"+n+"</a>"},i.prototype.image=function(e,t,n){if(null===(e=p(this.options.sanitize,this.options.baseUrl,e)))return n;var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+(this.options.xhtml?"/>":">")},i.prototype.text=function(e){return e},a.prototype.strong=a.prototype.em=a.prototype.codespan=a.prototype.del=a.prototype.text=function(e){return e},a.prototype.link=a.prototype.image=function(e,t,n){return""+n},a.prototype.br=function(){return""},l.parse=function(e,t){return new l(t).parse(e)},l.prototype.parse=function(e){this.inline=new s(e.links,this.options),this.inlineText=new s(e.links,b({},this.options,{renderer:new a})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},l.prototype.next=function(){return this.token=this.tokens.pop(),this.token},l.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},l.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},l.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,c(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s="",i="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});i+=this.renderer.tablerow(n)}return this.renderer.table(s,i);case"blockquote_start":for(i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";for(var a=this.token.ordered,l=this.token.start;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,a,l);case"list_item_start":i="";var o=this.token.loose,u=this.token.checked,h=this.token.task;for(this.token.task&&(i+=this.renderer.checkbox(u));"list_item_end"!==this.next().type;)i+=o||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(i,h,u);case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:var p='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(p);console.log(p)}},o.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t))for(var n=t;this.seen[n]++,this.seen.hasOwnProperty(t=n+"-"+this.seen[n]););return this.seen[t]=0,t},u.escapeTest=/[&<>"']/,u.escapeReplace=/[&<>"']/g,u.replacements={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u.escapeTestNoEncode=/[<>"']|&(?!#?\w+;)/,u.escapeReplaceNoEncode=/[<>"']|&(?!#?\w+;)/g;var g={},f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function d(){}function b(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function m(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var r=!1,s=t;0<=--s&&"\\"===n[s];)r=!r;return r?"|":" |"})).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function _(e,t,n){if(0===e.length)return"";for(var r=0;r<e.length;){var s=e.charAt(e.length-r-1);if(s!==t||n){if(s===t||!n)break;r++}else r++}return e.substr(0,e.length-r)}function x(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=0,r=0;r<e.length;r++)if("\\"===e[r])r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&--n<0)return r;return-1}function k(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function y(e,t,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(r||"function"==typeof t){r||(r=t,t=null),k(t=b({},y.defaults,t||{}));var s,i,a=t.highlight,o=0;try{s=n.lex(e,t)}catch(e){return r(e)}i=s.length;var c=function(e){if(e)return t.highlight=a,r(e);var n;try{n=l.parse(s,t)}catch(n){e=n}return t.highlight=a,e?r(e):r(null,n)};if(!a||a.length<3)return c();if(delete t.highlight,!i)return c();for(;o<s.length;o++)!function(e){"code"!==e.type?--i||c():a(e.text,e.lang,(function(t,n){return t?c(t):null==n||n===e.text?--i||c():(e.text=n,e.escaped=!0,void(--i||c()))}))}(s[o])}else try{return t&&(t=b({},y.defaults,t)),k(t),l.parse(n.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||y.defaults).silent)return"<p>An error occurred:</p><pre>"+u(e.message+"",!0)+"</pre>";throw e}}d.exec=d,y.options=y.setOptions=function(e){return b(y.defaults,e),y},y.getDefaults=function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:new i,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}},y.defaults=y.getDefaults(),y.Parser=l,y.parser=l.parse,y.Renderer=i,y.TextRenderer=a,y.Lexer=n,y.lexer=n.lex,y.InlineLexer=s,y.inlineLexer=s.output,y.Slugger=o,y.parse=y,"undefined"!=typeof module&&"object"==typeof exports?module.exports=y:"function"==typeof define&&define.amd?define((function(){return y})):e.marked=y}(this||("undefined"!=typeof window?window:global)),function(e){var t="object"==typeof window&&window||"object"==typeof self&&self;"undefined"==typeof exports||exports.nodeType?t&&(t.hljs=e({}),"function"==typeof define&&define.amd&&define([],(function(){return t.hljs}))):e(exports)}((function(e){var t=[],n=Object.keys,r={},s={},i=!0,a=/^(no-?highlight|plain|text)$/i,l=/\blang(?:uage)?-([\w-]+)\b/i,o=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,u="Could not find the language '{}', did you forget to load/include a language module?",c={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},h="of and for in not or if then".split(" ");function p(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g(e){return e.nodeName.toLowerCase()}function f(e){return a.test(e)}function d(e){var t,n={},r=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return r.forEach((function(e){for(t in e)n[t]=e[t]})),n}function b(e){var t=[];return function e(n,r){for(var s=n.firstChild;s;s=s.nextSibling)3===s.nodeType?r+=s.nodeValue.length:1===s.nodeType&&(t.push({event:"start",offset:r,node:s}),r=e(s,r),g(s).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:s}));return r}(e,0),t}function m(e,t){return t?Number(t):-1!=h.indexOf(e.toLowerCase())?0:1}function _(e,t,s,a){function l(e,t){var n=k.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function o(e,t,n,r){if(!n&&""===t)return"";if(!e)return t;var s='<span class="'+(r?"":c.classPrefix);return(s+=e+'">')+t+(n?"":"</span>")}function h(){R+=null!=v.subLanguage?function(){var e="string"==typeof v.subLanguage;if(e&&!r[v.subLanguage])return p(S);var t=e?_(v.subLanguage,S,!0,E[v.subLanguage]):x(S,v.subLanguage.length?v.subLanguage:void 0);return v.relevance>0&&(A+=t.relevance),e&&(E[v.subLanguage]=t.top),o(t.language,t.value,!1,!0)}():function(){var e,t,n,r;if(!v.keywords)return p(S);for(r="",t=0,v.lexemesRe.lastIndex=0,n=v.lexemesRe.exec(S);n;)r+=p(S.substring(t,n.index)),(e=l(v,n))?(A+=e[1],r+=o(e[0],p(n[0]))):r+=p(n[0]),t=v.lexemesRe.lastIndex,n=v.lexemesRe.exec(S);return r+p(S.substr(t))}(),S=""}function g(e){R+=e.className?o(e.className,"",!0):"",v=Object.create(e,{parent:{value:v}})}var f={};function b(e,n){var r=n&&n[0];if(S+=e,null==r)return h(),0;if("begin"==f.type&&"end"==n.type&&f.index==n.index&&""===r)return S+=t.slice(n.index,n.index+1),1;if(f=n,"begin"===n.type)return function(e){var t=e[0],n=e.rule;return n&&n.endSameAsBegin&&(n.endRe=function(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}(t)),n.skip?S+=t:(n.excludeBegin&&(S+=t),h(),n.returnBegin||n.excludeBegin||(S=t)),g(n),n.returnBegin?0:t.length}(n);if("illegal"===n.type&&!s)throw new Error('Illegal lexeme "'+r+'" for mode "'+(v.className||"<unnamed>")+'"');if("end"===n.type){var i=function(e){var n=e[0],r=t.substr(e.index),s=function e(t,n){if(function(e,t){var n=e&&e.exec(t);return n&&0===n.index}(t.endRe,n)){for(;t.endsParent&&t.parent;)t=t.parent;return t}if(t.endsWithParent)return e(t.parent,n)}(v,r);if(s){var i=v;i.skip?S+=n:(i.returnEnd||i.excludeEnd||(S+=n),h(),i.excludeEnd&&(S=n));do{v.className&&(R+="</span>"),v.skip||v.subLanguage||(A+=v.relevance),v=v.parent}while(v!==s.parent);return s.starts&&(s.endSameAsBegin&&(s.starts.endRe=s.endRe),g(s.starts)),i.returnEnd?0:n.length}}(n);if(null!=i)return i}return S+=r,r.length}var k=w(e);if(!k)throw console.error(u.replace("{}",e)),new Error('Unknown language: "'+e+'"');!function(e){function t(e){return e&&e.source||e}function r(n,r){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}if(e.contains&&-1!=e.contains.indexOf("self")){if(!i)throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");e.contains=e.contains.filter((function(e){return"self"!=e}))}!function s(i,a){i.compiled||(i.compiled=!0,i.keywords=i.keywords||i.beginKeywords,i.keywords&&(i.keywords=function(e,t){var r={};return"string"==typeof e?s("keyword",e):n(e).forEach((function(t){s(t,e[t])})),r;function s(e,n){t&&(n=n.toLowerCase()),n.split(" ").forEach((function(t){var n=t.split("|");r[n[0]]=[e,m(n[0],n[1])]}))}}(i.keywords,e.case_insensitive)),i.lexemesRe=r(i.lexemes||/\w+/,!0),a&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=r(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=r(i.end)),i.terminator_end=t(i.end)||"",i.endsWithParent&&a.terminator_end&&(i.terminator_end+=(i.end?"|":"")+a.terminator_end)),i.illegal&&(i.illegalRe=r(i.illegal)),null==i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),i.contains=Array.prototype.concat.apply([],i.contains.map((function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(t){return d(e,{variants:null},t)}))),e.cached_variants?e.cached_variants:function e(t){return!!t&&(t.endsWithParent||e(t.starts))}(e)?[d(e,{starts:e.starts?d(e.starts):null})]:Object.isFrozen(e)?[d(e)]:[e]}("self"===e?i:e)}))),i.contains.forEach((function(e){s(e,i)})),i.starts&&s(i.starts,a),i.terminators=function(e){var n,s,i={},a=[],l={},o=1;function u(e,t){i[o]=e,a.push([e,t]),o+=new RegExp(t.toString()+"|").exec("").length-1+1}for(var c=0;c<e.contains.length;c++)u(s=e.contains[c],s.beginKeywords?"\\.?(?:"+s.begin+")\\.?":s.begin);e.terminator_end&&u("end",e.terminator_end),e.illegal&&u("illegal",e.illegal);var h=a.map((function(e){return e[1]}));return n=r(function(e,n){for(var r=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,s=0,i="",a=0;a<e.length;a++){var l=s+=1,o=t(e[a]);for(a>0&&(i+="|"),i+="(";o.length>0;){var u=r.exec(o);if(null==u){i+=o;break}i+=o.substring(0,u.index),o=o.substring(u.index+u[0].length),"\\"==u[0][0]&&u[1]?i+="\\"+String(Number(u[1])+l):(i+=u[0],"("==u[0]&&s++)}i+=")"}return i}(h),!0),l.lastIndex=0,l.exec=function(t){var r;if(0===a.length)return null;n.lastIndex=l.lastIndex;var s=n.exec(t);if(!s)return null;for(var o=0;o<s.length;o++)if(null!=s[o]&&null!=i[""+o]){r=i[""+o];break}return"string"==typeof r?(s.type=r,s.extra=[e.illegal,e.terminator_end]):(s.type="begin",s.rule=r),s},l}(i))}(e)}(k);var y,v=a||k,E={},R="";for(y=v;y!==k;y=y.parent)y.className&&(R=o(y.className,"",!0)+R);var S="",A=0;try{for(var O,N,M=0;v.terminators.lastIndex=M,O=v.terminators.exec(t);)N=b(t.substring(M,O.index),O),M=O.index+N;for(b(t.substr(M)),y=v;y.parent;y=y.parent)y.className&&(R+="</span>");return{relevance:A,value:R,illegal:!1,language:e,top:v}}catch($){if($.message&&-1!==$.message.indexOf("Illegal"))return{illegal:!0,relevance:0,value:p(t)};if(i)return{relevance:0,value:p(t),language:e,top:v,errorRaised:$};throw $}}function x(e,t){t=t||c.languages||n(r);var s={relevance:0,value:p(e)},i=s;return t.filter(w).filter(R).forEach((function(t){var n=_(t,e,!1);n.language=t,n.relevance>i.relevance&&(i=n),n.relevance>s.relevance&&(i=s,s=n)})),i.language&&(s.second_best=i),s}function k(e){return c.tabReplace||c.useBR?e.replace(o,(function(e,t){return c.useBR&&"\n"===e?"<br>":c.tabReplace?t.replace(/\t/g,c.tabReplace):""})):e}function y(e){var n,r,i,a,o,h=function(e){var t,n,r,s,i=e.className+" ";if(n=l.exec(i+=e.parentNode?e.parentNode.className:"")){var a=w(n[1]);return a||(console.warn(u.replace("{}",n[1])),console.warn("Falling back to no-highlight mode for this block.",e)),a?n[1]:"no-highlight"}for(t=0,r=(i=i.split(/\s+/)).length;t<r;t++)if(f(s=i[t])||w(s))return s}(e);f(h)||(c.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,o=n.textContent,i=h?_(h,o,!0):x(o),(r=b(n)).length&&((a=document.createElement("div")).innerHTML=i.value,i.value=function(e,n,r){var s=0,i="",a=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function o(e){i+="<"+g(e)+t.map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+p(e.value).replace(/"/g,"&quot;")+'"'})).join("")+">"}function u(e){i+="</"+g(e)+">"}function c(e){("start"===e.event?o:u)(e.node)}for(;e.length||n.length;){var h=l();if(i+=p(r.substring(s,h[0].offset)),s=h[0].offset,h===e){a.reverse().forEach(u);do{c(h.splice(0,1)[0]),h=l()}while(h===e&&h.length&&h[0].offset===s);a.reverse().forEach(o)}else"start"===h[0].event?a.push(h[0].node):a.pop(),c(h.splice(0,1)[0])}return i+p(r.substr(s))}(r,b(a),o)),i.value=k(i.value),e.innerHTML=i.value,e.className=function(e,t,n){var r=t?s[t]:n,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(r)&&i.push(r),i.join(" ").trim()}(e.className,h,i.language),e.result={language:i.language,re:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance}))}function v(){if(!v.called){v.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,y)}}var E={disableAutodetect:!0};function w(e){return e=(e||"").toLowerCase(),r[e]||r[s[e]]}function R(e){var t=w(e);return t&&!t.disableAutodetect}return e.highlight=_,e.highlightAuto=x,e.fixMarkup=k,e.highlightBlock=y,e.configure=function(e){c=d(c,e)},e.initHighlighting=v,e.initHighlightingOnLoad=function(){window.addEventListener("DOMContentLoaded",v,!1),window.addEventListener("load",v,!1)},e.registerLanguage=function(t,n){var a;try{a=n(e)}catch(l){if(console.error("Language definition for '{}' could not be registered.".replace("{}",t)),!i)throw l;console.error(l),a=E}r[t]=a,a.rawDefinition=n.bind(null,e),a.aliases&&a.aliases.forEach((function(e){s[e]=t}))},e.listLanguages=function(){return n(r)},e.getLanguage=w,e.requireLanguage=function(e){var t=w(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},e.autoDetection=R,e.inherit=d,e.debugMode=function(){i=!1},e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,n,r){var s=e.inherit({className:"comment",begin:t,end:n,contains:[]},r||{});return s.contains.push(e.PHRASAL_WORDS_MODE),s.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),s},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},[e.BACKSLASH_ESCAPE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.PHRASAL_WORDS_MODE,e.COMMENT,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.HASH_COMMENT_MODE,e.NUMBER_MODE,e.C_NUMBER_MODE,e.BINARY_NUMBER_MODE,e.CSS_NUMBER_MODE,e.REGEXP_MODE,e.TITLE_MODE,e.UNDERSCORE_TITLE_MODE,e.METHOD_GUARD].forEach((function(e){!function e(t){Object.freeze(t);var n="function"==typeof t;return Object.getOwnPropertyNames(t).forEach((function(r){!t.hasOwnProperty(r)||null===t[r]||"object"!=typeof t[r]&&"function"!=typeof t[r]||n&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(t[r])||e(t[r])})),t}(e)})),e}));