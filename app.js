const nav = document.querySelector('.navLinks');
const links = document.querySelectorAll('#navLink');
const burger = document.querySelector('.burger');
const navbar = document.querySelector('nav');

console.log(navbar);

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(navbar).css('backgroundColor','rgb(35,35,35)');
        }
        else {
            $(navbar).css('backgroundColor','rgba(35,35,35,0)')
        }
    });
});

new Typed('#typed',{
    strings : ["Handsome_Hanz (Discord)","DaNoobBoii (Github)", "Shogun Commander (Youtube)"],
    typeSpeed : 60,
    delaySpeed : 200,
    loop : false
});

(function () {
    var documentElem = $(document),
        nav = $('.navbar'),
        lastScrollTop = 0;
    documentElem.on('scroll', function () {
        var currentScrollTop = $(this).scrollTop();
        if (currentScrollTop > lastScrollTop) nav.addClass('hidden');
        else nav.removeClass('hidden');

        lastScrollTop = currentScrollTop;
    });
})();

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});


function change(x) {
    x.classList.toggle('change');
}

AOS.init();