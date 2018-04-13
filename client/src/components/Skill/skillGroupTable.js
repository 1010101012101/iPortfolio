import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

const SkillGroupTable = ({ itemRows }) => (
    <Grid columns={itemRows.length + 1} textAlign='center'>
        {itemRows.map((row, index) =>
            <Grid.Row key={index}>{row}</Grid.Row>)}
    </Grid>
);

export default SkillGroupTable;

SkillGroupTable.propTypes = {
    itemRows: PropTypes.array
};