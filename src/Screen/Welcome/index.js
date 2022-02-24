import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';

import {background, logo, video, scan, tablet, iconNext} from '../../Assets';


const {height} = Dimensions.get('window');
const Login = () => {
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
          <Image style={styles.video} source={video} resizeMode="stretch" />
        </View>
        <View style = {styles.Scan}>
          <Image style={styles.iconScan} source={scan} resizeMode="center" />
          <TouchableOpacity style = {styles.action}>
            <Text style={styles.scanText}>Follow the around to scan card</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.tablet}>
          <Image style={styles.iconTablet} source={tablet} resizeMode="center" />
          <Image style={styles.iconNext} source={iconNext} resizeMode="center" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

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
  video: {
    width: 320,
    height: 200,
    marginTop: 10
  },
  Scan: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 48
  },
  scanText: {
    color: '#AE0808',
    fontSize: 16,
    fontFamily:  'Nunito',
    fontWeight: '800',
    paddingLeft: 12
  },
  iconScan:{
    width: 40,
    height: 80,
  },
  tablet:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTablet:{
    width: 150,
    height: 150,
    marginTop: 16,
    marginLeft: 100
  },
  iconNext:{
    width: 90,
    marginTop: 40
  }
});
