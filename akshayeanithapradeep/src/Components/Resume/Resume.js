import React, {Component} from 'react';
import './Resume.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const resumePDF = require('./resume.pdf');

class Resume extends Component{
    render() {
        return (
            <div className='projects-component'>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={8}>
                        <embed src={resumePDF} width="100%" height="600px" alt="pdf"/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Resume;