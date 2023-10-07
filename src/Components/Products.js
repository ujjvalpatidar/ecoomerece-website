import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import Sort from "./Sort";
// import { useFilterContext } from "./FilterContext";

const Products = () => {
  return (
    <>
      <div className="container-grid-grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </>
  );
};
export default Products;