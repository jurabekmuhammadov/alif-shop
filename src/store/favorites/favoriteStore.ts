import { loadFromLocalStorage } from "@/hooks/localstorage";
import { ProductType } from "@/types/productTypes";
import { create } from "zustand";

const FavoriteStore = (set: any) => ({
    favorites: loadFromLocalStorage("favorite") ?? [],
    addToFavorite: (product: ProductType) => {
        set((state: any) => {
            const newFavorite = [...state.favorites, product];
            localStorage.setItem("favorite", JSON.stringify(newFavorite));
            return { favorites: newFavorite };
        });
    },
    removeFromFavorite: (productId: number) => {
        set((state: any) => {
            const newFavorite = state.favorites.filter((item: ProductType) => item.id !== productId);
            localStorage.setItem("favorite", JSON.stringify(newFavorite));
            return { favorites: newFavorite };
        });
    }
});


const useFavoriteStore = create(FavoriteStore)
export default useFavoriteStore;