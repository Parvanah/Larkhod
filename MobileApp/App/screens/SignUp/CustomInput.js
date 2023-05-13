import React from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'
import CustomText from '../../CustomText'

const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
      <TextInput
        style={[
          styles.textInput,
          hasError && styles.errorInput
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />
      {hasError && <CustomText style={styles.errorText}>{errors[name]}</CustomText>}
    </>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    width: "100%",
    height: 40,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "right",
  },
  errorText: {
    fontSize: 15,
    color: 'red',
    textAlign:"right"
  },
  errorInput: {
    borderColor: 'red',
  }
})

export default CustomInput