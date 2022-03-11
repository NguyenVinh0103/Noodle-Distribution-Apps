import React, {useState, useEffect} from 'react';
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

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-picker';

import {
  background,
  logo,
  information,
  iconLy,
  btnInformation,
  Vector,
} from '../../Assets';

const {height} = Dimensions.get('window');
const InformationLight = ({navigation}) => {
  const arr = [
    {
      id: 1,
      isChecked: false,
    },
    {
      id: 2,
      isChecked: false,
    },
    {
      id: 3,
      isChecked: false,
    },
  ];
  const [data, setData] = useState(arr);
  const onPressItem = id => {
    const dataTemp = [...data]; /// tạo ra 1 mảng mới giống hệt mảng cũ;

    ///vi tri cua mang la index, data/dataTemp la mang
    const index = dataTemp.findIndex(item => item.id == id);
    /// lay phan tu cua mang mang[vi_tri_cua_mang];
    console.log(data[index], index);
    if (index > -1) {
      dataTemp[index].isChecked = !dataTemp[index].isChecked;
      setData(dataTemp);
    }
  };
  const [fullname, setFullname] = useState('');
  const [birthday, setBirthDay] = useState('');
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('');
  const [avatar, setAvatar] = useState(
    'https://static.topcv.vn/avatars/QRVnjwk0LezxZEWkQwTs_61e023815645f_cvtpl.jpg?1646718915',
  );
  const [filePath, setFilePath] = useState({});

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'Select Image Noodle Apps',
          title: 'Choose Photo from Noodle Apps'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log(
          'User tapped custom button: ',
          response.customButton
        );
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });
  };
  

  useEffect(() => {
    firestore()
      .collection('User')
      .doc(auth().currentUser.email)
      .get()
      .then(data => {
        console.log(data);
        const user = data._data;
        console.log(user);
        setFullname(user.fullname);
        setBirthDay(user.birthday);
        setGender(user.gender);
        setDepartment(user.department);

        storage()
          .ref(user.avatar)
          .getDownloadURL()
          .then(url => setAvatar(url))
          .catch(e => console.log(e));
      });
    // Stop listening for updates when no longer required
  }, []);

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
          <Image
            style={styles.Avatar}
            source={{uri: avatar}}
            resizeMode="stretch"
          />

          <View style={styles.form}>
            <View style={styles.formText}>
              <Text style={styles.txt}>Full name:</Text>
              <Text style={styles.txt}>Birth day:</Text>
              <Text style={styles.txt}>Gender:</Text>
              <Text style={styles.txt}>Department:</Text>
            </View>
            <View style={styles.formTextView}>
              <Text style={styles.txtView}>{fullname}</Text>
              <Text style={styles.txtView}>{birthday}</Text>
              <Text style={styles.txtView}>{gender}</Text>
              <Text style={styles.txtView}>{department}</Text>
              <TouchableOpacity onPress={chooseFile}>
                <Text style={styles.selectImage}>Select Image</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.imagesLy}>
          {data.map(item => {
            return (
              <TouchableOpacity
                onPress={() => onPressItem(item?.id)}
                style={styles.backgroundVector}>
                {item?.isChecked && (
                  <Image
                    style={styles.backgroundVectorLy}
                    source={Vector}
                    resizeMode="stretch"
                  />
                )}
                {/* Toan tu 2 ngoi. => dieu kien dung -> show ngoi thu 2 */}

                <Image
                  style={styles.iconLy}
                  source={iconLy}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.TextForm}>
          <Text style={styles.number}>3 </Text>
          <Text style={styles.text}>cups of noodles left this month</Text>
        </View>

        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate('Done')}>
            <Image
              style={styles.btnInformation}
              source={btnInformation}
              resizeMode="center"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default InformationLight;

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
    width: 68,
    height: 120,
    margin: 20,
  },
  TextForm: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 4,
  },
  number: {
    color: '#D91313',
    fontWeight: 'bold',
    fontSize: 15,
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
    top: 26,
    left: 30,
  },
  form: {
    position: 'absolute',
    flexDirection: 'row',
  },
  formText: {
    marginLeft: 80,
    marginTop: 12,
  },
  txt: {
    color: '#880B0B',
    fontWeight: '800',
    marginLeft: 25,
  },
  selectImage: {
    marginLeft: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 4,
    textAlign: 'center',
  },
  formTextView: {
    marginLeft: 8,
    marginTop: 12,
  },
  txtView: {
    fontWeight: '400',
    color: '#880B0B',
  },
});
