import { StyleSheet, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    paddingTop: Constants.statusBarHeight + 20
   },
   header: {
   alignItems: 'center',
    textAlign: 'center',
    padding: 2,
    },
title:{
  fontSize: 35,
  color: '#00A849',
  marginBottom: -10,
  marginTop: -20,
  fontWeight: 'bold',
  padding: 10,
  borderRadius: 20,
  textAlign: 'center',
},

Bar:{
  fontSize: 1,
  color: '#00A849',
  marginBottom: -28,
  marginTop: 10,
  marginHorizontal: -300,
  fontWeight: 'bold',
  padding: 10,
  borderRadius: 500,
  backgroundColor: '#00A849',
  flex: 1,
  textAlign: 'center',
  right: 1,
  shadowColor: "#000",
  shadowOffset: {	width: 0,	height: 9,},
  shadowOpacity: 0.48,
  shadowRadius: 11.95,
  elevation: 18,

},

  PBarb: {
    height: Dimensions.get('window').width * 0.9,
    marginBottom: 200,
  },
 
But: {
  marginTop: -10,
  marginBottom: 5,
  fontSize: 25,
  padding: 5,
  color: '#00A849',
  fontWeight: 'bold',
  backgroundColor: '#fff',
  textAlign: "center",
  marginHorizontal: 50,
  borderRadius: 20,
  alignItems: 'center',

},

Text: {
  marginTop: 25,
  fontSize: 40,
  padding: 5,
  borderRadius: 5,
  backgroundColor: '#00A849',
  fontWeight: 'bold',
  color: '#000',
  alignItems: 'center',
  textAlign: 'center',
},
Text2: {
 fontSize: 27,
  padding: 5,
  borderRadius: 0,
  backgroundColor: '#99a5c2',
  fontWeight: 'bold',
  color: '#fff',
  alignItems: 'center',
  textAlign: 'center',
},
Plist: {
  marginTop: 28,
  
},
box:{
  marginTop: 0,
  color: '#00A849',
  backgroundColor: '#00A849',
  marginHorizontal: -25,
  padding: 2,
},
Pb:{
  alignItems: 'center',
},
});