const products = [
    { 
        id: '1', 
        name: 'Iphone 12', 
        price: 1000, 
        category: 'Phone', 
        outstanding:'Featured Products',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_783007-MLA74862366574_032024-F.webp', 
        stock: 4, 
        description:'The iPhone 12 innovation and style in an iconic design. With a powerful camera and exceptional performance, it redefines the mobile experience for technology lovers.'},
    
    { 
        id: '2',
        name: 'Samsung s23', 
        price: 5000, 
        category: 'Phone', 
        outstanding:'Featured Products',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_968012-MLU74033800854_012024-F.webp', 
        stock: 16, 
        description:'The Samsung Galaxy S23 power and style in a sleek design. With a brilliant display and advanced camera, it redefines the mobile experience for tech lovers.'},
    { 
        id: '3', 
        name: 'Apple iPad Pro de 12.9', 
        price: 4200, 
        category: 'Tablet', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_818249-MLA54272085267_032023-F.webp', 
        stock: 2, 
        description:'The 12.9-inch iPad Pro (5th generation): Power and versatility in a stunning display. With exceptional performance and advanced features, it redefines the tablet experience.'},
]


export const getProductsByOutstanding= (outstandingId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.outstanding === outstandingId));
        }, 1000);
    });
};

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 100);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 1000);
    });
};

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId));
        }, 100);
    });
};