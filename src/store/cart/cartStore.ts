import { create } from 'zustand';
import { loadFromLocalStorage } from '@/hooks/localstorage';
import { ProductType } from '@/types/productTypes';

type CartItemType = ProductType & { quantity: number };

interface CartState {
    cart: CartItemType[];
    addToCart: (product: ProductType) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    removeFromCart: (productId: number) => void;
}

const useCartStore = create<CartState>((set) => ({
    cart: loadFromLocalStorage("cart") ?? [],

    addToCart: (product: ProductType) => {
        set((state) => {
            const existingProduct = state.cart.find((item) => item.id === product.id);
            let newCart;
            if (existingProduct) {
                newCart = state.cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                newCart = [...state.cart, { ...product, quantity: 1 }];
            }
            localStorage.setItem("cart", JSON.stringify(newCart));
            return { cart: newCart };
        });
    },

    updateQuantity: (productId: number, quantity: number) => {
        set((state) => {
            const newCart = state.cart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            );
            localStorage.setItem("cart", JSON.stringify(newCart));
            return { cart: newCart };
        });
    },

    removeFromCart: (productId: number) => {
        set((state) => {
            const newCart = state.cart.filter((item) => item.id !== productId);
            localStorage.setItem("cart", JSON.stringify(newCart));
            return { cart: newCart };
        });
    }
}));

export default useCartStore;
