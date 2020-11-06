export const products = [
  {
    _id: 2,
    title: 'Espresso',
    desc: 'Classic black coffee made with the help of the espresso machine',
    price: {
      count: 1.5,
      currencySign: '$',
      currencyAbbr: 'USD'
    },
    imgUrl: 'https://cdn.thegentlemansjournal.com/wp-content/uploads/2014/08/Coffee-Espresso.-Cup-Of-Coffee.jpg',
    defaultSize: '30ml',
    categories: ['classic', 'all'],
    discount: 0,
    extras: [
      {
        name: 'Additionals',
        values: [
          {
            valueName: 'Cinnamon',
            priceChange: 0
          },
          {
            valueName: 'Cardamon',
            priceChange: 0
          },
          {
            valueName: 'Cream',
            priceChange: 0.25
          }
        ],
        allowCombination: true
      },
      {
        name: 'Size',
        values: [
          {
            valueName: '30ml',
            priceChange: 1.5
          },
          {
            valueName: '60ml',
            priceChange: 2
          }
        ],
        allowCombination: false
      }
    ]
  },

  {
    _id: 3,
    title: 'Cappucino',
    desc: 'Classic black coffee made with the help of the espresso machine',
    price: {
      count: 2,
      currencySign: '$',
      currencyAbbr: 'USD'
    },
    imgUrl: 'https://www.hamiltonbeach.com/media/recipes/cappucino-fotoliastock.jpg',
    defaultSize: '250ml',
    categories: ['classic', 'all'],
    discount: 0,
    extras: [
      {
        name: 'Additionals',
        values: [
          {
            valueName: 'Vanila Syrup',
            priceChange: 0.1
          },
          {
            valueName: 'Cinnamon',
            priceChange: 0
          },
          {
            valueName: 'Cardamon',
            priceChange: 0
          },
          {
            valueName: 'Brown Sugar',
            priceChange: 0.1
          }
        ],
        allowCombination: true
      },
      {
        name: 'Size',
        values: [
          {
            valueName: '250ml',
            priceChange: 2
          },
          {
            valueName: '350ml',
            priceChange: 3
          },
          {
            valueName: '450ml',
            priceChange: 3.5
          }
        ],
        allowCombination: false
      }
    ]
  },

  {
    _id: 1,
    title: 'Latte',
    desc: 'Classic black coffee made with the help of the espresso machine',
    price: {
      count: 2,
      currencySign: '$',
      currencyAbbr: 'USD'
    },
    imgUrl: 'https://milklife.com/sites/default/files/field_main_image/Breakfast/2016/09/19/Protein-Packed%20Latte_square.jpg',
    defaultSize: '250ml',
    categories: ['classic', 'all'],
    discount: 0,
    extras: [
      {
        name: 'Additionals',
        values: [
          {
            valueName: 'Vanila Syrup',
            priceChange: 0.1
          },
          {
            valueName: 'Cinnamon',
            priceChange: 0
          },
          {
            valueName: 'Cardamon',
            priceChange: 0
          },
          {
            valueName: 'Brown Sugar',
            priceChange: 0.1
          }
        ],
        allowCombination: true
      },
      {
        name: 'Size',
        values: [
          {
            valueName: '250ml',
            priceChange: 2
          },
          {
            valueName: '350ml',
            priceChange: 3
          },
          {
            valueName: '450ml',
            priceChange: 3.5
          }
        ],
        allowCombination: false
      }
    ]
  },
  {
    _id: 4,
    title: 'Americano',
    desc: 'Classic black coffee made with the help of the espresso machine',
    price: {
      count: 1.5,
      currencySign: '$',
      currencyAbbr: 'USD'
    },
    imgUrl: 'https://cdn01.vulcanpost.com/wp-uploads/2018/12/Cafe-Americano-1.jpg',
    defaultSize: '150ml',
    categories: ['classic', 'all', 'sales'],
    discount: 20,
    extras: [
      {
        name: 'Additionals',
        values: [
          {
            valueName: 'Cinnamon',
            priceChange: 0
          },
          {
            valueName: 'Cardamon',
            priceChange: 0
          },
          {
            valueName: 'Milk',
            priceChange: 0.25
          }
        ],
        allowCombination: true
      },
      {
        name: 'Size',
        values: [
          {
            valueName: '150ml',
            priceChange: 1.5
          },
          {
            valueName: '250ml',
            priceChange: 2
          }
        ],
        allowCombination: false
      }
    ]
  },
  {
    _id: 5,
    title: 'Carrot cake',
    desc: 'super duper tasty cakes with something in it',
    price: {
      count: 3,
      currencySign: '$',
      currencyAbbr: 'USD'
    },
    imgUrl: 'https://i.ytimg.com/vi/EJ5AlErxLWY/maxresdefault.jpg',
    defaultSize: '100g',
    categories: ['dessert', 'all', 'sales'],
    discount: 10,
    extras: [
      {
        name: 'Size',
        values: [
          {
            valueName: '100g',
            priceChange: 3
          },
          {
            valueName: '200g',
            priceChange: 5
          }
        ],
        allowCombination: false
      }
    ]
  },
  {
    _id: 6,
    title: 'Oatmeal muffin',
    desc: 'super duper tasty cakes with something in it',
    price: {
      count: 2.5,
      currencySign: '$',
      currencyAbbr: 'USD'
    },
    imgUrl: 'https://d3cizcpymoenau.cloudfront.net/images/22799/SFS_oatmeal_muffins_CLR-17.jpg',
    defaultSize: '100g',
    categories: ['dessert', 'all'],
    discount: 0,
    extras: [
      {
        name: 'Size',
        values: [
          {
            valueName: '100g',
            priceChange: 2.5
          },
          {
            valueName: '200g',
            priceChange: 4
          }
        ],
        allowCombination: false
      }
    ]
  }
];

