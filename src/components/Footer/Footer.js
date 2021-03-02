/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import './footer.css'

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
            {/* <Container maxWidth="md"> */}
                <Toolbar>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                    >
                        <a className="emailLink" href={"mailto:dbleiweiss@fortitudedevelopment.com"}>
                            dbleiweiss@fortitudedevelopment.com
                        </a>
                    </Link>
                </Toolbar>
            {/* </Container> */}
        </AppBar>
    );
}