({ page }) => ({
  projectName: 'Sedona',
  title: 'Страница в разработке',
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
  }
});
