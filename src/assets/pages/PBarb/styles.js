import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#D4005C',
    paddingTop: Constants.statusBarHeight + 20
   },
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
title:{
  fontSize: 30,
  color: '#000',
  marginBottom: -25,
  marginTop: -25,
  fontWeight: 'bold',
  padding: 10,
  borderRadius: 20,
  textAlign: "center",
  right: 40,
},
title2:{
  fontSize: 5000,
  color: '#00A849',
  marginBottom: -58.5,
  marginTop: -50,
  marginHorizontal: -300,
  fontWeight: 'bold',
  padding: 35,
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
title4:{
fontSize: 1,
color: '#00A859',
marginBottom: 50,
marginTop: -45,
marginHorizontal: -300,
fontWeight: 'bold',
padding: 13,
borderRadius: 500,
backgroundColor: '#00A859',
flex: 1,
textAlign: 'center',
right: 1,


},
title5:{
fontSize: 1,
color: '#00A879',
marginBottom: 0,
marginTop: 0,
marginHorizontal: -300,
fontWeight: 'bold',
padding: 5,
borderRadius: 500,
backgroundColor: '#00A879',
flex: 1,
textAlign: 'center',
right: 1,
},
  
  PBarb: {
    width: "100%",
    aspectRatio: 10 / 14,
    marginTop: -5,
    marginBottom: 100,
    left: 2,
    alignItems: 'center',
    borderRadius: 10,
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
  marginTop: 28,
  fontSize: 28,
  padding: 7,
  borderRadius: 10,
  backgroundColor: '#00A849',
  fontWeight: 'bold',
  color: '#000',
  alignItems: 'center',
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
  alignItems: 'center',
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