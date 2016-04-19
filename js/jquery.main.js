$(function(){

    $( '.header-menu__wrap' ).each( function() {
        Menu( $( this ) );
    });

} );

var Menu = function( obj ) {

    //private properties
    var _obj = $( this ),
        _objBtn = $( '.header-menu__btn'),
        _menu = $( '.header-menu' ),
        _items = $( '.header-menu__has-sub' ),
        _window = $( window );

    //private methods
    var _addEvents = function() {

            _objBtn.on( {
                click: function() {
                    var curElem = _objBtn.parent();
                    if (curElem.hasClass( 'active' )) {
                        curElem.removeClass( 'active' );
                    } else {
                        curElem.addClass( 'active' );
                    }
                    if (event.stopPropagation) {
                        event.stopPropagation();
                    } else {
                        event.cancelBubble = true;
                    }
                }
            });

            _items.on( {
                click: function() {

                    if ( $( window ).width() < 768 ) {

                        var curElem = $( this ),
                            curMenu = curElem.find( 'ul' );

                        if ( curMenu.is( ':visible' ) ) {
                            curMenu.slideUp(300);
                            curElem.removeClass('open');
                        }
                        else {
                            curMenu.slideDown(300);
                            curElem.addClass('open');
                        }
                        if ( event.stopPropagation ) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                }
            });

            $( 'body' ).on( {

                click: function( e ) {

                    if ( _window.width() < 768) {

                        var elem = $( e.target );

                        var curElem = $( '.header-menu__wrap>li' ),
                            curClose = _objBtn.parent(),
                            curMenu = curElem.find( 'ul' );

                        if ( curMenu.is( ':visible' )) {
                            curMenu.slideUp(300);
                            curElem.removeClass('open');
                        }
                        /*if( curClose.hasClass( 'active' ) ){
                            curClose.removeClass('active');
                        }*/
                    }
                }
            });
            _window.resize( function() {

                var curElem = _objBtn.parent();

                if (curElem.hasClass( 'active' )) {
                    curElem.removeClass( 'active' );
                }

            });

            _window.scroll( function() {
                if ( $( this ).scrollTop() > 170 && _menu.hasClass( 'default' ) && _window.width() > 768 ) {
                    _menu.fadeOut( 0, function() {
                        $(this).removeClass( 'default' )
                            .addClass( 'fixed transbg' )
                            .fadeIn(0);
                    });
                } else if( $( this ).scrollTop() <= 170 && _menu.hasClass( 'fixed' ) ) {
                    _menu.fadeOut( 0,function(){
                        $( this ).removeClass( 'fixed transbg' )
                            .addClass( 'default' )
                            .fadeIn(0);
                    });
                }
            });

            _menu.hover(
                function() {
                    if( $( this ).hasClass( 'fixed' ) ){
                        $( this ).removeClass( 'transbg' );
                    }
                },
                function(){
                    if( $( this ).hasClass( 'fixed' ) ){
                        $( this ).addClass( 'transbg' );
                    }
                });
        },
        _init = function() {


            _addEvents();
        };

    //public properties

    //public methods

    _init();
};