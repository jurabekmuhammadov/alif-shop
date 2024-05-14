"use client"
import CategoriesBar from "@/components/categories-bar";
import Discounts from "@/components/discounts";
import Hero from "@/components/hero";
import YouMayInterest from "@/components/you-may-interest";

export default function Home() {

  return (
    <>
      <CategoriesBar />
      <Hero />
      <Discounts />
      <YouMayInterest />
    </>
  );
}
