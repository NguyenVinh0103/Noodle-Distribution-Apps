import React, {useState} from 'react';
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
import {Formik, Form, Field} from 'formik';
import {SignupSchema} from '../../Constant';

import {background, facebook, youtube, instagram} from '../../Assets';
const {height} = Dimensions.get('window');
const Login = () => {
  // function onSubmitHandler(values) {
  //   Alert.alert('Login Success!', 'Data' + JSON.stringify(values));
  // }
  // function isFormValid(isValid, touched) {
  //   return isValid && Object.keys(touched).length !== 0;
  // }
  const onSubmitHandler = values => {
    Alert.alert('Login Success!', 'Data' + JSON.stringify(values));
  };
  const isFormValid = (isValid, touched) => {
    return isValid && Object.keys(touched).length !== 0;
  };

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
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={SignupSchema}
            onSubmit={onSubmitHandler}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <View style={styles.form}>
                  <TextInput
                    style={styles.input}
                    placeholder="@gmail.com......"
                    placeholderTextColor="#fff"
                    autoFocus={true}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}></TextInput>
                  {errors.email && touched.email ? (
                    <Text style={{color: 'red', marginLeft: 35}}>
                      {errors.email}
                    </Text>
                  ) : null}

                  <TextInput
                    style={styles.input}
                    placeholder="************"
                    placeholderTextColor="#fff"
                    autoFocus={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}></TextInput>
                  {errors.password && touched.password ? (
                    <Text style={{color: 'red', marginLeft: 35}}>
                      {errors.password}
                    </Text>
                  ) : null}

                  <TouchableOpacity
                    disabled={!isFormValid(isValid, touched)}
                    onPress={handleSubmit}>
                    <View
                      style={[
                        styles.buttonSignIn,
                        {
                          opacity: isFormValid(isValid, touched) ? 1 : 0.5,
                        },
                      ]}>
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
                  <Image style={styles.icon} source={facebook} />
                  <Image style={styles.icon} source={instagram} />
                  <Image style={styles.icon} source={youtube} />
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

                  <TouchableOpacity style={styles.actionLogin}>
                    <Text style={styles.actionLoginText}>Create Password</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
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
    color: '#ffb6c1',
    marginTop: 20,
    fontSize: 32,
    lineHeight: 48,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },

  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    fontStyle: 'italic',
    height: 45,
    marginTop: 48,
    marginLeft: 32,
    marginRight: 32,
    justifyContent: 'center',
    fontSize: 20,
    alignItems: 'center',
    color: '#fff',
  },

  buttonSignIn: {
    height: 44,
    marginTop: 80,
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
    borderBottomColor: '#7fff00',
    borderTopColor: '#ff1493',
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
    width: 36,
    height: 26,
    borderRadius: 12,
  },
});
