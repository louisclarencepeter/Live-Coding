import places from "../../assets/places";
import Place from "./Place";

function List() {
  return (
    <ul className="list-group m-3">
      {places.map(place => {
        return (
          <li key={place.id} className="list-group-item">
            <Place place={place} />
          </li>
        );
      })}
    </ul>
  );
}

export default List;

