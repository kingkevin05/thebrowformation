import { AppBar, Tab, Tabs } from "@mui/material";
import Page from "material-ui-shell/lib/containers/Page";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import { Button } from "@mui/material";
import { useQuestions } from "material-ui-shell/lib/providers/Dialogs/Question";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// import CardActions from '@mui/material/CardActions';
// import CardContent from "@mui/material/CardContent";
import Face1 from "../../assets/images/faces-08.svg";
import Face2 from "../../assets/images/faces-09.svg";
import Face3 from "../../assets/images/faces-10.svg";
import Face4 from "../../assets/images/faces-11.svg";
import Face5 from "../../assets/images/faces-12.svg";
import Face6 from "../../assets/images/faces-13.svg";
// import FacesOne from "components/FacesOne";

const TabsDemo = () => {
  const [tab, setTab] = useState("one");
  const intl = useIntl();
  const { openDialog, setProcessing } = useQuestions();

  const itemData = [
    {
      img: Face1,
      title: "Bed",
    },
    {
      img: Face3,
      title: "Kitchen",
    },
    {
      img: Face5,
      title: "Sink",
    },
    {
      img: Face2,
      title: "Books",
    },
    {
      img: Face4,
      title: "Chairs",
    },
    {
      img: Face6,
      title: "Candle",
    },
  ];

  const [spacing] = React.useState(2);

  //   const jsx = `
  // <Grid container spacing={${spacing}}>
  // `;

  return (
    <Page
      pageTitle={intl.formatMessage({
        id: "tabs_demo",
        defaultMessage: "Tabs demo",
      })}
      tabs={
        <AppBar position="static">
          <Tabs
            value={tab}
            onChange={(e, t) => setTab(t)}
            aria-label="simple tabs example"
            centered
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="the process" value="one" />
            <Tab label="FAQs" value="two" />
            <Tab label="BOOK NOW" value="three" />
          </Tabs>
        </AppBar>
      }
    >
      <div>
        {tab === "one" && (
          <div>
            <div>
              <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                  <Grid container justifyContent="center" spacing={spacing}>
                    {[0, 1].map(value => (
                      <Grid key={value} item>
                        <Paper 
                          sx={{
                            height: 400,
                            padding: 10,
                            paddingTop: 1,
                            // width: 100,
                            backgroundColor: theme =>
                              theme.palette.mode === "dark"
                                ? "#1A2027"
                                : "#fff",
                          }}
                        >
                          <Typography variant="h4" color="text.secondary">
                            {" "}
                            Title of process{" "}
                          </Typography>
                          <Typography variant="body1" color="text.primary">
                            {" "}
                            enter the contents of the process here
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </div>
            <ImageList
              sx={{ width: "100%" }}
              style={{ overflow: "unset" }}
              // variant="woven"
              cols={3}
              gap={8}
            >
              {itemData.map(item => (
                <ImageListItem style={{ justifySelf: "center" }} key={item.img}>
                  <Button
                    onClick={() => {
                      if (item.img === Face1)
                        openDialog({
                          title: "TEST ONE",
                          message: "Dialog message. this is image one test.",
                          handleAction: handleClose => {
                            setProcessing(true);
                            console.log("Doing some async stuff");
                            setTimeout(() => {
                              console.log("finished async stuff");
                              //Do some stuff and then
                              handleClose();
                            }, 3000);
                          },
                        });
                      if (item.img === Face2)
                        openDialog({
                          title: "TEST TWO",
                          message: "Dialog message. this is image two test.",
                          handleAction: handleClose => {
                            setProcessing(true);
                            console.log("Doing some async stuff");
                            setTimeout(() => {
                              console.log("finished async stuff");
                              //Do some stuff and then
                              handleClose();
                            }, 3000);
                          },
                        });
                      if (item.img === Face3)
                        openDialog({
                          title: "TEST THREE",
                          message: "Dialog message. this is image three test.",
                          handleAction: handleClose => {
                            setProcessing(true);
                            console.log("Doing some async stuff");
                            setTimeout(() => {
                              console.log("finished async stuff");
                              //Do some stuff and then
                              handleClose();
                            }, 3000);
                          },
                        });
                      if (item.img === Face4)
                        openDialog({
                          title: "TEST FOUR",
                          message: "Dialog message. this is image four test.",
                          handleAction: handleClose => {
                            setProcessing(true);
                            console.log("Doing some async stuff");
                            setTimeout(() => {
                              console.log("finished async stuff");
                              //Do some stuff and then
                              handleClose();
                            }, 3000);
                          },
                        });
                      if (item.img === Face5)
                        openDialog({
                          title: "TEST FIVE",
                          message: "Dialog message. this is image five test.",
                          handleAction: handleClose => {
                            setProcessing(true);
                            console.log("Doing some async stuff");
                            setTimeout(() => {
                              console.log("finished async stuff");
                              //Do some stuff and then
                              handleClose();
                            }, 3000);
                          },
                        });
                      if (item.img === Face6)
                        openDialog({
                          title: "TEST SIX",
                          message: "Dialog message. this is image six test.",
                          handleAction: handleClose => {
                            setProcessing(true);
                            console.log("Doing some async stuff");
                            setTimeout(() => {
                              console.log("finished async stuff");
                              //Do some stuff and then
                              handleClose();
                            }, 3000);
                          },
                        });
                    }}
                  >
                    <img
                      src={`${item.img}?w=161&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                      style={{ width: "100%" }}
                      alt={item.title}
                      loading="lazy"
                    />
                  </Button>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        )}
        {tab === "two" && <div>FAQs</div>}
        {tab === "three" && <div>BOOK NOW</div>}
      </div>
    </Page>
  );
};
export default TabsDemo;
