const createNav = () => {
	let nav = document.querySelector('.navbar');
	nav.innerHTML = `
			<div class = "nav">
				<img src = "fashion.jpg" class = "brand-logo" alt = "error">
				<div class = "nav-items">
					<div class = "search">
						<input type = "text" class = "search-box" placeholder= "search brand,product">
						<button class = "search-btn">Search</button>
					</div>
					<a href="#"><img src = "profile.png" alt = "error"></a>
					<a href = "#"><img src = "cart.jpg" alt ="error"></a>
				</div>
			</div>
		<ul class = "container">
			<li class = "link-item"><a href = "#" class = "link">Home</a></li>
			<li class = "link-item"><a href = "#" class = "link">Women</a></li>
			<li class = "link-item"><a href = "#" class = "link">Men</a></li>
			<li class = "link-item"><a href = "#" class = "link">Kids</a></li>
			<li class = "link-item"><a href = "#" class = "link">accesories</a></li>
			<li class = "link-item"><a href = "#" class = "link">sweamwears</a></li>
			<li class = "link-item"><a href = "#" class = "link">contact</a></li>
		</ul>
		`;
}

createNav();

var icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("dark-mode")
 if(document.body.classList.contains("dark-mode")){
        icon.src = "sun.png"
    }else{
        icon.src= "moon.png"
	 }
}
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}