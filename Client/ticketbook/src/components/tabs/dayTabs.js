import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs } from 'react-bootstrap'
import DayTabsRouter from './dayTabsRouter'
import MonthTabsRouter  from './monthTabsRouter'

class DayTabs extends React.Component {
 constructor(){
  super();
  this.state = {activeTab:''};
  this.handleSelect = this.handleSelect.bind(this);
}
componentWillReceiveProps(nextProps) {
    this.setState({activeTab:this.props.mon+'-'+nextProps.monthlyActiveTab});
  }
handleSelect(selectedTab) {
     this.setState({
       activeTab: selectedTab
     });
 }
 //rendering the day tabs
render(){
  return <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
            <Tab eventKey={this.props.mon+'-All'} title={<DayTabsRouter tabId='Select Day' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-01'} title={<DayTabsRouter tabId='01' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-02'} title={<DayTabsRouter tabId='02' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-03'} title={<DayTabsRouter tabId='03' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-04'} title={<DayTabsRouter tabId='04' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-05'} title={<DayTabsRouter tabId='05' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-06'} title={<DayTabsRouter tabId='06' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-07'} title={<DayTabsRouter tabId='07' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-08'} title={<DayTabsRouter tabId='08' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-09'} title={<DayTabsRouter tabId='09' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-10'} title={<DayTabsRouter tabId='10' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-11'} title={<DayTabsRouter tabId='11' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-12'} title={<DayTabsRouter tabId='12' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-13'} title={<DayTabsRouter tabId='13' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-14'} title={<DayTabsRouter tabId='14' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-15'} title={<DayTabsRouter tabId='15' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-16'} title={<DayTabsRouter tabId='16' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-17'} title={<DayTabsRouter tabId='17' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-18'} title={<DayTabsRouter tabId='18' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-19'} title={<DayTabsRouter tabId='19' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-20'} title={<DayTabsRouter tabId='20' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-21'} title={<DayTabsRouter tabId='21' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-21'} title={<DayTabsRouter tabId='22' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-23'} title={<DayTabsRouter tabId='23' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-25'} title={<DayTabsRouter tabId='25' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-26'} title={<DayTabsRouter tabId='26' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-27'} title={<DayTabsRouter tabId='27' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-28'} title={<DayTabsRouter tabId='28' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-29'} title={<DayTabsRouter tabId='29' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-30'} title={<DayTabsRouter tabId='30' year={this.props.mon}/>}></Tab>
            <Tab eventKey={this.props.mon+'-31'} title={<DayTabsRouter tabId='31' year={this.props.mon}/>}></Tab>
    </Tabs>
}
}
export default DayTabs;
