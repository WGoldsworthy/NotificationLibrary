// Notification Library

/*
	Possible options for notification.
	Message - String.
	Color - Color or background thumb
	Icon - Which material icon to put in
	confirm options? - Add yes/no options
*/

var cssId = './notification.css';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = './notification.css';
    link.media = 'all';
    head.appendChild(link);
}

var possibleOptions = [
	"message",
	"color",
	"icon",
	"confirmOptions"
]

Notification = function (options) {

	var parent = this;
	this.id = Math.random();
	this.options = options;
	this.message = "Added to Basket!";
	this.color = '#66A57A';
	this.icon = "shopping_cart";
	this.confirmOptions = false;
	this.template = '';

	handleOptions = function() {
		for (var key in options) {
			if (possibleOptions.includes(key)) {
				switch (key) {
					case "message": 
						this.message = options.message;
						break;
					case "color":
						this.color = options.color;
						break;
					case "icon":
						this.icon = options.icon;
						break;
					default:
						//Nothing
				}
			}
		}
		handleColor(this);
		buildHTML(this);
		sendNotification();
	}

	function handleColor(options) {
		switch (options.color) {
			case "success":
				this.color = '#66A57A';
				break;
			case "error":
				this.color = '#D03A3A';
				break;
			case "warning":
				this.color = '#f9993e';
				break;
			default:
				this.color = options.color;
		}
	}

	function sendNotification() {
		document.body.appendChild(this.template);
		document.getElementById('thumb').classList.add('hidden');
		document.getElementById('messageSec').classList.add('slideIn');
		  
		setTimeout(function() {
			document.getElementById('thumb').classList.remove('hidden');
			document.getElementById('messageSec').classList.remove('slideIn');
			var notification = document.getElementById('notification');
			document.body.removeChild(notification);
		}, 3000);
		return
	}

	function buildHTML(options) {
		var notificationNode = document.createElement('div');
		notificationNode.classList.add('notification');
		notificationNode.setAttribute('id', 'notification');
		var thumbNode = document.createElement('div')
		thumbNode.classList.add('thumb');
		thumbNode.setAttribute('id', 'thumb');
		thumbNode.setAttribute('style', 'background-color: ' + options.color + ';');
		var innerCircleNode = document.createElement('div');
		innerCircleNode.classList.add('innerCircle');
		thumbNode.appendChild(innerCircleNode);
		var iconNode = document.createElement('div');
		iconNode.classList.add('material-icons', 'icon');
		var iconTextNode = document.createTextNode(options.icon);
		iconNode.appendChild(iconTextNode);
		thumbNode.appendChild(iconNode);
		notificationNode.appendChild(thumbNode);

		var messageSectionNode = document.createElement('div');
		messageSectionNode.classList.add('messageSection');
		messageSectionNode.setAttribute('id', 'messageSec');
		var messageNode = document.createElement('div');
		messageNode.classList.add('message');
		var messageTextNode = document.createTextNode(options.message);
		messageNode.appendChild(messageTextNode);
		messageSectionNode.appendChild(messageNode)
		notificationNode.appendChild(messageSectionNode);

		this.template = notificationNode;
	}

	handleOptions();
}

exports.Notification = Notification();