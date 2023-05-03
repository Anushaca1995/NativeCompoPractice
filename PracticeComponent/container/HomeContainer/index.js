import React, {useState} from 'react';
import {View, Button, ScrollView, Text, TextInput} from 'react-native';
import style from './style';
import FuncUser from '../FuncUser';

const HomeContainer = ({navigation}) => {
  const [user, setUser] = useState({
    firstName: 'Anusha',
    lastName: 'Antony',
    gender: 'Female',
    age: '27',
    dob: '27-09-1995',
    mobile: '009900990',
    homePhone: '9900990',
    edu: 'B.Tech',
    eduArea: 'Electronics',
  });

  return (
    <View style={style.view}>
      <ScrollView>
        <FuncUser user={user} navigation={navigation} celsius={90} />

        <Button
          title={'Change Text'}
          onPress={() => {
            const userNew = {
              firstName: 'Luke',
              lastName: 'Francis',
              gender: 'Male',
              age: '5',
              dob: '27-09-2018',
              mobile: '8800880',
              homePhone: '00880088',
              edu: 'BE',
              eduArea: 'Computer',
            };
            setUser(userNew);
            console.log(user);
          }}
        />
      </ScrollView>
    </View>

    /* <Image
            resizeMode="center"
            style={{
              height: 100,
              width: '100%',
              backgroundColor: 'white',
            }}
            source={{
              uri: 'https://wallpaper.dog/large/5458119.jpg',
            }}
          />
          <ImageBackground
            source={{
              uri: 'https://st2.depositphotos.com/3336339/8196/i/600/depositphotos_81969890-stock-photo-red-chaotic-cubes-wall-background.jpg',
            }}
            resizeMode="cover"
            style={{
              height: '150%',
              width: '100%',
              backgroundColor: 'red',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
                textAlign: 'center',
              }}>
              INSIDE TEXT
            </Text>
          </ImageBackground> */
  );
};
export default HomeContainer;
