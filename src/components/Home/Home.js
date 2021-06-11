import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { services } from '../../fakeData';
import Header from '../Header/Header';
import Service from '../Service/Service';
import classes from './Home.module.css'


const Home = () => {

    return (
        <div className={classes.homeContainer}>
            <Header />
            <Container>
                <Grid container spacing={3} justify="center" alignItems="center" className={classes.home}>
                    {
                        services.map(service => <Service key={service.id} service={service} />)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Home;