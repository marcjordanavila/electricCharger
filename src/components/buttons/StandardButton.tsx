import React from "react";
import { Props } from "./types";

import { Button, Grid, Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styles from "./StandardButton.module.css";

export const StandardButton: React.FC<Props> = (props) => {
  const {
    onClick,
    text = undefined,
    ownStyle = "principalButton",
    variant = "contained",
    gridWidthXS = "auto",
    gridWidthSM = "auto",
    position = "centered",
    style = "",
    icon = false,
    mt = 0,
    mb = 0,
    ml = 0,
    mr = 0,
    enabled = true,
    testId = "",
  } = props;

  const getIcon = (iconType: string | undefined) => {
    if (iconType === "delete") return <DeleteIcon />;
    if (iconType === "save") return <SaveIcon />;
    if (iconType === "close") return <CloseIcon />;
    if (iconType === "menu") return <MenuIcon />;
    if (iconType === "edit") return <EditIcon />;
    if (iconType === "bill") return <DescriptionIcon />;
    if (iconType === "back") return <ArrowBackIcon />;
    return <CancelIcon />;
  };

  return (
    <Grid
      item
      xs={gridWidthXS}
      sm={gridWidthSM}
      className={`${styles[position]} ${styles[style]}`}
    >
      <Box mt={mt} mb={mb} ml={ml} mr={mr}>
        <Button
          data-testid={testId}
          disabled={!enabled}
          variant={variant}
          className={styles[ownStyle]}
          onClick={onClick}
          startIcon={icon ? getIcon(icon) : undefined}
        >
          {text}
        </Button>
      </Box>
    </Grid>
  );
};
