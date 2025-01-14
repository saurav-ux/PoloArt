import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Details from "./Details";

function TabPanel(props: {
  children?: React.ReactNode;
  value: number;
  index: number;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-tabpanel-${index}`}
      aria-labelledby={`scrollable-tab-${index}`}
      {...other}
      // style={{marginTop:'2em'}}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <div style={{textAlign:'center', fontSize:'2.5em',fontWeight:'bold',color:'black'}}>Our Products</div>
      </div>
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 1100 },
        bgcolor: "background.paper",
        
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },color:'black'
          },
          }}
         
      >
        <Tab label="Alive" style={{color:'black',fontWeight:'bold'}}/>
        <Tab label="Polo" style={{color:'black',fontWeight:'bold'}}/>
        <Tab label="Fusion" style={{color:'black',fontWeight:'bold'}}/>
        <Tab label="Carbon" style={{color:'black',fontWeight:'bold'}}/>
        <Tab label="Lino" style={{color:'black',fontWeight:'bold'}}/>
        <Tab label="Apollo" style={{color:'black',fontWeight:'bold'}}/>
        <Tab label="Divertor & Spout" style={{color:'black',fontWeight:'bold'}}/>
        <Tab label="Square Bath set" style={{color:'black',fontWeight:'bold'}}/>
        <Tab label="Round Bath Set" style={{color:'black',fontWeight:'bold'}}/>
        <Tab label="Shower" style={{color:'black',fontWeight:'bold'}}/>
        <Tab label="Health Faucets" style={{color:'black',fontWeight:'bold'}}/>
        <Tab label="Accessories" style={{color:'black',fontWeight:'bold'}}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Item Six
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Content for Item Six
      </TabPanel>
      <TabPanel value={value} index={4}>
         <Details />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={8}>
         <Details />
      </TabPanel>
      <TabPanel value={value} index={9}>
         <Details />
      </TabPanel>
      <TabPanel value={value} index={10}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={12}>
        Content for Item Six
      </TabPanel>
      </Box>
      </>
  );
}
