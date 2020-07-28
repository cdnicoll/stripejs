import { stripe } from './'
import Stripe from 'stripe'

/**
 * Business logic for specific webhook event types
 */
const webhookHandlers = {
  'payment_intent.created': async (data: Stripe.PaymentIntent) => {
    // Add your business logic here
    console.log('payment_intent.created', data)
  },
  'payment_intent.succeeded': async (data: Stripe.PaymentIntent) => {
    // Add your business logic here
    console.log('payment_intent.succeeded', data)
  },
  'payment_intent.payment_failed': async (data: Stripe.PaymentIntent) => {
    // Add your business logic here
    console.log('payment_intent.payment_failed', data)
  },
}

/**
 * Validate the stripe webhook secret, then call the handler for the event type
 */
export const handleStripeWebhook = async(req, res) => {
  console.log("@DEBUG::07282020-030453");
  const sig = req.headers['stripe-signature']
  const event = stripe.webhooks.constructEvent(req['rawBody'], sig, process.env.STRIPE_WEBHOOK_SECRET)

  try {
    console.log(event.type)
    await webhookHandlers[event.type](event.data.object);
    res.send({received: true});
  } catch (err) {
    console.error(err)
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
}