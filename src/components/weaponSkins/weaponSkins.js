import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import styles from './weaponSkins.style';
import VideoPlayer from 'react-native-video-player';
import colors from '../../colors/colors';
const window = Dimensions.get('window');
const WeaponSkins = ({item, onPress, skinPress}) => {
  const [visible, setVisible] = useState(false);
  
  if(item.displayIcon != null &&
    item.displayName != 'STANDARD ' + item.chromas[0].displayName){

      return (
        <View style={styles.container}>
          
                <View style={styles.body}>
                  <TouchableOpacity onPress={skinPress}>
                    <Image source={{uri: item.displayIcon}} style={styles.image} />
                  </TouchableOpacity>
                  <Text style={styles.text}> {item.displayName} </Text>
                  {item.levels[0].streamedVideo != null && (
                    <View style={styles.videoButtonView}>
                      <TouchableOpacity
                        onPress={onPress}
                        style={styles.videoButton}>
                        <Text style={styles.buttonText}> Video </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              
        </View>
      );

  }
  else{
    return <View></View>
  }
 
};

export default WeaponSkins;
