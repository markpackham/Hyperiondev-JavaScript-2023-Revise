const returnName = () => {
  return "spinel";
};
const asyncArrowFunction = async () => {
  let myName = await returnName();
  console.log(myName);
};
asyncArrowFunction();
