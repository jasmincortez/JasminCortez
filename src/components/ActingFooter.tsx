import theme from "@/theme";
import { Button, Stack } from "@mui/material";

export default function ActingFooter() {
  return (
    <Stack
      component={"footer"}
      direction={"row"}
      spacing={2}
      justifyContent={"center"}
      sx={{ mb: 10, mt: 10 }}
    >
      <Button
        variant="contained"
        target="_blank"
        href="https://pdfhost.io/v/DnO~rawyK_Jasmin_Cortez_Acting_CV"
        sx={{
          color: theme.palette.font.main,
          minWidth: 0,
          fontSize: 15,
          fontWeight: "normal",
        }}
      >
        PDF CV
      </Button>
      <Button
        variant="contained"
        target="_blank"
        href="https://app.spotlight.com/1719-1271-5115"
        sx={{
          color: theme.palette.font.main,
          minWidth: 0,
          fontSize: 15,
          fontWeight: "normal",
        }}
      >
        Spotlight CV
      </Button>
      <Button
        variant="contained"
        target="_blank"
        href="https://elencodigital.com.br/JasminCortez"
        sx={{
          color: theme.palette.font.main,
          minWidth: 0,
          fontSize: 15,
          fontWeight: "normal",
        }}
      >
        Elenco Digital CV
      </Button>
    </Stack>
  );
}
