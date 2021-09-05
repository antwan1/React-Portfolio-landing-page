import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainGridItem from "./MainGridItem.js";
import GridItem from "./GridItem.js";
const useStyles = makeStyles((theme) => ({
  mainGridItem: {
    backgroundColor: "blue"
  },
  secondRow: {
    backgroundColor: "green"
  },

  secondRowItem: {
    backgroundColor: "orange"
  },
  thirdRow: {
    backgroundColor: "pink"
  }
}));

export default function GridLayout() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item lg={12} sm={12} xs={12}>
        <MainGridItem />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <GridItem
          title=" Excel Masterclass"
          image="https://rnacentral.org/static/img/expert-databases.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <GridItem
          title=" lorem ipsum"
          image="https://lh3.googleusercontent.com/proxy/YuzDq1HWb1ivbU-f6E7zFtMbpM6cOCuNh1cvi7zE5RyYy4b-g8sinOyx9f3P9giaO3qG7cVcXqwu-PWkPZSbvDfrAVt8TY4goNoakRWhE4nZh5Q9s7WhcqYgNnvhso7hLu0Rd1_pX6VdU-dZuJ6s13IkWjvmH6lyP-5d0YNvUOq-F9dskQ"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Grid>
      <Grid item lg={4} sm={12} xs={12} md={12}>
        <GridItem
          title="Random title "
          image="https://www.southwiltsmencap.org.uk/wp-content/uploads/support-1.png"
          description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Grid>
      <Grid item lg={4} sm={12} xs={12} md={12}>
        <GridItem
          title="random thing"
          image="https://cdn.smartbrief.com/sites/default/files/styles/originals_full_summary_banner_style/public/original-content/AdobeStock_331489342.jpeg?itok=XNIuVH4y"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Grid>
      <Grid item lg={4} sm={12} xs={12} md={12}>
        <GridItem
          title="random thing"
          image="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Grid>
    </Grid>
  );
}
