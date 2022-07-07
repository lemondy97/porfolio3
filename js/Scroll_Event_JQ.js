            $(function(){
                $(window).scroll(function(){
                    var ws = $(this).scrollTop();
                    var section3_box1 = $('.news_image_wrap').offset().top;
                    var section3_box2 = $('.small_news_box').offset().top;
                    var section4_box1 = $('.employ_box').offset().top;
                    var section4_box2 = $('.shop_box').offset().top;
                    if(ws > section3_box1 - 700){
                        $('.news_image_wrap').css("transform", "translate(0px, 0px)").css("opacity", "1");
                    }
                    if(ws > section3_box2 - 700){
                        $('.small_news_box').css("transform", "translate(0px, 0px)").css("opacity", "1");
                    }
                    if(ws > section4_box1 - 700){
                        $('.employ_box').css("transform", "translate(0px, 0px)").css("opacity", "1");
                    }
                    if(ws > section4_box2 - 700){
                        $('.shop_box').css("transform", "translate(0px, 0px)").css("opacity", "1");
                    }
                });
            });