import React from 'react';


const Loader = () => {
  return (
    <div style={styles.loaderWrapper}>
      <div style={styles.spinner}></div>
      <h2 style={{ marginTop: '20px', color: '#555' }}>Please wait, loading data...</h2>
    </div>
  );
};

const styles = {
  loaderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #f0f0f0, #cfcfcf)',
  },
  spinner: {
    width: '100px',
    height: '100px',
    border: '10px solid #ddd',
    borderTop: '10px solid #3498db',
    borderRight: '10px solid #2ecc71',
    borderBottom: '10px solid #f39c12',
    borderLeft: '10px solid #e74c3c',
    borderRadius: '50%',
    animation: 'spin 1.5s linear infinite',
  },
};
 


export default Loader;
