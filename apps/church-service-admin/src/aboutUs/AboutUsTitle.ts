import { AboutUs as TAboutUs } from "../api/aboutUs/AboutUs";

export const ABOUTUS_TITLE_FIELD = "id";

export const AboutUsTitle = (record: TAboutUs): string => {
  return record.id?.toString() || String(record.id);
};
