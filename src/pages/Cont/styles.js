import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Constants.statusBarHeight,
   },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title:{
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
   },
  

Text: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#fff',
 
},
Plist: {
  marginTop: 25,
 
},
});