import { Grid, Paper } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TransportContext } from '../../App';
import classes from './Service.module.css'

const Service = ({ service }) => {
    const { transport, photo } = service;
    const [loggedInUser, setLoggedInUser] = useContext(TransportContext);
    const history = useHistory()

    const handleSelectTransport = () => {
        setLoggedInUser(service);
        history.push('/destination')
    }

    return (
        <Grid item >
            <Paper elevation={3} className={classes.card} onClick={handleSelectTransport}>
                <div className={classes.cardImg}>
                    <img src={photo} alt="" />
                </div>
                <h3>{transport}</h3>
            </Paper>
        </Grid>
    );
};

export default Service;