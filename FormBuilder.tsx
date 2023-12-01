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
