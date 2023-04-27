const product = [
	{ 
		id : 5,
		image : 'tennis.jpg',
		title: 'Tennis',
		price: "R150",
	},
	{
	   id: 1,
		image:'boots.webp',
		title: 'Winter boots',
		price: "R200",
	},
	
	{
	   id: 2,
		image:'over.webp',
		title: 'Oversized T-shirt',
		price:" R150",
	},
	
	
	{
	   id: 3,
		image:'puffer.jpg',
		title: 'Puffer jackects',
		price: "R300",
	},
	
	
	{
	   id: 4,
		image:'crop.webp',
		title: 'Croptop',
		price: "R50",
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
<h2>R ${price}.00</h2>`+
		"<button onclick='addtocart("+(i++)+")'> Add to cart</button>"+
		`</div>
</div>`
		);
}).join('')
var cart = [];

function addtocart(a){
	cart.push({...categories[a]});
	displaycart();
}
function delElement(a){
	cart.splice(a,1);
	displaycart();
}
function displaycart(a){ 
	let j = 0; total = 0;
	
	document.getElementById ("count").innerHTML = "0";
	
	if(cart.length==0){
		document.getElementById('cartItem').innerHTML = "Your cart is empty";
		document.getElementById("total").innerHTML = "R"+0+". 00";
	}
	else {
		document.getElementById("cartItem").innerHTML = cart.map((items)=>
																					{ 
			                                                       var {image, title, price} = item;
																					 total = total + price;
																					 document.getElementById("total").innerHTML = " "+total+".00";
																					 return(
																						 `<div class = 'cart-item'>
																						 <div class = 'row-img'>
                                                                   <img class = 'rowing' src = ${image}>
                                                                    </div>
                                                              <p style = 'font-size:12px;'>R{title}</p>
                                                             <h2 style = 'font-size: 15px;'>R R{price}.00</h2>`+
																			"<i class = 'fa-solid fa-trash' onclick= 'delElement("+(j++) +")'></i></div>"
																						 );
																					}).join('');
	}
}




















	
	