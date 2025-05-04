const products = [
  {
    id: 1,
    name: 'Red Dress',
    price: 2499,
    offerPrice: 1999,
    image: {
      black: require('../assets/images/product1.png'),
      gray: require('../assets/images/product2.jpg'),
      white: require('../assets/images/product3.jpg'),
    },
    colors: ['black', 'gray', 'white'],
    description: 'A stunning red dress, available in multiple colors, perfect for any occasion.',
    productLink: '/product/1', // Added product link
  },
  {
    id: 2,
    name: 'Blue Shirt',
    price: 1499,
    offerPrice: 1199,
    image: {
      black: require('../assets/images/product1.png'),
      gray: require('../assets/images/product2.jpg'),
      white: require('../assets/images/product3.jpg'),
    },
    colors: ['black', 'gray', 'white'],
    description: 'A sleek blue shirt, designed for both casual and formal wear.',
    productLink: '/product/2', // Added product link
  },
  {
    id: 3,
    name: 'Black Shoes',
    price: 3999,
    offerPrice: 2999,
    image: {
      black: require('../assets/images/product1.png'),
      gray: require('../assets/images/product2.jpg'),
      white: require('../assets/images/product3.jpg'),
    },
    colors: ['black', 'gray', 'white'],
    description: 'High-quality shoes, combining comfort and style in every step.',
    productLink: '/product/3', // Added product link
  },
  {
    id: 4,
    name: 'Green T-Shirt',
    price: 799,
    offerPrice: 599,
    image: {
      black: require('../assets/images/product1.png'),
      gray: require('../assets/images/product2.jpg'),
      white: require('../assets/images/product3.jpg'),
    },
    colors: ['black', 'gray', 'white'],
    description: 'A casual t-shirt made from breathable fabric, perfect for everyday use.',
    productLink: '/product/4', // Added product link
  },
  {
    id: 5,
    name: 'Brown Leather Jacket',
    price: 4999,
    offerPrice: 3999,
    image: {
      black: require('../assets/images/product1.png'),
      gray: require('../assets/images/product2.jpg'),
      white: require('../assets/images/product3.jpg'),
    },
    colors: ['black', 'gray', 'white'],
    description: 'A trendy leather jacket, crafted from durable materials for a bold look.',
    productLink: '/product/5', // Added product link
  },
  {
    id: 6,
    name: 'White Sneakers',
    price: 2999,
    offerPrice: 2499,
    image: {
      black: require('../assets/images/product1.png'),
      gray: require('../assets/images/product2.jpg'),
      white: require('../assets/images/product3.jpg'),
    },
    colors: ['black', 'gray', 'white'],
    description: 'Lightweight sneakers, perfect for sports, casual outings, or daily wear.',
    productLink: '/product/6', // Added product link
  },
  {
    id: 7,
    name: 'Blue Denim Jeans',
    price: 1999,
    offerPrice: 1599,
    image: {
      black: require('../assets/images/product1.png'),
      gray: require('../assets/images/product2.jpg'),
      white: require('../assets/images/product3.jpg'),
    },
    colors: ['black', 'gray', 'white'],
    description: 'Premium denim jeans with a slim fit, designed for style and comfort.',
    productLink: '/product/7', // Added product link
  },
  {
    id: 8,
    name: 'Red Hoodie',
    price: 2499,
    offerPrice: 1999,
    image: {
      black: require('../assets/images/product1.png'),
      gray: require('../assets/images/product2.jpg'),
      white: require('../assets/images/product3.jpg'),
    },
    colors: ['black', 'gray', 'white'],
    description: 'A cozy hoodie that keeps you warm while maintaining a stylish look.',
    productLink: '/product/8', // Added product link
  },
  {
    id: 9,
    name: 'Black Formal Pants',
    price: 1799,
    offerPrice: 1499,
    image: {
      black: require('../assets/images/product1.png'),
      gray: require('../assets/images/product2.jpg'),
      white: require('../assets/images/product3.jpg'),
    },
    colors: ['black', 'gray', 'white'],
    description: 'Classic formal pants, tailored for a perfect fit, ideal for office wear.',
    productLink: '/product/9', // Added product link
  },
];

export default products;
