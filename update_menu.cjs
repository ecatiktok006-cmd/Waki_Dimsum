const fs = require('fs');

const menuData = {
    "restaurant_info": {
      "name": "WAKI DIMSUM",
      "established": "EST. 2024",
      "location": "2, Jalan USJ 1/1C, Regalia Business Centre, 47620, Subang Jaya, Selangor",
      "operation_hours": "Mon - Sun (Except Wed) 10am - 3pm, 5pm - 9pm",
      "contact": "016-663 4376",
      "certifications": ["HALAL CERTIFIED"]
    },
    "sections": [
      {
        "title": "THE SILKY JOURNAL",
        "subtitle": "Handmade Rolls, Steamed Fresh",
        "description": "Soft silky chee cheong fun wrapped fresh upon order with warm sauces and comforting flavors.",
        "items": [
          { "code": "C01", "name": "Signature Steamed Rice Noodle With Prawn Spring Roll", "price": "TBA" },
          { "code": "C02", "name": "Steamed Rice Noodle With Prawn", "price": "TBA" },
          { "code": "C03", "name": "Steamed Rice Noodle With Chicken", "price": "TBA" },
          { "code": "C04", "name": "Steamed Rice Noodle", "price": "TBA" }
        ]
      },
      {
        "title": "THE GOLDEN CRISP",
        "subtitle": "Fried Fresh, Served Hot",
        "items": [
          { "code": "F17", "name": "Cheesy Prawn Roll", "price": "TBA" },
          { "code": "F06", "name": "Prawn Spring Roll", "price": "TBA" },
          { "code": "F01", "name": "Salad Prawn", "price": "TBA" },
          { "code": "F02", "name": "Deep Fry Yam Pastry", "price": "TBA" },
          { "code": "F19", "name": "Fried Wanton", "price": "TBA" },
          { "code": "F03", "name": "Deep Fry Radish Cake", "price": "TBA" },
          { "code": "F14", "name": "Shanghai Dumpling", "price": "TBA" },
          { "code": "F09", "name": "Bamboo Charcoal Yam Bun", "price": "TBA" },
          { "code": "F15", "name": "Spring Roll", "price": "TBA" },
          { "code": "F16", "name": "Mango Prawn Dumpling", "price": "TBA" },
          { "code": "F08", "name": "Golden Sesame Ball", "price": "TBA" }
        ]
      },
      {
        "title": "THE STEAMY EDITION",
        "subtitle": "Small Baskets, Big Happiness",
        "description": "Hot, handmade, and freshly steamed dim sum crafted for sharing warm moments together.",
        "items": [
          { "code": "D01", "name": "Chicken & Shrimp Dumpling", "price": 17.00 },
          { "code": "D02", "name": "Shrimp Dumpling", "price": 17.00 },
          { "code": "D12", "name": "Spicy Sauce Dumpling", "price": 17.00 }
        ]
      },
      {
        "title": "THE BAO TIMES",
        "subtitle": "Warm Fillings, Soft Moments",
        "items": [
          { "code": "B02", "name": "Golden Custard Bun", "description": "Silky smooth custard in a soft, fluffy bun.", "price": 17.00 },
          { "code": "B04", "name": "BBQ Chicken Bun", "description": "Tender BBQ chicken wrapped in a soft, fluffy bun.", "price": 17.00 },
          { "code": "B01", "name": "Shanghai Soup Dumpling", "description": "Delicate soup dumplings with rich, savory broth.", "price": 17.00 },
          { "code": "B03", "name": "Vegetarian Charcoal Red Bean Bun", "description": "Soft charcoal bun with sweet red bean filling", "price": 17.00 },
          { "code": "B05", "name": "Vegetarian Yam Bun", "description": "Fragrant yam paste in a soft, fluffy bun.", "price": 17.00 },
          { "code": "B06", "name": "Salted Egg Lotus Bun", "description": "Smooth lotus paste with rich salted egg yolk.", "price": 17.00 }
        ]
      },
      {
        "title": "THE SIDE STORY",
        "subtitle": "Little Extras Worth Discovering",
        "description": "Side dishes, snacks, and comforting specialties that complete the WAKI experience.",
        "items": [
          { "code": "K03", "name": "Stir Fried Radish Cake", "price": 17.00 },
          { "code": "K01", "name": "Chicken Glutinous Rice", "price": 17.00 },
          { "code": "K02", "name": "Chicken Porridge", "price": 17.00 }
        ]
      },
      {
        "title": "THE RICE PRESS",
        "subtitle": "Hearty Plates Made For Sharing",
        "description": "From buttery classics to wok-fried favorites, these hearty rice dishes satisfy every craving.",
        "items": [
          { "code": "R04", "name": "Butter Milk Chicken Rice", "price": 17.00 },
          { "code": "R23", "name": "Kampung Fried Rice", "price": 17.00 },
          { "code": "R53", "name": "Fried Chicken Nasi Lemak", "price": 17.00 },
          { "code": "R01", "name": "Dried Chilli Chicken Rice", "price": 17.00 },
          { "code": "R02", "name": "Sweet And Sour Chicken Rice", "price": 17.00 },
          { "code": "R03", "name": "Butter Milk Salted Egg Chicken Rice", "price": 17.00 },
          { "code": "R05", "name": "Sambal Chicken Rice", "price": 17.00 },
          { "code": "R06", "name": "Black Pepper Chicken Rice", "price": 17.00 },
          { "code": "R07", "name": "Curry Buttermilk Chicken Rice", "price": 17.00 },
          { "code": "R22", "name": "Chinese Fried Rice", "price": 17.00 },
          { "code": "R23", "name": "Tomyam Fried Rice", "price": 17.00 },
          { "code": "R51", "name": "Nasi Lemak Biasa", "price": 17.00 },
          { "code": "R52", "name": "Nasi Lemak With Sambal Prawn", "price": 17.00 }
        ],
        "add_ons": [
          { "name": "Sambal", "price": 17.00 },
          { "name": "Fried Egg", "price": 17.00 },
          { "name": "Nasi Lemak Rice", "price": 17.00 },
          { "name": "Fried Chicken", "price": 17.00 }
        ]
      },
      {
        "title": "THE WOK DISPATCH",
        "subtitle": "Wok-Tossed Stories in Every Bowl",
        "description": "Signature noodles tossed over high heat for rich aroma, bold flavor, and satisfying comfort.",
        "items": [
          { "code": "M01", "name": "Penang Fried Keow Teow", "price": 17.00 },
          { "code": "M04", "name": "Cantonese Style Yee Mee", "price": 17.00 },
          { "code": "M05", "name": "Cantonese Style Keow Teow", "price": 17.00 },
          { "code": "M06", "name": "Cantonese Style Yuan Yang", "price": 17.00 },
          { "code": "M02", "name": "Signature Fried Noodle", "price": 17.00 },
          { "code": "M03", "name": "Cantonese Style Meehon", "price": 17.00 }
        ]
      },
      {
        "title": "THE TEA EDITION",
        "subtitle": "Timeless Brews For Slow Conversations",
        "items": [
          { "code": "BT01", "name": "Poh Lei", "description": "Smooth & Bold. Great for heavy meals", "price": 17.00 },
          { "code": "BT02", "name": "Tie Guan Yin", "description": "Fragrant & Refreshing. For tea aroma lovers", "price": 17.00 },
          { "code": "BT03", "name": "Tea King", "description": "Balanced & Smooth. Perfect for first timers", "price": 17.00 },
          { "code": "BT04", "name": "Kok Poh", "description": "Cooling & Light. Great for warm weather", "price": 17.00 },
          { "code": "BT05", "name": "Jasmine Tea", "description": "Floral & Gentle. Soft fragrant tea lovers", "price": 17.00 },
          { "code": "BT06", "name": "Chrysanthemum Tea", "description": "Light & Cooling. Suitable for evenings", "price": 17.00 },
          { "code": "BT07", "name": "Own Tea", "description": "Add on per pax", "price": 17.00 }
        ]
      },
      {
        "title": "THE KOPITIAM POST",
        "subtitle": "Local Classics Served Daily",
        "items": [
          { "name": "100 Plus", "variants": [ { "type": "Cold", "code": "BL101", "price": 17.00 } ] },
          { "name": "Coca-Cola", "variants": [ { "type": "Cold", "code": "BL102", "price": 17.00 } ] },
          { "name": "Soya", "variants": [ { "type": "Cold", "code": "BL103", "price": 17.00 } ] },
          { "name": "Mineral Water", "variants": [ { "type": "Cold", "code": "BL104", "price": 17.00 } ] },
          { "name": "Kopi", "variants": [ { "type": "Hot", "code": "BH01", "price": 3.50 }, { "type": "Cold", "code": "BC01", "price": 4.00 } ] },
          { "name": "Kopi O", "variants": [ { "type": "Hot", "code": "BH02", "price": 3.20 }, { "type": "Cold", "code": "BC02", "price": 3.70 } ] },
          { "name": "Teh", "variants": [ { "type": "Hot", "code": "BH04", "price": 3.50 }, { "type": "Cold", "code": "BC04", "price": 4.00 } ] },
          { "name": "Teh O", "variants": [ { "type": "Hot", "code": "BH07", "price": 3.20 }, { "type": "Cold", "code": "BC07", "price": 3.70 } ] },
          { "name": "Cham", "variants": [ { "type": "Hot", "code": "BH08", "price": 17.00 }, { "type": "Cold", "code": "BC08", "price": 17.00 } ] },
          { "name": "Milo", "variants": [ { "type": "Hot", "code": "BH12", "price": 17.00 }, { "type": "Cold", "code": "BC12", "price": 17.00 } ] },
          { "name": "Sirap", "variants": [ { "type": "Hot", "code": "BH13", "price": 17.00 }, { "type": "Cold", "code": "BC13", "price": 17.00 } ] },
          { "name": "Sirap Limau", "variants": [ { "type": "Hot", "code": "BH14", "price": 17.00 }, { "type": "Cold", "code": "BC14", "price": 17.00 } ] },
          { "name": "Sirap Limau Bandung", "variants": [ { "type": "Hot", "code": "BH15", "price": 17.00 }, { "type": "Cold", "code": "BC15", "price": 17.00 } ] },
          { "name": "Honey Lemon", "variants": [ { "type": "Hot", "code": "BW107", "price": 17.00 }, { "type": "Cold", "code": "BW207", "price": 17.00 } ] },
          { "name": "Lemon Tea", "variants": [ { "type": "Hot", "code": "BW108", "price": 17.00 }, { "type": "Cold", "code": "BW208", "price": 17.00 } ] },
          { "name": "Chinese Tea", "variants": [ { "type": "Hot", "code": "BL201", "price": 17.00 }, { "type": "Cold", "code": "BL202", "price": 17.00 } ] },
          { "name": "Sky Juice", "variants": [ { "type": "Hot", "code": "BL203", "price": 17.00 }, { "type": "Cold", "code": "BL204", "price": 17.00 } ] }
        ]
      },
      {
        "title": "JUICE SERIES",
        "items": [
          { "code": "BJ02", "name": "Green Apple", "price": 17.00 },
          { "code": "BJ03", "name": "Orange", "price": 17.00 },
          { "code": "BJ04", "name": "Carrot Milk", "price": 17.00 },
          { "code": "BJ05", "name": "Lemon", "price": 17.00 },
          { "code": "BJ06", "name": "Limau", "price": 17.00 }
        ]
      },
      {
        "title": "DESSERT SERIES",
        "items": [
          { "code": "BL301", "name": "Longan Sea Coconut", "price": 17.00 },
          { "code": "BL302", "name": "Bamboo Cane", "price": 17.00 }
        ]
      },
      {
        "title": "THE MOCKTAIL TIMES",
        "subtitle": "Refreshing Signatures For Every Gathering",
        "description": "Colorful handcrafted mocktails inspired by tropical fruits, refreshing sodas, and modern café culture made for sharing joyful moments together.",
        "items": [
          { "code": "BV71+", "name": "Pink Guava Soda", "price": 13.90 },
          { "code": "BV72", "name": "Peach Lemon Fizz", "price": 13.90 },
          { "code": "BV73", "name": "Lychee Lime Soda", "price": 13.90 },
          { "code": "BV74", "name": "Tropical Passion Cooler", "price": 14.90 },
          { "code": "BV75+", "name": "Watermelon Mint Sparkler", "price": 14.90 },
          { "code": "BV76", "name": "Blue Ocean Citrus", "price": 14.90 }
        ]
      },
      {
        "title": "THE HOME EDITION (FROZEN FRESH)",
        "subtitle": "Handmade Dim Sum Anytime",
        "description": "Bring home your favorite halal handmade dim sum, ready to steam and share anytime.",
        "items": [
          { "code": "D01F", "name": "Chicken & Shrimp Dumplings (12 pcs)", "price": 25.00 },
          { "code": "D02F", "name": "Shrimp Dumplings (9 pcs)", "price": 28.50 },
          { "code": "D03F", "name": "Salted Egg Dumplings (12 pcs)", "price": 22.00 },
          { "code": "D04F", "name": "Coriander Dumplings (9 pcs)", "price": 19.00 },
          { "code": "D05F", "name": "Seaweed Roll (9 pcs)", "price": 19.00 },
          { "code": "D20F", "name": "Original Dumplings (12 pcs)", "price": 28.50 },
          { "code": "D21F", "name": "Tom Yum Dumplings (12 pcs)", "price": 22.00 },
          { "code": "D23F", "name": "Black Pepper Dumplings (12 pcs)", "price": 19.00 },
          { "code": "K01F", "name": "Chicken Glutinous Rice (2 pcs)", "price": 19.00 },
          { "code": "B02F", "name": "Golden Custard Bun (6 pcs)", "price": 17.00 },
          { "code": "B03F", "name": "Charcoal Red Bean Bun (6 pcs)", "price": 28.50 },
          { "code": "B04F", "name": "BBQ Chicken Bun (6 pcs)", "price": 22.00 },
          { "code": "B05F", "name": "Yam Bun (6 pcs)", "price": 19.00 },
          { "code": "B06F", "name": "Salted Egg Lotus Bun (6 pcs)", "price": 19.00 }
        ]
      }
    ]
};

