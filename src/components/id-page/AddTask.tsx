import * as actions from "@/actions";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";
import { todoProps } from "@/types";

const AddTask = ({ todo }: { todo: todoProps }) => {
  return (
    <div>
      <Form action={actions.createTask}>
        <div className="flex gap-4 items-center">
          <Input
            name="inputTitle"
            type="text"
            placeholder="Title..."
            maxLength={20}
          />
          <Input
            name="inputDescription"
            type="text"
            placeholder="Description..."
            maxLength={100}
          />
          <Input type="hidden" name="inputId" value={todo.id}></Input>

          <Button
            type="submit"
            text="Add task"
            bgColor="bg-blue-600 hover:bg-blue-500"
          />
        </div>
      </Form>
    </div>
  );
};

export default AddTask;
