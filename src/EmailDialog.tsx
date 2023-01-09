import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

type EmailModalProps = {
    open: boolean,
    onClose: () => void
}

const MyEmail = "djfigs@outlook.com"

const EmailDialog: React.FC<EmailModalProps> = ({open, onClose}) => {
    return <Dialog open={open} onClose={onClose} fullWidth={true}>
        <DialogTitle>Email Address</DialogTitle>
        <DialogContent>
            {MyEmail}
        </DialogContent>
        <DialogActions>
            <Button onClick={() => window.location.href = "mailto:"+MyEmail}>Mail To</Button>
            <Button onClick={() => navigator.clipboard.writeText(MyEmail)}>Copy</Button>
        </DialogActions>
    </Dialog>
}

export default EmailDialog;