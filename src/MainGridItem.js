import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: 400,
    backgroundImage:
      "url(https://thumbor.forbes.com/thumbor/640x640/https://blogs-images.forbes.com/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?width=960)",
    color: theme.palette.common.white,
    backgroundSize: "cover"
  },
  mainItem: {
    padding: theme.spacing(6),
    textAlign: "left",
    display: "flex",
    flexDirection: "Column",
    justifyContent: "center"
  }
}));

export default function MainGridItem() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item className={classes.mainItem} md={6}>
        <Typography component="h2" variant="h4">
          Hello coding
        </Typography>
        <Typography>
          Do you want have one of the best services? Here i can provide you the
          best python, java, javascript, front and back end design.
        </Typography>
      </Grid>
    </Grid>
  );
}
