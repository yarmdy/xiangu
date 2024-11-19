const {getNewsListByTotal:getList,createPagerHtml} = require('./scripts/apirequest.js')
require('./scripts/vue-2.7.14.min.js')
require('./scripts/comMethods.min.js')
require('./scripts/jzUtils2.min.js')
require('./scripts/polyfill.min.js')
require('./scripts/jzRequest.min.js')
require('./scripts/jzUtils.min.js')
require('./scripts/bizShared.min.js')
require('./scripts/jquery-core.min.js')
require('./scripts/jquery-mousewheel.min.js')
require('./scripts/frontend.min.js')
require('./scripts/jquery-ui-core.min.js')
require('./scripts/partitionSite.min.js')
require('./scripts/2052.min.js')
require('./scripts/site.min.js')
require('./scripts/module.min.js')

require('./scripts/photoSlide.min.js')
require('./scripts/imageEffect.min.js')

require('./scripts/index.min.js')

require('./scripts/module_webRightBar.min.js')

window.contentString=`{"success":true, "msg":"加载成功", "rtInfo" : "{\\"topBar\\":\\"\\\\t<div id='memberBar' class='memberBarV2'>    <div class='memberBarLogin'><a href='javascript:Site.memberLogin();'>请登录<\\\\/a><a href='javascript:Site.memberSignup();'>注册<\\\\/a><a class='otherLoginItem l_Btn' id='t_wxLgn'><span class='memberBarIcon wx_icon'><\\\\/span>微信登录<\\\\/a>    <\\\\/div>    <div class='memberBarArrowRight'><div class='memberBarArrowRightIcon'><\\\\/div><\\\\/div>    <div class='memberBarLinkListContainer'>    <div class='memberBarLinkListWrap'>    \\\\t<div class='memberBarLinkList'><a id='mobiWeb' ><span class='memberBarIcon memberBarIcon_mobi'><\\\\/span>二维码<\\\\/a>\\\\t\\\\t\\\\t\\\\t<div class='mobiWebPanel'>\\\\t\\\\t\\\\t\\\\t\\\\t<img src='${window.qrcodePath}' alt='查看手机网站'>\\\\t\\\\t\\\\t\\\\t\\\\t<div>查看手机网站<\\\\/div>\\\\t\\\\t\\\\t\\\\t<\\\\/div><a id='addBookMark' onclick='Fai.addBookmark(top.document.title, location.origin);'><span class='memberBarIcon memberBarIcon_addBookMark'><\\\\/span>收藏本站<\\\\/a><a id='myProfile' href='/mCenter.jsp'  target='_blank'>我的资料<\\\\/a>    \\\\t<\\\\/div>    \\\\t<\\\\/div>    <\\\\/div>    <div class='memberBarArrowLeft'><div class='memberBarArrowLeftIcon'><\\\\/div><\\\\/div>    <div id='topBarMsg'><\\\\/div>\\\\t<\\\\/div>\x3Cscript type='text/javascript' language='javascript'>Site.initNewWXLogin('[{\\\\\\\\\\\\\\"fieldKey\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"姓名\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"placeholder\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"must\\\\\\\\\\\\\\":true,\\\\\\\\\\\\\\"type\\\\\\\\\\\\\\":0,\\\\\\\\\\\\\\"propContent\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"otherLoginMust\\\\\\\\\\\\\\":false},{\\\\\\\\\\\\\\"fieldKey\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"email\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"邮箱\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"placeholder\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"must\\\\\\\\\\\\\\":false,\\\\\\\\\\\\\\"type\\\\\\\\\\\\\\":0,\\\\\\\\\\\\\\"propContent\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"otherLoginMust\\\\\\\\\\\\\\":false},{\\\\\\\\\\\\\\"fieldKey\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"mobile\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"name\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"手机\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"placeholder\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"must\\\\\\\\\\\\\\":true,\\\\\\\\\\\\\\"type\\\\\\\\\\\\\\":0,\\\\\\\\\\\\\\"propContent\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"otherLoginMust\\\\\\\\\\\\\\":false}]', true,200, 't_wxLgn','{\\\\\\"skipUrl\\\\\\":\\\\\\"/index.jsp\\\\\\",\\\\\\"isPhotoGroup\\\\\\":false}');\\\\nSite.loginSiteInit('xp25623701', 'fkw.com', false, '');\\\\n<\\\\/script>\\",\\"visitorCounter\\":\\"<div class='visitorCounterPosition'><table><tr><td align='center'><div class='visitorCounterBg visitorCounter_cp_0'><\\\\/div><div class='visitorCounterBg visitorCounter_cp_0'><\\\\/div><div class='visitorCounterBg visitorCounter_cp_0'><\\\\/div><div class='visitorCounterBg visitorCounter_cp_0'><\\\\/div><div class='visitorCounterBg visitorCounter_cp_0'><\\\\/div><div class='visitorCounterBg visitorCounter_cp_0'><\\\\/div><div class='visitorCounterBg visitorCounter_cp_0'><\\\\/div><div class='visitorCounterBg visitorCounter_cp_0'><\\\\/div><\\\\/td><\\\\/tr><\\\\/table><\\\\/div>\\",\\"webRightBar\\":{\\"rightBarOpen\\":true,\\"Logined\\":false,\\"mallMember\\":true,\\"choiceCurrencyVal\\":\\"￥\\",\\"memberInfo_out\\":\\"{\\\\\\"preImgPath\\\\\\":\\\\\\"//0.ss.508sys.com/image/tx3.png\\\\\\",\\\\\\"imgPath\\\\\\":\\\\\\"//0.ss.508sys.com/image/tx3.png\\\\\\",\\\\\\"imgStyle\\\\\\":\\\\\\"\\\\\\"}\\",\\"resPath\\":\\"//1.ss.508sys.com/js/dist/libs/module_webRightBar.min.js?v=202408051114\\"},\\"moduleDomList\\":[]}", "memberInfo" : "{}"}`;
window.Hosts = {
    "portal": "i.fkw.com",
    "home": "www.fkw.com",
    "mHome": "m.fkw.com",
    "jzHome": "jz.fkw.com",
    "jzPortal": "i.jz.fkw.com",
    "qzHome": "qz.fkw.com",
    "qzPortal": "i.qz.fkw.com",
    "mallHome": "mall.fkw.com",
    "mallPortal": "i.mall.fkw.com",
    "ykHome": "yk.fkw.com",
    "ykPortal": "i.yk.fkw.com",
    "hdHome": "hd.fkw.com",
    "hdPortal": "i.hd.fkw.com",
    "eduHome": "edu.fkw.com",
    "eduPortal": "i.edu.fkw.com",
    "ktHome": "kt.fkw.com",
    "ktPortal": "i.kt.fkw.com",
    "mpHome": "i.mp.fkw.com",
    "yxHome": "yx.fkw.com",
    "yxPortal": "i.yx.fkw.com",
    "domainRecord": "domain.fkw.com",
    "oss": "o.fkw.com",
    "JSSdkReport": "report.fkw.com",
    "homeDomain": "fkw.com"
};


    window._perfGray = true;
    window._portalHost = "i.fkw.com";
    window._mallJzallsiteHost = "i.mall.fkw.com";
    window._wid = 300;
if (typeof Fai == 'undefined') {
    Fai = {};
    Fai.top = window;
}
    window._lcid = 2052
    window._isNoFormIndex = true
    window._curLanCode = 'cn'
    window._openStaticUrl = false
    window.defaultLcid = 2052
    window._aid = 27538880
    window.statId = -1
    window._debug = false
    window._isPre = false
    window._siteDomain = '//www.ychxmt.com'
    window._resRoot = '//0.ss.508sys.com'
    window._colId = 102
    window.newsDetailPage = 7
    window.productDetailPage = 8
    window.photoDetailPage = 22
    window._fromColId = -1
    window._designAuth = false
    window._manageMode = false
    window._oem = false
    window.siteVipBeforeExpireDays = 484
    window.siteVipBeforeExpireHours = 0
    window._getVipVipStartTime = {
    "siteVipStartMoreThan7Days": true,
    "siteVipStartMoreThan30DaysAllSite": true,
    "siteVipVipStartTime": "2022-03-18 15:50:34"
}
    window._siteVer = 30
    window._fdpSiteVer = 3
    window._manageStatus = false
    window.__noTable = true
    window.__noGmain = true
    window._vueStyleGrayTest = false
    window._mutationObLog = false
    window._simpleTextGrayTest = true
    window._mutationObGrayTest = true
    window._openRemoveUrlArgs = false
    window._setReqHttpOnlyCookie = true
    window._useFullUrl = false
    window.newUserHasAddModule = true
    window._floatImgLazyLoadGrayTest = true
    window._showFirstOpenRapid = false
    window._isTemplateVersion2 = true
    window._uiMode = false
    window._openBannerLazyOptimize = true
    window.isWaterMarkUser = false;

Fai.top._oldFooterGuideUrl = '//jz.fkw.com/blog/5405';
_cusSiteWidth = 1440;
Fai.top._uploadImgSizeLimit = 10;
Fai.top.isReActive = false;
;Fai.top.jzCustodyExpireShowAD = false;
Fai.top.transformatinTrackingGlobalModel = {
    "onlyHasFreeDomain": false,
    "openTransformationTracking": false
};
Fai.top.openMultiPdInquiry = false;

    window.__jzFrontendResRoot__ = '//jzfe.faisys.com';

    window._webRightBarMyItemList = []
    window._extendParam = {
    "skipUrl": "/index.jsp",
    "isPhotoGroup": false
}
$(function() {
    if (false) {
        $LAB.script('//1.ss.508sys.com/js/dist/libs/module_webRightBar.min.js?v=202408051114').wait(function() {
            new Site.webRightBar.init(false,true,'￥',{
                "preImgPath": "//0.ss.508sys.com/image/tx3.png",
                "imgPath": "//0.ss.508sys.com/image/tx3.png",
                "imgStyle": ""
            });
        });
    }
    Site.initNewWXLogin('[{\"fieldKey\":\"name\",\"name\":\"姓名\",\"placeholder\":\"\",\"must\":true,\"type\":0,\"propContent\":\"\",\"otherLoginMust\":false},{\"fieldKey\":\"email\",\"name\":\"邮箱\",\"placeholder\":\"\",\"must\":false,\"type\":0,\"propContent\":\"\",\"otherLoginMust\":false},{\"fieldKey\":\"mobile\",\"name\":\"手机\",\"placeholder\":\"\",\"must\":true,\"type\":0,\"propContent\":\"\",\"otherLoginMust\":false}]', 'true', '200', 'rb_wxLogin', '{"skipUrl":"/index.jsp","isPhotoGroup":false}');
});

