/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isHalal: boolean;
  tag?: string;
}

export interface Category {
  id: string;
  name: string;
  dishes: Dish[];
}

export interface Review {
  id: string;
  name: string;
  initials: string;
  text: string;
  rating: number;
  date?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

export interface Occasion {
  id: string;
  title: string;
  image: string;
}
