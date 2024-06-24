"use client";
import { taskProps } from "@/types";
import React from "react";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import Notiflix from "notiflix";

import * as actions from "@/actions";
const DeleteTask = ({ task }: { task: taskProps }) => {
  const handleSubmit = (formData: FormData) => {
    Notiflix.Confirm.show(
      "Confirm Delete",
      "Do you really wont delete task?",
      "Yes",
      "No",
      async function okCb() {
        const response = await actions.deleteTask(formData);
        if (response?.status === "200") {
          Notiflix.Notify.success("Task deleted succesfully");
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
      <Input type="hidden" name="inputId" value={task.id}></Input>
      <Button
        type="submit"
        bgColor="text-red-500 hover:bg-red-100 w-full text-left text-[15px]"
        text="Delete"
      ></Button>
    </Form>
  );
};

export default DeleteTask;
