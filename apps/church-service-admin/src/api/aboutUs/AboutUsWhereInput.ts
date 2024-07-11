import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AboutUsWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  history?: StringNullableFilter;
};
