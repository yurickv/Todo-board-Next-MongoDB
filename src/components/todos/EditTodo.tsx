"use client";

import * as actions from "@/actions";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { useState } from "react";
import { todoProps } from "@/types";
import { MdEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const [editTodoState, setEditTodoState] = useState(false);

  const handleEdit = () => {
    setEditTodoState(!editTodoState);
  };

  const handleSubmit = () => {
    setEditTodoState(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button
        onClick={handleEdit}
        text={editTodoState ? <IoClose /> : <MdEdit />}
        bgColor="bg-slate-800 hover:bg-slate-700"
        actionButton
      />
      {editTodoState ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden"></Input>
          <div className="flex justify-center items-center gap-1">
            <Input
              type="text"
              name="newTitle"
              placeholder="Edit Todo Title..."
              maxLength={20}
            />
            <Button
              type="submit"
              text="save"
              bgColor="hover:bg-slate-700 rounded-lg"
            ></Button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
