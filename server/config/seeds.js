const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Kitchen' },
    { name: 'Bedroom' },
    { name: 'Living Room' },
    { name: 'Home Office' },
    { name: 'Lighting' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Queen Size Bedframe',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'bed-queen.jpg',
      category: categories[1]._id,
      price: 222.99,
      quantity: 50
    },
    {
      name: 'Wine Cellar',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'kitchen-winecooler.jpg',
      category: categories[0]._id,
      price: 159.99,
      quantity: 30,
      featured: true
    },
    {
      name: 'Duvet Set - Queen',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'duvet.jpg',
      price: 47.99,
      quantity: 20
    },
    {
      name: 'Dining Chair',
      category: categories[0]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'kitchen-chair.jpg',
      price: 129.99,
      quantity: 50
    },
    {
      name: 'Office Chair',
      category: categories[3]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'office-chair.jpg',
      price: 68.99,
      quantity: 100,
      featured: true
    },
    {
      name: 'Kitchen Chair',
      category: categories[0]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'kitchen-chair2.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Standing Lamp',
      category: categories[4]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'lighting-lamp.jpg',
      price: 79.99,
      quantity: 30,
      featured: true
    },
    {
      name: 'Fridge',
      category: categories[0]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'kitchen-fridge.jpg',
      price: 999.99,
      quantity: 10,
      featured: true
    },
    {
      name: 'Microwave Oven',
      category: categories[0]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'kitchen-microwave.jpg',
      price: 111.99,
      quantity: 100
    },
    {
      name: 'TV Stand',
      category: categories[2]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'parlour-tvstand.jpg',
      price: 329.99,
      quantity: 100,
      featured: true
    },
    {
      name: 'Dresser',
      category: categories[1]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'dresser.jpg',
      price: 79.99,
      quantity: 100,
      featured: true
    },
    {
      name: 'Dining Table',
      category: categories[0]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'kitchen-table.jpg',
      price: 799.99,
      quantity: 60
    },
    {
      name: 'Desk Lamp',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'lighting-desklamp.jpg',
      price: 49.99,
      quantity: 80
    },
    {
      name: 'Table Lamp',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'lighting-tablelamp.jpg',
      price: 99.99,
      quantity: 50
    },
    {
      name: 'Wall Lamp',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'lighting-walllamp.jpg',
      price: 89.99,
      quantity: 130
    },
    {
      name: 'Nightstand',
      category: categories[1]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'nightstand.jpg',
      price: 99.99,
      quantity: 20
    },
    {
      name: 'Bookcase',
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'office-bookcase.jpg',
      price: 299.99,
      quantity: 60
    },
    {
      name: 'Office Desk',
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'office-desk.jpg',
      price: 249.99,
      quantity: 30
    },
    {
      name: 'Shelves',
      category: categories[3]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'office-shelves.jpg',
      price: 39.99,
      quantity: 40
    },
    {
      name: 'Living Room Couch',
      category: categories[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'parlour-couch.jpg',
      price: 799.99,
      quantity: 60
    },
    {
      name: 'Side Table',
      category: categories[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'parlour-sidetable.jpg',
      price: 99.99,
      quantity: 80
    },
    {
      name: 'Bluetooth Stereo Speakers',
      category: categories[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'parlour-speakers.jpg',
      price: 299.99,
      quantity: 20
    }
  ]);
 
  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
