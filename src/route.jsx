
import {Router, Route, hashHistory} from 'react-router';
import HomePro from './modules/home-project/containers';
import CreatePro from './modules/create-project/containers';

export default (
<Router history={hashHistory}>
    <Route path="/" component={HomePro} />
    <Route path="/create" component={CreatePro} />
</Router>
)
