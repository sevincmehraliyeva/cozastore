const form = document.getElementById('forma')
const exampleInputEmail1 = document.getElementById('exampleInputEmail1')
const exampleInputPassword1 =document.getElementById('exampleInputPassword1')

function axiosPost(e) {
    e.preventDefault();
    
    axios.post("https://655c30f2ab37729791aa0509.mockapi.io/products", {
        name: exampleInputEmail1.value,
        surname: exampleInputPassword1.value
    }).then(res => {
        console.log(res.data);
        form.reset()
    })

}
form.addEventListener('submit', axiosPost)