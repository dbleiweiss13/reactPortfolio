import React from 'react'
import './projectComponent.css'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function ProjectComponent(props) {

    function openLink(link) {
        console.log(link)
        window.open(link, '_blank');
    }
    
    return (
        <div className="projectContainer">
            {props.data.map(e => {
                const imageStyle = {
                    backgroundImage: `url(${e.screenshot})`
                }

                return (
                    <div style={imageStyle} className="card">
                        <div className="cardOpacity">
                            <Typography>
                                <p className="title">{e.title}</p>
                            </Typography>
                            <div className="buttonDiv">
                                <Button onClick={() => {openLink(e.liveLink)}} className="button" variant="contained" color="primary">
                                    View
                                </Button>
                                <Button onClick={() => {openLink(e.github)}} className="button" variant="contained" color="secondary">
                                    Github
                                </Button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectComponent
