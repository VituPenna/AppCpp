import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, FlatList, Linking, TouchableOpacity, TouchableHighlight, Animated} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import p1 from '../../assets/Pgarg/p1.png';


export default function PGarg() {
  const navigation = useNavigation();
  const message = 'Olá, queria fazer um pedido!';

  function navigateBack() {
    navigation.goBack();
  }
  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5571986342471&text=${message}`)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title4}> /////////////////////////////</Text>
      <Text style={styles.title2}> /////////////////////////////</Text>
      <View style={styles.header}>      
       <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={40} color='#000' />
        </TouchableOpacity>
        <Text style={styles.title}>Placas para Garagem</Text>
      </View>
      <Text style={styles.title3}> /////////////////////////////</Text>
      <FlatList 
        data={[1]}
        style={styles.Plist}
        keyExtractor={Plist => String(Plist)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
        <View style={styles.Pb}>
        
        <View style={styles.PBarb}>
        <Text style={styles.Text}>Placa Nº G1</Text>
        
           <Image 
           source={p1}
           style={styles.PsBarb}
            />
          <Text style={styles.Text2}>Tamanho: 29x21cm</Text>  
          </View>
    
         </View>
         )}
         />
         <View style={styles.box}>
            <Text>/</Text>
          <TouchableOpacity onPress={sendWhatsapp}>
           <Text style={styles.But}>Clique aqui para fazer seu pedido pelo Whatsapp!</Text>
          </TouchableOpacity> 
          </View>  
            
   </View>
  )
} 