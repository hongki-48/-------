/* ====================================================================================================================
* Browser Start
* ====================================================================================================================*/
//HTML5 표준이 정해져 있다.
var winWidth = window.innerWidth,                                       //창가로 사이즈
    winHeight = window.innerHeight,                                     //창세로 사이즈
    bodyScoll = $(window).scrollTop();                                  //스크롤 위치



//브라우저 버전 체크
var IEVersionCheck = function() {

    var word,
        version = "N/A",
        agent = navigator.userAgent.toLowerCase(),
        name = navigator.appName;

    // IE old version ( IE 10 or Lower )
    if ( name == "Microsoft Internet Explorer" ) word = "msie ";

    else {
        // IE 11
        if ( agent.search("trident") > -1 ) word = "trident/.*rv:";

        // IE 12  ( Microsoft Edge )
        else if ( agent.search("edge/") > -1 ) word = "edge/";
    }

    var reg = new RegExp( word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})" );
    if (  reg.exec( agent ) != null  )
        version = RegExp.$1 + RegExp.$2;

    return version;
};


//Side Navi
function SideMenu() {
	$( "#aside .gnb > ul > li > ul > li" ).each(function(i) {
        const liCount = $(this).find('li').length;
        if(liCount > 0) {
            $(this).children('a').addClass('drop');

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

    //IE하위 브라우저시 실행
    if(IEVersionCheck() <= 11) {
        var error_browser = '';
        error_browser += '<div class="not-browser">';
        error_browser += '  <div class="warning"><span></span></div>';
        error_browser += '  <h1 class="error-title">현재 사용중인 브라우저는 지원되지 않습니다.<br><span class="sub">(In this broser isn&#39;t supported.)</span></h1>';
        error_browser += '  <p class="error-text">Microsoft의 지원 종료 된 브라우저를 사용하고 있습니다.</p>';
        error_browser += '  <p class="error-text">최신 버전의 Chroem, Safari, Firefox, Microsoft Edge<br>브라우저를 이용해 주세요.</p>';
        error_browser += '</div>';

        $('body').html(error_browser);
    }
    else {
    	//Common
        SideMenu();
    }

});
