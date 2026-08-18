# FindMyNailTech

**FindMyNailTech** is a full-stack marketplace web application that connects customers with independent mobile nail technicians.

Technicians can create profiles, add services and prices, set their availability and service area, and manage customer bookings.

Customers can search for nearby nail technicians, view technician profiles and services, choose an available appointment time, book a service, and eventually pay a booking deposit through the platform.

---

## MVP Goal

The first FindMyNailTech MVP will support this complete workflow:

```text
Technician registers
        ↓
Creates technician profile
        ↓
Adds services and prices
        ↓
Sets availability
        ↓
Sets location/service radius
        ↓

Customer registers
        ↓
Searches for technician
        ↓
Views technician profile
        ↓
Selects service
        ↓
Chooses date and time
        ↓
Enters service address
        ↓
Pays test deposit
        ↓
Booking confirmed
        ↓

Technician sees booking
        ↓
Completes appointment
        ↓

Customer leaves review
```

---

# Tech Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* TanStack Query
* React Hook Form
* Zod

## Backend

* Node.js
* Express
* TypeScript
* REST API
* Zod

## Database

* PostgreSQL
* Prisma ORM

## Authentication

* bcrypt password hashing
* JWT
* HTTP-only cookies
* Role-based authorization

## Payments

Planned:

* Stripe
* Stripe Connect
* Stripe test mode
* Stripe Webhooks

---

# User Roles

FindMyNailTech supports three main roles:

```text
CUSTOMER
TECHNICIAN
ADMIN
```

## Customer

Customers will eventually be able to:

* Register
* Log in
* Manage profile
* Add service addresses
* Search technicians
* Search by ZIP code
* Search by city
* Search by distance
* Filter by service
* View technician profiles
* View services and prices
* View availability
* Book appointments
* Pay deposits
* View bookings
* Cancel bookings
* Save favorite technicians
* Leave ratings and reviews

## Technician

Technicians will eventually be able to:

* Register
* Log in
* Create technician profile
* Set business name
* Add profile photo
* Add portfolio photos
* Add services
* Set prices
* Set service duration
* Set availability
* Set service area
* Set travel radius
* Receive bookings
* Manage appointments
* View customers
* View earnings
* Receive reviews

## Admin

Admin functionality will be added after the main customer and technician MVP is working.

Admin features may include:

* Manage users
* Manage technicians
* Verify technicians
* Suspend accounts
* Manage bookings
* View transactions
* Handle disputes
* View platform revenue
* Manage subscriptions

---

# Project Structure

```text
findmynailtech/
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── server/
│   ├── src/
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

As the application grows, the backend structure will expand to something similar to:

```text
server/
│
├── prisma/
│   └── schema.prisma
│
└── src/
    ├── controllers/
    ├── services/
    ├── routes/
    ├── middleware/
    ├── validations/
    ├── utils/
    ├── types/
    ├── app.ts
    └── server.ts
```

---

# Getting Started

## Requirements

Make sure you have installed:

* Node.js
* npm
* Git
* PostgreSQL
* VS Code or another code editor

Check Node:

```bash
node -v
```

Check npm:

```bash
npm -v
```

Check Git:

```bash
git --version
```

---

# Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Enter the project:

```bash
cd findmynailtech
```

---

# Frontend Setup

Enter the frontend folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

---

# Backend Setup

Open a second terminal.

Enter the backend folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Start the backend:

```bash
npm run dev
```

The backend runs at:

```text
http://localhost:4000
```

---

# API Health Check

To verify that the backend is running:

```http
GET /api/v1/health
```

Open:

```text
http://localhost:4000/api/v1/health
```

Expected response:

```json
{
  "success": true,
  "message": "FindMyNailTech API is running."
}
```

---

# Environment Variables

Create:

```text
server/.env
```

Initial configuration:

```env
PORT=4000
```

As development continues:

```env
PORT=4000

DATABASE_URL=

JWT_SECRET=

FRONTEND_URL=http://localhost:5173
```

Future integrations may require:

```env
STRIPE_SECRET_KEY=

STRIPE_WEBHOOK_SECRET=

GOOGLE_MAPS_API_KEY=

