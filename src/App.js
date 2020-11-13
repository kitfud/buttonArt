import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { auth, firestore, fireauth, firebasestore,storage } from './firebase/firebase';
import firebase from 'firebase';


class App extends React.Component {

constructor(props){
  super(props)
  this.change = this.change.bind(this);
  this.updateButton = this.updateButton.bind(this);
  this.state = {
    buttons:[],
    buttonText:""
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

  const buttonTextArray = buttonArray.map((item)=>
  item.text)

  this.setState(
    {buttonText: buttonTextArray[0]}
  )
  
})
}

change(){
  if(this.state.buttonText =="0"){
    this.updateButton("1","blue","1")
  }
  else{
    this.updateButton("1","yellow","0")
  }
  }
 

updateButton(buttonId,colorInput,buttonText){    
    var docRef = firestore.collection("buttons").doc(buttonId);
    //console.log(docRef.get())
    docRef.get().then(function(doc) {
        if (doc.exists) {
           //let data = doc.data()    
            return firestore.collection('buttons').doc(buttonId).update({
                    color: colorInput,
                    text:buttonText
                })
                .then(function() {
                    console.log("Document successfully updated!");
                    window.location.reload();
              
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });    
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  
}


render(){

  const formatted = this.state.buttons.map((item)=>
  <div key={item._id}>{item.color}</div>
  )
  const buttonData = this.state.buttons.map((item)=> item.color)
  
  
  const buttonStyle = {
    "color":"black",
    "background":buttonData[0]
  }


  return (
    <div>
      <div>current color:{buttonData[0]}</div>
     
<button style={buttonStyle} onClick={this.change}>{this.state.buttonText}</button>
    </div>
  )
}

}


export default App;
