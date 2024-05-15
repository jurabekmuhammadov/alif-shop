"use client"
import CategoriesBar from "@/components/categories-bar";
import Discounts from "@/components/discounts";
import Hero from "@/components/hero";
import NewFromInfinix from "@/components/new-from-infinix";
import SeasonIsComing from "@/components/season-is-coming";
import SummerIsComming from "@/components/summer-is-comming";
import YouMayInterest from "@/components/you-may-interest";

export default function Home() {

  return (
    <>
      <CategoriesBar />
      <Hero />
      <Discounts />
      <YouMayInterest />
      <SummerIsComming />
      <SeasonIsComing />
      <NewFromInfinix />
    </>
  );
}
