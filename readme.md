#Helles
Some kind of [laravel](http://www.laravel.com) bootstrap with a pre built manager with a nice interface and some pre configured stuff. 

I'll assume that you already know what is laravel, how it works and why works this way.

The basic bootstrap use a lot of packages to let you work on your project and stop worring about basic things. Helles uses a manager package called [helles-manager](https://github.com/3yz/helles-manager). 

Here is a list of all the tech stuff used to develop:

- [Laravel](http://www.laravel.com.br)
- [Twitter Bootstrap](http://getbootstrap.com/) (manager only)
- [SASS](http://getbootstrap.com/)
- [Compass](http://compass-style.org/)
- [jQuery](http://www.jquery.com)
- [GulpJS](http://gulpjs.com/)

##Install
1. First of all you must clone the project repo: `git clone https://github.com/3yz/helles.git project_name`
2. Go to the project folder and execute: `composer install` 
3. Next, config the database in `app/config/database.php`
4. **This is an optional step, just use if you'll use Helles with apache**. Update the lines 557 and 558 of the .htaccess to your relative server path 
5. Execute the following command: 
   - `./artisan admin:install`
This will install all the required resources do the system. You can use the option **--add-user** to send you straight to the add user CLI.
6. Optionally you can install de javascript dependencies (if needed) runnning `npm install`.

###Create a user
In the terminal, run the following command:
`./artisan admin:add-user`

Fill the values and in the group use the default, **admin**

##Development

First of all, you need to run two commands in the terminal to begin the development:

- `gulp` so the grunt can be run and compile all the things
- `php artisan serve` to serve the project

Note that the grunt command only will be necessary if you'll develop something in the frontend, once the backend already have a interface. 

Now just access http://localhost:8000 for the frontend and http://localhost:8000/admin for the backend, and be happy :D