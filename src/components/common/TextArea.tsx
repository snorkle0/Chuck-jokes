import React from "react";
import { useAppSelector } from "../../hooks/appHooks";

const TextArea = () => {
  const joke = useAppSelector((state) => state.data.currentJoke);

  return <div>{joke}</div>;
};

export default TextArea;
