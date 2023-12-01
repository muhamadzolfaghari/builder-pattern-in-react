# builder-pattern-in-react
An example of Creational Design Pattern for Builder Pattern in React

The significant role is to create a complex object step by step with a variety of types, which at last there is a created structure.

Such as an application installer which allows us to install the app by wizard steps which we can choose what we want to install or select a location.

At this here we are going to create a dynamic form with builder pattern.

This example is only focused on the design pattern, and any logic for working with form is not provided.

## This dynamic form creates input by fields prop

```ts
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
```

## This class provide a way to config the builder
```ts
import Form from "./Form";

interface Field {
  label: string;
  placeholder: string;
  type: "text" | "password";
}

export default class FormBuilder {
  fields: Field[] = [];

  addTextField(label: string, placeholder: string) {
    this.fields.push({ type: "text", label, placeholder });
    return this;
  }

  addPasswordField(label: string, placeholder: string) {
    this.fields.push({ type: "password", label, placeholder });
    return this;
  }

  build() {
    return <Form fields={this.fields} />;
  }
}
```

## Using FormBuilder to have a form with username and password text fields

```ts
import FormBuilder from "./FormBuilder";

const form = new FormBuilder()
  .addTextField("username", "Enter username")
  .addPasswordField("password", "Enter password")
  .build();

const App = () => (
  <>
    <p>Login Form</p>
    {form}
  </>
);

export default App;
```
