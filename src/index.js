import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store, { history } from 'store';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { ConnectedRouter } from 'connected-react-router';

const FontAwesomeCloseButton = ({ closeToast }) => (
  <i
    className="material-icons"
    onClick={closeToast}
  >
    close
  </i>
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <ToastContainer
          closeButton={<FontAwesomeCloseButton />}
          position={toast.POSITION.TOP_CENTER}
          draggable={false}
          transition={Slide}
          toastClassName="notification-toast" />
        <App />
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
