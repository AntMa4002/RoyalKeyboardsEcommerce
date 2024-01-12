# RoyalKeyboardsEcommerce

## Abstract
An Ecommerce website that utilizes the MERN Stack

### Technologies Used
TypeScript, MongoDB, Twingate, AWS(EC2), Express, React, Ts-node, Bcrypt, Jsonwebtoken, HTML, CSS, Bootstrap

### Authentication page
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Authentication%20Page.png" width="60%"></p>

### Main Shop Page
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Shop%20Page1.PNG" width="60%"></p>
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Shop%20Page2.PNG" width="60%"></p>

### Filtered Shop Page
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Shop%20Page%20Filtered.PNG" width="60%"></p>

### Checkout Page
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Checkout%20Page1.PNG" width="60%"></p>
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Checkout%20Page2.PNG" width="60%"></p>

### Purchased Page
<p align='center'><img src="https://github.com/AntMa4002/RoyalKeyboardsEcommerce/blob/main/demo/Purchased%20Items%20Page.PNG" width="60%"></p>

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

## Configuration
