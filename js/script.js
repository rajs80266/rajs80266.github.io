$(window).on("load", function () {
  $(".loading .in").fadeOut(500, function () {
    $(".loading").fadeOut(750);
  });
});

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false,
  });

  var t = new Typed(".type", {
    strings: [
      "Software Engineer.",
      "Full Stack Developer.",
      "Competitive Programmer.",
      "Technology Enthusiast.",
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      938: {
        items: 4,
      },
    },
  });

  var sto = $(".ssec").offset().top;

  $(window).scroll(function () {
    if (window.pageYOffset > sto - $(window).height() + 300) {
      $(".chart").easyPieChart({
        //your options goes here
        easing: "easeInOut",
        barColor: "#037fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
          $(this.el).find(".pt").text(Math.round(percent));
        },
      });
    }
  });

  $("#nav li a").click(function (e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  const nav = $("nav");
  const navTop = nav.offset().top;

  $(window).on("scroll", stick);
  function stick() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fix");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fix");
    }
  }
});
