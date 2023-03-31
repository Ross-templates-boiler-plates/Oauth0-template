import { fetchData } from "./util/fetchData";
//or import * as fetch from "./util/fetchData"; not change on test code
export const main2 = async () => {
  const res = await fetchData(); //fetch.fetchData()
  console.log("***************", res);
  return res;
};

main2();
