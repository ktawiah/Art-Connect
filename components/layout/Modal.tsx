import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  classes: string;
}
const Modal = (props: Props) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center bg-black h-full">
      <div className={twMerge("w-96 rounded-md bg-white p-2", props.classes)}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
