import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./Productcontex";
import PageNavigation from "./PageNavigation";
import MyImage from "./MyImage";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import AddToCart from "./AddToCart";
import { FallingLines } from  'react-loader-spinner';


const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alais,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    image,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div className="loader"
      ><FallingLines
      color="#5B9A8B"
      width="100"
      visible={true}
      ariaLabel='falling-lines-loading'
    /></div>
    )
  }
  return (
    <>
    <PageNavigation title={name} />
    <div className="singleProCon">
    <div className="product-images">
      <MyImage imgs={image} />
      </div>
      {/* <div className="img2"></div> */}
      <div className="product-details">
        <h2 style={{marginBottom:"10px"}}>{name}</h2>
        <p>{stars} Reviews({reviews})</p>
        <p>MRP.₹{price}</p>
<p>{description}</p>
<div className="iconP">
<div className="TB">
  <TbTruckDelivery className="TbTruckDelivery" />
  <p>Free Delivery</p>
  </div>
<div className="T2">
  <TbReplaceFilled className="TbReplaceFilled"/>
  <p>30 Days Replacement</p>
</div>
<div className="t3">
<MdOutlineSecurity className="MdOutlineSecurity"/>
<p>2 Year Warrenty</p>
</div>
      </div>
      <div className="stock">
      <p>Available: </p>{stock > 0 ? "In Stock" : "Not Available"}
      </div>
      <div className="stock">
        <p>ID: </p> {id}
      </div>
      <div className="stock">
        <p>Brand:</p> {company}
      </div>
      <hr/>
      <div className="colo">
{stock > 0 &&  <AddToCart product={singleProduct}/>}
      </div>
      </div>
</div>
      </>
  );
};
export default SingleProduct;