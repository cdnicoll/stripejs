[Stripe Payments JavaScript Course](https://fireship.io/courses/stripe-js/)

[Project Source Code](https://github.com/fireship-io/stripe-payments-js-course)
 [Stripe Docs](https://stripe.com/docs) 
 [Stripe API Reference](https://stripe.com/docs/api) 

---
## Notes
- Customer
	- [Stripe API Reference - Customers](https://stripe.com/docs/api/customers)
	- Core entity within stripe
	- Stores all profile, billing and, tax information required to bill a customer for both subscription and one-off invoices
- Setup Intent
	- [Stripe API Reference - SetupIntents](https://stripe.com/docs/api/setup_intents)
	- Guides you through setting up and saving a customers payment credentials for future payments
- Payment Intent
	- [Stripe API Reference - PaymentIntents](https://stripe.com/docs/api/payment_intents)
	- A way of collecting payment from a customer
	- recommended that you create one payment intent for each order or customer session in your system
	- Its possible to reference payment intents later to see the history of the payment attempts for a particular session
	- A PaymentIntent transitions through  [multiple statuses](https://stripe.com/docs/payments/intents#intent-statuses)  throughout its lifetime as it interfaces with Stripe.js to perform authentication flows and ultimately creates at most one successful charge.
	- Steps on payment intent process
		1. User is ready to pay
		2. Create a payment intent (server)
		3. Collect card details (client)
		4. Submit payment intent and cart to stripe (react)
