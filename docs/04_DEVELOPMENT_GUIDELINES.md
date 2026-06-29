# Development Guidelines

## Code Quality

- Keep TypeScript strict.
- Run `npm run lint`, `npm run typecheck`, and `npm run build` before merging.
- Prefer small, named components.
- Keep components server-rendered unless browser behavior is required.
- Keep feature logic out of route files.
- Avoid storing sensitive data in client components.

## Security

- Treat story submissions, prayer requests, and private messages as sensitive.
- Validate and sanitize all external input.
- Use explicit authorization checks for protected and admin areas.
- Never expose SMTP credentials or database secrets to the client.
- Add rate limiting and abuse prevention before enabling public forms.

## Product Boundaries

All future user-facing workflows must clearly state that NPW is Christian
encouragement and community, not therapy, counseling, psychiatric treatment, or
crisis intervention.
