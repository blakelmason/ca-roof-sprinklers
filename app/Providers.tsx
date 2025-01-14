import { CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import { theme } from "./theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export default function Providers({ children }: PropsWithChildren) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
