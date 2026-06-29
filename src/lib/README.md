# `src/lib`

Shared low-level integrations live here, such as Prisma clients, Auth.js
configuration helpers, logging, and framework adapters.

Do not place feature-specific business logic in this folder. Prefer
`src/services` for use-case orchestration.
