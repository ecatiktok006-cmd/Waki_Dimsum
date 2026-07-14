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
        name: "Signature Steamed Rice Noodle With Prawn Spring Roll",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-0-1',
        code: "C02",
        name: "Steamed Rice Noodle With Prawn",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-0-2',
        code: "C03",
        name: "Steamed Rice Noodle With Chicken",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-0-3',
        code: "C04",
        name: "Steamed Rice Noodle",
        description: undefined,
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
        code: "F17",
        name: "Cheesy Prawn Roll",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-1',
        code: "F06",
        name: "Prawn Spring Roll",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-2',
        code: "F01",
        name: "Salad Prawn",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-3',
        code: "F02",
        name: "Deep Fry Yam Pastry",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-4',
        code: "F19",
        name: "Fried Wanton",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-5',
        code: "F03",
        name: "Deep Fry Radish Cake",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-6',
        code: "F14",
        name: "Shanghai Dumpling",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-7',
        code: "F09",
        name: "Bamboo Charcoal Yam Bun",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-8',
        code: "F15",
        name: "Spring Roll",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-9',
        code: "F16",
        name: "Mango Prawn Dumpling",
        description: undefined,
        price: undefined,
        variants: undefined
      },
      {
        id: 'dish-1-10',
        code: "F08",
        name: "Golden Sesame Ball",
        description: undefined,
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
        name: "Chicken & Shrimp Dumpling",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-2-1',
        code: "D02",
        name: "Shrimp Dumpling",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-2-2',
        code: "D12",
        name: "Spicy Sauce Dumpling",
        description: undefined,
        price: 17,
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
        code: "B02",
        name: "Golden Custard Bun",
        description: "Silky smooth custard in a soft, fluffy bun.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-3-1',
        code: "B04",
        name: "BBQ Chicken Bun",
        description: "Tender BBQ chicken wrapped in a soft, fluffy bun.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-3-2',
        code: "B01",
        name: "Shanghai Soup Dumpling",
        description: "Delicate soup dumplings with rich, savory broth.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-3-3',
        code: "B03",
        name: "Vegetarian Charcoal Red Bean Bun",
        description: "Soft charcoal bun with sweet red bean filling",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-3-4',
        code: "B05",
        name: "Vegetarian Yam Bun",
        description: "Fragrant yam paste in a soft, fluffy bun.",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-3-5',
        code: "B06",
        name: "Salted Egg Lotus Bun",
        description: "Smooth lotus paste with rich salted egg yolk.",
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
        code: "K03",
        name: "Stir Fried Radish Cake",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-4-1',
        code: "K01",
        name: "Chicken Glutinous Rice",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-4-2',
        code: "K02",
        name: "Chicken Porridge",
        description: undefined,
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
        code: "R04",
        name: "Butter Milk Chicken Rice",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-1',
        code: "R23",
        name: "Kampung Fried Rice",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-2',
        code: "R53",
        name: "Fried Chicken Nasi Lemak",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-3',
        code: "R01",
        name: "Dried Chilli Chicken Rice",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-4',
        code: "R02",
        name: "Sweet And Sour Chicken Rice",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-5',
        code: "R03",
        name: "Butter Milk Salted Egg Chicken Rice",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-6',
        code: "R05",
        name: "Sambal Chicken Rice",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-7',
        code: "R06",
        name: "Black Pepper Chicken Rice",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-8',
        code: "R07",
        name: "Curry Buttermilk Chicken Rice",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-9',
        code: "R22",
        name: "Chinese Fried Rice",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-10',
        code: "R23",
        name: "Tomyam Fried Rice",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-11',
        code: "R51",
        name: "Nasi Lemak Biasa",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-5-12',
        code: "R52",
        name: "Nasi Lemak With Sambal Prawn",
        description: undefined,
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
        name: "Penang Fried Keow Teow",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-6-1',
        code: "M04",
        name: "Cantonese Style Yee Mee",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-6-2',
        code: "M05",
        name: "Cantonese Style Keow Teow",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-6-3',
        code: "M06",
        name: "Cantonese Style Yuan Yang",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-6-4',
        code: "M02",
        name: "Signature Fried Noodle",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-6-5',
        code: "M03",
        name: "Cantonese Style Meehon",
        description: undefined,
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
        name: "Poh Lei",
        description: "Smooth & Bold. Great for heavy meals",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-7-1',
        code: "BT02",
        name: "Tie Guan Yin",
        description: "Fragrant & Refreshing. For tea aroma lovers",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-7-2',
        code: "BT03",
        name: "Tea King",
        description: "Balanced & Smooth. Perfect for first timers",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-7-3',
        code: "BT04",
        name: "Kok Poh",
        description: "Cooling & Light. Great for warm weather",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-7-4',
        code: "BT05",
        name: "Jasmine Tea",
        description: "Floral & Gentle. Soft fragrant tea lovers",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-7-5',
        code: "BT06",
        name: "Chrysanthemum Tea",
        description: "Light & Cooling. Suitable for evenings",
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-7-6',
        code: "BT07",
        name: "Own Tea",
        description: "Add on per pax",
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
        name: "100 Plus",
        description: undefined,
        price: undefined,
        variants: [{"type":"Cold","code":"BL101","price":17}]
      },
      {
        id: 'dish-8-1',
        code: undefined,
        name: "Coca-Cola",
        description: undefined,
        price: undefined,
        variants: [{"type":"Cold","code":"BL102","price":17}]
      },
      {
        id: 'dish-8-2',
        code: undefined,
        name: "Soya",
        description: undefined,
        price: undefined,
        variants: [{"type":"Cold","code":"BL103","price":17}]
      },
      {
        id: 'dish-8-3',
        code: undefined,
        name: "Mineral Water",
        description: undefined,
        price: undefined,
        variants: [{"type":"Cold","code":"BL104","price":17}]
      },
      {
        id: 'dish-8-4',
        code: undefined,
        name: "Kopi",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BH01","price":3.5},{"type":"Cold","code":"BC01","price":4}]
      },
      {
        id: 'dish-8-5',
        code: undefined,
        name: "Kopi O",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BH02","price":3.2},{"type":"Cold","code":"BC02","price":3.7}]
      },
      {
        id: 'dish-8-6',
        code: undefined,
        name: "Teh",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BH04","price":3.5},{"type":"Cold","code":"BC04","price":4}]
      },
      {
        id: 'dish-8-7',
        code: undefined,
        name: "Teh O",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BH07","price":3.2},{"type":"Cold","code":"BC07","price":3.7}]
      },
      {
        id: 'dish-8-8',
        code: undefined,
        name: "Cham",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BH08","price":17},{"type":"Cold","code":"BC08","price":17}]
      },
      {
        id: 'dish-8-9',
        code: undefined,
        name: "Milo",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BH12","price":17},{"type":"Cold","code":"BC12","price":17}]
      },
      {
        id: 'dish-8-10',
        code: undefined,
        name: "Sirap",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BH13","price":17},{"type":"Cold","code":"BC13","price":17}]
      },
      {
        id: 'dish-8-11',
        code: undefined,
        name: "Sirap Limau",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BH14","price":17},{"type":"Cold","code":"BC14","price":17}]
      },
      {
        id: 'dish-8-12',
        code: undefined,
        name: "Sirap Limau Bandung",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BH15","price":17},{"type":"Cold","code":"BC15","price":17}]
      },
      {
        id: 'dish-8-13',
        code: undefined,
        name: "Honey Lemon",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BW107","price":17},{"type":"Cold","code":"BW207","price":17}]
      },
      {
        id: 'dish-8-14',
        code: undefined,
        name: "Lemon Tea",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BW108","price":17},{"type":"Cold","code":"BW208","price":17}]
      },
      {
        id: 'dish-8-15',
        code: undefined,
        name: "Chinese Tea",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BL201","price":17},{"type":"Cold","code":"BL202","price":17}]
      },
      {
        id: 'dish-8-16',
        code: undefined,
        name: "Sky Juice",
        description: undefined,
        price: undefined,
        variants: [{"type":"Hot","code":"BL203","price":17},{"type":"Cold","code":"BL204","price":17}]
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
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-9-1',
        code: "BJ03",
        name: "Orange",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-9-2',
        code: "BJ04",
        name: "Carrot Milk",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-9-3',
        code: "BJ05",
        name: "Lemon",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-9-4',
        code: "BJ06",
        name: "Limau",
        description: undefined,
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
        name: "Longan Sea Coconut",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-10-1',
        code: "BL302",
        name: "Bamboo Cane",
        description: undefined,
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
        code: "BV71+",
        name: "Pink Guava Soda",
        description: undefined,
        price: 13.9,
        variants: undefined
      },
      {
        id: 'dish-11-1',
        code: "BV72",
        name: "Peach Lemon Fizz",
        description: undefined,
        price: 13.9,
        variants: undefined
      },
      {
        id: 'dish-11-2',
        code: "BV73",
        name: "Lychee Lime Soda",
        description: undefined,
        price: 13.9,
        variants: undefined
      },
      {
        id: 'dish-11-3',
        code: "BV74",
        name: "Tropical Passion Cooler",
        description: undefined,
        price: 14.9,
        variants: undefined
      },
      {
        id: 'dish-11-4',
        code: "BV75+",
        name: "Watermelon Mint Sparkler",
        description: undefined,
        price: 14.9,
        variants: undefined
      },
      {
        id: 'dish-11-5',
        code: "BV76",
        name: "Blue Ocean Citrus",
        description: undefined,
        price: 14.9,
        variants: undefined
      }
    ]
  },
  {
    id: 'cat-12',
    name: "THE HOME EDITION (FROZEN FRESH)",
    subtitle: "Handmade Dim Sum Anytime",
    description: "Bring home your favorite halal handmade dim sum, ready to steam and share anytime.",
    addOns: undefined,
    dishes: [
      {
        id: 'dish-12-0',
        code: "D01F",
        name: "Chicken & Shrimp Dumplings (12 pcs)",
        description: undefined,
        price: 25,
        variants: undefined
      },
      {
        id: 'dish-12-1',
        code: "D02F",
        name: "Shrimp Dumplings (9 pcs)",
        description: undefined,
        price: 28.5,
        variants: undefined
      },
      {
        id: 'dish-12-2',
        code: "D03F",
        name: "Salted Egg Dumplings (12 pcs)",
        description: undefined,
        price: 22,
        variants: undefined
      },
      {
        id: 'dish-12-3',
        code: "D04F",
        name: "Coriander Dumplings (9 pcs)",
        description: undefined,
        price: 19,
        variants: undefined
      },
      {
        id: 'dish-12-4',
        code: "D05F",
        name: "Seaweed Roll (9 pcs)",
        description: undefined,
        price: 19,
        variants: undefined
      },
      {
        id: 'dish-12-5',
        code: "D20F",
        name: "Original Dumplings (12 pcs)",
        description: undefined,
        price: 28.5,
        variants: undefined
      },
      {
        id: 'dish-12-6',
        code: "D21F",
        name: "Tom Yum Dumplings (12 pcs)",
        description: undefined,
        price: 22,
        variants: undefined
      },
      {
        id: 'dish-12-7',
        code: "D23F",
        name: "Black Pepper Dumplings (12 pcs)",
        description: undefined,
        price: 19,
        variants: undefined
      },
      {
        id: 'dish-12-8',
        code: "K01F",
        name: "Chicken Glutinous Rice (2 pcs)",
        description: undefined,
        price: 19,
        variants: undefined
      },
      {
        id: 'dish-12-9',
        code: "B02F",
        name: "Golden Custard Bun (6 pcs)",
        description: undefined,
        price: 17,
        variants: undefined
      },
      {
        id: 'dish-12-10',
        code: "B03F",
        name: "Charcoal Red Bean Bun (6 pcs)",
        description: undefined,
        price: 28.5,
        variants: undefined
      },
      {
        id: 'dish-12-11',
        code: "B04F",
        name: "BBQ Chicken Bun (6 pcs)",
        description: undefined,
        price: 22,
        variants: undefined
      },
      {
        id: 'dish-12-12',
        code: "B05F",
        name: "Yam Bun (6 pcs)",
        description: undefined,
        price: 19,
        variants: undefined
      },
      {
        id: 'dish-12-13',
        code: "B06F",
        name: "Salted Egg Lotus Bun (6 pcs)",
        description: undefined,
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
