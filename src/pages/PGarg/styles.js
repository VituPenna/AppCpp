import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
   container:{
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    paddingTop: Constants.statusBarHeight + 20,
   },
   header: {
    alignItems: 'center',
    padding: 2,
  },
  title:{
    fontSize: 40,
  color: '#00A849',
  marginBottom: -10,
  marginTop: -20,
  fontWeight: 'bold',
  padding: 10,
  borderRadius: 20,
  textAlign: 'center',
  },
  
  title3:{
    fontSize: 1,
  color: '#00A849',
  marginTop: 10,
  marginHorizontal: -300,
  fontWeight: 'bold',
  padding: 1,
  borderRadius: 500,
  backgroundColor: '#00A849',
  flex: 1,
 shadowColor: "#000",
  shadowOffset: {	width: 0,	height: 9,},
  shadowOpacity: 0.48,
  shadowRadius: 11.95,
  elevation: 18,
},

image: {
    height: Dimensions.get('window').width * 0.9,
    
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
},

Text: {
  marginTop: 28,
  fontSize: 28,
  
  backgroundColor: '#00A849',
  fontWeight: 'bold',
  color: '#000',
  textAlign: "center",
  left: 2,
},
Text2: {
  marginTop: -105,
  fontSize: 27,
  padding: 7,
  borderRadius: 10,
  backgroundColor: '#00A849',
  fontWeight: 'bold',
  color: '#000',
  textAlign: "center",
  left: 2,
  
},
Plist: {
  marginTop: 28,
 
},
box:{
  marginTop: 0,
  color: '#00A849',
  backgroundColor: '#00A849',
  marginHorizontal: -50,
    
},
Pb:{
  alignItems: 'center',
},
});