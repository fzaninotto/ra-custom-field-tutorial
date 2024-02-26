import { ListGuesser, EditGuesser } from "react-admin";
import PhotoIcon from "@mui/icons-material/Photo";

export default {
  list: ListGuesser,
  edit: EditGuesser,
  recordRepresentation: "reference",
  icon: PhotoIcon,
  options: { label: "Poster |||| Posters" },
};
