import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, FlatList, Linking, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import p1 from '../../assets/PLoj/p1.png';
import p2 from '../../assets/PLoj/p2.png';
import p3 from '../../assets/PLoj/p3.png';
import p4 from '../../assets/PLoj/p4.png';
import p5 from '../../assets/PLoj/p5.png';

export default function PBiblic() {
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
        <Text style={styles.title}>Placas para Lojas</Text>
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
        <Text style={styles.Text}>Placa Nº L1</Text>
        
           <Image 
           source={p1}
           style={styles.PsBarb}
            />
           <Text style={styles.Text2}>Tamanho: 21x8,2cm</Text> 
          </View>
    
          <View style={styles.PBarb}>
          <Text style={styles.Text}>Placa Nº L2</Text>
          
           <Image 
           source={p2}
           style={styles.PsBarb}
            />
            <Text style={styles.Text2}>Tamanho: 21x8,2cm</Text>
          </View>
    
          <View style={styles.PBarb}>
          <Text style={styles.Text}>Placa Nº L3</Text>
          
           <Image 
           source={p3}
           style={styles.PsBarb}
            />
          <Text style={styles.Text2}>Tamanho: 21x8,2cm</Text>  
          </View>
    
          <View style={styles.PBarb}>
          <Text style={styles.Text}>Placa Nº L4</Text>
          
           <Image 
           source={p4}
           style={styles.PsBarb}
            />
           <Text style={styles.Text2}>Tamanho: 21x8,2cm</Text> 
          </View>

          <View style={styles.PBarb}>
          <Text style={styles.Text}>Placa Nº L5</Text>
          
           <Image 
           source={p5}
           style={styles.PsBarb}
            />
          <Text style={styles.Text2}>Tamanho: 21x8,2cm</Text>  
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