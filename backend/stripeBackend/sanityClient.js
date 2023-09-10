require("dotenv").config();

const { createClient } = require("@sanity/client");

const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-23", // use current date (YYYY-MM-DD) to target the latest API version
});

exports.sanityClient = sanityClient;
