import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import background1 from '../img/logo/addbackground.jpg';
import {Link} from 'react-router-dom';
var querystring = require('querystring');
class Add extends React.Component {


   spay;
   dpay;

    constructor() {
      super();


this.state = {
        road: '',
        amount: '',
        day: '',
        mon: '',
        pay: '',
        card: '',
        cvc: '',
        holdername: '',
        phone:'',
        pin: '',
        nic:'',
        email:'',
        price:'',
        to:'',
        sub:'',
        body:'',
        discount:'',
        messageFromServer: '',
        modalIsOpen: false
      }
this.handleSelectChange = this.handleSelectChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.insertNewExpense = this.insertNewExpense.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
closeModal() {
      this.setState({
        modalIsOpen: false,
          road: 'Negombo-Colombo',
        amount: '',
        day: '01',
        mon: 'january',
          pay: 'Sampath',
          card: '',
          cvc: '',
          holdername: '',
          phone:'',
          pin: '',
          nic:'',
          email:'',
          price:'1',
          discount:'0',
          to:'',
          sub:'Train Ticket Payment Confirmation',
          body:'Payment Successfull',
        messageFromServer: ''
      });
    }
componentDidMount() {
    if(this.props.selectedday == 'All'){
      this.setState({
        day: '01'
      });
    }else{
      this.setState({
          day: this.props.selectedday
      });
    }

      this.setState({
          mon: this.props.selectedmon
      });
    }
componentWillReceiveProps(nextProps){
      if(this.props.selectedday == 'All'){
        this.setState({
          day: '01'
        });
      }else{
        this.setState({
            day: this.props.selectedday
        });
      }

      this.setState({
        mon:nextProps.selectedmon
      })
    }
    //handle select box changes
handleSelectChange(e) {
      if (e.target.name == 'day') {
        this.setState({
          day: e.target.value
        });
      }
      if (e.target.name == 'mon') {
        this.setState({
          mon: e.target.value
        });
      }
    if (e.target.name == "road") {
        this.setState({
            road: e.target.value
        });
    }
    if (e.target.name == "pay") {
        this.setState({
            pay: e.target.value
        });


        var optionvalue = document.getElementById("pay").value;
        if (optionvalue == "Sampath") {
            document.getElementById('ifSampath').style.visibility = 'visible';
            document.getElementById('ifDialog').style.visibility = 'hidden';

            this.spay = {
                price:this.pri,
                amount: this.state.amount,
                road: this.state.road,
                card:  this.state.card,
                discount: this.state.discount,

            }

        } else if (optionvalue == "Dialog") {
            document.getElementById('ifDialog').style.visibility = 'visible';
            document.getElementById('ifSampath').style.visibility = 'hidden';

            this.dpay = {
                price:this.pri,
                amount: this.state.amount,
                road: this.state.road,
                phone:  this.state.phone,

            }
        }else{
            document.getElementById('ifDialog').style.visibility = 'hidden';
            document.getElementById('ifSampath').style.visibility = 'hidden';
        }

    }
    }
    //handle onclick
onClick(e) {
      this.insertNewExpense(this);
    }
insertNewExpense(e) {
    var ticket = {
      road: e.state.road,
      amount: e.state.amount,
      day: e.state.day,
      mon: e.state.mon,
        pay:  e.state.pay,
        card:  e.state.card,
        cvc:  e.state.cvc,
        holdername: e.state.holdername,
        phone: e.state.phone,
        pin:  e.state.pin,
        nic: e.state.nic,
        email: e.state.email,
        price:'1',
    }
      axios.post('http://localhost:8080/ticket', ticket).then(function(response) {
        e.setState({
          messageFromServer: response.data
        });
      });

    axios.get('http://localhost:8081/roads/'+ e.state.road) .then(response => {
        this.pri= response.data.price


        console.log(response.data.pri)


    })
    axios.get('http://localhost:8082/roads/'+ e.state.road) .then(response => {
        this.pri= response.data.price


        console.log(response.data.pri)


    })

    axios.get('http://localhost:8081/govermentnic/'+ e.state.nic) .then(response => {

        console.log(response.data)


    })




    axios.post('http://localhost:8081/sampathpayment', this.spay).then(function(response) {
        e.setState({
            messageFromServer: response.data
        });

    });


    axios.post('http://localhost:8082/dialogpayment', this.dpay).then(function(response) {
        e.setState({
            messageFromServer: response.data
        });
    });


    var mail = {
        to: e.state.email,
        sub: 'Train Ticket Reservation',
        body: 'Payment Successfull',
    }
    var headers = {
        'Content-Type': 'application/json',
    }
    axios.post('http://localhost:8188/email/send', mail,{headers: headers}).then(function(response) {
        e.setState({
            messageFromServer: response.data
        });
    });

    }
    //handle text box changes
handleTextChange(e) {

if (e.target.name == "amount") {
        this.setState({
          amount: e.target.value
        });
      }
    if (e.target.name == "nic") {
        this.setState({
            nic: e.target.value
        });
    }
    if (e.target.name == "pin") {
        this.setState({
            pin: e.target.value
        });
    }
    if (e.target.name == "phone") {
        this.setState({
            phone: e.target.value
        });
    }
    if (e.target.name == "card") {
        this.setState({
            card: e.target.value
        });
    }
    if (e.target.name == "cvc") {
        this.setState({
            cvc: e.target.value
        });
    }
    if (e.target.name == "holdername") {
        this.setState({
            holdername: e.target.value
        });
    }
    if (e.target.name == "email") {
        this.setState({
            email: e.target.value
        });
    }
    }

    //rendering the ticket booking form
render() {
   if(this.state.messageFromServer == ''){
      return (
        <div style={{backgroundImage: "url(" + background1 + ")"}}>

      <Button style={{height: '50px',width: '150px', color: 'white', marginLeft:'40%',marginTop:'6%',marginBottom:'10%'} } onClick={this.openModal}>Book Ticket Now<span className="glyphicon glyphicon-plus"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Ticket Book"
       className="Modal">
<Link to={{pathname: '/', search: '?day='+this.state.day+'&mon='+this.state.mon }} style={{ textDecoration: 'none' }}>
       <Button style={{height: '35px',width: '35px', color: 'white'} } onClick={this.closeModal}>X<span className="closebtn glyphicon glyphicon-remove"></span></Button>
      </Link><br/>
<fieldset>
       <label for="road">Road:</label><select id="road" name="road" value={this.state.road} onChange={this.handleSelectChange} required>
            <option value="Select a Road">Select a Road</option>
            <option value="Negombo-Colombo" id="Negombo-Colombo" >Negombo-Colombo</option>
            <option value="Negombo-Alawwa" id="Negombo-Alawwa">Negombo-Alawwa</option>
            <option value="Abewela-Dehiwala" id="Abewela-Dehiwala">Abewela-Dehiwala</option>
            <option value="Awissawells-Dehiwala" id="Awissawells-Dehiwala">Awissawells-Dehiwala</option>
            <option value="Colombo-Negombo" id="Colombo-Negombo">Colombo-Negombo</option>
            <option value="Colombo-Kollupitiya" id="Colombo-Kollupitiya">Colombo-Kollupitiya</option>
            <option value="Trinkomalee-Colombo" id="Trinkomalee-Colombo">Trinkomalee-Colombo</option>


        </select>
       <label for="amount">Amount:</label><input type="number" id="amount" name="amount" value={this.state.amount} onChange={this.handleTextChange}></input>
       <label for="day">Day:</label><select id="day" name="day" value={this.state.day} onChange={this.handleSelectChange}>
            <option value="01" id="01">1st</option>
            <option value="02" id="02">2nd</option>
            <option value="03" id="03">3rd</option>
            <option value="04" id="04">4th</option>
            <option value="05" id="05">5th</option>
            <option value="06" id="06">6th</option>
            <option value="07" id="07">7th</option>
            <option value="08" id="08">8th</option>
            <option value="09" id="09">9th</option>
            <option value="10" id="10">10th</option>
            <option value="11" id="11">11th</option>
            <option value="12" id="12">12th</option>
            <option value="13" id="13">13th</option>
            <option value="14" id="14">14th</option>
            <option value="15" id="15">15th</option>
            <option value="16" id="16">16th</option>
            <option value="17" id="17">17th</option>
            <option value="18" id="18">18th</option>
            <option value="19" id="19">19th</option>
            <option value="20" id="20">20th</option>
            <option value="21" id="21">21st</option>
            <option value="22" id="22">22nd</option>
            <option value="23" id="23">23rd</option>
            <option value="24" id="24">24th</option>
            <option value="25" id="25">25th</option>
            <option value="26" id="26">26th</option>
            <option value="27" id="27">27th</option>
            <option value="28" id="28">28th</option>
            <option value="29" id="29">29th</option>
            <option value="30" id="30">30th</option>
            <option value="31" id="31">31st</option>

         </select>
       <label for="mon">Month:</label><select id="mon" name="mon" value={this.state.mon} onChange={this.handleSelectChange}>
            <option value="1" id="1">January</option>
            <option value="2" id="2">February</option>
            <option value="3" id="3">March</option>
            <option value="4" id="4">April</option>
            <option value="5" id="5">May</option>
            <option value="6" id="6">June</option>
            <option value="7" id="7">July</option>
            <option value="8" id="8">August</option>
            <option value="9" id="9">September</option>
            <option value="10" id="10">October</option>
            <option value="11" id="11">November</option>
            <option value="12" id="12">December</option>

         </select>
    <label htmlFor="email">Email:</label><input type="email" id="email" name="email"  value={this.state.email}
                                            onChange={this.handleTextChange}></input>
    <label htmlFor="NIC">NIC:</label><input type="text" id="nic" name="nic" placeholder="Goverment Employees" value={this.state.nic}
                                                  onChange={this.handleTextChange}></input>
    <label htmlFor="pay">Payment :</label><select id="pay" name="pay" value={this.state.pay}
                                               onChange={this.handleSelectChange} required>
    <option value="Select a Payment Method">Select a Payment Method</option>
    <option value="Sampath" id="Sampath">Sampath</option>
    <option value="Dialog" id="Dialog">Dialog</option>

</select>

              <div id="ifSampath" style={{visibility:"hidden"}}>
                  <label htmlFor="card"> Credit Card: </label><input type='text' id='card' name='card' value={this.state.card} onChange={this.handleTextChange}></input>
                  <label htmlFor="cvc"> CVC: </label><input type='text' id='cvc' name='cvc' value={this.state.cvc} onChange={this.handleTextChange}></input>
                  <label htmlFor="holdername"> Card Holder Name: </label><input type='text' id='holdername' name='holdername' value={this.state.holdername} onChange={this.handleTextChange}></input>
              </div>
              <div id="ifDialog" style={{visibility:"hidden"}}>
                  <label htmlFor="phone"> Phone No: </label><input type='text' id='phone' name='phone' value={this.state.phoneno} onChange={this.handleTextChange}></input>
                  <label htmlFor="pin"> PIN: </label><input type='text' id='pin' name='pin' value={this.state.pin} onChange={this.handleTextChange}></input>
              </div>
</fieldset>
<div className='button-center'>
        <br/>
        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Ticket Book</Button>
       </div>
          </Modal>
        </div>
      )
   }
   else{
    return (
     <div>
       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Add ticket"
        className="Modal">
<div className='button-center'>
        <h3>{this.state.messageFromServer}</h3>
        <Link to={{pathname: '/', search: '?day='+this.state.day+'&mon='+this.state.mon}} style={{ textDecoration: 'none' }}>
         <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
        </Link>
       </div>
      </Modal>
       </div>
     )
    }
   }
}
export default Add;
