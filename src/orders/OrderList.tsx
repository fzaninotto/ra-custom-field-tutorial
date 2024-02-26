import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CustomerField } from "../customers/CustomerField";

export const OrderList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="reference" />
      <DateField source="date" />
      <ReferenceField source="customer_id" reference="customers" link="show">
        <CustomerField />
      </ReferenceField>
      <NumberField source="basket.length" label="Nb items" />
      <NumberField
        source="total_ex_taxes"
        options={{ style: "currency", currency: "EUR" }}
      />
      <NumberField
        source="delivery_fees"
        options={{ style: "currency", currency: "EUR" }}
      />
      <NumberField
        source="taxes"
        options={{ style: "currency", currency: "EUR" }}
      />
      <NumberField
        source="total"
        options={{ style: "currency", currency: "EUR" }}
      />
      <TextField source="status" />
      <BooleanField source="returned" />
    </Datagrid>
  </List>
);
