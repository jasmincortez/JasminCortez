import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import theme from "./theme";
import { RouterLink, routes } from "./Router";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function Contact() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const SLIDE_WIDTH = isDesktop ? 288 : 160;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "3rem",
          mb: 3,
          mt: 25,
        }}
      >
        {"Contact me"}
      </Typography>

      <Typography textAlign={"justify"} sx={{ fontSize: "1.25rem", mb: 8 }}>
        <br />
        {"Let's get in touch!"} <br />
        {
          "Please feel free to contact me through email or one of the social media links bellow."
        }
      </Typography>
      <Stack direction={"row"} justifyContent={"center"} spacing={2}>
        <Button variant="contained" size="large" startIcon={<InstagramIcon />}>
          Instagram
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<MailOutlineIcon />}
        >
          Email
        </Button>
        <Button variant="contained" size="large" startIcon={<StarBorderIcon />}>
          Spotlight
        </Button>
      </Stack>
    </Box>
  );
}
