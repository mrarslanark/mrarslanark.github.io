import moment from "moment";

export const formatTimestamp = (timestamp) => {
    return moment(timestamp).format("MMMM YYYY");
};