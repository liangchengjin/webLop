       /*--nav-share start*/
        $(function(){            
             $(".share a").each(function(index){
                    
                    $(this).hover(function(){
                        if(index == 0){
                            $(this).css({"background-color":"#666"});
                        }else if(index == 1){
                            $(this).css({"background-color":"#0e71b7"});
                        }else if(index == 2){
                            $(this).css({"background-color":"#f75454"});
                        }
                        // 变成圆角
                        $(this).css({"border-radius":4});
                        // 在每次创建动画之前先停止下来
                        $(this).find("span").stop();
                        // 创建动画函数
                        $(this).find("span").animate({"top":-49},"normal");
                    
                    },function(){ // 还原到初始值
                        // 需要取到a标签的this
                        var _this = $(this);
                        $(this).find("span").animate({"top":0},"normal",function(){
                            // 回调函数
                            _this.css({"background":"none"},"normal");
                        });
                    });
               });
        }); 
        /*--nav-share end*/
        /*--轮播动画区-banner start*/
        var play_conunt = null;
        var play_clearIntrval = null;
          $(function(){
                $(".b_img").eq(0).css({"z-index":1,"opacity":1});
                // 当鼠标滑上去的时候
                $(".btn").find("li").mouseover(function(){
                    $(this).addClass("on").siblings().removeClass("on"); 
                    //alert($(this).index());
                    $(".b_img").css({"z-index":0,"opacity":0});
                    $(".b_img").eq($(this).index()).css({"z-index":1}).fadeTo(700,1);
                    
                    play_conunt = $(this).index()+1;

                    // 当鼠标滑上去的时候，clearInterval 即自动播放
                    clearInterval(play_clearIntrval);
                
                }).mouseout(function(){
                    auto_banner();
            });
            auto_banner();
        
        });
        // 自动切换
        function auto_banner(){
            play_clearIntrval = setInterval(function(){
                if(play_conunt > 5){
                    play_conunt = 5; // 索引的下标值最大值
                }
                 $(".b_img").css({"z-index":0,"opacity":0});
                 $(".b_img").eq(play_conunt).css({"z-index":1}).fadeTo(700,1);
                 $(".btn").find("li").removeClass("on");
                 $(".btn").find("li").eq(play_conunt).addClass("on");
                 if(play_conunt == 5){
                    play_conunt = 0;
                 }else{
                    play_conunt ++; // 
                 }

            },2500);
        };
        /*轮播动画区-banner end*/

        // course nav
        $(function(){
            $(".c_left").find("li").hover(function(){               
                var auto_left = ($(window).width() - 1200) /2;
                 var _left = $(this).offset().left - auto_left -10;
                $(".c_left").find(".underline").stop();
                $(".c_left").find(".underline").animate({left:_left+10},100);
                
                 // 和下边的联动  
                var _index = $(this).index();
                $(".c_list").eq(_index).show().siblings().hide();           
             

            });
        });