
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import {Layout} from './layout/Layout';
import Logout from './pages/Logout/Logout'
import MnUser from './pages/MnUser';
import Register from './pages/Register';
import PageAdd from './pages/PageAdd';

const App = ()=>{

    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Layout>
                     <Route path='/home' exact component={Home}/>
                     <Route path='/add-script' exact component={PageAdd}/>
                     <Route path='/log-out' exact component={Logout} />
                     <Route path='/users' exact component={MnUser}/>
                     
                </Layout>
            </Switch>
        </Router>
    )
}

export default App;