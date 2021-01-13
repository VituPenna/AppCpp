import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, FlatList, Linking, TouchableOpacity, TouchableHighlight,Animated} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import p1 from '../../assets/Pbarb/BARB3.png';
import p2 from '../../assets/Pbarb/P1.png';
import p3 from '../../assets/Pbarb/p3.png';
import p4 from '../../assets/Pbarb/p4.png';
import p5 from '../../assets/Pbarb/p5.png';
import p6 from '../../assets/Pbarb/p6.png';
import p7 from '../../assets/Pbarb/p7.png';
import p9 from '../../assets/Pbarb/p9.png';
import p10 from '../../assets/Pbarb/p10.png';
import p11 from '../../assets/Pbarb/p11.png';
import p12 from '../../assets/Pbarb/p12.png';
import p13 from '../../assets/Pbarb/p13.png';
import p14 from '../../assets/Pbarb/p14.png';
import p15 from '../../assets/Pbarb/p15.png';
import p16 from '../../assets/Pbarb/p16.png';

export default function PBarb() {
  const navigation = useNavigation();
  const message = 'Olá, queria fazer um pedido!';
  
  function navigateToPBarb2() {
    navigation.navigate('PBarb2');
  }
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
       <Text style={styles.title}>Placas Personalizadas</Text>
      </View>
      <Text style={styles.title3}> /////////////////////////////</Text>
      <FlatList 
        data={[1]}
        style={styles.Plist}
        keyExtractor={Plist => String(Plist)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
        
        <View style={styles.Pb}>
        
        
        <Text style={styles.Text}>Placa Nº B1</Text>
        
           <Image 
           source={p1}
           style={styles.PBarb}
            />
         <Text style={styles.Text2}>Tamanho: 29x21cm</Text>   
         
          <Text style={styles.Text}>Placa Nº B2</Text>
          
           <Image 
           source={p2}
           style={styles.PBarb}
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text> 
         
          <Text style={styles.Text}>Placa Nº B3</Text>
          
           <Image 
           source={p3}
           style={styles.PBarb}
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text> 
          
          <Text style={styles.Text}>Placa Nº B4</Text>
          
           <Image 
           source={p4}
           style={styles.PBarb}
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text> 
          
    
          
          <Text style={styles.Text}>Placa Nº B5</Text>
          
           <Image 
           source={p5}
           style={styles.PBarb}
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
          
          <Text style={styles.Text}>Placa Nº B6</Text>
          
           <Image 
           source={p6}
           style={styles.PBarb}
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
          
          <Text style={styles.Text}>Placa Nº B7</Text>
          
           <Image 
           source={p16}
           style={styles.PBarb}
            />
            <Text style={styles.Text2}>Tamanho: 21x29cm</Text>
          
          <Text style={styles.Text}>Placa Nº B8</Text>
          
           <Image 
           source={p9}
           style={styles.PBarb}
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
          
          <Text style={styles.Text}>Placa Nº B9</Text>
          
           <Image 
           source={p10}
           style={styles.PBarb}
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
          
          <Text style={styles.Text}>Placa Nº B10</Text>
          
           <Image 
           source={p15}
           style={styles.PBarb}
            />
            <Text style={styles.Text2}>Tamanho: 21x21cm</Text>
          
          <Text style={styles.Text}>Placa Nº B11</Text>
          
           <Image 
           source={p12}
           style={styles.PBarb}
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
          
          <Text style={styles.Text}>Placa Nº B12</Text>
          
           <Image 
           source={p14}
           style={styles.PBarb}
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
          
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