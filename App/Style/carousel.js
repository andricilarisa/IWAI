 var popupCarousel = function() {
            $('#slider img').hide();
            $('#slider img').first().show();
            $('a.prev, a.next').css('cursor', 'pointer');

            var stor = 0;
            var maxstor = ($('#slider img').get().length - 1);
            var lastShownStor = 0;
            var popups = $('#slider img').get();

            $('a.next, a.prev').bind('click', function(el) {
                el.preventDefault();

                if($(this).hasClass('next')) {
                    if(stor < maxstor)
                        stor++;
                    else
                        stor=0;
                } else { //prev
                    lastShownStor = stor;
                    if(stor > 0)
                        stor--;
                    else
                        stor=maxstor;
                }

                for (var i=0; i < popups.length; i++ ) {
                  var popup = popups[i];
                      if(i != stor){
                              $(popup).css('display', 'none');
                      }
                      else{
                          $(popup).css('display', 'block');
                      }
                }
            });
        }
