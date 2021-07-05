import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Dimensions} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
     backgroundColor: '#00A849',
    alignItems: 'center',
   },
   
   sh:{
    alignItems: 'center',
     height: Dimensions.get('window').width * 0.4,
     backgroundColor: '#fff',
   },

   Plist: {
    paddingHorizontal: 20,
   
   },
  
   But: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 8,},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
   },
   ButF: {
    marginTop: 10,
    marginBottom: 14,
   },
  backcolor: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 8,},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
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
  Text: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    color: '#00A849',
    textAlign: 'center',
    
  },
  Pb:{
    alignItems: 'center',
  },
});