import { Outlet } from "react-router-dom";
import { routes, isCurrentPath, RouterLink } from "@/Router";
import { Box, Button, Container, Stack } from "@mui/material";
import theme from "@/theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
// TODO: Hover on icons

export default function DesktopLayout() {
  return (
    <Box
      sx={{
        px: "3rem",
      }}
    >
      <Stack
        component="nav"
        sx={{
          position: "fixed",
          pt: "5rem",
        }}
      >
        {routes
          .filter((route) => route.render)
          .map((route) => (
            <RouterLink to={route.to} label={route.label} key={route.label} />
          ))}
        <Stack direction={"row"}>
          {/* Spotlight */}
          <Button
            target="_blank"
            component="a"
            href="https://www.spotlight.com/1719-1271-5115"
            sx={{
              color: theme.palette.font.main,
              minWidth: 0,
            }}
          >
            <img
              src="https://staticassets.spotlight.com/spotlight-logo-colored.svg"
              alt="icon"
              style={{
                width: 25,
              }}
            />
          </Button>
          {/* Elenco Digital */}
          <Button
            target="_blank"
            component="a"
            href="https://elencodigital.com.br/JasminCortez"
            sx={{
              color: theme.palette.font.main,
              minWidth: 0,
            }}
          >
            <img
              src="https://i.pinimg.com/originals/41/01/33/410133be212eb1ef8d57bd4cb2d8cf1c.png"
              alt="icon"
              style={{
                width: 25,
              }}
            />
          </Button>
        </Stack>
      </Stack>

      <Container
        maxWidth="md"
        component="main"
        sx={{
          minHeight: "100dvh",
          borderRadius: "1rem",
          backgroundColor: "transparent",
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
}
