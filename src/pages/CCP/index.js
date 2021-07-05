import React from 'react';
import { View, Text, Image, FlatList, Linking, TouchableOpacity} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import c1 from '../../assets/CCP/c1.png';
import c2 from '../../assets/CCP/c2.png';
import c3 from '../../assets/CCP/c3.png';
import c4 from '../../assets/CCP/c4.png';
import c5 from '../../assets/CCP/c5.png';
import CordL from '../../assets/CCP/CordL.png';
import Prot from '../../assets/CCP/Prot.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FAB, Appbar } from 'react-native-paper';

export default function CCP() {
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
      <Appbar.Content title="Placas Personalizadas"/>
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
          <Text style={styles.Text}> Crachá Nº 1 </Text>
        
           <Image 
           source={c1}
           style={styles.image2}
           resizeMode="contain"
            />
         </View>
         <View style={styles.box}> 
          <Text style={styles.Text}> Crachá Nº 2 </Text>
          
           <Image 
           source={c2}
           style={styles.image2}
           resizeMode="contain"
            />
         </View>
          <View style={styles.box}>
          <Text style={styles.Text}> Crachá Nº 3 </Text>
          
           <Image 
           source={c3}
           style={styles.image2}
           resizeMode="contain"
            />
         </View>
          <View style={styles.box}>  
          <Text style={styles.Text}> Crachá Nº 4 </Text>
          
           <Image 
           source={c4}
           style={styles.image2}
           resizeMode="contain"
            />
          </View>
          <View style={styles.box}> 
          <Text style={styles.Text}> Crachá Nº 5 </Text>
          
           <Image 
           source={c5}
           style={styles.image2}
           resizeMode="contain"
            />
          </View>
          <View style={styles.box}>
          <Text style={styles.Text}> Cordão Liso </Text>
          
           <Image 
           source={CordL}
           style={styles.image1}
           resizeMode="contain"
            />
          </View>
          <View style={styles.box}>
          <Text style={styles.Text}> Protetor para Crachá </Text>
          
           <Image 
           source={Prot}
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