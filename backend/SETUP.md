# Backend Setup

1. `npm install`
2. Copy `.env.example` to `.env` and fill in:
   - `MONGO_URI` — your MongoDB connection string
   - `JWT_SECRET` — any long random string
   - `CLIENT_URL` — your frontend URL (for CORS + cookies), default http://localhost:3000
3. `npm run seed` — creates the first admin login (email/password from `.env`,
   defaults to admin@example.com / Admin@123) and seeds sample services/team/
   testimonials/clients so the site isn't empty on first run.
4. `npm run dev` — starts the API at http://localhost:5000 (uses nodemon)
5. `npm start` — production start

## Admin login
Go to `http://localhost:3000/admin/login` on the frontend and sign in with
the admin email/password from step 3. From there you can manage Services,
Team, Testimonials, Clients/Logos and view Contact form submissions.
