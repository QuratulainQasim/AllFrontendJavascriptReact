import React from 'react';
import styles from './Button.module.css';


const App = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>Hello, React Native!</h2>
    </div>
  );
};

// const styles = ({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

export default App;
