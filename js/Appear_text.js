            $(document).ready(function(){
                function AppearText() {
                    $(".swiper_text1").delay(200).animate({opacity:1, right: 55}, 1000);
                    $(".swiper_text2").delay(3500).animate({opacity:1, top: 5}, 1000);
                    $(".swiper_text3").delay(8000).animate({opacity:1, top: 150}, 1000);
                
                }
                setInterval(AppearText, 2000);
            });