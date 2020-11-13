//script used for populating the Firebase cloud storage with button data


import {firestore} from '../firebase/firebase';

function Data() {
    let data = {
    color:"yellow",
    text:"0"
}

for (let i = 27; i<=100;i++){
firestore.collection('buttons').doc(i.toString()).set(data)
}
 
  return (null);
}
 
export default Data;