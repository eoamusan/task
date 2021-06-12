import About from 'components/About/About';
import Layout from 'components/common/Layout';
import ProtectedAuth from 'components/common/ProtectedAuth';
import Home from 'components/Home/Home';
import Login from 'components/Login/Login';
import { Route } from 'react-router';
import 'styles/layout.css';
import "styles/material-icons.css";

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/" render={() => <Layout><Home /></Layout>} />
        <Route exact path="/about" render={() => <Layout><About /></Layout>} />
        <ProtectedAuth exact path="/login" component={() => <Layout><Login /></Layout>} />
      </main>
    </div>
  );
}

export default App;
