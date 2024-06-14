import { Form } from "./Form";

const CreateTasksForm = () => {
  const saveInputHandler = (enteredInput) => {
    const data = {
      ...enteredInput,
    };
    console.log(data);
  };
  return <Form text="Create" onAdd={saveInputHandler} />;
};

export default CreateTasksForm;

export function loader() {}
