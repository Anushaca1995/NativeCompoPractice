import {React, useState} from 'react';
import {View, ScrollView, TextInput, Text, Button} from 'react-native';
import style from '../HomeContainer/style';

const UserData = ({navigation}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstName: this.props?.user?.firstName,
  //     lastName: this.props?.user?.lastName,
  //     age: this.props?.user?.age,
  //     dob: this.props?.user?.dob,
  //     mobile: this.props?.user?.mobile,
  //     homePhone: this.props?.user?.homePhone,
  //     edu: this.props?.user?.edu,
  //     eduArea: this.props?.user?.eduArea,
  //     gender: this.props?.user?.gender,
  //   };
  // }
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  renderPersonal = () => {
    return (
      <>
        <TextInput
          style={style.inputField}
          onChangeText={newText => setFirstName(newText)}
          defaultValue={firstName}
          placeholder="First Name"
        />
        <Text>{firstName}</Text>

        <TextInput
          style={style.inputField}
          onChangeText={newText => setLastName(newText)}
          defaultValue={lastName}
          placeholder="Last Name"
        />
        <Text>{lastName}</Text>
      </>
    );
  };

  renderContacts = () => {
    const {mobile, homePhone} = props.user;
    return (
      <>
        <TextInput
          style={style.inputField}
          onChangeText={onChangeText => {
            this.setState({mobile: onChangeText});
          }}
          value={mobile}
          placeholder="Mobile Number"
        />
        <TextInput
          style={style.inputField}
          onChangeText={onChangeText => {
            this.setState({homePhone: onChangeText});
          }}
          value={homePhone}
          placeholder="Home Number"
        />
      </>
    );
  };
  renderEducation = () => {
    const {edu, eduArea} = props.user;
    return (
      <>
        <TextInput
          style={style.inputField}
          onChangeText={onChangeText => {
            this.setState({edu: onChangeText});
          }}
          value={edu}
          placeholder="Highest Education"
        />
        <TextInput
          style={style.inputField}
          onChangeText={onChangeText => {
            this.setState({eduArea: onChangeText});
          }}
          value={eduArea}
          placeholder="Area of Specialization"
        />
      </>
    );
  };

  return (
    <View style={style.view}>
      <ScrollView>
        <Text style={style.caption}>Create An Account</Text>

        {this.renderPersonal()}

        {/* {this.renderContacts()}

        {this.renderEducation()} */}
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate('Details', {
              firstName: firstName,
            });
          }}
        />
      </ScrollView>
    </View>
  );
};
export default UserData;
