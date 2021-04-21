export const randNumgenerator = () => {
  let min = Math.ceil(1);
  let max = Math.floor(9);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
