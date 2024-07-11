import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FaqCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="question" source="question" />
        <TextInput label="answer" multiline source="answer" />
      </SimpleForm>
    </Create>
  );
};
