import React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { useAppSelector } from "../../hooks/appHooks";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(grey[200]),
  backgroundColor: grey[200],
  "&:hover": {
    backgroundColor: grey[500],
  },
  fontSize: "16px",
  textTransform: "capitalize"
}));

const SaveJokes = () => {
  const savedJokes = useAppSelector((state) => state.data.savedJokes);

  const onClickHandler = () => {
    const element = document.createElement("a");
    const savedJokesString = JSON.stringify(savedJokes, null, 2);
    const file = new Blob([savedJokesString], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myJokes.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <ColorButton variant="text" fullWidth onClick={onClickHandler}>
      Save Jokes
    </ColorButton>
  );
};

export default SaveJokes;
