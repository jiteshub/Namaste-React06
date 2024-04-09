import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [Restaurantlist, setRestaurantlist] = useState([]);

  const[filterRestaurant,setfilterRestaurant] = useState([]);

  const [Search, setSearch] = useState("");
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"

    );
    const json = await data.json();
    console.log(json)

  setRestaurantlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setfilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  
  return Restaurantlist.length === 0 ? <Shimmer/>:(
    <div className="body">
      <div className="featutres">
        <div className="filter">
          <button
            className="filterbtn"
            onClick={() => {
              const filterRes = filterRestaurant.filter(
                (res) => res?.info?.avgRating > 4,
              );
              setfilterRestaurant(filterRes);
            }}
          >
            Top rating Restaurant
          </button>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name"
            value={Search} 
            className="search-input"
            id="form"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button className="search-btn" onClick={()=>{
            const filterlist = Restaurantlist.filter(
              (res)=> res.info.name.toLowerCase().includes(Search.toLowerCase())
            );
            setfilterRestaurant(filterlist)
          }}>Search</button>
        </div>
      </div>

      <div className="res-container">
        {filterRestaurant.map((Restaurant) => (
          <RestaurantCard key={Restaurant?.info.id} resData={Restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
