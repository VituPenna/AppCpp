import React from 'react';
import { View, Text, Image, Button, Linking, TouchableOpacity, TouchableHighlight, Animated} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, MaterialCommunityIcons, EvilIcons} from '@expo/vector-icons';
import { FAB, Appbar } from 'react-native-paper';

export default function PGarg() {
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
  function sendEmail(){
    Linking.openURL(`mailto:claudiopena84@yahoo.com.br&text=${message}`)
  }
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={navigateBack} />
      <Appbar.Content title=" Faça o seu pedido! "/>
    </Appbar.Header>
         
     <View style={styles.Plist}>
      <TouchableOpacity  onPress={sendWhatsapp}>
       <Text class="container" style={styles.Textc}>Faça o seu pedido pelo whatsapp clicando aqui!  </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sendEmail}>
      <Text class="container" style={styles.Textc}>Faça o seu pedido por email clicando aqui!</Text>
      </TouchableOpacity>
      
      </View> 
      </View>
      
  )
} 