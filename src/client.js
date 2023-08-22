import { createClient } from "@sanity/client";

const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-23", // use current date (YYYY-MM-DD) to target the latest API version
});

export default client;
