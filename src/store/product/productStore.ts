import axios from "axios";
import { create } from "zustand"

const productStore = (set: any) => ({
    products: [],
    loading: true,
    error: null,
    fetchProducts: async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products")
            const data = await res.data;
            set(() => ({
                products: data.products
            }));
        } catch (err) {
            set(() => ({
                error: (err as Error).message
            }));
        } finally {
            set(() => ({
                loading: false,
            }));
        }
    }
})

const useProductStore = create(productStore);

export default useProductStore