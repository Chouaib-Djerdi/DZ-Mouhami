from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import UnexpectedAlertPresentException
import json
import re


def clean_phone_number(phone_number):
    # Remove all non-digit characters
    cleaned_phone_number = re.sub("\D", "", phone_number)
    return cleaned_phone_number


# Initialize the Chrome driver
driver_service = Service(
    "C:\\Users\\lenovo\\Desktop\\DZ-Mouhami\\avocatscraper\\chromedriver.exe"
)
driver = webdriver.Chrome(service=driver_service)

driver.execute_script("window.alert = function(){};")

list_of_avoacats = []

# Go to the start page
# driver.get("https://avocatalgerien.com")
driver.get("https://avocatalgerien.com/")

while True:
    try:
        cookie_notice = driver.find_element(By.CLASS_NAME, "cookie-notice-container")
        driver.execute_script("arguments[0].style.display='none';", cookie_notice)
    except:
        pass
    # Get all lawyer profiles on the current page

    avocat_list = driver.find_elements(
        By.CSS_SELECTOR, "article.listing h2.entry-title a"
    )

    for avocat in avocat_list:
        # Click the profile to go to the details page
        avocat.click()

        # ignore cookie alert
        try:
            cookie_notice = driver.find_element(
                By.CLASS_NAME, "cookie-notice-container"
            )
            driver.execute_script("arguments[0].style.display='none';", cookie_notice)
        except:
            pass

        # click reveal button
        try:
            reveal_button = WebDriverWait(driver, 10).until(
                EC.visibility_of_element_located(
                    (
                        By.CSS_SELECTOR,
                        ".contact-details .details-left ul li.phone .reveal",
                    )
                )
            )

            reveal_button.click()

            # if driver.switch_to.alert is not None:
            #     alert = driver.switch_to.alert
            #     # Accept the alert
            #     alert.accept()

            # Wait until span element disappears
            WebDriverWait(driver, 20).until(
                EC.invisibility_of_element_located(
                    (
                        By.CSS_SELECTOR,
                        ".contact-details .details-left ul li.phone .reveal span",
                    )
                )
            )

            phone_number = clean_phone_number(
                driver.find_element(
                    By.CSS_SELECTOR,
                    ".contact-details .details-left ul li.phone .reveal",
                ).text
            )
        except:
            # alert = driver.switch_to.alert
            # alert.accept()
            phone_number = ""

        try:
            url = driver.current_url
        except:
            url = ""

        try:
            title = driver.find_element(
                By.CSS_SELECTOR, ".contact-details .details-left h1.entry-title a"
            ).text
        except:
            title = ""

        try:
            pfp_url = driver.find_element(
                By.CSS_SELECTOR,
                ".contact-details .details-right .listing-images .larger a",
            ).get_attribute("href")
        except:
            pfp_url = ""

        try:
            address = driver.find_element(
                By.CSS_SELECTOR, ".contact-details .details-left ul li.address"
            ).text
        except:
            address = ""

        try:
            lat = driver.find_element(
                By.XPATH, '//div[@itemprop="geo"]/meta[@itemprop="latitude"]'
            ).get_attribute("content")
        except:
            lat = ""

        try:
            lng = driver.find_element(
                By.XPATH, '//div[@itemprop="geo"]/meta[@itemprop="longitude"]'
            ).get_attribute("content")
        except:
            lng = ""

        try:
            email = driver.find_element(By.XPATH, '//li[@id="listing-email"]/a').text
        except:
            email = ""

        try:
            categories = [
                elem.text
                for elem in driver.find_elements(
                    By.CSS_SELECTOR, ".contact-details .details-left p.listing-cat a"
                )
            ]
        except:
            categories = []

        try:
            portfolio_url = (
                driver.find_element(
                    By.CSS_SELECTOR,
                    ".contact-details .details-left listing-actions a.va-website-link",
                ).get_attribute("href"),
            )
        except:
            portfolio_url = ""

        try:
            # Get all the <p> elements under the #overview section
            description_elements = driver.find_elements(
                By.XPATH, "//section[@id='overview']//p"
            )
            # Extract the text from each <p> element and join them into a single string
            description_data = " ".join([elem.text for elem in description_elements])

        except:
            # If the description data is not existent, provide a default value
            description_data = ""

        data = {
            "url": url,
            "title": title,
            "pfp_url": pfp_url,
            "location": {
                "address": address,
                "lat": lat,
                "lng": lng,
            },
            "phone_number": phone_number,
            "email": email,
            "categories": categories,
            "portfolio_url": portfolio_url,
            "description": description_data,
        }
        print(data)

        # Add element to list of avocats
        list_of_avoacats.append(data)

        # Go back to the list page
        driver.back()

    # Try to find the 'next' button
    try:
        next_button = driver.find_element(
            By.CSS_SELECTOR,
            "nav.pagination a.next",
        )
    except:
        next_button = None

    if next_button is None:
        # If the 'next' button does not exist, we've reached the end of the list
        break
    else:
        # Otherwise, click the 'next' button to go to the next page
        next_button.click()

print(len(list_of_avoacats))

# dump data into json format
with open("data.json", "w") as f:
    json.dump(list_of_avoacats, f)

driver.quit()
