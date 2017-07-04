import React from "react";
import Logo from "../../static/images/iwennews.png";
import {Icon,Carousel,Tabs} from "antd";
import "../../static/css/mobile_header.css"


export default class MobileHeader extends React.Component{
    render(){
        return (
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="img"/>
                    <span>新闻</span>
                    <Icon className="login" type="smile-o"></Icon>

                </div>
                <hr/>
            </div>
        )
    }
}