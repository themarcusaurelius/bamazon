require("dotenv").config();

var mysql = require("mysql");
let inquirer = require("inquirer");
let chalk = require("chalk");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});


connection.connect(function(err) {
  if (err) throw err;
  console.log(chalk.cyan("connected as id " + connection.threadId + "\n"));
  console.log(chalk.cyan(`\n
    *****************************
    *** Welcome To Bamazon!! ***
    *****************************

    *****************************************************************
    The crappiest made knockoff of Amazon to ever take your money!
    *****************************************************************
    `   
));
  displayProducts()
});



function displayProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(chalk.cyan(`\n    ID: ${res[i].item_id}  | Name: ${res[i].product_name} | Price: $ ${res[i].price}`));
        }
        console.log(chalk.cyan("\n    -----------------------------------------------------\n"));
        beginOrder(res);
    })
};



function beginOrder(res) {
    inquirer.prompt([
        {
        name: "id",
        type: "input", 
        message: "What is the ID of the product you would like to buy?",
        },
        {
        name: "number",
        type: "input", 
        message: "How many units of the product would you like to buy?"   
        }
    ]).then(function (res){
        console.log(chalk.cyan(`\n     Product ID: ${res.id} \n     Quantity Requested: ${res.number}`));
        console.log(chalk.cyan(`\n     Checking Inventory...\n`));
        checkInventory(res);   
    })
    
};



function checkInventory(item) {
    connection.query('SELECT * FROM products WHERE ?', {item_id: item.id}, function(err, res) {
        if(err) throw err;
        console.log(res);
        if (res[0].stock_quantity >= (parseInt(item.number))) {
            console.log(chalk.cyan(`\n     The amount you've requested is available. \n`));
            inquirer.prompt([
                {
                name: "confirmation",
                type: "input", 
                message: "Would you like to continue with your order? (Yes, No)",
                choices: ["Yes","No"]
                },
            ]).then(function (response){
                if (response.confirmation === "Yes") {
                    console.log(chalk.cyan(`\n     Your order is processing...Calculating total cost.`));
                    processOrder(res[0].price, parseInt(item.number), res[0].item_id, res[0].stock_quantity);
                } else {
                    console.log(chalk.cyan(`\n     No problem. Check out some of our other items!`));
                    connection.end();
                }
            }).catch(function(err) {
                if (err) {
                    console.log(err);
                }
            }) 
        } else {
            console.log(chalk.cyan(`\n     We're sorry that quantity is not available! \n`));
            inquirer.prompt([
                {
                name: "confirmation",
                type: "input", 
                message: "Would you like to choose a differnt quantity or product? (Yes, No)",
                choices: ["Yes","No"]
                },
            ]).then(function (response){
                if (response.confirmation === "Yes") {
                displayProducts()
                } else {
                connection.end();
                }
            })
        }        
    })
};
   


function processOrder(price, quantity, id, previousQuantity) {
    var orderCost = parseFloat(price * quantity);
    console.log(chalk.cyan(`\n     Your order total is: $ ${orderCost.toFixed(2)}`));
    console.log(chalk.cyan(`\n     ------------------------------------------------ \n`));
    updateQuantity(id, (previousQuantity - quantity));
};



function updateQuantity(id, updatedQuantity) {
    connection.query('UPDATE products SET stock_quantity = '+ updatedQuantity +' WHERE ?', {item_id: id}, function(err, res) {
        inquirer.prompt([
            {
            name: "confirmation",
            type: "input", 
            message: "Would you like to continue shopping? (Yes, No)",
            choices: ["Yes","No"]
            },
        ]).then(function (response){
            if (response.confirmation === "Yes") {
                console.log(chalk.cyan(`\n    Ok. Let's do this! \n9`));
                displayProducts();
            } else {
                console.log(chalk.cyan(`\n     No problem. Thank you for shopping with us!`));
                connection.end();
            }
        })
        
    })
};




    
    