// ==UserScript==
// @name         知乎免登陆
// @namespace    https://github.com/gaoliang/MyTampermonkey
// @version      0.1
// @description  知乎免登陆
// @author       Gao Liang
// @match        www.zhihu.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    console.log("知乎免登陆脚本执行中");
    GM_addStyle('.Modal-wrapper { display: none !important;}');
    GM_addStyle('html {overflow: scroll !important}');
    console.log("知乎免登陆脚本执行成功");
})();
