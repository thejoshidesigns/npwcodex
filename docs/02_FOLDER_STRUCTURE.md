# Folder Structure

```txt
src/
  app/                 Route groups and pages
  components/
    ui/                Reusable presentational components
    layout/            Navbar, footer, and app shell pieces
    forms/             Future reusable form components
    forum/             Future forum components
    prayer/            Future prayer components
    dashboard/         Future dashboard components
  config/              Site, navigation, and runtime configuration
  hooks/               Client-side hooks
  lib/                 Shared framework adapters and clients
  middleware/          Middleware policy helpers
  prisma/              Prisma schema
  services/            Business use-case services
  styles/              Styling notes and future shared style modules
  types/               Shared TypeScript types
docs/                  Project documentation
public/                Public static assets
```

The structure is intentionally broader than Step 1 requires so future feature
work has obvious ownership boundaries.
