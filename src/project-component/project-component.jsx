import React from 'react';
import Iframe from 'react-iframe';
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "./projectStyles.css"

function Projects() {
  const [value, setValue] = React.useState(0); // Start with the first tab selected

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>{children}</div>
        )}
      </div>
    );
  }
  

  return (
    <div>
      <h1>Projects</h1>
      <Paper square>
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab label="Power BI dashboard" />
          <Tab label="One-Page Infographic" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <h3>Power BI Dashboard - Supermarket Sales Data</h3>
          <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiMzEyNDE3ZTUtMzM5Yi00Y2Y4LWE4NzUtM2I5MGIzNWEwMGFlIiwidCI6IjEzZTNiMTg2LWM0NDYtNGFhYi05YzZkLTlhYjliYjc2ODE2YyIsImMiOjh9"
            top = "0" 
                    left = "0" 
                    bottom = "0" 
                    right = "0" 
                    width = "100%"
                    height = "100%"
                    border = "none" 
                    margin = "0"
                    padding = "0"
                    z-index = "999999"
                    position = "absolute"/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* Content for your One-Page Infographic tab goes here */}
        </TabPanel>
      </Paper>
    </div>
  );
}

export default Projects;

