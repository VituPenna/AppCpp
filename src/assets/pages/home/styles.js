import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Dimensions, PixelRatio} from 'react-native';

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};

export default StyleSheet.create({
  container:{
     flex: 1,
     paddingHorizontal: 24,
     backgroundColor: '#00A849',
     paddingTop: Constants.statusBarHeight + 20,
   },
   header: {
     flexDirection: 'row',
     },
   sh:{
    marginBottom: -10,
     marginTop: -20,
     width: "100%",
     aspectRatio: 10 / 4,
    
    },

 title2:{
  fontSize: 100,
  color: '#fff',
  marginBottom: -140,
  marginTop: -45,
  marginHorizontal: -300,
  fontWeight: 'bold',
  padding: 89,
  backgroundColor: '#fff',
  flex: 1,
  textAlign: 'center',
  right: 1,

},
title3:{
  fontSize: 1,
  color: '#00A849',
  marginBottom: -28,
  marginTop: 20,
  marginHorizontal: -300,
  fontWeight: 'bold',
  padding: 15,
  borderRadius: 500,
  backgroundColor: '#00A849',
  textAlign: 'center',
  right: 1,
  flex: 1,
  shadowColor: "#000",
  shadowOffset: {	width: 0,	height: 9,},
  shadowOpacity: 0.48,
  shadowRadius: 11.95,
  elevation: 18,

},
   Plist: {
     marginTop: 28,
    
   },
   But: {
    marginTop: 10,
    marginBottom: 25,
    fontSize: 20,
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#D4005C',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
   },
   ButF: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    padding: 1,
    borderRadius: 50,
    backgroundColor: '#D4005C',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
   },
   flatList: {
    marginTop: 400,
    paddingLeft: 15,
    paddingRight: 15, // THIS DOESN'T SEEM TO BE WORKING
    // marginRight: 15   I can't use marginRight because it cuts off the box with whitespace
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    marginRight: 15,
    marginTop: 500,
    
  },
  Pb:{
    alignItems: 'center',
  },
});