CLOUDINARY_URL=
```

## Security

Never commit the `.env` file to GitHub.

Never expose:

* Database passwords
* JWT secrets
* Stripe secret keys
* API secret keys
* User passwords
* Payment card information

---

# Current Development Status

## Day 1 — Project Setup & Authentication

* [x] Create project structure
* [x] Create React frontend
* [x] Configure TypeScript
* [x] Configure Vite
* [x] Configure Tailwind CSS
* [x] Create Node.js backend
* [x] Configure Express
* [x] Configure backend TypeScript
* [x] Create API health endpoint
* [ ] Configure PostgreSQL
* [ ] Configure Prisma
* [ ] Create initial database models
* [ ] Create registration API
* [ ] Create login API
* [ ] Create logout API
* [ ] Create current user API
* [ ] Add JWT authentication
* [ ] Add HTTP-only cookies
* [ ] Add role-based authorization
* [ ] Create login page
* [ ] Create registration page
* [ ] Create customer dashboard
* [ ] Create technician dashboard
* [ ] Protect dashboards by role

---

# Initial Database Models

The first database models will include:

```text
User
CustomerProfile
TechnicianProfile
Service
Availability
Booking
```

Future models may include:

```text
AvailabilityException
Address
Payment
Payout
Subscription
Review
Favorite
Conversation
Message
Notification
PortfolioImage
WebhookEvent
```

---

# Authentication API

Planned authentication endpoints:

```http
POST /api/v1/auth/register

POST /api/v1/auth/login

POST /api/v1/auth/logout

GET /api/v1/auth/me
```

Example registration:

```json
{
  "email": "customer@example.com",
  "password": "Password123!",
  "role": "CUSTOMER"
}
```

---

# Planned API Structure

## Authentication

```http
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/logout
GET  /api/v1/auth/me
```

## Technicians

```http
GET   /api/v1/technicians
GET   /api/v1/technicians/:id
PATCH /api/v1/technicians/:id
```

## Technician Search

```http
GET /api/v1/technicians/search
```

Example:

```text
/api/v1/technicians/search?zipCode=77084&radius=15&service=acrylic
```

## Services

```http
POST   /api/v1/services
GET    /api/v1/services/:id
PATCH  /api/v1/services/:id
DELETE /api/v1/services/:id
```

## Bookings

```http
POST  /api/v1/bookings
GET   /api/v1/bookings/:id
GET   /api/v1/bookings/me
PATCH /api/v1/bookings/:id/cancel
```

---

# Booking Workflow

The booking process will follow:

```text
1. Select technician
        ↓
2. Select service
        ↓
3. Select date
        ↓
4. Select available time
        ↓
5. Enter service address
        ↓
6. Review appointment
        ↓
7. Pay booking deposit
        ↓
8. Booking confirmed
```

---

# Booking Status

Bookings will use predefined statuses such as:

```text
PENDING_PAYMENT

CONFIRMED

TECHNICIAN_TRAVELING

IN_PROGRESS

COMPLETED

CANCELLED_BY_CUSTOMER

CANCELLED_BY_TECHNICIAN

NO_SHOW

REFUNDED
```

The application will prevent invalid booking state transitions.

For example:

```text
CONFIRMED
    ↓
TECHNICIAN_TRAVELING
    ↓
IN_PROGRESS
    ↓
COMPLETED
```

A completed booking should not later return to:

```text
IN_PROGRESS
```

---

# Technician Services

Technicians will be able to create their own services.

Example:

```text
Acrylic Full Set
Price: $65
Duration: 150 minutes

Gel Manicure
Price: $45
Duration: 75 minutes

Gel Pedicure
Price: $50
Duration: 90 minutes
```

Technicians will control their own prices.

---

# Technician Availability

Technicians will be able to define weekly availability.

Example:

```text
Monday
9:00 AM - 6:00 PM

Tuesday
9:00 AM - 6:00 PM

Wednesday
Unavailable

Thursday
10:00 AM - 7:00 PM
```

The backend will prevent overlapping appointments and double bookings.

---

# Location Search

Customers will eventually be able to search using:

```text
ZIP code
City
Current location
Distance
Service
Price
Rating
Availability
Date
Time
```

Example:

```text
Houston, TX 77084
```

A technician profile may store:

```text
City
State
ZIP code
Latitude
Longitude
Service radius
```

Example:

```text
Technician location:
Houston, TX 77084

Travel radius:
15 miles
```

---

# Payment Architecture

Payments will use Stripe in test mode during development.

Initial concept:

```text
Service price:
$100

Booking deposit:
5%

