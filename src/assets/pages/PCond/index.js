import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, FlatList, Linking, TouchableOpacity } from 'react-native';
import styles from './styles';
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


export default function PCond() {
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
        <Text style={styles.title}>Placas para Condomínio</Text>
      </View>
      <Text style={styles.title3}> /////////////////////////////</Text>
      <FlatList 
        data={[1]}
        style={styles.Plist}
        keyExtractor={Plist => String(Plist)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
        <View style={styles.Pb}>
        
        
        <Text style={styles.Text}>Placa Nº C1</Text>
        
           <Image 
           source={p1}
           style={styles.PsBarb}
            />
            
    
          
          <Text style={styles.Text}>Placa Nº C2</Text>
          
           <Image 
           source={p2}
           style={styles.PsBarb2}
            />
           
    
          
          <Text style={styles.Text}>Placa Nº C3</Text>
         
           <Image 
           source={p3}
           style={styles.PsBarb2}
            />
           

          
          <Text style={styles.Text}>Placa Nº C4</Text>
          
           <Image 
           source={p4}
           style={styles.PsBarb2}
            />
          

          
          <Text style={styles.Text}>Placa Nº C5</Text>
          
           <Image 
           source={p5}
           style={styles.PsBarb}
            />
           

          
          <Text style={styles.Text}>Placa Nº C6</Text>
          
           <Image 
           source={p6}
           style={styles.PsBarb}
            />
            

          
          <Text style={styles.Text}>Placa Nº C7</Text>
          
           <Image 
           source={p7}
           style={styles.PsBarb}
            />
           

          
          <Text style={styles.Text}>Placa Nº C8</Text>
          
           <Image 
           source={p8}
           style={styles.PsBarb3}
            />
           

          
          <Text style={styles.Text}>Placa Nº C9</Text>
          
           <Image 
           source={p9}
           style={styles.PsBarb}
            />
          

          
          <Text style={styles.Text}>Placa Nº C10</Text>
          
           <Image 
           source={p10}
           style={styles.PsBarb2}
            />
           
          <Text style={styles.Text}>Placa Nº C11</Text>
          
           <Image 
           source={p11}
           style={styles.PsBarb4}
            />
           
          <Text style={styles.Text}>Placa Nº C12</Text>
          
           <Image 
           source={p12}
           style={styles.PsBarb4}
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