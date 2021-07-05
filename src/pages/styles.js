import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import Constants from 'expo-constants';
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
    backgroundColor: '#e6e6e6',
    },
   header: {
    padding: 10,
    backgroundColor: '#00A849',
   },
  image: {
    width: widthPercentageToDP('98%'),
    height: heightPercentageToDP('55%'),
    marginBottom: 10,
    marginTop: 10,
 },
image1: {
  width: widthPercentageToDP('78%'),
  height: heightPercentageToDP('28%'),
  marginBottom: 10,
    marginTop: 10,
    
 },
 image2: {
  width: widthPercentageToDP('74%'),
  height: heightPercentageToDP('55%'),
   marginBottom: 10,
  marginTop: 10,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#6A5ACD',
    borderRadius: 12,
   },
   box: {
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
  shadowOffset: {	width: 0,	height: 9,},
  shadowOpacity: 0.48,
  shadowRadius: 11.95,
  elevation: 6,
  
    },
Text: {
  marginTop: 20,
  fontSize: RFPercentage(4),
  padding: 4,
  borderRadius: 10,
  backgroundColor: '#00A849',
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center',
  shadowColor: "#000",
  shadowOffset: {	width: 0,	height: 9,},
  shadowOpacity: 0.48,
  shadowRadius: 11.95,
  elevation: 18,
},
bar:{
  marginTop: 20,
  padding: 8,
  flexDirection: 'row',
  justifyContent: 'space-between',
  
},

Textc: {
  marginTop: 150,
  marginHorizontal: 20,
  fontSize: RFPercentage(3),
  padding: 5,
  borderRadius: 7,
  backgroundColor: '#6A5ACD',
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center',
  shadowColor: "#000",
  shadowOffset: {	width: 0,	height: 9,},
  shadowOpacity: 0.48,
  shadowRadius: 11.95,
  elevation: 18,
},
Text2: {
  fontSize: RFPercentage(3),
  padding: 5,
  borderRadius: 4,
  backgroundColor: '#854',
  fontWeight: 'bold',
  color: '#fff',
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: 20,
},
Plist: {
 paddingHorizontal: 0,
  
},
Plist2: {
  paddingHorizontal: 20,
  
 },
Text3: {
  fontSize: RFPercentage(2),
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center',
  
},
Pb:{
  alignItems: 'center',
},
icon:{
  color: "#fff",
  paddingHorizontal: 8,
  }
});