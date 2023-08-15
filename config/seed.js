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
    {name: 'Standard barbell', manufacturer: 'Titan', image: 'https://i.imgur.com/45SvRpd.jpg', category: categories[0], price: 45.00},
    {name: '45 lbs', manufacturer: 'Rogue', image: 'https://i.imgur.com/BfaYebV.jpg', category: categories[0], price: 45.00},
    {name: '35 lbs', manufacturer: 'Rogue', image: 'https://i.imgur.com/JVKNhuk.jpg', category: categories[0], price: 35.00},
    {name: '25 lbs', manufacturer: 'Rogue', image: 'https://i.imgur.com/vhzav0K.jpg', category: categories[0], price: 25.00},
    {name: '10 lbs', manufacturer: 'Rogue', image: 'https://i.imgur.com/d3PCfrM.jpg', category: categories[0], price: 10.00},
    {name: '5 lbs', manufacturer: 'Rogue', image: 'https://i.imgur.com/5VGiS9C.jpg', category: categories[0], price: 5.00},
    {name: '150 lbs', manufacturer: 'Gym80', image: 'https://i.imgur.com/PcrlqTF.png', category: categories[1], price: 150.00},
    {name: '125 lbs', manufacturer: 'Dura Bell', image: 'https://i.imgur.com/JiEwt6s.jpg', category: categories[1], price: 125.00},
    {name: '100 lbs', manufacturer: 'Dura Bell', image: 'https://i.imgur.com/XHUjs7z.jpg', category: categories[1], price: 100.00},
    {name: '75 lbs', manufacturer: 'Dura Bell', image: 'https://i.imgur.com/rHm7mzJ.jpg', category: categories[1], price: 75.00},
    {name: '50 lbs',  manufacturer: 'Dura Bell', image: 'https://i.imgur.com/1qJMHR0.jpg', category: categories[1], price: 50.00},
    {name: '25 lbs', manufacturer: 'Dura Bell',  image: 'https://i.imgur.com/nU9JrpK.jpg', category: categories[1], price: 25.00},
    {name: '10 lbs',  manufacturer: 'Dura Bell', image: 'https://i.imgur.com/MspRRJR.jpg', category: categories[1], price: 5.00},
    {name: 'Flat', manufacturer: 'Eleiko', image: 'https://i.imgur.com/S1EE7kR.jpg', category: categories[2], price: 180.00},
    {name: 'Adjustable', manufacturer: 'Eleiko', image: 'https://i.imgur.com/ULS8jvU.jpg', category: categories[2], price: 250.00},
    {name: 'Power', manufacturer: 'Rogue', image: 'https://i.imgur.com/P0k1L9c.jpg', category: categories[3], price: 450.00},
    {name: 'Calesthenics', manufacturer: 'Sidea', image: 'https://i.imgur.com/e3nrfHH.jpg', category: categories[3], price: 400.00},
    {name: 'Treadmill', manufacturer: 'ProMax',  image: 'https://i.imgur.com/168CUeQ.jpg', category: categories[4], price: 600.00},
    {name: 'Elliptical', manufacturer: 'ProMax', image: 'https://i.imgur.com/mYb0AZM.jpg', category: categories[4], price: 350.00},
    {name: 'Heavy', manufacturer: 'Rogue', image: 'https://i.imgur.com/qX2wPxU.jpg', category: categories[5], price: 25.00},
    {name: 'Medium', manufacturer: 'CoreFX', image: 'https://i.imgur.com/wUtLs6Y.jpg', category: categories[5], price: 15.00},
    {name: 'Light', manufacturer: 'Qauntam',image: 'https://i.imgur.com/rhbzseO.jpg', category: categories[5], price: 5.00},
  ]);

  console.log(items);

  process.exit();

})();
