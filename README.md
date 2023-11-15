Discord clone with real-time communication. Built with Next.js. Uses Socket.io, Prisma db, TypeScript, Tailwind and Clerk auth...

[APP LINK](https://e-discord-production.up.railway.app/)

### Npm install

```
npm i
```

### .env file

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=

NEXT_PUBLIC_SITE_URL=
```

### Prisma Setup (MySQL)

```
npx prisma generate
npx prisma db push

```

### Start the app

```
npm run dev
```
