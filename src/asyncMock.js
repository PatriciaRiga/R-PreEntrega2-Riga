const products = [
    {
        id: '1',
        name: 'Billetera de bolsillo',
        price: 3500,
        category: 'Billeteras',
        img: '../src/Media/billetera.jpg',
        stock: 25,
        description: 'Billetera de bolsillo cosida de 8 cm x 11cm. Incluye división para billetes y 2 tarjeteros con 4 divisiones c/u. Con o sin grabado.'
    },
    { id: '2', name: 'Billetera grande', price: 4000, category: 'Billeteras', img: '../src/Media/billetera-grande.jpg', stock: 15, description: 'Billetera grande cosida de 10 cm x 15cm. Incluye división para billetes y 2 tarjeteros con 3 divisiones c/u. Con o sin grabado.' },
    { id: '3', name: 'Pulsera', price: 2000, category: 'Accesorios', img: '../src/Media/pulsera.jpg', stock: 100, description: 'Pulsera de diseño propio con detalles en metal' },
    { id: '4', name: 'Cinturón', price: 2500, category: 'Accesorios', img: '../src/Media/cinturones.jpeg', stock: 100, description: 'Cinturón con remaches, hebilla y hojales metálicos. Largo y ancho variable.' },
    { id: '5', name: 'Collar', price: 1000, category: 'Accesorios', img: '../src/Media/collar.jpg', stock: 300, description: 'Collar de diseño propio con detalles en metal y dijes reciclados.' },
    { id: '6', name: 'Organizador', price: 2000, category: 'Para el hogar', img: '../src/Media/organizador.jpg', stock: 40, description: 'Organizador con remaches. Medidas: 21 cm, 18 cm, 15 cm de lado.' },
    { id: '7', name: 'Mascotera', price: 4000, category: 'Para el hogar', img: '../src/Media/mascotera.jpg', stock: 10, description: 'Mascotera de 55 cm a 62 cm de diámetro. Incluye colchón con funda desmontable.' },
    { id: '8', name: 'Posavaso', price: 350, category: 'Para el hogar', img: '../src/Media/posavasos.jpeg', stock: 30, description: 'Posavaso cuadrado 12 cm de lado. Circular de 12 cm de diámetro.' },
    { id: '9', name: 'Bolso', price: 5000, category: 'Urbanos', img: '../src/Media/bolso.jpg', stock: 5, description: 'Bolso de 40 cm x 20 cm con correa de tela y remaches en metal.' },
    { id: '10', name: 'Mochila', price: 4000, category: 'Urbanos', img: '../src/Media/mochila.jpg', stock: 5, description: 'Mochila de 40 cm x 40 cm con cierre y gancho en metal.' },
    { id: '11', name: 'Riñonera', price: 3000, category: 'Urbanos', img: '../src/Media/riñonera.jpg', stock: 10, description: 'Riñonera de 10 cm x 20 cm con cierre y correa regulable.' },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 250)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 250)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 250)
    })
}