import "./Recommended.css";

const Recommended = () => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button value="abcd" title="All Products">
            All Products
          </button>
          <button value="Nike" title="Nike">
            Nike
          </button>
          <button value="Adidas" title="Adidas">
            Adidas
          </button>
          <button value="Puma" title="Puma">
            Puma
          </button>
          <button value="Vans" title="Vans">
            Vans
          </button>
        </div>
      </div>
    </>
  );
};
export default Recommended;
