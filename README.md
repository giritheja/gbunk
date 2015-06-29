# gBunk
gBunk is a ionic app.It is bunkometer with geolocation capabilities.The app register the number of bunks a user has made for a class depending on geolocation of the user's mobile at the time of the class.It will also have functionality to give the user a notification about the class if the user's attendance for a particular class falls below a particular threshold.

## Working
Each semester a user has to enter his/her time table into the app and set the position of his/her classroom in the app and then the app will take care of the user's attendance for the rest of the semster.
The app will check for user's geolocation during a particular class according to the timetable.If the user is present within a bounded radius of class the user will be marked present else the user will be marked absent.
The app will maintain the number of bunks user has made by the above method and warn the user if his/her attandance falls below a certain thershold set by the user.

## Installation
To run this app you need to install [ionic](http://ionicframework.com/getting-started/)

After installing ionic to run the app on desktop `ionic serve`

To run the app on android device `ionic run --android`
