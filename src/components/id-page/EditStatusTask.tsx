"use client";
import * as actions from "@/actions";
import { useState } from "react";
import { Status, taskProps } from "@/types";

const ChangeStatus = ({ task }: { task: taskProps }) => {
  const [status, setStatus] = useState<Status>(task.status);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value as Status;

    try {
      await actions.updateTaskStatus(task.id, newStatus);
      setStatus(newStatus);
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  return (
    <select
      name="status"
      value={status}
      onChange={handleChange}
      className="p-2 text-slate-900 hover:bg-slate-100"
    >
      <option value={Status.PLANNED}>Planned</option>
      <option value={Status.IN_PROGRESS}>Active</option>
      <option value={Status.DONE}>Done</option>
    </select>
  );
};

export default ChangeStatus;
