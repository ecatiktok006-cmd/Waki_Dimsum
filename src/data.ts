/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Review, GalleryItem, Dish, Occasion } from './types';

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: 'sig-1',
    name: 'Shrimp Har Gao',
    description: 'Translucent crystal dumpling filled with plump, succulent shrimp.',
    price: 9.50,
    image: '/src/assets/images/dish_har_gow_1783567535786.jpg',
    isHalal: true
  },
  {
    id: 'sig-2',
    name: 'Chicken Siew Mai',
    description: 'Classic steamed chicken and shrimp dumpling topped with roe.',
    price: 8.50,
    image: '/src/assets/images/dish_siew_mai_1783567518247.jpg',
    isHalal: true
  },
  {
    id: 'sig-3',
    name: 'Salted Egg Siew Mai',
    description: 'A rich twist on the classic with golden salted egg yolk.',
    price: 9.00,
    image: '/src/assets/images/dish_siew_mai_1783567518247.jpg',
    isHalal: true
  },
  {
    id: 'sig-4',
    name: 'BBQ Chicken Bun',
    description: 'Fluffy steamed bun filled with sweet and savory BBQ chicken.',
    price: 8.00,
    image: '/src/assets/images/about_steam_1783567485399.jpg',
    isHalal: true
  },
  {
    id: 'sig-5',
    name: 'Seaweed Roll',
    description: 'Crispy and savory seafood roll wrapped in premium seaweed.',
    price: 8.50,
    image: '/src/assets/images/about_ingredients_1783567499817.jpg',
    isHalal: true
  },
  {
    id: 'sig-6',
    name: 'Lo Mai Gai',
    description: 'Steamed glutinous rice with chicken and mushrooms in lotus leaf.',
    price: 9.50,
    image: '/src/assets/images/about_platter_1783567469486.jpg',
    isHalal: true
  },
  {
    id: 'sig-7',
    name: 'Chee Cheong Fun',
    description: 'Silky smooth steamed rice noodle rolls with sweet soy sauce.',
    price: 8.00,
    image: '/src/assets/images/about_platter_1783567469486.jpg',
    isHalal: true
  },
  {
    id: 'sig-8',
    name: 'Fried Radish Cake',
    description: 'Traditional radish cake wok-fried to golden perfection.',
    price: 8.50,
    image: '/src/assets/images/about_ingredients_1783567499817.jpg',
    isHalal: true
  }
];

