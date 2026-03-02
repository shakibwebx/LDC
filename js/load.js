(function (window, undefined){
	"use strict";
	
	var document = window.document;
	
	function log() {
		if (window.console && window.console.log) {
			for (var x in arguments) {
				if (arguments.hasOwnProperty(x)) {
					window.console.log(arguments[x]);
				}
			}
		}
	}
	
	function AcceptCookie() {
		if (!(this instanceof AcceptCookie)) {
			return new AcceptCookie();
		}
				
		this.init.call(this);
		
		return this;
	}
	
	AcceptCookie.prototype = {
		
		init: function () {
			var self = this;
			
			if(self.readCookie('pjAcceptCookie') == null)
			{
				self.appendCss();
				self.addCookieBar();
			}
			
			var clear_cookie_arr = self.getElementsByClass("pjClearCookie", null, "a");
			if(clear_cookie_arr.length > 0)
			{
				self.addEvent(clear_cookie_arr[0], "click", function (e) {
					if (e.preventDefault) {
						e.preventDefault();
					}
					self.eraseCookie('pjAcceptCookie');
					document.location.reload();
					return false;
				});
			}
		},
		getElementsByClass: function (searchClass, node, tag) {
			var classElements = new Array();
			if (node == null) {
				node = document;
			}
			if (tag == null) {
				tag = '*';
			}
			var els = node.getElementsByTagName(tag);
			var elsLen = els.length;
			var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
			for (var i = 0, j = 0; i < elsLen; i++) {
				if (pattern.test(els[i].className)) {
					classElements[j] = els[i];
					j++;
				}
			}
			return classElements;
		},
		addEvent: function (obj, type, fn) {
			if (obj.addEventListener) {
				obj.addEventListener(type, fn, false);
			} else if (obj.attachEvent) {
				obj["e" + type + fn] = fn;
				obj[type + fn] = function() { obj["e" + type + fn](window.event); };
				obj.attachEvent("on" + type, obj[type + fn]);
			} else {
				obj["on" + type] = obj["e" + type + fn];
			}
		},
		createCookie: function (name, value, days){
			var expires;
		    if (days) {
		        var date = new Date();
		        date.setTime(date.getTime()+(days*24*60*60*1000));
		        expires = "; expires="+date.toGMTString();
		    } else {
		        expires = "";
		    }
		    document.cookie = name+"="+value+expires+"; path=/";
		},
		readCookie: function (name) {
		    var nameEQ = name + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0;i < ca.length;i++) {
		        var c = ca[i];
		        while (c.charAt(0) === ' ') {
		            c = c.substring(1,c.length);
		        }
		        if (c.indexOf(nameEQ) === 0) {
		            return c.substring(nameEQ.length,c.length);
		        }
		    }
		    return null;
		},
		eraseCookie: function (name) {
			var self = this;
			self.createCookie(name,"",-1);
		},
		appendCss: function()
		{
			var self = this;
			var cssId = 'pjAcceptCookieCss';
			if (!document.getElementById(cssId))
			{
			    var head  = document.getElementsByTagName('head')[0];
			    var link  = document.createElement('link');
			    link.id   = cssId;
			    link.rel  = 'stylesheet';
			    link.type = 'text/css';
			    link.href = 'https://fonts.googleapis.com/css?family=Open+Sans';
			    link.media = 'all';
			    head.appendChild(link);
			}
			
			var cssCode = "";
			cssCode += "#pjAcceptCookieBar { padding:5px 0; background:#fff; position:fixed; z-index:999; bottom:0; width:100%;}";
			cssCode += ".pjAcceptCookieBarShell { text-align:center; width:100%; margin:0 auto; font-size:14px;}";
			cssCode += ".pjAcceptCookieBarShell p { display:inline; margin-bottom:0px; }";
			cssCode += ".pjAcceptCookieBarActions { display:inline-block; padding:0 20px;  }";						
			cssCode += ".pjAcceptCookieBarBtn { border:1px solid #1e85c0; color:#1e85c0; cursor:pointer; border-radius:2px; padding:7px 25px; font-weight:bold; letter-spacing:1px; font-size:13px; -webkit-appearance:none; background:none; margin:0;  }";
			cssCode += ".pjAcceptCookieBarBtn:hover { background:#1e85c0; color:#fff;  }";			
			cssCode += ".pjAcceptCookieBarShell a { text-decoration:underline; color:#000; }";
			cssCode += ".pjAcceptCookieBarShell a:hover { color:#1e85c0; }";
			cssCode += "@media only screen and (max-width: 767px) {";
			cssCode += ".pjAcceptCookieBarShell p { display:block; margin-bottom:2px; }";
			cssCode += ".pjAcceptCookieBarActions { display:block; float:left;  }";
			cssCode += ".pjAcceptCookieBarShell a { display:inline-block; float:right; padding-right:40px; margin-top:5px; }";
			cssCode += "}";
			
			var styleElement = document.createElement("style");
			styleElement.type = "text/css";
			if (styleElement.styleSheet) {
			    styleElement.styleSheet.cssText = cssCode;
			} else {
				styleElement.appendChild(document.createTextNode(cssCode));
			}
			document.getElementsByTagName("head")[0].appendChild(styleElement);
		},
		addCookieBar: function(){
			var self = this;
			var htmlBar = '';
			
			htmlBar += '<div class="pjAcceptCookieBarShell">';
			htmlBar += '<form action="#" method="post">';
			htmlBar += '<p>This site uses cookies to improve your user experience.</p>';
			htmlBar += '<div class="pjAcceptCookieBarActions">';
			htmlBar += '<button type="button" class="pjAcceptCookieBarBtn">ACCEPT</button>';
			htmlBar += '</div>';
			htmlBar += '<a href="https://www.london-dermatology-centre.co.uk/privacy-policy.html">Read More</a>';
			htmlBar += '</form>';
			htmlBar += '</div>';
			
			var barDiv = document.createElement('div');
			barDiv.id = "pjAcceptCookieBar";
			document.body.appendChild(barDiv);
			barDiv.innerHTML = htmlBar;
			
			self.bindCookieBar();
		},
		bindCookieBar: function(){
			var self = this;
			var btn_arr = self.getElementsByClass("pjAcceptCookieBarBtn", null, "button");
			if(btn_arr.length > 0)
			{
				self.addEvent(btn_arr[0], "click", function (e) {
					if (e.preventDefault) {
						e.preventDefault();
					}
					self.createCookie('pjAcceptCookie', 'YES', 365);
					
					document.getElementById("pjAcceptCookieBar").remove();
					return false;
				});
			}
		}
	};
	
	window.AcceptCookie = AcceptCookie;	
})(window);

window.onload = function() {
	AcceptCookie = AcceptCookie();
}