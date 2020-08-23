import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Grid,Skeleton} from '../'
import { getByDisplayValue } from '@testing-library/react';

function Board ({data}){
    const {cases,todayDeaths,recovered
    ,deaths,todayCases}= data

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Card value={getByDisplayValue(cases)}
                     label="total de casos" color="#5d78ff"/>
                </Grid>
            </Grid>
        </div>
    )
}