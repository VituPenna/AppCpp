import React from 'react';
import { View, FlatList, Image, Text, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import t1 from '../../assets/home/t1.png';
  
  
export default function home() {
  const navigation = useNavigation();
  const message = 'Olá, queria fazer um pedido!';
  
  function navigateToPBarb() {
    navigation.navigate('PBarb');
  }
  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5571986342471&text=${message}`)
  }
  
  function navigateToPBiblic() {
    navigation.navigate('PBiblic');
  }
  
  function navigateToPLoj() {
    navigation.navigate('PLoj');
  }

  function navigateToPGarg() {
    navigation.navigate('PGarg');
  }

  function navigateToPCond() {
    navigation.navigate('PCond');
  }
  
  function navigateToCCP() {
    navigation.navigate('CCP');
  }

  function navigateToCV() {
    navigation.navigate('CV');
  }

  function navigateToCont() {
    navigation.navigate('Cont');
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title2}> /////////////////////////////</Text>
      <View style={styles.header}>
      <Image 
           source={t1}
           style={styles.sh}
            />
      </View>
      <Text style={styles.title3}> /////////////////////////////</Text>
      <FlatList 
        data={[2]}
        style={styles.Plist}
        keyExtractor={Plist => String(Plist)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
        <View style={styles.Plist}>
           <TouchableOpacity
           onPress={sendWhatsapp}
         >
           <Text style={styles.But}>Faça seu pedido!</Text>
         </TouchableOpacity>

          <TouchableOpacity
            onPress={navigateToPBarb}
          >
            <Text style={styles.But}>Placas Personalizadas</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
           onPress={navigateToCCP}
         >
           <Text style={styles.But}>Crachás, Cordões e Protetores</Text>
         </TouchableOpacity>      
         
         <TouchableOpacity
           onPress={navigateToPBiblic}
         >
           <Text style={styles.But}>Placas Biblicas</Text>
         </TouchableOpacity>
         
         <TouchableOpacity
           onPress={navigateToPLoj}
         >
           <Text style={styles.But}>Placas para Lojas</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={navigateToPGarg}
         >
           <Text style={styles.But}>Placas para Garagem</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={navigateToPCond}
         >
           <Text style={styles.But}>Placas para Condomínios</Text>
         </TouchableOpacity>

         

         <TouchableOpacity
           onPress={navigateToCV}
         >
           <Text style={styles.But}>Cartões de Visita</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={navigateToCont}
         >
           <Text style={styles.ButF}>Contato</Text>
         </TouchableOpacity>
         </View>
         )}
      />
       
    </View>
  );
};