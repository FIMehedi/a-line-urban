import { Button, Container, Grid } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import React, { useContext, useState } from 'react';
import { TransportContext } from '../../App';
import GoogleMap from '../GoogleMap/GoogleMap';
import './Destination.css'

const Destination = () => {
    const [selectedTransport] = useContext(TransportContext);
    const [location, setLocation] = useState({
        from: '',
        to: '',
        date: '',
        confirm: false,
        error: false
    })

    const handleChange = e => {
        const newLocation = { ...location };
        newLocation[e.target.name] = e.target.value;
        setLocation(newLocation);
    }

    const handleSubmit = e => {
        const newLocation = { ...location };
        if (location.from && location.to && location.date) {
            newLocation.confirm = true;
        } else {
            newLocation.error = true;
        }
        setLocation(newLocation);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={4} justify="center">
                <Grid item >
                    <div className="destination-form">
                        {
                            location.confirm
                                ?
                                <div>
                                    <div className="selected-destination">
                                        <ul>
                                            <li>{location.from}</li>
                                            <li>{location.to}</li>
                                            <li>{location.date}</li>
                                        </ul>

                                    </div>
                                    <div className="service-option">
                                        <img src={selectedTransport.photo} alt="" />
                                        <p>{selectedTransport.transport}</p>
                                        <div className="people"> <PeopleIcon /> <span>{selectedTransport.people}</span></div>
                                        <p>${selectedTransport.cost}</p>
                                    </div>
                                </div>
                                :
                                <form action="" autoComplete="off" onSubmit={handleSubmit}>
                                    <label htmlFor="from">Pick Form</label>
                                    <input onChange={handleChange} name="from" type="text" id="from" placeholder="Place A" />

                                    <label htmlFor="to">Pick to</label>
                                    <input onChange={handleChange} name="to" type="text" id="to" placeholder="Place B" />

                                    <label htmlFor="date">Date</label>
                                    <input onChange={handleChange} name="date" type="date" id="date" placeholder="Place B" />

                                    {location.error && <small className="error">All fields are required</small>}

                                    <Button type="submit" variant="contained" color="primary" fullWidth className="searchBtn">Search</Button>
                                </form>
                        }
                    </div>
                </Grid>
                <Grid item className="google-map-container">
                    <div className="google-map">
                        <GoogleMap />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Destination;