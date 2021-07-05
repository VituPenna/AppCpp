import React from 'react';
import { MaterialCommunityIcons, EvilIcons  } from '@expo/vector-icons';
import { View, Text, FlatList, Linking, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import { FAB, Appbar } from 'react-native-paper';

export default function Cont() {
  const navigation = useNavigation();
  const message = 'Olá, queria fazer um pedido!';
  function navigatePay() {
    navigation.navigate('PGarg');;
  }
  function navigateBack() {
    navigation.goBack();
  }
  function sendLinked(){
    Linking.openURL(`https://www.linkedin.com/in/vitor-penna-327913120`)
  }
  return (
    <View style={styles.container}>
       <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={navigateBack} />
      <Appbar.Content title=" Contato "/>
      <MaterialCommunityIcons name="cart" size={30} style={styles.icon} onPress={navigatePay}/>
    </Appbar.Header>
    
     
      <FlatList 
        data={[1]}
        style={styles.Plist2}
        keyExtractor={Plist => String(Plist)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
        <View>
         <Text style={styles.Text}>Tel.: (71) 3214-7335</Text>
         <Text style={styles.Text}>Cell.: (71) 98634-2471</Text>
         <Text style={styles.Text}>E-mail: claudiopena84@yahoo.com.br</Text>
         
        </View>
       
         )}
         />
      <TouchableOpacity style={styles.fab} onPress={sendLinked}>
           <Text style={styles.Text3}> Clique aqui para acessar o {"\n"} Linkedin do Desenvolvedor! </Text>
           <EvilIcons name="sc-linkedin" size={50} color="#fff" />
        </TouchableOpacity>
      
    
   </View>
  )
} 