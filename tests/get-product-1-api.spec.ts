import { test, expect, request } from "@playwright/test";
import Ajv from "ajv";

const endpoint = "https://fakestoreapi.com/products/1";

const productSchema = {
  type: "object",
  required: ["id", "title", "price", "category", "description"],
  properties: {
    id: { type: "number" },
    title: { type: "string" },
    price: { type: "number" },
    category: { type: "string" },
    description: { type: "string" },
  },
};

test("GET /products/1 returns valid product", async ({ request }) => {
  const response = await request.get(endpoint);
  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data).toHaveProperty("id");
  expect(data).toHaveProperty("title");
  expect(data).toHaveProperty("price");
  expect(data).toHaveProperty("category");
  expect(data).toHaveProperty("description");

  // Validate schema
  const ajv = new Ajv();
  const validate = ajv.compile(productSchema);
  const valid = validate(data);
  expect(valid).toBe(true);

  // Log product title and price
  console.log(`Product title: ${data.title}`);
  console.log(`Product price: ${data.price}`);
});
