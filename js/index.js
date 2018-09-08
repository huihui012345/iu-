/***************�ڶ�����**********************/
$(function(){
    //�ҵ��ڶ����ֵ��Ԫ��
    var ulList=$(".index2>ul.text");
   // console.log(ulList);
    //�󶨵���¼�
    ulList.on("click","[data-toggle=tap]",function(e){
        //��ֹĬ���¼�
        e.preventDefault();
        var $a=$(this);
    //console.log($a);
   // console.log($a.attr("href"));�������#box1 #box1
       // console.log($("#box1"));
        //addClass����   siblings ���Լ��������ֵ�   removeClass �Ƴ��¼�
        $($a.attr("href")).addClass("active").siblings().removeClass("active");
        //console.log($a.parent().parent());
        var b=$a.attr("href");
        //console.log($a.attr("href"));--box1 box2 box3
        //console.log(b);
        //console.log(b.replace("#","."));
        $(b.replace("#",".")).addClass("active").siblings().removeClass("active");
    });
//    function task(){
//        //����classΪactive��li
//       var li= $("ul.latest>li.active");
//        //�����ǰli��active, //����li����һ���ֵܵ�classΪactive
//        li.removeClass("active").next().addClass("active");
//        //console.log(li.next());
//        if(li.next()==null) {
//            //console.log(111);
//            //li.next().addClass("active");
//            li.parent().children(":first-child").addClass("active");
//        }
//    }
//    task();
//    var time=setInterval(task,5000);
//
});

/**************************���Ĳ���****************************/
/**********�����ͣ ����ͼƬ�䰵**************/
$(".indexSmallOut ul li a").hover(function(){

//		$(".indexSmallOut li a").removeClass("hover");
//		$(this).addClass("hover");
    if( $(this).parents("li").siblings().length>0 ){
        $(this).siblings().stop().animate({"opacity":"0.3"},500);
    }
    $(this).parents("li").siblings().find("a:not(.hover)").stop().animate({"opacity":"0.3"},500);
},function(){
    $(".indexSmallOut ul li a").stop().animate({"opacity":"1"},500);
});
$(function () {
    var $ulImgs = $("[data-load=tslb]");
    var $banner = $("[data-load=banner]");
    var $xlb = $("[data-ul=xlb]");
    var LIWIDTH = 1200, interval = 500, wait = 3000, moved = 0, timer = null;
    $.ajax({
        type: "get",
        url: "data/index/getcarousel_1.php",
        dataType: "json",
        success: function (products) {
            var html = "";
            for (var {href, img, title} of products) {
                html += `<li>
              <a href="${href}">
                <img src="${img}">
              </a>
            </li>`;
            }
            html += `<li>
              <a href="${products[0].href}">
                <img src="${products[0].img}">
              </a>
            </li>`;
            $ulImgs.html(html)
                .css("width", LIWIDTH * (products.length + 1));
            $xlb.html("	<li class='active box1 '><a href='#box1' data-toggle='tap'><img src='img/79e0cd13c5c416fc68be1314423f4466.jpg'/></a></li><li class='box2'data-toggle='tap'> <a href='#box2'><img src='img/a3913edb2742976e2b800665d2c3c7dd.jpg'/></a> </li> <li class='box3'data-toggle='tap'> <a href='#box3'><img src='img/9e9e797d3c83160d87dd1abdcaed4274.jpg'/></a> </li> <li class='box4'data-toggle='tap'> <a href='#box4'><img src='img/d17d044d7968ee5e7285c7097ebe9f44.jpg'/></a></li> <li class='box5'data-toggle='tap'> <a href='#box5'><img src='img/fbb3fe016e6172c2169765b455d557c9.jpg'/></a> </li> <li class='box6'data-toggle='tap'> <a href='#box6'><img src='img/714503e1a6f4838a284565a6a072a764.jpg'/></a> </li>'")
                .on("click", "li>a>img", function (e) {
                    e.preventDefault();
                    // console.log(1);
                    var $img = $(this);
                    moved = $img.parent().parent().index();
                    // console.log(88)
                    $ulImgs.stop(true).animate({
                        left: -moved * LIWIDTH
                    }, interval, function () {
                        $img.addClass("xlb").parent().parent().siblings().children(0).children(0).removeClass("xlb");
                        // console.log($img.parent().parent().siblings().children(0).children());
                    });

                })
                .children(":first-child").children().children().addClass("xlb");
            // .parent().parent().next().children(":first-child").children(0).removeClass("xlb");
            function move() {
                moved++;
                $ulImgs.animate({
                    left: -moved * LIWIDTH
                }, interval, function () {
                    if (moved == products.length) {
                        moved = 0;
                        $ulImgs.css("left", 0);
                    }
                    $xlb.children().children().children(":eq(" + moved + ")").addClass("xlb").parent().parent().siblings().children(0).children(0).removeClass("xlb");
                    // console.log($xlb.children(0).children(0).children(":eq("+moved+")").parent().parent().siblings().children(0).children(0));
                })
            }

            // <li><a href="#"><img src="img/1-1fr915324r40.jpg" alt=""></a></li>
            // <li><a href="#"><img src="img/1-16062119542y92.jpg" alt=""></a></li>
            // <li><a href="#"><img src="img/1-160622154f2546.jpg" alt=""></a></li>
            // <li><a href="#"><img src="img/1-160622163510u6.jpg" alt=""></a></li>");
            function autoMove() {
                timer = setInterval(function () {
                    move();
                }, wait + interval)
            }

            autoMove();
            ///动画悬停
            $("#ting").hover(function () {
                    clearInterval(timer);
                    timer = null;
                }, function () {
                    autoMove();
                }
            );
            //鼠标点击
            // var $xlbL = $("[data-xlb=left]");
            // var $xlbR = $("[data-xlb=right]");
            // console.log($xlbR);
            // $xlbR.click(function () {
            //     // console.log(1);
            //     if (!$ulImgs.is(":animated"))
            //         move();
            // });
            // $xlbL.click(function () {
            //     console.log(2);
            //     if (moved == 0) {
            //         moved = products.length;
            //         $ulImgs.css("left", -LIWIDTH * moved);
            //     }
            //     moved--;
            //     $ulImgs.animate({
            //         left: -moved * LIWIDTH
            //     }, interval, function () {
            //         $xlb.children(":eq(" + moved + ")").children().children().addClass("xlb").parent().parent().siblings().children(0).children(0).removeClass("xlb");
            //         // console.log($xlb.children(":first-child").children().children().parent().parent().next().children(":first-child").children(0));
            //     });
            // })

        }
    })
})