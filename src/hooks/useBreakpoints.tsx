import { createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function useBreakpoints() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 992,
        lg: 1200,
        xl: 1440,
      },
    },
  });
  const breakpointXs = useMediaQuery(theme.breakpoints.up("xs"));
  const breakpointSm = useMediaQuery(theme.breakpoints.up("sm"));
  const breakpointMd = useMediaQuery(theme.breakpoints.up("md"));
  const breakpointLg = useMediaQuery(theme.breakpoints.up("lg"));
  const breakpointXl = useMediaQuery(theme.breakpoints.up("xl"));

  return {
    xs: breakpointXs,
    sm: breakpointSm,
    md: breakpointMd,
    lg: breakpointLg,
    xl: breakpointXl,
  };
}
