// ==UserScript==
// @name         Github Add
// @version      0.1
// @description  添加 GitHub Trending 入口
// @author       M.X
// @match        http://*.github.com/*
// @match        https://*.github.com/*
// @run-at       document-end
// @namespace    http://tampermonkey.net/
// ==/UserScript==

(function() {
    'use strict';


    var navEle = document.querySelector('body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-lg-row.width-full.flex-order-2.flex-lg-order-none.mr-0.mr-lg-3.mt-3.mt-lg-0.Details-content--hidden > nav');

    var trendingEle = document.createElement('a');
    trendingEle.setAttribute("class","js-selected-navigation-item Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-write-fade-15");
    trendingEle.setAttribute("data-selected-links", "/trending");
    trendingEle.setAttribute("href", "/trending");
    trendingEle.innerHTML = "Trending";

    var discoverEle = document.createElement('a');
    discoverEle.setAttribute("class","js-selected-navigation-item Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-write-fade-15");
    discoverEle.setAttribute("data-selected-links", "/discover");
    discoverEle.setAttribute("href", "/discover");
    discoverEle.innerHTML = "Discover";
	
    navEle.appendChild(trendingEle);
    navEle.appendChild(discoverEle);

})();

