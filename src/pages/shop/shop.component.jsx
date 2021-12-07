import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";
import { Route, Routes } from "react-router";

const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route exact path="/" element={<CollectionsOverview />}>
        <Route path="hats" element={<CategoryPage />} />
      </Route>
    </Routes>
  </div>
);

export default ShopPage;
