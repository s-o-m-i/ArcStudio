// /* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import "../../../public/assets/css/TopDrawer.css";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";

const TopDrawer = () => {
  const [open, setOpen] = useState(false);

  // Function to open the Drawer
  const openDrawer = () => {
    setOpen(true);
  };

  // Function to close the Drawer
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Typography
        onClick={openDrawer}
        sx={{
          '&:hover': { backgroundColor: '#39148a' },
          fontSize: '.875rem',
          backgroundColor: '#4c1bb8',
          fontFamily: 'inter',
          padding: '0.5rem 2rem',
          borderRadius: '.25rem',
          color: '#fff',
          cursor:"pointer",
        }}
      >
        New Project
      </Typography> */}

      <Box
        mt={"-5px"}
        sx={{}}
        onClick={openDrawer}
        className="navbar-menu-button w-nav-button"
      >
        {/* <div className="hamburger"> */}
        <div className="line top"></div>
        <div className="line middle"></div>
        <div className="line bottom"></div>
      </Box>
      {/* </div> */}

      <Drawer
        anchor="top"
        open={open}
        onClose={closeDrawer}
        // disableBackdropTransition // Prevent background from being disabled
        PaperProps={{
          style: {
            width: "100%",
            height: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
        hideBackdrop
      >
        {/* <a
            to="/"
            data-w-id="aa647e8a-4c93-64ea-ab96-78d7459dbb3a"
            // className="brand w-nav-brand"
            className="brand w-nav-brand"
          > */}
        <Box
          pt={"10px"}
          px={"20px"}
          pr={"35px"}
          sx={{}}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
        <Link to="/">
          <Box className="anime" sx={{ width: "200px" }} mt={"10px"}>
            <img
              src="assets/img/logo-dark.png"
              loading="lazy"
              alt="Scren-Pla Logo "
              className="logo-image"
            />
          </Box>
          </Link>
          {/* <BasicModal  position={"navbar"} /> */}
          <Box display={"flex"} alignItems={"center"} gap={"40px"}>
            <Box
              //   onClick={handleOpen}
              style={{ cursor: "pointer" }}
              id="w-node-_73678bd2-18af-0daa-11e4-5a5095c6009b-459dbb38"
              data-w-id="73678bd2-18af-0daa-11e4-5a5095c6009b"
              className={`button colorfullbtn sign-up-btn  small w-inline-block anime
        
          `}
            >
              <div className="">Start writing</div>
            </Box>
            <CloseIcon
              className="anime-close"
              sx={{ cursor: "pointer" }}
              onClick={closeDrawer}
            />
          </Box>
        </Box>

        {/* <img
                src="assets/img/logo-light.PNG"
                loading="lazy"
                alt="Scren-Pla Logo "
                className="logo-image white"
              />
        */}
        {/* </a> */}

        {/* <List>
          {[" About Us", "Pricing", "Download", "Sign In"].map(
            (text, index) => (
              <ListItem key={text} disablePadding onClick={closeDrawer}>
                <Link to={"/pricing"}>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            )
          )}
        </List> */}
<Box sx={{}} p={'20px'}>
        <List>
        <Link to="/aboutus" className="nostyle">
          <ListItem sx={{paddingTop:"23px",fontSize:"14px"}} >About Us</ListItem>
        </Link>
        <Link to="/pricing" className="nostyle">
          <ListItem sx={{paddingTop:"23px",fontSize:"14px"}} >Pricing</ListItem>
          </Link>
          <Link to="/download" className="nostyle">
          <ListItem sx={{paddingTop:"23px",fontSize:"14px"}} >Download</ListItem>
          </Link>
       
          <a    href="https://scren-pla.vercel.app/login" className="nostyle">
          <ListItem sx={{paddingTop:"23px",fontSize:"14px"}} >Sign In</ListItem>
          </a>
        </List>
        </Box>
      </Drawer>
    </>
  );
};

export default TopDrawer;
