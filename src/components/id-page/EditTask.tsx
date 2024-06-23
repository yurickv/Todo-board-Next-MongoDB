"use client";

import * as actions from "@/actions";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import Modal from "./ModalWindow";
import { useState } from "react";
import { taskProps } from "@/types";

const EditTask = ({ task }: { task: taskProps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <Button
        onClick={handleEdit}
        text="Edit"
        bgColor="text-slate-900 hover:bg-slate-100 w-full text-left text-[15px]"
      />
      <Modal isOpen={isModalOpen} onClose={handleClose}>
        <Form action={actions.editTask} onSubmit={handleSubmit}>
          <Input name="inputId" value={task.id} type="hidden" />
          <div className="flex flex-col text-slate-900">
            <p className="mb-2">New title</p>
            <Input
              type="text"
              name="newTitle"
              placeholder="Edit Task Title..."
              maxLength={20}
            />
            <p className="mb-2 mt-6">New description</p>
            <Input
              type="text"
              name="newDescription"
              placeholder="Edit Task Description..."
              maxLength={100}
            />
            <Button
              type="submit"
              text="Save"
              bgColor="bg-blue-600 hover:bg-blue-500 mt-4 text-gray-50"
            />
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default EditTask;
