import {Component} from 'react';
import {Navbar,FormControl,Menu,Badge,Icon,Breadcrumb} from 'tinper-bee';
import "./index.less";

export default class Card extends Component {
    constructor(props, context) {
          super(props, context);
          this.state = {
           
          }
    }
    
    render(){
        let {info} = this.props;
        return  <div>
                   <div className="card-wraper">
                        <div className="card-header">
                            <Icon type="uf-file-s"  />
                        </div>    
                        <h3 className="text-center"> {info}</h3>
                        {
                            info!="开放平台mock"?
                                <div className="clearfix"> 
                                    <div className="pull-left"> 
                                            <Icon type="uf-pencil-s" /> 
                                            <span> 设置</span>
                                    </div>
        
                                    <div className="pull-right"> 
                                            <Icon type="uf-del" /> 
                                            <span> 删除</span>
                                    </div>
                                </div>
                            :""
                        }
                      
                   </div> 
                </div>

    }       

}
