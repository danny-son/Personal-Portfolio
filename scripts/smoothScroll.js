$('.nav-bar a').on('click', function (event) {
    console.log(this.hash);
    if(this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        if (hash == "#about-me") {
            $('html, body').animate({
                scrollTop: $('body').scrollTop(0)
            }, 200);
        } else {
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 109
            }, 200);
        }
    }
});