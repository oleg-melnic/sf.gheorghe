import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FaqWhereInput = {
  id?: StringFilter;
  question?: StringNullableFilter;
  answer?: StringNullableFilter;
};
