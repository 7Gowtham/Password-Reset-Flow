# Password Reset Flow

## Contents
- [Description](#description)
- [UserFlow](#userflow)
- [Functionalities Used](#functionalities-used)
- [API Endpoints](#api-endpoints)

### Description
This project demonstrates how to implement a correct password reset flow with email verification and proper update of the new password in the database for the web app.

### UserFlow
1. Create a user: Users can register, and their details are stored in the database.
2. The project includes a login page with a username and password field, along with a "Forgot Password" link. Upon successful login, a success message will be displayed.
3. If the "Forgot Password" link is clicked, the user is redirected to a page where they can enter their email address. After entering the email, they are redirected to a password reset page via a secure link.
4. On the password reset page, the user can change their password. After updating, they will be redirected back to the login page, where they can log in with the new password and see a success message.

### Functionalities Used
1. Utilized `react - bootstrap` to design the UI in a responsive way.
2. Utilized `bcryptjs` for hashing and comparing the password.
3. Utilized `jsonwebtoken` to create and decode token.
4. Utilized `cors` to connect frontend and backend connectivity.
5. Utilized `dotenv` to secure the environment variables.
6. Utilized `nodemailer` a module for Node.js that allows to send emails from the server.

### API Endpoints
#### FrontEnd URL:
1. https://passwd-reset7.netlify.app/user/login

#### BackEnd URLs:
1. https://password-reset-flow-1y0d.onrender.com/user/create
2. https://password-reset-flow-1y0d.onrender.com/user/login
3. https://password-reset-flow-1y0d.onrender.com/user/forgot-password
4. https://password-reset-flow-1y0d.onrender.com/user/reset-password/:token
