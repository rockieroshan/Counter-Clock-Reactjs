import React, { Component } from 'react';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';
import Clock from './Clock';
class App extends Component{
constructor(props){
  super(props);
  this.state = {
    deadline:"December 25, 2017"
  }
}
count(){
  this.setState({deadline:this.state.newDeadline})
}
render(){
  return(
    <div className="App">
<div> CountDown From {this.state.deadline}</div>
<Clock deadline={this.state.deadline}/>
<Form inline>
<FormControl placeholder="Enter Date" onChange={event => this.setState({newDeadline:event.target.value})}/>
<Button onClick={() => this.count()}>Submit</Button>
</Form>

    </div>



  )
}

}
export default App;
