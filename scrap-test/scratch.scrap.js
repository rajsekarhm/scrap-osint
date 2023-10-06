const { test } = require('@playwright/test')
let context, page;
test.beforeAll(async ({ browser }) => {
    context = await browser.newContext()
    page = await context.newPage()
})

test.describe('scrap-data', () => {

})