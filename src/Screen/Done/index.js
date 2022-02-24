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
} from 'react-native';

import {background, logo, imageDone, iconTim, iconBackToHome, iconNextDone} from '../../Assets';


const {height} = Dimensions.get('window');
const Done = () => {
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
          <Text style={styles.content}>Welcome</Text>
          <Image style={styles.imageDone} source={imageDone} resizeMode="stretch" />
        </View>
        <View style = {styles.txtNight}>
          <Text style={styles.txtNightText}>Enjoy Your Noodle</Text>
          <Image style={styles.iconTim} source={iconTim} resizeMode="center" />
        </View>
        <View style= {styles.btn}>
            <Image style={styles.btnBackToHome} source={iconBackToHome} resizeMode="center" />
            <Text style={styles.txt}>Get them Below</Text>
            <Image style={styles.iconNextDone} source={iconNextDone} resizeMode="center" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Done;

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
    width: 250,
    height: 250,
    marginTop: 10
  },
  txtNightText: {
    color: '#AE0808',
    fontSize: 25,
    fontFamily:'Paytone One',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },
  txtNight:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center'
  },
  iconTim:{
    width: 50,
    marginTop: 10
  },
  btn:{
    alignItems:'center'
  },
  btnBackToHome:{
    width: 260,
    height: 100,
    marginTop: 8
  },
  txt:{
    color:'#F8C135',
    fontWeight:'800',
    fontStyle:'normal',
    fontSize: 20
  },
  iconNextDone:{
    width: 90,
  }
});
