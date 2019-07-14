import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.css'
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footer-component">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <div className="footer-name">Akshaye Anitha Pradeep</div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className="footer-link">
                            <Link to="/contact">Contact</Link>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className="footer-link">
                            <a href="https://www.tamu.edu/" target="_blank">Texas A & M University</a>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
};

export default Footer;