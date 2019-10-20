import React, {Component} from 'react';
import './Resume.css';
import { Document, Page } from 'react-pdf'
const resumePDF = require('./resume.pdf');
require('./pdf.worker.entry');


class Resume extends Component{
    render() {
        return (
            <div className='projects-component'>
                <div className="pdf-container">
                        <Document
                            file={resumePDF}
                        >
                            <Page pageNumber={1} width={window.innerWidth}/>
                        </Document>
                </div>
            </div>
        )
    }
}

export default Resume;