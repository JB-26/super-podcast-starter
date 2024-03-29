import { test, expect } from '@playwright/test'

test('Page loads successfully', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Update the URL as needed
    const title = await page.title();
    expect(title).toBe('Your title!'); // Update with your actual site title
});


test('Check for important content', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Update the URL as needed

    // Check if the heading is present
    const heading = await page.textContent('[data-testid="main-heading"]');
    expect(heading).toBe("YOUR SHOW NAME   🎙️");
    
    // Check if subtitle is present
    const subtitle = await page.textContent('[data-testid="subtitle"]');
    expect(subtitle).toBe('Your subtitle here. Open the Index.js page to edit this! Make sure you view the README to know how to customise this starter.');

    // Check if paragraph is present
    const paragraph = await page.textContent('[data-testid="paragraph"]');
    expect(paragraph).toBe("Your introduction to your amazing podcast!");
});

test('Image is displayed', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Update the URL as needed

    // Wait for the image to load
    await page.waitForSelector('[data-testid="image"]');

    // Check if the image is visible
    const isImageVisible = await page.isVisible('[data-testid="image"]');
    expect(isImageVisible).toBe(true);
});
