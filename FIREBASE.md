# Firebase setup

This repository is connected to the Firebase project **`firebase-rest-lesson-exercises`**.

| Resource | Value |
| --- | --- |
| Project ID | `firebase-rest-lesson-exercises` |
| Realtime Database | `https://firebase-rest-lesson-exercises-default-rtdb.firebaseio.com` |
| Console | https://console.firebase.google.com/project/firebase-rest-lesson-exercises |

## Data paths

| Path | Used by | Access |
| --- | --- | --- |
| `/products` | Firebase Products 1 (SDK + anonymous auth) | Read when authenticated |
| `/lesson/products` | Firebase Products 2 (REST POST/GET) | Public read/write for exercises |
| `/posts` | Firebase CRUD exercise | Public read/write for exercises |

## One-time console step

Enable **Anonymous** sign-in so *Firebase Products 1* can authenticate in the browser:

1. Open [Authentication → Sign-in method](https://console.firebase.google.com/project/firebase-rest-lesson-exercises/authentication/providers)
2. Enable **Anonymous**

## Commands

```bash
npm run firebase:rules   # deploy database.rules.json
npm run seed:all         # deploy rules, seed protected products, seed open paths
```

## Local config

Web app config lives in `related-exercises/firebase-produkter-1/firebase-config.js`.  
Shared REST base URL: `shared/firebase-database.js`.
