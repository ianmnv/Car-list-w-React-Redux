import { useDispatch, useSelector } from "react-redux";
import { changeTerm } from "../store/slices/carsSlice";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  return (
    <div className="list-header">
      <h3 className="title is-3">My cars</h3>
      <div className="search field is-horizontal">
        <label htmlFor="searchTerm" className="label">
          Search
        </label>
        <input
          value={searchTerm}
          onChange={(e) => {
            dispatch(changeTerm(e.target.value));
          }}
          type="text"
          className="input"
        />
      </div>
    </div>
  );
}

export default CarSearch;
