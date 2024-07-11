import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DonationWhereInput = {
  id?: StringFilter;
  donorName?: StringNullableFilter;
  donationDate?: DateTimeNullableFilter;
  amount?: FloatNullableFilter;
};
