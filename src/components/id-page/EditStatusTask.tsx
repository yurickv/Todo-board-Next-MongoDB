"use client";

import * as actions from "@/actions";
import { useState } from "react";
import { taskProps } from "@/types";

const ChangeStatus = ({ task }: { task: taskProps }) => {
  const [status, setStatus] = useState(task.status);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value;

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
      <option value="PLANNED">Planned</option>
      <option value="IN_PROGRESS">Active</option>
      <option value="DONE">Done</option>
    </select>
  );
};

export default ChangeStatus;
