import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
   container:{
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 20,
   },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title:{
    fontSize: 40,
    color: '#D4005C',
    marginBottom: -25,
    marginTop: -20,
    marginHorizontal: 20,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    textAlign: 'center',
    right: 10,
  },
  
Text1: {
  marginTop: 50,
  marginBottom: 50,
  fontSize: 20,
  padding: -50,
  borderRadius: 10,
  fontWeight: 'bold',
  color: '#D4005C',
  marginHorizontal: 150,
  marginLeft: 50,
 
},
Text2: {
  marginTop: 15,
  marginBottom: 50,
  fontSize: 15,
  padding: -50,
  borderRadius: 10,
  fontWeight: 'bold',
  color: '#D4005C',
  marginHorizontal: 150,
  marginLeft: 50,
  width: 300,
  height: 28,
  right: 46,
  
},

Text: {
  marginTop: 40,
  marginBottom: 10,
  fontSize: 20,
  padding: -50,
  borderRadius: 10,
  fontWeight: 'bold',
  color: '#D4005C',
  marginHorizontal: 150,
  marginLeft: 50,
  
},
Plist: {
  marginTop: 25,
 
},
});