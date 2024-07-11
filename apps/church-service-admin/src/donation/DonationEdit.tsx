import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DonationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="donorName" source="donorName" />
        <DateTimeInput label="donationDate" source="donationDate" />
        <NumberInput label="amount" source="amount" />
      </SimpleForm>
    </Edit>
  );
};
