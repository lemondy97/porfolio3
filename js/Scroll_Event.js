            const Scroll_move = 200;
            const ScrollElementList1 = document.querySelectorAll('.scroll_event');

            const Scroll_Animation = function() {
            for(const element of ScrollElementList1){
            if(!element.classList.contains('show')){
              if(window.innerHeight > element.getBoundingClientRect().top + Scroll_move) {
                element.classList.add('show');
                                                }
                                            }
                                        }
                                     }

            window.addEventListener('load', Scroll_Animation);
            window.addEventListener('scroll', Scroll_Animation);