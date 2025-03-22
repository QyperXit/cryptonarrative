"use client";

import React, { useState } from "react";
import CategorySelector from "../components/CategorySelector";
import CryptoList from "../components/CryptoList";
import Layout from "../components/Layout";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("depin");

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <CategorySelector onCategoryChange={setSelectedCategory} />
        <div className="mt-6">
          <CryptoList category={selectedCategory} />
        </div>
      </div>
    </Layout>
  );
}
