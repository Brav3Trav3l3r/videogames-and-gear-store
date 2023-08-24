const epxress = require("express");
const { sanityClient } = require("./sanityClient");
const cors = require("cors");

const stripe = require("stripe")(process.env.VITE_SECRET_KEY);
const validateCartItems =
  require("use-shopping-cart/utilities").validateCartItems;

const app = epxress();
app.use(epxress.json());

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
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
    console.log(sanityData);

    let line_items = validateCartItems(sanityData, cartItems);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      success_url: `https://useshoppingcart.com/success.html`,
      cancel_url: process.env.URL,
      line_items,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
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
