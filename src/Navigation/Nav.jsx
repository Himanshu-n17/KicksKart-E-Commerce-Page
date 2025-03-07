import "./Nav.css";
const nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter Your Preferred Shoes"
        />
      </div>
    </nav>
  );
};

export default nav;
