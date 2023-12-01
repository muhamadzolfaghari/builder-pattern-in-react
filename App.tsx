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
