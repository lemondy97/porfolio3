                $(function(){
                $(window).scroll(function(){
                    var location = $(this).scrollTop();
                    var section1_box1 = $('.career_people_box1').offset().top;
                    var section1_box2 = $('.career_people_box2').offset().top;
                    var section1_box3 = $('.career_people_box3').offset().top;
                    var section2_boxes = $('.welfare_box').offset().top;
                    var section3_boxes = $('.circle').offset().top;
                    var section4_buttons = $('.email_button').offset().top;
                    if(location > section1_box1 - 700){
                        $('.career_people_box1').css("transform","translateX(0px)").css("opacity","1");
                    }
                    if(location > section1_box2 - 700){
                        $('.career_people_box2').css("transform","translateX(0px)").css("opacity","1");
                    }
                    if(location > section1_box3 - 700){
                        $('.career_people_box3').css("transform","translateX(0px)").css("opacity","1");
                    }
                    if(location > section2_boxes - 700){
                        $('.welfare_box').css("transform","translateY(0px)").css("opacity","1");
                    }
                    if(location > section3_boxes - 700){
                        $('.circle').css("transform","translateY(0px)").css("opacity","1");
                    }
                    if(location > section4_buttons - 700){
                        $('.email_button').css("transform","translateY(0px)").css("opacity","1");
                    }
                });
            });