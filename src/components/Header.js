import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    const goToGithub = () => {
        window.location.href = "https://github.com/dbleiweiss13"
    }

    const goToLinkedIn = () => {
        window.location.href = "https://www.linkedin.com/in/david-bleiweiss-589085157/"
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        David Bleiweiss
                    </Typography>
                    <Button onClick={goToGithub} color="inherit">Github</Button>
                    <Button onClick={goToLinkedIn} color="inherit">LinkedIn</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}