Deposit due now:
$5

Remaining balance:
$95
```

Payment information must always be verified by the backend.

The frontend must never determine the authoritative:

```text
Service price
Deposit
Platform fee
Refund
Remaining balance
Technician payout
```

The backend will retrieve the actual service price from the database.

---

# Money Storage

Financial values should not use JavaScript floating-point numbers as the authoritative database representation.

For example:

```text
$65.00
```

can be stored as:

```text
6500 cents
```

This helps avoid money calculation problems.

---

# Standard API Response

Successful API responses should follow a consistent structure.

Example:

```json
{
  "success": true,
  "message": "Technician created successfully.",
  "data": {}
}
```

Errors should follow:

```json
{
  "success": false,
  "message": "Something went wrong."
}
```

---

# Development Roadmap

## Phase 0 — Planning

* Requirements
* Business rules
* Architecture
* User flows
* Database design
* API design

## Phase 1 — Repository Setup

* React
* TypeScript
* Vite
* Tailwind
* Node.js
* Express
* PostgreSQL
* Prisma
* Environment variables
* Git

## Phase 2 — Authentication

* Registration
* Login
* Logout
* Current user
* Protected routes
* Roles

## Phase 3 — Profiles

* Customer profile
* Technician profile

## Phase 4 — Technician Services

* Create service
* Update service
* Delete service
* Price
* Duration

## Phase 5 — Availability

* Weekly availability
* Block dates
* Prevent scheduling conflicts

## Phase 6 — Location Search

* ZIP code
* City
* Radius
* Distance

## Phase 7 — Technician Marketplace

* Search results
* Filters
* Public technician profile

## Phase 8 — Booking

```text
Service
  ↓
Date
  ↓
Time
  ↓
Address
  ↓
Confirmation
```

## Phase 9 — Stripe Deposit

* Stripe test mode
* Deposit payment
* Webhook verification

## Phase 10 — Customer Dashboard

* Upcoming bookings
* Past bookings
* Favorites
* Addresses
* Profile

## Phase 11 — Technician Dashboard

* Upcoming bookings
* Services
* Availability
* Customers
* Earnings

## Phase 12 — Appointment Lifecycle

```text
Confirmed
   ↓
Traveling
   ↓
In Progress
   ↓
Completed
```

## Phase 13 — Final Payments

* Remaining payment
* Platform commission
* Technician payout

## Phase 14 — Reviews

Only customers with completed appointments can review technicians.

## Phase 15 — Messaging & Notifications

* Customer ↔ Technician messaging
* Booking notifications
* Payment notifications

## Phase 16 — Technician Subscription

```text
Free
Pro
Premium
```

## Phase 17 — Admin Dashboard

* User management
* Technician management
* Booking management
* Payments
* Reports

## Phase 18 — Testing

* Unit tests
* API integration tests
* End-to-end tests

## Phase 19 — Security Review

* Authentication
* Authorization
* Validation
* CORS
* Rate limiting
* Secure cookies
* Payment security

## Phase 20 — Deployment

Deploy the frontend, backend, and PostgreSQL database.

---

# Future Features

Possible future features include:

* Mobile app
* React Native
* Push notifications
* SMS reminders
* Promo codes
* Referral program
* Loyalty rewards
* Gift cards
* AI nail style recommendations
* Calendar synchronization
* Technician verification
* Background checks
* Advanced analytics
* Waitlist
* Group appointments
* Multiple services per booking

These features should not delay the first working MVP.

---

# Development Principles

The project follows several important rules:

1. Build one feature at a time.
2. Keep frontend and backend responsibilities separate.
3. Validate important data on the backend.
4. Never trust authorization decisions from the browser.
5. Never trust frontend payment amounts.
6. Protect customer addresses and private information.
7. Prevent double bookings.
8. Use TypeScript throughout the project.
9. Keep code modular and reusable.
10. Test important backend functionality.
11. Never commit secrets to GitHub.
12. Build the core MVP before adding advanced features.

---

# Current Goal

The immediate goal is to complete **Day 1**:

```text
Customer can register
        ↓
Customer can login
        ↓
Customer reaches /customer

Technician can register
        ↓
Technician can login
        ↓
Technician reaches /technician

Customer cannot access technician dashboard

Technician cannot access customer dashboard
```

Once this works, development can move to technician profiles, services, pricing, availability, and location.
