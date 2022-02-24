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

import {
  background,
  logo,
  imageError,
  scan,
  tablet,
  iconNext,
} from '../../Assets';

const {height} = Dimensions.get('window');
const Error = ({navigation}) => {
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
          <Text style={styles.content}>ERROR</Text>
          <Text style={styles.txtContent}>Can not recongnize your ID card</Text>
          <TouchableOpacity style={styles.btn}>
              <Text style={styles.txtButton}>Please scan again</Text>
          </TouchableOpacity>
          <Image
            style={styles.imageError}
            source={imageError}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.Scan}>
          <Image style={styles.iconScan} source={scan} resizeMode="center" />
          <TouchableOpacity style={styles.action}>
            <Text style={styles.scanText}>Follow the around to scan card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tablet}>
          <Image
            style={styles.iconTablet}
            source={tablet}
            resizeMode="center"
          />
          <TouchableOpacity onPress={() => navigation.navigate('Done')}>
          <Image
            style={styles.iconNext}
            source={iconNext}
            resizeMode="center"
          />
          </TouchableOpacity>        
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Error;

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
  txtContent: {
    color: '#980000',
    fontWeight: '800',
    marginTop: 20,
    fontSize: 20
  },
  btn:{
    backgroundColor: '#D86643',
    width: 150,
    height: 30,
    marginTop: 10
  },
  txtButton:{
    textAlign:'center',
    marginTop: 5,
    color: '#fff'
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
  imageError: {
    width: 150,
    height: 180,
    marginTop: 10,
  },
  Scan: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanText: {
    color: '#AE0808',
    fontSize: 16,
    fontFamily: 'Nunito',
    fontWeight: '800',
    paddingLeft: 12,
  },
  iconScan: {
    width: 40,
    height: 80,
  },
  tablet: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTablet: {
    width: 150,
    height: 150,
    marginTop: 16,
    marginLeft: 100,
  },
  iconNext: {
    width: 90,
    marginTop: 40,
  },
});
