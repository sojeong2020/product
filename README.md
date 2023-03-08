Develop a simple shopping Application using Angular 13 
---
## Features 

  * Usage of service
  * RxJS BehaviourSubject
  * Modulity
  * CSS / flex /  Material UI
  * Responsive design

## Design Structure
  * Create Core module, feature module, and shred module.
  * Reuse Components : Header component and recentlViewdProduct component can be shared in the other components.
  * Create cart service that is reused and accessed in other components.

## Functionalities
 1. Display a list of products. 
 2. When user clicks a product in the list, page navigates to a single product detail page.
 3. When user clicks a button "Add to cart", show count of the number of products in the shopping cart and navigate to shopping cart page.
 4. Show a list of recently viewd products.

## Extra Functionalities
1. The cart items can be removed.
2. Total cost of shopping cart items are calculated on updates in shopping cart items.
3. Display total number of products at the top of the list of products page.
4. Display number of items in the cart.
5. Clear cart items at once.
6. Filter items in basket to prevent repeated clicks of "Add to button" displaying the same item multiple times.


## Improvement
* Create a function to add product quantity in the shopping cart.
* Track a list of recently viewed products after refreshing page.
* Use global style CSS.

## View

<img src="/src/assets/images/cart1.png" width="400" > <img src="/src/assets/images/detail.png" width="400" >

