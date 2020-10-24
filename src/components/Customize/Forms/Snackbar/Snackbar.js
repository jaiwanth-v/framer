import { Fade } from "@material-ui/core";
import React, { useEffect } from "react";

import { Snackbar, SnackbarContent, IconButton } from "./style";

function SimpleSnackbar({ status, msg }) {
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    setOpen(true);
  }, [status]);

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      TransitionComponent={Fade}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <SnackbarContent
        status={status}
        contentprops={{
          "aria-describedby": "message-id",
        }}
        message={
          <>
            {status === "success" ? (
              <i
                style={{ fontSize: "16px" }}
                className="far mr-2 fa-check-circle"
              ></i>
            ) : (
              <i
                style={{ fontSize: "16px" }}
                className="fas mr-2 fa-exclamation-circle"
              ></i>
            )}
            {msg.toUpperCase()}
          </>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <i style={{ fontSize: "16px" }} className="fas fa-times"></i>
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
}
export default SimpleSnackbar;
