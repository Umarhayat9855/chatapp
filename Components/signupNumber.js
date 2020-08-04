import React, { Component } from 'react';
import { TouchableOpacity,View ,Text,SafeAreaView,StyleSheet,} from 'react-native';
import firebaseSvc  from './Firebase/firebase';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import * as firebase from 'firebase';
class SignupNumber extends Component {
  state = {
    phone: '',
    confirmResult: null,
    verificationCode: '',
    userId: ''
    }
    validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(this.state.phone)
    }
    handleSendCode = () => {
      // Request to send OTP
      console.log("correctt")
      // if (this.validatePhoneNumber()) {
        firebase
          .auth()
          .signInWithPhoneNumber('+923415584181','123456')
          .then(confirmResult => {
            this.setState({ confirmResult })
          })
          .catch(error => {
            alert(error.message)
            console.log(error)
          })
      // } else {
      //   alert('Invalid Phone Number')
      // }
    }    
    changePhoneNumber = () => {
      console.log("change phone number")
      this.setState({ confirmResult: null, verificationCode: '' })
    }
    handleVerifyCode = () => {
      // Request for OTP verification
      const { confirmResult, verificationCode } = this.state
      if (verificationCode.length == 6) {
        confirmResult
          .confirm(verificationCode)
          .then(user => {
            this.setState({ userId: user.uid })
            alert(`Verified! ${user.uid}`)
          })
          .catch(error => {
            alert(error.message)
            console.log(error)
          })
      } else {
        alert('Please enter a 6 digit OTP code.')
      }
    }
    render() { 
        return ( 

          // <ScrollView style={[styles.container, { backgroundColor: '#333' }]}>
          <View style={styles.page}>
            <TextInput
              style={styles.textInput}
              // placeholder='Phone Number with country code'
              placeholderTextColor='#eee'
              keyboardType='phone-pad'
              value={this.state.phone}
              onChangeText={phone => {
                this.setState({ phone })
              }}
              maxLength={15}
              // editable={this.state.confirmResult ? false : true}
            />
            <TextInput/>
            <TouchableOpacity
              style={[styles.themeButton, { marginTop: 20 }]}
              onPress={
                this.state.confirmResult
                  ? 
                  this.changePhoneNumber
                  :
                  this.handleSendCode
              }
              >
              <Text style={styles.themeButtonTitle}>
                {this.state.confirmResult ? 'Change Phone Number' : 'Send Code'}
              </Text>
            </TouchableOpacity>
            {this.state.confirmResult ? this.renderConfirmationCodeView() : null}
          </View>
        // </ScrollView>
      
         );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    marginTop: 200,
    width: '90%',
    height: 40,
    borderColor: '#555',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    //color: '#fff',
    fontSize: 16
  },
  themeButton: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#888',
    borderColor: '#555',
    borderWidth: 2,
    borderRadius: 5
  },
  themeButtonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  verificationView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50
  }
})
export default SignupNumber;
// import { Button, TextInput } from 'react-native';
// import auth from '@react-native-firebase/auth';

// function SignupNumber() {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// }