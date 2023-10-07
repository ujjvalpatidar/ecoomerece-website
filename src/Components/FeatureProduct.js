import { useProductContext } from "./Productcontex"
import Product from "./Product";

const FeatureProduct = () => {
    const { isLoading, featureProducts } = useProductContext();

    if (isLoading) {
        return <div>.....Loading</div>;
    }
  return (
   <>
    <div className="featureCon">
        <div>
        <p>CHECK NOW</p>
        <h3>Our Feature Services</h3>
        </div>
        <div className="girdThreeColum">
            {
                featureProducts.map((curElem) => {
                    return <Product key={curElem.id} {...curElem} />
                })
            }
        </div>
    </div>
   </>
  );
}

export default FeatureProduct;