export default {
    namespaced: true,

    state: {
        products: [],
        showModal: false,
        showPopupCart: false,
        currentProduct: {},
    },

    getters: {
        getAllProducts: state => state.products,
        getCurrentProduct: state => state.currentProduct,
        getProductById: (state) => (id) => { return state.products.find(product => product.id == id); },
        getImgUrl: (state) => (id) => { return require('../../assets/images/' + state.products.find(product => product.id == id).img); },
    },

    mutations: {
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product;
        },
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
        },
        SHOW_POPUP_CART: (state) => {
            state.showPopupCart = !state.showPopupCart;
        },
        SAVE_PRODUCTS: (state, products) => {
            state.products = products;
        }
    },

    actions: {
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
        },
        showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
        },
        showOrHiddenPopupCart: (context) => {
            context.commit('SHOW_POPUP_CART');
        },
        loadAllProducts: (context, products) => {
            context.commit('SAVE_PRODUCTS', products);
        }
    }
}