// Directive to create the product
import productImage from './product-image';
import subscriptionSelector from './subscription-selector';
import subscriptionsList from './subscriptions-list';
import subscriptionsBuy from './subscription-buy';
import subscriptionsRecap from './subscription-recap';
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
