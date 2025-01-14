import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import dog from "../images/dog.webp";

export default function Home() {
    return (
        <Container maxWidth="xl">
            <Box
                textAlign="center"
                my={8}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Box maxWidth="md">
                    <Typography mb={2} variant="h1">
                        Fire Protection for Your Home
                    </Typography>
                    <Typography mb={6}>
                        We provide simple and effective roof sprinklers that
                        protect your home from fire, giving you peace of mind
                        without the hassle.
                    </Typography>
                </Box>
                <Button size="large" variant="contained" color="secondary">
                    Buy Sprinklers
                </Button>
            </Box>
            <Box display="flex" justifyContent="center">
                <Image
                    alt="dog image"
                    src={dog}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: ".5rem",
                    }}
                />
            </Box>
        </Container>
    );
}
