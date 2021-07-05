import React from 'react';
import { View, FlatList, Image, Text, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import t1 from '../../assets/home/t1.png';
import { FontAwesome5, Octicons, EvilIcons} from '@expo/vector-icons';


export default function home() {
  const navigation = useNavigation();
  const message = 'Olá, queria fazer um pedido!';
 
  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5571986342471&text=${message}`)
  }
  function navigateToPBarb() {
    navigation.navigate('PBarb');
  }
  function navigateToPBiblic() {
    navigation.navigate('PBiblic');
  }
  
  function navigateToPLoj() {
    navigation.navigate('PLoj');
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
  function navigateToPed() {
    navigation.navigate('PGarg');
  }
  return (
    <View style={styles.container}>
      <View style={styles.ButF}></View>
      <View style={styles.backcolor}>
      <Image 
           source={t1}
           style={styles.sh}
           resizeMode="contain"
            />
      </View>
      <FlatList 
        data={[2]}
        style={styles.Plist}
        keyExtractor={Plist => String(Plist)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
          <View>
           <TouchableOpacity 
            style={styles.But}
           onPress={navigateToPed}
         >
          <Text style={styles.Text}>Faça seu pedido!</Text>
         </TouchableOpacity>

          <TouchableOpacity
            onPress={navigateToPBarb}
            style={styles.But}
          >
            <Text style={styles.Text}>Placas Personalizadas</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
           onPress={navigateToCCP}
           style={styles.But}
         >
           <Text style={styles.Text}>Crachás, Cordões e Protetores</Text>
         </TouchableOpacity>      
         
         <TouchableOpacity
           onPress={navigateToPBiblic}
           style={styles.But}
         >
           <Text style={styles.Text}>Placas Biblicas</Text>
         </TouchableOpacity>
         
         <TouchableOpacity
           onPress={navigateToPLoj}
           style={styles.But}
         >
           <Text style={styles.Text}>Placas para Lojas</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={navigateToPCond}
           style={styles.But}
         >
           <Text style={styles.Text}>Placas para Condomínios</Text>
         </TouchableOpacity>


         <TouchableOpacity
           onPress={navigateToCV}
           style={styles.But}
         >
           <Text style={styles.Text}>Cartões de Visita</Text>
         </TouchableOpacity>
          
         <TouchableOpacity
           onPress={navigateToCont}
           style={styles.But}
         >
           <Text style={styles.Text}>Contatos</Text>
         </TouchableOpacity>
         </View>
         )}
         
      />
    
       </View>
    
  );
};
