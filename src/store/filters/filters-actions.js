import { SET_FILTER } from "./filters-consts";

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter
});