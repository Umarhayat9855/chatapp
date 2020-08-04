import React, { Component } from 'react';
import {platform, keyboardAvoidingView,SafeAreaView, KeyboardAvoidingView, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import firebaseSvc  from './Firebase/firebase';
import * as firebase from 'firebase';
// import Fire from './Firebase/firebase';
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages:[],
            currentuser:''
         }
    }
    // get user() {
    //     return {
    //       name: this.props.navigation.state.params.name,
    //       email: this.props.navigation.state.params.email,
    //       avatar: this.props.navigation.state.params.avatar,
    //       id: firebaseSDK.uid,
    //       _id: firebaseSDK.uid
    //     };
    //   }
    componentDidMount() {
      // firebase.database().ref(message => 
      //   this.setState(previousState => ({
      //     messages: GiftedChat.append(previousState.messages, message),
      //     })
      //   )
      // );
      firebase.database().ref("massage");
      //   firebaseSvc.get(message=> this.setState(previous=>({
      //     messages:GiftedChat.append(previous.message,message)
      // })))
      const user = firebase.auth().currentUser;
      console.log("Current user is",user.email);
      const useremail= user.email;
      console.log("cbjsdbcvsjiedbvjsviediu",useremail)
            this.setState({currentuser:useremail})
    }
  //   componentWillUnmount(){
  //     firebaseSvc.off();
  // }
    refOn = callback => {
      this.ref
        .limitToLast(20)
        .on('child_added', snapshot => callback(this.parse(snapshot)));
    }
    send = messages => {
      console.log("message is start",messages)
      for (let i = 0; i < messages.length; i++) {
        const { text, user } = messages[i];
        console.log("User from state",this.state.currentuser)
        console.log("text and user",text, this.state.currentuser)
        const message = {text, user};
        //console.log("massage in send",message,this.timestamp,)
        console.log("Messagesss at end",message)
        this.refOn.push(message);
      }
      console.log("Massage is send")
    };
    parse = snapshot => {
      const { timestamp: numberStamp, text, user } = snapshot.val();
      const { key: _id } = snapshot;
      const timestamp = new Date(numberStamp);
      const message = {_id, timestamp, text, user};
      return message;
    };
    //   componentDidMount() {
    //     firebaseSDK.refOn(message =>
    //       this.setState(previousState => ({
    //         messages: GiftedChat.append(previousState.messages, message)
    //       }))
    //     );
    //   }
      // componentWillUnmount() {
      //   firebaseSDK.refOff();
      // }
    render() { 
            return ( 
               <GiftedChat
               messages={this.state.messages}
               onSend={this.send}
              //  user={this.Email}
               />
             );
    }
}
 
export default Chat;





// import firebaseSvc  from './Firebase/firebase';
// class Chat extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             messages:[],
//          }
//     }

   
//     render() { 
//             return ( 
//                 <GiftedChat 
//                 />
//              );

//     }
// }
 
// export default Chat;