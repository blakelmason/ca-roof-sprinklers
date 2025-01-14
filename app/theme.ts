"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const createdTheme = createTheme({
    typography: {
        fontFamily: "Inter, Arial, sans-serif",
        h1: {
            fontSize: "4rem",
        },
        body1: {
            fontSize: "1.5rem",
        },
    },
    palette: {
        primary: {
            main: "#1E3A5F",
        },
        secondary: {
            main: "#D84315",
        },
        background: {
            default: "#E9F1F7",
        },
        text: {
            primary: "#2C3E50",
            secondary: "#607D8B",
        },
    },
});

export const theme = responsiveFontSizes(createdTheme);
