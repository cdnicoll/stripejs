import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { createStripeCheckoutSession } from './checkout'
import { createPaymentIntent } from './payments';
import { handleStripeWebhook } from './webhooks';

export const app = express();
// Allows cross origin requests
app.use(cors({ origin: true }));

// Sets rawBody for webhook handling
app.use(
  express.json({
    verify: (req, res, buffer) => (req['rawBody'] = buffer),
  })
);


app.post('/test', (req: Request, res: Response) => {
  const amount = req.body.amount;
  res.status(200).send({ with_tax: amount * 7 });
});

/**
 * Catch async errors when awaiting promises 
 */
function runAsync(callback: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    callback(req, res, next).catch(next);
  };
}

/**
 * Checkouts
 */
app.post(
  '/checkouts/',
  runAsync(async ({ body }: Request, res: Response) => {
    res.send(await createStripeCheckoutSession(body.line_items));
  })
);


/**
 * Payment Intents
 */
app.post(
  '/payments',
  runAsync(async ({ body }: Request, res: Response) => {
    res.send(
      await createPaymentIntent(body.amount)
    );
  })
);


// Handle webhooks
app.post('/hooks', runAsync(handleStripeWebhook));