export const categories = [
 {
   id: 111,
   label: 'All',
   value: 'all'
 },
 {
   id: 112,
   label: 'Classic',
   value: 'classic'
 },
 {
   id: 113,
   label: 'Hand-brew',
   value: 'hand_brew'
 },
 {
   id: 114,
   label: 'Desserts',
   value: 'dessert'
 },
 {
   id: 0,
   label: 'Sales',
   value: 'sales'
 }
];

export const blogCategories = [
  {
    id: 1111,
    label: 'All',
    value: 'all'
  },
  {
    id: 1112,
    label: 'Instafeed',
    value: 'insta'
  },
  {
    id: 1113,
    label: 'Longread',
    value: 'longread'
  },
  {
    id: 1114,
    label: 'Science',
    value: 'science'
  }
];

export const blogPosts = [
  {
    id: 10000,
    title: 'Кофе и почему для меня он так важен.',
    content: `<p>Человек, к кофе относящийся равнодушно, может сказать, что весь этот кофе-хайп, который сейчас устраивают все, кому не лень — ерунда и просто способ показать, какой ты особенный, современный и «в теме», раз ты снова пьешь латте в кафе. Но это все большое заблуждение. Кофе с молочком — совсем не то кофе, от которого люди могут по-настоящему торчать, это больше кофейный коктейль. Черный, как смоль, эспрессо с оранжевой крема, чайно-красный альтернативный кофе — вот, что может по-настоящему пленить.</p>
    <p>Когда-то я не верила, что кофе может иметь разные вкусы. Не знала, что черный кофе необязательно должен быть горьким. Спасибо работе в кофейне третьей волны, которая все изменила. Теперь я каждое утро завариваю кофе дома, и смакую вкус наступающего дня, пытаясь разобраться, какой же он сегодня.</p>
    <p>Я не имею возможности часто пить эспрессо и разбираться в нем — в Китае кофе - это мода, поэтому стоит она больших денег и уступает в качестве всему, что я пробовала в России, как минимум на голову. Поэтому я покупаю зерна и экспериментирую дома сама.</p>
    <p>Это одна из моих любимых привычек: взвесить, намолоть, рассчитать пропорцию, выбрать температуру воды. Потом *вдох-выдох* — руками завариваешь свой кофе, стараясь сосредоточиться, чтобы не напортачить — эти частички кофе такая ценность для меня! Я считаю эти десять минут утром - своей медитацией, меня этот процесс успокаевает, бодрит, приносит удовольствие и ясность в голову. Ах, если бы еще света было побольше в доме!</p>
    <p>И это все только начала моего рассказа, тут я не говорю о том, как и какой вкус можно получить, используя кофе, воду и свои ручки. Это я только описала духовную составляющую «моего» кофе.</p>
    <p>Приятного кофепития! А ты следишь за тем, какой вкус в твоей чашке?</p>`,
    author: 'Лилия Семененко',
    images: [
      {
        headerImgUrl: ''
      }
    ]
  }
];
