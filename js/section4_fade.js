            $(document).ready(function(){
                $('.employ_box').mouseenter(function(){
                    $('.black_background2').stop().fadeIn(750);
                    $('.visible_image1').stop().fadeOut(550);
                    $('.hidden_image1').stop().fadeIn(550);
                }).mouseleave(function(){
                    $('.black_background2').stop().fadeOut(750);
                    $('.hidden_image1').stop().fadeOut(550);
                    $('.visible_image1').stop().fadeIn(550);
                });

                $('.shop_box').mouseenter(function(){
                    $('.black_background3').stop().fadeIn(750);
                    $('.visible_image2').stop().fadeOut(550);
                    $('.hidden_image2').stop().fadeIn(550);
                }).mouseleave(function(){
                    $('.black_background3').stop().fadeOut(750);
                    $('.hidden_image2').stop().fadeOut(550);
                    $('.visible_image2').stop().fadeIn(550);
                });

            });