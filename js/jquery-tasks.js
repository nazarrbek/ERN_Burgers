$(document).ready(function () {
    console.log("jQuery is ready!");

    /* ===== Task 5: Animated Number Counter ===== */
    $('.counter').each(function () {
        var $this = $(this);
        var target = +$this.attr('data-target');
        $({ countNum: 0 }).animate(
            { countNum: target },
            {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum + '+');
                },
            }
        );
    });

    /* ===== Task 6: Loading Spinner on Submit ===== */
    $('#registerForm').on('submit', function (e) {
        e.preventDefault();
        var $btn = $('#submitBtn');
        $btn.prop('disabled', true);
        var originalText = $btn.text();
        $btn.html('<span class="spinner-border spinner-border-sm me-2"></span>Please wait...');

        // Simulate server delay
        setTimeout(function () {
            $btn.prop('disabled', false).text(originalText);
            $('#toast').fadeIn(400).delay(2500).fadeOut(400);
        }, 2000);
    });

    /* ===== Task 7: Notification Toast ===== */
    // Toast triggered after form submission (handled in Task 6)

    /* ===== Task 8: Copied to Clipboard Button ===== */
    $('#copyBtn').on('click', function () {
        var text = $('#promoText').text();
        navigator.clipboard.writeText(text);
        $('#copyTooltip').fadeIn(300).delay(1500).fadeOut(300);
        $(this).text('✔ Copied!');
        setTimeout(() => $(this).text('Copy'), 1500);
    });

    /* ===== Task 9: Lazy Loading Images ===== */
  function lazyLoad() {
    $('.lazy-img').each(function () {
        var $img = $(this);
        if ($img.attr('src') && $img.attr('src') !== "") return; // уже загружено

        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();
        var imgTop = $img.offset().top;
        var imgBottom = imgTop + $img.height();

        // если хоть часть картинки видна
        if ((imgBottom >= windowTop) && (imgTop <= windowBottom)) {
            $img.hide().attr('src', $img.data('src')).fadeIn(800);
        }
    });
}

// вызываем при загрузке, скролле и ресайзе
$(window).on('scroll resize', lazyLoad);
$(document).ready(function () {
    lazyLoad();
});


$(window).on('scroll resize', lazyLoad);
lazyLoad(); // проверка при загрузке


    $(window).on('scroll', lazyLoad);
    lazyLoad(); // initial check
});
