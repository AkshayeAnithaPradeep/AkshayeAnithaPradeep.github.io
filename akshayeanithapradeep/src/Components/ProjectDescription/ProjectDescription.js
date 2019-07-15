import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './ProjectDescription.css';

class ProjectDescription extends Component {
    render() {

        const {name, desc, links} = this.props.projectData;
        const newDesc = desc.split ('\n').map ((item, i) => <p key={i}>{item}</p>);

        return(
            <div className='project-description-component'>
                <Paper className='project-paper'>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className='project-header'>
                            <Typography variant='h3'>
                                {name}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='project-desc'>
                            <Typography variant='h6'>
                                Description
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='project-body'>
                            <Typography variant='body1'>
                                {newDesc}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='project-desc'>
                            <Typography variant='h6'>
                                Important Links
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='project-links'>
                            {links.map(link => {
                                return(
                                    <Typography variant='subtitle1' key={link.link_name}>
                                        {link.link_name + ':  '}
                                        <a href={link.link_url} target='_blank'>{link.link_url}</a>
                                    </Typography>
                                )})}
                        </div>
                    </Grid>
                </Grid>
                </Paper>
            </div>
        )
    }
}

export default ProjectDescription;