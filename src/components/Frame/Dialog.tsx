import React, { useEffect } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      placeItems: "center",
      margin: 0,
      padding: theme.spacing(2),
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle
      disableTypography
      className={`${classes.root} text-center`}
      {...other}
    >
      <Typography variant="h4" style={{ fontFamily: "Reem Kufi" }}>
        {children}
      </Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function createData(shortcut: string, component: string) {
  return { shortcut, component };
}

const set1 = [
  createData("Alt + 1", "Image"),
  createData("Alt + 2", "Text"),
  createData("Alt + 3", "Toggle drawing mode"),
  createData("Alt + 4", "Paragraph"),
  createData("Alt + 5", "Link"),
  createData("Alt + 6", "Heading"),
  createData("Alt + 7", "Button"),
  createData("Alt + 8", "Checkbox"),
  createData("Alt + 9", "Dropdown"),
  createData("Alt + 0", "Input"),
];
const set2 = [
  createData("Alt + Shift + 1", "Radio"),
  createData("Alt + Shift + 2", "Line"),
  createData("Alt + Shift + 3", "Box"),
  createData("Alt + Shift + 4", "Arrow"),
  createData("Alt + Shift + D", "Dark Mode"),
  createData("Alt + P", "Toggle Preview"),
  createData("Alt + /", "Display shortcuts"),
  createData("Delete", "Delete Component"),
];

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    function doc_keyUp(e: KeyboardEvent) {
      if (e.altKey && e.key === "/") setOpen(!open);
    }
    window.addEventListener("keyup", doc_keyUp);
    return () => window.removeEventListener("keyup", doc_keyUp);
  }, [open]);

  return (
    <div>
      <div
        onClick={handleClickOpen}
        style={{ position: "fixed", top: "720px", left: "1390px" }}
      >
        <div
          className="keyboard-icon shadow d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            zIndex: 999,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <i className="fas fa-keyboard"></i>
        </div>
      </div>

      <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open}>
        <DialogTitle id="dialog-title" onClose={handleClose}>
          Keyboard Shortcuts
        </DialogTitle>
        <DialogContent className="d-flex">
          <TableContainer>
            <Table
              style={{
                borderWidth: "1px 1px 1.6px 1px",
                borderColor: "rgba(0,0,0,0.2)",
                borderStyle: "solid",
                minWidth: 280,
              }}
            >
              <TableBody>
                {set1.map((row) => (
                  <TableRow key={row.shortcut}>
                    <TableCell
                      className="text-center"
                      component="th"
                      scope="row"
                    >
                      {row.shortcut}
                    </TableCell>
                    <TableCell>{row.component}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer>
            <Table
              style={{
                borderWidth: "1px 1px 1px 0px",
                borderColor: "rgba(0,0,0,0.2)",
                borderStyle: "solid",
                minWidth: 280,
              }}
            >
              <TableBody>
                {set2.map((row) => (
                  <TableRow key={row.shortcut}>
                    <TableCell
                      className="text-center"
                      component="th"
                      style={{ whiteSpace: "nowrap" }}
                      scope="row"
                    >
                      {row.shortcut}
                    </TableCell>
                    <TableCell align="left">{row.component}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p
              style={{
                paddingTop: "8px",
                borderWidth: "0px 1px 1.6px 0px",
                borderColor: "rgba(0,0,0,0.2)",
                borderStyle: "solid",
                height: "106.4px",
                paddingLeft: "10px",
                fontSize: "14px",
              }}
              className="d-flex flex-column"
            >
              Note:
              <small style={{ fontSize: "13px", marginTop: "2px" }}>
                ⋆ If you're a mac user, use option for Alt. <br />⋆ If any
                shortcut doesn't work, make sure your &nbsp;&nbsp;&nbsp;capslock
                is turned off.
              </small>
            </p>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            DISMISS
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
