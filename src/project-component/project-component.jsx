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
    <div className = "projectContainer">
      <h1>Projects</h1>
      <Paper square id="paper">
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
                    height = "700px"
                    border = "none" 
                    margin = "0"
                    padding = "0"
                    z-index = "999999"
                    position = "relative"/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h3>One-Page Infographic</h3>
          <p>This project is an exceptional display of analytical prowess, where a profound analysis was conducted on store-provided data, 
            focusing on product, basket, and customer segmentation. Utilized Python for intricate data analysis, Excel for data organization and management, 
            and PowerPoint for creating a compelling one-pager info-graphic. </p>
          <p>It employed sophisticated association algorithms like Apriori and advanced segmentation algorithms to uncover deep insights into consumer behaviors and market trends.</p>
          <img className = "onePage" src="https://i.ibb.co/jWZvqpL/one-pager.png"></img>
        </TabPanel>
      </Paper>
    </div>
  );
}

export default Projects;

