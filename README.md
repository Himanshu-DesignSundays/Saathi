# Saathi — Learner’s Licence Guide

An independent, no-build hackathon prototype for a clearer end-to-end Learner’s Licence journey. It is not an official government product and does not process real personal data, payments, identity checks, or licences.

## Run locally

From the directory that contains `Code/`:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/Code/`. Do not open `index.html` through `file://`; the shared demo banner is loaded with `fetch()`.

The app uses hash routes, so screens such as `http://localhost:8080/Code/#/documents` can be bookmarked and refreshed safely.

## What works

- All 33 screen states from discovery through licence issuance
- Saved form and journey progress using browser storage
- Synthetic Aadhaar and visible demo OTP
- Document selection and validation simulation
- Payment processing and linked confirmation simulation
- Tutorial completion gate and test-slot booking
- Recoverable face-authentication failure
- Online test pass and retest branches
- Responsive layouts, keyboard controls, status announcements, and offline notice

All backend-dependent behaviour is clearly marked as simulated. No network request is made to a government or payment service.

See [DEPLOY.md](DEPLOY.md) for GitHub Pages publishing instructions.
