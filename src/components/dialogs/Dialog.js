import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button
                sx={{textTransform: 'none'}}
                variant="contained" size="large"
                onClick={handleClickOpen}>
                Hire Me!
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Leave a Message</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To send me a message, please enter your name and email address here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField

                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField

                        margin="dense"
                        id="message"
                        label="Message"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Hire Me!</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}