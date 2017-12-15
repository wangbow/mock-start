import React, { Component} from 'react';
import {Icon,Row,Col} from 'tinper-bee';
import Tabs, {TabPane} from 'bee-tabs';
import Card from '../Card';
import {CreateIcon} from '../Create';
import PropTypes from 'prop-types';
import './index.less';

 
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeKey:"hello"
        }
    }
    onTabChange = (activeKey) => {
        this.setState({
            activeKey,
        });
    }

    /**
     * 点击项目图标，去往项目创建界面
     */
    handleClickCreate = () =>{
        console.log("create");
        this.context.router.push(`/create`);
    }
    render() {
        let {info} = this.props;

        return (
            <div className="create-pro-home">
                <div className="header">
                        <Tabs
                            defaultActiveKey="1"
                            tabBarStyle="downborder"
                            onChange={this.onTabChange}
                        >
                            <TabPane  
                                tab={
                                    <span>
                                        <Icon
                                            type="uf-star"
                                            className=""
                                        />
                                        <div className="margin-top-5">全部项目</div>
                                        
                                    </span>
                                } 
                                key="1"
                                >
                                <ul>
                                    {info.allpro.map((item)=>{
                                    return <li className="li-margin"> <Card info={item.title} /></li>
                                    })}
                                </ul>

                            </TabPane>
                            <TabPane  tab={<span>
                                    <Icon
                                        type="uf-star"
                                        className=""
                                    />
                                    <div className="margin-top-5">我创建的项目</div>
                                </span>} key="2">
                                <ul>
                                    {info.mypro.map((item)=>{
                                    return <li className="li-margin"> <Card info={item.title} /></li>
                                    })}
                                </ul>
                            </TabPane>
                            <TabPane tab={<span>
                                    <Icon
                                        type="uf-star"
                                        className=""
                                    />
                                    <div className="margin-top-5">我参与的项目</div>
                                </span>} key="3">
                                <ul>
                                    {info.myjoin.map((item)=>{
                                    return <li className="li-margin"> <Card info={item.title} /></li>
                                    })}
                                </ul>
                            </TabPane>

                        </Tabs>
                </div>  
                <div className="create-wraper" onClick={this.handleClickCreate}>
                     {CreateIcon()}              
                </div>    
            </div>      
        )
    }
}


Header.contextTypes = {
    router: PropTypes.object
}

export default Header;