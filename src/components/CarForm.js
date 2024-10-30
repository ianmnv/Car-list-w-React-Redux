import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  });

  function submitHandler(e) {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={submitHandler}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={(e) => dispatch(changeName(e.target.value))}
            />
          </div>
          <div className="field">
            <label htmlFor="cost" className="label">
              Cost
            </label>
            <input
              type="number"
              className="input is-expanded"
              value={cost}
              onChange={(e) => dispatch(changeCost(e.target.value))}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Add Car</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
