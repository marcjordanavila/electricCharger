import { GridSize } from "@mui/material";

export interface Props {
  onClick: () => void;
  text?: string;
  ownStyle?: "principalButton" | "secondaryButton" | "text";
  variant?: "contained" | "text" | "outlined";
  gridWidthXS?: GridSize;
  gridWidthSM?: GridSize;
  position?: "centered" | "left" | "right";
  style?: string;
  icon?:
  | "delete"
  | "save"
  | "cancel"
  | "close"
  | "menu"
  | "edit"
  | "bill"
  | "back";
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  enabled?: boolean;
  testId?: string;
}
