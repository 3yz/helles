#Helles
Some kind of [laravel](http://www.laravel.com) bootstrap with a pre built manager with a nice interface and some pre configured stuff. 

I'll assume that you already know what is laravel, how it works and why works this way.

The basic bootstrap use a lot of packages to let you work on your project and stop worring about basic things. Bierre uses a manager package called [helles-manager](https://github.com/3yz/helles-manager). 

##Install
1. First of all you must clone the project repo: `git clone https://github.com/3yz/helles.git project_name`
2. Go to the project folder and execute: `./artisan dump-autoload` 
3. Next, config the database in `app/config/database.php`
4. Uncomment the line 113 in app/config/app.php
5. Update the .htaccess to your relative server path 
6. Execute the following commands: 
   - `./artisan migrate:install`
   - `./artisan migrate --package=cartalyst/sentry`
   - `./artisan asset:publish tresyz/helles-manager`
   - `./artisan debugbar:publish`
   
Now you are ready to rock. Point your browser to http://path/to/project/admin and you be welcomed by the login screen.
There will be a admin user already loaded to the database, use admin@admin.com and a1b2c3d4 to login.