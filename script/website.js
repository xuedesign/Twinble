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

//選單縮放
$(function(){
// 幫 A 連結加上 hover() 事件
$("#navv a").hover(function(){ // 當滑鼠移進時..
// 先停止未完成的動畫再進行新的動畫
// 展開完整的選項內容
$(this).stop().animate({
height: 139
}, 600);
}, function(){ // 當滑鼠移出時..
// 先停止未完成的動畫再進行新的動畫
// 隱藏選項下方的內容
$(this).stop().animate({
height: 77
}, 600);
}).focus(function(){ // 當 A 連結取得焦點時..
// 讓本身失去焦點
$(this).blur();
});
});

//首頁banner滑動
$(function(){
		$('#banner_main').cycle({ 
				fx:'scrollLeft',
				pager:'#banner_btn'
		});
	})
	

//lightbox效果
$(document).ready(function() {
			/*
			*   Examples - images
			*/

			$("a#example1").fancybox();

			$("a#example2").fancybox({
				'overlayShow'	: false,
				'transitionIn'	: 'elastic',
				'transitionOut'	: 'elastic'
			});

			$("a#example3").fancybox({
				'transitionIn'	: 'none',
				'transitionOut'	: 'none'	
			});

			$("a#example4").fancybox({
				'opacity'		: true,
				'overlayShow'	: false,
				'transitionIn'	: 'elastic',
				'transitionOut'	: 'none'
			});

			$("a#example5").fancybox();

			$("a#example6").fancybox({
				'titlePosition'		: 'outside',
				'overlayColor'		: '#000',
				'overlayOpacity'	: 0.9
			});

			$("a#example7").fancybox({
				'titlePosition'	: 'inside'
			});

			$("a#example8").fancybox({
				'titlePosition'	: 'over'
			});

			$("a[rel=example_group]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});

			/*
			*   Examples - various
			*/

			$("#various1").fancybox({
				'titlePosition'		: 'inside',
				'transitionIn'		: 'none',
				'transitionOut'		: 'none'
			});

			$("#various2").fancybox();

			$(".various3").fancybox({
				'width'				: 800,
				'height'			: 500,
				'autoScale'			: false,
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'type'				: 'iframe'
			});

			$("#various4").fancybox({
				'width'				: 920,
				'height'			: 250,					
				'padding'			: 0,
				'autoScale'			: false,
				'transitionIn'		: 'none',
				'transitionOut'		: 'none'
			});
		});


// 縮圖圖說
$(function(){
		// 預設標題區塊 .abgne_tip_gallery_block .caption 的 top
		var _titleHeight = 50;
		$('.abgne_tip_gallery_block').each(function(){
			// 先取得區塊的高及標題區塊等資料
			var $this = $(this), 
				_height = $this.height(), 
				$caption = $('.caption', $this),
				_captionHeight = $caption.outerHeight(true),
				_speed = 200;
			
			// 當滑鼠移動到區塊上時
			$this.hover(function(){
				// 讓 $caption 往上移動
				$caption.stop().animate({
					top: _height - _captionHeight
				}, _speed);
			}, function(){
				// 讓 $caption 移回原位
				$caption.stop().animate({
					top: _height - _titleHeight
				}, _speed);
			});
		});
	});

//圖片延遲載入
$(function() {
          $("img").lazyload({placeholder : "../images/grey.gif",effect: "fadeIn"});
      });
	  
//
$(function(){
  $(".to_top").scrollTo(700)
});	  