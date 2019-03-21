// header slider
var count = 0;
$(".slider-header-btn.next").on("click",function(){
	$(".slider-item").removeClass('slide--active');
	count++;
	if(count >= $(".slider-item").length){
		count = 0;
	}
	$(".slider-item").eq(count).addClass('slide--active');
});
$(".slider-header-btn.prev").on("click",function(){
	$(".slider-item").removeClass('slide--active');
	count--;
	if(count == 0){
		count = $(".slider-item").length-1;
	}
	$(".slider-item").eq(count).addClass('slide--active');
});
//slick slider для туров
$(".hotels-services-slider").slick({
	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

$(".tours-slider").slick({
  infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1198,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});
//Открытие закрытие моб меню
$(".moby-btn").on("click", function(e){
	e.preventDefault();
	if($(this).hasClass("btn-close")){
		$(this).removeClass('btn-close');
		$(".moby-btn-decor").css({"display":"block"});
		$(".main-menu-list").css({"display":"none"});
	}else{
		$(".main-menu-list").css({"display":"flex"});
		$(this).addClass("btn-close");
		$(".moby-btn-decor").css({"display":"none"});
	}
});
//подключ. календаря
$(".input-date").daterangepicker({
  locale: {
      format: "DD.MM.YY"
    }
});
// value гостей
var childrenCount = 0;
$(".children-plus").on("click",function(){
  childrenCount ++;
  $("#children").attr("value", childrenCount);
});

$(".children-minus").on("click",function(){
  if(childrenCount > 0){
    childrenCount --;
  }
  $("#children").attr("value", childrenCount);
});

var mensCount = 0;
$(".mens-plus").on("click",function(){
  mensCount ++;
  $("#mens").attr("value", mensCount);
});

$(".mens-minus").on("click",function(){
  if(mensCount > 0){
    mensCount --;
  }
  $("#mens").attr("value", mensCount);
});

var roomsCount = 0;
$(".rooms-plus").on("click",function(){
  roomsCount ++;
  $("#rooms").attr("value", roomsCount);
});

$(".rooms-minus").on("click",function(){
  if(roomsCount > 0){
    roomsCount --;
  }
  $("#rooms").attr("value", roomsCount);
});

$(".resrve-btn").on("click", function(){
  var countPeople = $("#rooms").val() +
   " Номерів " + $("#mens").val() + " дорослих "
    + $("#children").val() + " дітей";
    $(".input-people").attr("value", countPeople);
});
