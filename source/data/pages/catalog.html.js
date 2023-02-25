const pageTitle = 'Гостиницы';

export default ({ appData }) => ({
	appData: {
		page: {
			...appData.page,
			count: 38,
			filters: [
				{
					checkers: [
						{
							checked: true,
							label: 'Бассейн',
							value: 'pool'
						},
						{
							checked: true,
							label: 'Парковка',
							value: 'parking'
						},
						{
							label: 'Wi-Fi',
							value: 'wi-fi'
						}
					],
					name: 'infrastructure',
					title: 'Инфраструктура:'
				},
				{
					checkers: [
						{
							checked: true,
							label: 'Гостиница',
							value: 'hotel'
						},
						{
							label: 'Мотель',
							value: 'motel'
						},
						{
							label: 'Апартаменты',
							value: 'apartments'
						}
					],
					name: 'housing_type',
					single: true,
					title: 'Тип Жилья:'
				},
				{
					max: 11650,
					min: 0,
					name: 'price',
					ranges: [0, 9000],
					step: 50,
					title: 'Стоимость, ₽:'
				}
			],
			goods: [
				{
					price: 4000,
					rating: '8,5',
					starRating: 4,
					title: 'Amara Resort &amp; Spa'
				},
				{
					added: true,
					price: 5000,
					rating: '9,2',
					starRating: 4,
					title: 'Villas at Poco Diablo'
				},
				{
					price: 2500,
					rating: '6,9',
					starRating: 3,
					title: 'Desert Quail Inn'
				},
				{
					price: 1500,
					rating: '5,0',
					starRating: 2,
					title: 'GreenTree Inn'
				}
			].map((good, i) => ({
				...good,
				aboutLink: '#!',
				favLink: '#!',
				image: `hotel-${i + 1}`,
				type: 'Гостиница'
			})),
			pageTitle,
			paginations: [1, 2, 3, 4, 5, 10],
			searchFields: null
		}
	},
	description: 'Каталог гостиниц',
	pageTitle
});
