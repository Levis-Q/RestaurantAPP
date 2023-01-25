import { Food } from "./app/shared/models/Food"
import { Tag } from "./app/shared/models/tag"

export const sample_foods:Food[] = [ 
{
id: 1,
name: 'Pizza Pepperoni',
cookTime: '10-20',
price: 10,
favorite: false,
origins: ['italy'],
stars: 4.5,
imageUrl: '/assets/images/foods/food-1.jpg',
tags: ['FastFood', 'Pizza', 'Lunch'],
},
{
id: 2,
name: 'Tikka Pizza',
cookTime: '20-30',
price: 20,
favorite: true,
origins: ['persia', 'middle east', 'china'],
stars: 4.7,
imageUrl: '/assets/images/foods/food-2.jpg',
tags: ['FastFood', 'Pizza', 'Lunch'],
},
{
id: 3,
name: 'Sunday Dish',
cookTime: '20-30',
price: 20,
favorite: true,
origins: ['germany', 'us'],
stars: 4.7,
imageUrl: '/assets/images/foods/food-3.jpg',
tags: ['Lunch',  'SlowFood'],
},
{
id: 4,
name: 'Sphagetti Noodles',
cookTime: '20-30',
price: 20,
favorite: true,
origins: ['belgium', 'france'],
stars: 4.7,
imageUrl: '/assets/images/foods/food-4.jpg',
tags: ['FastFood', 'Soup'],
},
{
id: 5,
name: 'Salads',
cookTime: '10-15',
price: 20,
favorite: true,
origins: ['india', 'asia'],
stars: 4.7,
imageUrl: '/assets/images/foods/food-7.jpg',
tags: ['FastFood', 'Lunch', 'Hamburger'],
},
{
id: 6,
name: 'Roasted Chicken',
cookTime: '20-30',
price: 20,
favorite: true,
origins: ['south africa'],
stars: 4.7,
imageUrl: '/assets/images/foods/food-6.jpg',
tags: ['Fry', 'Lunch'],
}

/*  '/assets/images/foods/food-7.jpg',
'/assets/images/foods/food-9.jpg',
'/assets/images/foods/food-10.jpg',
'/assets/images/foods/food-11.jpg',
'/assets/images/foods/food-12.jpg',
'/assets/images/foods/food-13.jpg',
'/assets/images/foods/food-14.jpg',
'/assets/images/foods/food-15.jpg',
'/assets/images/foods/food-16.jpg',
'/assets/images/foods/food-17.jpg',
'/assets/images/foods/food-18.jpg',
'/assets/images/foods/food-19.jpg',
'/assets/images/foods/food-20.jpg' */
]



export const sample_tags:Tag[] = [
    {name: 'All', count: 6 },
    {name: 'FastFood', count: 4 },
    {name: 'Pizza', count: 2 },
    {name: 'Lunch', count: 3 },
    {name: 'SlowFood', count: 2 },
    {name: 'Hamburger', count: 1 },
    {name: 'Fry', count: 1 },
    {name: 'Soup', count: 1 },
  ]