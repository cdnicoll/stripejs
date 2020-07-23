import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Loads stripe and makes it available to the application
export const stripePromise = loadStripe('pk_test_51H87WjDhtTCl2mk0oVMp6SIyaCl0FpDZGeZBIMQiFfagtOfrtJnyh6VNpSAYRHaOEQNfEnQCaHjlfwMjIKrXL61000R1Gt0jLJ');

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
        <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);
