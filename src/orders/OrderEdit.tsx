import {
  ArrayInput,
  AutocompleteInput,
  BooleanInput,
  DateInput,
  Edit,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";
import { Stack } from "@mui/material";

export const OrderEdit = () => (
  <Edit>
    <SimpleForm sx={{ maxWidth: 600 }}>
      <TextInput source="reference" fullWidth />
      <DateInput source="date" fullWidth />
      <ReferenceInput source="customer_id" reference="customers">
        <AutocompleteInput fullWidth />
      </ReferenceInput>
      <ArrayInput source="basket">
        <SimpleFormIterator inline>
          <ReferenceInput source="product_id" reference="products">
            <AutocompleteInput sx={{ width: 250 }} helperText={false} />
          </ReferenceInput>
          <NumberInput source="quantity" helperText={false} />
        </SimpleFormIterator>
      </ArrayInput>
      <Stack direction="row" gap={1}>
        <NumberInput source="total_ex_taxes" />
        <NumberInput source="delivery_fees" />
        <NumberInput source="tax_rate" />
        <NumberInput source="taxes" />
        <NumberInput source="total" />
      </Stack>
      <Stack direction="row" gap={2} alignItems="center">
        <TextInput source="status" />
        <BooleanInput source="returned" />
      </Stack>
    </SimpleForm>
  </Edit>
);