export const MENU_CATEGORIES: Category[] = [
  {
    id: 'cat-0',
    name: "THE SILKY JOURNAL",
    subtitle: "Handmade Rolls, Steamed Fresh",
    description: "Soft silky chee cheong fun wrapped fresh upon order with warm sauces and comforting flavors.",
    addOns: undefined,
    dishes: [
      {
        id: 'dish-0-0',
        code: "C01",
        name: "Chee Cheong Fun With Prawn Spring Roll 腐皮鲜虾肠粉",
        description: "Handmade halal silky chee cheong fun paired with crispy fresh prawn beancurd roll.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-0-1',
        code: "C02",
        name: "Chee Cheong Fun With Prawn 爽滑虾肠粉",
        description: "Handmade halal smooth rice rolls filled with juicy fresh prawns and savoury sauce.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-0-2',
        code: "C03",
        name: "Chee Cheong Fun With Chicken Char-Siu 爽滑鸡叉烧肠粉",
        description: "Handmade halal chee cheong fun filled with sweet savoury chicken char-siu.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-0-3',
        code: "C04",
        name: "Chee Cheong Fun 爽滑肠粉",
        description: "Handmade halal silky smooth rice rolls served with fragrant special soy sauce.",
        price: undefined,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-1',
    name: "THE GOLDEN CRISP",
    subtitle: "Fried Fresh, Served Hot",
    description: undefined,
    addOns: undefined,
    dishes: [
      {
        id: 'dish-1-0',
        code: "F01",
        name: "Salad Prawn 金珠沙律虾",
        description: "Handmade halal crispy prawn balls - Crispy Outside, Juicy Inside",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-1',
        code: "F02",
        name: "Deep Fry Radish Cake 炸萝卜糕",
        description: "Handmade halal radish cake fried until crispy golden outside and soft inside.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-2',
        code: "F03",
        name: "Deep Fry Yam Pastry 蜂窝芋头角",
        description: "Handmade halal yam pastry with crispy texture and savoury filling.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-3',
        code: "F05",
        name: "Prawn Spring Roll 鲜虾腐皮卷",
        description: "Handmade halal fresh prawn rolls wrapped in crispy beancurd skin.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-4',
        code: "F08",
        name: "Golden Sesame Ball 莲蓉芝麻枣",
        description: "Handmade halal sesame balls filled with smooth lotus paste and coated with fragrant sesame seeds.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-5',
        code: "F09",
        name: "Bamboo Charcoal Yam Bun 竹炭芋香包",
        description: "Handmade halal charcoal buns filled with creamy fragrant yam paste.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-6',
        code: "F10",
        name: "Hong Kong Egg Tart 港式蛋挞",
        description: "Handmade halal flaky, buttery crust filled with smooth, sweet egg custard.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-7',
        code: "F14",
        name: "Shang Hai Dumpling 上海煎锅贴",
        description: "Handmade halal pan-fried dumplings with crispy bottom and juicy savoury filling.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-8',
        code: "F15",
        name: "FRIED SPRING ROLL 炸春卷",
        description: "Handmade halal spring rolls fried until golden crispy and packed with savoury filling.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-9',
        code: "F16",
        name: "MANGO PRAWN DUMPLING 芒果虾云吞",
        description: "Handmade halal crispy prawn dumplings paired with refreshing mango.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-10',
        code: "F17",
        name: "Cheesy Prawn Roll 芝士网虾卷",
        description: "Handmade halal prawn rolls loaded with melty cheese and crispy texture.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-11',
        code: "F18",
        name: "Fried Wanton 炸云吞",
        description: "Handmade halal fried wantons with crispy skin and juicy savoury filling.",
        price: undefined,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-2',
    name: "THE STEAMY EDITION",
    subtitle: "Small Baskets, Big Happiness",
    description: "Hot, handmade, and freshly steamed dim sum crafted for sharing warm moments together.",
    addOns: undefined,
    dishes: [
      {
        id: 'dish-2-0',
        code: "D01",
        name: "Chicken& Shrimp Dumpling 鲜虾烧卖",
        description: "Handmade halal chicken siew mai topped with juicy fresh shrimp — tender, bouncy and steamed fresh for the perfect bite.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-1',
        code: "D02",
        name: "Shrimp Dumpling (Har Gao) 鲜折蒸虾饺",
        description: "Handmade halal crystal prawn dumplings wrapped with thin silky skin and filled with fresh prawns.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-2',
        code: "D03",
        name: "Salted Egg Siew Mai 咸蛋卖",
        description: "Handmade halal siew mai infused with rich salted egg flavour — savoury, creamy and addictive.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-3',
        code: "D04",
        name: "Coriander Dumpling 香茜饺",
        description: "Handmade halal dumplings packed with juicy filling and fragrant coriander in every bite.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-4',
        code: "D05",
        name: "Seaweed Roll 日式紫菜卷",
        description: "Handmade halal seaweed rolls wrapped with savoury chicken filling",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-5',
        code: "D09",
        name: "Stuffed Beancurd Roll 蚝汁鲜竹卷",
        description: "Handmade halal beancurd rolls stuffed with savoury filling and topped with rich oyster sauce.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-6',
        code: "D11",
        name: "Steamed Chicken With Yam 芋头蒸鸡",
        description: "Handmade halal steamed chicken with soft yam — comforting, fragrant and full of flavour.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-7',
        code: "D12",
        name: "Spicy Sauce Dumpling 辣子饺",
        description: "Handmade halal dumplings coated in spicy savoury sauce for an extra kick.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-8',
        code: "D13",
        name: "Spring Onion Fish ball 葱花炸鱼丸",
        description: "Handmade halal fish balls with fragrant spring onion flavour — crispy outside and springy inside.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-9',
        code: "D15",
        name: "Marinated Chicken Claw 酱汁蒸凤爪",
        description: "Handmade halal chicken claws braised until tender with our savoury signature sauce.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-10',
        code: "D18",
        name: "Seafood Dumpling 海鲜粉粿",
        description: "Handmade halal translucent dumplings filled with juicy seafood goodness.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-11',
        code: "D20",
        name: "Original Chicken Dumpling 原味烧卖",
        description: "Classic handmade halal chicken siew mai steamed fresh daily for a juicy and comforting bite.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-12',
        code: "D21",
        name: "Tom Yum Dumpling 东炎烧卖",
        description: "Handmade halal tom yum chicken siew mai with spicy and tangy Thai-inspired flavour.",
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-2-13',
        code: "D23",
        name: "Black Pepper Dumpling 黑胡椒烧卖",
        description: "Handmade halal chicken siew mai seasoned with bold black pepper for a savoury spicy kick.",
        price: undefined,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-3',
    name: "THE BAO TIMES",
    subtitle: "Warm Fillings, Soft Moments",
    description: undefined,
    addOns: undefined,
    dishes: [
      {
        id: 'dish-3-0',
        code: "B01",
        name: "Shanghai Soup Dumpling 上海小笼包",
        description: "Handmade halal soup dumplings bursting with rich savoury broth and juicy filling.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-3-1',
        code: "B02",
        name: "Golden Custard Bun 流沙包",
        description: "Handmade halal fluffy buns with rich molten salted egg custard centre.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-3-2',
        code: "B03",
        name: "Charcoal Red Bean Bun 豆沙包",
        description: "Handmade halal charcoal buns filled with smooth sweet red bean paste.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-3-3',
        code: "B04",
        name: "Chicken Char-Siu Bun 密汁鸡叉烧包",
        description: "Handmade halal fluffy buns packed with sweet savoury chicken char-siu filling.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-3-4',
        code: "B05",
        name: "Yam Bun 芋香包",
        description: "Handmade halal steamed buns with creamy chef yam filling.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-3-5',
        code: "B06",
        name: "Salty Egg Lotus Bun 咸蛋莲蓉包",
        description: "Handmade halal fluffy buns filled with smooth lotus paste and rich salted egg flavour.",
        price: 17,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-4',
    name: "THE SIDE STORY",
    subtitle: "Little Extras Worth Discovering",
    description: "Side dishes, snacks, and comforting specialties that complete the WAKI experience.",
    addOns: undefined,
    dishes: [
      {
        id: 'dish-4-0',
        code: "K01",
        name: "Chicken Glutinous Rice 糯米鸡",
        description: "Handmade halal glutinous rice steamed with tender chicken and savoury seasoning.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-4-1',
        code: "K02",
        name: "Chicken Porridge 鸡丝粥",
        description: "Warm comforting handmade halal porridge topped with tender shredded chicken.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-4-2',
        code: "K03",
        name: "Stir Fried Radish Cake 酱炒萝卜糕",
        description: "Handmade halal radish cake wok-fried with crunchy bean sprouts and our homemade dried shrimp sambal for an extra fragrant smoky flavour.",
        price: 17,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-5',
    name: "THE RICE PRESS",
    subtitle: "Hearty Plates Made For Sharing",
    description: "From buttery classics to wok-fried favorites, these hearty rice dishes satisfy every craving.",
    addOns: [{"name":"Sambal","price":17},{"name":"Fried Egg","price":17},{"name":"Nasi Lemak Rice","price":17},{"name":"Fried Chicken","price":17}],
    dishes: [
      {
        id: 'dish-5-0',
        code: "R01",
        name: "Dried Chilli Chicken Rice 宫保鸡饭",
        description: "Halal chicken stir-fried with dried chilli and savoury soy sauce.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-1',
        code: "R02",
        name: "Sweet And Sour Chicken Rice 酸甜咕噜鸡饭",
        description: "Halal crispy chicken coated in sweet and sour glaze.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-2',
        code: "R03",
        name: "Butter Milk Salted Egg Chicken Rice 咸蛋奶油鸡饭",
        description: "Halal crispy chicken covered in rich, creamy salted egg butter milk.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-3',
        code: "R04",
        name: "Butter Milk Chicken Rice 奶油鸡饭",
        description: "Halal crispy chicken tossed in smooth and fragrant butter milk sauce.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-4',
        code: "R05",
        name: "Sambal Chicken Rice 参巴鸡炒饭",
        description: "Halal spicy sambal chicken packed with rich local seasonings and robust flavor.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-5',
        code: "R06",
        name: "Black Pepper Chicken Rice 黑胡椒鸡饭",
        description: "Halal chicken stir-fried with aromatic black pepper sauce.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-6',
        code: "R07",
        name: "Curry Butter Milk Chicken Rice 咖喱奶油鸡饭",
        description: "Halal crispy chicken combined with creamy butter milk and aromatic curry flavour.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-7',
        code: "R21",
        name: "Kampung Fried Rice 马来家乡炒饭",
        description: "Halal kampung fried rice cooked with anchovies and spicy bird's eye chilies.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-8',
        code: "R22",
        name: "Chinese Fried Rice 扬州炒饭",
        description: "Halal classic Yang Zhou fried rice wok-tossed with fresh eggs and vegetables.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-9',
        code: "R23",
        name: "Tom Yam Fried Rice 东炎炒饭",
        description: "Halal fried rice infused with spicy and sour tom yam flavors.",
        price: 17,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-6',
    name: "THE WOK DISPATCH",
    subtitle: "Wok-Tossed Stories in Every Bowl",
    description: "Signature noodles tossed over high heat for rich aroma, bold flavor, and satisfying comfort.",
    addOns: undefined,
    dishes: [
      {
        id: 'dish-6-0',
        code: "M01",
        name: "Penang Fried Keow Teow 槟城炒果条",
        description: "Halal Penang-style fried kuey teow.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-6-1',
        code: "M02",
        name: "Signature Fried Noodle 招牌炒面",
        description: "Halal signature fried noodles stir-fried with fresh ingredients and rich sauce.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-6-2',
        code: "M03",
        name: "Cantonese Style Meehon 广府米粉",
        description: "Halal silky rice vermicelli served with smooth egg gravy.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-6-3',
        code: "M04",
        name: "Cantonese Style YeeMee 广府伊面",
        description: "Halal yee mee cooked with smooth egg gravy.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-6-4',
        code: "M05",
        name: "Cantonese Style Keow Teow 广府果条",
        description: "Halal flat rice noodles served with silky egg gravy.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-6-5',
        code: "M06",
        name: "Cantonese Style Yuan Yang 广府鸳鸯",
        description: "Halal combination of fried mee hoon and flat rice noodles in rich egg gravy.",
        price: 17,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-7',
    name: "THE TEA EDITION",
    subtitle: "Timeless Brews For Slow Conversations",
    description: undefined,
    addOns: undefined,
    dishes: [
      {
        id: 'dish-7-0',
        code: "BT01",
        name: "Poh Lei 普洱茶",
        description: "Traditional Chinese tea with rich earthy aroma, perfect for enjoying with dim sum.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-7-1',
        code: "BT02",
        name: "Tie Guan Yin 铁观音",
        description: "Premium Chinese tea with floral aroma and smooth roasted aftertaste.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-7-2',
        code: "BT03",
        name: "Tea King 茶王",
        description: "Rich and balanced premium Chinese tea with smooth traditional flavour.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-7-3',
        code: "BT04",
        name: "Kok Poh Tea 菊堡",
        description: "Light and soothing tea with refreshing chrysanthemum aroma.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-7-4',
        code: "BT05",
        name: "Jasmine Tea 香片",
        description: "Fragrant jasmine tea with floral aroma and light smooth taste.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-7-5',
        code: "BT06",
        name: "Chrysanthemum Tea 菊花",
        description: "Classic chrysanthemum tea with light floral sweetness and soothing flavour.",
        price: 17,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-8',
    name: "THE KOPITIAM POST",
    subtitle: "Local Classics Served Daily",
    description: undefined,
    addOns: undefined,
    dishes: [
      {
        id: 'dish-8-0',
        code: undefined,
        name: "Kopi",
        description: "Rich and aromatic local coffee with a smooth traditional kopitiam taste.",
        price: undefined,
        variants: [{"type":"Hot","code":"BH01","price":3.5},{"type":"Cold","code":"BC01","price":4}]
      },
      {
        id: 'dish-8-1',
        code: undefined,
        name: "Kopi O",
        description: "Classic black local coffee with deep roasted aroma and stronger coffee flavour.",
        price: undefined,
        variants: [{"type":"Hot","code":"BH02","price":3.2},{"type":"Cold","code":"BC02","price":3.7}]
      },
      {
        id: 'dish-8-2',
        code: undefined,
        name: "Teh",
        description: "Smooth and creamy milk tea with comforting traditional flavour.",
        price: undefined,
        variants: [{"type":"Hot","code":"BH04","price":3.5},{"type":"Cold","code":"BC04","price":4}]
      },
      {
        id: 'dish-8-3',
        code: undefined,
        name: "Teh O",
        description: "Classic black tea with fragrant aroma and smooth finish.",
        price: undefined,
        variants: [{"type":"Hot","code":"BH05","price":3.2},{"type":"Cold","code":"BC05","price":3.7}]
      },
      {
        id: 'dish-8-4',
        code: undefined,
        name: "Teh O Limau",
        description: "Warm black tea mixed with fresh lime for a refreshing citrusy flavour.",
        price: undefined,
        variants: [{"type":"Hot","code":"BH07","price":3.5},{"type":"Cold","code":"BC07","price":4}]
      },
      {
        id: 'dish-8-5',
        code: undefined,
        name: "Cham",
        description: "Perfect mix of coffee and tea for a rich and balanced local favourite.",
        price: undefined,
        variants: [{"type":"Hot","code":"BH08","price":3.5},{"type":"Cold","code":"BC08","price":4}]
      },
      {
        id: 'dish-8-6',
        code: undefined,
        name: "Milo",
        description: "Rich and chocolatey Milo served warm for a comforting treat.",
        price: undefined,
        variants: [{"type":"Hot","code":"BH12","price":3.8},{"type":"Cold","code":"BC12","price":4.3}]
      },
      {
        id: 'dish-8-7',
        code: undefined,
        name: "Sirap",
        description: "Sweet rosy syrup drink with nostalgic Malaysian flavour.",
        price: undefined,
        variants: [{"type":"Hot","code":"BH13","price":3.0},{"type":"Cold","code":"BC13","price":3.5}]
      },
      {
        id: 'dish-8-8',
        code: undefined,
        name: "Sirap Limau",
        description: "Sweet sirap mixed with fresh lime for a balanced fruity taste.",
        price: undefined,
        variants: [{"type":"Hot","code":"BH14","price":3.2},{"type":"Cold","code":"BC14","price":3.7}]
      },
      {
        id: 'dish-8-9',
        code: undefined,
        name: "Sirap Bandung",
        description: "Creamy rose syrup milk drink with smooth and fragrant sweetness.",
        price: undefined,
        variants: [{"type":"Hot","code":"BH15","price":3.5},{"type":"Cold","code":"BC15","price":4.0}]
      },
      {
        id: 'dish-8-10',
        code: undefined,
        name: "Honey Lemon",
        description: "Warm honey lemon drink that’s soothing, fragrant and refreshing.",
        price: undefined,
        variants: [{"type":"Hot","code":"BW107","price":3.8},{"type":"Cold","code":"BW207","price":4.3}]
      },
      {
        id: 'dish-8-11',
        code: undefined,
        name: "Lemon Tea",
        description: "Fragrant tea combined with fresh lemon for a smooth citrusy taste.",
        price: undefined,
        variants: [{"type":"Hot","code":"BW108","price":3.5},{"type":"Cold","code":"BW208","price":4.0}]
      },
      {
        id: 'dish-8-12',
        code: undefined,
        name: "Organic Soya",
        description: "Warm and comforting organic soy drink with a smooth, creamy texture. Available with no added sugar upon request.",
        price: undefined,
        variants: [{"type":"Hot","code":"BW109","price":3.5},{"type":"Cold","code":"BW209","price":4.0}]
      }
    ]
  },
  {
    id: 'cat-9',
    name: "JUICE SERIES",
    subtitle: undefined,
    description: undefined,
    addOns: undefined,
    dishes: [
      {
        id: 'dish-9-0',
        code: "BJ02",
        name: "Green Apple",
        description: "Refreshing green apple juice with sweet and slightly tangy flavour.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-9-1',
        code: "BJ03",
        name: "Orange",
        description: "Fresh orange juice bursting with natural citrus sweetness.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-9-2',
        code: "BJ04",
        name: "Carrot Milk",
        description: "Smooth carrot milk juice with creamy texture and natural sweetness.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-9-3',
        code: "BJ05",
        name: "Lemon",
        description: "Refreshing lemon juice with tangy citrus flavour.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-9-4',
        code: "BJ06",
        name: "Limau",
        description: "Classic Malaysian lime juice that’s sweet, tangy and cooling.",
        price: 17,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-10',
    name: "DESSERT SERIES",
    subtitle: undefined,
    description: undefined,
    addOns: undefined,
    dishes: [
      {
        id: 'dish-10-0',
        code: "BL301",
        name: "Longan Sea Coconut 龙眼海底椰",
        description: "Refreshing chilled longan dessert with sea coconut for a light and soothing treat. Perfect after a meal.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-10-1',
        code: "BL302",
        name: "Bamboo Cane",
        description: "Refreshing sugar cane drink with naturally sweet and cooling flavour.",
        price: 17,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-11',
    name: "THE MOCKTAIL TIMES",
    subtitle: "Refreshing Signatures For Every Gathering",
    description: "Colorful handcrafted mocktails inspired by tropical fruits, refreshing sodas, and modern café culture made for sharing joyful moments together.",
    addOns: undefined,
    dishes: [
      {
        id: 'dish-11-0',
        code: "BS 01",
        name: "Spring Blush (Pink Guava Sparkling)",
        description: "A refreshing pink guava sparkling drink with a gentle citrus finish, topped with mint and lemon.",
        price: 13.9,
        variants: undefined
      },
      {
        id: 'dish-11-1',
        code: "BS 02",
        name: "Summer Blue (Tropical Blue Sparkling)",
        description: "A bright tropical blue sparkling drink with a zesty lime twist, served with fresh mint and lime.",
        price: 13.9,
        variants: undefined
      },
      {
        id: 'dish-11-2',
        code: "BS 03",
        name: "Autumn Fruit Glow (Fruit Punch Sparkling)",
        description: "A fruity and refreshing sparkling blend with a light citrus finish, topped with mint and lemon.",
        price: 13.9,
        variants: undefined
      },
      {
        id: 'dish-11-3',
        code: "BS 04",
        name: "Winter Mint (Mint Lime Iced Tea)",
        description: "A cooling blend of lime, tea and refreshing mint, finished with a hint of fresh lime.",
        price: 14.9,
        variants: undefined
      },
      {
        id: 'dish-11-4',
        code: "BS 05",
        name: "Four Seasons Fruit Tea (Fruit Punch Lemon Tea)",
        description: "A refreshing fruit punch tea with a gentle citrus flavour and a bright lemon finish.",
        price: 14.9,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-12',
    name: "THE HOME EDITION (FROZEN)",
    subtitle: "Handmade Dim Sum Anytime",
    description: "Bring home your favorite halal handmade dim sum, ready to steam and share anytime.",
    addOns: undefined,
    dishes: [
      {
        id: 'dish-12-0',
        code: "D01F",
        name: "Chicken & Prawn Dumpling 鲜虾烧卖(12PCS)",
        description: "Frozen handmade dumplings filled with tender chicken and juicy prawns.",
        price: 25,
        variants: undefined
      },
      {
        id: 'dish-12-1',
        code: "D02F",
        name: "Shrimp Dumpling 鲜折蒸虾饺 (9PCS)",
        description: "Frozen handmade premium crystal shrimp dumplings.",
        price: 28.5,
        variants: undefined
      },
      {
        id: 'dish-12-2',
        code: "D03F",
        name: "Salted Egg Dumpling 咸蛋卖 (12 PCS)",
        description: "Frozen handmade chicken siew mai with rich, savoury salted egg yolk.",
        price: 22,
        variants: undefined
      },
      {
        id: 'dish-12-3',
        code: "D04F",
        name: "Coriander Dumpling 香茜饺 (9 PCS)",
        description: "Frozen handmade chicken dumplings packed with aromatic coriander.",
        price: 19,
        variants: undefined
      },
      {
        id: 'dish-12-4',
        code: "D05F",
        name: "Seaweed Roll 日式紫菜卷 (9 PCS)",
        description: "Frozen handmade savoury chicken rolls wrapped in seaweed.",
        price: 19,
        variants: undefined
      },
      {
        id: 'dish-12-5',
        code: "D20F",
        name: "Original Chicken Dumpling 原味烧卖 (12 PCS)",
        description: "Frozen handmade signature classic chicken siew mai.",
        price: 28.5,
        variants: undefined
      },
      {
        id: 'dish-12-6',
        code: "D21F",
        name: "Tom Yum Dumpling 东炎烧卖 (12 PCS)",
        description: "Frozen handmade chicken siew mai infused with spicy and tangy Tom Yum flavours.",
        price: 22,
        variants: undefined
      },
      {
        id: 'dish-12-7',
        code: "D23F",
        name: "Black Pepper Dumpling 黑胡椒烧卖 (12 PCS)",
        description: "Frozen handmade chicken siew mai spiced with aromatic black pepper.",
        price: 19,
        variants: undefined
      },
      {
        id: 'dish-12-8',
        code: "L01F",
        name: "Chicken Glutinous Rice 糯米鸡 (2PCS)",
        description: "Frozen handmade traditional Lo Mai Gai glutinous rice with chicken.",
        price: 19,
        variants: undefined
      },
      {
        id: 'dish-12-9',
        code: "B02F",
        name: "Golden Custard Bun 流沙包 (6 PCS)",
        description: "Frozen handmade sweet buns filled with rich, flowing golden egg custard.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-12-10',
        code: "B03F",
        name: "Charcoal Red Bean Bun 豆沙包 (6 PCS)",
        description: "Frozen handmade soft charcoal buns with a sweet and smooth red bean filling.",
        price: 28.5,
        variants: undefined
      },
      {
        id: 'dish-12-11',
        code: "B04F",
        name: "BBQ Chicken Bun 密汁鸡叉烧包 (6 PCS)",
        description: "Frozen handmade fluffy buns stuffed with sweet and savoury BBQ chicken.",
        price: 22,
        variants: undefined
      },
      {
        id: 'dish-12-12',
        code: "B05F",
        name: "Yam Bun 芋香包 (6 PCS)",
        description: "Frozen handmade soft buns filled with sweet, fragrant taro yam paste.",
        price: 19,
        variants: undefined
      },
      {
        id: 'dish-12-13',
        code: "B06F",
        name: "Salted Egg Lotus Bun 咸蛋莲蓉包 (6 PCS)",
        description: "Frozen handmade sweet lotus seed paste buns with savoury salted egg yolk.",
        price: 19,
        variants: undefined
      }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Ahmad Faiz',
    initials: 'AF',
    text: 'One of the best halal dim sum restaurants we\'ve visited. Fresh, delicious and affordable.',
    rating: 5,
    date: '1 week ago'
  },
  {
    id: 'rev-2',
    name: 'Sarah Lee',
    initials: 'SL',
    text: 'The Har Gao is amazing. Highly recommended.',
    rating: 5,
    date: '3 weeks ago'
  },
  {
    id: 'rev-3',
    name: 'Khairul Anwar',
    initials: 'KA',
    text: 'Perfect place for family breakfast.',
    rating: 5,
    date: '1 month ago'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gal-1', image: '/src/assets/images/dish_siew_mai_1783567518247.jpg', title: 'Chicken Siew Mai', category: 'Food' },
  { id: 'gal-2', image: '/src/assets/images/about_steam_1783567485399.jpg', title: 'Steaming Fresh', category: 'Kitchen' },
  { id: 'gal-3', image: '/src/assets/images/about_platter_1783567469486.jpg', title: 'Family Gathering', category: 'Restaurant' },
  { id: 'gal-4', image: '/src/assets/images/dish_har_gow_1783567535786.jpg', title: 'Crystal Har Gow', category: 'Food' },
  { id: 'gal-5', image: '/src/assets/images/about_ingredients_1783567499817.jpg', title: 'Premium Ingredients', category: 'Kitchen' },
  { id: 'gal-6', image: '/src/assets/images/dish_custard_bun_1783567550286.jpg', title: 'Weekend Breakfast', category: 'Family Dining' },
];

export const OCCASIONS: Occasion[] = [
  { id: 'occ-1', title: 'Family Gathering', image: '/src/assets/images/about_platter_1783567469486.jpg' },
  { id: 'occ-2', title: 'Weekend Breakfast', image: '/src/assets/images/dish_har_gow_1783567535786.jpg' },
  { id: 'occ-3', title: 'Birthday Celebration', image: '/src/assets/images/dish_custard_bun_1783567550286.jpg' },
  { id: 'occ-4', title: 'Corporate Lunch', image: '/src/assets/images/about_ingredients_1783567499817.jpg' },
  { id: 'occ-5', title: 'Casual Meet-up', image: '/src/assets/images/dish_siew_mai_1783567518247.jpg' },
  { id: 'occ-6', title: 'Late Lunch', image: '/src/assets/images/about_steam_1783567485399.jpg' },
];
