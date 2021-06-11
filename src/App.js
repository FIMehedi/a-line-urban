import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { services } from './fakeData'
import './App.css';

export const UserContext = createContext();
export const TransportContext = createContext();
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF6E40',
            dark: '#fd4e17',
            light: '#ff551f',
            contrastText: '#fff'
        }
    }
})

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});
    const [selectedTransport, setSelectedTransport] = useState(services[0]);

    return (
        <ThemeProvider theme={theme}>
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <TransportContext.Provider value={[selectedTransport, setSelectedTransport]}>
                    <Router>
                        <Switch>
                            <PrivateRoute path="/destination">
                                <Header />
                                <Destination />
                            </PrivateRoute>

                            <Route path="/login">
                                <Header />
                                <Authentication isSignUp={false} />
                            </Route>

                            <Route path="/register">
                                <Header />
                                <Authentication isSignUp={true} />
                            </Route>

                            <Route exact path="/">
                                <Home />
                            </Route>

                            <Route path="*">
                                <Header />
                                <NotFound />
                            </Route>

                        </Switch>
                    </Router>
                </TransportContext.Provider>
            </UserContext.Provider>
        </ThemeProvider>
    );
}

export default App;
