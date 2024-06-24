"use client";
import * as actions from "@/actions";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";
import Notiflix from "notiflix";

const AddTodo = () => {
  const handleSubmit = async (formData: FormData) => {
    const response = await actions.createTodo(formData);
    if (response?.status === "201") {
      Notiflix.Notify.success("New Board for task added succesfully");
    } else {
      Notiflix.Notify.failure("Somethihg went wrong");
    }
  };
  return (
    <div>
      <Form action={handleSubmit}>
        <div className="flex gap-4 items-center">
          <Input
            name="input"
            type="text"
            placeholder="Add Todo_Board Here..."
            maxLength={20}
          />
          <Button
            type="submit"
            text="Add"
            bgColor="bg-blue-600 hover:bg-blue-500"
          />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
