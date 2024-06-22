import { taskProps } from "@/types";
import React from "react";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { FaTrash } from "react-icons/fa";

import * as actions from "@/actions";
const DeleteTask = ({ task }: { task: taskProps }) => {
  return (
    <Form action={actions.deleteTask}>
      <Input type="hidden" name="inputId" value={task.id}></Input>
      <Button
        actionButton
        type="submit"
        bgColor="bg-red-400"
        text={<FaTrash />}
      ></Button>
    </Form>
  );
};

export default DeleteTask;
