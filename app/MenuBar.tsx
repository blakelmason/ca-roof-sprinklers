import { AppBar, Box, Button, MenuItem, Toolbar } from "@mui/material";

const pages = ["HOME", "PAGE 2"];

export default function MenuBar() {
    return (
        <>
            <AppBar>
                <Toolbar variant="dense">
                    {pages.map((page) => (
                        <MenuItem key={page}>{page}</MenuItem>
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
