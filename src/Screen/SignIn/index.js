import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';


import {background, facebook, google, instagram} from '../../Assets';

const {height} = Dimensions.get('window');
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const SignInAccount = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Alert !!!', 'Sign In Success', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => navigation.navigate('InformationLight')},
        ]);
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setErrorEmail('please input email again');
        }
    
        if (error.code === 'auth/password-wrong') {
          setErrorPassword('please input password again');
        }
        setEmail('');
        setPassword('');
    
        console.error(error);
      });
      console.log(email);
  };

  useEffect(() => {
    if (auth().currentUser) {
      navigation.navigate('SignIn');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <View>
          <Text style={styles.content}>Sign In </Text>
        </View>

        <StatusBar
          barStyle="light-content"
          backgroundColor={'black'}
          hidden={false}
        />
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="@gmail.com......"
              placeholderTextColor="#fff"
              value={email}
              onChangeText={value => setEmail(value)}
              autoFocus={true}></TextInput>

            <Text style={{color: 'red', marginLeft: 35}}>{errorEmail}</Text>

            <TextInput
              style={styles.input}
              placeholder="**********"
              placeholderTextColor="#fff"
              secureTextEntry = {true}
              onChangeText={value => setPassword(value)}
              value={password}
              keyboardType="numeric"
              autoFocus={true}></TextInput>

            <Text style={{color: 'red', marginLeft: 35}}>{errorPassword}</Text>
            <TouchableOpacity onPress={SignInAccount}>
              <View style={styles.buttonSignIn}>
                <Text style={styles.buttonLoginText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.contain}>
            <View
              style={{
                width: 80,
                height: 1,
                borderWidth: 1,
                borderColor: '#fff',
                marginTop: 12,
              }}></View>
            <TouchableOpacity onPress={() => LoginFacebook.then(() => console.log('Signed in with Facebook!'))}>
              <Image style={styles.icon} source={facebook} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => LoginInstagram.then(() =>console.log('Signed in with instagram!'))}>
              <Image style={styles.icon} source={instagram} />  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => LoginGoogle.then(() =>console.log('Signed in with google!'))}>
              <Image style={styles.icon} source={google} />
            </TouchableOpacity>
            <View
              style={{
                width: 90,
                height: 1,
                borderWidth: 1,
                borderColor: '#fff',
                marginTop: 12,
              }}></View>
          </View>

          <View style={styles.action}>
            <TouchableOpacity style={styles.actionLogin}>
              <Text style={styles.actionLoginText}>Forget Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterAccount')}
              style={styles.actionLogin}>
              <Text style={styles.actionLoginText}>Register Account</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignIn;
const TEXT = {
  color: '#fff',
  textAlign: 'center',
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    height: height,
    width: '100%',
  },
  content: {
    color: 'red',
    marginTop: 80,
    fontSize: 50,
    lineHeight: 48,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    fontStyle: 'italic',
    height: 45,
    marginTop: 48,
    marginLeft: 32,
    marginRight: 32,
    justifyContent: 'center',
    fontSize: 20,
    alignItems: 'center',
    color: '#000',
  },

  buttonSignIn: {
    height: 44,
    marginTop: 50,
    marginLeft: 36,
    marginRight: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 16,
    backgroundColor: '#7cfc00',
  },

  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonLoginText: {
    fontStyle: 'italic',
    fontSize: 32,
    color: '#ff4500',
  },

  actionLoginText: {
    color: '#fff',
    marginTop: 24,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
    fontStyle: 'italic',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 16,
    padding: 8,
  },

  contain: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginTop: 20,
    marginRight: 12,
    marginLeft: 12,
    width: 52,
    height: 50,
    borderRadius: 12,
  },
});
