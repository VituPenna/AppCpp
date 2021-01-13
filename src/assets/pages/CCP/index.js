import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, FlatList, Linking, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import c1 from '../../assets/CCP/c1.png';
import c2 from '../../assets/CCP/c2.png';
import c3 from '../../assets/CCP/c3.png';
import c4 from '../../assets/CCP/c4.png';
import c5 from '../../assets/CCP/c5.png';
import CordL from '../../assets/CCP/CordL.png';
import Prot from '../../assets/CCP/Prot.png';



export default function CCP() {
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
        <Text style={styles.title}>Crachás, Cordões e Protetores</Text>
      </View>
      <Text style={styles.title3}> /////////////////////////////</Text>
      <FlatList 
        data={[1]}
        style={styles.Plist}
        keyExtractor={Plist => String(Plist)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
        <View style={styles.Pb}>
        
        
        <Text style={styles.Text}>Crachá Nº 1</Text>
        
           <Image 
           source={c1}
           style={styles.PsBarb3}
            />
          
          <Text style={styles.Text}>Crachá Nº 2</Text>
          
           <Image 
           source={c2}
           style={styles.PsBarb3}
            />
          
          <Text style={styles.Text}>Crachá Nº 3</Text>
          
           <Image 
           source={c3}
           style={styles.PsBarb3}
            />
            
          <Text style={styles.Text}>Crachá Nº 4</Text>
          
           <Image 
           source={c4}
           style={styles.PsBarb3}
            />
           
          <Text style={styles.Text}>Crachá Nº 5</Text>
          
           <Image 
           source={c5}
           style={styles.PsBarb3}
            />
          
          <Text style={styles.Text}>Cordão Liso</Text>
          
           <Image 
           source={CordL}
           style={styles.PsBarb}
            />
           
          <Text style={styles.Text}>Protetor para Crachá</Text>
          
           <Image 
           source={Prot}
           style={styles.PsBarb}
            />
           
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