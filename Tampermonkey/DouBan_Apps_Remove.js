// ==UserScript==
// @name         DouBan_Apps_Remove
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  删除豆瓣我的收藏的应用
// @author       You
// @match        https://www.douban.com/people/VVIVXIV/apps?action=collect
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    let deleteEle = document.querySelector('#content > div.grid-16-8.clearfix > div.article > div.app-list > div:nth-child(1) > div.content > div.user-operation > a.j.a_confirm_link');
    if (deleteEle) {
        let itemUrl = deleteEle.href;

        let http = new XMLHttpRequest();
        http.open("GET", itemUrl);
        http.send();

        window.onload = function () {
            setInterval(() => {
                window.location.reload();
            }, 3000);
        }
    }
    
    

})();