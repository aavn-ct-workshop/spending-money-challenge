# Vue.js Workshop Challenge

Thanks for joining first session of the Vue.js workshop, we was all together learn some basic about Vue.js, how to define component, how to get started with this new language. In this challenge, we will step by step finish a very small app. So let's do it.

## Spending money app
Here is app we're going to build with 2 pages and following features:
* **First page** (Product list):
  * *Display all the products*, each product item have *add to cart button*. 
  * When an item is added to cart, *display it on the shopping cart*.
  * Items in cart can be removed.
  * *Cart total* must be updated after cart items change (item add / item remove)
* When click a product in product list, app should navigate to **second page** (Product detail):
  * *Display product detail* & shopping cart.  

![product list](docs/spending_money.png)  
![product detail](docs/spending_money_2.png)

## Setup workspace
### Checkout code at repository: 
https://github.com/aavn-ct-workshop/spending-money-challenge

### Account for testing: *test1/test1, test2/test2*

### Project structure
The Workshop Team was initialized the project for you, you can follow Vue official documentation & project READ ME to start develop.
```
/
    src/
        components/         # component definitions. e.g: ShoppingCart.vue, ProductDetail.vue,..
        store/              # manage states of the app using VueX. Read more at https://vuex.vuejs.org/guide/ 
            index.js
            modules/
        App.vue             # root vue instance
        main.js             # the main entrypoint which let the app start
        routes.js           # define routers of the app, how pages navigate to each others.

```

### Hint 1: Component design
From workshop team, we split the page into smaller reusable Vue components, such as: ProductItem component, ShoppingCart component,..  
You're free to design your own component structure to archieve the requirements above. The team with well project structure, cover more requirements have a change to get a little gift from organizer. 
![spending money component](docs/spending_money_component.jpg)

### Hint 2: Using backend data
The pre-built application is using fake data, implement to make call to backend service is a plus. As the workshop team, we provide 2 to get list of product and user.  
https://spending-money-backend.herokuapp.com/api/products  
https://spending-money-backend.herokuapp.com/api/users  

**Timebox: Now - 6PM 22nd March 2021**  
Let's build the great app together! If any further question, you can contact directly your supporter.

Thanks & regards,  
The Workshop Team.