/* ios safari 100vh 문제 해결안 */
window.addEventListener("DOMContentLoaded", function (ev) {
    // css > :root >> --app-height: 0px;
    // height: var(--app-height);

    const { innerHeight } = window;
    document.documentElement.style.setProperty("--app-height",`${innerHeight}px`);
});



/* ====================================================================================================================
* Browser Start
* ====================================================================================================================*/
// 브라우저 버전 체크
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


// 브라우저 체크
function getBrowser() {
    const browsers = [
        'Chrome', 'Opera',
        'WebTV', 'Whale',
        'Beonex', 'Chimera',
        'NetPositive', 'Phoenix',
        'Firefox', 'Safari',
        'SkipStone', 'Netscape', 'Mozilla',
    ];

    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.includes("edg")) {
        return "Edge";
    }

    if (userAgent.includes("trident") || userAgent.includes("msie")) {
        return "Internet Explorer";
    }

    return browsers.find((browser) => userAgent.includes(browser.toLowerCase())) || 'Other';
}


// 모바일, PC 접속 체크
function deviceFormCheck() {
    const user = navigator.userAgent || navigator.vendor || window.opera;
    const isIpadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(user);

    if (isMobileDevice || isIpadOS) {
        return "mobile";
    } else {
        return "pc";
    }
}


// 모바일 기기 체크
function deviceOSCheck() {
    var hw = "";
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

    if ( varUA.indexOf('android') > -1) {
        //안드로이드
        hw = "and";
    } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
        //IOS
        hw = "ios";
    } else {
        //아이폰, 안드로이드 외
        hw = "";
    }

    return hw;
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

});
