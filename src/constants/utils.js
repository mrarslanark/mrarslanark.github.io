import moment from "moment";

export const formatTimestamp = (timestamp) => {
  return moment(timestamp).format("MMMM d, YYYY");
};

export const joinToString = (arr) => {
  return arr
    .map((item, index) => {
      if (index === arr.length - 1) {
        return `and ${item}`;
      } else {
        return item;
      }
    })
    .join(", ");
};
