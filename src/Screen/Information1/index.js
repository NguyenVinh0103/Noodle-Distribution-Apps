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

import {background, logo, information, iconLy, btnInformation, Avatar} from '../../Assets';

const {height} = Dimensions.get('window');
const Information1 = () => {
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
            <Image style={styles.iconInformation} source={information} resizeMode="stretch" />
            <Image style={styles.Avatar} source={Avatar} resizeMode="stretch" />
            <View style ={styles.form}>
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
            <Image style={styles.iconLy} source={iconLy} resizeMode="stretch" />
            <Image style={styles.iconLy} source={iconLy} resizeMode="stretch" />
            <Image style={styles.iconLy} source={iconLy} resizeMode="stretch" />   
        </View>
        <View>
            <Text style ={styles.text}><Text styles={{fontWeight:'900'}}>3 </Text> 
                cup of noodles left this month
            </Text>
        </View>
        <View style= {styles.btn}>
            <Image style={styles.btnInformation} source={btnInformation} resizeMode="center" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Information1;

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
  information:{
    justifyContent: 'center',
    alignItems:'center',
  },
  iconInformation:{
      width: 350,
      height: 136,
      marginTop: 20,
  },
  imagesLy:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  iconLy:{
    width: 68,
    height: 120,
    margin: 20,
  },
  text:{
    color:"#AE0808",
    textAlign:'center',
    fontWeight: '400',
    fontSize: 12
  },
  btnInformation:{
    width: 260,
    height: 100,
    marginTop: 8
  },
  btn:{
    alignItems:'center'
  },
  Avatar:{
    width : 90, 
    height : 90, 
    borderRadius: 90/2, 
    margin: 10,
    position: 'absolute',
    top : 30,
    left: 30,
  },
  form:{
    position:'absolute',
    flexDirection: 'row'
  },
  formText:{
    marginLeft: 80,
    marginTop: 10,
  },
  txt:{
    color:'#880B0B',
    fontWeight:'800'
  },
  formTextView:{
    marginLeft: 20,
    marginTop: 10,
  },
  txtView:{
    fontWeight:'400',
    color:'#880B0B'
  }
});
