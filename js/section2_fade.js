            $(document).ready(function(){
                $(".slide_image2, .slide_image3").hide();

                $(".product_menu1").click(function(){
                    $(".slide_image1").stop().fadeIn(1000);
                    $(".slide_image2, .slide_image3").stop().fadeOut(1000);
                    $(".hidden_text4").stop().fadeIn(1000);
                    $(".hidden_text5, .hidden_text6").stop().fadeOut(1000);
                    $(".logo_hover_box1").stop().fadeIn(1000);
                    $(".logo_hover_box2, .logo_hover_box3").stop().fadeOut(1000);
                });
                $(".product_menu2").click(function(){
                    $(".slide_image2").stop().fadeIn(1000);
                    $(".slide_image1, .slide_image3").stop().fadeOut(1000);
                    $(".hidden_text5").stop().fadeIn(1000);
                    $(".hidden_text4, .hidden_text6").stop().fadeOut(1000);
                    $(".logo_hover_box2").stop().fadeIn(1000);
                    $(".logo_hover_box1, .logo_hover_box3").stop().fadeOut(1000);
                });
                $(".product_menu3").click(function(){
                    $(".slide_image3").stop().fadeIn(1000);
                    $(".slide_image1, .slide_image2").stop().fadeOut(1000);
                    $(".hidden_text6").stop().fadeIn(1000);
                    $(".hidden_text4, .hidden_text5").stop().fadeOut(1000);
                    $(".logo_hover_box3").stop().fadeIn(1000);
                    $(".logo_hover_box1, .logo_hover_box2").stop().fadeOut(1000);
                });

                $(".logo_hover_box1").mouseenter(function(){
                    $(this).css('background-image', 'url()');
                    $(".hidden_text1").stop().fadeIn(1000);
                    $(".hidden_text2, .hidden_text3").stop().fadeOut(1000);
                });
                $(".logo_hover_box1").mouseleave(function(){
                    $(this).css('background-image', 'url(img/main/lego_hover1.png)')
                    $(".hidden_text1").stop().fadeOut(1000);
                });
                $(".logo_hover_box2").mouseenter(function(){
                    $(this).css('background-image', 'url()');
                    $(".hidden_text2").stop().fadeIn(1000);
                    $(".hidden_text1, .hidden_text3").stop().fadeOut(1000);
                });
                $(".logo_hover_box2").mouseleave(function(){
                    $(this).css('background-image', 'url(img/main/lego_hover2.jpg)')
                    $(".hidden_text2").stop().fadeOut(1000);
                });
                $(".logo_hover_box3").mouseenter(function(){
                    $(this).css('background-image', 'url()');
                    $(".hidden_text3").stop().fadeIn(1000);
                    $(".hidden_text1, .hidden_text2").stop().fadeOut(1000);
                });
                $(".logo_hover_box3").mouseleave(function(){
                    $(this).css('background-image', 'url(img/main/lego_hover3.jpg)')
                    $(".hidden_text3").stop().fadeOut(1000);
                });
            });