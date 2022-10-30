import Stripe from "stripe";

const stripe = new Stripe('sk_test_51LxvqME11cCRTDeZIqgmComOEX7yJW7uNBz38Gyqv5s8kmSB0CZuOzTGwEPCWX7IlyuH7gQg5zYhhdHeS4V1xrox00JuxK7g6m')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const params = {
            submit_type : 'pay',
            mode : 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options : [
                {shipping_rate : 'shr_1LyURtE11cCRTDeZLg4m4lAu'}
            ],
            line_items: req.body.map((item)=> {
              const img = item.image[0].asset._ref;
              const newImage = img.replace('image-','https://cdn.sanity.io/images/m1ar31yg/production/').replace('-webp','.webp')
              
              return {
                price_data : {
                  currency: 'usd',
                  product_data : {
                    name : item.name,
                    images :[newImage]
                  },
                  unit_amount : item.price * 100,// percent
                },
                adjustable_quantity : {
                  enabled : true,
                  minimum : 1,
                },
                quantity : item.quantity
              }
            }),
            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/canceled`,
          }

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}