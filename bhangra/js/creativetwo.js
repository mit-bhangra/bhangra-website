(function($) {
        "use strict"; // Start of use strict

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });

        // Collapse
        var $myGroup = $('#services');
        $myGroup.on('show.bs.collapse', '.collapse', function() {
            $myGroup.find('.collapse.in').collapse('hide');
        });

        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 51
        });

        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });

        // Offset for Main Navigation
        $('#mainNav').affix({
            offset: {
                top: 100
            }
        })

        // Initialize and Configure Scroll Reveal Animation
        window.sr = ScrollReveal();
        sr.reveal('.sr-icons', {
            duration: 600,
            scale: 0.3,
            distance: '0px'
        }, 200);
        sr.reveal('.sr-button', {
            duration: 1000,
            delay: 200
        });
        sr.reveal('.sr-contact', {
            duration: 600,
            scale: 0.3,
            distance: '0px'
        }, 300);

        // Initialize and Configure Magnific Popup Lightbox Plugin
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });

        //Code for launching the modal video
        $(document).on('click', 'a.launch-modal', function(event)) {
            event.preventDefault();
            $('#' + $(this).data('modal-id')).modal();
        });


    // $(document).on('click', 'a.close', function(event)) {
    //   $(this).find('modal-video')[0].pause();
    // });

    ////attempt to code video to stop on close, but failed
    // $('#modal-video').modal({
    //   show: false
    // }).on('hidden.bs.modal', function() {
    //   $(this).find('video')[0].pause();
    // });


    //Allow the scroll-to-top button to work
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }
    });

    $(document).on('click', 'a.scrollTop', function(e)) {
        e.preventDefault();
        $('html, body').animate({ scroll - top: 0 }, 800);
        return false;
    });

})(jQuery); // End of use strict

//adapted from website design templates done by Erlen (erlen.co.uk)

// Auto resize input
function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);


console.clear();
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function() {

    var textareas = document.querySelectorAll('.expanding'),

        resize = function(t) {
            t.style.height = 'auto';
            t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
            t.style.height = (t.scrollHeight + t.offset) + 'px';
            t.style.overflow = '';
        },

        attachResize = function(t) {
            if (t) {
                console.log('t.className', t.className);
                t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

                resize(t);

                if (t.addEventListener) {
                    t.addEventListener('input', function() { resize(t); });
                    t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
                }

                t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
            }
        };

    // IE7 support
    if (!document.querySelectorAll) {

        function getElementsByClass(searchClass, node, tag) {
            var classElements = new Array();
            node = node || document;
            tag = tag || '*';
            var els = node.getElementsByTagName(tag);
            var elsLen = els.length;
            var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
            for (i = 0, j = 0; i < elsLen; i++) {
                if (pattern.test(els[i].className)) {
                    classElements[j] = els[i];
                    j++;
                }
            }
            return classElements;
        }

        textareas = getElementsByClass('expanding');
    }

    for (var i = 0; i < textareas.length; i++) {
        attachResize(textareas[i]);
    }

})();