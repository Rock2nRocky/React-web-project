from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from PIL import Image, ImageDraw, ImageFont
import os
from datetime import datetime

# Function to take screenshots of all pages
def capture_all_pages(base_url, routes, output_dir="screenshots"):
    # Set up WebDriver (Update the path to your ChromeDriver)
    service = Service("path/to/chromedriver")  # Replace with your ChromeDriver path
    driver = webdriver.Chrome(service=service)

    os.makedirs(output_dir, exist_ok=True)

    try:
        for route in routes:
            url = f"{base_url}{route}"  # Build full URL
            driver.get(url)
            driver.maximize_window()
            driver.implicitly_wait(5)

            timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
            screenshot_name = route.strip("/").replace("/", "_") or "homepage"
            screenshot_path = os.path.join(output_dir, f"{screenshot_name}_{timestamp}.png")
            driver.save_screenshot(screenshot_path)

            print(f"Captured screenshot for: {url}")

    finally:
        driver.quit()

# Define the base URL and routes
if __name__ == "__main__":
    base_url = "http://localhost:3000"  # Change to your local development server
    routes = ["/", "/shop", "/about", "/contact", "/cart"]  # Add all routes from your App.js
    capture_all_pages(base_url, routes)
