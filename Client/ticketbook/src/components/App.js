import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
import { Tab, Tabs } from 'react-bootstrap';
import MonthTabsRouter from './tabs/monthTabsRouter';
import DayTabs from './tabs/dayTabs';
import styles from '../CSS/App.css';

export default class App extends React.Component {
constructor() {
    super();
  this.state = {selectedday:'All', selectedmon: 1, data: [], activeTab:2016};
    this.getData = this.getData.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
componentWillReceiveProps(nextProps) {
    if(nextProps.history.location.search){
    var search = nextProps.history.location.search;
    search = search.substring(1);
    var searchObj = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
    this.setState({activeTab: parseInt(searchObj.mon)});
    this.setState({selectedmon: searchObj.mon});
    this.setState({selectedday: searchObj.day});


this.getData(this, searchObj.mon, searchObj.day);
  }else{
      this.getData(this, 1, 'All');
    }
  }
componentDidMount(){
    this.getData(this, 1, 'All');
  }
handleSelect(selectedTab) {
     this.setState({
       activeTab: selectedTab,
       selectedmon: selectedTab
     });
  }
getData(ev, mon, day){
    axios.get('http://localhost:8080/expense/'+mon+'/'+day)
      .then(function(response) {
        ev.setState({data: response.data});
        ev.setState({selectedmon: mon});
        ev.setState({selectedday: day});
      });


  }

  //rendering the month tab
render() {
    return (
      <div>
          <div style={{marginTop:"5%",marginBottom:"18%"}}>
        <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
          <Tab eventKey={1} title={<MonthTabsRouter mon='Jan' />}><DayTabs mon='1' dailyActiveTab={this.state.selectedday}/></Tab>
          <Tab eventKey={2} title={<MonthTabsRouter mon='Feb' />}><DayTabs mon='2' dailyActiveTab={this.state.selectedday}/></Tab>
          <Tab eventKey={3} title={<MonthTabsRouter mon='March'/>}><DayTabs mon='3' dailyActiveTab={this.state.selectedday}/></Tab>
          <Tab eventKey={4} title={<MonthTabsRouter mon='April'/>}><DayTabs mon='4' dailyActiveTab={this.state.selectedday}/></Tab>
          <Tab eventKey={5} title={<MonthTabsRouter mon='May'/>}><DayTabs mon='5' dailyActiveTab={this.state.selectedday}/></Tab>
            <Tab eventKey={6} title={<MonthTabsRouter mon='June'/>}><DayTabs mon='6' dailyActiveTab={this.state.selectedday}/></Tab>
            <Tab eventKey={7} title={<MonthTabsRouter mon='July'/>}><DayTabs mon='7' dailyActiveTab={this.state.selectedday}/></Tab>
            <Tab eventKey={8} title={<MonthTabsRouter mon='Aug'/>}><DayTabs mon='8' dailyActiveTab={this.state.selectedday}/></Tab>
            <Tab eventKey={9} title={<MonthTabsRouter mon='Sep'/>}><DayTabs mon='9' dailyActiveTab={this.state.selectedday}/></Tab>
            <Tab eventKey={10} title={<MonthTabsRouter mon='Oct'/>}><DayTabs mon='10' dailyActiveTab={this.state.selectedday}/></Tab>
            <Tab eventKey={11} title={<MonthTabsRouter mon='Nov'/>}><DayTabs mon='11' dailyActiveTab={this.state.selectedday}/></Tab>
            <Tab eventKey={12} title={<MonthTabsRouter mon='Dec'/>}><DayTabs mon='12' dailyActiveTab={this.state.selectedday}/></Tab>

        </Tabs>
        <Add selectedday={this.state.selectedday} selectedmon={this.state.selectedmon} />
        <table>

          <tbody>
            {
              this.state.data.map((exp) => {
                return  <tr><td className='counterCell'></td><td className='desc-col'>{exp.road}</td><td className='button-col'>{exp.amount}</td><td className='button-col'>{exp.day}</td><td className='button-col'>{exp.mon}</td></tr>
              })
            }
            </tbody>
</table>
          </div>
      </div>
    );
  }
}
