import { Container, Paper, Typography } from "@mui/material";
import ButtonLinks from "../ButtonLinks";

const Header: React.FC = ({}) => {
    return (
        <Paper sx={{
            position:"fixed", 
            top: 0, 
            left: 0, 
            right: 0, 
            zIndex: 100
        }}>
            <Container sx={{ display: "flex", flexDirection: "row", alignItems: "center", height: 50}} >
                <Typography variant="h5" sx={{ flex: 1 }}>Damian Figueroa</Typography>
                <ButtonLinks />
            </Container>
        </Paper>
    )
}

export default Header;