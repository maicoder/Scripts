// ==UserScript==
// @name         CheeseAndCracker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  clear some obstacles
// @author       someone
// @match        http://www.ruanyifeng.com/blog/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    for(let i = 0; i < 1000; i++) {
        clearTimeout(i);
        clearInterval(i);
    }
})();