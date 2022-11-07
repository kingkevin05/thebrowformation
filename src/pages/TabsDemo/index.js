import { AppBar, Tab, Tabs } from "@mui/material";
import Page from "material-ui-shell/lib/containers/Page";
import React, { useState } from "react";
import { useIntl } from "react-intl";
import { Button } from "@mui/material";
import { useQuestions } from "material-ui-shell/lib/providers/Dialogs/Question";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
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
              <Box
                sx={{
                  width: "75%",
                  margin: "0 0 5% 10%",
                  p: 2,
                  border: "1px dashed grey",
                  alignContent: "center",
                  backgroundColor: theme =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Typography variant="h4" color="text.secondary">
                  {" "}
                  Microblading{" "}
                </Typography>
                <Typography variant="h5" color="text.primary">
                  {" "}
                  This is the latest and greatest technique in the Permanent
                  makeup world. Here a cosmetic tattoo machine is used with a
                  single point needle. Like Micro-blading, it creates hair like
                  strokes but looks even more natural than a Microbladed
                  eyebrow. This lasts longer than Micoblading and shading, and
                  fewer touch ups are needed over the years. Healed results are
                  great on all skin types, anything from dry to oily and
                  problematic. This is the evolution of Microblading & you will
                  only find it available here at Washington Microblading.
                  Artist, Jodi Muraski, was trained by a World Pro Artist, Dora
                  Hallos from Hungary. Very Few Permanent Cosmetic Artists are
                  trained in this technical, incredibly realistic, & high skill
                  set.
                </Typography>
              </Box>
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
                      if (item.img === Face3)
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
                      if (item.img === Face5)
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
                      if (item.img === Face2)
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
                      if (item.img === Face4)
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
        {tab === "two" && (
          <div>
            <Paper
              sx={{
                height: 400,
                padding: 10,
                paddingTop: 1,
                // width: 100,
                backgroundColor: theme =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Typography variant="h4" color="text.secondary">
                {" "}
                Frequently Asked Questions{" "}
              </Typography>
              <br />
              <Button
                onClick={() => {
                  openDialog({
                    title: "What is microblading?",
                    message:
                      "Microblading is a semi-permanent cosmetic procedure where a specialized tool is used to draw tiny lines that mimic hairstrokes into the skin. With each stroke, the ink is able to create the look of real hair. ",
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
                <Typography variant="h6" color="text.primary">
                  {" "}
                  What is microblading?
                </Typography>
              </Button>
              <br />
              <Button
                onClick={() => {
                  openDialog({
                    title: "What are Nano brows?",
                    message:
                      "Nanoblading is a more precise version of microblading, done using a single-needle machine. It works like a tattoo machine, but uses an extremely fine needle to inject pigment into the epidermis. The nano needle is flexible and as thin as a hair. The most common thickness is 0.18mm. This service is often also referred to as 3D Nano Brows, because the thin strokes are indistinguishable from the natural hairs.",
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
                <Typography variant="h6" color="text.primary">
                  {" "}
                  What are Nano brows?
                </Typography>
              </Button>
              <br />
              <Button
                onClick={() => {
                  openDialog({
                    title:
                      "What’s the difference between microblading & nanoblading?",
                    message:
                      "The main differences between the services are the tools used , and longevity of the results. Nano brows are also better suited for oily skin types. The biggest difference and main reason why many clients go for nanoblading over microblading is the fact that nanoneedles cause significantly less trauma to the skin than the microblading tool. The flexibility and thinness of the nanoneedle prevent the pigment from going too deep into the skin, which can sometimes happen with the rigid microblading tool, creating a “blown out” or blurred shadow. There is also much less scabbing with nanoblading during the healing phase. In short, nanoblading creates longer lasting, crisper looking hairstrokes, with less trauma to the skin.",
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
                <Typography variant="h6" color="text.primary">
                  {" "}
                  What's the difference between microblading & nanoblading?
                </Typography>
              </Button>
              <br />
              <Button
                onClick={() => {
                  openDialog({
                    title: "How Long Does Microblading Last?",
                    message:
                      "When done correctly, microblading typically lasts anywhere from one year to three years. It is important to remember that both the placement of the tattooing and the shallower strokes used during the treatment prevent it from yielding totally permanent results. While permanent eyebrow tattoos can be achieved, they often do not look natural. Microblading is designed for a natural appearance, and its semi-permanent results also mean that the brows can still be altered in the future to adhere to ever-changing fashion trends.",
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
                <Typography variant="h6" color="text.primary">
                  {" "}
                  How Long Does Microblading Last?
                </Typography>
              </Button>
              <br />
              <Button
                onClick={() => {
                  openDialog({
                    title: "Can I Get Microblading if Im Pregnant?",
                    message:
                      "While little is known about the effects of skin ink on pregnancy, it is currently not recommended that pregnant women receive microblading. This is because all forms of tattooing carry a small risk of infection, which has the potential to cause problems with a developing fetus. Most doctors recommend waiting until after breastfeeding to receive microblading.",
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
                <Typography variant="h6" color="text.primary">
                  {" "}
                  Can I Get Microblading if I'm Pregnant?
                </Typography>
              </Button>
              <br />
              <Button
                onClick={() => {
                  openDialog({
                    title: "Does it hurt?",
                    message:
                      "On a scale of 1-10 clients report 3-5.  A small amount of discomfort should be expected but also be manageable.  You will be numbed with a lidocane based topical cream at least twice during the procedure. More as needed.",
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
                <Typography variant="h6" color="text.primary">
                  {" "}
                  Does it hurt?
                </Typography>
              </Button>
              <br />
              <Button
                onClick={() => {
                  openDialog({
                    title: "What is a touch up? ",
                    message:
                      "A touch up is needed 6-8 weeks after your initial procedure.  There will be places the pigment doesn't take well into the skin. The touch up fills in these areas and also gives the color depth we want.   A similar touch up is also done annually to maintain your brow color and shape, this is about $200-$250 depending on work needed.  If it has been 2 -5 years since a touch up,  expect full price since complete brow mapping and procedure will be needed.",
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
                <Typography variant="h6" color="text.primary">
                  {" "}
                  What is a touch up?
                </Typography>
              </Button>
            </Paper>
          </div>
        )}
        {tab === "three" && <div>BOOK NOW</div>}
      </div>
    </Page>
  );
};
export default TabsDemo;
