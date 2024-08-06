# c2pa Social Example in Next.js

[![Example][example-live-badge]][example-live] [![Vercel Project][vercel-project-badge]][vercel-project]

An example application to show how [c2pa] could be shown in social platforms that have not fully implemented [L1 or L2 UX for c2pa][c2pa-ux]. 

## 🚀 Quick Start

### Step 1

Add a `.env.local`

```bash
CONTENT_INTEGRITY_API_URL="YOUR API URL"
```

### Step 2

Install required packages

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```


### Step 3
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Step 4
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧱 Architecture

This is a [Next.js][next-js] project bootstrapped with [`create-next-app`][create-next-app]. The app is deployed using [Vercel][vercel].

### Stack
- [Vercel][vercel]
- [NextJS 13][next-js]
- [React][react]
- [Tailwind CSS][tailwind-css]

### Intent

Verification/Validation is completed server side to ensure SSR can be used. This means although `c2pa-js` is used no wasm is used.

## 🎉 Try It Yourself!

Use this button to deploy it on Vercel

[![Deploy with Vercel][vercel-button]][vercel-button-link]

<!--REFERENCES-->
[vercel-button]: https://vercel.com/button
[vercel-button-link]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FInfernoRed%2Fc2pa-social-example-next&project-name=c2pa-social-example-next
[create-next-app]: https://github.com/vercel/next.js/tree/canary/packages/create-next-app
[next-js]: https://nextjs.org/
[vercel]: https://vercel.com/
[c2pa]: https://c2pa.org/
[c2pa-ux]: https://c2pa.org/specifications/specifications/1.1/ux/UX_Recommendations.html#_introduction
[tailwind-css]: https://tailwindcss.com/
[react]: https://react.dev/
[example-live-badge]: https://img.shields.io/badge/vercel-live-brightgreen?style=for-the-badge&logo=vercel
[example-live]: https://c2pa-social-example-next.vercel.app/
[vercel-project-badge]: https://img.shields.io/badge/project-open-blue?style=for-the-badge&logo=vercel
[vercel-project]: https://vercel.com/inferno-red-technology/c2pa-social-example-next