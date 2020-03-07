import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import Linkedin from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const BottomNav = () =>{
    const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
    return(
        <Grid container spacing={2} direction="column" alignContent="center" justify="center">
        <Grid container item direction="row" justify="center" alignItems="center">
          <Typography variant="subtitle1" component="p" color="secondary">Contact</Typography>
        </Grid>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Email" value="Email" icon= {<EmailIcon/>}/>
        <BottomNavigationAction href ="https://www.linkedin.com/in/arturo-torres-robles-36155418b/" label="LinkedIn" value="LinkedIn" icon={<Linkedin />} />
        <BottomNavigationAction href ="https://github.com/chbbs231" label="GitHub" value="Github" icon={<GitHubIcon/>} />
      </BottomNavigation>
      </Grid>
    )
}
export default BottomNav