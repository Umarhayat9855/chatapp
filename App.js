// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import User from './Components/user';
// import Chat from './Components/chat';
// import SignupPhone from './Components/signupwithphone';
// import 'react-native-gesture-handler';
// //import AsyncStorage from '@react-native-community/async-storage';
// const Stack = createStackNavigator();
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( 
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignupPhone">
//         <Stack.Screen name="User" component={User} />
//         <Stack.Screen name="Chat" component={Chat} />
//         <Stack.Screen name="SignupPhone" component={SignupPhone} />
//       </Stack.Navigator>
//     </NavigationContainer>
//      );
//   }
// }
 
// export default App;


import React, { Component } from 'react'
import { View , Text} from 'react-native';
//import Firebase from './Components/Firebase/firebase';
import SignupPhone from './Components/signupNumber';
import 'react-native-gesture-handler';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <View>
        {/* <Text>
          Muhammad Umar Hayat
        </Text> */}
        <SignupPhone/>
      </View>
     );
  }
}
 
export default App;