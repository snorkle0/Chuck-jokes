import React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { blueGrey } from "@mui/material/colors";
import { useAppSelector, useAppDispatch } from "../../hooks/appHooks";
import * as S from "./Controls.styles";
import { uiActions } from "../../store/reducers/ui";
import { IUIParams } from "../../store/reducers/ui";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(blueGrey[700]),
  backgroundColor: blueGrey[700],
  "&:hover": {
    backgroundColor: blueGrey[500],
  },
}));

const ActionButton = () => {
  const dispatch = useAppDispatch();
  const timesFetched = useAppSelector(
    (state) => state.ui.queryParams.timesFetched
  );
  const person = useAppSelector((state) => state.data.customPerson);
  const category = useAppSelector((state) => state.data.category);

  const onClickHandler = (e: any) => {
    const params: IUIParams = {
      timesFetched: timesFetched + 1,
      category,
      person,
    };
    dispatch(uiActions.setQueryParams(params));
  };

  return (
    <S.ControlContainer>
      <ColorButton variant="text" fullWidth onClick={onClickHandler}>
        Draw a random {person ? person : "Chuck Norris"} Joke
      </ColorButton>
    </S.ControlContainer>
  );
};

export default ActionButton;
