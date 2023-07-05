import PlaceImage from "./PlaceImage";

function Place(place) {
  return (
    <div className="">
      <PlaceImage place={place} />
      <div>
        <h6>{place.place.name}</h6>
        <p>{place.place.description}</p>
      </div>
    </div>
  );
}

export default Place;
