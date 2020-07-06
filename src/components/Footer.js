import React from 'react';
import Typography from '@material-ui/core/Typography';

const footer = {
	padding: "20px",
    position: "absolute",
    bottom: "0",
    width: "100%",
}
function Footer(props) {

    return (
    	<div style={footer}>
        <footer>
	 		    <Typography variant="body2" color="textSecondary" align="center">
	 		      {'© Copyright 2020 Lucas ferreira'}
	 		    </Typography>
	 		    <Typography variant="body2" color="textSecondary" align="center">
	 		      {'Email:lucasf854@gmail.com'}
	 		    </Typography>
	 		    <Typography variant="body2" color="textSecondary" align="center">
	 		      {'Whatsapp:(11)95975-6032'}
	 		    </Typography>    
        </footer>
        </div>
    )
}

export default Footer;