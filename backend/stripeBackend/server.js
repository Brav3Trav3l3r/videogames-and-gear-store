const express = require("express");
const { sanityClient } = require("./sanityClient");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51NisCpEfwkwOpSa4ZbwIti8N376rdjzCeVbN3P8jWsnZgq8xXuRSNuzGXpNp49vCb9hyzXC7GmRBncQgI0zgBcSp00HUG3IGLk"
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
    const sanityData = await sanityClient.fetch(
      '*[_type in ["games", "gears"]]{"name":title, "id": _id, price, "poster": poster.asset->url, currency }'
    );

    let line_items = validateCartItems(sanityData, cartItems);

    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items,
      success_url: `https://github.com/yagasta`,
      cancel_url: `https://github.com/yagasta`,
    };

    const session = await stripe.checkout.sessions.create(params);

    console.log(session.id);

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
