
# IP Management Project
 A Web-based IP Address management solution to allow us to record an IP Address and comment on it assignment.

## Technology Used
 PHP Laravel Framework, MySQL and Angular Framework

# Instruction
1. Clone this repository
2. Install backend - laravel dependencies
```
cd ip_mgmt_back
composer install
```
3. Install frontent - angular dependencies
```
cd ip_mgmt_front
npm install
npm install -g @angular/cli
```
4. Create an `.env` file and configure your database access
5. Migrate and configure laravel/passport
```
cd ip_mgmt_back
php artisan migrate
php artisan passport:install
php artisan key:generate
```
6. Configure laravel/passport on Angular
```
Get the password grant client token generated by the above command (php artisan passport:install) and update the file
ip_mgmt_front/src/app/services/auth.service.ts by editing the login() method
Line 25-27
      grant_type: 'password',
      client_id: '2',
      client_secret: 'client token here',
```
7. Add sample user
```
cd ip_mgmt_back
php artisan db:seed
```
This command will add a sample user with the following information to your database:
- Name: **Test User**
- Email: **testuser@test.com**
- Password: **test1234**
8. Run application
Run laravel application, by executing the following command:
```
cd ip_mgmt_back
php artisan serve
```
Run angular application, by executing the following command:
```
cd ip_mgmt_front
ng serve
Visit: localhost:4200
Email Address: testuser@test.com
Password: test1234
```
