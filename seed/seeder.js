const seeder = require('mongoose-seed')
require('dotenv').config()
const HOST_NAME = process.env.HOST_NAME || 'http://localhost:4000'

seeder.connect(process.env.MONGODB_URL, function() {
  seeder.loadModels([
    'src/models/Category.js',
    'src/models/Product.js'
  ]);

  seeder.clearModels(['Category', 'Product'], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    })

  })
})

const data = [
  {
      'model': 'Category',
      'documents': [
        {
          _id: '5f91eeb0e870ed6693daaffb',
          name: 'Pizza'
        },
        {
          _id: '5f91eeb0e870ed6693daaffc',
          name: 'Catégoire 2'
        },
        {
          _id: '5f91eeb0e870ed6693daaffd',
          name: 'Desserts'
        }
      ]
  },
  {
    'model': 'Product',
    'documents': [
      {
        name: 'Pizza Marinara 🍅" Parfait pour l\'apéro "',
        desciption: 'Tomate Mutti, Ail, Huile d\'olive',
        price: 7,
        image: `${HOST_NAME}/public/pizza-1.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Margarita 💥🍕🌿',
        desciption: 'Tomate Mutti, Mozzarella, basilic',
        price: 10,
        image: `${HOST_NAME}/public/pizza-2.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Alla rucola 🥬',
        description: 'Mozzarella, roquette et huile d\'olive.',
        price: 12,
        image: `${HOST_NAME}/public/pizza-3.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Terra mia 🥬🍃🍄',
        description: 'Tomate Mutti , Aubergines, Poivrons , Champignons, Artichauts , Roquette.',
        price: 13.50,
        image: `${HOST_NAME}/public/pizza-4.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Napoli 🐠',
        description: 'Sauce tomate, mozzarella, anchois, olives et câpres.',
        price: 13.90,
        image: `${HOST_NAME}/public/pizza-5.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Contadina 🦈',
        description: 'Tomate Mutti , Mozzarella, Thon albacore, Oignons rouges.',
        price: 14,
        image: `${HOST_NAME}/public/pizza-6.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Calzone 🥐',
        description: 'Tomate Mutti , Mozzarella, jambon cuit, oeuf',
        price: 14,
        image: `${HOST_NAME}/public/pizza-7.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Regina 🍄',
        description: 'Tomate Mutti , Mozzarella, Champignons Frais et Jambon cuit',
        price: 13.90,
        image: `${HOST_NAME}/public/pizza-8.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Affumicata 🧯',
        description: 'Tomate Mutti, Mozzarella ,scamorza fumée, jambon cuit , roquette',
        price: 13.50,
        image: `${HOST_NAME}/public/pizza-9.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Diavola 🌶 🔥',
        description: 'Tomate Mutti, Mozzarella, Spianata piquante, oignons rouges, poivrons',
        price: 14,
        image: `${HOST_NAME}/public/pizza-10.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Fromaggi',
        description: 'Tomate mutti, mozzarella, scarmoza fume , gorgonzola , roquette',
        price: 14,
        image: `${HOST_NAME}/public/pizza-11.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Salmone 🌊',
        description: 'Crème fraiche, Mozzarella, Saumon fumé, Citron ,Ciboulette',
        price: 14.90,
        image: `${HOST_NAME}/public/pizza-12.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Parma 🥓',
        description: 'Tomate Mutti, Mozzarella, Jambon de Parme, Tomate cerises, roquette et Parmesan',
        price: 15,
        image: `${HOST_NAME}/public/pizza-13.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Bresaola 🍖',
        description: 'Tomate Mutti , Mozzarella, Bresaola, Roquette , Parmesan , Tomates cerises.',
        price: 16,
        image: `${HOST_NAME}/public/pizza-14.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Alla Bufala ❤',
        description: 'Tomate Mutti, Mozzarella, Tomates cerises, Bufala campana ( 125grammes) , Roquette.',
        price: 16,
        image: `${HOST_NAME}/public/pizza-15.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Capricciosa',
        description: 'Sauce Tomate Mutti, Mozzarela , proscuito cuit , Champignon frais , Artichaut et Huile d’olive .',
        price: 16,
        image: `${HOST_NAME}/public/pizza-16.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Tartufata 🖤',
        description: 'Crème de truffes noires, Mozzarela , Champignons de Paris.',
        price: 17,
        image: `${HOST_NAME}/public/pizza-17.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza Margherita alla Buffala',
        description: 'Sauce tomate Mutti , Basilic frais , Mozzarella di Bufalla',
        price: 12,
        image: `${HOST_NAME}/public/pizza-18.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Pizza blanca',
        description: 'crème fraîche de Normandie , Mozzarella , champignon frais Roquette , parmesan',
        price: 13,
        image: `${HOST_NAME}/public/pizza-19.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffb'
      },
      {
        name: 'Cookie au Chocolat 🍪🍪',
        price: 3,
        image: `${HOST_NAME}/public/dessert-1.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffd'
      },
      {
        name: 'Donuts Chocolat',
        price: 3,
        image: `${HOST_NAME}/public/dessert-2.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffd'
      },
      {
        name: 'Tarte au citron',
        price: 3.90,
        image: `${HOST_NAME}/public/dessert-3.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffd'
      },
      {
        name: 'Tiramisu Maison 🍰🧁',
        price: 4.50,
        image: `${HOST_NAME}/public/dessert-4.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffd'
      },
      {
        name: 'Coeur coulant chocolat',
        price: 4.50,
        image: `${HOST_NAME}/public/dessert-5.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffd'
      },
      {
        name: 'Brownie',
        price: 2.90,
        image: `${HOST_NAME}/public/dessert-6.jpeg`,
        categoryId: '5f91eeb0e870ed6693daaffd'
      }
    ]
  }
]