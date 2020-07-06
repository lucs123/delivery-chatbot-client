import React from 'react';
import Typography from '@material-ui/core/Typography';


function Footer(props) {
	const styles = {
  		container: {
  			padding: '20px',
  			backgroundColor: 'white',
  			color: 'white',
  			borderTop: '3px solid'
  			},

  		 text:{
		    margin: 'auto',
		    textAlign: 'center',
		  },

		  textAlign: {
		    position: 'absolute', 
		    left: '95%', 
		    bottom: '50%',
		    transform: 'translate(-50%, -50%)'
		  }
	}

	// const lineBR = {
	// 	// lineHeight: '150px'
	// 	height
	// }

	return(
			<footer style={styles.container}>
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
		)
}
            // <img src="https://img.icons8.com/small/24/000000/facebook.png" alt='Facebook' className={classes.logo} aria-label="Facebook"/>
            // <img src="https://img.icons8.com/small/24/000000/whatsapp.png" alt='Whatsapp' className={classes.logo} aria-label="Whatsapp"/>

export default Footer;