import React from "react";

interface IModal {
  header: string;
  children: React.ReactNode;
  close(): any;
}

const Modal = ({ header, children, close }: IModal) => {
  return (
    <div
      id="modal"
      className=" w-screen h-screen fixed left-0 top-0 bg-gray-500/75 z-50"
    >
      <div className="w-fit h-fit m-auto absolute left-0 top-0 bottom-0 right-0 rounded-lg shadow-lg bg-white p-3">
        <div className="relative mb-3">
          <div className="text-center font-semibold">{header}</div>
          <button
            className="text-center font-semibold absolute right-0 top-0 h-7 w-7 text-red-600"
            onClick={() => {
              close();
              document.body.style.overflow = "";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="red"
              className="bi bi-x-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
