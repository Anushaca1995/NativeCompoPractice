import React from 'react';
import {View, ScrollView, TextInput, Text, Button} from 'react-native';
import style from '../HomeContainer/style';
import _ from 'lodash';

class UserData extends React.PureComponent {
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

  componentDidUpdate(nextProps, nextState) {
    if (!_.isEqual(nextProps, this.props)) {
      this.setState({
        firstName: this.props?.user?.firstName,
        lastName: this.props?.user?.lastName,
        age: this.props?.user?.age,
        dob: this.props?.user?.dob,
        mobile: this.props?.user?.mobile,
        homePhone: this.props?.user?.homePhone,
        edu: this.props?.user?.edu,
        eduArea: this.props?.user?.eduArea,
        gender: this.props?.user?.gender,
      });
    }
  }

  renderPersonal = () => {
    const {firstName, lastName, age, dob, gender} = this.state;
    return (
      <>
        <TextInput
          style={style.inputField}
          onChangeText={onChangeText => {
            this.setState({firstName: onChangeText});
          }}
          defaultValue={firstName}
          placeholder="First Name"
        />

        <TextInput
          style={style.inputField}
          defaultValue={lastName}
          placeholder="Last Name"
        />

        <TextInput
          style={style.inputField}
          defaultValue={age}
          placeholder="Age"
        />

        <TextInput
          style={style.inputField}
          defaultValue={gender}
          placeholder="Gender"
        />

        <TextInput
          style={style.inputField}
          defaultValue={dob}
          placeholder="Date Of Birth"
        />
      </>
    );
  };

  renderContacts = () => {
    const {mobile, homePhone} = this.state;
    return (
      <>
        <TextInput
          style={style.inputField}
          defaultValue={mobile}
          placeholder="Mobile"
        />
        <TextInput
          style={style.inputField}
          defaultValue={homePhone}
          placeholder="Home Phone"
        />
      </>
    );
  };
  renderEducation = () => {
    const {edu, eduArea} = this.state;
    return (
      <>
        <TextInput
          style={style.inputField}
          defaultValue={edu}
          placeholder="Highest Education"
        />
        <TextInput
          style={style.inputField}
          defaultValue={eduArea}
          placeholder="Area Of Specialization"
        />
      </>
    );
  };
  render() {
    return (
      <View style={style.view}>
        <ScrollView>
          <Text style={style.caption}>Create An Account</Text>

          {this.renderPersonal()}

          {this.renderContacts()}

          {this.renderEducation()}
        </ScrollView>
      </View>
    );
  }
}
export default UserData;
