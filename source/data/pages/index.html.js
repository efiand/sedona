export default ({ appData }) => ({
	appData: {
		page: {
			...appData.page,
			advantages: [
				{
					description: 'Седона — не аттракцион для туристов, там течёт своя жизнь',
					image: {
						alt: '',
						fileName: 'photo-1',
						height: '385',
						width: '800'
					},
					title: 'Настоящий городок'
				},
				{
					description: 'Все достопримечательности находятся очень близко',
					title: 'Небольшая площадь'
				},
				{
					description: 'Ехать в Седону из Лас-Вегаса совсем не скучно!',
					title: 'Красивая<br>дорога'
				},
				{
					description: 'Большинство едет в Гранд Каньон и толпится там',
					title: 'Мало<br>туристов'
				},
				{
					description: 'Да, по нему можно пройти! Если вы осмелитесь, разумеется',
					image: {
						alt: '',
						fileName: 'photo-2',
						height: '385',
						width: '800'
					},
					reversed: true,
					title: 'Там есть<br>мост дьявола'
				}
			],
			services: [
				{
					alias: 'housing',
					description: 'Рекомендуем пожить в&nbsp;настоящем мотеле,<br>всё как в кино!',
					title: 'Жильё'
				},
				{
					alias: 'eat',
					description: 'Всегда заказывайте<br>топовый фирменный бургер, вы не разочаруетесь!',
					title: 'Еда'
				},
				{
					alias: 'souvenirs',
					description: 'Не только китайского,<br>но и настоящего местного производства!',
					title: 'Сувениры'
				}
			]
		}
	},
	description: 'Главная страница сайта',
	pageTitle: 'Главная страница'
});
