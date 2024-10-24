import { useState } from "react";

const Increment = (props) => {
  const left = "<";
  const right = ">";
  //   let Id = props.Id;
  //   let setId = props.setId;
  const { Id, setId } = props;

  function previousHandler() {
    if (Id === 0) {
      setId(4);
    } else {
      setId(Id - 1);
    }
  }

  function forwardHandler() {
    if (Id === 4) {
      setId(0);
    } else {
      setId(Id + 1);
      console.log(Id);
    }
  }
  return (
    <div className="z-50  border-blue-800  p-8 mt-[350px]  absolute">
      <button
        className="text-blue-900 text-2xl font-extrabold px-4 border-none  border-2 "
        onClick={previousHandler}
      >
        {left}
      </button>
      <button
        className="text-blue-900 text-2xl font-extrabold px-4 border-none border-2"
        onClick={forwardHandler}
      >
        {right}
      </button>
    </div>
  );
};

export default Increment;
