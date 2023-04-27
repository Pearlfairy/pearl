const product = [
	{ 
		id : 5,
		image : 'watch.jpg',
		title: 'Men`s watch',
		price: "R150",
	},
	{
	   id: 1,
		image:'belt.jpeg',
		title: 'Hairbelt',
		price: "R20",
	},
	
	{
	   id: 2,
		image:'glass.jpg',
		title: 'Sunglass',
		price:" R100",
	},
	
	
	{
	   id: 3,
		image:'pins.jpg',
		title: '10 pcs Hair pins',
		price: "R50",
	},
	
	
	{
	   id: 4,
		image:'ear.webp',
		title: 'Earrings',
		price: "R20",
	}
	
];

const categories = [...new Set(product.map((item)=>
														 {return item}))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item)=>
																			  { 
	var{image, title, price} = item;
	return( 
		`<div class = 'box'>
<div class = 'img-box'>
<img class = 'images' src= ${image}></img>
</div>
<div class = 'bottom'>
<p>${title}</p>
<h2>$ ${price}.00</h2>`+
		"<button onclick='addtocart("+(i++)+")'> Add to cart</button>"+
		`</div>
</div>`
		)
}).join('')
var cart = [];

function addtocart(a){
	cart.push({...categories[a]});
	displaycart();
}
function displaycart(a){ 
	let j = 0;
	if(cart.length==0){
		document.getElementById('cartItem').innerHTML = "Your cart is empty";
	}
	else {
		document.getElementById("cartItem").innerHTML = cart.map((items)=>
																					{ var {image, title, price} = item;
																					 return(
																						 `<div class = 'cart-item'>
																						 <div class = 'row-img'>
<img class = 'rowing' src = ${image}>
</div>
<p style = 'font-size:12px;'>${title}</p>
<h2 style = 'font-size: 15px;'>$ ${price}.00</h2>`+
																						 "<i class = 'fa-solid fa-trash' onclinc = 'delElement("+(j++) +")'></i></div>)"
																						 );
																					}).join('');
	}
}




















	
	