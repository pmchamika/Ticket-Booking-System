import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom';
class MonthTabsRouter extends React.Component {
constructor(){
  super();
  this.state={style:{'font-size': '16px'}}
 }

 render(){
   return <Link to={{pathname: '/', search: '?day=All&mon='+this.props.mon }} >
     <p style={this.state.style}>{this.props.mon}</p>
    </Link>
 }
}
export default MonthTabsRouter;
