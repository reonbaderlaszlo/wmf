(function() {

    window.Popup = (function() {

        var o;

        function Popup() {
            o = this;
        }

        Popup.prototype.open = function(popup, text, onClose) {
            if ($('.popup.' + popup).length) {
                $('.overlay').show();

                var top = $(window).height() / 2 + $(document).scrollTop() - $('.popup.' + popup).outerHeight() / 2;
                if (top < 0)
                    top = 5;
                $('.popup.' + popup).css('margin-top', top);

                if (text)
                    $('.popup.' + popup + ' p').html(text);

                $('.popup.' + popup + ' .close').unbind('click');

                if (onClose) {
                    if (typeof onClose === 'function') {
                        $('.popup.' + popup + ' .close').click(function() {
                            onClose();
                        });
                    }
                } else {
                    $('.popup.' + popup + ' .close').click(function() {
                        o.close(popup);
                    });
                    $('.overlay').click(function() {
                        o.close(popup);
                    });
                }

                $('.popup.' + popup).fadeIn('fast');
            }
        };

        Popup.prototype.close = function(popup) {
            if (popup)
                $('.popup.' + popup).fadeOut('fast');
            else
                $('.popup').fadeOut('fast');
            $('.overlay').hide();
        };

        return Popup;

    })();

    window.Wmf = (function() {

        var o, priv = {};

        function Wmf() {
            o = this;
            priv.init();
        }

        Wmf.prototype.Popup = new Popup();

        priv.init = function() {
            var that = this;
        };

        return Wmf;

    })();

})();
