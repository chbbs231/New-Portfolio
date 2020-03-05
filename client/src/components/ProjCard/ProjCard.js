import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'


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



const ProjCard = props => {
    const classes = useStyles()
    return(
        <div>
    <Card className={classes.root} variant="outlined">
      <CardHeader className={classes.title} color="textSecondary" gutterBottom >
        Title ={props.title}
      </CardHeader>
      <CardContent>
        <Grid container direction="column" justify="flex-start" alignContent="center" spacing={1}>
          <Grid container item justify="center">
            <img src={props.image} alt={props.title} className={classes.image} />
          </Grid>
          <Typography variant="body1" component="span">
            {props.description}
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    


        </div>
    )
}

export default ProjCard