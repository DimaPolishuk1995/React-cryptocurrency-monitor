import * as React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';

const styles: StyleRulesCallback<'root'> = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
});


class Header extends React.Component<WithStyles<'root'>, any> {
  public render() {
    const { classes } = this.props;
    return (
      <div style={{flexGrow: 1}}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.root}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.root}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.root}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.root}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.root}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)<{}>(Header);

