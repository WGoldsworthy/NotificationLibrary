# NotificationLibrary

Simple basic front-end notification library.

To install move files into your directory and add script to html file.

```
  	<script src="<PATH_TO_FILE>/notificationLibrary.js"></script>
```

To call a notification:

```
new Notification({message: "This is a notification", color: "success", icon:"done"});
```

Notifications take 3 parameters:
  - Message: String
  - color: Hexadecimal/RGB/["success"/"warning"/"error"]
  - icon: Any icon code from Material.io (https://material.io/tools/icons/?style=baseline)
  
