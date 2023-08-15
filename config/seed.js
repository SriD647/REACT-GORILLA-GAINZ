require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Barbell and plates', sortOrder: 10},
    {name: 'Dumbbells', sortOrder: 20},
    {name: 'Benches', sortOrder: 30},
    {name: 'Racks', sortOrder: 40},
    {name: 'Cardio', sortOrder: 50},
    {name: 'Resistance bands', sortOrder: 60},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Standard barbell', manufacturer: 'Titan', emoji: '🍔', category: categories[0], price: 45.00},
    {name: '45 lbs', manufacturer: 'Rogue', emoji: '🍔', category: categories[0], price: 45.00},
    {name: '35 lbs', manufacturer: 'Rogue', emoji: '🥪', category: categories[0], price: 35.00},
    {name: '25 lbs', manufacturer: 'Rogue', emoji: '🌭', category: categories[0], price: 25.00},
    {name: '10 lbs', manufacturer: 'Rogue', emoji: '🌭', category: categories[0], price: 10.00},
    {name: '5 lbs', manufacturer: 'Rogue', emoji: '🌭', category: categories[0], price: 5.00},
    {name: '150 lbs', manufacturer: 'American Iron', emoji: '🦀', category: categories[1], price: 150.00},
    {name: '125 lbs', manufacturer: 'American Iron', emoji: '🍤', category: categories[1], price: 125.00},
    {name: '100 lbs', manufacturer: 'American Iron', emoji: '🍤', category: categories[1], price: 100.00},
    {name: '75 lbs', manufacturer: 'American Iron', emoji: '🍤', category: categories[1], price: 75.00},
    {name: '50 lbs',  manufacturer: 'American Iron', emoji: '🍤', category: categories[1], price: 50.00},
    {name: '25 lbs', manufacturer: 'American Iron',  emoji: '🍤', category: categories[1], price: 25.00},
    {name: '5 lbs',  manufacturer: 'American Iron', emoji: '🦞', category: categories[1], price: 5.00},
    {name: 'Flat bench', manufacturer: 'Eleiko', emoji: '🌮', category: categories[2], price: 180.00},
    {name: 'Adjustable bench', manufacturer: 'Eleiko', emoji: '🌯', category: categories[2], price: 250.00},
    {name: 'Power rack', manufacturer: 'Eleiko', emoji: '🍕', category: categories[3], price: 450.00},
    {name: 'Calesthenics rack', manufacturer: 'Eleiko', emoji: '🍝', category: categories[3], price: 400.00},
    {name: 'Treadmill', manufacturer: 'ProMax',  emoji: '🍟', category: categories[4], price: 600.00},
    {name: 'Elliptical', manufacturer: 'ProMax', emoji: '🥗', category: categories[4], price: 350.00},
    {name: 'Heavy resistance', manufacturer: 'Stealth', emoji: '🍨', category: categories[5], price: 25.00},
    {name: 'Medium resistance', manufacturer: 'Stealth', emoji: '🧁', category: categories[5], price: 15.00},
    {name: 'Light resistance', manufacturer: 'Stealth',emoji: '🍮', category: categories[5], price: 5.00},
  ]);

  console.log(items)

  process.exit();

})();