import { test } from "@playwright/test";
import { HomePage } from "@pages/HomePage";
import { SearchPage } from "@pages/SearchPage";

test("Search for T-shirts and verify product", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.searchFor("T-shirts");
  const searchPage = new SearchPage(page);
  await searchPage.verifyProductVisible("Faded Short Sleeve T-shirts");
});
