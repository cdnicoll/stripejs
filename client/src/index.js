
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase'

// Loads stripe and makes it available to the application
export const stripePromise = loadStripe('pk_test_51H87WjDhtTCl2mk0oVMp6SIyaCl0FpDZGeZBIMQiFfagtOfrtJnyh6VNpSAYRHaOEQNfEnQCaHjlfwMjIKrXL61000R1Gt0jLJ');

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
