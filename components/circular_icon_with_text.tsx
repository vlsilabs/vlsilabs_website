import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CircularIconWithText({ icon, header, description }: any) {
    return (
        <div style={styles.container}>
            <div style={styles.iconContainer}>
                {React.createElement(icon, {
                  fontSize: 'large',
                  style: {
                    color: '#fff'
                  }
                })}
                {/* <FontAwesomeIcon icon={icon} size="3x" style={styles.icon} /> */}
            </div>
            <h3 style={styles.header}>{header}</h3>
            <p style={styles.description}>{description}</p>
        </div>
    );
}

const styles = {
  container: {
    textAlign: 'center' as 'center', // Specify 'center' as a valid TextAlign value
  },
  iconContainer: {
    background: '#0056b3',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    padding: '30px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#fff',
  },
  header: {
    fontSize: '1.5rem',
    margin: '10px 0',
  },
  description: {
    fontSize: '1rem',
    color: '#333',
  },
};

export default CircularIconWithText;
