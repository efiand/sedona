export default ({ error, pageName, status }) => ({
	appData: {
		page: {
			error,
			favIndex: 12,
			navLinks: [
				{
					title: 'Главная',
					url: 'index.html'
				},
				{
					title: 'О Седоне',
					url: '#!'
				},
				{
					title: 'Гостиницы',
					url: 'catalog.html'
				}
			],
			pageName,
			searchFields: [
				{
					error: 'Мы не можем отправить вас в прошлое.',
					label: 'Дата Заезда:',
					name: 'date_from',
					pickDate: true,
					required: true,
					value: '27 апреля 2020'
				},
				{
					label: 'Дата Выезда:',
					name: 'date_to',
					pickDate: true,
					required: true,
					status: 'На эти даты есть свободные номера. Пока есть.',
					value: '1 сентября 2023'
				},
				{
					count: true,
					label: 'Взрослые:',
					max: 99,
					min: 0,
					name: 'adults',
					required: true,
					value: 2
				},
				{
					count: true,
					label: ' Дети:',
					max: 99,
					min: 0,
					name: 'children',
					tip: 'Укажите количество детей, которые будут с вами, возраст которых от 6 до 18 лет. Дети до 6 лет размещаются бесплатно.',
					value: 2
				}
			],
			socials: [
				{
					alias: 'vk',
					title: 'Мы в Vkontakte',
					url: 'https://vk.com/htmlacademy'
				},
				{
					alias: 'telegram',
					title: 'Мы в Telegram',
					url: 'https://t.me/htmlacademy '
				},
				{
					alias: 'youtube',
					title: 'Мы в Youtube',
					url: 'https://www.youtube.com/user/htmlacademyru'
				}
			],
			status,
			test: false
		}
	},
	pixelperfect: JSON.stringify({
		breakpoints: [1280],
		ext: 'webp',
		selector: pageName === '404.html' ? '#search' : '.page'
	}),
	projectName: 'Sedona'
});
