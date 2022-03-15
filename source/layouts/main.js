({ page }) => {
  const js = {
    monthsInGenitive: [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря'
    ],
    messages: {
      Datepicker: {
        HAS: 'На эти даты есть свободные номера. Пока есть.',
        HAS_NO: 'На эти даты нет свободных номеров. Пока нет.',
        EXPIRED: 'Мы не можем отправить вас в прошлое.',
        INCORRECT: 'Некорректное значение даты.',
        PENDING: 'Проверяем наличие мест…'
      },
      Range: {
        DOWN: 'Меньше.',
        UP: 'Больше.'
      }
    },
  };

  return {
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
    search: {
      title: 'Поиск гостиницы в Седоне',
      lead: 'Заинтересовались?',
      text: 'Укажите предполагаемые даты поездки,<br>и мы покажем вам лучшие предложения гостиниц в Седоне &nbsp;',
      form: {
        sections: [
          {
            title: 'Даты заезда и выезда',
            name: 'dates[]',
            groups: [
              {
                title: 'Дата заезда',
                id: 'date-from'
              },
              {
                title: 'Дата выезда',
                id: 'date-to'
              }
            ].map((group) => ({
              ...group,
              required: true,
              placeholder: 'Укажите дату',
              pattern: `^\\d{1,2} (${js.monthsInGenitive.map((m) => `(${m})`).join('|')}) \\d{4}$`,
              datepickerTitle: 'Выбрать дату'
            }))
          },
          {
            title: 'Количество человек',
            counters: true,
            name: 'count[]',
            groups: [
              {
                title: 'Взрослые',
                id: 'count-adults',
                value: '2',
                min: '1',
                max: '99',
                required: true
              },
              {
                title: 'Дети',
                id: 'count-children',
                value: '1',
                min: '0',
                max: '99',
                tooltip: 'Укажите количество детей, которые будут с вами, возраст которых от 6 до 18 лет. Дети до 6 лет размещаются бесплатно.',
                required: true
              }
            ]
          }
        ],
        stepDownTitle: 'Меньше',
        stepUpTitle: 'Больше',
        submitTitle: 'Найти'
      }
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
    },
    js,
    jsToPlace: JSON.stringify(js)
  };
};
