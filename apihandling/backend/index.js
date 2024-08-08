import express from "express";

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1, 
            name: 'table wooden',
            price: 300,
            image: 'https://images.pexels.com/photos/25381426/pexels-photo-25381426/free-photo-of-lamp-above-a-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 2,
            name: 'table glass',
            price: 200,
            image: 'https://images.pexels.com/photos/25291886/pexels-photo-25291886/free-photo-of-coca-cola-with-ice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 3,
            name: 'table plastic',
            price: 400,
            image: 'https://images.pexels.com/photos/1319572/pexels-photo-1319572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

        },
        {
            id: 4,
            name: 'table metal',
            price: 350,
            image: 'https://images.pexels.com/photos/4947396/pexels-photo-4947396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 5,
            name: 'table polyester',
            price: 600,
            image: 'https://images.pexels.com/photos/25294262/pexels-photo-25294262/free-photo-of-view-of-glassware-and-flower-arrangements-on-the-table-in-a-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
    ]

    if (req.query.search) {
    const filterProducts = products.filter(product => product.name.includes(req.query.search))
    res.send(filterProducts);
    return;
    }

    setTimeout(() => {
        res.send(products)
    }, 3000)

})


const port = process.env.PORT || 3000;

app.listen(port, ()=> {
console.log(`server is running on port ${port}`);
});