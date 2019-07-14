import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {aboutHeaderImage} from "../../images";
import './About.css'

class About extends Component {


    render() {
        return (
            <Card className="card">
                <CardActionArea>
                    <CardMedia
                        className="card-media"
                        image={aboutHeaderImage}
                        title="Moi"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            About
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <p>I am Akshaye, currently a Software Development Intern at Paycom. I am a Graduate student,
                                completing my Masters in Computer Science at <a href="http://www.tamu.edu"
                                                                                target="_blank">Texas A & M
                                    University</a>.</p>
                            <p> I have extensive experience in Javascript programming and Front End development and am
                                knowledgeable in the current and best practices in the
                                design and development of customer-facing applications. I am
                                currently working on creating an Online Seating Chart for Paycom Headquarters that will
                                allow overall floor view with the ability to assign occupants to rooms/seats using
                                ReactJS. I worked as a Web Developer at JP Morgan Chase
                                and Co. for a year, where I developed user interfaces that were user friendly,
                                responsive as well as ADA compliant, using Object
                                Oriented Javascript. Furthermore, I built live web applications as demos for multiple
                                projects that I did during my Graduate studies at Texas A & M University. Further
                                details on these projects can be found here. </p>
                            <p>My other interests include Deep Learning, Natural Language Processing and Data
                                Mining. I have also worked on Java software development during
                                my internship with JP Morgan. Additionally, having developed software in a strictly
                                agile environment throughout my previous job, I have a thorough understanding of the
                                lean and agile software development principles.</p>
                            <p>I enjoy being challenged and engaging with projects that require me to work outside my
                                comfort and knowledge set, as continuing to learn new languages and development
                                techniques are important to me.</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default About;