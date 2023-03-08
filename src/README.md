## Task
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
  * Reuse Components : Header component and recentlViewdProduct component are shared in the other components.
  * Create cart service so that reuse and access in other components.

## Functionalities
 1. Display a list of products 
 2. When user click a product in the list, navigated to a single product detail page
 3. Show a count of the number of product in the shoping cart, when user click a button "Add to cart", and navigated to shopping cart page
 4. Show a list of recently viewd products

## Extra Functionalities
1. The cart items can be removed.
2. Total cost of shopping cart items are calculated on updates in shopping cart items.
3. Display total number of products on the top in the list of product page.
4. Show number how many items in the cart.
5. Clear cart items at once
6. Show cart item only one time even though click "Add to button" over twice.


## Improvement
* Create a function to add product quantity in the shopping cart.
* Track a list of recently viewed products after refreshing page
* Use global style CSS

## View
![GitHub Logo](/images/cart1.png)
![GitHub Logo](/images/cart2.png)