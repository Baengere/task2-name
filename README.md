Flow of Work - MVP

Setup:
1. Copy .env.example to .env.local and fill values (DATABASE_URL, Kinde, OPENAI_API_KEY)
2. npm install
3. npx prisma generate
4. npx prisma db push
5. npm run dev

Notes:
- This is a minimal MVP. Replace NEXT_PUBLIC_BASE_URL in .env.local with your app url.
- Kinde and OpenAI require valid API keys.
