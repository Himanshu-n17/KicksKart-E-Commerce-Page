import "./Category.css";

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <input value="sneakers" title="Sneakers" name="test" />
        <input value="flats" title="Flats" name="test" />
        <input value="sandals" title="Sandals" name="test" />
        <input value="heels" title="Heels" name="test" />
      </div>
    </div>
  );
};

export default Category;
