import { IconButton } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailDialog from "./EmailDialog";
import { useState } from "react";

type ButtonLink = {
    icon: JSX.Element,
    url: string
}

const Links: ButtonLink[] = [
    {
        icon: <GitHubIcon />,
        url: "https://github.com/djfigs1"
    },
    {
        icon: <LinkedInIcon />,
        url: "https://linkedin.com/in/djfigs" 
    }
]

const ButtonLinks: React.FC = ({}) => {
    const [ open, setOpen ] = useState<boolean>(false);
    return <div style={{ display: "flex", flexDirection: "row"}}>
        <EmailDialog open={open} onClose={() => setOpen(false)} />
        {Links.map((l, i) => <IconButton key={"bl-"+i} href={l.url} size="large">
            {l.icon}
        </IconButton>)}
        <IconButton onClick={() => setOpen(true)} size="large" >
            <MailIcon />
        </IconButton>
    </div>
}

export default ButtonLinks;