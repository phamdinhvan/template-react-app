import { TEXT_HOLDER } from "@Const/utilities";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Box,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";
import moduleList from "./routes";
import SubNavbar from "./SubNavbar";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const LayoutComponent: React.FC = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const currentRoute = moduleList.find((module) => {
  //   const childRoutes = module.subRoutes.map((s) => s.path);
  //   const paths = [module.path, ...childRoutes];
  //   return paths.some((p) => history.location.pathname.includes(p));
  // });

  const currentRoute = React.useMemo(() => {
    const routes = moduleList.map(({ path }) => path).reverse();
    const selected = routes.find((route) => location.pathname.includes(route));
    return selected;
  }, [location.pathname]);

  const selectedRoute = React.useMemo(() => {
    const selected = moduleList.find((route) => currentRoute === route.path);
    return selected;
  }, [currentRoute]);

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open} className="app-bar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}>
            <MenuIcon style={{ fontSize: "2.8rem", color: "#6C778D" }} />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className="title">
            {selectedRoute?.title || TEXT_HOLDER}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ul className="nav-list">
          {moduleList.map(({ label, defaultIcon, activeIcon, path }) => {
            const selected = currentRoute === path;
            return (
              <Link key={label} to={path}>
                <li className="nav-item">
                  <button role="tab" className="btn-icon" aria-selected={selected}>
                    <span>{selected ? activeIcon : defaultIcon}</span>
                  </button>
                  <div className="label">{label}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, background: "#F0F3F8", height: "100vh", overflow: "hidden" }}>
        <DrawerHeader />
        {selectedRoute && <SubNavbar routes={selectedRoute.subRoutes} />}
        {props.children}
      </Box>
    </Box>
  );
};
export default LayoutComponent;
