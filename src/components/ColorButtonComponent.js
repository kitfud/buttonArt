import React, { Component } from 'react';
import { auth, firestore, fireauth, firebasestore,storage } from '../firebase/firebase';
import firebase from 'firebase';

class ColorButton extends React.Component{

    constructor(props){
        super(props)
        this.change = this.change.bind(this);
        this.updateButton = this.updateButton.bind(this);
        this.state = {
          buttons:[],
          buttonText:"",
          buttonColor:"",
          id: this.props.id
        }
      
      }
      
      componentDidMount(){
          //console.log(this.props.id)
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
      
        const buttonIdArray = buttonArray.map((item)=>
        item._id)
        const buttonTextArray = buttonArray.map((item)=>
        item.text
        )
        const buttonColorArray = buttonArray.map((item)=>
        item.color
        )
        const indexNum = buttonIdArray.indexOf(this.props.id)
        //console.log(buttonColorArray[indexNum])

        this.setState(
          {
              buttonText: buttonTextArray[indexNum].toString(),
              buttonColor:buttonColorArray[indexNum]
        
        }
        )
        
      })
      }
      
      change(){
        if(this.state.buttonText == "0"){
          this.updateButton(this.props.id,"blue","1")
        }
        else{
          this.updateButton(this.props.id,"yellow","0")
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
                          text:  buttonText
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
        const buttonColorData = this.state.buttons.map((item)=> item.color)
        
        
        const buttonStyle = {
          "color":"black",
          "background":this.state.buttonColor
        }
      
      
        return (
        
      <button style={buttonStyle} onClick={this.change}>{this.state.buttonText}</button>
    
        )
      }
}

export default ColorButton
