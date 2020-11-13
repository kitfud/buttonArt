import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { auth, firestore, fireauth, firebasestore,storage } from './firebase/firebase';
import firebase from 'firebase';


class App extends React.Component {

constructor(props){
  super(props)
  this.change = this.change.bind(this);
  this.state = {
    buttons:[],
    buttonText:"Begin"
  }
}

componentDidMount(){
  firestore.collection('buttons').get().then(snapshot => {
    let buttonArray = [];
    snapshot.forEach(doc => {
        const data = doc.data()
        const _id = doc.id
        buttonArray.push({_id, ...data });
    })
 
      this.setState(
        {buttons: buttonArray}
      )
  
})
}

change(){
  this.setState(
    {buttonText: "Now!"}
  )
}

render(){
const formatted = this.state.buttons.map((item)=>
<div key={item._id}>{item.color}</div>
)

  return (
    <div>
<button onClick={this.change}>{this.state.buttonText}</button>
    </div>
  )
}

}

export default App;
