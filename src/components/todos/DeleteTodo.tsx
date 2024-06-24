"use client";
import { todoProps } from "@/types";
import React from "react";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { FaTrash } from "react-icons/fa";
import Notiflix from "notiflix";

import * as actions from "@/actions";
const DeleteTodo = ({ todo }: { todo: todoProps }) => {
  const handleSubmit = (formData: FormData) => {
    Notiflix.Confirm.show(
      "Confirm Delete",
      "Do you really wont delete Board?",
      "Yes",
      "No",
      async function okCb() {
        const response = await actions.deleteTodo(formData);
        if (response?.status === "200") {
          Notiflix.Notify.success("To do board deleted succesfully");
        } else {
          Notiflix.Notify.failure("Somethihg went wrong");
        }
      },
      function cancelCb() {},
      {
        width: "320px",
        borderRadius: "8px",
      }
    );
  };
  return (
    <Form action={handleSubmit}>
      <Input type="hidden" name="inputId" value={todo.id}></Input>
      <Button
        actionButton
        type="submit"
        bgColor="bg-red-400 hover:bg-red-500"
        text={<FaTrash />}
      ></Button>
    </Form>
  );
};

export default DeleteTodo;
