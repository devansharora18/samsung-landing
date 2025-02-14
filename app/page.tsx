"use client";

import HomePage from "./components/Home";
import RecommendedProducts from "./components/RecommendedProducts";
import Shop from "./components/Shop";


export default function Home() {
  return (
    <div>
		<HomePage />
		<Shop />
		<RecommendedProducts />
	</div>
  );
}
