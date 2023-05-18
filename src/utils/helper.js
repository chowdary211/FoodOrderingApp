export function filterData(searchText, allRestaurants) {
  return allRestaurants.filter((x) =>
    x.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
}
