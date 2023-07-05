import getImageUrl from "../../utils/getImageUrl";
import { useContext } from "react";
import ImageSizeContext from "../context/ImageSiteConetext";

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);

  return <img src={getImageUrl(place)} alt={place.name} width={imageSize} />;
}

export default PlaceImage;
