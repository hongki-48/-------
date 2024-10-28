/* ====================================================================================================================
* Html Style (layer popup 등)
* ====================================================================================================================*/
// Layer popup (타켓지정)
function modalShow(obj) {
    var modalWidth = $(obj + ' .modal-content').data('width');
    var modalScroll = $(obj).data('scroll');

    if($(obj).is(":hidden")) {
        // 스크롤 Lock
        $('body').css('overflow', 'hidden');

        // Modal Show
        $(obj + ' .modal-bg').fadeIn();
        $(obj).show();

        // Data Width 있는경우 (모달 가로 크기)
        if(modalWidth > 0) {
            $(obj + ' .modal-content').css('width', modalWidth);
        }

        // Data Scroll 있는경우 (모달 스크롤)
        if(modalScroll == true) {
            $(obj).removeClass('scroll');
            const modalHeight = $(obj + ' .modal-content').outerHeight();
            const winHeight = $(window).height();
            if(modalHeight > winHeight) {
                $(obj).addClass('scroll')
            }
        }

        // Animation
        setTimeout(function() {
            $(obj + ' .modal-content').addClass('transition');
        }, 100);
    }
    else {
        modalHide(obj);
    }

    // 닫기버튼 클릭 시
    $(obj + ' .close').on('click', function() {
        modalHide(obj);
    });
}

function modalHide(obj) {
    // 스크롤 Reset
    $('body').css('overflow', 'visible');

    // Modal Hide
    $(obj + ' .modal-bg').hide();
    $(obj).hide();

    // Animation Reset
    $('.modal-content').removeClass('transition');
}



function classNameRemove(obj, hide) {
    $(obj).removeClass(hide);
}



// Toggle Event
function toggleEvent(id, btn, txt) {
    const target = $(id);
    const speed = 400;
    const btnText = $(btn).find('.txt').text(); // 원본 버튼명

    if(target.is(":hidden")) {
        target.slideDown(speed);
        $(btn).addClass('active');

        //버튼 텍스트 변경
        if(txt != undefined) {
            $(btn).find('.txt').text(txt);
            $(btn).attr('data-text', btnText);
        }
    } else {
        target.slideUp(speed);
        $(btn).removeClass('active');

        //버튼 텍스트 변경
        if(txt != undefined) {
            $(btn).find('.txt').text($(btn).data('text'));
        }
    }
}
