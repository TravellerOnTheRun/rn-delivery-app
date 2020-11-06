import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CHANGE_ORDER_TYPE,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  ADD_PRODUCTS_AFTER_FETCHING,
  CHANGE_PAYMENT_METHOD,
} from './actions';

import { products } from '../data/data';

const initialState = {
  token: null,
  orderData: {
    userId: null,
    products: [],
    address: '',
    orderType: 'delivery',
    totalAmount: 0,
    paymentMethod: 'credit card',
  },
  products: products,
  userData: {
    name: 'Adam Lambert',
    phoneNumber: '+79235955644',
    imgUrl:
      'https://3.bp.blogspot.com/-7katD31SEzc/VsDYI-UFqCI/AAAAAAAAH5Y/p87Z1jxO3j8/s1600/tumblr_o2jjtagYgc1sh0vhho6_1280.jpg',
    addresses: [
      {
        name: 'Home',
        address: '90 Bedford St., New York, NY 10014',
      },
      {
        name: 'Work',
        address: '78 Hollywood St., Los Angeles, CA 76777',
      },
      {
        name: "Friend's place",
        address: '69 SexEd St., London, the Capital Of Great Britain',
      },
    ],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_AFTER_FETCHING:
      return {
        ...state,
        products: action.products,
      };
    case ADD_PRODUCT_TO_CART:
      const { products, totalAmount } = state.orderData;
      const updatedProducts = products.concat(action.product);
      return {
        ...state,
        orderData: {
          ...state.orderData,
          products: updatedProducts,
          totalAmount: totalAmount + action.product.price.count,
        },
      };
    case REMOVE_PRODUCT_FROM_CART:
      const product = state.orderData.products.filter(
        (p) => p.productId === action.productId
      )[0];
      console.log('[product]: ', product);
      return {
        ...state,
        orderData: {
          ...state.orderData,
          products: state.orderData.products.filter((p) => {
            return p.productId !== action.productId;
          }),
          totalAmount:
            state.orderData.totalAmount -
            product.price.count * product.quantity,
        },
      };
    case CHANGE_ORDER_TYPE:
      return {
        ...state,
        orderData: {
          ...state.orderData,
          orderType: action.orderType,
        },
      };
    case CHANGE_PAYMENT_METHOD:
      return {
        ...state,
        orderData: {
          ...state.orderData,
          paymentMethod: action.paymentMethod,
        },
      };
    case ADD_QUANTITY:
      console.log('[productId]:', action.productId);
      let productPrice;
      return {
        ...state,
        orderData: {
          ...state.orderData,
          products: state.orderData.products.map((p) => {
            if (p.productId === action.productId) {
              productPrice = p.price.count;
              return {
                ...p,
                quantity: p.quantity + 1,
              };
            }
            return p;
          }),
          totalAmount: state.orderData.totalAmount + productPrice,
        },
      };
    case SUBTRACT_QUANTITY:
      return {
        ...state,
        orderData: {
          ...state.orderData,
          products: state.orderData.products.map((p) => {
            if (p.productId === action.productId) {
              productPrice = p.price.count;
              return {
                ...p,
                quantity: p.quantity - 1,
              };
            }
            return p;
          }),
          totalAmount: state.orderData.totalAmount - productPrice,
        },
      };
    default:
      return state;
  }
};
