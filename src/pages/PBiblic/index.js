import React from 'react';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { View, Text, Image, FlatList, Linking, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import p1 from '../../assets/Pblica/P1.png';
import p2 from '../../assets/Pblica/p2.png';
import p3 from '../../assets/Pblica/p3.png';
import { FAB, Appbar } from 'react-native-paper';

export default function PBiblic() {
  const navigation = useNavigation();
  const message = 'Olá, queria fazer um pedido!';
  function navigatePay() {
    navigation.navigate('PGarg');;
  }
  function navigateBack() {
    navigation.goBack();
  }
  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5571986342471&text=${message}`)
  }
  return (
    <View style={styles.container}>
     <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={navigateBack} />
      <Appbar.Content title=" Placas Biblicas "/>
      <MaterialCommunityIcons name="cart" size={30} style={styles.icon} onPress={navigatePay}/>
    </Appbar.Header>
        
      <FlatList 
        data={[1]}
        style={styles.Plist}
        keyExtractor={Plist => String(Plist)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
        <View>
        
        <View style={styles.box}>
        <Text style={styles.Text}> Placa Nº S1 </Text>
        
           <Image 
           source={p1}
           style={styles.image1}
           resizeMode="contain"
            />
          </View>
           <View style={styles.box}>  
         <Text style={styles.Text}> Placa Nº S2 </Text>
         <Image 
           source={p2}
           style={styles.image1}
           resizeMode="contain"
            />
     </View>
     <View style={styles.box}>
          <Text style={styles.Text}> Placa Nº S3 </Text>
          
           <Image 
           source={p3}
           style={styles.image1}
           resizeMode="contain"
            />
         </View>   
        
         </View>
         )}
        />
       <FAB
    style={styles.fab}
    small
    icon="whatsapp"
    label="whatsapp"
    onPress={sendWhatsapp}
    
  />
   </View>
  )
  
} 