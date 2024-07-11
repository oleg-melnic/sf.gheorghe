import { Donation as TDonation } from "../api/donation/Donation";

export const DONATION_TITLE_FIELD = "donorName";

export const DonationTitle = (record: TDonation): string => {
  return record.donorName?.toString() || String(record.id);
};