try {

    Fai.top = window;
    Fai.top.manageAuth = false;
    Fai.top.mobiDesignAuth = false;
    Fai.top.packManualVersion = false;
    Fai.top._onlyHasBannerEditAuth = false;
    Fai.top._formManageAuth = false;
    Fai.top.openMsgSearch = false;
    Fai.top.pageName = "新闻资讯";
    Fai.top._reqArgs = "";
    Fai.top.isNeed = false;
    Fai.top.businessId = 2;
    Fai.top.sceneId104 = 104;
    Fai.top.sceneId105 = 105;
    Fai.top.sceneId106 = 106;
    Fai.top.siteHost = "xp25623701.jz.fkw.com";
    Fai.top._isLoginO = false;
    Fai.top.isSale = false;
    Fai.top.domainBind = 0;
    Fai.top.enableGuide = false;
    Fai.top._templateFrame = 1078;
    Fai.top._majorColorData = "#f13a3a";
    Fai.top.isJzAllSiteV2 = true;
    Fai.top.supportHttps = true;
    Fai.top.jzVersion = 3;
    Fai.top._supportFileTypeList = ["jpg", "jpeg", "png", "pdf", "gif", "docx", "txt", "pptx", "rar", "mp3", "mp4", "wav", "wma", "flac", "xls", "xlsx", "zip", "doc"];
    Fai.top.contextMenuDisabled = false;
    Fai.top._navStyleV2Data = {
        "no": true,
        "s": 3084,
        "snt": 0,
        "onft": false,
        "nmove": 1,
        "oinc": false,
        "nhi": true,
        "ns": {
            "y": 1,
            "w": 916,
            "h": 48
        },
        "np": {
            "y": 1,
            "t": 0,
            "l": 297
        },
        "nct": {
            "y": 0,
            "cw": 814
        },
        "nal": {
            "y": 0,
            "a": 0
        },
        "nifc": {
            "y": 1,
            "ic": "rgba(255, 255, 255, 0)",
            "sc": "rgba(255, 255, 255, 0)"
        },
        "nif": {
            "y": 1,
            "fs": 15,
            "ff": "微软雅黑",
            "ic": "rgba(255, 255, 255, 1)",
            "sc": "rgba(236, 106, 24, 1)",
            "w": 0,
            "i": 0,
            "d": 0
        },
        "nis": {
            "y": 1,
            "w": 100,
            "h": 48
        },
        "nisp": {
            "y": 0,
            "s": 0,
            "h": 0,
            "c": ""
        },
        "nir": {
            "y": 0,
            "s": 0
        },
        "nib": {
            "y": 0,
            "c": "rgba(0, 0, 0, 0)",
            "s": 0,
            "t": true,
            "b": true,
            "l": true,
            "r": true
        },
        "snfc": {
            "y": 0
        },
        "snf": {
            "y": 0,
            "fs": 14,
            "ff": "微软雅黑",
            "ic": "rgb(52, 52, 52)",
            "sc": "rgb(241, 58, 58)",
            "ta": 1,
            "w": 0,
            "i": 0,
            "d": 0
        },
        "snr": {
            "y": 0
        },
        "snb": {
            "y": 0,
            "t": true,
            "b": true,
            "l": true,
            "r": true
        },
        "ncb": true,
        "nbg": {
            "y": 2,
            "c": "rgba(255, 255, 255, 0)",
            "f": "",
            "p": ""
        },
        "arrow": {
            "v": false,
            "s": 0
        },
        "nsif": {
            "y": 0,
            "fs": 14,
            "ff": "微软雅黑",
            "ic": "rgb(52, 52, 52)",
            "sc": "rgb(241, 58, 58)",
            "w": 0,
            "i": 0,
            "d": 0
        },
        "ndl": false,
        "ndls": 0,
        "nsucc": false,
        "nscc": "rgba(236, 106, 24, 1)",
        "fts": {
            "nifc": {
                "y": 0,
                "ic": "",
                "sc": ""
            },
            "nif": {
                "y": 0,
                "fs": 12,
                "ff": "",
                "ic": "",
                "sc": "",
                "w": 0,
                "d": 0,
                "i": 0
            },
            "nsif": {
                "y": 0
            },
            "nisp": {
                "y": 0,
                "c": "",
                "s": 0,
                "h": 0
            },
            "nir": {
                "y": 0,
                "s": 0
            },
            "nib": {
                "y": 0,
                "t": true,
                "b": true,
                "l": true,
                "r": true,
                "s": 0,
                "c": ""
            },
            "nbg": {
                "f": "",
                "p": "",
                "y": 0,
                "c": ""
            }
        },
        "snm": {
            "y": 0
        },
        "snlw": {
            "y": 0
        },
        "sntf": {
            "y": 0
        },
        "snab": {
            "y": 0
        },
        "tnfc": {
            "y": 0
        },
        "tnf": {
            "y": 0,
            "fs": 14,
            "ff": "微软雅黑",
            "ic": "rgb(43, 43, 43)",
            "sc": "rgb(255, 192, 1)",
            "ta": 0,
            "w": 0,
            "i": 0,
            "d": 0
        },
        "tnr": {
            "y": 0
        },
        "tnb": {
            "y": 0,
            "t": true,
            "b": true,
            "l": true,
            "r": true
        },
        "ni": {
            "v": false,
            "p": 0,
            "s": false,
            "sv": 24
        },
        "nst": 0,
        "nmw": 1440
    };
    Fai.top.haveMallData = true;
    Fai.top._firstOpenRapid = false;
    Fai.top._newPerform = true;
    Fai.top.resMap = {
        css: {
            highLight: "//2.ss.508sys.com/css/dist/styles/highLight.min.css?v=202402221530",
            paydialog: "//2.ss.508sys.com/css/dist/styles/dialog.min.css?v=202409231110",
            oldColorPicker: "//2.ss.508sys.com/css/comm/colorpicker/colorpicker.min.css?v=202307101206",
            questionwrap: "//2.ss.508sys.com/css/dist/styles/questionwrap.min.css?v=202407231110",
            material: "//fe.508sys.com/material_library_1_0/css/app.min.css?v=202409251655",
            guidePanel: "//2.ss.508sys.com/css/dist/guidePanel.min.css?v=202407231110",
            navPackPanel: "//2.ss.508sys.com/css/dist/styles/packPanel.min.css?v=202407231110"
        },
        js: {
            svgAnime: "//1.ss.508sys.com/js/comm/animate.min.js?v=202307101206",
            domClip: "//1.ss.508sys.com/js/dist/libs/domToImage.min.js?v=202404081140",
            material_vendor: "//fe.508sys.com/material_library_1_0/js/vendor.min.js?v=202409251655",
            material: "//fe.508sys.com/material_library_1_0/js/app.min.js?v=202409251655",
            contextMenu: "//1.ss.508sys.com/js/comm/jquery/jquery-contextMenu.min.js?v=202307101206",
            parallax: "//1.ss.508sys.com/js/comm/jquery/jquery-parallax.min.js?v=202307101206",
            guidePanel: "//1.ss.508sys.com/js/dist/guidePanel.min.js?v=202404081140",
            navPackPanel: "//1.ss.508sys.com/js/dist/libs/packPanelCompon.min.js?v=202402221530",
            swfUpload: "//1.ss.508sys.com/js/comm/SWFUpload2v/swfupload.min.js?v=202307101206",
            jqUpload: "//1.ss.508sys.com/js/comm/SWFUpload2v/jquery.uploadify.min.js?v=202307101206",
            three: "//1.ss.508sys.com/js/comm/three/three.min.js?v=202307101206",
            sphereviewer: "//1.ss.508sys.com/js/comm/three/photo-sphere-viewer.min.js?v=202307101206",
            booking: "//1.ss.508sys.com/js/dist/libs/bookingSubmitPanel.min.js?v=202404081140"
        }
    }
    Fai.top.carousel3D = {};
    Fai.top._siteStat_ndId = -1;
    Fai.top._siteStat_pdId = -1;
    Fai.top.siteTipList = [];
    Fai.top.cutPicture = false;
    Fai.top.isSite = true;

    Fai.top.limit_animation = false;
    Fai.top.limit_pic_effect = false;
    Fai.top.isJzCdnFlowLimit = false;
    Fai.top.isJzDownloadCdnFlowLimit = false;
    Fai.top.isJzDesignRevisionNotice = false;
    Fai.top.webpOptOpen = true;
    Fai.top.viewUrl = 'https://www.ychxmt.com/cn/view.jsp';
    window._Global = {}
    window._newRapidSite = true
    window._canNewsScore = false
    window.bgmCloseToOpen = false
    window._newsGuideJumpToTemplateUrl = 'sf16590494.jz.fkw.com'
    window.isGuide_sample = false
    window._showNewUsersGuide = false
    window._newsGuideClickHelp = false
    window._newsGuideCopyDemo = false
    window._newsGuideReplaceImg = false
    window._newsGuideAddModule = false
    window._newsGuideClickPanel = false
    window.newGuideCreateCol = false
    window.newGuideEditBanner = false
    window.newPhotoSlidesGrayTest = true
    window._loginDays = 1
    window._devMode = false
    window._guideNewUserStep = -1
    window._inGuideNewUser = false
    window._isSupportPreTestUser = false
    window.optingStep = 0
    window.guide_continue = 0
    window._creatNewSite = false
    window._isOpenRapid = false
    window.isEnterRapidFirst = false
    window._newUser = false
    window._colOtherStyleData = {
        "independentList": [],
        "hh": false,
        "fh": false,
        "y": 0,
        "h": 0,
        "layout4Width": 0,
        "layout5Width": 0
    }
    window._templateOtherStyleData = {
        "independentList": [],
        "hh": true,
        "fh": false,
        "h": 814,
        "y": 0,
        "layout4Width": 0,
        "layout5Width": 0
    }
    window._allowedHtmlUrl = false
    window._openHtmlUrl = false
    window._isBUser = false
    window.showQRCode = false
    window.productQRCodeOpen = false
    window._isCliIdBUse = true
    window.manageClose = false
    window.isFirstLogin = false
    window._isMallWeb = false
    window._proSiteQueryStr = ''
        , //by jser
    httpStr = 'https://'
    window._fromModuleCenter = false
    window._fromJzAllSite = false
    window.vipExpireTime = '2026-03-18 15:50:34'
    window._companyGoalIsSite = false
    window._companyGoal11 = 15
    window._headerTopStyle = {
        "hts": -1,
        "hg": {
            "c": "transparent",
            "f": "",
            "r": 3,
            "ps": 0,
            "p": "",
            "y": 0
        },
        "zh": false,
        "hf": false,
        "hfb": {
            "c": "",
            "f": "",
            "r": 3,
            "ps": 0,
            "p": "",
            "y": 0
        },
        "hftt": 1,
        "sfts": false,
        "m": {},
        "bb": {
            "y": 0
        },
        "pres": -1,
        "fsd": {
            "t": 0,
            "dx": 0,
            "dy": 0,
            "f": 6,
            "c": "#000000"
        },
        "se": false
    }
        , // 顶部样式（模板）
    _customHeaderTopStyle = {
        "hts": -1,
        "hg": {
            "f": "",
            "p": "",
            "y": 0,
            "r": 3,
            "ps": 0,
            "c": ""
        },
        "m": {},
        "bb": {
            "y": 0
        },
        "zh": false,
        "pres": -1,
        "hf": false,
        "hfb": {
            "f": "",
            "p": "",
            "y": 0,
            "r": 3,
            "ps": 0,
            "c": ""
        },
        "hftt": 1,
        "sfts": false,
        "fsd": {
            "t": 0,
            "dx": 0,
            "dy": 0,
            "f": 6,
            "c": "#000000"
        },
        "se": false
    }
        , // 自定义顶部样式
    _titleData = {
        "x": "<span style=\"color: rgb(241, 58, 58);\"><span style=\"font-size:27px;\"><div style=\"\" class=\"newPrimaryTitle\">网站模板\u2014空白模板<\/div><\/span><\/span>",
        "fp": false,
        "st": {
            "y": 0,
            "x": "",
            "f": "",
            "c": "",
            "s": 0,
            "i": 0,
            "w": 0,
            "u": 0
        },
        "jm": {
            "y": 0,
            "f": "",
            "ot": 0
        },
        "t": 37,
        "l": 80,
        "s": 27,
        "ins": true,
        "h": true,
        "fl": [],
        "fts2": {
            "f": {
                "c": "",
                "d": -1,
                "w": -1,
                "i": -1
            }
        },
        "f": "",
        "w": 0,
        "c": "",
        "i": 0,
        "u": 0,
        "ps": 0
    };
    _Global.useElevatorNav = false;
    _Global.isUseElevatorNav = true;
    _Global.isHomePage = false;
    _Global.moduleManage = false;
    _Global.newsManage = false;
    _Global._useTemplateBackground = true,
    _Global.openSuspendServ = false,
    _useTemplateLocale = true,
    _localeData = {
        "ms": 7,
        "h": false,
        "x": "中文",
        "y": "English",
        "z": "繁体",
        "v": "日本語",
        "k": "한국어",
        "lo": "ພາສາລາວ",
        "th": "ภาษาไทย",
        "es": "Español",
        "ru": "русский",
        "fra": "français",
        "it": "Italia",
        "de": "Deutsch",
        "ug": "ئۇيغۇرچە",
        "pt": "Português",
        "vi": "Tiếng Việt",
        "msw": "Bahasa Melayu",
        "pl": "Polski",
        "ar": "عربي",
        "tr": "Türkçe",
        "sv": "Svenska",
        "no": "Norsk",
        "lb": "lëtzebuergesch",
        "id": "Bahasa Indonesia",
        "el": "Ελληνικά",
        "fi": "Suomi",
        "da": "Dansk",
        "cs": "Čeština",
        "nl": "Nederlands",
        "bg": "Български",
        "ro": "Română",
        "hu": "Magyar",
        "lt": "lietuvių kalba",
        "lv": "latviski",
        "et": "Eesti keel",
        "hr": "Hrvatski",
        "sk": "Slovenský jazyk",
        "sl": "Slovenščina",
        "fa": "فارسی",
        "he": "עברית",
        "uk": "Українська",
        "ur": "اردو",
        "bn": "বাংলা",
        "is": "íslenskur",
        "sr": "Српски",
        "ca": "Català",
        "km": "កម្ពុជា។",
        "hi": "हिन्दी",
        "kk": "Қазақ тілі",
        "uz": "O'zbek tili",
        "lp": false,
        "f": "",
        "s": -1,
        "w": -1,
        "fp": false,
        "fts": {
            "f": {
                "c": "",
                "d": 0,
                "w": -1,
                "f": "",
                "s": -1,
                "i": 0
            },
            "fp": false
        }
    },
    _templateLocaleData = {
        "ms": 7,
        "h": false,
        "x": "中文",
        "y": "English",
        "z": "繁体",
        "v": "日本語",
        "k": "한국어",
        "lo": "ພາສາລາວ",
        "th": "ภาษาไทย",
        "es": "Español",
        "ru": "русский",
        "fra": "français",
        "it": "Italia",
        "de": "Deutsch",
        "ug": "ئۇيغۇرچە",
        "pt": "Português",
        "vi": "Tiếng Việt",
        "msw": "Bahasa Melayu",
        "pl": "Polski",
        "ar": "عربي",
        "tr": "Türkçe",
        "sv": "Svenska",
        "no": "Norsk",
        "lb": "lëtzebuergesch",
        "id": "Bahasa Indonesia",
        "el": "Ελληνικά",
        "fi": "Suomi",
        "da": "Dansk",
        "cs": "Čeština",
        "nl": "Nederlands",
        "bg": "Български",
        "ro": "Română",
        "hu": "Magyar",
        "lt": "lietuvių kalba",
        "lv": "latviski",
        "et": "Eesti keel",
        "hr": "Hrvatski",
        "sk": "Slovenský jazyk",
        "sl": "Slovenščina",
        "fa": "فارسی",
        "he": "עברית",
        "uk": "Українська",
        "ur": "اردو",
        "bn": "বাংলা",
        "is": "íslenskur",
        "sr": "Српски",
        "ca": "Català",
        "km": "កម្ពុជា។",
        "hi": "हिन्दी",
        "kk": "Қазақ тілі",
        "uz": "O'zbek tili",
        "lp": false,
        "f": "",
        "s": -1,
        "w": -1,
        "fp": false,
        "fts": {
            "f": {
                "c": "",
                "d": 0,
                "w": -1,
                "f": "",
                "s": -1,
                "i": 0
            },
            "fp": false
        }
    };
    window.datePickerCssSource = "//2.ss.508sys.com/css/dist/styles/datepicker.min.css?v=202402221530";

    window._homeHost = "www.fkw.com";
    window._templateDefLayout = {
        BANNER_NAV: 0,
        NAV_FLOAT: 1,
        LEFT_NAV_BANNER_RIGHT_HIDE: 3,
        LEFT_NAV_CENTER_BANNER_RIGHT_HIDE: 4,
        LEFT_BANNER_NAV_RIGHT_HIDE: 5,
        LEFT_NAV_EXPEND_CENTER_BANNER: 6,
        CENTER_TOP_BANNER_RIGHT_HIDE: 7,
        LEFT_HIDE_CENTER_TOP_BANNER: 8,
        NAV_FLOAT_ON_BANNER: 9,
        NAV_BANNER: 10
    };
    Fai.top.isIncToVue = false;

    $(function() {
        if (Fai.top.isJzCdnFlowLimit) {
            Site.initVideoResourceHandler();
            Site.initAudioResourceHandler();
        }

        Site.ajaxLoadModuleDom(102, 0, {
            "_ajaxLoadModuleList": [],
            "_partDomInfoList": [],
            "fullUrl": "https://www.ychxmt.com/col.jsp?id=102",
            "topBarOption": {
                "topBarParameter": {
                    "_memberTopBar_versionTwo": true,
                    "memberTopBarV2Param": {
                        "st": 1,
                        "qr": {
                            "desc": "",
                            "bg": "#000000",
                            "unq": true,
                            "link": {
                                "ide": "",
                                "moreJumpInfo": {
                                    "t": 100,
                                    "i": 3,
                                    "u": "/",
                                    "n": "首页",
                                    "s": "AGQIAxIAGgA="
                                }
                            }
                        },
                        "ll": [{
                            "id": "mobiWeb",
                            "o": true,
                            "si": true,
                            "nm": "二维码"
                        }, {
                            "id": "addBookMark",
                            "o": true,
                            "si": true,
                            "nm": "收藏本站"
                        }, {
                            "id": "myProfile",
                            "o": true,
                            "si": true,
                            "nm": "我的资料"
                        }]
                    }
                }
            }
        });

        //Site.showOrHideMailBox();
        Site.initNewWXLogin('[{\"fieldKey\":\"name\",\"name\":\"姓名\",\"placeholder\":\"\",\"must\":true,\"type\":0,\"propContent\":\"\",\"otherLoginMust\":false},{\"fieldKey\":\"email\",\"name\":\"邮箱\",\"placeholder\":\"\",\"must\":false,\"type\":0,\"propContent\":\"\",\"otherLoginMust\":false},{\"fieldKey\":\"mobile\",\"name\":\"手机\",\"placeholder\":\"\",\"must\":true,\"type\":0,\"propContent\":\"\",\"otherLoginMust\":false}]', true, 200, 't_wxLgn', '{"skipUrl":"/index.jsp","isPhotoGroup":false}');

        Site.loadLastLoginAcct('xp25623701');

        //Site.bindBeforeUnloadEvent(false, false, false);
        Site.initTemplateLayout(_templateDefLayout.NAV_FLOAT_ON_BANNER, true, false);

        // ajax统计
        // Site.total({
        //     colId: 102,
        //     pdId: -1,
        //     ndId: -1,
        //     sc: 0,
        //     statId: statId
        // });
        //保留旧用户的初始化版式区域4 和区域5 中，区域4的padding-right空间
        Site.colLayout45Width();
        //各个模块inc吐出脚本
        Site.initCorpTitle({
            "fontList": []
        });
        jzModule.Module.install({
            "id": 796,
            "type": 1,
            "style": 79,
            "module": {
                "id": 796,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 79,
                "flag": 0,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_autoHeight": 0
                }
            }
        });

        jzModule.Module.install({
            "id": 563,
            "type": 1,
            "style": 79,
            "module": {
                "id": 563,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 0,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_global": true,
                    "_autoHeight": 0
                }
            }
        });

        jzModule.SimpleTextModule.initSimpleTextLazyLoad({
            "fontList": [],
            "isExecInitSimpleText": false,
            "initSimpleTextData": {},
            "writingMode": 0,
            "moduleId": 564
        });
        jzModule.Module.install({
            "id": 564,
            "type": 1,
            "style": 86,
            "module": {
                "id": 564,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 86,
                "flag": 7,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_global": true,
                    "_autoHeight": 0
                }
            }
        });

        Site.bannerV2.init({
            "_open": true,
            "data": [{
                "tip": "",
                "desc": "",
                "imgWidth": 1920,
                "imgHeight": 150,
                "ot": 0,
                "i": "ABUIABACGAAgksa7kQYojvfhPjCADziWAQ",
                "st": 0,
                "src": "//27538880.s21i.co99.net/2/3/ABUIABACGAAgksa7kQYojvfhPjCADziWAQ.jpg"
            }],
            "width": 1920,
            "cusBannerWidth": 0,
            "widthType": 0,
            "height": 100,
            "playTime": 4000,
            "animateTime": 1500,
            "from": "banner",
            "btnType": 1,
            "bannerType": 0,
            "wideScreen": true,
            "backgroundType": 1,
            "backgroundColor": "rgba(53, 53, 53, 1)",
            "backgroundOpacity": 100,
            "videoData": {
                "fId": "/image/rimage/section/banner/default/flv.mp4",
                "fst": 0,
                "fsh": 0.0,
                "fUrl": "//0.ss.508sys.com/image/rimage/section/banner/default/flv.mp4"
            }
        }, []);

        var listObj = {
            "module": {
                "aid": 27538880,
                "id": 787,
                "type": 1,
                "flag": 402915394,
                "name": "文章列表",
                "content": "",
                "style": 116,
                "prop0": 10,
                "prop1": [],
                "prop2": 4,
                "prop3": [0],
                "wid": 300,
                "blob0": {
                    "moreCusUrl": "",
                    "moreType": 1,
                    "newsIDList": "[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]",
                    "sortKey": 2,
                    "sortType": 0,
                    "moreNofollow": false,
                    "selectStyle": 2,
                    "colCount": 1,
                    "headlineStyle": 0,
                    "rowCount": 2,
                    "newsTitle": 0,
                    "newsTime": 0,
                    "scrollDir": 0,
                    "scrollSpeed": 1,
                    "oldStyle": -1,
                    "paddingStyle": 0,
                    "showTitle": 1,
                    "autoSlide": 0,
                    "slideShowTime": 4.0,
                    "slideSwitchTime": 0.8,
                    "effType": 1,
                    "borderSet": 0,
                    "borderColor": "#000",
                    "borderWidth": 1,
                    "borderStyle": 1,
                    "showAuthor": 0,
                    "showViews": 0
                },
                "prop6": 0,
                "global": false,
                "createTime": 1647242038000,
                "prop8": 0,
                "updateTime": 1648015084000,
                "pattern": {
                    "sbp": {
                        "iw": -1,
                        "sc": "#c40000",
                        "bb": "transparent",
                        "bc": "#ddd",
                        "ih": -1,
                        "utc": 0,
                        "bt": 0,
                        "bw": 1,
                        "bs": 0
                    },
                    "pdt": {
                        "y": 0,
                        "ls": 12,
                        "fct": 0,
                        "hc": "rgba(255, 255, 255, 0)",
                        "d": 0,
                        "f": "微软雅黑",
                        "i": 0,
                        "b": 0
                    },
                    "sbs": 0,
                    "fmp": {
                        "mb": [{
                            "y": 0,
                            "o": 0,
                            "px": 0
                        }],
                        "cb": {
                            "y": 0,
                            "o": 0
                        },
                        "cw": -1,
                        "bt": 0,
                        "flv": {
                            "fId": "",
                            "fUrl": "",
                            "mh": 0.0
                        },
                        "i": {
                            "y": 0
                        },
                        "b": {
                            "y": 0
                        }
                    },
                    "icb": {
                        "c": "#000",
                        "f": "",
                        "r": 0,
                        "p": "",
                        "y": 0
                    },
                    "fms": 0,
                    "snii": {
                        "i": "",
                        "py": 0
                    },
                    "dis": {
                        "t": 0
                    },
                    "nii": {
                        "i": "",
                        "py": 0
                    },
                    "cta": 0,
                    "ansb": false,
                    "bat": {
                        "y": 0,
                        "i": 0,
                        "s": 12,
                        "w": 0,
                        "d": 0,
                        "c": "#000",
                        "f": "微软雅黑",
                        "fct": 0
                    },
                    "gcp": {
                        "y": 0,
                        "t": 0,
                        "r": 0,
                        "b": 0,
                        "l": 0
                    },
                    "blcr": {
                        "lb": {
                            "t": 0
                        },
                        "lw": -1,
                        "cb": {
                            "t": 0
                        },
                        "rb": {
                            "t": 0
                        },
                        "rw": -1
                    },
                    "gpa": {
                        "y": 0,
                        "bc": "#fff"
                    },
                    "ib": {
                        "y": 0,
                        "c": "#000",
                        "f": "",
                        "r": 0,
                        "p": ""
                    },
                    "chb": {
                        "y": 0,
                        "r": -1,
                        "c": "#000",
                        "f": "",
                        "p": ""
                    },
                    "tran": 100,
                    "clh": {
                        "t": 0
                    },
                    "ig": {
                        "y": 0,
                        "c": "#000",
                        "f": "",
                        "r": 0,
                        "p": ""
                    },
                    "ih": {
                        "y": 0
                    },
                    "chf": {
                        "y": 0,
                        "s": 12,
                        "w": 0,
                        "u": 0,
                        "f": "SimSun",
                        "c": "#000000",
                        "i": 0
                    },
                    "cli": {
                        "y": 0,
                        "ifi": false,
                        "ps": 4,
                        "r": 40
                    },
                    "mmcs": 0,
                    "mbbb": {
                        "si": -1
                    },
                    "is": {
                        "y": 0,
                        "w": 0
                    },
                    "iw": {
                        "y": 0,
                        "u": 0
                    },
                    "mmcp": {
                        "mcs": 20
                    },
                    "macb": {
                        "si": -1
                    },
                    "bg": {
                        "y": 0,
                        "c": "#000",
                        "f": "",
                        "r": 0,
                        "p": ""
                    },
                    "bh": 0,
                    "bi": {
                        "fi": false,
                        "ftc": false,
                        "c": "#000",
                        "fc": "",
                        "ps": 4,
                        "r": 40,
                        "y": 0,
                        "p": "",
                        "f": ""
                    },
                    "vnl2": {
                        "aw": 0,
                        "align": 0,
                        "pl": 0,
                        "ns": 1,
                        "ni": {
                            "scale": 0,
                            "position": 0,
                            "size": {
                                "t": 0,
                                "w": 260,
                                "h": 160
                            },
                            "radius": {
                                "t": 0,
                                "s": 5
                            }
                        },
                        "np": {
                            "t": 0,
                            "s": 0
                        },
                        "sp": {
                            "t": 0,
                            "h": 0,
                            "v": 0
                        },
                        "tl": {
                            "t": 0,
                            "c": "#ccc"
                        },
                        "defaultBg": {
                            "t": 0,
                            "c": "#ccc"
                        },
                        "toggleBg": {
                            "t": 0,
                            "c": "#ccc"
                        },
                        "ti": {
                            "t": 0,
                            "s": 0
                        },
                        "split": {
                            "t": 0,
                            "bw": 1,
                            "bs": 0,
                            "bc": "#F0F0F0"
                        },
                        "title": {
                            "y": 0,
                            "fct": 0,
                            "c": "#000",
                            "f": "微软雅黑",
                            "i": 0,
                            "d": 0,
                            "w": 0,
                            "s": 12,
                            "ta": -1
                        },
                        "time": {
                            "y": 0,
                            "fct": 0,
                            "c": "#000",
                            "f": "微软雅黑",
                            "i": 0,
                            "d": 0,
                            "w": 0,
                            "s": 12
                        },
                        "summary": {
                            "y": 0,
                            "fct": 0,
                            "c": "#000",
                            "f": "微软雅黑",
                            "i": 0,
                            "d": 0,
                            "w": 0,
                            "s": 12
                        },
                        "hs": {
                            "y": 0,
                            "fct": 0,
                            "c": "#000",
                            "f": "微软雅黑",
                            "i": 0,
                            "d": 0,
                            "w": 0,
                            "s": 12
                        },
                        "group": {
                            "y": 0,
                            "fct": 0,
                            "c": "#000",
                            "f": "微软雅黑",
                            "i": 0,
                            "d": 0,
                            "w": 0,
                            "s": 12
                        },
                        "head": {
                            "y": 0,
                            "fct": 0,
                            "c": "#000",
                            "f": "微软雅黑",
                            "i": 0,
                            "d": 0,
                            "w": 0,
                            "s": 12
                        },
                        "hover": {
                            "y": 0,
                            "fct": 0,
                            "c": "#000",
                            "f": "微软雅黑",
                            "i": 0,
                            "d": 0,
                            "w": 0,
                            "s": 12
                        },
                        "hh": {
                            "y": 0,
                            "fct": 0,
                            "c": "#000",
                            "f": "微软雅黑",
                            "i": 0,
                            "d": 0,
                            "w": 0,
                            "s": 12
                        },
                        "titleImg": {
                            "y": 0,
                            "r": 4,
                            "f": "",
                            "p": ""
                        },
                        "at": {
                            "y": 0,
                            "fct": 0,
                            "c": "#000",
                            "f": "微软雅黑",
                            "i": 0,
                            "d": 0,
                            "w": 0,
                            "s": 12
                        }
                    },
                    "bl": {
                        "l": {
                            "t": 0
                        },
                        "r": {
                            "t": 0
                        },
                        "t": {
                            "t": 0
                        },
                        "b": {
                            "t": 0
                        }
                    },
                    "bm": {
                        "f": "微软雅黑",
                        "s": 12,
                        "w": 0,
                        "d": 0,
                        "i": 0,
                        "c": "#000",
                        "fct": 0,
                        "r": 0,
                        "u": 0,
                        "y": 0,
                        "py": 0,
                        "fi": "",
                        "fic": "",
                        "ficon": "",
                        "fico": "",
                        "b": {
                            "t": 0,
                            "c": "",
                            "f": "",
                            "p": "//2.ss.508sys.com/image/no-pic.jpg",
                            "r": -1
                        },
                        "ms": {
                            "t": 0,
                            "w": 0
                        }
                    },
                    "cis": {
                        "y": 0,
                        "w": 13
                    },
                    "ft": {
                        "lb": {},
                        "lw": -1,
                        "cb": {},
                        "rb": {},
                        "rw": -1,
                        "h": -1,
                        "ld": 0,
                        "rd": 0
                    },
                    "sb": {
                        "y": 0,
                        "s": 0,
                        "r": 0,
                        "c": "#000",
                        "f": "",
                        "p": ""
                    },
                    "gip": {
                        "y": 0,
                        "t": 0
                    },
                    "btc": {
                        "at": "副标题"
                    },
                    "br": {
                        "t": 0,
                        "v": 0,
                        "u": 0,
                        "tl": 0,
                        "bl": 0,
                        "tr": 0,
                        "br": 0
                    },
                    "bs": 0,
                    "bt": {
                        "y": 0,
                        "f": "微软雅黑",
                        "c": "#000",
                        "s": 12,
                        "w": 0,
                        "a": 0,
                        "py": 0,
                        "r": 0,
                        "u": 0,
                        "d": 0,
                        "i": 0,
                        "pp": 0,
                        "fct": 0,
                        "ppt": 0
                    },
                    "btlcr": {
                        "lt": 0,
                        "ct": 0,
                        "rt": 0,
                        "lb": {
                            "t": 0,
                            "p": "//2.ss.508sys.com/image/no-pic.jpg"
                        },
                        "cb": {
                            "t": 0,
                            "p": "//2.ss.508sys.com/image/no-pic.jpg"
                        },
                        "rb": {
                            "t": 0,
                            "p": "//2.ss.508sys.com/image/no-pic.jpg"
                        },
                        "ld": {
                            "t": 0
                        },
                        "cd": {
                            "t": 0
                        },
                        "rd": {
                            "t": 0
                        },
                        "ls": {
                            "t": 0
                        },
                        "rs": {
                            "t": 0
                        },
                        "lr": {
                            "t": 0
                        },
                        "cr": {
                            "t": 0
                        },
                        "rr": {
                            "t": 0
                        }
                    },
                    "crh": {
                        "y": 0,
                        "h": -1
                    },
                    "gb": {
                        "y": 0,
                        "c": "#000",
                        "f": "",
                        "r": 0,
                        "p": ""
                    },
                    "sp": 0,
                    "gd": {
                        "y": 0
                    },
                    "cb": {
                        "y": 1,
                        "o": 0,
                        "r": 0,
                        "c": "#000",
                        "f": "",
                        "p": ""
                    },
                    "ss": {
                        "w": -1,
                        "h": -1
                    },
                    "st": {
                        "y": 0,
                        "fct": 0,
                        "c": "#000",
                        "f": "微软雅黑",
                        "i": 0,
                        "d": 0,
                        "w": 0,
                        "s": 12
                    },
                    "cd": {},
                    "gh": {
                        "y": 0
                    },
                    "ftp": false,
                    "d": {
                        "y": 0,
                        "c": "#000",
                        "w": 1,
                        "s": 0,
                        "t": 1,
                        "b": 1,
                        "l": 1,
                        "r": 1
                    },
                    "os": 0,
                    "e": 1,
                    "nsbs": 1,
                    "gm": {
                        "f": "微软雅黑",
                        "c": "#000",
                        "fi": "",
                        "fico": "",
                        "b": {
                            "c": "",
                            "f": "",
                            "t": 0,
                            "p": "",
                            "r": -1
                        },
                        "y": 0,
                        "s": 12,
                        "w": 0,
                        "d": 0,
                        "fct": 0,
                        "py": 0,
                        "r": 0,
                        "u": 0,
                        "i": 0,
                        "fic": "",
                        "ficon": ""
                    },
                    "ci": {
                        "i": "FontIcon_10331",
                        "ct": "e911",
                        "mr": 12,
                        "s": 40,
                        "hi": false,
                        "hcl": "",
                        "cl": ""
                    },
                    "h": 0,
                    "i": {
                        "y": 0,
                        "l": -1,
                        "r": -1,
                        "t": -1,
                        "b": -1
                    },
                    "cl": {
                        "y": 0,
                        "ls": 12,
                        "fct": 0,
                        "hc": "rgba(255, 255, 255, 0)",
                        "c": "#000",
                        "d": 0,
                        "f": "微软雅黑",
                        "i": 0,
                        "b": 0
                    },
                    "gp": {
                        "y": 0
                    },
                    "lts": {
                        "t": 1
                    },
                    "blt": {
                        "t": 1
                    },
                    "bdl": {
                        "y": 0,
                        "pmt": 0,
                        "c": "#000",
                        "pm": 0
                    },
                    "mbb": {
                        "si": -1
                    },
                    "gt": {
                        "y": 0,
                        "c": "#000",
                        "h": "",
                        "f": "微软雅黑",
                        "i": 0,
                        "d": 0,
                        "w": 0,
                        "s": 12,
                        "ta": 0
                    },
                    "o": {
                        "y": 0,
                        "t": 0,
                        "r": 0,
                        "b": 0,
                        "l": 0
                    },
                    "cs": {
                        "lb": {},
                        "lw": -1,
                        "rb": {},
                        "rw": -1
                    },
                    "p": -1,
                    "pa": 2,
                    "ct": {
                        "y": 0,
                        "fct": 0,
                        "cs": 12,
                        "w": 0,
                        "f": "微软雅黑",
                        "i": 0,
                        "c": "#000",
                        "d": 0,
                        "v": 0
                    },
                    "s": {
                        "ts": {
                            "w": -1,
                            "h": -1
                        },
                        "tlb": {
                            "y": 0
                        },
                        "trb": {
                            "y": 0
                        },
                        "bs": {
                            "w": -1,
                            "h": -1
                        },
                        "blb": {
                            "y": 0
                        },
                        "brb": {
                            "y": 0
                        },
                        "clr": {},
                        "crr": {},
                        "cp": {
                            "y": 0
                        }
                    },
                    "csb": {
                        "y": 0,
                        "r": -1,
                        "c": "#000",
                        "f": ""
                    },
                    "ofl": 0,
                    "ti": {
                        "pt": {
                            "fs": 12,
                            "u": 0,
                            "i": 0,
                            "w": 0,
                            "fct": 0,
                            "fc": "#000",
                            "ff": "微软雅黑",
                            "y": 0
                        },
                        "d": {
                            "c": "#dadada",
                            "y": 0
                        },
                        "b": {
                            "y": 0
                        }
                    },
                    "v": 1,
                    "w": 1080,
                    "csf": {
                        "y": 0,
                        "s": 12,
                        "w": 0,
                        "u": 0,
                        "f": "SimSun",
                        "c": "#000000",
                        "i": 0
                    },
                    "sfl": 0,
                    "csh": {
                        "y": 0,
                        "c": "#000000",
                        "xa": 0,
                        "ya": 0,
                        "sh": 6
                    },
                    "csl": {
                        "y": 0,
                        "s": 0,
                        "w": 1
                    },
                    "ts": 0
                },
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": -1
                    }],
                    "lock": 0,
                    "cal": [],
                    "ie": {
                        "t": 1
                    }
                },
                "deleteTime": 0,
                "isDeleted": false,
                "valid": true,
                "special": false,
                "inCol": {
                    "bi": "",
                    "bs": 0,
                    "pdirt": 1,
                    "pdist": 0.4,
                    "s": 0,
                    "it": 0,
                    "imc": 0,
                    "ifm": 0,
                    "ifp": 786,
                    "itp": 0,
                    "ip": 0,
                    "ipz": 0,
                    "ifl": 0,
                    "iap": 0,
                    "ifpd": {
                        "l": 180,
                        "t": 195
                    }
                },
                "_manageMode": false,
                "majorColor": "#f13a3a",
                "notFilterTypeList": [0],
                "moreBlank": false,
                "showGroup": true,
                "openPagenation": true,
                "newsSummary": true,
                "hideDate": false,
                "newSelect": true,
                "openScroll": false,
                "imgMaxSize": 10,
                "scaleDefaultFill": 2,
                "newsList": [{
                    "aid": 27538880,
                    "id": 11,
                    "title": "小雪|天气愈冷，大闸蟹已至尾声",
                    "date": 1637577622000,
                    "type": "",
                    "top": 0,
                    "createTime": 1647831195000,
                    "groupId": 0,
                    "updateTime": 1647831195000,
                    "author": "蟹满堂",
                    "link": "",
                    "sid": 6,
                    "views": 0,
                    "flag": 8194,
                    "pictureId": "ABUIwOuQDRACGAAgmtHfkQYo9o7utAQw-QY4-AI",
                    "summary": "小雪xiaoxue 小雪民俗 &nbsp;&nbsp;&nbsp;&nbsp;俗语云：\u201C小雪腌菜，大雪腌肉。\u201D小雪的习俗包括腌咸菜、品",
                    "authMemberLevelId": -1,
                    "groupIds": "[]",
                    "authBuddyGroupIdBit": 0,
                    "authStatus": 0,
                    "subTitle": "",
                    "hasPublished": true,
                    "authBuddyGroupIdList": [],
                    "nlPictureId": "",
                    "headPictureId": "",
                    "articleExtLink": "",
                    "nlPictureIdTwo": "",
                    "nlPictureIdThree": "",
                    "cuav2": {
                        "cut": "",
                        "p": "",
                        "d": "",
                        "md": "",
                        "mp": "",
                        "ocu": false,
                        "icu": true
                    },
                    "recommendNews": {
                        "ns": true,
                        "ids": [],
                        "groupIds": [],
                        "t": 0
                    },
                    "adma": {
                        "dt": 0,
                        "mld": -1,
                        "mgids": [],
                        "mgidb": 0
                    },
                    "wxMediaId": "ktG3nDR2RJ5p0aF7DFIxzlvlCTrtW0Gu0glcclGRPJxKVkaT-PCh8OreuXoZgU-Z",
                    "wxShareIcon": {
                        "tt": 0,
                        "dt": 0,
                        "it": 0,
                        "id": "",
                        "tit": "",
                        "cont": ""
                    },
                    "groupList": [],
                    "picPath": "//27538880.s21i.co99.net/2/3/ABUIwOuQDRACGAAgmtHfkQYo9o7utAQw-QY4-AI.jpg",
                    "newsUrl": "/nd.jsp?fromColId=102&id=11#_np=102_787",
                    "publishRegularly": false,
                    "ndReqArgs": "{}"
                }, {
                    "aid": 27538880,
                    "id": 12,
                    "title": "吃蟹进行中|万圣节\u201C蟹\u201D逅美食天花板",
                    "date": 1635558840000,
                    "type": "",
                    "top": 0,
                    "createTime": 1647831208000,
                    "groupId": 0,
                    "updateTime": 1647831208000,
                    "author": "蟹满堂",
                    "link": "",
                    "sid": 6,
                    "views": 0,
                    "flag": 8194,
                    "pictureId": "ABUIwOuQDRACGAAgqNHfkQYonPCGNDCsBziPAw",
                    "summary": "MYSTERIOUS HALLOWEEN蟹逅万圣节一群贪吃鬼们的集合狂欢万圣节就要到啦，各路大咖们准备怎么释",
                    "authMemberLevelId": -1,
                    "groupIds": "[]",
                    "authBuddyGroupIdBit": 0,
                    "authStatus": 0,
                    "subTitle": "",
                    "hasPublished": true,
                    "authBuddyGroupIdList": [],
                    "nlPictureId": "",
                    "headPictureId": "",
                    "articleExtLink": "",
                    "nlPictureIdTwo": "",
                    "nlPictureIdThree": "",
                    "cuav2": {
                        "cut": "",
                        "p": "",
                        "d": "",
                        "md": "",
                        "mp": "",
                        "ocu": false,
                        "icu": true
                    },
                    "recommendNews": {
                        "ns": true,
                        "ids": [],
                        "groupIds": [],
                        "t": 0
                    },
                    "adma": {
                        "dt": 0,
                        "mld": -1,
                        "mgids": [],
                        "mgidb": 0
                    },
                    "wxMediaId": "XeqGZ3rAHVl75cLJ6hXRZf1Wiyp_Vfj9Ywbk5eeX9YBSTtBC5mJeLyasIky7f5NP",
                    "wxShareIcon": {
                        "tt": 0,
                        "dt": 0,
                        "it": 0,
                        "id": "",
                        "tit": "",
                        "cont": ""
                    },
                    "groupList": [],
                    "picPath": "//27538880.s21i.co99.net/2/3/ABUIwOuQDRACGAAgqNHfkQYonPCGNDCsBziPAw.jpg",
                    "newsUrl": "/nd.jsp?fromColId=102&id=12#_np=102_787",
                    "publishRegularly": false,
                    "ndReqArgs": "{}"
                }, {
                    "aid": 27538880,
                    "id": 13,
                    "title": "金秋好时节，品蟹黄金期",
                    "date": 1634364086000,
                    "type": "",
                    "top": 0,
                    "createTime": 1647831218000,
                    "groupId": 0,
                    "updateTime": 1647831218000,
                    "author": "蟹满堂",
                    "link": "",
                    "sid": 6,
                    "views": 0,
                    "flag": 8194,
                    "pictureId": "ABUIwOuQDRACGAAgstHfkQYonNKauAMwrAc4jwM",
                    "summary": "金秋蟹季品蟹黄金期已至，准备好贴秋膘了吗秋风过耳，\u201C速冻模式\u201D就已开启，一转眼寒露节气已过，带走了夏天的余温",
                    "authMemberLevelId": -1,
                    "groupIds": "[]",
                    "authBuddyGroupIdBit": 0,
                    "authStatus": 0,
                    "subTitle": "",
                    "hasPublished": true,
                    "authBuddyGroupIdList": [],
                    "nlPictureId": "",
                    "headPictureId": "",
                    "articleExtLink": "",
                    "nlPictureIdTwo": "",
                    "nlPictureIdThree": "",
                    "cuav2": {
                        "cut": "",
                        "p": "",
                        "d": "",
                        "md": "",
                        "mp": "",
                        "ocu": false,
                        "icu": true
                    },
                    "recommendNews": {
                        "ns": true,
                        "ids": [],
                        "groupIds": [],
                        "t": 0
                    },
                    "adma": {
                        "dt": 0,
                        "mld": -1,
                        "mgids": [],
                        "mgidb": 0
                    },
                    "wxMediaId": "XeqGZ3rAHVl75cLJ6hXRZYyFKQzszHtpx_PsD8s-ed6ETv6VYYIxQ1kNSwQcdsa5",
                    "wxShareIcon": {
                        "tt": 0,
                        "dt": 0,
                        "it": 0,
                        "id": "",
                        "tit": "",
                        "cont": ""
                    },
                    "groupList": [],
                    "picPath": "//27538880.s21i.co99.net/2/3/ABUIwOuQDRACGAAgstHfkQYonNKauAMwrAc4jwM.jpg",
                    "newsUrl": "/nd.jsp?fromColId=102&id=13#_np=102_787",
                    "publishRegularly": false,
                    "ndReqArgs": "{}"
                }, {
                    "aid": 27538880,
                    "id": 14,
                    "title": "品蟹攻略|大闸蟹的秘密都在这里啦",
                    "date": 1633745062000,
                    "type": "",
                    "top": 0,
                    "createTime": 1647831221000,
                    "groupId": 0,
                    "updateTime": 1647831221000,
                    "author": "蟹满堂",
                    "link": "",
                    "sid": 6,
                    "views": 0,
                    "flag": 8194,
                    "pictureId": "ABUIwOuQDRACGAAgtdHfkQYo6KGKQzCsBziPAw",
                    "summary": "秋天到，膏满黄肥的螃蟹也到了。鲜香软糯的蟹黄、晶莹诱人的蟹膏\u2026\u2026想想都会流口水。不过，螃蟹虽美味，但大闸蟹如",
                    "authMemberLevelId": -1,
                    "groupIds": "[]",
                    "authBuddyGroupIdBit": 0,
                    "authStatus": 0,
                    "subTitle": "",
                    "hasPublished": true,
                    "authBuddyGroupIdList": [],
                    "nlPictureId": "",
                    "headPictureId": "",
                    "articleExtLink": "",
                    "nlPictureIdTwo": "",
                    "nlPictureIdThree": "",
                    "cuav2": {
                        "cut": "",
                        "p": "",
                        "d": "",
                        "md": "",
                        "mp": "",
                        "ocu": false,
                        "icu": true
                    },
                    "recommendNews": {
                        "ns": true,
                        "ids": [],
                        "groupIds": [],
                        "t": 0
                    },
                    "adma": {
                        "dt": 0,
                        "mld": -1,
                        "mgids": [],
                        "mgidb": 0
                    },
                    "wxMediaId": "XeqGZ3rAHVl75cLJ6hXRZWoVL8dj3_FNVsw2KnGM_UJNU1pgmMi3rN-I6IT_7Lvm",
                    "wxShareIcon": {
                        "tt": 0,
                        "dt": 0,
                        "it": 0,
                        "id": "",
                        "tit": "",
                        "cont": ""
                    },
                    "groupList": [],
                    "picPath": "//27538880.s21i.co99.net/2/3/ABUIwOuQDRACGAAgtdHfkQYo6KGKQzCsBziPAw.jpg",
                    "newsUrl": "/nd.jsp?fromColId=102&id=14#_np=102_787",
                    "publishRegularly": false,
                    "ndReqArgs": "{}"
                }, {
                    "aid": 27538880,
                    "id": 15,
                    "title": "醉美苏州，欢度国庆~",
                    "date": 1633053024000,
                    "type": "",
                    "top": 0,
                    "createTime": 1647831231000,
                    "groupId": 0,
                    "updateTime": 1647831232000,
                    "author": "蟹满堂",
                    "link": "",
                    "sid": 6,
                    "views": 0,
                    "flag": 8194,
                    "pictureId": "ABUIwOuQDRACGAAgv9HfkQYoysXsygEwnQY41AI",
                    "summary": "旅行的最高纬度，是像当地人一样生活。相对于流水线般的打卡旅行，更想找个安逸慢城住上几天，像当地人一样，将平凡",
                    "authMemberLevelId": -1,
                    "groupIds": "[]",
                    "authBuddyGroupIdBit": 0,
                    "authStatus": 0,
                    "subTitle": "",
                    "hasPublished": true,
                    "authBuddyGroupIdList": [],
                    "nlPictureId": "",
                    "headPictureId": "",
                    "articleExtLink": "",
                    "nlPictureIdTwo": "",
                    "nlPictureIdThree": "",
                    "cuav2": {
                        "cut": "",
                        "p": "",
                        "d": "",
                        "md": "",
                        "mp": "",
                        "ocu": false,
                        "icu": true
                    },
                    "recommendNews": {
                        "ns": true,
                        "ids": [],
                        "groupIds": [],
                        "t": 0
                    },
                    "adma": {
                        "dt": 0,
                        "mld": -1,
                        "mgids": [],
                        "mgidb": 0
                    },
                    "wxMediaId": "XeqGZ3rAHVl75cLJ6hXRZTPiPKYP5eW4NJbE4SCkDdOg8Iumj55aQZ6_JsjxzGJ2",
                    "wxShareIcon": {
                        "tt": 0,
                        "dt": 0,
                        "it": 0,
                        "id": "",
                        "tit": "",
                        "cont": ""
                    },
                    "groupList": [],
                    "picPath": "//27538880.s21i.co99.net/2/3/ABUIwOuQDRACGAAgv9HfkQYoysXsygEwnQY41AI.jpg",
                    "newsUrl": "/nd.jsp?fromColId=102&id=15#_np=102_787",
                    "publishRegularly": false,
                    "ndReqArgs": "{}"
                }, {
                    "aid": 27538880,
                    "id": 16,
                    "title": "被绿了，怎么办？挺急的，在线等！",
                    "date": 1625642042000,
                    "type": "",
                    "top": 0,
                    "createTime": 1647831239000,
                    "groupId": 0,
                    "updateTime": 1647831239000,
                    "author": "",
                    "link": "",
                    "sid": 6,
                    "views": 0,
                    "flag": 8194,
                    "pictureId": "ABUIwOuQDRACGAAgx9HfkQYosqCCmQEwvAY44AI",
                    "summary": "今天就不给大家介绍大闸蟹了，也不给大家喂鸡汤，就是遇到这么个事，来和大家八卦八卦。就在昨天，小编看到了一件事",
                    "authMemberLevelId": -1,
                    "groupIds": "[]",
                    "authBuddyGroupIdBit": 0,
                    "authStatus": 0,
                    "subTitle": "",
                    "hasPublished": true,
                    "authBuddyGroupIdList": [],
                    "nlPictureId": "",
                    "headPictureId": "",
                    "articleExtLink": "",
                    "nlPictureIdTwo": "",
                    "nlPictureIdThree": "",
                    "cuav2": {
                        "cut": "",
                        "p": "",
                        "d": "",
                        "md": "",
                        "mp": "",
                        "ocu": false,
                        "icu": true
                    },
                    "recommendNews": {
                        "ns": true,
                        "ids": [],
                        "groupIds": [],
                        "t": 0
                    },
                    "adma": {
                        "dt": 0,
                        "mld": -1,
                        "mgids": [],
                        "mgidb": 0
                    },
                    "wxMediaId": "XeqGZ3rAHVl75cLJ6hXRZTen1Jp5DsN-clXwW0lwQi2prkw9VihR95IjL3qTcXnh",
                    "wxShareIcon": {
                        "tt": 0,
                        "dt": 0,
                        "it": 0,
                        "id": "",
                        "tit": "",
                        "cont": ""
                    },
                    "groupList": [],
                    "picPath": "//27538880.s21i.co99.net/2/3/ABUIwOuQDRACGAAgx9HfkQYosqCCmQEwvAY44AI.jpg",
                    "newsUrl": "/nd.jsp?fromColId=102&id=16#_np=102_787",
                    "publishRegularly": false,
                    "ndReqArgs": "{}"
                }, {
                    "aid": 27538880,
                    "id": 17,
                    "title": "诚邀合作伙伴 | 大闸蟹蟹季悄然临近，蟹满堂邀请各方伙伴携手共进",
                    "date": 1625619795000,
                    "type": "",
                    "top": 0,
                    "createTime": 1647831244000,
                    "groupId": 0,
                    "updateTime": 1647831244000,
                    "author": "",
                    "link": "",
                    "sid": 6,
                    "views": 0,
                    "flag": 8194,
                    "pictureId": "ABUIwOuQDRACGAAgzNHfkQYojfv0mAMwrAc4kAM",
                    "summary": "2021年已过半，距蟹季也仅剩3个月时间，蟹满堂合伙人招募计划限时火热进行中，不仅超多扶持，还能限时免费加盟！",
                    "authMemberLevelId": -1,
                    "groupIds": "[]",
                    "authBuddyGroupIdBit": 0,
                    "authStatus": 0,
                    "subTitle": "",
                    "hasPublished": true,
                    "authBuddyGroupIdList": [],
                    "nlPictureId": "",
                    "headPictureId": "",
                    "articleExtLink": "",
                    "nlPictureIdTwo": "",
                    "nlPictureIdThree": "",
                    "cuav2": {
                        "cut": "",
                        "p": "",
                        "d": "",
                        "md": "",
                        "mp": "",
                        "ocu": false,
                        "icu": true
                    },
                    "recommendNews": {
                        "ns": true,
                        "ids": [],
                        "groupIds": [],
                        "t": 0
                    },
                    "adma": {
                        "dt": 0,
                        "mld": -1,
                        "mgids": [],
                        "mgidb": 0
                    },
                    "wxMediaId": "XeqGZ3rAHVl75cLJ6hXRZQ7dw8UXMGXJACXXlUmHk0TMRreHQIIS57xZoUFzAJL6",
                    "wxShareIcon": {
                        "tt": 0,
                        "dt": 0,
                        "it": 0,
                        "id": "",
                        "tit": "",
                        "cont": ""
                    },
                    "groupList": [],
                    "picPath": "//27538880.s21i.co99.net/2/3/ABUIwOuQDRACGAAgzNHfkQYojfv0mAMwrAc4kAM.jpg",
                    "newsUrl": "/nd.jsp?fromColId=102&id=17#_np=102_787",
                    "publishRegularly": false,
                    "ndReqArgs": "{}"
                }, {
                    "aid": 27538880,
                    "id": 18,
                    "title": "献礼百年·红色传\u201C澄\u201D|蟹满堂创业之路与党同行！",
                    "date": 1625046359000,
                    "type": "",
                    "top": 0,
                    "createTime": 1647831250000,
                    "groupId": 0,
                    "updateTime": 1647831250000,
                    "author": "蟹满堂",
                    "link": "",
                    "sid": 6,
                    "views": 0,
                    "flag": 8194,
                    "pictureId": "ABUIwOuQDRACGAAg0tHfkQYo6N2m8QQwvAU4qQI",
                    "summary": "\u201C朝霞映在阳澄湖上/芦花放稻谷香岸柳成行/全凭着劳动人民一双手/画出了锦绣江南鱼米乡/祖国的好山河寸土不让/岂容日寇逞凶狂\u2026\u2026\u201D",
                    "authMemberLevelId": -1,
                    "groupIds": "[]",
                    "authBuddyGroupIdBit": 0,
                    "authStatus": 0,
                    "subTitle": "",
                    "hasPublished": true,
                    "authBuddyGroupIdList": [],
                    "nlPictureId": "",
                    "headPictureId": "",
                    "articleExtLink": "",
                    "nlPictureIdTwo": "",
                    "nlPictureIdThree": "",
                    "cuav2": {
                        "cut": "",
                        "p": "",
                        "d": "",
                        "md": "",
                        "mp": "",
                        "ocu": false,
                        "icu": true
                    },
                    "recommendNews": {
                        "ns": true,
                        "ids": [],
                        "groupIds": [],
                        "t": 0
                    },
                    "adma": {
                        "dt": 0,
                        "mld": -1,
                        "mgids": [],
                        "mgidb": 0
                    },
                    "wxMediaId": "XeqGZ3rAHVl75cLJ6hXRZVnypovbZVYI_IqBKVs6ZvNppamgFOtQz5ITF3rKuuoO",
                    "wxShareIcon": {
                        "tt": 0,
                        "dt": 0,
                        "it": 0,
                        "id": "",
                        "tit": "",
                        "cont": ""
                    },
                    "groupList": [],
                    "picPath": "//27538880.s21i.co99.net/2/3/ABUIwOuQDRACGAAg0tHfkQYo6N2m8QQwvAU4qQI.jpg",
                    "newsUrl": "/nd.jsp?fromColId=102&id=18#_np=102_787",
                    "publishRegularly": false,
                    "ndReqArgs": "{}"
                }, {
                    "aid": 27538880,
                    "id": 19,
                    "title": "招募城市合伙人|六月加盟忙，蟹满堂十城十二店启动",
                    "date": 1624355163000,
                    "type": "",
                    "top": 0,
                    "createTime": 1647831259000,
                    "groupId": 0,
                    "updateTime": 1647831259000,
                    "author": "蟹满堂",
                    "link": "",
                    "sid": 6,
                    "views": 0,
                    "flag": 8194,
                    "pictureId": "ABUIwOuQDRACGAAg29HfkQYosqDm5AYwuAg4ywM",
                    "summary": "如果你也想要一份属于自己的事业，却找不到平台，那就加入我们。我们蟹满堂可以为你提供创业的平台，目前我们有近百家阳澄湖大闸蟹城市专卖店，广泛覆盖全国大中型城市。",
                    "authMemberLevelId": -1,
                    "groupIds": "[]",
                    "authBuddyGroupIdBit": 0,
                    "authStatus": 0,
                    "subTitle": "",
                    "hasPublished": true,
                    "authBuddyGroupIdList": [],
                    "nlPictureId": "",
                    "headPictureId": "",
                    "articleExtLink": "",
                    "nlPictureIdTwo": "",
                    "nlPictureIdThree": "",
                    "cuav2": {
                        "cut": "",
                        "p": "",
                        "d": "",
                        "md": "",
                        "mp": "",
                        "ocu": false,
                        "icu": true
                    },
                    "recommendNews": {
                        "ns": true,
                        "ids": [],
                        "groupIds": [],
                        "t": 0
                    },
                    "adma": {
                        "dt": 0,
                        "mld": -1,
                        "mgids": [],
                        "mgidb": 0
                    },
                    "wxMediaId": "XeqGZ3rAHVl75cLJ6hXRZXwrF_GInEtxD3sec4qgERe5ltN0eDRHHePiJd8Y81oR",
                    "wxShareIcon": {
                        "tt": 0,
                        "dt": 0,
                        "it": 0,
                        "id": "",
                        "tit": "",
                        "cont": ""
                    },
                    "groupList": [],
                    "picPath": "//27538880.s21i.co99.net/2/3/ABUIwOuQDRACGAAg29HfkQYosqDm5AYwuAg4ywM.jpg",
                    "newsUrl": "/nd.jsp?fromColId=102&id=19#_np=102_787",
                    "publishRegularly": false,
                    "ndReqArgs": "{}"
                }, {
                    "aid": 27538880,
                    "id": 20,
                    "title": "搞事情??C位出道的阳澄湖六月黄618钜惠来袭!口口爆赞!",
                    "date": 1623749128000,
                    "type": "",
                    "top": 0,
                    "createTime": 1647831269000,
                    "groupId": 0,
                    "updateTime": 1647831270000,
                    "author": "蟹满堂",
                    "link": "https://mall.jd.com/index-10902446.html?from=pc",
                    "sid": 6,
                    "views": 0,
                    "flag": 8194,
                    "pictureId": "ABUIwOuQDRACGAAg5dHfkQYoyoHQiAMw6Ac4qQM",
                    "summary": "\u200B上京东，搜索蟹满堂<br/>六月黄尝鲜价钜惠来袭<br/>活动时间：6月16日-18日",
                    "authMemberLevelId": -1,
                    "groupIds": "[]",
                    "authBuddyGroupIdBit": 0,
                    "authStatus": 0,
                    "subTitle": "",
                    "hasPublished": true,
                    "authBuddyGroupIdList": [],
                    "nlPictureId": "",
                    "headPictureId": "",
                    "articleExtLink": "",
                    "nlPictureIdTwo": "",
                    "nlPictureIdThree": "",
                    "cuav2": {
                        "cut": "",
                        "p": "",
                        "d": "",
                        "md": "",
                        "mp": "",
                        "ocu": false,
                        "icu": true
                    },
                    "recommendNews": {
                        "ns": true,
                        "ids": [],
                        "groupIds": [],
                        "t": 0
                    },
                    "adma": {
                        "dt": 0,
                        "mld": -1,
                        "mgids": [],
                        "mgidb": 0
                    },
                    "wxMediaId": "XeqGZ3rAHVl75cLJ6hXRZbk1TZp_gLljPwS-ULbHbHUVBd2Ljiw8aaBPlBfRq2C1",
                    "wxShareIcon": {
                        "tt": 0,
                        "dt": 0,
                        "it": 0,
                        "id": "",
                        "tit": "",
                        "cont": ""
                    },
                    "groupList": [],
                    "picPath": "//27538880.s21i.co99.net/2/3/ABUIwOuQDRACGAAg5dHfkQYoyoHQiAMw6Ac4qQM.jpg",
                    "newsUrl": "/nd.jsp?fromColId=102&id=20#_np=102_787",
                    "publishRegularly": false,
                    "ndReqArgs": "{}"
                }],
                "viewsOpen": false,
                "visible": true,
                "_openRemoveUrlArgs": false,
                "popupWay": "_blank",
                "detailTarget": false,
                "hideMore": false,
                "jumpOnclick": "",
                "jumpType": 0,
                "jumpName": "",
                "jumpUrl": "/nr.jsp",
                "defaultMoreUrl": "/nr.jsp",
                "JUMP_TYPE_CUS": 103,
                "pageHtml": "<div id='pagenation787' class='pagenation pagination_1'>\n<span class='pagePrev'><span>上一页<\/span><\/span>\n<span class='pageNo J_pageSelect fk-pageSelect'><span>1<\/span><\/span>\n<span class='pageNo'><a hidefocus='true' class='g_border js_pagination' href='/col.jsp?m787pageno=2&#x26;id=102'  data-href='/col.jsp?m787pageno=2&#x26;id=102' onclick='Site.ajaxClick(this, 787);event.stopPropagation();return false;'><span>2<\/span><\/a><\/span>\n<span class='pageNo'><a hidefocus='true' class='g_border js_pagination' href='/col.jsp?m787pageno=3&#x26;id=102'  data-href='/col.jsp?m787pageno=3&#x26;id=102' onclick='Site.ajaxClick(this, 787);event.stopPropagation();return false;'><span>3<\/span><\/a><\/span>\n<span class='pageNext'><a hidefocus='true' class='g_border js_pagination' href='/col.jsp?m787pageno=2&#x26;id=102' data-href='/col.jsp?m787pageno=2&#x26;id=102' onclick='Site.ajaxClick(this, 787);event.stopPropagation();return false;'><span>下一页<\/span><\/a><\/span>\n<\/div>\n",
                "isMaterialLazyLoad": false,
                "MoreTypeDefault": 1,
                "MoreTypeSpecial": 2,
                "MoreTypeCustom": 3,
                "isSSR": true,
                "isIncModule": false
            },
            "options": {
                "args": {
                    "bannerMore": " href='/nr.jsp'",
                    "itemList": [],
                    "editList": []
                },
                "aid": 27538880,
                "siteVer": 30,
                "templateType": 0,
                "oem": false,
                "isUI": false,
                "designMode": false,
                "manageMode": false,
                "isTemplateVersion2": true,
                "initalState": {},
                "isLogin": false,
                "memberName": "",
                "_newPerform": true,
                "_setReqHttpOnlyCookie": true,
                "_openHtmlUrl": false
            },
            "perform": {
                "inlineStyle": {
                    "width": "1080px",
                    "position": "absolute",
                    "top": "195px",
                    "left": "180px"
                },
                "moduleClass": {
                    "form": true,
                    "form787": true,
                    "formStyle116": true
                },
                "moduleAttr": {
                    "ssr": true,
                    "_moduleType": 1,
                    "_modulestyle": 116,
                    "_moduleid": 787,
                    "title": "",
                    "_sys": 0,
                    "_banId": "",
                    "_side": 0,
                    "_inTab": 0,
                    "_inMulMCol": 0,
                    "_inFullmeasure": 0,
                    "_inpack": 0,
                    "_inpopupzone": 0,
                    "_inFloatLayer": 0,
                    "_infullmeasurepack": 786,
                    "_intabpack": 0,
                    "_inaccordionpack": 0,
                    "_autoHeight": 1,
                    "_global": false,
                    "_independent": false,
                    "data-scrollbar": 0
                },
                "moduleBanner": {
                    "bannerMore": "<a hidefocus='true' class='bannerMoreInnerA'  href='/nr.jsp'><span class='bannerMoreInnerSpan'>更多&gt;&gt;<\/span><\/a>",
                    "systemPattern": 0,
                    "isDoubleTitle": false
                },
                "moduleMiddle": {
                    "tabSystem": 0,
                    "mulModuleColSystem": 0
                }
            },
            "moduleOptions": {
                "module": {
                    "blob0": {
                        "moreCusUrl": "",
                        "moreType": 1,
                        "newsIDList": "[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]",
                        "sortKey": 2,
                        "sortType": 0,
                        "moreNofollow": false,
                        "selectStyle": 2,
                        "colCount": 1,
                        "headlineStyle": 0,
                        "rowCount": 2,
                        "newsTitle": 0,
                        "newsTime": 0,
                        "scrollDir": 0,
                        "scrollSpeed": 1,
                        "oldStyle": -1,
                        "paddingStyle": 0,
                        "showTitle": 1,
                        "autoSlide": 0,
                        "slideShowTime": 4.0,
                        "slideSwitchTime": 0.8,
                        "effType": 1,
                        "borderSet": 0,
                        "borderColor": "#000",
                        "borderWidth": 1,
                        "borderStyle": 1,
                        "showAuthor": 0,
                        "showViews": 0
                    },
                    "newSelect": true,
                    "hideDate": false,
                    "newsSummary": true,
                    "openPagenation": true,
                    "openScroll": false,
                    "_manageMode": false,
                    "majorColor": "#f13a3a",
                    "autoWrap": 0,
                    "commProp": {
                        "al": [{
                            "t": 0,
                            "s": 1.0,
                            "d": 0.0,
                            "c": 1
                        }, {
                            "t": 0,
                            "s": 1.0,
                            "d": 0.0,
                            "c": -1
                        }],
                        "cal": []
                    },
                    "id": 787,
                    "style": 116,
                    "flag": 402915394,
                    "prop0": 10
                },
                "perform": {
                    "moduleAttr": {
                        "_infullmeasurepack": 786,
                        "ssr": true,
                        "_side": 0
                    }
                },
                "id": 787,
                "type": 1,
                "style": 116
            }
        };
        getList(0,10)
        .then(a=>{
            listObj.module.newsList = a.list.map(b=>({
                id: b["enc-keyValue"],
                title: b.Title,
                summary:b.Description,
                picPath:b.NewInfImageURL,
                newsUrl: "/Home?DashboardID=205141&release=false&NewsId="+b["enc-keyValue"]+"&index="+b.index+"&title="+encodeURIComponent(b.Title),
                date: 1728635280000
              }));
              var totalPage = parseInt(a.total/10)+(a.total%10==0?0:1);
              listObj.module.pageHtml = createPagerHtml("pagenation787",1,totalPage);
            jzModule.Module.activeModule(
                listObj
            );
            jzSite.lazyLoad.checkLazyLoad($("#module787"))
        });
        
        jzModule.SimpleTextModule.initSimpleTextLazyLoad({
            "fontList": [],
            "isExecInitSimpleText": false,
            "initSimpleTextData": {},
            "writingMode": 0,
            "moduleId": 788
        });
        jzModule.Module.install({
            "id": 788,
            "type": 1,
            "style": 86,
            "module": {
                "id": 788,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 86,
                "flag": 5,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 786,
                    "_autoHeight": 0
                }
            }
        });

        jzModule.SimpleTextModule.initSimpleTextLazyLoad({
            "fontList": [],
            "isExecInitSimpleText": false,
            "initSimpleTextData": {},
            "writingMode": 0,
            "moduleId": 789
        });
        jzModule.Module.install({
            "id": 789,
            "type": 1,
            "style": 86,
            "module": {
                "id": 789,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 86,
                "flag": 5,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 786,
                    "_autoHeight": 0
                }
            }
        });

        jzModule.SimpleTextModule.initSimpleTextLazyLoad({
            "fontList": [],
            "isExecInitSimpleText": false,
            "initSimpleTextData": {},
            "writingMode": 0,
            "moduleId": 790
        });
        jzModule.Module.install({
            "id": 790,
            "type": 1,
            "style": 86,
            "module": {
                "id": 790,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 86,
                "flag": 7,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 786,
                    "_autoHeight": 0
                }
            }
        });

        Site.setFullMeasureBgHightInIe6(786);
        ;$(function() {
            Site.inFullmeasueAnimation.animateFm(786, 0, 1, {
                "c": 0,
                "d": 4.0,
                "s": 1.0,
                "u": 0
            });
        });
        Site.setFullmeasurePackTimer(786);
        jzModule.Module.install({
            "module": {
                "prop2": 0,
                "id": 786,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 109,
                "flag": 0,
                "prop0": 1
            },
            "id": 786,
            "type": 1,
            "style": 109,
            "perform": {
                "moduleAttr": {
                    "_autoHeight": 0
                }
            }
        });

        jzModule.Module.install({
            "id": 1613,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1613,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 79,
                "flag": 0,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzModule.Module.install({
            "id": 1614,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1614,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 79,
                "flag": 0,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzModule.Module.install({
            "id": 1617,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1617,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 79,
                "flag": 0,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1621,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgnM67lAYosMi47wIwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAggs67lAYohL2CkQMwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAggs67lAYohL2CkQMwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1621,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1621,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1622,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgvM_7lAYouNb9kwUwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg9M67lAYogNKAVjA2OA0.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg9M67lAYogNKAVjA2OA0.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1622,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1622,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1624,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg19K7lAYogJXUjgIwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgr9K7lAYo0d_jywMwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgr9K7lAYo0d_jywMwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1624,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1624,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1626,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgudO7lAYo2szGhAEwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 12,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgotO7lAYo05LS6QMwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgotO7lAYo05LS6QMwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1626,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1626,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1628,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgh_a7lAYojZaLmQUwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg69W7lAYo_J3rxgcwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg69W7lAYo_J3rxgcwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1628,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1628,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": -1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1630,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgxda7lAYos9DDuQcwRDgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 68,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg0ta7lAYopPKPVzBEOA0.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg0ta7lAYopPKPVzBEOA0.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1630,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1630,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1631,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgxde7lAYo8Yjr8AQwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgtde7lAYooOShqwcwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgtde7lAYooOShqwcwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1631,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1631,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1633,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgntm7lAYoloHFoAQwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAglNm7lAYo9PuO6wcwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAglNm7lAYo9PuO6wcwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1633,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1633,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1634,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg_9m7lAYoqMOStgEwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg8Nm7lAYon5O7wgYwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg8Nm7lAYon5O7wgYwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1634,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1634,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1635,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgytq7lAYo9Nzl9gUwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgwdq7lAYom6uxgwcwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgwdq7lAYom6uxgwcwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1635,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1635,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1637,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg19u7lAYo84iLygMwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgw9u7lAYo5IyswwEwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgw9u7lAYo5IyswwEwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1637,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1637,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1638,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg1Ny7lAYouOuA7QQwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgwty7lAYonZe1xgEwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgwty7lAYonZe1xgEwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1638,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1638,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1639,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgvt27lAYo_Jjq3gEwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgsN27lAYowL7SwgcwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgsN27lAYowL7SwgcwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1639,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1639,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1640,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgz967lAYoi4nV0QMwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg9t27lAYolNeVtQUwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAg9t27lAYolNeVtQUwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1640,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1640,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        jzUtils.run({
            "name": "ImageEffect.FUNC.BASIC.Init",
            "callMethod": true
        }, {
            "moduleId": 1643,
            "imgEffOption": {
                "effType": 8,
                "borderType": false,
                "borderColor": "#000",
                "borderWidth": 1,
                "borderStyle": 1,
                "hoverPicPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgt9_7lAYogNLi0wQwNjgN.png",
                "openHoverPic": true,
                "isFontIcon": false,
                "ishovFont": false,
                "hovFont": "faisco-icons-contact2",
                "hovFontColor": "#222222",
                "imgShapeType": 1,
                "w": 54,
                "h": 13,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgo9_7lAYowfa6rQYwNjgN.png",
                "isInit": false,
                "isNeedCallFunc": true
            },
            "tagetOption": {
                "targetParent": "floatImg_J",
                "target": "floatImg_J"
            },
            "imgShapeEff": {
                "imgShapeType": 1,
                "squareSize": 0,
                "borderRadius": 20,
                "picPath": "//27538880.s21i.co99.net/4/3/ABUIABAEGAAgo9_7lAYowfa6rQYwNjgN.png",
                "isInit": false
            },
            "callback": Site.createImageEffectContent_photo,
            "callbackArgs": []
        });
        jzModule.Module.install({
            "id": 1643,
            "type": 1,
            "style": 79,
            "module": {
                "id": 1643,
                "commProp": {
                    "al": [{
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }, {
                        "t": 0,
                        "s": 1.0,
                        "d": 0.0,
                        "c": 1
                    }],
                    "cal": []
                },
                "style": 79,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_infullmeasurepack": 1608,
                    "_autoHeight": 0
                }
            }
        });

        Site.setFullMeasureBgHightInIe6(1608);
        ;$(function() {
            Site.inFullmeasueAnimation.animateFm(1608, 0, 1, {
                "c": 0,
                "d": 4.0,
                "s": 1.0,
                "u": 0
            });
        });
        Site.setFullmeasurePackTimer(1608);
        jzModule.Module.install({
            "module": {
                "prop2": 0,
                "id": 1608,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 109,
                "flag": 0,
                "prop0": 1
            },
            "id": 1608,
            "type": 1,
            "style": 109,
            "perform": {
                "moduleAttr": {
                    "_autoHeight": 0
                }
            }
        });

        Site.cacheModuleFunc.init('initFlBtnStyle', {
            "moduleId": 971,
            "btnNumSystem": 101,
            "btnStyle": {
                "s": {
                    "t": 1,
                    "w": 200,
                    "l": 0,
                    "h": 50
                },
                "r": {
                    "t": 2,
                    "lt": 0,
                    "rt": 0,
                    "lb": 0,
                    "rb": 0
                },
                "sh": {
                    "t": 0,
                    "f": 6,
                    "c": "rgba(0, 0, 0, 0.2)",
                    "dx": 0,
                    "dy": 0
                },
                "b": {
                    "t": 0,
                    "hc": "rgba(255, 255, 255, 0)",
                    "w": 1,
                    "c": "#000000"
                },
                "i": {
                    "t": 0,
                    "ft": 0,
                    "fi": "a0215",
                    "dc": "",
                    "sc": "",
                    "is": 12,
                    "fp": "",
                    "d": 0
                },
                "bg": {
                    "t": 0,
                    "c": "#000000",
                    "hc": "rgba(255, 255, 255, 0)",
                    "p": "",
                    "f": "",
                    "r": 3
                }
            },
            "otherStr": {
                "cc": "rgba(253, 145, 36, 1)",
                "gcc": "rgba(254,200,145, 1)",
                "ff": "",
                "utc": 0,
                "bcc": "#000",
                "imc": 0,
                "tts": {
                    "t": 0,
                    "al": [],
                    "e": ""
                }
            },
            "ofl": 0,
            "sfl": 0
        });
        Site.adjustFlBtnPos(971);
        Site.initModuleTransformTrack(971, 81, {
            "t": 0,
            "al": [],
            "e": ""
        });
        jzModule.Module.install({
            "id": 971,
            "type": 1,
            "style": 81,
            "module": {
                "id": 971,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 81,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_inpack": 970,
                    "_autoHeight": 0
                }
            }
        });

        jzModule.Module.install({
            "id": 972,
            "type": 1,
            "style": 79,
            "module": {
                "id": 972,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 79,
                "flag": 0,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_inpack": 970,
                    "_autoHeight": 0
                }
            }
        });

        Site.cacheModuleFunc.init('initFlBtnStyle', {
            "moduleId": 973,
            "btnNumSystem": 101,
            "btnStyle": {
                "s": {
                    "t": 1,
                    "w": 200,
                    "l": 0,
                    "h": 50
                },
                "r": {
                    "t": 2,
                    "lt": 0,
                    "rt": 0,
                    "lb": 0,
                    "rb": 0
                },
                "sh": {
                    "t": 0,
                    "f": 6,
                    "c": "rgba(0, 0, 0, 0.2)",
                    "dx": 0,
                    "dy": 0
                },
                "b": {
                    "t": 0,
                    "hc": "rgba(255, 255, 255, 0)",
                    "w": 1,
                    "c": "#000000"
                },
                "i": {
                    "t": 0,
                    "ft": 0,
                    "fi": "a0215",
                    "dc": "",
                    "sc": "",
                    "is": 12,
                    "fp": "",
                    "d": 0
                },
                "bg": {
                    "t": 0,
                    "c": "#000000",
                    "hc": "rgba(255, 255, 255, 0)",
                    "p": "",
                    "f": "",
                    "r": 3
                }
            },
            "otherStr": {
                "cc": "rgba(253, 145, 36, 1)",
                "gcc": "rgba(254,200,145, 1)",
                "ff": "",
                "utc": 0,
                "bcc": "#000",
                "imc": 0,
                "tts": {
                    "t": 0,
                    "al": [],
                    "e": ""
                }
            },
            "ofl": 0,
            "sfl": 0
        });
        Site.adjustFlBtnPos(973);
        Site.initModuleTransformTrack(973, 81, {
            "t": 0,
            "al": [],
            "e": ""
        });
        jzModule.Module.install({
            "id": 973,
            "type": 1,
            "style": 81,
            "module": {
                "id": 973,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 81,
                "flag": 1,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_inpack": 970,
                    "_autoHeight": 0
                }
            }
        });

        jzModule.Module.install({
            "id": 974,
            "type": 1,
            "style": 79,
            "module": {
                "id": 974,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 79,
                "flag": 0,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_inpack": 970,
                    "_autoHeight": 0
                }
            }
        });

        jzModule.Module.install({
            "prop1": [{
                "i": 971,
                "t": -2,
                "l": 0,
                "dir": 1,
                "dist": 0.4
            }, {
                "i": 972,
                "t": 4,
                "l": 28,
                "dir": 1,
                "dist": 0.4
            }, {
                "i": 973,
                "t": 58,
                "l": 0,
                "dir": 1,
                "dist": 0.4
            }, {
                "i": 974,
                "t": 120,
                "l": 6,
                "dir": 1,
                "dist": 0.4
            }],
            "prop2": 0,
            "prop5": {
                "bgEffect": {
                    "type": 0,
                    "packBg": {
                        "y": 0,
                        "c": "#000",
                        "f": "",
                        "r": 0,
                        "o": 100
                    },
                    "maskBg": {
                        "y": 0,
                        "c": "#000",
                        "f": "",
                        "r": 0,
                        "o": 100
                    }
                },
                "packEffect": {
                    "type": 0
                },
                "link": {
                    "isOpen": 0,
                    "hi": "",
                    "ot": false,
                    "nf": false,
                    "h": "",
                    "hn": ""
                }
            },
            "id": 970,
            "type": 1,
            "style": 87,
            "module": {
                "id": 970,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 87,
                "flag": 0,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "bannerTitle": "联系我们",
                    "_autoHeight": 0,
                    "_side": 1
                }
            }
        });

        jzModule.Module.install({
            "id": 311,
            "type": 1,
            "style": 67,
            "module": {
                "id": 311,
                "commProp": {
                    "al": [],
                    "cal": []
                },
                "style": 67,
                "flag": 0,
                "prop0": 0
            },
            "perform": {
                "moduleAttr": {
                    "_global": true,
                    "_side": 1
                }
            }
        });

        //输出百度自动推送js
        // Site.printBaiduPushJs();

        // Site.ajaxLogDog();
        // Site.sendBrowerInfo(false);

        Site.initPage();
        setTimeout(afterModuleLoaded, 0);
        Site.triggerGobalEvent("siteReadyLoad");

    });

    function afterModuleLoaded() {

        Site.initPage2();
        Site.initBackToTopTool(false, false, true, '回到顶部', 'secondStyle_06');

    }
    // afterModuleLoaded end
    window._jzProUrl = '';
    window._mallProUrl=null;
    window._flyerManageDomain = '';
    window._siteAdmDomain = '';
    window._jzHomeUrl = '';
    window._oemDocumentDomain=null;

    Fai.top._allSiteMallOemDomain = 'i.mall.vip.webportal.top';
    Fai.top._jzAllSiteDomain = 'i.jz.fkw.com';
    window._allSiteDomain = ''
    window._allMallDomain = ''
    window._homeDomain = '';

    _jzProUrl = 'jz.fkw.com';
    _mallProUrl = 'mall.fkw.com';
    _flyerManageDomain = 'i.cd.fkw.com';
    _siteAdmDomain = 'fkw.com';
    _jzHomeUrl = 'jz.fkw.com';
    _mallHomeUrl = 'mall.fkw.com';
    _allSiteDomain = 'i.jz.fkw.com';
    _allMallDomain = 'i.mall.fkw.com';
    _homeDomain = 'fkw.com';

    _oemDocumentDomain = 'webportal.top';
    _Global._webRightBar = true;
    window._isMemberLogin = false;
    window._noCover = 0;
    _Global._footerHidden = false;
    _Global._footerHiddenAllowed = true;
    _Global._memberTopBar = true;
    // 顶部登录条
    window._navPositionFixTop = false;
    // 导航栏固定到顶部
    window._elevatorNavStyleChanged = 0;
    if (_Global.isHomePage) {
    window._elevatorNav = {
            "s": 0,
            "sc": "#fff",
            "eil": [{
                "img": "",
                "hoverImg": "",
                "fileId": "",
                "hoverFileId": "",
                "link": {},
                "name": "电梯项1"
            }, {
                "img": "",
                "hoverImg": "",
                "fileId": "",
                "hoverFileId": "",
                "link": {},
                "name": "电梯项2"
            }, {
                "img": "",
                "hoverImg": "",
                "fileId": "",
                "hoverFileId": "",
                "link": {},
                "name": "电梯项3"
            }],
            "sm": 0,
            "eifc": {
                "y": 0,
                "ic": "#fff",
                "sc": "#fff"
            },
            "eif": {
                "y": 0,
                "s": 14,
                "f": "微软雅黑",
                "c": "#000",
                "ac": "#fff",
                "w": 0,
                "d": 0,
                "i": 0
            },
            "eis": {
                "y": 0,
                "w": 80,
                "h": 40
            },
            "eiis": {
                "y": 0,
                "w": 20,
                "h": 20
            },
            "eisp": {
                "y": 0,
                "s": 0,
                "h": 0,
                "c": "#000"
            },
            "eir": {
                "y": 0,
                "s": 0
            },
            "eib": {
                "y": 0,
                "c": "#000",
                "sc": "#000",
                "s": 0,
                "t": true,
                "b": true,
                "l": true,
                "r": true
            },
            "eirs": 0,
            "ebg": {
                "y": 0,
                "f": "",
                "p": "",
                "c": "#000",
                "linear": "",
                "bg": {
                    "backgroundColor": "",
                    "backgroundPositionX": "",
                    "backgroundPositionY": "",
                    "backgroundRepeat": "",
                    "backgroundSize": ""
                }
            },
            "er": {
                "y": 0,
                "s": 0
            },
            "eb": {
                "y": 0,
                "c": "#000",
                "s": 0,
                "t": true,
                "b": true,
                "l": true,
                "r": true
            },
            "ep": {
                "r": -1,
                "t": -1
            }
        };
    }
    window.nav2SubMenu = [];
    window.nav106SubMenu = [];
    window.nav107SubMenu = [];
    window.nav101SubMenu = [];
    window.nav114SubMenu = [];
    window.nav105SubMenu = [];
    window.nav110SubMenu = [];
    window.nav102SubMenu = [];

    window._useBannerVersionTwo = true;
    window._customBackgroundData = {
        "styleDefault": true,
        "s": true,
        "h": false,
        "r": 3,
        "ps": 0,
        "o": "",
        "sw": -1,
        "swt": 0,
        "e": 0,
        "wbh": -1,
        "wbw": -1,
        "clw": -1,
        "crw": -1,
        "wbws": -1,
        "wbs": 0,
        "id": "",
        "p": "",
        "bBg": {
            "y": 0,
            "r": 3,
            "ps": 0,
            "f": "",
            "p": "",
            "c": ""
        },
        "cBg": {
            "y": 0,
            "r": 3,
            "ps": 0,
            "f": "",
            "p": "",
            "c": ""
        },
        "cmBg": {
            "y": 0,
            "r": 3,
            "ps": 0,
            "f": "",
            "p": "",
            "c": ""
        },
        "bm": {},
        "cm": {},
        "cp": {
            "y": 0
        }
    };
    window._templateBackgroundData = {
        "styleDefault": true,
        "sw": 1440,
        "wbs": 1,
        "id": "",
        "p": "",
        "bBg": {
            "c": "#000",
            "f": "",
            "r": 3,
            "ps": 0,
            "p": "",
            "y": 0
        },
        "cBg": {
            "c": "#000",
            "f": "",
            "r": 3,
            "ps": 0,
            "p": "",
            "y": 0
        },
        "cmBg": {
            "y": 2,
            "c": "rgba(33, 33, 33, 1)",
            "f": "",
            "r": 3,
            "ps": 0,
            "p": ""
        },
        "cp": {
            "y": 0
        },
        "swt": 3,
        "s": false,
        "o": "rgba(255, 255, 255, 1)",
        "h": false,
        "r": 3,
        "ps": 0,
        "e": 0,
        "wbh": -1,
        "wbw": -1,
        "clw": -1,
        "crw": -1,
        "wbws": -1,
        "bm": {},
        "cm": {}
    };
    window._resImageRoot = '//2.ss.508sys.com';
    window._useBannerNewType = true;
    window._templateBannerData = {
        "ce": {},
        "pl": 0,
        "s": 0,
        "i": 4000,
        "a": 1500,
        "h": false,
        "o": false,
        "t": 1,
        "p": 0,
        "pt": 0,
        "bt": 1,
        "ws2": false,
        "l": [],
        "f": {},
        "n": [],
        "c": 3,
        "at": 0,
        "tt": false,
        "ws": false
    };
    window._pageBannerData = {
        "ce": {},
        "pl": 0,
        "s": 0,
        "i": 4000,
        "a": 1500,
        "h": false,
        "o": false,
        "t": 1,
        "p": 0,
        "pt": 0,
        "bt": 1,
        "ws2": false,
        "l": [],
        "f": {},
        "n": [],
        "c": 3,
        "at": 0,
        "tt": false,
        "ws": false
    };
    window._bannerData = _pageBannerData;
    window._templateBannerV2Data = {
        "bl": [{
            "t": 1,
            "i": "ABUIABACGAAggvzzkgYo8Mfk0gcwgA84iwc",
            "ot": 0,
            "p": "//27538880.s21i.co99.net/2/3/ABUIABACGAAggvzzkgYo8Mfk0gcwgA84iwc.jpg",
            "w": 1920,
            "h": 907,
            "tp": "//27538880.s21i.co99.net/2/3/ABUIABACGAAggvzzkgYo8Mfk0gcwgA84iwc!100x100.jpg",
            "du": "//download.s21i.co99.net/27538880/0/3/ABUIABACGAAggvzzkgYo8Mfk0gcwgA84iwc.jpg?f=ABUIABACGAAggvzzkgYo8Mfk0gcwgA84iwc.jpg&v=",
            "e": 0,
            "u": ""
        }],
        "mbl": [{
            "t": 1,
            "i": "ABUIABACGAAg79yytQYoyOzf5AEwgA84vAU",
            "ot": 0,
            "st": 0,
            "p": "//27538880.s21i.co99.net/2/3/ABUIABACGAAg79yytQYoyOzf5AEwgA84vAU.jpg",
            "w": 1920,
            "h": 700,
            "tp": "//27538880.s21i.co99.net/2/3/ABUIABACGAAg79yytQYoyOzf5AEwgA84vAU!100x100.jpg",
            "du": "//download.s21i.co99.net/27538880/0/3/ABUIABACGAAg79yytQYoyOzf5AEwgA84vAU.jpg?f=ABUIABACGAAg79yytQYoyOzf5AEwgA84vAU.jpg&v=",
            "e": 0,
            "u": ""
        }, {
            "t": 1,
            "i": "ABUIABACGAAgt8CttAYo48i4UjCADzi8BQ",
            "ot": 0,
            "st": 0,
            "p": "//27538880.s21i.co99.net/2/3/ABUIABACGAAgt8CttAYo48i4UjCADzi8BQ.jpg",
            "w": 1920,
            "h": 700,
            "tp": "//27538880.s21i.co99.net/2/3/ABUIABACGAAgt8CttAYo48i4UjCADzi8BQ!100x100.jpg",
            "du": "//download.s21i.co99.net/27538880/0/3/ABUIABACGAAgt8CttAYo48i4UjCADzi8BQ.jpg?f=ABUIABACGAAgt8CttAYo48i4UjCADzi8BQ.jpg&v=",
            "e": 0,
            "u": ""
        }, {
            "t": 1,
            "i": "ABUIABACGAAgpKzIpQYovK20uAcwgA84vAU",
            "ot": 0,
            "st": 0,
            "p": "//27538880.s21i.co99.net/2/3/ABUIABACGAAgpKzIpQYovK20uAcwgA84vAU.jpg",
            "w": 1920,
            "h": 700,
            "tp": "//27538880.s21i.co99.net/2/3/ABUIABACGAAgpKzIpQYovK20uAcwgA84vAU!100x100.jpg",
            "du": "//download.s21i.co99.net/27538880/0/3/ABUIABACGAAgpKzIpQYovK20uAcwgA84vAU.jpg?f=ABUIABACGAAgpKzIpQYovK20uAcwgA84vAU.jpg&v=",
            "e": 0,
            "u": ""
        }, {
            "t": 1,
            "i": "ABUIABACGAAguKzIpQYo8Jrz8QcwgA84vAU",
            "ot": 0,
            "st": 0,
            "p": "//27538880.s21i.co99.net/2/3/ABUIABACGAAguKzIpQYo8Jrz8QcwgA84vAU.jpg",
            "w": 1920,
            "h": 700,
            "tp": "//27538880.s21i.co99.net/2/3/ABUIABACGAAguKzIpQYo8Jrz8QcwgA84vAU!100x100.jpg",
            "du": "//download.s21i.co99.net/27538880/0/3/ABUIABACGAAguKzIpQYo8Jrz8QcwgA84vAU.jpg?f=ABUIABACGAAguKzIpQYo8Jrz8QcwgA84vAU.jpg&v=",
            "e": 0,
            "u": ""
        }, {
            "t": 1,
            "i": "ABUIABACGAAg16zIpQYo4OX8ITCADzi8BQ",
            "ot": 0,
            "st": 0,
            "p": "//27538880.s21i.co99.net/2/3/ABUIABACGAAg16zIpQYo4OX8ITCADzi8BQ.jpg",
            "w": 1920,
            "h": 700,
            "tp": "//27538880.s21i.co99.net/2/3/ABUIABACGAAg16zIpQYo4OX8ITCADzi8BQ!100x100.jpg",
            "du": "//download.s21i.co99.net/27538880/0/3/ABUIABACGAAg16zIpQYo4OX8ITCADzi8BQ.jpg?f=ABUIABACGAAg16zIpQYo4OX8ITCADzi8BQ.jpg&v=",
            "e": 0,
            "u": ""
        }, {
            "t": 1,
            "i": "ABUIABACGAAg46zIpQYo7szXzAMwgA84vAU",
            "ot": 0,
            "st": 0,
            "p": "//27538880.s21i.co99.net/2/3/ABUIABACGAAg46zIpQYo7szXzAMwgA84vAU.jpg",
            "w": 1920,
            "h": 700,
            "tp": "//27538880.s21i.co99.net/2/3/ABUIABACGAAg46zIpQYo7szXzAMwgA84vAU!100x100.jpg",
            "du": "//download.s21i.co99.net/27538880/0/3/ABUIABACGAAg46zIpQYo7szXzAMwgA84vAU.jpg?f=ABUIABACGAAg46zIpQYo7szXzAMwgA84vAU.jpg&v=",
            "e": 0,
            "u": ""
        }],
        "s": 1,
        "bt": 0,
        "at": 1,
        "i": 2500,
        "a": 1000,
        "blh": {
            "t": 0,
            "h": 1200
        },
        "blw": {
            "t": 0,
            "w": 1440
        },
        "bzb": {
            "t": 1,
            "o": 100,
            "c": "rgba(4, 4, 4, 1)"
        },
        "bla": 1,
        "ble": {
            "t": 0,
            "at": 0
        },
        "blpe": 0,
        "bte": 2,
        "plx": {
            "o": 0,
            "obg": 0,
            "dir": 0,
            "dist": 0.4
        },
        "bv": {
            "fId": "ABUIABA6GAAgwpGDkwYomLO2uAU",
            "fst": 0,
            "fsh": 0.0,
            "fUrl": "//27538880.s21v.co99.net/58/3/ABUIABA6GAAgwpGDkwYomLO2uAU.mp4"
        },
        "bbs": {
            "imgId": "",
            "bis": 0,
            "bo": 0,
            "url": "//2.ss.508sys.com/image/no-pic.jpg"
        }
    };
    window._pageBannerV2Data = {
        "bl": [{
            "t": 1,
            "i": "ABUIABACGAAgksa7kQYojvfhPjCADziWAQ",
            "ot": 0,
            "p": "//27538880.s21i.co99.net/2/3/ABUIABACGAAgksa7kQYojvfhPjCADziWAQ.jpg",
            "w": 1920,
            "h": 150,
            "tp": "//27538880.s21i.co99.net/2/3/ABUIABACGAAgksa7kQYojvfhPjCADziWAQ!100x100.jpg",
            "du": "//download.s21i.co99.net/27538880/0/3/ABUIABACGAAgksa7kQYojvfhPjCADziWAQ.jpg?f=ABUIABACGAAgksa7kQYojvfhPjCADziWAQ.jpg&v=",
            "e": 0,
            "u": ""
        }],
        "mbl": [],
        "s": 1,
        "bt": 1,
        "at": 0,
        "i": 4000,
        "a": 1500,
        "blh": {
            "t": 1,
            "h": 100
        },
        "blw": {
            "t": 0
        },
        "bzb": {
            "t": 1,
            "o": 100,
            "c": "rgba(53, 53, 53, 1)"
        },
        "bla": 1,
        "ble": {
            "t": 0,
            "at": 0
        },
        "blpe": 0,
        "bte": 0,
        "plx": {
            "o": 0,
            "obg": 0,
            "dir": 0,
            "dist": 0.4
        },
        "bv": {
            "fId": "/image/rimage/section/banner/default/flv.mp4",
            "fst": 0,
            "fsh": 0.0,
            "fUrl": "//0.ss.508sys.com/image/rimage/section/banner/default/flv.mp4"
        },
        "bbs": {
            "imgId": "",
            "bis": 0,
            "bo": 0,
            "url": "//2.ss.508sys.com/image/no-pic.jpg"
        },
        "new_bt": true
    };
    window._bannerV2Data = _pageBannerV2Data;
    window._closePhotoDetailEditSettings = true;
    window._siteSeachRangeLength = 12;
    window._useTemplateHeaderZone = true;
    window._useTemplateFooterZone = true;
    window._useTemplateBottomFloatLayer = true;
    window._useTemplateTopAdv = true;
    window._mallOpen = false;
    window._couponOpen = false
    window.toolBoxShowView = false;
    window.toolBoxShowSet = false;
    window.toolBoxShowABTool = false;
    window._wideBanner = true;
    window._navStyleData = {
        "no": true,
        "s": 0,
        "ns": {
            "w": 732,
            "h": -1
        },
        "cs": {
            "w": 732,
            "h": -1,
            "wy": 0
        },
        "np": {},
        "ncp": {
            "y": 1,
            "t": 28,
            "r": -1,
            "b": -1,
            "l": 336,
            "hl": 351,
            "ht": 0
        },
        "cp": {
            "y": 0,
            "t": -1,
            "l": -1
        },
        "nis": {
            "w": -1,
            "h": -1
        },
        "gt": {
            "f": "宋体",
            "s": 12,
            "w": 0,
            "c": "#000",
            "y": 0
        },
        "ht": {
            "c": "#000",
            "y": 0
        },
        "nb": {
            "c": "#000",
            "f": "",
            "r": 0,
            "p": "",
            "y": 0
        },
        "cb": {
            "c": "#000",
            "f": "",
            "r": 0,
            "p": "",
            "y": 0
        },
        "nib": {
            "c": "#000",
            "r": 0,
            "f": "",
            "p": "",
            "y": 0
        },
        "nihb": {
            "c": "#000",
            "r": 0,
            "f": "",
            "p": "",
            "y": 0
        },
        "niss": {
            "w": -1,
            "h": -1
        },
        "nisb": {
            "c": "#000",
            "r": 0,
            "f": "",
            "p": "",
            "y": 0
        },
        "nsigt": {
            "f": "宋体",
            "s": 12,
            "w": 0,
            "c": "#000",
            "y": 0
        },
        "nsiht": {
            "c": "#000",
            "y": 0
        },
        "nsis": {
            "w": -1,
            "h": -1
        },
        "nsib": {
            "c": "#000",
            "r": 0,
            "f": "",
            "p": "",
            "y": 0
        },
        "nsihb": {
            "c": "#000",
            "r": 0,
            "f": "",
            "p": "",
            "y": 0
        },
        "nsiho": 0,
        "nmove": 1,
        "v": 2,
        "nsmt": {},
        "nsmb": {},
        "nrs": {
            "n": {
                "t": 0
            },
            "c": {
                "t": 0
            },
            "i": {
                "t": 0
            },
            "smt": {
                "t": 0
            },
            "smb": {
                "t": 0
            },
            "si": {
                "t": 0
            },
            "is": {
                "t": 0
            },
            "sis": {
                "t": 0
            },
            "tmt": {
                "t": 0
            },
            "tmb": {
                "t": 0
            },
            "ti": {
                "t": 0
            },
            "tis": {
                "t": 0
            }
        },
        "nsw": {
            "n": {
                "t": 0
            },
            "c": {
                "t": 0
            },
            "i": {
                "t": 0
            },
            "sm": {
                "t": 0
            },
            "si": {
                "t": 0
            },
            "is": {
                "t": 0
            },
            "sis": {
                "t": 0
            }
        },
        "nbr": {
            "n": {
                "t": 0
            },
            "i": {
                "t": 0
            },
            "sm": {
                "t": 0
            },
            "si": {
                "t": 0
            },
            "is": {
                "t": 0
            },
            "sis": {
                "t": 0
            },
            "tm": {
                "t": 0
            },
            "ti": {
                "t": 0
            },
            "tis": {
                "t": 0
            }
        },
        "ntf": {},
        "ntmt": {},
        "ntmb": {},
        "onft": false
    };
    window._useNavVersionTwo = true;
    window._memberTopBar = true;
    window._memberTopBar_versionTwo = true;
    _Global._navHidden = false;
    _Global._topBarV2 = false;
    _Global._stylePanelV1 = false;
    _Global._stylePanelV2 = false;
    window._useFooterVersionTwo = true;

    Fai.top._isDevDebug = false;
    Fai.top.checkUPlanAcct = false;
    Fai.top._isShowFkAuthTips = true;
    Fai.top._fkAuth = false;
    Fai.top._fkAuthTitle = "凡科认证";
    Fai.top.staffClose = true;
    Fai.top._footerInfo = "";
    _Global._oemHiddenSupport = false;
    _Global._hideSupportAllowed = true;
    _Global.techSupport = '//i.fkw.com/marketing/techSupport.jsp';
    _Global._hideSideSupportAllowed = false;
    _Global._hiddenSupport = true;
    _Global._hiddenSideSupport = false;
    _Global._oldHiddenSupport = true;
    _Global._oldHiddenSideSupport = false;
    _Global._hiddenLogin = true;
    _Global._openManageSite = true;
    _Global._hiddenMobile = true;
    _Global._hiddenICP = true;
    _Global._hiddenFooterInfo = false;
    _Global._footerInfoV2 = "©2024 苏州蟹满堂蟹业有限公司 版权所有";
    _Global.isFreeVer = false;
    _Global._hasBeiAn = true;
    _Global._hiddenMps = true;
    _defaultFooterInfo = "";
    window._cityJsLink = "//1.ss.508sys.com/js/dist/libs/city2.min.js?v=202402281530";
    window._floatBtnCssLink = "//2.ss.508sys.com/css/dist/styles/floatBtn1.min.css?v=202402221530";
    window._themeColorType = 1;
    window._bgMusic = {
        "o": true,
        "l": true,
        "v": 60,
        "isAuto": 0,
        "i": "",
        "p": "",
        "n": "",
        "ptn": {
            "t": 0,
            "sn": "",
            "sgn": "",
            "i": {
                "t": 0,
                "cl": "#324D52"
            },
            "f": {
                "t": 0,
                "cl": "#333333"
            },
            "b": {
                "t": 0,
                "cl": "#AED7E0"
            }
        }
    };
    window._sysIndex = 2;
    window._siteDemo = false;

    window._isRealDemo = false;
    _Global._backToTop = true;

    window._isGrayTestUser = true;

    window._newLinkForSite = false;
    window._siteType = 1;
    window._usePrem = true;
    window._acctCreateTime = 1625878551000;
    window._siteId = 3;
    window._isUseNewPanel = !_isMallWeb;
    // 是否使用新的面板
    window._isMallDesigner = false;
    window._hideHelp = false;
    window._templateLayout = _templateDefLayout.NAV_FLOAT_ON_BANNER;
    window._webBannerHeight = -1;
    window._isNewUserForLayoutToNewVersion = true;
    window._undo = {
        allow: {
            undo: 0,
            redo: 0
        }
    };
    window._choiceCurrencyVal = "￥";
    window.siteCurrencyRight = false;
    window._moduleAnimationPercent = -1;
    window.file_size_limit = parseInt("50");

    _Global.styleChangeNum = 0;
    _Global.showSaveGuide = false;
    _Global.saveBtnState = 0;
    _Global.previewBtnState = 0;
    _Global.saveClickConut = 0;
    window.isJuly3FreeUser = false;
    window._newUserGuide = false;
    window.videoSource = {
        cssVideoJs: "//2.ss.508sys.com/css/comm/video.js/video-js.min.css?v=202307101206",
        cssDistVideo: "//2.ss.508sys.com/css/dist/styles/video.min.css?v=202407231110",
        jsVideo: "//1.ss.508sys.com/js/comm/video.js/video.min.js?v=202307101206"
    }
    if (false) {
        if (_aid > 9855603 && !false) {
            _newUserGuide = true;
        }
    } else {
        if (_aid > 15971536 && !false) {
            // undefined and false	
            _newUserGuide = true;
            //传到全局，当前
        }
    }
    _newUserGuide = _isMallDesigner ? false : _newUserGuide;
    Site.getCouponByHdJump(0);
    Site.receiveCouponFromHd(false, 0, 0.0);
    window._executedCountForUserGuide = 1;
    window.jzOpenTime = 1625878552000;

    window.loginMemberSucJumpUrlIllegality = false;
    _Global._siteAdvancedSetting = true;

    window.fk_old_onload = window.onload;
    $(window).load(function() {

        // $.ajax({
        //     url: "/ajax/setCookie_h.jsp?cmd=setWafCk_setCheckSiteLvBrowser"
        // });

        Site.checkUserDomainAction();

        Site.cacheModuleFunc.runSiteInit();

        if (typeof fk_old_onload == "function") {
            fk_old_onload.apply(this, arguments);
        }

        Site.pageOnload();

        if (false) {
            $(function() {
                function cssTest() {
    window.elem = document.createElement('x');
                    elem.style.cssText = 'pointer-events:auto';
                    return elem.style.pointerEvents === 'auto';
                }
                if (cssTest()) {
                    $('body').append("<svg id='GWWatermark' class='gw_watermark'><svg>")
                }
            })
        }

        // setTimeout(function() {

        //     if (!Fai.isIE8() && !Fai.isIE7()) {
        //         $LAB.script("//1.ss.508sys.com/js/dist/svg.min.js?v=202411111122");

        //     }

        // }, 0);

    });
    jzUtils.run({
        "name": "Pre.errorReport",
        "base": window
    });

    //Site.beforeUnloadFunc(statId);

    // 在线视频模块

    // $LAB.script("//1.ss.508sys.com/js/dist/libs/photoSlide.min.js?v=202408061027");

    // $LAB.script("//1.ss.508sys.com/js/dist/libs/imageEffect.min.js?v=202404081140").wait(function() {
    //     jzUtils.trigger({
    //         "name": "ImageEffect.FUNC.BASIC.Init",
    //         "base": Site
    //     });
    // });

} catch (e) {
    e.innerError = true;
    throw (e);
}

Site.isCssRenderError();

window.FirstPaintData = {
    member: {
        memberTopbarVisible: true,
        loginScript: "//1.ss.508sys.com/js/dist/pages/memberLogin/index.min.js?v=202404081140",
        loginCss: "//2.ss.508sys.com/css/dist/styles/login.min.css?v=202402221530"
    },
    rightBar: {
        open: true
    },
    news: {
        openMobileRealName: false
    },
    product: {
        openMobileRealName: false
    },
    msgBoard: {
        openMobileRealName: false
    },
    realNameAuth: {
        allowSubmitMessage: true,
        allowShowMessage: true
    },
    vote: {
        authInfo: {
            "auid": 170,
            "aid": 27538880,
            "allow": true,
            "name": "外链文章",
            "minVer": 10
        }
    }
};