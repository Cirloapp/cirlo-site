# Cirlo Phase 1 release verification — 2026-10-11

## Scope
Reviewed the connected `Cirloapp/cirlo-site` website repository on the proposed legal-pages branch. This is a React 18/Vite website. `package.json` contains React and Vite; `vercel.json` routes all paths to `index.html`. The website's `main.jsx` routes legal URLs to `LegalPages.jsx`, with `/download` still served by the legacy component. This is **not** an audit of the iOS/Android app binary or its backend.

## Confirmed from website code
- The new landing page describes Daily Wisdom and contributor profiles, but also displays a proposed membership section with three monthly connections. That marketing section must be removed or clearly marked coming soon before the Phase 1 launch if the feature is unavailable.
- The landing page has links to legal, accessibility, subscription, deletion and support pages on the review branch.
- The website's new legal documents distinguish published Founding Cirlo answers from private legacy recordings.
- The website references external Pexels image assets and Google Fonts; it loads Tailwind through a CDN in `index.html`. Whether request metadata is collected by those third parties should be reflected in the final web data inventory.
- No native app code, authentication implementation, storage security rules, recording export/deletion logic, app SDK inventory, purchase implementation, or moderation tooling was established by this website review.

## Blocking verifications before publishing policies and submitting the apps
1. **Legal operator**: Confirm that Origin & Co. is the current contracting legal entity and verify business address/contact details.
2. **Production data map**: Inspect iOS/Android apps and backend for Firebase or other authentication, storage, crash, analytics, advertising, AI/transcription, and email providers; determine exactly what data is collected, shared, tracked and retained.
3. **Legacy recordings**: Verify encryption/access permissions, who can technically access audio, secure export process, customer notice, deletion and backup expiry. Do not claim recordings were never listened to without evidence.
4. **Account deletion**: Verify account creation and in-app deletion initiation, external deletion request page, deletion of associated content and any legally retained records.
5. **User-generated content**: Confirm whether users can submit questions, publish answers, message or interact. Test review queues, content reporting and blocking controls as applicable under store policy.
6. **App submission**: Complete Apple privacy nutrition labels, Google Data Safety form, permissions, age ratings, store metadata, support and privacy URLs, and review credentials where authentication is needed.
7. **Billing**: Confirm whether any legacy subscription remains active. Verify no Phase 1 paid membership checkout exists; if any digital subscriptions are sold, audit Apple/Google purchase flows.
8. **Accessibility and security**: Perform device-based screen reader/contrast/keyboard tests and backend security rules review. Do not claim WCAG compliance or that the backend is secure solely based on policy wording.
9. **Contributor consent**: Execute a Founding Cirlo agreement covering publication consent, promotional reuse, $10 per approved published answer if adopted, payment timing, withdrawal/removal and contractor classification.
10. **Website content alignment**: Remove or label the existing membership pricing and paid connection language as coming soon. Verify waitlist links do not send users to the old memory-preservation app by mistake.

## Status
Legal wording revised on a review branch. **NOT approved for merging or store submission** until material factual claims are reconciled with the actual app and backend. This document is a technical/compliance checklist, not a legal opinion or guarantee of Apple/Google approval.
