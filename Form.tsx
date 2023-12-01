import { Fragment } from "react";

interface Field {
  label: string;
  placeholder: string;
  type: "text" | "password";
}

interface Props {
  fields: Field[];
}

const Form = ({ fields }: Props) => (
  <form>
    {fields.map((field, index) => (
      <Fragment key={index}>
        <label>{field.label}</label>
        <input type={field.type} placeholder={field.placeholder} />
      </Fragment>
    ))}
  </form>
);

export default Form;
