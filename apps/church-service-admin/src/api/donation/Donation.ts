export type Donation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  donorName: string | null;
  donationDate: Date | null;
  amount: number | null;
};
