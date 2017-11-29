// ==UserScript==
// @name         Fix_Njupt_Zhengfang_on_chrome
// @namespace    https://github.com/gaoliang/MyTampermonkey
// @version      0.1
// @description  修复南邮正方登录界面的bug,比如有时候输入框错乱，而且没法用chrome记住密码。
// @author       Gao Liang
// @include        http://jwxt.njupt.edu.cn
// @include        http://jwxt.njupt.edu.cn/default2.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 去除没用的input
    var bad_input = document.getElementById("Textbox1");
    var _parentElement = bad_input.parentNode;
    if(_parentElement){
        _parentElement.removeChild(bad_input);
    }
    // 修改正确input的显示方式
    document.getElementById("TextBox2").style.display="inline";
})();