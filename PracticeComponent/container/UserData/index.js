import React from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props?.user?.firstName,
      lastName: this.props?.user?.lastName,
      age: this.props?.user?.age,
      dob: this.props?.user?.dob,
      mobile: this.props?.user?.mobile,
      homePhone: this.props?.user?.homePhone,
      edu: this.props?.user?.edu,
      eduArea: this.props?.user?.eduArea,
      gender: this.props?.user?.gender,
    };
  }

  renderPersonal = () => {
    const {firstName, lastName, age, dob, gender} = this.state;
    return (
      <>
        <TextInput
          style={{marginTop: 7}}
          onChangeText={onChangeText => {
            this.setState({firstName: onChangeText});
          }}
          value={firstName}
          placeholder="First Name"
          keyboardType="numeric"
        />
        <TextInput
          style={{marginTop: 7}}
          onChangeText={onChangeText => {
            this.setState({lastName: onChangeText});
          }}
          value={lastName}
          placeholder="Last Name"
          keyboardType="numeric"
        />
        {/* <Text style={{marginTop: 7}}>
              {' '}
              Full Name:
              {firstName} {lastName}
            </Text> */}
        <TextInput
          style={{marginTop: 7}}
          onChangeText={onChangeText => {
            this.setState({gender: onChangeText});
          }}
          value={gender}
          placeholder="Gender"
          keyboardType="numeric"
        />
        <TextInput
          style={{marginTop: 7}}
          onChangeText={onChangeText => {
            this.setState({age: onChangeText});
          }}
          value={age}
          placeholder="Age"
          keyboardType="numeric"
        />
        <TextInput
          style={{marginTop: 7}}
          onChangeText={onChangeText => {
            this.setState({dob: onChangeText});
          }}
          value={dob}
          placeholder="Date Of Birth"
          keyboardType="numeric"
        />
      </>
    );
  };

  renderContacts = () => {
    const {mobile, homePhone} = this.state;
    return (
      <>
        <TextInput
          style={{marginTop: 7}}
          onChangeText={onChangeText => {
            this.setState({mobile: onChangeText});
          }}
          value={mobile}
          placeholder="Mobile Number"
          keyboardType="numeric"
        />
        <TextInput
          style={{marginTop: 7}}
          onChangeText={onChangeText => {
            this.setState({homePhone: onChangeText});
          }}
          value={homePhone}
          placeholder="Home Number"
          keyboardType="numeric"
        />
      </>
    );
  };
  renderEducation = () => {
    const {edu, eduArea} = this.state;
    return (
      <>
        <TextInput
          style={{marginTop: 7}}
          onChangeText={onChangeText => {
            this.setState({edu: onChangeText});
          }}
          value={edu}
          placeholder="Highest Education"
          keyboardType="numeric"
        />
        <TextInput
          style={{marginTop: 7}}
          onChangeText={onChangeText => {
            this.setState({eduArea: onChangeText});
          }}
          value={eduArea}
          placeholder="Area of Specialization"
          keyboardType="numeric"
        />
      </>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              flex: 1,
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 40,
            }}>
            Create An Account
          </Text>

          {this.renderPersonal()}

          {this.renderContacts()}

          {this.renderEducation()}
        </ScrollView>
      </View>
    );
  }
}
export default UserData;
