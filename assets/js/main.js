const div = document.getElementById('products');
const btn = document.getElementById('btn');

let page = 1;
let limit = 3;

async function getProduct() {
    let skip = (page - 1) * limit;
    
        const response = await axios.get(`https://655c30f2ab37729791aa0509.mockapi.io/basket?page=${page}&limit=${limit}&skip=${skip}`);
        const data = response.data;
         db = data; 
        console.log(db);
        
        db.map(item => {
            const box = document.createElement('div');
            box.className = 'boxDiv col-xl-4 col-lg-4 col-md-12 col-sd-12 col-12';
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <p class='title'>${item.title}</p>
                <button onclick="addToBasket(${item.id})">Add to basket</button>
            `;
            div.appendChild(box);
        });

        page++;
   
}

btn.addEventListener('click', getProduct);

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(db.find(item => item.id == id));
    localStorage.setItem('cart', JSON.stringify(cart));
}

getProduct();
