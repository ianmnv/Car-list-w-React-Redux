import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.cars.carsList);

  const renderCars = carList.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => {
            dispatch(removeCar(car.id));
          }}
          className="button is-danger"
        >
          delete car
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderCars}
      <hr />
    </div>
  );
}

export default CarList;
