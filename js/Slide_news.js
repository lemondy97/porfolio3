	$(document).ready(function(){
                function Rotating_News(){
                    $('.slide').stop().animate({marginLeft: -640}, function(){
                        $('.slide li:first').appendTo('.slide');
                            $('.slide').css({marginLeft:0});
                    });

                    i++;
                    if(i > $('.small_news_box li:last').index()){
                        i = 0;
                    }
                    $('.small_news_box li img').eq(i).stop().fadeIn(1000);
                    $('.small_news_box li img').eq(i-1).stop().fadeOut(1000);
                    

                }

                function Left(){
                    $('.slide li:last').prependTo('.slide');
                        $('.slide').css({marginLeft: -640});
                            $('.slide').stop().animate({marginLeft: 0});
                }

                function Right(){
                    $('.slide').stop().animate({marginLeft: -640}, function(){
                        $('.slide li:first').appendTo('.slide');
                            $('.slide').css({marginLeft: 0});
                    });            
                }

                var i = 0;

                function Increase(){
                    i++;
                    if(i > $('.small_news_box li:last').index()){
                        i = 0;
                    }
                    $('.small_news_box li img').eq(i).stop().fadeIn(1000);
                    $('.small_news_box li img').eq(i-1).stop().fadeOut(1000);
                }

                function Decrease(){
                    i--;
                    if(i > $('.small_news_box li:last').index()){
                        i = 0;
                    }
                    $('.small_news_box li img').eq(i).stop().fadeIn(1000);
                    $('.small_news_box li img').eq(i+1).stop().fadeOut(1000);
                }


                setInterval(Rotating_News, 4000);

                $('.left').click(function(){
                    Left();
                    Decrease();

                });

                $('.right').click(function(){
                    Right();
                    Increase();
                });
            });