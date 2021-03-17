import Vuex from 'vuex';
import products from "./modules/products"
import cart from "./modules/cart"
import { alert } from "./modules/alert";
import { account } from "./modules/account";

export default new Vuex.Store({
  modules: {
    products,
    cart,
    account,
    alert,
  }
});
