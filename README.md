# WTA-FE

**wta-fe** is a SvelteKit frontend for the Skye Suites hotel website, completely decoupled from the [wta-be](https://github.com/imperionite/wta-be) Node.js/Express/MongoDB backend via REST API. Our project follows the **Jamstack pattern** (JavaScript, APIs, Markup) with clear separation of concerns.

## Architecture

```bash
Static Frontend (wta-fe, Jamstack)  ←→  API  ←→  Backend (wta-be)  ←→  MongoDB
     (SvelteKit)                        |         (Node/Express)
                                        |
                   Authentication, Bookings, Contacts, Subscriptions
```

## Key Features

- Dynamic booking interface via API
- User authentication flows
- Contact forms and subscriptions
- Responsive design extending original static site

## Prerequisites

- Node.js (v18+ recommended) and npm installed
- [Backend repository](https://github.com/imperionite/wta-be) cloned and running on `http://localhost:3000`

## Quick Start

1. **Clone the repo**:

   ```
   git clone https://github.com/imperionite/wta-fe.git
   cd wta-fe
   ```

2. **Install dependencies**:

   ```
   npm install
   ```

3. **Create `.env` file** in project root:

   ```
   VITE_API_BASE=http://localhost:3000/api
   ```

4. **Open new command prompt or terminal** and start backend dev server (port 3000):

   ```
   cd wta-be
   npm run dev
   ```

5. **Start frontend dev server** (port 5173):

   ```
   npm run dev
   ```

6. **Open browser**: `http://localhost:5173`

## CLI Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
npm run check    # TypeScript linting
```

## Note

Ensure backend runs first. Frontend proxies API calls to `localhost:3000/api` via `VITE_API_BASE`.
