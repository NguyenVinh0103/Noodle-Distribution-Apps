import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {background, logo, iconTim, iconVienLy} from '../../Assets';

const {height} = Dimensions.get('window');
const OutOfNoodle = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={'black'}
          hidden={false}
        />
        <View style={styles.contain}>
          <Image style={styles.icon} source={logo} resizeMode="center" />
          <Text style={styles.content}>Out Of Noodles</Text>
          <Text style={styles.txt}>
            There is 0 cup of noodles left in the machine .Please fill in to
            continue
          </Text>
          <View style= {styles.styIconlynho}>
            <Image
              style={styles.iconLynho}
              source={iconVienLy}
              resizeMode="stretch"
            />
            <Image
              style={styles.imageDone}
              source={iconVienLy}
              resizeMode="stretch"
            />
            <Image
              style={styles.iconLynho}
              source={iconVienLy}
              resizeMode="stretch"
            />
            
          </View>
        </View>
        <View style={styles.btn}></View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OutOfNoodle;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    height: height,
    width: '100%',
  },
  content: {
    color: '#C71A1A',
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 36,
    fontFamily: 'SVN-Nexa Rush Slab Bla',
  },

  contain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 160,
    height: 100,
    marginTop: 16,
  },
  imageDone: {
    width: 80,
    height: 150,
    marginTop: 450,
  },
  iconLynho: {
    width: 50,
    height: 90,
    marginTop: 490,
    marginLeft: 10,
    marginRight: 10
  },
  styIconlynho:{
    position: 'absolute',
    flexDirection:'row',
    marginTop: 100
  },
  txtNight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: '#C71A1A',
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 20,
    marginTop: 20
  },
  iconNextDone: {
    width: 90,
  },
});
