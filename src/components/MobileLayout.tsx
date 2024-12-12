import { useState } from "react";
import { Outlet } from "react-router-dom";
import { routes, ListRouterLink, isCurrentPath } from "@/Router";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "@/theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

// TODO: Hover on icons

const drawerWidth = 240;

export default function MobileLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const mobileAppBarHeight = "100px";

  const drawerContent = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        height: "100dvh",
        paddingTop: 3,
      }}
    >
      <List>
        {routes
          .filter((route) => route.render)
          .map((route) => (
            <ListRouterLink
              to={route.to}
              label={route.label}
              key={route.label}
            />
          ))}
      </List>

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
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        elevation={0}
        position="relative"
        sx={{ backgroundColor: "transparent" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
          }}
        >
          {/* Hamburger Icon */}
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: "#000000",
              color: theme.palette.primary.main,
              boxShadow: 2,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={window.document.body}
          variant="temporary"
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </nav>

      <Container
        maxWidth="lg"
        component="main"
        sx={{
          mt: 2,
          minHeight: "100dvh",
          borderRadius: "1rem",
          backgroundColor: "transparent",
        }}
      >
        <Outlet />
      </Container>
    </>
  );
}
