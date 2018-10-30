# bamazon

Bamazon is an incredible lifestyle changing platform that allows users to pick which products they would like to buy from the limited selection given, check if their chosen product has inventory, and complete the sale!

There has never been anything like it before and will probably never be anything like it again! It is completely revolutionary!

In the git terminal, the user will use a command such as: 

```
node bamazonCustomer.js
```

Which prompts the following:

```
    *****************************
    *** Welcome To Bamazon!! ***
    *****************************

    *****************************************************************
    The crappiest made knockoff of Amazon to ever take your money!
    *****************************************************************


    ID: 1  | Name: ShamWOW | Price: $ 20

    ID: 2  | Name: Nest | Price: $ 209

    ID: 3  | Name: iPhone X | Price: $ 1049

    ID: 4  | Name: Keurig Coffee Maker | Price: $ 90

    ID: 5  | Name: Instant Pot Rice Cooker | Price: $ 120

    ID: 6  | Name: Red Dead Redemption 2 | Price: $ 80

    ID: 7  | Name: Samsung Series Curved 49-Inch Gaming Monitor | Price: $ 996

    ID: 8  | Name: Jack Link’s Beef Jerky, Teriyaki, 16 Ounce | Price: $ 14

    ID: 9  | Name: The North Face Vault Backpack | Price: $ 55

    ID: 10  | Name: Pop-Tarts Breakfast Toaster Pastries | Price: $ 3

    -----------------------------------------------------

? What is the ID of the product you would like to buy? 1
? How many units of the product would you like to buy? 4

     Product ID: 1
     Quantity Requested: 4

     Checking Inventory...

     Quantity left: 200

     The amount you've requested is available.

? Would you like to continue with your order? (Yes, No) Yes

     Your order is processing...Calculating total cost.

     Your order total is: $ 80.00

     ------------------------------------------------

```    
    
Below shows what happens if there is not available inventory:

```
 *****************************
    *** Welcome To Bamazon!! ***
    *****************************

    *****************************************************************
    The crappiest made knockoff of Amazon to ever take your money!
    *****************************************************************


    ID: 1  | Name: ShamWOW | Price: $ 20

    ID: 2  | Name: Nest | Price: $ 209

    ID: 3  | Name: iPhone X | Price: $ 1049

    ID: 4  | Name: Keurig Coffee Maker | Price: $ 90

    ID: 5  | Name: Instant Pot Rice Cooker | Price: $ 120

    ID: 6  | Name: Red Dead Redemption 2 | Price: $ 80

    ID: 7  | Name: Samsung Series Curved 49-Inch Gaming Monitor | Price: $ 996

    ID: 8  | Name: Jack Link’s Beef Jerky, Teriyaki, 16 Ounce | Price: $ 14

    ID: 9  | Name: The North Face Vault Backpack | Price: $ 55

    ID: 10  | Name: Pop-Tarts Breakfast Toaster Pastries | Price: $ 3

    -----------------------------------------------------

? What is the ID of the product you would like to buy? 6
? How many units of the product would you like to buy? 5000

     Product ID: 6
     Quantity Requested: 5000

     Checking Inventory...

[ RowDataPacket {
    item_id: 6,
    product_name: 'Red Dead Redemption 2',
    department_name: 'Video Games',
    price: 80,
    stock_quantity: 505 } ]

     We're sorry that quantity is not available!

? Would you like to choose a differnt quantity or product? (Yes, No) Yes

 ID: 1  | Name: ShamWOW | Price: $ 20

    ID: 2  | Name: Nest | Price: $ 209

    ID: 3  | Name: iPhone X | Price: $ 1049

    ID: 4  | Name: Keurig Coffee Maker | Price: $ 90

    ID: 5  | Name: Instant Pot Rice Cooker | Price: $ 120

    ID: 6  | Name: Red Dead Redemption 2 | Price: $ 80

    ID: 7  | Name: Samsung Series Curved 49-Inch Gaming Monitor | Price: $ 996

    ID: 8  | Name: Jack Link’s Beef Jerky, Teriyaki, 16 Ounce | Price: $ 14

    ID: 9  | Name: The North Face Vault Backpack | Price: $ 55

    ID: 10  | Name: Pop-Tarts Breakfast Toaster Pastries | Price: $ 3

    -----------------------------------------------------

? What is the ID of the product you would like to buy?
```
