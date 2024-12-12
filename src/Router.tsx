import {
  Link,
  createBrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Contact from "./Contact";
import Acting from "./Acting";
import App from "./App";
import theme from "./theme";
import { Button, ListItem, Stack } from "@mui/material";
import Headshots from "./components/Headshots";
import { useState } from "react";
import Voice from "./Voice";

export interface RouteDefinition {
  label: string;
  aria: string;
  to: string;
  element: JSX.Element;
  render: boolean;
}

export const BASE_URL = "/";

export const routes: RouteDefinition[] = [
  {
    label: "Home",
    aria: "Navigate to home",
    to: "home",
    element: <Home />,
    render: true,
  },
  {
    label: "Headshots",
    aria: "Navigate to headshots",
    to: "headshots",
    element: <Headshots />,
    render: true,
  },
  {
    label: "Acting",
    aria: "Navigate to Acting",
    to: "acting",
    element: <Acting />,
    render: true,
  },
  {
    label: "Voice",
    aria: "Navigate to Voice",
    to: "voice",
    element: <Voice />,
    render: true,
  },
  {
    label: "Contact",
    aria: "Navigate to Contact",
    to: "Contact",
    element: <Contact />,
    render: true,
  },
];

export const isCurrentPath = (path: string) => {
  const location = useLocation();
  return location.pathname === path;
};

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />,
        },
        ...routes.map((route) => {
          return {
            path: route.to,
            element: route.element,
          };
        }),
      ],
    },
  ],
  {
    basename: BASE_URL,
  }
);

export type RouterLinkProps = {
  to: string;
  label: string;
};

export function RouterLink(props: RouterLinkProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Stack
      direction={"row"}
      alignContent={"center"}
      spacing={1}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={props.to}>
        <Button
          sx={{
            color: isCurrentPath(`/${props.to}`)
              ? theme.palette.highlight.main
              : theme.palette.font.main,
            fontSize: "1.25rem",
          }}
        >
          {props.label}
        </Button>
      </Link>
    </Stack>
  );
}

export function ListRouterLink(props: RouterLinkProps) {
  return (
    <ListItem disablePadding sx={{ justifyContent: "center" }}>
      <Link
        to={props.to}
        style={{
          width: "100%",
          textDecoration: "none",
          padding: "0 1rem",
        }}
      >
        <Button
          fullWidth
          sx={{
            color: isCurrentPath(`/${props.to}`)
              ? theme.palette.highlight.main
              : theme.palette.font.main,
            my: 1,
            fontSize: "1rem",
          }}
        >
          {props.label}
        </Button>
      </Link>
    </ListItem>
  );
}
