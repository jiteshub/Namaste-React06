export function filterData(Search, Restaurant) {
  const filterData = Restaurant.filter((Restaurant) =>
    Restaurant?.info?.name.toLowerCase().includes(Search.toLowerCase())
  );
  return filterData;
}

