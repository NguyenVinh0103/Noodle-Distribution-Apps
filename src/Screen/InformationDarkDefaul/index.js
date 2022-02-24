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

import {
  background,
  logo,
  information,
  btnInformation,
  Avatar,
  iconLyDark,
} from '../../Assets';

const {height} = Dimensions.get('window');
const InformationDarkDefaul = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'black'}
        hidden={false}
      />
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.contain}>
          <Image style={styles.icon} source={logo} resizeMode="center" />
          <Text style={styles.content}>Information</Text>
        </View>
        <View style={styles.information}>
          <Image
            style={styles.iconInformation}
            source={information}
            resizeMode="stretch"
          />
          <Image style={styles.Avatar} source={Avatar} resizeMode="stretch" />
          <View style={styles.form}>
            <View style={styles.formText}>
              <Text style={styles.txt}>Full name: </Text>
              <Text style={styles.txt}>Birth day: </Text>
              <Text style={styles.txt}>Gender: </Text>
              <Text style={styles.txt}>Department: </Text>
            </View>
            <View style={styles.formTextView}>
              <Text style={styles.txtView}>Alice Mie</Text>
              <Text style={styles.txtView}>12/10/1999</Text>
              <Text style={styles.txtView}>Female</Text>
              <Text style={styles.txtView}>Design</Text>
            </View>
          </View>
        </View>
        <View style={styles.imagesLy}>
          <Image
            style={styles.iconLy}
            source={iconLyDark}
            resizeMode="stretch"
          />
          <Image
            style={styles.iconLy}
            source={iconLyDark}
            resizeMode="stretch"
          />
          <Image
            style={styles.iconLy}
            source={iconLyDark}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.TextLy}>
            <Text style={{marginLeft: 30 , paddingLeft:10, color:'#A09A9A', fontWeight:'700'}}>Unavailable</Text>
            <Text style={{marginLeft: 40 , paddingLeft:10, color:'#A09A9A', fontWeight:'700'}}>Unavailable</Text>
            <Text style={{marginLeft: 40 , paddingLeft:10, color:'#A09A9A', fontWeight:'700'}}>Unavailable</Text>
        </View>
        
        <View style={styles.TextForm}>
          <Text style={styles.number}>0 </Text>
          <Text style={styles.text}>cups of noodles left this month</Text>
        </View>

        <View style={styles.btn}>
          <Image
            style={styles.btnInformation}
            source={btnInformation}
            resizeMode="center"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default InformationDarkDefaul;

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
    fontWeight: '900',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 36,
    font: 'SVN-Nexa Rush Slab Bla',
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
  information: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInformation: {
    width: 350,
    height: 136,
    marginTop: 20,
  },
  imagesLy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVectorLy: {
    position: 'absolute',
    width: 100,
    height: 100,
    marginTop: 28,
    marginLeft: 4,
  },
  iconLy: {
    width: 80,
    height: 100,
    marginLeft: 20,
    marginRight:20,
    marginTop:20
  },
  TextForm: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 24,
  },
  number: {
    color: '#D91313',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20
  },
  btnInformation: {
    width: 260,
    height: 100,
    marginTop: 8,
  },
  btn: {
    alignItems: 'center',
  },
  Avatar: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    margin: 10,
    position: 'absolute',
    top: 30,
    left: 30,
  },
  form: {
    position: 'absolute',
    flexDirection: 'row',
  },
  formText: {
    marginLeft: 80,
    marginTop: 10,
  },
  txt: {
    color: '#880B0B',
    fontWeight: '800',
  },
  formTextView: {
    marginLeft: 20,
    marginTop: 10,
  },
  txtView: {
    fontWeight: '400',
    color: '#880B0B',
  },
  TextLy:{
    flexDirection:'row',
  },
});
