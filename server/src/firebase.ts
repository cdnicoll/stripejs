if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: './.env' })
}

// Initialize Firebase Admin resources
import * as firebaseAdmin from 'firebase-admin';
firebaseAdmin.initializeApp();

export const db = firebaseAdmin.firestore();
export const auth = firebaseAdmin.auth();
