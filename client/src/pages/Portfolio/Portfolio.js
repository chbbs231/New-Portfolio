import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Nav from '../../components/Nav'
import ProjCard from '../../components/ProjCard'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      }
}))

const projects = [
    {
        title:'Bam',
        image: '',
        github: 'https://chbbs231.github.io/projectt-1/',
        description: `Get Breaking News, top headlines and more!`
    },
    {
        title:'Flake',
        image: '',
        github: 'https://github.com/mesmerizingYeti/flake',
        heroku: 'https://enigmatic-ravine-58782.herokuapp.com/',
        description: `Flake is a full stack application that allows users to generate different excuses for events they just d o n ' t want to attend. We've all been there... Flake integrates several technologies to let its users use randomly generated excuses based on severity and even create their own excuses. Once they are happy with the reason to flake, they're given the ability to add them to their "Excuse Calendar" for them to check at any time so they can always keep their story straight`
    },
    {
        title:'Werk',
        image: '',
        github: 'https://github.com/mesmerizingYeti/werk',
        heroku: 'https://tranquil-reef-16365.herokuapp.com/',
        description: `WERK is a full stack MERN application that lets users create a WERK account and create their own workouts or generate random workouts using exercises that the app offers. Users are able navigate between several pages throughout the app. The Home page gives them the ability to quickstart (which will generate a random workout) or create a custom workout (which allows the user to build their own workout). The Custom and Quickstart tabs go to those two pages. The Exercises page gives a list of all the exercises offered by the app. And the About page gives some info on the lovely developers. Listed on the Profile tab is the user's information and their saved workouts.`
    }
]

const Portfolio  = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Nav/>
        <Grid 
          container 
          direction="column" 
          justify="flex-start" 
          alignItems="center" 
          wrap="nowrap" 
          spacing={2} 
          className={classes.fullHeight}
        >
          <Typography variant='h1' component='header' color='textPrimary'>Portfolio</Typography>
          {
            projects.map(project => (
              <Grid item xs={9}>
                <ProjCard 
                  {...project}
                />
              </Grid> 
            ))
          }
        </Grid>
      </div>
    )
}

export default Portfolio