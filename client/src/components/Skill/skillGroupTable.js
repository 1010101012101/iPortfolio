import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
const SkillGroupTable = ({ itemRows }) => (
    <Grid columns={itemRows.length + 1} textAlign='center'>
        {itemRows.map((row, index) => <Grid.Row key={index}>{row}</Grid.Row>)}
    </Grid>
);

export default SkillGroupTable;