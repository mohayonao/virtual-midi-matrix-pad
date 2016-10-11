import nmap from "nmap";
import { NUMBER_OF_ROWS, NUMBER_OF_COLS } from "./constants";

export default {
  data: nmap(NUMBER_OF_ROWS, () => nmap(NUMBER_OF_COLS, () => 0)),
};
