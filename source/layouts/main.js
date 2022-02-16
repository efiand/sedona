({ page }) => ({
  projectName: 'Sedona',
  title: 'Страница в разработке',
  heading: 'Страница в разработке',
  lang: 'ru',
  logoTitle: 'Логотип Седоны',
  nav: {
    pages: [
      {
        url: 'index.html',
        title: 'Главная',
        isCurrent: page === 'index'
      },
      {
        url: 'blank.html',
        title: 'О Седоне',
        isCurrent: page === 'blank'
      },
      {
        url: 'hotels.html',
        title: 'Гостиницы',
        isCurrent: page === 'hotels'
      }
    ],
    services: [
      {
        url: 'blank.html',
        title: 'Поиск',
        icon: 'search'
      },
      {
        url: 'blank.html',
        title: 'Избранное. Элементов:',
        icon: 'favorite',
        label: '12'
      },
      {
        url: 'blank.html',
        title: 'Хочу сюда!'
      }
    ]
  },
  subscribe: {
    heading: 'Подпишитесь на рассылку',
    description: 'Только полезная информация и никакого спама,<br>честное бойскаутское!',
    placeholder: 'Ваш e-mail',
    buttonTitle: 'Подписаться'
  },
  contacts: {
    title: 'Контакты',
    social: {
      list: [
        {
          name: 'twitter',
          url: 'https://twitter.com/htmlacademy_ru',
          title: 'Twitter'
        },
        {
          name: 'facebook',
          url: 'https://www.facebook.com/htmlacademy',
          title: 'Facebook'
        },
        {
          name: 'youtube',
          url: 'https://www.youtube.com/c/htmlacademyrus',
          title: 'Youtube'
        }
      ]
    },
    tel: '+7 (812) 812-12-12',
    dev: {
      title: 'Разработано в HTML Academy',
      url: 'https://htmlacademy.ru/',
      logo: 'images/logo-dev.svg',
      width: 115,
      height: 34
    }
  }
});
