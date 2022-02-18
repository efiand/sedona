(data) => {
  data.subscribe.accent = true;

  return {
    heading: 'Седона',
    title: 'Главная',
    advantages: {
      heading: 'Преимущества Седоны',
      lead: 'Седона — небольшой городок в Аризоне, заслуживающий большего!',
      description: 'Рассмотрим 5 причин, по которым Седона круче, чем Гранд-Каньон!',
      cards: {
        ordered: true,
        list: [
          {
            title: 'Настоящий<br>городок',
            text: 'Седона — не аттракцион<br>для туристов, там течёт<br>своя жизнь',
            image: {
              src: 'images/reason-1.jpg',
              alt: 'Седона.',
              width: 800,
              height: 384
            },
            cards: {
              list: [
                {
                  title: 'Жильё',
                  text: 'Рекомендуем пожить в&nbsp;настоящем мотеле,<br>всё как в кино!',
                  icon: 'house'
                },
                {
                  title: 'Еда',
                  text: 'Всегда заказывайте<br>топовый фирменный бургер,<br>вы не разочаруетесь!',
                  icon: 'food'
                },
                {
                  title: 'Сувениры',
                  text: 'Не только китайского,<br>но и настоящего местного производства!',
                  icon: 'souvenir'
                }
              ]
            }
          },
          {
            title: 'Там есть<br>мост дьявола',
            text: 'Да, по нему можно пройти! Если вы осмелитесь,<br>разумеется',
            image: {
              src: 'images/reason-2.jpg',
              alt: 'Мост дьявола.',
              width: 800,
              height: 384
            }
          },
          {
            title: 'Небольшая<br>площадь',
            text: 'Все достопримечательности &nbsp;&nbsp;находятся очень близко'
          },
          {
            title: 'Красивая<br>дорога',
            text: 'Ехать в Седону из Лас-Вегаса совсем не скучно!'
          },
          {
            title: 'Мало<br>туристов',
            text: 'Большинство едет в Гранд Каньон и толпится там'
          }
        ]
      }
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
              pattern: `^\\d{1,2} (${data.js.monthsInGenitive.map((m) => `(${m})`).join('|')}) \\d{4}$`,
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
    }
  };
};
