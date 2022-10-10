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
                  <Grid container justifyContent="center" spacing={spacing} width="50%">
                    {[0].map(value => (
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
                            This is the latest and greatest technique in the Permanent makeup world.  Here a cosmetic tattoo machine is used with a single point needle.  Like Micro-blading, it creates hair like strokes but looks even more natural than a Microbladed eyebrow.  This lasts longer than Micoblading and shading, and fewer touch ups are needed over the years.  Healed results are great on all skin types, anything from dry to oily and problematic.  This is the evolution of Microblading & you will only find it available here at Washington Microblading.  Artist, Jodi Muraski, was trained by a World Pro Artist, Dora Hallos from Hungary.  Very Few Permanent Cosmetic Artists are trained in this technical, incredibly realistic, & high skill set.  
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
                    title: "What Can Be Expected from a Microblading Session?",
                    message: "All microblading sessions start with a consultation, during which your technician will go over the procedure and any discomfort you may experience. The brow region will then be cleaned, and a numbing cream will be applied. The technician will then apply ink using short, shallow strokes that mimic hairs. Afterwards, you will be instructed to keep the area clean and ice if needed to help prevent swelling. However, you should avoid getting the area wet, and do not apply any makeup to the region until it is fully healed. There may be some flaking and itching during the healing process, but this is normal. In most cases, at least one follow-up session is needed to make sure the brows turn out as desired. ",
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
                  What Can Be Expected from a Microblading Session?
                </Typography>
              </Button>
              <br />
              <Button
                onClick={() => {
                  openDialog({
                    title: "How Much Does Microblading Cost?",
                    message: "The cost of microblading varies between people and sessions. Some cost several hundred dollars, while others cost well over $1500. Above all, it depends on your end goal for your brows. For example, people with very thin brows who want a thicker, fuller-looking appearance will naturally require sessions that result in more time and ink being used. Getting a consultation ahead of time will help give you a better idea of what kind of pricing can be expected.  ",
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
                  How Much Does Microblading Cost? 
                </Typography>
              </Button>
              <br />
              <Button
                onClick={() => {
                  openDialog({
                    title: "Does Microblading Work on All Skin Types?",
                    message: "The short answer is yes, microblading can be performed on all skin types. That said, people will oily skin will want to alert their technician ahead of time and follow stringent aftercare (like avoiding getting brows wet) to ensure that the brow ink does not run. Likewise, some people with sensitive skin types may need lighter ink strokes and more extended aftercare to help reduce swelling and enable quick healing. Its also worth noting here that people with previous microblading or eyebrow-region tattoos should consult with their treatment professional first about how a new treatment will appear. In many cases, previous tattooing can be covered up. In other cases, it can be difficult.",
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
                  Does Microblading Work on All Skin Types?  
                </Typography>
              </Button>
              <br />
              <Button
                onClick={() => {
                  openDialog({
                    title: "How Long Does Microblading Last?",
                    message: "When done correctly, microblading typically lasts anywhere from one year to three years. It is important to remember that both the placement of the tattooing and the shallower strokes used during the treatment prevent it from yielding totally permanent results. While permanent eyebrow tattoos can be achieved, they often do not look natural. Microblading is designed for a natural appearance, and its semi-permanent results also mean that the brows can still be altered in the future to adhere to ever-changing fashion trends.",
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
                    message: "While little is known about the effects of skin ink on pregnancy, it is currently not recommended that pregnant women receive microblading. This is because all forms of tattooing carry a small risk of infection, which has the potential to cause problems with a developing fetus. Most doctors recommend waiting until after breastfeeding to receive microblading.",
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
                    message: "On a scale of 1-10 clients report 3-5.  A small amount of discomfort should be expected but also be manageable.  You will be numbed with a lidocane based topical cream at least twice during the procedure. More as needed.",
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
                    message: "A touch up is needed 6-8 weeks after your initial procedure.  There will be places the pigment doesn't take well into the skin. The touch up fills in these areas and also gives the color depth we want.   A similar touch up is also done annually to maintain your brow color and shape, this is about $200-$250 depending on work needed.  If it has been 2 -5 years since a touch up,  expect full price since complete brow mapping and procedure will be needed.",
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
