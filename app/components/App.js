var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');

class App extends React.Component {
    render(){
        return(
            <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/battle" component={Battle} exact />
                        <Route path="/popular" component={Popular} />
                        <Route render={function () {
                            return (
                                <div>
                                    <h1>Page Not Found</h1>
                                </div>
                            )
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;