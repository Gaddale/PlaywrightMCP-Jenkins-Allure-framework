import { test, expect } from "@playwright/test";

test("Search for Printed Dress and verify product", async ({ page }) => {
  // 1. Navigate to the website
  await page.goto("http://www.automationpractice.pl/index.php");

  // 2. Search for 'Printed Dress'
  await page.fill('input[name="search_query"]', "Printed Dress");
  await page.press('input[name="search_query"]', "Enter");

  // 3. Verify "Printed" appears in the product list
  const productList = page.locator(".product_list");
  await expect(productList).toContainText("Printed");
});
