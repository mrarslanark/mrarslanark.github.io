import dayjs from "dayjs";

export const formatTimestamp = (timestamp: string): string => {
  return dayjs(timestamp).format("MMMM D, YYYY");
};

export const releasePrefix = (timestamp: string): string => {
  return dayjs(timestamp).isAfter(new Date()) ? "Releases on " : "Released on ";
};

export const stackTitleGenerator = (key: string): string => {
  switch (key) {
    case "fe":
      return "front-end";
    case "be":
      return "back-end";
    case "cs":
      return "cloud services";
    default:
      return key;
  }
};
