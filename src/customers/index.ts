import { ListGuesser, ShowGuesser } from "react-admin";
import type { Customer } from "../types";

export default {
  list: ListGuesser,
  show: ShowGuesser,
  recordRepresentation: (record: Customer) =>
    `${record.first_name} ${record.last_name}`,
};
