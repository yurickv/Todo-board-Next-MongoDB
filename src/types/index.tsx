import { ReactNode } from "react";

export interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string | undefined;
  maxLength?: number;
}

export interface formProps {
  children: ReactNode;
  action: (formData: FormData) => void;
  className?: string;
  onSubmit?: () => void;
}

export interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  bgColor?: string;
}

export interface todoProps {
  id: string;
  title?: string | null;
}
export interface taskProps {
  id: string;
  title?: string | null;
  description: string;
  applyBoard: string;
  status: Status;
}
export enum Status {
  PLANNED = "PLANNED",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
