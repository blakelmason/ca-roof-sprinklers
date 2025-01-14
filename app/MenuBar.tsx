import {
    AppBar,
    Box,
    Button,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";

const pages = ["Home", "Another Page"];

export default function MenuBar() {
    return (
        <>
            <AppBar>
                <Toolbar variant="dense">
                    {pages.map((page) => (
                        <MenuItem key={page}>
                            <Typography>{page}</Typography>
                        </MenuItem>
                    ))}
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ ml: "auto" }}
                    >
                        Click Me
                    </Button>
                </Toolbar>
            </AppBar>
            <Box p={3} />
        </>
    );
}
