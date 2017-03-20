# Christmas Tree Watering System - Pi Controller
This is the GPIO control on the rasperry pi using the pi-pins module from npm

Here we trigger pin 22 on/off with a request to `/on`.

We use Resin.io to deploy the system.


All you need to do is :

* clone this repo locally  and cd into the folder.
* connect up the pi as shown in the diagram 
* add the resin remote repo with `git remote add resin git@git.resin.io:myGithubName/myResinAppName.git` , with the correct github and app name, or just copy if from the top right hand corner of your device dashboard on resin.io.
* now just `git push resin master` wait a minute or so for the code to upload and start.

![System Diagram](/docs/images/xmas_iot_architecture.jpg)
