import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Grid,Skeleton2} from '../../../components'
import Card from './Card';

function Board ({data}){
    const {cases,todayDeaths,recovered
    ,deaths,todayCases}= data;

     
    const getValue = (value)=> value ? value :
      <Skeleton2 variant="text" width={182} height={80} props={0}/>;
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Card value={getValue(cases)}
                     label="Total de casos" color="#5da2ff"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card value={getValue(todayDeaths)}
                     label="Total de óbitos hoje" color="#F7bb11"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card value={getValue(todayCases)}
                     label="Total de casos hoje" color="#000"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card value={getValue(deaths)}
                     label="Total de obitos" color="#e95555"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Card value={getValue(recovered)}
                     label="Total de recuperados" color="#67cc34"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Board;