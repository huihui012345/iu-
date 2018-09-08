/*广告轮播*/
/*第一步在最后一张图片的后面加上第一张图片，并自动修改图片的length+1*/
$(function(){
	var $ulImgs=$("[data-load=bannerImgs]");//自定义扩展属性找到图片
	var $ulIdcs=$("[data-load=bannerInds]");//导航小圆点
	var LIWIDTH=960,/*设置图片的宽度*/interval=500,wait=3000/*等待时间*/,
		moved=0,/*起始移动次数*/timer=null/*设置鼠标放在图片上停止用*/
	$.ajax({
		type:"get",
		url:"data/index/getcarousel.php",
		dataType:"json",
		success:function(products){
			var html="";
			for(var {href,img,title} of products){
				html+=`<li>
              <a href="${href}" title="${title}">
                <img src="${img}">
              </a></li> `
			}
			html+=`<li>//此处为新加的放在最后的第一张图片
              <a href="${products[0].href}" title="${products[0].title}">
                <img src="${products[0].img}">
            </a></li>`
			$ulImgs.html(html)
				.css("width",LIWIDTH*(products.length+1));//计算轮播图片横着排列需要的总宽度为图片宽度*图片张数
			$ulIdcs.html(//导航小圆点,利用repeat()重复加载
				"<li></li>".repeat(products.length))
				.on("click","li",function(){
					var $li=$(this);
					moved=$li.index();//小圆点的位置与moved一致
					$ulImgs.stop(true).animate({//stop(true)——防止动画叠加
						left:-moved*LIWIDTH
					},interval,function(){
						$li.addClass("hover")//给点击的小圆点加高亮,移除其他小圆点的hover
							.siblings().removeClass("hover")
					});
				})
				.children(":first-child")
				.addClass("hover")//给第一个小圆点高亮
			function move(){//轮播的共用部分，移动
				moved++;//每隔3.5s移动加一次
				$ulImgs.animate({
					left:-moved*LIWIDTH
				},interval,function(){//轮播一轮之后循环
					if(moved==products.length){//当轮播到最后一张图片时
						moved=0;//把moved置0
						$ulImgs.css("left",0);//同时利用css属性把left置0,再从头轮播
					}
					$ulIdcs.children(":eq("+moved+")")//小圆点的位置与moved个数相同
						.addClass("hover")//图片轮播同时给与moved个数相同的位置的小圆点加hover高亮显示
						.siblings().removeClass("hover");//同时移除其他小圆点的hover高亮
				})//动画持续0.5s
			}
			function autoMove(){
			 timer=setInterval(function(){
				move();//调用move函数进行自动轮播
			},wait+interval);//每隔3.5s,两次轮播间隔为3s,执行一次动画需要0.5s,留给客户观看剩余2.5s,
			//故要加上执行动画需要的0.5s——即interval
			}
			autoMove();//调用包起来的函数autoMove
			$("#banner").hover(//设置鼠标移入的时候清除计时器，让图片轮播停止
				function(){
				  clearInterval(timer);//清除计时器的timer(鼠标移入图片时)
				  timer=null
				},
				function(){//当鼠标移出，再次调用计时器函数autoMove,让计时器开始，继续轮播
					autoMove();
				}
			);
			var $aLeft=$("[data-move=left]"),
			$aRight=$("[data-move=right]");
			$aRight.click(function(){//点击右边按钮轮播
			if(!$ulImgs.is(":animated"))//清除点击过快动画跟不上,如果动画没完,不允许点击
				move();//调用move函数
			});
			$aLeft.click(function(){//点击左边按钮轮播
				if(!$ulImgs.is(":animated")){
					if(moved==0){//当前第一张图片,如果点击左边按钮,则会出现空白页
						moved=products.length;//让其显示最后一张,把moved置为.length
						$ulImgs.css("left",-LIWIDTH*moved);//因为向左轮播,故为负的-LIWIDTH*moved
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
			})
		}
	})
})
 