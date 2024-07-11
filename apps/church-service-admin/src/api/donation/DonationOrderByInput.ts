import { SortOrder } from "../../util/SortOrder";

export type DonationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  donorName?: SortOrder;
  donationDate?: SortOrder;
  amount?: SortOrder;
};
