/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Variant {
  type: string;
  code: string;
  price: number;
}

export interface Dish {
  id: string;
  code?: string;
  name: string;
  description?: string;
  price?: number;
  image?: string;
  isHalal?: boolean;
  tag?: string;
  variants?: Variant[];
}

export interface Category {
  id: string;
  name: string;
  subtitle?: string;
  description?: string;
  dishes: Dish[];
  addOns?: { name: string; price: number }[];
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
