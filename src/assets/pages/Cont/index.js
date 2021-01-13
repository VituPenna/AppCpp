import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, FlatList, Linking, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



export default function Cont() {
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
      <View style={styles.header}>      
       <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={30} color='#D4005C' />
        </TouchableOpacity>
        <Text style={styles.title}>Contato</Text>
      </View>
      <FlatList 
        data={[1]}
        style={styles.Plist}
        keyExtractor={Plist => String(Plist)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
        <View style={styles.Plist}>
         <Text style={styles.Text}>Tel.: (71) 3214-7335</Text>
         <Text style={styles.Text1}>Cel.: (71) 98634-2471</Text>
         <Text style={styles.Text2}>E-mail: claudiopena84@yahoo.com.br</Text>
         
        </View>
         )}
         />
   
   </View>
  )
} 