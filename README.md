\# 🚀 Django React SaaS Application



> A full-stack multi-tenant SaaS application built with Django and React



![Python](https://img.shields.io/badge/python-v3.11+-blue.svg)
![Django](https://img.shields.io/badge/django-v5.0+-green.svg)
![React](https://img.shields.io/badge/react-v18.0+-blue.svg)
![PostgreSQL](https://img.shields.io/badge/postgresql-v13+-blue.svg)




\## ✨ Features



\- 🏢 \*\*Multi-tenant Architecture\*\* - Isolated data per client using Django-tenants

\- 🔐 \*\*JWT Authentication\*\* - Secure token-based authentication system

\- 🚀 \*\*REST API\*\* - Django REST Framework for seamless frontend-backend communication

\- ⚡ \*\*Modern Frontend\*\* - React 18 with Vite for lightning-fast development

\- 🎛️ \*\*Admin Interface\*\* - Comprehensive Django admin for data management

\- 🐘 \*\*PostgreSQL Database\*\* - Production-ready database setup

\- 📱 \*\*Responsive Design\*\* - Clean and modern UI that works on all devices



\## 🛠️ Tech Stack



\### Backend

\- \*\*Django 5.0+\*\* - High-level Python web framework

\- \*\*Django REST Framework\*\* - Powerful toolkit for building Web APIs

\- \*\*Django-tenants\*\* - Multi-tenant architecture implementation

\- \*\*PostgreSQL\*\* - Advanced open source database

\- \*\*JWT\*\* - JSON Web Tokens for authentication



\### Frontend

\- \*\*React 18\*\* - A JavaScript library for building user interfaces

\- \*\*Vite\*\* - Next generation frontend build tool

\- \*\*Axios\*\* - Promise-based HTTP client

\- \*\*React Router\*\* - Declarative routing for React



\## 📁 Project Structure



Saas\_project/

├── backend/ # Django application

│ ├── saas\_tenant/ # Main Django project

│ ├── tenant/ # Tenant management app

│ ├── account/ # Account management app

│ └── manage.py # Django management script

├── frontend/ # React application

│ ├── src/

│ │ ├── components/ # Reusable components

│ │ ├── pages/ # Page components

│ │ ├── services/ # API services

│ │ └── styles/ # CSS styles

│ ├── package.json # Node.js dependencies

│ └── vite.config.js # Vite configuration

├── .gitignore # Git ignore rules

└── README.md # Project documentation





\## 🚦 Getting Started



\### Prerequisites

\- Python 3.11+ 

\- Node.js 18+

\- PostgreSQL 13+

\- Git



\### Installation

1\. \*\*Clone the repository\*\*

git clone https://github.com/Prashant2515/saas-project.git

cd saas-project


2\. \*\*Backend Setup\*\*

cd backend

python -m venv venv

venv\\Scripts\\activate # Windows

pip install django djangorestframework django-tenants psycopg2 python-decouple django-cors-headers djangorestframework-simplejwt


3\. \*\*Database Setup\*\*

Create PostgreSQL database

createdb saas\_tenant\_db

Run migrations

python manage.py migrate\_schemas --shared

python manage.py migrate\_schemas


4\. \*\*Create Public Tenant\*\*

python manage.py shell

undefined

from tenant.models import Client, Domain

Create public tenant

tenant = Client(schema\_name='public', name='Public Tenant', is\_active=True)

tenant.save()



Create domain

domain = Domain(domain='localhost', tenant=tenant, is\_primary=True)

domain.save()

exit()



5\. \*\*Create Superuser\*\*

python manage.py create\_tenant\_superuser --username=admin --schema=public


6\. \*\*Frontend Setup\*\*

cd ../frontend

npm install


7\. \*\*Start Development Servers\*\*

Terminal 1 - Django Backend

cd backend

python manage.py runserver



Terminal 2 - React Frontend

cd frontend

npm run dev


\## 🌐 Usage



\### Development URLs

\- \*\*Frontend\*\*: http://localhost:5173

\- \*\*Backend API\*\*: http://localhost:8000/api

\- \*\*Django Admin\*\*: http://localhost:8000/admin



\### Demo Credentials

\- \*\*Admin\*\*: Use credentials created during superuser setup

\- \*\*New Users\*\*: Register through the frontend application



\## 📱 API Endpoints



| Method | Endpoint | Description |

|--------|----------|-------------|

| POST | `/api/tenant/auth/register/` | User registration |

| POST | `/api/tenant/auth/login/` | User login |

| GET | `/api/tenant/clients/` | List all clients |

| GET | `/api/account/accounts/` | List all accounts |

| GET | `/api/account/profiles/` | List user profiles |



\## 🔮 Roadmap



\### Upcoming Features

\- \[ ] \*\*CRUD Operations\*\* - Full Create, Read, Update, Delete for all entities

\- \[ ] \*\*Tenant Switching\*\* - Allow users to switch between different tenants

\- \[ ] \*\*User Roles\*\* - Implement role-based access control

\- \[ ] \*\*API Documentation\*\* - Swagger/OpenAPI integration

\- \[ ] \*\*Testing Suite\*\* - Unit and integration tests

\- \[ ] \*\*Docker Support\*\* - Containerization for easy deployment



\### Future Enhancements

\- \[ ] \*\*Payment Integration\*\* - Stripe subscription management

\- \[ ] \*\*Email Notifications\*\* - Automated email system

\- \[ ] \*\*Real-time Features\*\* - WebSocket integration

\- \[ ] \*\*Mobile App\*\* - React Native companion



\## 🤝 Contributing



Contributions are welcome! Please feel free to submit a Pull Request.



1\. Fork the Project

2\. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3\. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4\. Push to the Branch (`git push origin feature/AmazingFeature`)

5\. Open a Pull Request



\## 👨‍💻 Author



\*\*Prashant\*\*

\- GitHub: \[@Prashant2515](https://github.com/Prashant2515)

\- Email: prashant.pawar2515@gmail.com



---



⭐ \*\*Star this repository if you find it helpful!\*\*



\*\*Built with ❤️ using Django and React\*\*



