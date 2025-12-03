UPGRADED RECEIPT GENERATOR - README
Files in this package:
- index.html
- signup.html
- login.html
- dashboard.html
- generator.html
- style.css
- firebase.js
- app.js

Instructions:
1) Upload files to GitHub repo or any static host that supports modules (GitHub Pages works).
2) Ensure your Firebase project (the config is already included). Firestore rules should allow authenticated users to write to their own documents.
3) Test sign up -> login -> dashboard -> generator -> preview -> download -> save.
Firestore rules suggestion (set in Firebase Console -> Firestore -> Rules):
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /users/{userId}/receipts/{receiptId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
