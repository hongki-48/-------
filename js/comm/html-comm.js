/* ====================================================================================================================
* Layout
* ====================================================================================================================*/
//Side Navi
function SideMenu() {
	$( "#aside .gnb > ul > li > ul > li" ).each(function(i) {
        const liCount = $(this).find('li').length;

        //3Depth 존재여부 체크
        if(liCount > 0) {
            $(this).children('a').addClass('drop');

            // 2Depth Active시 3Depth 메뉴 활성화
            if($(this).hasClass('active') === true) {
                $(this).children('ul').show();
                $(this).children('a').addClass('active');
            }

            //클릭 이벤트
            $(this).children('a').on('click', function() {
                if($(this).next('ul').is(":hidden")) {
                    $(this).addClass('active');
                    $(this).next('ul').slideDown();
                } else {
                    $(this).removeClass('active');
                    $(this).next('ul').slideUp();
                }

                return false;
            })
        }
    });
}




/* ====================================================================================================================
* Document Ready
* ====================================================================================================================*/
$(document).ready(function() {

    setTimeout(() => {
        SideMenu();
    }, 500)

});
