import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../collection/collection.component";
import { Route } from "react-router-dom";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
