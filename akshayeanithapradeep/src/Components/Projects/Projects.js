import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {PROJECT_IMAGES} from './../../images';
import {Link} from "react-router-dom";
import './Projects.css';

class Projects extends Component {
    render() {

        const projects = [
            {
                name: 'SAJFD HFAFJHD',
                img: PROJECT_IMAGES.seoImage,
                desc: 'This is a Search Engine Optimization Project completed as a part of Information' +
                    '                                        Storage and Retrieval class.',
                linkTo: ''
            },
            {
                name: 'Human Robot Team Observation App',
                img: PROJECT_IMAGES.hrtoImage,
                desc: 'A cross platform application to log robotics' +
                    '                                        team details, built using React Native' +
                    '                                        Javascript framework.',
                linkTo: ''
            },
            {
                name: 'Study Tracker',
                img: PROJECT_IMAGES.studyTrackerImage,
                desc: 'A web application to enter study goals, track' +
                    '                                        time spent working on goals and to adjust' +
                    '                                        schedules as and when needed.',
                linkTo: ''
            },
            {
                name: 'FaceZam',
                img: PROJECT_IMAGES.facezamImage,
                desc: "A Web application that can detect the emotion on a face and displays the corresponding emoji " +
                    "using an Ensemble-CNN model for facial emotion recognition",
                linkTo: ''
            },
            {
                name: 'aiTunes',
                img: PROJECT_IMAGES.aiTunesImage,
                desc: 'A novel approach to queue music to a user based on his present emotional state and the ' +
                    'session-based data',
                linkTo: ''
            },
            {
                name: 'Doodle Recognition',
                img: PROJECT_IMAGES.doodleImage,
                desc: 'A web based paint-like application where the user can doodle and the application will predict ' +
                    'what the user has drawn using Residual Network trained on Google Quick Draw Doodle Dataset',
                linkTo: ''
            },
            {
                name: 'Person Reidentification in the Wild',
                img: PROJECT_IMAGES.personReidentificationImage,
                desc: 'A deep learning model to find a matching per- son in a gallery of images for a given image ' +
                    'using facial and bodily features',
                linkTo: ''
            },
            {
                name: 'Music Genre Detector',
                img: PROJECT_IMAGES.musicGenreImage,
                desc: 'An Android application that detects the genre of a song given as input',
                linkTo: ''
            },
            {
                name: 'Canteen Management System',
                img: PROJECT_IMAGES.canteenImage,
                desc: 'A web application with which a canteen admin can keep track of monthly users and a ' +
                    'canteen user can view his monthly expenses',
                linkTo: ''
            }
        ];
        return (
            <div className='projects-component projects-max-width'>
                <Grid
                    spacing={10}
                    container
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                >
                    {projects.map((project) => {
                        return (
                            <Grid item xs={12} sm={4} key={project.name}>
                                <Link to='/seo' className='project-link'>
                                    <Card className='project-card'>
                                        <CardActionArea href={project.linkTo} className='projects-card'>
                                            <CardMedia
                                                className="card-media"
                                                image={project.img}/>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {project.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {project.desc}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        )
    }
}

export default Projects;