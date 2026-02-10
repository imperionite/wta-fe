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

## Third-Party Weather API Integration (MS 1 Requirement)

Frontend POC demonstrating integration with a third-party weather API to show external data in the booking flow.

### API

- **Provider:** wttr.in
- **Endpoint:** `https://wttr.in/{location}?format=j1`
- **Authentication:** None
- **Location:** Fixed to _Palawan, Philippines_

### Functionality

- Fetches daily weather forecast on date selection.
- Shows summarized forecast inline and detailed view in a modal.
- Filters data to stay period (check-in to day before check-out).

### Data Coverage

- Forecast depends on API availability and may not cover all stay dates.
- Partial coverage is indicated in the UI (e.g., “Forecast available for X of Y nights”).

### Data Handling

- Dates normalized on frontend to prevent timezone issues.
- Only available forecast days are rendered; missing dates are expected.

### Scope

- For demonstration and evaluation only; not intended for production-grade forecasting.
