import {config} from 'dotenv'
import Stripe from 'stripe'
if (process.env.NODE_ENV !== "production") {
  config()
}

export const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: '2020-03-02'
});