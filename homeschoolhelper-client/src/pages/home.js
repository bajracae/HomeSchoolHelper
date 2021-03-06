import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Scream from '../components/Scream';

class home extends Component {
        // Get the data from the firebase
    state = {
        screams: null
    }
    componentDidMount() {
        axios.get('/screams')
        .then(res => {
            this.setState({
                screams: res.data
            });
        })
        .catch(err => console.log(err));
    }
    render() {
        // Display scream body, else display Loading...
        let recentScreamsMarkup = this.state.screams ? (
            this.state.screams.map(scream => <Scream key={scream.screamId} scream={scream}/>)
        ) : (
            <p>Loading...</p>
        );

        return (
            <Grid container spacing={5}>
                {/* xs is for small screens */}
                <Grid item sm={8} xs={12}>
                    {recentScreamsMarkup} 
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Profile...</p> 
                </Grid>
            </Grid>
        );
    }
}

export default home
