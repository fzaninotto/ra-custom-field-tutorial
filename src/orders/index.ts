import PaidIcon from "@mui/icons-material/Paid";
import { OrderList } from "./OrderList";
import { OrderEdit } from "./OrderEdit";
import { OrderShow } from "./OrderShow";

export default {
  list: OrderList,
  edit: OrderEdit,
  show: OrderShow,
  recordRepresentation: "reference",
  icon: PaidIcon,
  options: { label: "Order |||| Orders" },
};
