import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { carList, name } = useSelector(
    ({ form, cars: { searchTerm, carsList } }) => {
      return {
        carList: carsList.filter((car) =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        name: form.name,
      };
    }
  );

  const renderCars = carList.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
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
