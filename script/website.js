// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;

//圖片延遲載入
$(function() {
          $("img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });
	  
//返回頁首
$(function(){
  $("#btn_totop").scrollTo(700)
});

//頂端隱藏選單
$(function(){$(window).load(function(){$(window).bind("scroll resize",function(){var o=$(this),t=o.scrollTop();540>t&&$("#top_menu").stop().animate({top:"-60px"}),t>540&&$("#top_menu").stop().animate({top:"0px"})}).scroll()})});

//wow動畫
wow=new WOW({animateClass:"animated",offset:100,callback:function(a){console.log("WOW: animating <"+a.tagName.toLowerCase()+">")}}),wow.init();

//行動版選單
$(document).ready(function() {
	  $(".toggle").click(function() {
		  $(this).toggleClass("active");
		  $(".nav").slideToggle();
	  });
	  $(".nav > ul > li:has(ul) > a").append('<div class="arrow-bottom"></div>');
  });

