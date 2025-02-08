import { Box, CssBaseline } from "@mui/material";
import MobileLayout from "./components/MobileLayout";
import DesktopLayout from "./components/DesktopLayout";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

interface Bg {
  background?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;
}

const homeBg: Bg = {
  backgroundImage:
    "url('https://i.pinimg.com/736x/1a/38/61/1a38614440b50d2e9a6dff4704e6523a.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 20%",
};

export default function App() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const location = useLocation();
  const [bg, setBg] = useState<Bg | null>(homeBg);
  const [isHome, setIsHome] = useState(true);

  const layout = useMemo(
    () => (isDesktop ? <DesktopLayout /> : <MobileLayout />),
    [isDesktop]
  );

  useEffect(() => {
    if (location.pathname === "/home") {
      setBg(homeBg);
      setIsHome(true);
    } else {
      setBg(null);
      setIsHome(false);
    }
  }, [location]);

  return (
    <Box
      sx={{
        width: "100vw",
        transition: "background-color 500ms ease-in-out",
        ...bg,
      }}
    >
      <video
        src="./MiniReel2025.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          top: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          objectFit: "cover",
          position: "absolute",
          zIndex: 0,
          display: isHome ? "block" : "none",
        }}
      />
      <CssBaseline />
      {layout}
    </Box>
  );
}
