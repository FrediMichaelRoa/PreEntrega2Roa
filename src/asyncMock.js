const products = [
    { 
        id: '1', 
        name: 'Iphone 12', 
        price: 1000, 
        category: 'Phone', 
        outstanding:'N',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_783007-MLA74862366574_032024-F.webp', 
        stock: 10, 
        description:'The iPhone 12 innovation and style in an iconic design. With a powerful camera and exceptional performance, it redefines the mobile experience for technology lovers.'},
    
    { 
        id: '2',
        name: 'Samsung s23', 
        price: 5000, 
        category: 'Phone', 
        outstanding:'N',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_968012-MLU74033800854_012024-F.webp', 
        stock: 16, 
        description:'The Samsung Galaxy S23 power and style in a sleek design. With a brilliant display and advanced camera, it redefines the mobile experience for tech lovers.'},
    { 
        id: '3', 
        name: 'Apple iPad Pro de 12.9', 
        price: 4200, 
        category: 'Tablet', 
        outstanding:'FeaturedProducts',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_818249-MLA54272085267_032023-F.webp', 
        stock: 5, 
        description:'The 12.9-inch iPad Pro (5th generation): Power and versatility in a stunning display. With exceptional performance and advanced features, it redefines the tablet experience.'},
        {
        id: '4', 
        name: 'Iphone 15 Pro', 
        price: 5200, 
        category: 'Phone', 
        outstanding:'FeaturedProducts',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_891263-MLA71783089058_092023-F.webp', 
        stock: 5, 
        description:'The iPhone 15 Pro boasts cutting-edge technology, stunning design, and exceptional performance, redefining the mobile experience for enthusiasts worldwide.'},
]


export const getProductsByOutstanding= (outstandingId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.outstanding === outstandingId));
        }, 500);
    });
};

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
};

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId));
        }, 500);
    });
};