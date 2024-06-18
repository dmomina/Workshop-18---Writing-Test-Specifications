/* 
Unit Test: A function called "multiplication" that returns the product of the two input numbers.

    1. The inputs are two numbers and not strings.
    2. The output is a number.
    3. Both numbers inputted are multiplied together to give the output.
    4. The function handles negative numbers correctly.
    5. The function handles zero correctly.
    6. The function handles floating point numbers correctly.
*/

/* 
Unit Test: A function called "concatOdds" takes two arrays of integers as arguments. 
It should return a single array that only contains the odd numbers, in ascending order, 
from both of the arrays.

    1. The function should only include odd numbers from both arrays.
    2. The function should return the odd numbers in ascending order.
    3. The function should handle empty arrays correctly.
    4. The function should handle arrays with no odd numbers correctly.
    5. The function should handle arrays with duplicate odd numbers correctly.
    6. The function should handle negative odd numbers correctly.
*/

/* 
Functional Test: A shopping cart checkout feature that allows a user to check out as a guest 
(without an account), or as a logged-in user. They should be allowed to do either, 
but should be asked if they want to create an account or log in if they check out as a guest.

    1. The cart should have items that are listed in stock.
    2. If the user proceeds to guest checkout, they should be moved directly to the checkout page which includes details: email, address, coupon/gift voucher, payment details, and billing summary.
    3. If the user chooses to create an account, they should first be taken to a page to enter their first name, last name, email, and password, followed by any other preferences needed per the business such as date of birth, gender, likes/dislikes, etc.
    4. Once the account is created, the top of the page should display the user's first name instead of "Sign in" or "Create an account" and the user should be returned to their cart.
    5. The user should then be prompted to the checkout page with the same details needed as a guest but it should mention their name at the top.
    6. Once the order is placed for both types of checkout, the user should receive a confirmation message on the browser and an email with the order number.
    7. If an item goes out of stock during the checkout process, the user should be informed and prompted to remove or replace the item.
    8. If there are any validation errors (e.g., invalid email address, missing required fields), appropriate error messages should be displayed.
    9. The system should remember the cart contents if the user navigates away from the checkout page and returns later.
*/ 