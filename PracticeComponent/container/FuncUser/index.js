import React, {useState} from 'react';
import {View, Button, ScrollView, Text, TextInput} from 'react-native';
import style from './style';

const FuncUser = props => {
  const [firstName, setFirstName] = useState(props?.user?.firstName);
  const [lastName, setLastName] = useState(props?.user?.lastName);
  const [age, setAge] = useState(props?.user?.age);
  const [gender, setGender] = useState(props?.user?.gender);
  const [dob, setDob] = useState(props?.user?.dob);
  const [mobile, setMobile] = useState(props?.user?.mobile);
  const [homePhone, setHomePhone] = useState(props?.user?.homePhone);
  const [edu, setEdu] = useState(props?.user?.edu);
  const [eduArea, setEduArea] = useState(props?.user?.eduArea);

  renderPersonal = () => {
    return (
      <>
        <TextInput
          style={style.inputField}
          onChangeText={newText => setFirstName(newText)}
          defaultValue={firstName}
          placeholder="First Name"
        />

        <TextInput
          style={style.inputField}
          onChangeText={newText => setLastName(newText)}
          defaultValue={lastName}
          placeholder="Last Name"
        />

        <TextInput
          style={style.inputField}
          onChangeText={newText => setAge(newText)}
          defaultValue={age}
          placeholder="Age"
        />

        <TextInput
          style={style.inputField}
          onChangeText={newText => setGender(newText)}
          defaultValue={gender}
          placeholder="Gender"
        />

        <TextInput
          style={style.inputField}
          onChangeText={newText => setDob(newText)}
          defaultValue={dob}
          placeholder="Date Of Birth"
        />
      </>
    );
  };

  renderContacts = () => {
    return (
      <>
        <TextInput
          style={style.inputField}
          onChangeText={newText => setMobile(newText)}
          defaultValue={mobile}
          placeholder="Mobile"
        />
        <TextInput
          style={style.inputField}
          onChangeText={newText => setHomePhone(newText)}
          defaultValue={homePhone}
          placeholder="Home Phone"
        />
      </>
    );
  };
  renderEducation = () => {
    return (
      <>
        <TextInput
          style={style.inputField}
          onChangeText={newText => setEdu(newText)}
          defaultValue={edu}
          placeholder="Highest Education"
        />
        <TextInput
          style={style.inputField}
          onChangeText={newText => setEduArea(newText)}
          defaultValue={eduArea}
          placeholder="Area Of Specialization"
        />
      </>
    );
  };

  return (
    <View style={style.view}>
      <ScrollView>
        <Text style={style.caption}>Create An Account</Text>

        {this.renderPersonal()}

        {this.renderContacts()}

        {this.renderEducation()}
        <Button
          title="Show"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            props.navigation.navigate('Details', {
              firstName: firstName,
              lastName: lastName,
              age: age,
              dob: dob,
              gender: gender,
              mobile: mobile,
              homePhone: homePhone,
              edu: edu,
              eduArea: eduArea,
            });
          }}
        />
      </ScrollView>

      {/* <Button
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
            () => console.log(user),
          );
        }}
      /> */}
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
export default FuncUser;
