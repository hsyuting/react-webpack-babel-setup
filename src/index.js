import sum from "./sum.js";
import _ from "lodash";
let arr = [0, 1, false, 2, "", 3];
_.compact(arr);
console.log(arr);

module.hot.accept();