let content = fs.readFileSync('src/data.ts', 'utf8');
const menuCategoriesStr = menuData.sections.map((section, idx) => {
    return `{
    id: 'cat-${idx}',
    name: ${JSON.stringify(section.title)},
    subtitle: ${section.subtitle ? JSON.stringify(section.subtitle) : 'undefined'},
    description: ${section.description ? JSON.stringify(section.description) : 'undefined'},
    addOns: ${section.add_ons ? JSON.stringify(section.add_ons) : 'undefined'},
    dishes: [
      ${section.items.map((item, i) => `{
        id: 'dish-${idx}-${i}',
        code: ${item.code ? JSON.stringify(item.code) : 'undefined'},
        name: ${JSON.stringify(item.name)},
        description: ${item.description ? JSON.stringify(item.description) : 'undefined'},
        price: ${item.price !== "TBA" ? item.price : 'undefined'},
        variants: ${item.variants ? JSON.stringify(item.variants) : 'undefined'}
      }`).join(',\n      ')}
    ]
  }`;
}).join(',\n  ');

content = content.replace(/export const MENU_CATEGORIES: Category\[\] = \[[\s\S]*?\];/m, `export const MENU_CATEGORIES: Category[] = [\n  ${menuCategoriesStr}\n];`);

fs.writeFileSync('src/data.ts', content);
