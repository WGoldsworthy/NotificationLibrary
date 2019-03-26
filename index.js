

document.getElementById('button').addEventListener('click', function(e) {
 	new Notification({message: "Added to Basket!", color: '#66A57A', icon: "shopping_cart"});
});



document.getElementById('button2').addEventListener('click', function(e) {
 	new Notification({message: "You can't do that!", color: '#D03A3A', icon: "feedback"});
});


document.getElementById('button3').addEventListener('click', function(e) {
 	new Notification({message: "Are you sure?", color: 'warning', icon: "help"});
});
