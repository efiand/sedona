() => ({
  heading: 'Гостиницы Седоны',
  title: 'Гостиницы',
  filters: {
    groups: [
      {
        title: 'Инфраструктура',
        type: 'checkbox',
        name: 'features[]',
        list: [
          {
            value: 'pool',
            title: 'Бассейн',
            checked: true,
            disabled: true
          },
          {
            value: 'parking',
            title: 'Парковка',
            checked: true
          },
          {
            value: 'wi-fi',
            title: 'Wi-Fi'
          }
        ]
      },
      {
        title: 'Тип жилья',
        type: 'radio',
        name: 'type',
        list: [
          {
            value: 'hotel',
            title: 'Гостиница',
            checked: true,
            disabled: true
          },
          {
            value: 'motel',
            title: 'Мотель'
          },
          {
            value: 'apartments',
            title: 'Апартаменты'
          }
        ]
      },
      {
        title: 'Стоимость, ₽',
        isRange: true,
        type: 'number',
        name: 'price[]',
        min: 0,
        max: 11100,
        step: 100,
        list: [
          {
            value: 0,
            title: 'От'
          },
          {
            value: 11100,
            title: 'До'
          }
        ]
      }
    ],
    submitTitle: 'Применить',
    resetTitle: 'Сбросить'
  },
  result: {
    title: 'Найдено гостиниц',
    count: 38,
    sortTitle: 'Сортировка',
    select: {
      name: 'sorting-dir',
      options: [
        {
          value: 'price-up',
          title: 'Сначала дешёвые'
        },
        {
          value: 'price-down',
          title: 'Сначала дорогие'
        }
      ]
    },
    modesTitle: 'Режим отображения',
    modes: [
      {
        value: 'tile',
        title: 'Плиткой',
        checked: true
      },
      {
        value: 'slideshow',
        title: 'Слайдщоу'
      },
      {
        value: 'list',
        title: 'Списком'
      }
    ],
    goods: [
      {
        title: 'Amara Resort &amp; Spa',
        src: 'images/hotel-1.jpg',
        price: 'От 4000 ₽',
        starRating: 4,
        rating: '8,5'
      },
      {
        title: 'Desert Quail Inn',
        src: 'images/hotel-2.jpg',
        price: 'От 3000 ₽',
        starRating: 3,
        rating: '8,9'
      },
      {
        title: 'Villas at Poco Diablo',
        src: 'images/hotel-3.jpg',
        price: 'От 2000 ₽',
        starRating: 2,
        rating: '9,2',
        favorited: true
      },
      {
        title: 'GreenTree Inn',
        src: 'images/hotel-4.jpg',
        price: 'От 3000 ₽',
        starRating: 2,
        rating: '9,2'
      }
    ].map((item) => {
      const { src, favorited = false } = item;
      return {
        ...item,
        image: {
          src,
          alt: item.title,
          width: 300,
          height: 206
        },
        type: 'Гостиница',
        links: [
          {
            url: 'blank.html',
            title: 'Подробнее'
          },
          {
            url: 'blank.html',
            title: favorited ? 'В избранном' : 'В избранное',
            type: favorited ? 'active' : 'secondary'
          }
        ],
        starRatingTitle: 'Звёздный рейтинг',
        ratingTitle: 'Рейтинг'
      };
    }),
    moreTitle: 'Загрузить ещё',
    pager: {
      list: [1, 2, 3, 4, 5, 10].map((item, i, arr) => ({
        value: item,
        title: i === arr.length - 2 ? '...' : item,
        current: i === 0
      }))
    },
    limitsTitle: 'Гостиниц на странице',
    limitsSelect: {
      name: 'limit',
      options: [
        {
          value: '4'
        },
        {
          value: '6'
        },
        {
          value: '12'
        }
      ]
    }
  }
});
