$(document).ready(function () {
	let floorPath = $('.home-image path'); // переменная, где хранится текущий этаж
	let currentFloor = 2; // кнопка увеличения этажа
	let modal = $('.modal'); // создаем переменную для модального окна

	highlightFloor(currentFloor);

	// image --------------------------

	floorPath.on('mouseover', function(){  // функция при наведении на квартиру 
		currentFloor = $(this).attr('data-floor');
		highlightFloor(currentFloor); // присваиваем функции
	});

	floorPath.on('click', function(){ // функция при клике на этаж открывает модальное окно
		modal.addClass('modal-open');
		$('.flats path').removeClass('active-flat-path');
		$('.flat-link').removeClass('active-flat-in-list');

	});

	$('.modal-close-btn').on('click', function(){ // функция при клике на крестик закрывает модальное окно
		modal.removeClass('modal-open');
	});

	// counter ------------------------

	$('.counter-up').on('click', function(){  // отслеживаем клик по кнопке вверх
		if(currentFloor < 18) { // проверяем значение этажа, оно не должно быть больше 18
			highlightFloor(++currentFloor); // прибавляем один этаж 
		}
	});
	$('.counter-down').on('click', function(){ // отслеживаем клик по кнопке вниз
		if(currentFloor > 2) {  // проверяем значение этажа, оно не должно быть меньще 2
			highlightFloor(--currentFloor); // отнимаем один этаж
		}
	});

	function highlightFloor(floor) { 
		let strFloor = floor.toLocaleString('en-US', { minimumIntegerDigits: 2 }); // форматируем переменную с этажом, чтобы было 01, а не 1
		$('.counter').text(strFloor);  // записываем значение этажа в счетчик справа
		floorPath.removeClass('active-floor'); // удаляем активный класс этажей
		$(`[data-floor=${strFloor}]`).addClass('active-floor'); // подсвечиваем текущий этаж 
	};


	// flats --------------------------
	
	$('.flats path').on('mouseover', function(){  // записывем функцию при наведении на квартиру в модальном окне
		currentFlat = $(this).attr('data-flat');
		$('.flats path').removeClass('active-flat-path'); // удаляем scc-класс у всех эл-ов

		$('.flat-link').removeClass('active-flat-in-list'); 
		$(`.flat-link[data-flat=${currentFlat}]`).addClass('active-flat-in-list'); // добавляем класс ( подчеркивание) у выбранного класса
	});

	$('.flat-link').on('mouseover', function(){ // записывем функцию при наведении на квартиру в модальном окне
		currentFlat = $(this).attr('data-flat');

		$('.flat-link').removeClass('active-flat-in-list'); // удаляем scc-класс у всех эл-ов
		$(`.flat-link[data-flat=${currentFlat}]`).addClass('active-flat-in-list'); // добавляем класс ( подчеркивание) у выбранного класса

		$('.flats path').removeClass('active-flat-path'); // удаляем scc-класс у всех эл-ов
		$(`.flats path[data-flat=${currentFlat}]`).addClass('active-flat-path'); // добавляем класс ( выделение квартиры ) у выбранного класса
	});

	$('.button-show-flat').on('click', function(){ // функция для клика по кнопке  "Смотреть квартиры на этаже"
		modal.addClass('modal-open'); // открываем модальное окно
		$('.flats path').removeClass('active-flat-path'); // удаляем scc-класс у всех эл-ов
		$('.flat-link').removeClass('active-flat-in-list'); // удаляем scc-класс у всех эл-ов
	});

});

