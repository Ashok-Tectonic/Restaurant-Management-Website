# Restaurant-Management-Website
A full-stack Restaurant Management Website built using HTML, CSS, JavaScript, Node.js, and MySQL. It allows users to browse menus, book tables, and order food online, while the backend securely handles bookings and orders. Designed for smooth interaction and efficient restaurant operations.
<img width="1913" height="771" alt="Screenshot 2025-11-10 121846" src="https://github.com/user-attachments/assets/69441e79-4aba-4998-a422-20f9e838c193" />
<img width="1899" height="853" alt="Screenshot 2025-11-10 121913" src="https://github.com/user-attachments/assets/72171e20-6ff5-48a0-a7cd-74cf1364ef28" />
<img width="1844" height="801" alt="Screenshot 2025-11-10 121933" src="https://github.com/user-attachments/assets/46ea47cb-3b3e-485f-b776-c88bcebfc102" />
<img width="1821" height="848" alt="Screenshot 2025-11-10 121950" src="https://github.com/user-attachments/assets/23eb3c6b-f506-4686-aceb-3bf72da33805" />



🍛 Restaurant Management Website – Biryani Delight
📖 Overview

Biryani Delight is a full-stack Restaurant Management Website that simplifies restaurant operations with online ordering, table booking, and menu browsing. Customers can interact through an intuitive frontend, while the backend securely handles bookings and orders using Node.js and MySQL.

This project demonstrates seamless frontend–backend–database integration, providing a responsive and engaging user experience.

🚀 Features

🏠 Elegant homepage with smooth navigation

🍽️ Interactive food menu with images and details

📅 Online table booking form with instant confirmation

🛒 Online food ordering system with live acknowledgment

💾 MySQL-backed data storage for bookings and orders

📱 Responsive design compatible with all devices

⚙️ API-based architecture using Express.js

🛠️ Technologies Used
Frontend : HTML5

CSS3 : JavaScript (ES6)

Backend : Node.js (v18.x or later) , Express.js (v4.x)

Database : MySQL (v8.x)

Other Tools : Visual Studio Code , Postman (for API testing)

Git & GitHub : npm (Node Package Manager)

⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/Ashok-Tectonic/Restaurant-Management-Website.git
cd Restaurant-Management-Website


Install dependencies:

npm install


Set up the MySQL database:

Create a database named db.

Run the following SQL commands:

CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  number_of_people INT NOT NULL
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  item VARCHAR(255) NOT NULL,
  quantity INT NOT NULL
);


Start the server:

node server.js


The server will run at http://localhost:3000

Open index.html in your browser to view the website.

📊 Database Structure

Table 1: bookings

Field	Type	Description
id	INT (Primary Key)	Auto-increment booking ID
name	VARCHAR(255)	Customer name
date	DATE	Booking date
time	TIME	Booking time
number_of_people	INT	Number of guests

Table 2: orders

Field	Type	Description
id	INT (Primary Key)	Auto-increment order ID
customer_name	VARCHAR(255)	Name of the customer
item	VARCHAR(255)	Ordered item
quantity	INT	Quantity ordered


🌐 API Endpoints
Method	Endpoint	Description
POST	/api/book	Create a new table booking
POST	/api/order	Place a new food order


💡 Future Enhancements

🔐 Admin panel for menu, orders, and booking management

💳 Payment gateway integration

👤 User login and authentication system

🚚 Real-time order tracking and status updates

👨‍💻 Author

Ashok Kumar Vijay V
📧 ashokkumarvijayv@gmail.com

📍 Chennai, India
🔗 GitHub: Ashok-Tectonic
