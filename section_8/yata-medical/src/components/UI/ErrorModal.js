import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
// import React from 'react';
// import Card from './Card';
// import Button from './Button';
// import calsses from './ErrorModal.module.css';
// import { ReactDOM } from 'react';

// const Backdrop = props =>{
//     return  <div className={calsses.backdrop}/>;
// }
// const ModalOverlay = props => {
//     return (
//         <Card className={calsses.modal}>
//             <header className={calsses.header}>
//                 <h2>{props.title}</h2>
//             </header>
//             <div className={calsses.content}>
//                 <p>{props.message}</p>
//             </div>
//             <footer className={calsses.actions}>
//                 <Button onClick={props.onConfirm}>Okay</Button>
//             </footer>
//         </Card>
//     );
// }

// const ErrorModal = props =>{
//     return (
//         <React.Fragment>
//            {ReactDOM.createPortal(
//                 <Backdrop onClick={props.onConfirm}/>, 
//                 document.getElementById('backdrop-root')
//             )}
//             {ReactDOM.createPortal(
//                 <ModalOverlay
//                     title = {props.title}
//                     message = {props.message}
//                     onConfirm={props.onConfirm}
//                 />,
//                 document.getElementById('overlay-root')
//             )}
//         </React.Fragment>
//     );
// }
// export default ErrorModal;