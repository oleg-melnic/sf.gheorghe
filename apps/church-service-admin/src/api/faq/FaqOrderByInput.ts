import { SortOrder } from "../../util/SortOrder";

export type FaqOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  question?: SortOrder;
  answer?: SortOrder;
};
