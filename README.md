# advcctv

This is a simple, single-page advertisement website built with Flask (Python) for the backend and HTML, CSS, and JavaScript for the frontend. The project focuses on a minimalistic design with reusable components and API-driven content rendering. It serves as an advertisement webpage for Advanced Serveillance. It is built using the template [adtemp](https://github.com/BuddyJ101-git/adtemp.git), created by [Junaid](https://github.com/BuddyJ101).

## Features
- **Single Page Design**: A straightforward webpage with sections for About, Services, and Contact Us.
- **Flask Backend**:  Python-based backend with API endpoints for dynamic content delivery.
- **Reusable Components**: Custom card components for displaying content dynamically in the services section.
- **Contact Form**: A simple form for users to reach out.
- **API Integration**: JavaScript fetches data from Flask API endpoints to populate the page dynamically.

## Technologies Used
- **Backend**: Flask (Python 3.13)
- **Frontend**: HTML, CSS, JavaScript
- **Development Environment**: Visual Studio 2022

## Setup Instructions

### Prerequisites
- Python 3.13 installed
- Flask
  ```bash
  pip install flask
  ```
- Visual Studio 2022 (or any preferred IDE)
- Virtual Environment (recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/BuddyJ101-git/advcctv.git
   cd advcctv
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask application:
   ```bash
   python runserver.py
   ```

5. Open your browser and visit `http://127.0.0.1:5000/`.

## Project Structure
```
advcctv/
│-- static/
│   │-- css/
│   │   └── site.css
│   │-- js/
│   │   └── layout.js
│   │-- images/
│   │   └── .png
│   │-- data.json
│-- templates/
│   │-- index.html
│   │-- layout.html
│-- runserver.py
│-- requirements.txt
```

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/data` | GET | Fetches website data including colors, text, and content for different sections |
| `/api/email` | POST | Sends an email with the provided message from the contact form |

### API Endpoint Details

#### `GET /api/data`
**Description**: Returns website configuration data, including section colors, images, titles, and body text. This data is used by JavaScript to dynamically update the website's content.

**Response Example:**
```json
{
  "background": { "color": "#ffffff", "border": "#000000", "text": "#333333", "lineColor": "#ff0000" },
  "head": { "title": "My Website", "favicon": "favicon.ico" },
  "header": { "appTitle": "Welcome to My Site" },
  "home": { "title": "Home Section", "body": "Welcome message", "color": "#f0f0f0", "imgPath": "home.jpg" },
  "about": { "title": "About Us", "body": "Details about the site", "color": "#e0e0e0", "imgPath": "about.jpg" },
  "services": { "title": "Our Services", "body": "Service details", "color": "#d0d0d0", "imgPath": "services.jpg", "services": { "service1": { "title": "Web Development", "body": "We build websites", "img": "service1.jpg" } } },
  "contact": { "title": "Contact Us", "body": "Reach out to us", "color": "#c0c0c0", "imgPath": "contact.jpg" },
  "footer": { "outro": "Thank you for visiting!", "number1": "123-456-7890", "number2": "987-654-3210", "email": "info@example.com" },
  "maker": { "website": "https://example.com", "poweredBy": "My Company" }
}
```

#### `POST /api/email`
**Description**: Accepts a message from the contact form and sends it via email.

**Request Body Example:**
```json
{
  "msg": "Name: John Doe \nEmail: john@example.com \nMessage: \nHello, I have a question."
}
```

**Response Example:**
```json
{
  "status": "success", 
  "message": "Email received successfully"
}
```

## License
This project is private and is not available for public use, modification, or distribution without explicit permission from the owner.
