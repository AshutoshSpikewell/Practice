import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import AddressForm from "./AddressForm";
import ProjectBoard from "./ProjectBoard";
import RecordsTable from "./RecordsTable";


const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const handleChange = (e, newValue) => {
    setValue(newValue);
    
  }; 
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <WysiwygIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                
              </Typography>
              
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "600px" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={handleChange}
              >
                <Tab label="Address" />
                <Tab label="Projects" />
                <Tab label="Records" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {value === 0 && <AddressForm />}
      {value === 1 && <ProjectBoard />}
      {value === 2 && <RecordsTable />}
    </React.Fragment>
  );
};

export default Header;