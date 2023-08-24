const express = require("express");
const { sanityClient } = require("./sanityClient");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51NiKdfSHs3QBZavVWoKSCRCZqJfTkzHClVnfvxMcxeqrvDbyDkrFy141iHBiD8ytaBxMNeTIldjISr6dQEULj90Y00sS9T9UtD"
);

const validateCartItems =
  require("use-shopping-cart/utilities").validateCartItems;

const app = express();
app.use(express.json());

const YOUR_DOMAIN = "http://127.0.0.1:5173";

app.use(
  cors({
    origin: YOUR_DOMAIN,
  })
);

app.get("/", async (req, res) => {
  res.json("Stripe backend");
});

app.post("/checkout", async (req, res) => {
  try {
    const cartItems = req.body;
    let sanityData = await sanityClient.fetch(
      '*[_type in ["games", "gears"]]{title, "id": _id, price, "poster": poster.asset->url }'
    );

    let line_items = validateCartItems(sanityData, cartItems);

    console.log(line_items);

    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      line_items,
      success_url: `http://127.0.0.1:5173/`,
      cancel_url: `http://127.0.0.1:5173/`,
    };

    const session = await stripe.checkout.sessions.create(params);

    console.log(session);

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "While communicating with Stripe, we encountered an error.",
        error: error.message,
      }),
    };
  }
});

app.listen(4242, () => {
  console.log(`Stripe server listening on port: 4242`);
});
