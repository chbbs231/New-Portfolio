import React from "react"
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const About = () => {
    return(
    <div>
        <Container>
            <Card>
                <CardContent>
                    <Typography variant='h4' component='header' color='textPrimary'>
                        Hello! Welcome
                    </Typography>
                </CardContent>
            </Card>
        </Container>
        </div>
    )
}

export default About