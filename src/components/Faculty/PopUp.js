import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

function PopUp(props) {

    const { children, openPopup } = props;

    return (
        <div className="popUp">
            <Dialog open={openPopup} maxWidth="md">
                <DialogTitle>
                    <strong>Add Slot</strong>
                </DialogTitle>
                <DialogContent dividers>
                 {children}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default PopUp;
