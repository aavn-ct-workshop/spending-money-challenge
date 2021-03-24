import _remove from 'lodash/remove';

export default {
    namespaced: true,

    state: {
        products: []
    },

    getters: {
        getAllProducts: state => {
            if (state.products.length === 0 && localStorage.selectedProducts) {
                state.products = JSON.parse(localStorage.selectedProducts);
            }
            return state.products;
        }
    },

    mutations: {
        ADD_PRODUCT: (state, product) => {
            const existingProduct = state.products.find(existingProduct => existingProduct.id === product.id);
            if (existingProduct) {
                existingProduct.number++;
            } else {
                product.number = 1;
                state.products.push(product)
            }
        },
        REMOVE_PRODUCT: (state, index) => {
            state.products.splice(index, 1);
        },
        REMOVE_PRODUCT_BY_NAME: (state, name) => {
            _remove(state.products, i => i.name === name);
        },
        STORE_TO_STORAGE: (state) => {
            //localStorage.selectedProducts = JSON.stringify(state.products);
            console.log(state);
        }
    },

    actions: {
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
            context.commit('STORE_TO_STORAGE');
        },
        removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
            context.commit('STORE_TO_STORAGE');
        },
        removeProductByName: (context, name) => {
            context.commit('REMOVE_PRODUCT_BY_NAME', name);
            context.commit('STORE_TO_STORAGE');
        }
    }
}