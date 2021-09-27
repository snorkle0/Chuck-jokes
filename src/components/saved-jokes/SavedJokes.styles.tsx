import styled from "styled-components";
import { grey } from "@mui/material/colors";

export const ControlContainer = styled.div`
  width: 439px;
  height: 58px;
  padding: 16px 16px 16px 60px;
  display: flex;
  flex-direction: row;
  margin: 80px 52px 52px 0;
`;



export const AddRemoveContainer = styled.div`
  width: 145px;
  height: 40px;
  margin: 0 8px 0 0;
  border-radius: 6px;
  background-color: ${grey[200]}
`;

export const SaveContainer = styled.div`
  width: 285px;
  margin: 0 2px 0 0;
  object-fit: contain;
`;
