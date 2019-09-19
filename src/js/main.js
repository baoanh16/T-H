const headerItem = {
    1: {
        link: 'gioi-thieu.html',
        id: '#gioi-thieu',
        breadcrumb: 'Giới thiệu'
    },
    2: {
        link: 'san-pham.html',
        id: '#san-pham',
        breadcrumb: 'Sản phẩm'
    },
    3: {
        link: 'san-pham-ct.html',
        id: '#san-pham',
        breadcrumb: 'Sản phẩm'
    },
    4: {
        link: 'du-an.html',
        id: '#du-an',
        breadcrumb: 'Dự án'
    },
    5: {
        link: 'du-an-ct.html',
        id: '#du-an',
        breadcrumb: 'Dự án'
    },
    6: {
        link: 'tin-tuc.html',
        id: '#tin-tuc',
        breadcrumb: 'Tin tức'
    },
    7: {
        link: 'tin-tuc-ct.html',
        id: '#tin-tuc',
        breadcrumb: 'Tin tức'
    },
    8: {
        link: 'tuyen-dung.html',
        id: '#tuyen-dung',
        breadcrumb: 'Tuyển dụng'
    },
    9: {
        link: 'tuyen-dung-ct.html',
        id: '#tuyen-dung',
        breadcrumb: 'Tuyển dụng'
    },
    10: {
        link: 'lien-he.html',
        id: '#lien-he',
        breadcrumb: 'Liên hệ'
    },
}

$(document).ready(function() {
    for (const key in headerItem) {
        if (headerItem.hasOwnProperty(key)) {
            const element = headerItem[key];
            if (window.location.href.indexOf(element.link) > -1) {
                // header active
                $('header .uk-navbar-nav>li').removeClass('active')
                $(element.id).addClass('active')
                    // breadcrumb
                $('.banner-wrapper .breadcrumb-section ol.breadcrumb li:nth-child(2) a').text(element.breadcrumb)
            }
        }
    }
    let gioiThieu1Slider = new Swiper('.gioi-thieu-1 .box-wrap .swiper-container', {
        speed: 1000,
        navigation: {
            nextEl: '.gioi-thieu-1 .slide .swiper-nav .next',
            prevEl: '.gioi-thieu-1 .slide .swiper-nav .prev'
        }
    })
    let sanPhamCtSlider = new Swiper('.san-pham-ct .top-wrap .swiper-container', {
        speed: 1000,
        slidesPerView: 1,
        navigation: {
            nextEl: '.san-pham-ct .slider .swiper-nav .next',
            prevEl: '.san-pham-ct .slider .swiper-nav .prev'
        }
    })
    let sanPhamKhacCtSlider = new Swiper('.san-pham-ct .bot-wrap .swiper-container', {
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 30
    })
    $("#shareTour").jsSocials({
        showLabel: false,
        showCount: false,
        shares: [{
            share: "facebook",
            logo: "fab fa-facebook-f"
        }, {
            share: "twitter",
            logo: "fab fa-twitter"
        }]
    });
    if ($(window).width() > 1900) {
        $(".diamondswrap").diamonds({
            size: 475,
            gap: 10
        });
    }
    if ($(window).width() > 1675 && $(window).width() < 1900) {
        $(".diamondswrap").diamonds({
            size: 320,
            gap: 10
        });
    }
    if ($(window).width() > 1365 && $(window).width() < 1675) {
        $(".diamondswrap").diamonds({
            size: 320,
            gap: 10
        });
    }
    if ($(window).width() > 1199 && $(window).width() < 1366) {
        $(".diamondswrap").diamonds({
            size: 280,
            gap: 10
        });
    }
    if ($(window).width() > 1199) {
        $(".home-6 .feedback").height(
            $(".home-6 h2.uk-margin-small-top").height() +
            $(".home-6 .news.big").height() -
            30
        );
    }

    $(window).resize(function() {
        if ($(window).width() > 1199) {
            $(".home-6 .feedback").height(
                $(".home-6 h2.uk-margin-small-top").height() +
                $(".home-6 .news.big").height() -
                30
            );
        }
    });
});

$(document).on("load", function() {});
const menuLeftMapping = new MappingListener({
    selector: ".menu-left",
    mobileWrapper: ".uk-offcanvas-bar",
    mobileMethod: "appendTo",
    desktopWrapper: ".menu-left-wrapper",
    desktopMethod: "appendTo",
    breakpoint: 1025
}).watch();
const menuRightMapping = new MappingListener({
    selector: ".menu-right",
    mobileWrapper: ".uk-offcanvas-bar",
    mobileMethod: "appendTo",
    desktopWrapper: ".menu-right-wrapper",
    desktopMethod: "appendTo",
    breakpoint: 1025
}).watch();
const searchMapping = new MappingListener({
    selector: ".uk-search",
    mobileWrapper: ".uk-offcanvas-bar",
    mobileMethod: "appendTo",
    desktopWrapper: ".search-wrapper",
    desktopMethod: "appendTo",
    breakpoint: 1025
}).watch();
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 100) {
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
})