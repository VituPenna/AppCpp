import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
   container:{
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#D4005C',
    paddingTop: Constants.statusBarHeight + 20,
   },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title:{
    fontSize: 35,
    color: '#000',
    marginBottom: -25,
    marginTop: -45,
    marginHorizontal: 20,
    fontWeight: 'bold',
    padding: "0.1%",
    borderRadius: 20,
    
    flex: 1,
    textAlign: 'center',
    right: 10,
  },
  title2:{
    fontSize: 5000,
    color: '#00A849',
    marginBottom: -58.5,
    marginTop: -50,
    marginHorizontal: -300,
    fontWeight: 'bold',
    padding: 40,
    borderRadius: 700,
    backgroundColor: '#00A849',
    flex: 1,
    textAlign: 'center',
    right: 1,
  
  },
  title3:{
    fontSize: 1,
    color: '#00A849',
    marginBottom: -28,
    marginTop: 15,
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
title4:{
  fontSize: 1,
  color: '#00A879',
  marginBottom: 50,
  marginTop: -45,
  marginHorizontal: -300,
  fontWeight: 'bold',
  padding: 13,
  borderRadius: 500,
  backgroundColor: '#00A879',
  flex: 1,
  textAlign: 'center',
  right: 1,
  

},

  PsBarb: {
    width: "100%",
    aspectRatio: 10 / 5.5,
    marginTop: -35,
    marginBottom: 20,
    alignItems: 'center',
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
  marginBottom: 15,
  fontSize: 35,
  padding: 15,
  borderRadius: 20,
  backgroundColor: '#00A849',
  fontWeight: 'bold',
  color: '#000',
  textAlign: "center",
  
},
Text2: {
  marginTop: -180,
  marginBottom: 10,
  fontSize: 27,
  padding: 7,
  borderRadius: 10,
  backgroundColor: '#00A849',
  fontWeight: 'bold',
  color: '#000',
  textAlign: "center",
  
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