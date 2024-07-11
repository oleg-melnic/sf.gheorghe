import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DonationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="donorName" source="donorName" />
        <DateTimeInput label="donationDate" source="donationDate" />
        <NumberInput label="amount" source="amount" />
      </SimpleForm>
    </Create>
  );
};
