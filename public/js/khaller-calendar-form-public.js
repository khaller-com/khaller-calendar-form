(function( $ ) {
	'use strict';

	$(document).ready(() => {
		$("[class*='khaller-calendar']").each((i, el) => {
			let inp = $(el).find('input')[0];
			$(inp).css('display', 'none')
			$(inp).attr('id', `kcalendar-${i+1}-input`)
			$(el).append(`<div id="kcalendar-${i+1}" style="width: 308px !important"></div>`)

			let calendarDiv = document.getElementById(`kcalendar-${i+1}`);

			jsCalendar.new(calendarDiv)
				.onDateClick((e, date) => {
					$(`#kcalendar-${i+1} .jsCalendar-current`).each((index, element) => {
						$(element).removeClass();
					})

					e.target.classList.add('jsCalendar-current')
					document.getElementById(`kcalendar-${i+1}-input`).value = date.toLocaleDateString()
				})
		})

		$("[class*='khaller-time']").each((i, el) => {
			$(el).flatpickr({
				enableTime: true,
				noCalendar: true,
				dateFormat: "H:i",
				time_24hr: true,
				minTime: $(`#khaller-time-data-${i+1}`).attr('data-mintime') ? $(`#khaller-time-data-${i+1}`).attr('data-mintime') : "10:00",
				maxTime: $(`#khaller-time-data-${i+1}`).attr('data-maxtime') ? $(`#khaller-time-data-${i+1}`).attr('data-maxtime') : "10:00",
			})
		})
	})

})( jQuery );
