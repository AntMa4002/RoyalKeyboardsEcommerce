# RoyalKeyboardsEcommerce

## Abstract
An Ecommerce website that utilizes the MERN Stack

### Technologies Used
TypeScript, MongoDB, Twingate, AWS(EC2), Express, React, Ts-node, Bcrypt, Jsonwebtoken, HTML, CSS, Bootstrap

### Authentication page
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Authentication%20Page.png" width="80%"></p>

### Main Shop Page
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Shop%20Page1.PNG" width="80%"></p>
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Shop%20Page2.PNG" width="80%"></p>

### Filtered Shop Page
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Shop%20Page%20Filtered.PNG" width="80%"></p>

### Checkout Page
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Checkout%20Page1.PNG" width="80%"></p>
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Checkout%20Page2.PNG" width="80%"></p>

### Purchased Page
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Purchased%20Items%20Page.PNG" width="80%"></p>

## Preparation
This project utilizes MongoDB to store users and products in their own respective collections within the database. To operate this database remotely, Twingate is used to host a remote network that utilizes a AWS EC2 instance as it's provider. It is entirely possible to operate this website without the use of Twingate as you may choose to use the IP address of your computer instead and both options are equally viable.

**With Twingate**
1. Create a Twingate remote network
2. Launch an AWS EC2 instance
3. Connect the remote network to the EC2 instance using a SSH client
4. Download the client for Twingate
5. Add the IP address of the remote network to the MongoDB Network Access
6. Add the MongoDB database as a resource to the remote network

**Without Twingate**
1. Save your current IP address to the MongoDB network access

There are several ways to access the database but in this project we use a connection string. You can also create your own .env file to store the connection string or you may choose to use the string directly.

**Product Collection**
For the product page, you may choose to add your own products to the database but if you wish to use the same products used in this project, the text file named "ProductDocuments.txt" contains all the documents in an array so you can easily insert it into the database.

## Configuration

1. Clone repository to your local machine

       $ git clone https://github.com/AntMa4002/RoyalKeyboardsEcommerce
       
2. Change into the directory

       $ cd RoyalKeyboardsEcommerce/server
   
3. Run the following command to start the server

       $ npm run dev
       
4. A popup should appear if you have the Twingate client installed and will ask you to authenticate by logging in

5. Open a new terminal and change the directory

        $ cd RoyalKeyboardsEcommerce/client/react-app
       
6. Make sure that vite is updated to the latest version by running

       $ npm install
   
7. Run the following command to start the website

       $ npm run dev

8. You may now go to http://localhost:5173 and enjoy the website!
