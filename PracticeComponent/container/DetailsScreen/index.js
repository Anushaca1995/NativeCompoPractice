import {View, Text} from 'react-native';
import style from './style';
const DetailsScreen = ({route}) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    dob,
    mobile,
    homePhone,
    edu,
    eduArea,
  } = route.params;
  return (
    <View style={style.viewField}>
      <Text style={style.caption}>User Details</Text>
      <View style={style.textView}>
        <Text style={style.subCaption}>Personal Details</Text>
        <Text style={style.textField}>First Name: {firstName}</Text>
        <Text style={style.textField}>Last Name: {lastName}</Text>
        <Text style={style.textField}>Age: {age}</Text>
        <Text style={style.textField}>Gender: {gender}</Text>
        <Text style={style.textField}>Date Of Birth: {dob}</Text>
        <Text style={style.subCaption}>Contact Details</Text>
        <Text style={style.textField}>Mobile: {mobile}</Text>
        <Text style={style.textField}>Home Phone: {homePhone}</Text>
        <Text style={style.subCaption}>Educational Details</Text>
        <Text style={style.textField}>Highest Education: {edu}</Text>
        <Text style={style.textField}>Area Of Specializatiom: {eduArea}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;
