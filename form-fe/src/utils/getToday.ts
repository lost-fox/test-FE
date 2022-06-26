export const getToday = () => {
  const data = new Date();
  return `${data.getFullYear()}-${
    data.getMonth() + 1 < 10
      ? "0" + `${data.getMonth() + 1}`
      : data.getMonth() + 1
  }-${data.getDate() < 10 ? "0" + data.getDate() : data.getDate()}`;
};
