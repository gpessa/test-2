// Directive to create the product


/*
Directive to create a subscripton selector, it require a phone model id to work,
it use all the others directive to display all the informations in a proper way
and let the use chooce the appropriate subscription
*/
import subscriptionSelector from './subscription-selector';

// Directive to create the product image and handle the change of view
import productImage from './product-image';

// Create a list of subscriptions
import subscriptionsList from './subscriptions-list';

// Create the button to subscribe
import subscriptionsBuy from './subscription-buy';

// Provide a recap of the costs
import subscriptionsRecap from './subscription-recap';

// Show a small element with the phone price
import phonePrice from './phone-price';

// Initialization of modules
export default ngModule => {
  productImage(ngModule);
  subscriptionSelector(ngModule);
  subscriptionsList(ngModule);
  subscriptionsBuy(ngModule);
  subscriptionsRecap(ngModule);
  phonePrice(ngModule);
};
