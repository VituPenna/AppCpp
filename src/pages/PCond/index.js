import React from 'react';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { View, Text, Image, FlatList, Linking, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import p1 from '../../assets/Pcond/p1.png';
import p2 from '../../assets/Pcond/p2.png';
import p3 from '../../assets/Pcond/p3.png';
import p4 from '../../assets/Pcond/p4.png';
import p5 from '../../assets/Pcond/p5.png';
import p6 from '../../assets/Pcond/p6.png';
import p7 from '../../assets/Pcond/p7.png';
import p8 from '../../assets/Pcond/p8.png';
import p9 from '../../assets/Pcond/p9.png';
import p10 from '../../assets/Pcond/p10.png';
import p11 from '../../assets/Pcond/p11.png';
import p12 from '../../assets/Pcond/p12.png';
import pg from '../../assets/Pgarg/p1.png';
import { FAB, Appbar } from 'react-native-paper';

export default function PCond() {
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
      <Appbar.Content title=" Placas para Condomínio "/>
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
        <Text style={styles.Text}> Placa Nº C1 </Text>
        
           <Image 
           source={p1}
           style={styles.image2}
           resizeMode="contain"
            />
            </View>
            <View style={styles.box}> 
          <Text style={styles.Text}> Placa Nº C2 </Text>
          
           <Image 
           source={p2}
           style={styles.image1}
           resizeMode="contain"
            />
           </View>
           <View style={styles.box}>
          <Text style={styles.Text}> Placa Nº C3 </Text>
         
           <Image 
           source={p3}
           style={styles.image1}
           resizeMode="contain"
            />
           </View>
           <View style={styles.box}> 
          <Text style={styles.Text}> Placa Nº C4 </Text>
          
           <Image 
           source={p4}
           style={styles.image1}
           resizeMode="contain"
            />
          </View>
          <View style={styles.box}>
          <Text style={styles.Text}> Placa Nº C5 </Text>
          
           <Image 
           source={pg}
           style={styles.image2}
           resizeMode="contain"
            />
           </View>
           <View style={styles.box}>  
          <Text style={styles.Text}> Placa Nº C6 </Text>
          
           <Image 
           source={p6}
           style={styles.image2}
           resizeMode="contain"
            />
            </View>
            <View style={styles.box}> 
          <Text style={styles.Text}> Placa Nº C7 </Text>
          
           <Image 
           source={p7}
           style={styles.image2}
           resizeMode="contain"
            />
           </View>
           <View style={styles.box}>
          <Text style={styles.Text}> Placa Nº C8 </Text>
          
           <Image 
           source={p8}
           style={styles.image2}
           resizeMode="contain"
            />
           </View>
           <View style={styles.box}> 
          <Text style={styles.Text}> Placa Nº C9 </Text>
          
           <Image 
           source={p9}
           style={styles.image2}
           resizeMode="contain"
            />
          </View>
          <View style={styles.box}>
          <Text style={styles.Text}> Placa Nº C10 </Text>
          
           <Image 
           source={p10}
           style={styles.image1}
           resizeMode="contain"
            />
          </View>
          <View style={styles.box}> 
          <Text style={styles.Text}> Placa Nº C11 </Text>
          
           <Image 
           source={p11}
           style={styles.image1}
           resizeMode="contain"
            />
           </View>
           <View style={styles.box}>
          <Text style={styles.Text}> Placa Nº C12 </Text>
          
           <Image 
           source={p12}
           style={styles.image1}
           resizeMode="contain"
            />
</View>
<View style={styles.box}>
           <Text style={styles.Text}> Placa Nº C13 </Text>
        
        <Image 
        source={p5}
        style={styles.image2}
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