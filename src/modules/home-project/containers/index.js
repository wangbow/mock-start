import Card from '../components/Card';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Header from '../components/Header';



class HomePro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                allpro:[{"title":"我的第一个项目"},{"title":"我的第二个项目"},{"title":"开放平台mock"}],
                mypro:[{"title":"创建一"},{"title":"创建二个项目"}],
                myjoin:[{"title":"参与一"},{"title":"参与二个项目"}]
            }
        };
    }

    render () {
        let {data} = this.state;
        return (
            <div>
                <Header info={data}/> 
            </div>    
        )
    }
}

export default HomePro;


