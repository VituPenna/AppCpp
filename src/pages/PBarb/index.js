import React from 'react';
import { FontAwesome5, MaterialCommunityIcons, EvilIcons} from '@expo/vector-icons';
import { View, Text, Image, FlatList, Linking, TouchableOpacity, TouchableHighlight,} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import p1 from '../../assets/Pbarb/BARB3.png';
import p2 from '../../assets/Pbarb/P1.png';
import p3 from '../../assets/Pbarb/p3.png';
import p4 from '../../assets/Pbarb/p4.png';
import p5 from '../../assets/Pbarb/p5.png';
import p6 from '../../assets/Pbarb/p6.png';
import p9 from '../../assets/Pbarb/p9.png';
import p10 from '../../assets/Pbarb/p10.png';
import p12 from '../../assets/Pbarb/p12.png';
import p14 from '../../assets/Pbarb/p14.png';
import p15 from '../../assets/Pbarb/p15.png';
import p16 from '../../assets/Pbarb/p16.png';
import { FAB, Appbar } from 'react-native-paper';

export default function PBarb() {
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
 
  return (
    

     <View style={styles.container}>
     <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={navigateBack} />
      <Appbar.Content title="Placas Personalizadas"/>
      <MaterialCommunityIcons name="cart" size={30} style={styles.icon} onPress={navigatePay}/>
    </Appbar.Header>
    
      <FlatList 
        data={[1]}
        style={styles.Plist}
        keyExtractor={Plist => String(Plist)}
        showsVerticalScrollIndicator={false}
        renderItem={() =>(
          <View>
         <View style={styles.box}>
          <Text style={styles.Text}>  Placa Nº B1  </Text>
        
           <Image 
           source={p1}
           style={styles.image}
           resizeMode="contain"
            />
          <Text style={styles.Text2}>Tamanho: 29x21cm</Text>   
         
          </View>
         <View style={styles.box}> 
          <Text style={styles.Text}>  Placa Nº B2  </Text>
          
           <Image 
           source={p2}
           style={styles.image}
           resizeMode="contain"
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text> 
            </View> 
         <View style={styles.box}>
          <Text style={styles.Text}>  Placa Nº B3  </Text>
          
           <Image 
           source={p3}
           style={styles.image}
           resizeMode="contain"
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text> 
            </View>
            <View style={styles.box}> 
          <Text style={styles.Text}>  Placa Nº B4  </Text>
          
           <Image 
           source={p4}
           style={styles.image}
           resizeMode="contain"
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text> 
          
            </View>
            <View style={styles.box}>
          <Text style={styles.Text}>  Placa Nº B5  </Text>
          
           <Image 
           source={p5}
           style={styles.image}
           resizeMode="contain"
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
            </View>
            <View style={styles.box}>
          <Text style={styles.Text}>  Placa Nº B6  </Text>
          
           <Image 
           source={p6}
           style={styles.image}
           resizeMode="contain"
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
            </View>
            <View style={styles.box}>
          <Text style={styles.Text}>  Placa Nº B7  </Text>
          
           <Image 
           source={p16}
           style={styles.image}
           resizeMode="contain"
            />
            <Text style={styles.Text2}>Tamanho: 21x29cm</Text>
            </View>
            <View style={styles.box}>
          <Text style={styles.Text}>  Placa Nº B8  </Text>
          
           <Image 
           source={p9}
           style={styles.image}
           resizeMode="contain"
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
            </View>
            <View style={styles.box}> 
            <Text style={styles.Text}>  Placa Nº B9  </Text>
          
           <Image 
           source={p10}
           style={styles.image}
           resizeMode="contain"
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
            </View>
            <View style={styles.box}>
          <Text style={styles.Text}>  Placa Nº B10  </Text>
          
           <Image 
           source={p15}
           style={styles.image}
           resizeMode="contain"
            />
            <Text style={styles.Text2}>Tamanho: 21x21cm</Text>
            </View>
            <View style={styles.box}>
          <Text style={styles.Text}>  Placa Nº B11  </Text>
          
           <Image 
           source={p12}
           style={styles.image}
           resizeMode="contain"
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
            </View>
            <View style={styles.box}> 
          <Text style={styles.Text}>  Placa Nº B12  </Text>
          
           <Image 
           source={p14}
           style={styles.image}
           resizeMode="contain"
            />
            <Text style={styles.Text2}>Tamanho: 29x21cm</Text>
            </View>
         </View>
        )}
         />
       <FAB
    style={styles.fab}
    small
    icon="whatsapp"
    label="whatsapp"
    onPress={sendWhatsapp}
    
  />
    </View>
  )
} 