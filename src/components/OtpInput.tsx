import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { colors } from "@src/utils";
import { OtoVerifyProp } from "@src/models";


export const OtpInput: React.FC<OtoVerifyProp> = ({ error, onComplete, onChange }) => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const otpInputs = useRef<TextInput[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 4 && value !== "") {
      const nextInput = index + 1;
      otpInputs.current[nextInput].focus();
    }

    const items = otp.filter(i => i !== '');


    if (index == 4 && items.length == 4) {
      onComplete && onComplete(otp.toString().trim())
    }
  };

  const handleKeyPress = (index: number, event: any) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
      otpInputs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (otp) {
      const items = otp.filter(i => i !== '');
      onChange(items);
    }
  }, [otp])


  return (
    <View>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (otpInputs.current[index] = ref!)}
            style={styles.otpInput}
            onChangeText={(text) => handleOtpChange(index, text)}
            onKeyPress={event => handleKeyPress(index, event)}
            value={digit}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    width: "80%",
    columnGap: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  otpInput: {
    width: 37,
    height: 44,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: colors.OTP_INPUT_BG,
    borderRadius: 8,
  },
  label: {
    color: colors.BLACK,
    marginBottom: 10,
    fontSize: 14,
    textTransform: "uppercase",
  },
});
