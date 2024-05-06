var time;
var day;
var month;
var year;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var center;

function todayEqualActive() {
  setTimeout(function () {
    if ($(".ui-datepicker-current-day").hasClass("ui-datepicker-today")) {
      $(".ui-datepicker-today")
        .children(".ui-state-default")
        .css("border-bottom", "0");
    } else {
      $(".ui-datepicker-today")
        .children(".ui-state-default")
        .css("border-bottom", "2px solid rgba(53,60,66,0.5)");
    }
  }, 20);
}

todayEqualActive();

$('#calendar').datepicker({
  inline: true,
  firstDay: 1,
  showOtherMonths: true,
  onChangeMonthYear: function () {
    todayEqualActive();
  },
  beforeShowDay: function (date) {
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    var dayOfWeek = date.getDay();

    if (date < currentDate) {
      return [false, "ui-state-disabled"];
    }

    if (dayOfWeek === 6 || dayOfWeek === 0) {
        
      return [true, "red-day"];
    }

    return [true, ""];
  },
  onSelect: function (dateText, inst) {
    var date = $(this).datepicker('getDate'),
      day = date.getDate(),
      month = date.getMonth() + 1,
      year = date.getFullYear();

    var monthName = months[month - 1];
    $(".request .day").text(monthName + " " + day);

    todayEqualActive();

    $(".request").removeClass("disabled");

    var index;

    setTimeout(function () {
      $(".ui-datepicker-calendar tbody tr").each(function () {
        if ($(this).find(".ui-datepicker-current-day").length) {
          index = $(this).index() + 1;
        }
      });

      $("<tr class='timepicker-cf'></tr>")
        .insertAfter($(".ui-datepicker-calendar tr")
          .eq(index));

      var top = $(".timepicker-cf").offset().top - 2;

      if ($(".timepicker").css('height') == '60px') {
        $(".timepicker-cf").animate({
          'height': '0px'
        }, { duration: 200, queue: false });
        $(".timepicker").animate({
          'top': top
        }, 200);
        $(".timepicker-cf").animate({
          'height': '60px'
        }, 200);
      } else {
        $(".timepicker").css('top', top);
        $(".timepicker, .timepicker-cf").animate({
          'height': '60px'
        }, 200);
      }
    }, 0);

    time = $(".owl-stage .center").text();
    $(".request .time").text(time);

    $(".owl-item").removeClass("center-n");
    center = $(".owl-stage").find(".center");
    center.prev("div").addClass("center-n");
    center.next("div").addClass("center-n");
  }
});

$(".form-name input").each(function () {
  $(this).keyup(function () {
    if (this.value) {
      $(this).siblings("label").css({
        'font-size': '0.8em',
        'left': '.15rem',
        'top': '0%'
      });
    } else {
      $(this).siblings("label").removeAttr("style");
    }
  });
});

$(".timepicker").on('click', '.owl-next', function () {
  time = $(".owl-stage .center").text();
  $(".request .time").text(time);

  $(".owl-item").removeClass("center-n");
  center = $(".owl-stage").find(".center");
  center.prev("div").addClass("center-n");
  center.next("div").addClass("center-n");
});

$(".timepicker").on('click', '.owl-prev', function () {
  time = $(".owl-stage .center").text();
  $(".request .time").text(time);

  $(".owl-item").removeClass("center-n");
  center = $(".owl-stage").find(".center");
  center.prev("div").addClass("center-n");
  center.next("div").addClass("center-n");
});

$('.owl').owlCarousel({
  center: true,
  loop: true,
  items: 5,
  dots: false,
  nav: true,
  navText: " ",
  mouseDrag: false,
  touchDrag: true,
  responsive: {
    0: {
      items: 3
    },
    700: {
      items: 5
    },
    1200: {
      items: 7
    }
  }
});

$(document).on('click', '.ui-datepicker-next', function (e) {
  $(".timepicker-cf").hide(0);
  $(".timepicker").css({
    'height': '0'
  });
  e.preventDefault();
  $(".ui-datepicker").animate({
    "-webkit-transform": "translate(100%,0)"
  }, 200);
});

$(document).on('click', '.ui-datepicker-prev', function () {
  $(".timepicker-cf").hide(0);
  $(".timepicker").css({
    'height': '0'
  });
  $(".ui-datepicker").animate({
    'transform': 'translateX(-100%)'
  }, 200);
});

$(window).on('resize', function () {
  $(".timepicker").css('top', $(".timepicker-cf").offset().top - 2);
});
