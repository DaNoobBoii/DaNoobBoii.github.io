const nav = document.querySelector('.navLinks');
const burger = document.querySelector('.burger');
let navbar = document.querySelector('nav');
var myVar;

console.log(navbar);

$(document).ready(function() {
    $(window).scroll(function () {
        if($(window).scrollTop() > 10) {
            $(navbar).css('backgroundColor','#eee');
        } else {
            $(navbar).css('backgroundColor','rgba(255,255,255,.75)');
        }
    })
})

function change(x) {
    x.classList.toggle('change');
}

burger.addEventListener('click', function() {
    nav.classList.toggle('active');
});

new Typed('#typed',{
    strings : ["My Name Is Handsome_Hanz","I am Front-End Web Developer","I Can't Use Javascript yet","I Have Speciality In CSS"],
    typeSpeed : 90,
    delaySpeed : 1000,
    loop : true
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
}) ();

$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

