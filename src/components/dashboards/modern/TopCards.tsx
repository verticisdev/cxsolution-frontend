import Image from "next/image";
import { Box, CardContent, Grid, Typography } from "@mui/material";

import icon1 from "public/images/svgs/icon-connect.svg";
import icon2 from "public/images/svgs/icon-user-male.svg";
import icon3 from "public/images/svgs/icon-briefcase.svg";
import icon4 from "public/images/svgs/icon-mailbox.svg";
import icon5 from "public/images/svgs/icon-favorites.svg";
import icon6 from "public/images/svgs/icon-speech-bubble.svg";

const topcards = [
  {
    icon: icon2,
    title: "Clientes",
    digits: "5",
    bgcolor: "primary",
  },
  {
    icon: icon4,
    title: "NPS",
    digits: "65",
    bgcolor: "secondary",
  },
  {
    icon: icon6,
    title: "Feedback",
    digits: "55",
    bgcolor: "success",
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={3} mt={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={4} key={i}>
          <Box bgcolor={topcard.bgcolor + ".light"} textAlign="center">
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image src={topcard.icon} alt={"topcard.icon"} width="50" />
              <Typography
                color={topcard.bgcolor + ".main"}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
                {topcard.title}
              </Typography>
              <Typography
                color={topcard.bgcolor + ".main"}
                variant="h4"
                fontWeight={600}
              >
                {topcard.digits}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
