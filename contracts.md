# otobrothers Website - API Contracts

## Overview
This document outlines the API contracts needed to transform the current frontend mock implementation into a fully functional full-stack application.

## Current Mock Data Location
- **File**: `/app/frontend/src/data/mockData.js`
- **Mock Data Types**: Services, Stats, Testimonials, Client Logos

## Required Backend Endpoints

### 1. Contact Form Submission
**POST** `/api/contact/inquiry`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "role": "string (optional)",
  "company": "string (required)",
  "website": "string (optional)",
  "companySize": "string (optional)",
  "revenue": "string (optional)",
  "budget": "string (optional)",
  "services": "string (optional)",
  "message": "string (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Inquiry submitted successfully",
  "inquiryId": "unique_id"
}
```

### 2. Services Management
**GET** `/api/services`

**Response:**
```json
{
  "services": [
    {
      "id": "number",
      "category": "string",
      "icon": "string",
      "services": ["array of strings"]
    }
  ]
}
```

### 3. Company Stats
**GET** `/api/stats`

**Response:**
```json
{
  "stats": [
    {
      "number": "string",
      "label": "string", 
      "description": "string"
    }
  ]
}
```

### 4. Testimonials
**GET** `/api/testimonials`

**Response:**
```json
{
  "testimonials": [
    {
      "id": "number",
      "name": "string",
      "role": "string",
      "company": "string",
      "content": "string",
      "rating": "number"
    }
  ]
}
```

### 5. Client Logos
**GET** `/api/clients`

**Response:**
```json
{
  "clients": [
    {
      "name": "string",
      "logo": "string (URL)"
    }
  ]
}
```

## Database Schema Requirements

### Inquiries Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  role: String,
  company: String (required),
  website: String,
  companySize: String,
  revenue: String,
  budget: String,
  services: String,
  message: String,
  createdAt: Date,
  status: String (default: "new")
}
```

### Services Collection
```javascript
{
  _id: ObjectId,
  category: String (required),
  icon: String,
  services: [String],
  order: Number,
  isActive: Boolean (default: true)
}
```

### Stats Collection
```javascript
{
  _id: ObjectId,
  number: String (required),
  label: String (required),
  description: String,
  order: Number,
  isActive: Boolean (default: true)
}
```

### Testimonials Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  role: String (required),
  company: String (required),
  content: String (required),
  rating: Number (1-5),
  isActive: Boolean (default: true),
  order: Number
}
```

### Clients Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  logo: String (required),
  isActive: Boolean (default: true),
  order: Number
}
```

## Frontend Integration Points

### Components to Update:
1. **ContactSection.jsx** - Replace mock form submission with API call
2. **ServicesSection.jsx** - Replace mockServices with API data
3. **StatsSection.jsx** - Replace mockStats with API data
4. **TestimonialsSection.jsx** - Replace mockTestimonials and mockClients with API data

### Integration Steps:
1. Create API utility functions in `/app/frontend/src/utils/api.js`
2. Add React hooks for data fetching (useState, useEffect)
3. Add loading states and error handling
4. Replace mock data imports with API calls
5. Add proper form submission handling with success/error states

## Additional Features for Backend
- Email notifications for new inquiries
- Admin dashboard for managing content
- Analytics tracking for form submissions
- File upload capability for client logos
- Content management system for services and testimonials

## Notes
- All endpoints should include proper error handling
- CORS is already configured in the backend
- MongoDB connection is established
- Frontend uses axios for HTTP requests