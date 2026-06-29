# Architecture

NPW uses a modular Next.js App Router architecture. Public pages, future auth
routes, and future protected member areas are grouped separately under `src/app`
so routing concerns stay visible.

## Principles

- Prefer server components by default.
- Use client components only for browser interactivity.
- Keep business workflows in `src/services`.
- Keep framework adapters and shared clients in `src/lib`.
- Keep pure helpers in `src/utils`.
- Keep feature UI grouped under `src/components`.
- Add data models only when feature requirements are approved.

## Security Posture

Future implementation should assume private stories, prayer requests, and member
messages are sensitive. Authentication, authorization, validation, rate limits,
moderation, auditability, and safe email handling must be designed before any
feature work is merged.
