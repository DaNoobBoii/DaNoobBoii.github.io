const nav = document.querySelector('.nav-links');
const bar = document.querySelector('.bar');
const navbar = document.querySelector('.navbar')

bar.addEventListener('click', function() {
    nav.classList.toggle('active');
});

function change(x) {
    x.classList.toggle("change");
}

$(document).ready(function() {
    $(window).scroll(function () {
        if($(window).scrollTop() > 10) {
            $(navbar).css('backgroundColor','#eee');
        } else {
            $(navbar).css('backgroundColor','rgba(255,255,255,.75)');
        }
    })
})