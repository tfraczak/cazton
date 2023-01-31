export const formatResponseData = (data) => {
  const formattedData = {};
  data.forEach((datum) => formattedData[datum.id] = datum);
  return formattedData;
};