import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData;

  return (
    <div className="res-card">
      <div className="imgBx">
        <img
          src={CDN_URL + cloudinaryImageId
          }
          alt="Image"
          className="res-img"
        />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>Distance: {sla?.slaString}</h4>
        <h4>Rating: {avgRating}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
