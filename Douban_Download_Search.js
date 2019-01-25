// ==UserScript==
// @name           Douban Download Search
// @namespace      https://github.com/ywzhaiqi
// @description    增加豆瓣电影、图书的下载搜索链接
// @author         ywzhaiqi
// @version        1.1
// @include        https://movie.douban.com/subject/*
// @include        https://book.douban.com/subject/*
// @grunt          none
// ==/UserScript==

// by Wiss
// 2019.1.24 版本1.2
// 2019.1.25 版本1.3
// 自定义豆瓣电影下载途经，豆瓣读书未作修改
// keyword1 keyword2 我测试效果一样，都代指关键字
// 我不会代码，只是代码搬动工，别问我XX是什么意思

// by MX
// 2019.1.25 版本1.4
// 豆瓣读书添加 CSDN, mebook, SaltTiger, SmteBooks
// 豆瓣电影添加 pniao

function run () {
	var movieTitle = $('h1 span:eq(0)').text();
	var title = $('html head title').text();
	var keyword1 = title.replace( '(豆瓣)', '' ).trim();
	var keyword2 = encodeURIComponent( keyword1 );
	var movieSimpleTitle = movieTitle.replace(/第\S+季.*/, "");

	var Movie_links = [
        { html: "电影首发站", href: "https://www.dysfz.tv/key/" + keyword1 + "/"},
        { html: "胖鸟电影", href: "http://www.pniao.com/Mov/so/" + keyword1},
		{ html: "MAG 磁力站", href: "http://oabt004.com/index?k=" + movieSimpleTitle },
		{ html: "天天看美剧", href: "http://www.msj1.com/?s=" + keyword1 },
        { html: "高清电台", href: "https://gaoqing.fm/s.php?q=" + keyword1 },
        { html: "不太灵", href: "https://bt0.com/search/" + keyword1 },
        { html: "音范丝", href: "http://www.yinfans.com/?s=" + keyword1 },
        { html: "片源网", href: "http://pianyuan.net/search?q=" + keyword1 },
		{ html: "Google", href: "https://www.google.com/search?ie=UTF-8&q=" + keyword1 + " 1080p" },
	];

	var Subtitle_links = [
		{ html: "SubHD", href: "http://subhd.com/search0/" + movieSimpleTitle },
		{ html: "字幕组", href: "http://www.zimuzu.io/search?keyword=" + movieSimpleTitle },
		{ html: "字幕库", href: "https://www.zimuku.cn/search?q=" + keyword1 },
	];

	var Online_links = [
		{ html: "Neets 追剧管家", href: "https://neets.cc/search?key=" + keyword1 },
		{ html: "AGMJ 阿哥美剧", href: "http://ajmeiju.com/search/kw/" + keyword1 },
	];

	var Book_links = [
        { html: "CSDN", href: "https://so.csdn.net/so/search/s.do?q=" + keyword1 + "&t=doc&o=&s=all&l=" },
        { html: "mebook", href: "http://mebook.cc/?s=" + keyword1 },
        { html: "SaltTiger", href: "https://salttiger.com/?s=" + keyword1 },
        { html: "SmteBooks", href: "https://smtebooks.eu/Search?SearchTerm=" + keyword1 },
		{ html: "百度盘", href: "https://www.google.com/search?q=" + keyword1 + " site:pan.baidu.com"},
		{ html: "mLook", href: "http://www.mlook.mobi/search?q=" + keyword2 },
		{ html: "VeryCD", href: "http://www.verycd.com/search/folders/" + keyword2 },
		{ html: "SimpleCD", href: "http://simplecd.me/search/entry/?query=" + keyword1 },
		{ html: "Donkey4u", href: "http://donkey4u.com/search/" + movieTitle },
		{ html: "Torrent Project", href: "http://torrentproject.com/?&btnG=Torrent+Search&num=20&start=0&s=" + keyword2 },
		{ html: "Google", href: "https://www.google.com/search?ie=UTF-8&q=" + movieTitle },
	];

	var link = $("<div>").append(
		$("<span>").attr("class", "pl").html("下载链接: ")
	);

	var Sublink = $("<div>").append(
		$("<span>").attr("class", "pl").html("字幕链接: ")
	);

	var Online = $("<div>").append(
		$("<span>").attr("class", "pl").html("在线观看: ")
	);

	switch(location.host){
		case "movie.douban.com":
			appendLinks(Movie_links, link)
			appendLinks(Subtitle_links, Sublink)
			appendLinks(Online_links, Online)

//         link.append('<br>')
//         Sublink.append('<br>')

            break;

        case "book.douban.com":
			appendLinks(Book_links, link)
			break;
	}

	$('#info').append(link);
	$('#info').append(Sublink);
	$('#info').append(Online);


	function appendLinks(items, appendTo){
		items.forEach(function(item, i){
			$("<a>")
				.html(item.html)
				.attr({
					href: item.href,
					target: "_blank"
				})
				.appendTo(appendTo);

			if(i != items.length -1){
				appendTo.append(" / ");
			}
		});
	}
}

run()