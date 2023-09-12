function returnNameFunction() {
  return "spinel";
}
async function asyncFunction() {
  let myName = await returnNameFunction();
  console.log(myName);
}
asyncFunction();
