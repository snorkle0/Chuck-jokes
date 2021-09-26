import React from "react";
import { useAppSelector } from "../../hooks/appHooks";

const TextArea = () => {
  const joke = useAppSelector((state) => state.data.currentJoke);

  return <span>{joke}</span>;
};

export default TextArea;
