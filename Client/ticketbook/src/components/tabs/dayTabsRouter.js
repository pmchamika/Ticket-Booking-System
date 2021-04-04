import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
class DayTabsRouter extends React.Component {
 constructor(){
  super();
  this.state={style:{'font-size': '10px'}}
 }
render(){
  if(this.props.tabId == 'All'){
   return <Link to={{pathname: '/', search: '?day=All&mon='+this.props.mon}} >
     <p style={this.state.style}>Show All</p>
    </Link>
  }
else{
   return <Link to={{pathname: '/', search: '?day='+this.props.tabId + '&mon='+this.props.mon }} >
     <p style={this.state.style}>{this.props.tabId} {this.props.mon}</p>
    </Link>
  }
}
}
export default DayTabsRouter;
