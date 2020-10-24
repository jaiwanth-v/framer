import styled from "styled-components";
import SnackbarBase from "@material-ui/core/Snackbar";
import SnackbarContentBase from "@material-ui/core/SnackbarContent";
import IconButtonBase from "@material-ui/core/IconButton";

export const Snackbar = styled(SnackbarBase)`
  /* >>> */
`;
export const SnackbarContent = styled(SnackbarContentBase)`
  /* >>> */
  && {
    background: ${(props) =>
      props.status === "success" ? props.theme.success : props.theme.error};
    padding: 0 0.5rem;
  }
`;
export const IconButton = styled(IconButtonBase)`
  /* >>> */
`;

export const InfoWrapper = styled.span`
  display: flex;
  align-items: center;
`;
