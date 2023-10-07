import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <>
    <div className="section">
      <div className="container-gridq">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="love">
              <figure>
                <img src={image} alt={name} />
              </figure>

              <div className="card-datal">
                <h3>{name}</h3>
                <p>
                 price={price} 
                </p>
                <p>{description.slice(0, 90)}...</p>
                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <button>Read More</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default ListView;