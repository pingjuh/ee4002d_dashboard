import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title(props) {
  return (
    <Typography variant="body1" color="primary" gutterBottom>
      {props.children}
    </Typography>

    


    
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
