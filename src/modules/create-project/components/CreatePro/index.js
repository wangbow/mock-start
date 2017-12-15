
import React, {Component} from 'react';
import {Icon,Row,Col,Form,FormControl,Radio,Button} from 'tinper-bee';
import './index.less';

const FormItem=Form.FormItem;


class CreatePro extends Component {
    constructor(props){
        super(props);
        this.state = {
            proType:"servie",
            authProxy:"private",
            checkFormNow:false
        }
    }

    checkForm = (flag,obj) => {
        console.log(flag);
        console.log(obj);
    }

    handClick=()=>{
        this.setState({
            checkFormNow:true
        });
    }

    /**
     * 项目类型改变
     */
    typeChange = (value) =>{
        this.setState({
            proType:value
        })
    }

    authChange = (value) =>{
        this.setState({
            authProxy:value
        })
    }
  
    render() {

        return (
            <div className="create-pro"> 
                <Row>
                    <Col md={12} sm={12}>
                        <div className="create-header">
                            <h2>创建项目: </h2>
                        </div>
                    </Col>
                    <Col md={6} sm={6} className="create-body">
                        <Form submitCallBack={this.checkForm} showSubmit={false} checkFormNow={this.state.checkFormNow}>
                            <FormItem showMast={true}  labelName="项目名称:" isRequire={true} valuePropsName='value' errorMessage="请输入项目名称" method="blur"  inline={true}>
                                <FormControl name="itemname"  placeholder="请输入项目名称"/>
                            </FormItem>
                            <FormItem showMast={true}  labelName="描述:" isRequire={true} valuePropsName='value' errorMessage="请输入项目名称的描述" method="blur"  inline={true}>
                                <FormControl name="iteminfo"  placeholder="请输入项目名称的描述"/>
                            </FormItem>
                            
                            <FormItem showMast={true} labelName="项目类型:" isRequire={false} method="change" inline={true}>
                                <Radio.RadioGroup
                                    selectedValue={this.state.proType} onChange={this.typeChange}
                                    name="proType">
                                    <Radio value="servie" >普通</Radio>
                                    <Radio value="msco-service" >微服务项目</Radio>
                                </Radio.RadioGroup>
                            </FormItem>

                            <FormItem showMast={true}  labelName="基本路径host:" isRequire={true} valuePropsName='value' errorMessage="请输入域名" method="blur"  inline={true}>
                                <FormControl name="itemhost"  placeholder="请输入项目地址,不可更改"/>
                            </FormItem>
                           
                            <FormItem showMast={true} labelName="权限代理:" isRequire={false} method="change" inline={true}>
                                <Radio.RadioGroup
                                    selectedValue={this.state.authProxy} onChange={this.authChange}
                                    name="authProxy">
                                    <Radio value="private" >私有</Radio>
                                    <Radio value="public" >公开</Radio>
                                </Radio.RadioGroup>
                            </FormItem>

                            <Button colors="primary" className="btn" onClick={this.handClick}>提交</Button>
                        </Form>
                    </Col>
                    <Col md={6} sm={6} >

                    </Col>        
                </Row>   
            </div>
        )
    }
}

export default CreatePro;