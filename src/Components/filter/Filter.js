import { connect } from "react-redux";
import { setFilter } from "../../redux/products/productsActions";
import { getFilterValue } from "../../redux/products/productSelectors";

const Filter = (filterValue, setFilter) => {
  return (
    <label>
      Filter{" "}
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={(e) => setFilter(e.target.value)}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  filterValue: getFilterValue(state),
});

export default connect(mapStateToProps, { setFilter })(Filter);
