require('dotenv').config();
require('./database');
const Category = require('../models/category');
const Item = require('../models/item');
// const links= {
//   Rogue: 'https://www.roguecanada.ca/',
//   Titan: 'https://www.titan.fitness/',
//   Gym80: 'https://gym80.us/',
//   Hampton: 'https://www.hamptonfit.com/',
//   Eleiko : 'https://eleiko.com/en-ca',
//   Sedia: 'https://sideaita.net/',
//   ProMax: 'https://promaxima.com/cardio/',
//   CoreFX: 'https://corefx.ca/',
//   Quantam: 'https://www.quantum.lk/'
// }
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Plates', sortOrder: 10},
    {name: 'Dumbbells', sortOrder: 20},
    {name: 'Benches', sortOrder: 30},
    {name: 'Racks', sortOrder: 40},
    {name: 'Cardio', sortOrder: 50},
    {name: 'Resistance bands', sortOrder: 60},
  ]);
  await Item.deleteMany({});
  const items = await Item.create([
    {name: '45 lbs', type: 'Plate', manufacturer: 'Rogue', website: 'https://www.roguecanada.ca/', image: 'https://i.imgur.com/BfaYebV.jpg', category: categories[0], price: 45.00},
    {name: '35 lbs', type: 'Plate', manufacturer: 'Rogue', website: 'https://www.roguecanada.ca/', image: 'https://i.imgur.com/JVKNhuk.jpg', category: categories[0], price: 35.00},
    {name: '25 lbs', type: 'Plate', manufacturer: 'Rogue', website: 'https://www.roguecanada.ca/', image: 'https://i.imgur.com/vhzav0K.jpg', category: categories[0], price: 25.00},
    {name: '10 lbs', type: 'Plate',  manufacturer: 'Rogue', website: 'https://www.roguecanada.ca/', image: 'https://i.imgur.com/d3PCfrM.jpg', category: categories[0], price: 10.00},
    {name: '5 lbs', type: 'Plate',  manufacturer: 'Rogue', website: 'https://www.roguecanada.ca/', image: 'https://i.imgur.com/5VGiS9C.jpg', category: categories[0], price: 5.00},
    {name: '150 lbs', type: 'Dumbbell',  manufacturer: 'Gym80', website: 'https://gym80.us/', image: 'https://i.imgur.com/PcrlqTF.png', category: categories[1], price: 150.00},
    {name: '125 lbs',type: 'Dumbbell', manufacturer: 'Hampton', website: 'https://www.hamptonfit.com/', image: 'https://i.imgur.com/JiEwt6s.jpg', category: categories[1], price: 125.00},
    {name: '100 lbs',type: 'Dumbbell', manufacturer: 'Hampton', website: 'https://www.hamptonfit.com/', image: 'https://i.imgur.com/XHUjs7z.jpg', category: categories[1], price: 100.00},
    {name: '75 lbs', type: 'Dumbbell', manufacturer: 'Hampton', website: 'https://www.hamptonfit.com/', image: 'https://i.imgur.com/rHm7mzJ.jpg', category: categories[1], price: 75.00},
    {name: '50 lbs', type: 'Dumbbell', manufacturer: 'Hampton', website: 'https://www.hamptonfit.com/', image: 'https://i.imgur.com/1qJMHR0.jpg', category: categories[1], price: 50.00},
    {name: '25 lbs', type: 'Dumbbell', manufacturer: 'Hampton', website: 'https://www.hamptonfit.com/', image: 'https://i.imgur.com/nU9JrpK.jpg', category: categories[1], price: 25.00},
    {name: '10 lbs',type: 'Dumbbell',  manufacturer: 'Hampton', website: 'https://www.hamptonfit.com/', image: 'https://i.imgur.com/MspRRJR.jpg', category: categories[1], price: 5.00},
    {name: 'Flat', type: 'Bench', manufacturer: 'Eleiko', website: 'https://eleiko.com/en-ca', image: 'https://i.imgur.com/S1EE7kR.jpg', category: categories[2], price: 180.00},
    {name: 'Adjustable', type: 'Bench', manufacturer: 'Eleiko', website: 'https://eleiko.com/en-ca', image: 'https://i.imgur.com/ULS8jvU.jpg', category: categories[2], price: 250.00},
    {name: 'Power', type: 'Rack', manufacturer: 'Rogue', website: 'https://www.roguecanada.ca/', image: 'https://i.imgur.com/P0k1L9c.jpg', category: categories[3], price: 450.00},
    {name: 'Calesthenics', type: 'Rack', manufacturer: 'Sidea', website: 'https://sideaita.net/', image: 'https://i.imgur.com/e3nrfHH.jpg', category: categories[3], price: 400.00},
    {name: 'Treadmill', type: 'Cardio', manufacturer: 'ProMax', website: 'https://promaxima.com/cardio/',  image: 'https://i.imgur.com/168CUeQ.jpg', category: categories[4], price: 600.00},
    {name: 'Elliptical', type: 'Cardio', manufacturer: 'ProMax', website: 'https://promaxima.com/cardio/', image: 'https://i.imgur.com/mYb0AZM.jpg', category: categories[4], price: 350.00},
    {name: 'Heavy', type: 'Band', manufacturer: 'Rogue', website: 'https://www.roguecanada.ca/', image: 'https://i.imgur.com/qX2wPxU.jpg', category: categories[5], price: 25.00},
    {name: 'Medium', type: 'Band', manufacturer: 'CoreFX', website: 'https://corefx.ca/', image: 'https://i.imgur.com/wUtLs6Y.jpg', category: categories[5], price: 15.00},
    {name: 'Light', type: 'Band', manufacturer: 'Qauntam', website: 'https://www.quantum.lk/', image: 'https://i.imgur.com/rhbzseO.jpg', category: categories[5], price: 5.00},
  ]);
  console.log(items);
  process.exit();
})();