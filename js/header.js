 /*$(function(){
 	var link=document.createElement("link");
 		link.rel="stylesheet";
 		link.href="css/header.css";
 		document.head.appendChild(link);
 	$.ajax({
 			type:"get",
 			url:"header.html",
 			success:function(html){
 				document.getElementById("header").innerHTML=html;
 			}
 		})
 });*/

/****************轮播图******************/
 $(function(){
	var $ulImgs=$("[data-load=bannerImgs]");
	var $ulIdcs=$("[data-load=bannerInds]");
	var LIWIDTH=1200,
		  interval=500,wait=3000,moved=0,timer=null;
	$.ajax({
		type:"get",
		url:"data/index/getcarousel.php",
		dataType:"json",
		success:function(products){
//{"cid":"1","img":"img\/banner1.jpg","title":"\u8f6e\u64ad1","href":"product_details.html?lid=28"}
			//console.log(products);
			var html="";
			for(var {href,img,title} of products){
				html+=`<li><a href="#" title="${title}">
						<img src="${img}">
				</a>
				</li>`
			}
			html+=`<li><a href="${products[0].href}"
				   title="${products[0].title}">
					<img src="${products[0].img}">
				</a>
			</li>`;

			$ulImgs.html(html)
				.css("width",LIWIDTH*(products.length+1));
			$ulIdcs.html(
				"<li></li>".repeat(products.length))
			.on("click","li",function(){//设置导航小圆点单击事件
				var $li=$(this);
				moved=$li.index();
				$ulImgs.stop(true).animate({
					left:-moved*LIWIDTH
				},interval,function(){
					$li.addClass("hover")
						.siblings().removeClass("hover")
				});
			})
			.children(":first-child")
			.addClass("hover");
			function move(){
				moved++;
				$ulImgs.animate({
					left:-moved*LIWIDTH
				},interval,function(){
					if(moved==products.length){
						moved=0;
						$ulImgs.css("left",0);
					}
					$ulIdcs.children(":eq("+moved+")")
						.addClass("hover")
						.siblings().removeClass("hover");
				})
			}
			function autoMove(){
				timer=setInterval(function(){
					move();//动画持续0.5s
				},wait+interval);//每隔3.5s
			}
			autoMove();
			$("#banner").hover(
				function(){
					clearInterval(timer);
					timer=null
				},
				function(){
					autoMove();
				}
			);
			var $aLeft=$("[data-move=left]"),
					$aRight=$("[data-move=right]");
			$aRight.click(function(){
				if(!$ulImgs.is(":animated"))
					move();
			});
			$aLeft.click(function(){
				if(!$ulImgs.is(":animated")){
					if(moved==0){
						moved=products.length;
						$ulImgs.css("left",-LIWIDTH*moved);
					}
					moved--;
					$ulImgs.animate({
						left:-moved*LIWIDTH
					},interval,function(){
						$ulIdcs.children(":eq("+moved+")")
							.addClass("hover")
							.siblings().removeClass("hover");
					})
				}
			});
		}
	})
})




// 小轮播
