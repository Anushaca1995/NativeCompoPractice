import React, {useState} from 'react';
import UserData from '../UserData';
import {View, Button, ScrollView} from 'react-native';
import style from './style';

class ClassHomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: 'Anusha',
        lastName: 'Antony',
        gender: 'Female',
        age: '27',
        dob: '27-09-1995',
        mobile: '009900990',
        homePhone: '9900990',
        edu: 'B.Tech',
        eduArea: 'Electronics',
      },
    };
  }

  render() {
    return (
      <View style={style.view}>
        <ScrollView>
          <UserData user={this.state.user} />
          <Button
            title={'Change Text'}
            onPress={() => {
              this.setState(
                {
                  user: {
                    firstName: 'Luke',
                    lastName: 'Francis',
                    gender: 'Male',
                    age: '5',
                    dob: '27-09-2018',
                    mobile: '8800880',
                    homePhone: '00880088',
                    edu: 'BE',
                    eduArea: 'Computer',
                  },
                },
                () => console.log(this.state.user),
              );
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
  }
}
export default ClassHomeContainer;
