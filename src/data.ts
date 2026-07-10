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
    id: 'breakfast',
    name: 'Breakfast',
    dishes: [
      { id: 'bf-1', name: 'Morning Congee', description: 'Warm comforting rice porridge.', price: 7.00, image: '/src/assets/images/about_steam_1783567485399.jpg', isHalal: true },
      { id: 'bf-2', name: 'You Tiao', description: 'Crispy fried dough sticks.', price: 4.50, image: '/src/assets/images/about_ingredients_1783567499817.jpg', isHalal: true }
    ]
  },
  {
    id: 'steamed',
    name: 'Steamed Dim Sum',
    dishes: SIGNATURE_DISHES.slice(0, 4)
  },
  {
    id: 'fried',
    name: 'Fried Dim Sum',
    dishes: [
      { id: 'fr-1', name: 'Crispy Prawn Dumpling', description: 'Deep fried to a golden crisp.', price: 9.00, image: '/src/assets/images/about_platter_1783567469486.jpg', isHalal: true },
      { id: 'fr-2', name: 'Sesame Ball', description: 'Sweet lotus paste inside.', price: 6.00, image: '/src/assets/images/dish_custard_bun_1783567550286.jpg', isHalal: true }
    ]
  },
  {
    id: 'rice',
    name: 'Rice',
    dishes: [
      { id: 'rc-1', name: 'Nasi Lemak Dim Sum Style', description: 'Fragrant coconut rice.', price: 12.00, image: '/src/assets/images/about_platter_1783567469486.jpg', isHalal: true }
    ]
  },
  {
    id: 'noodles',
    name: 'Noodles',
    dishes: [
      { id: 'nd-1', name: 'Wonton Noodles', description: 'Springy egg noodles.', price: 10.00, image: '/src/assets/images/about_ingredients_1783567499817.jpg', isHalal: true }
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    dishes: [
      { id: 'bv-1', name: 'Iced Lemon Tea', description: 'Refreshing iced tea.', price: 4.00, image: '/src/assets/images/about_platter_1783567469486.jpg', isHalal: true },
      { id: 'bv-2', name: 'White Coffee', description: 'Local classic coffee.', price: 5.00, image: '/src/assets/images/about_platter_1783567469486.jpg', isHalal: true }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    dishes: [
      { id: 'ds-1', name: 'Mango Pudding', description: 'Sweet mango puree.', price: 6.50, image: '/src/assets/images/dish_custard_bun_1783567550286.jpg', isHalal: true }
    ]
  },
  {
    id: 'frozen',
    name: 'Frozen Products',
    dishes: [
      { id: 'fz-1', name: 'Frozen Har Gao', description: 'Take home to steam (Pack of 10).', price: 25.00, image: '/src/assets/images/dish_har_gow_1783567535786.jpg', isHalal: true },
      { id: 'fz-2', name: 'Frozen Siew Mai', description: 'Take home to steam (Pack of 10).', price: 22.00, image: '/src/assets/images/dish_siew_mai_1783567518247.jpg', isHalal: true }
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
