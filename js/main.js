$(function(){
	// Липкая шапка
	const headerTop = document.querySelector('.header__top');
	const headerContent = document.querySelector('.header__content-inner');
	const headerTopHeight = headerTop.offsetHeight;
	const headerContentHeight = headerContent.offsetHeight;

	window.addEventListener ("scroll", function(){
		let scrollDistance = window.scrollY;

		if(scrollDistance >= headerContentHeight + headerTopHeight){
			headerTop.classList.add('header--fixed');
			headerContent.style.marginTop = '${headerTopHeight}px'
		} else{
				headerTop.classList.remove('header--fixed');
				headerContent.style.marginTop = null;
		}
		console.log(scrollPos);
	})
	
	// Webcomplex (Плавный скролл)
	$("#menu a, .header__decor-link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	// Burger-menu
	$('.burger-menu, .menu a').on('click', function(){
		$('.header__top-inner').toggleClass('header__top-inner--active');
	});

	// Slick (Слайдер)
	$('.blog__slider-content').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 810,
				settings: {
					dots: false,
				}
			}
		]
	})

	// Mixitup
	var mixer = mixitup('.gallery__content');
});