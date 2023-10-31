import React, { useState } from "react";
import { Switch, Text, TextInput, View } from "react-native";
import { s } from "react-native-wind";

const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <View style={s`h-full flex items-center justify-center`}>
      <View style={`rounded-xl`}>
        <View style={s`p-2.5    px-20`}>
          <Text style={s`text-lg text-slate-300 lining-nums`}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter a valid email..."
            style={s`py-1  px-2 bg-blue-100  text-coolGray-100 border   `}
          />
        </View>
        <View style={s`p-2.5  rounded-xl px-20`}>
          <Text style={s`text-lg text-slate-300 lining-nums `}>Password</Text>
          <TextInput
            placeholder="Enter a valid password..."
            onChangeText={setpassword}
            value={password}
            style={s`py-1  px-2 bg-blue-100  text-coolGray-100 border  `}
            secureTextEntry
            keyboardType="default"
          />
          <View style={s`self-start   `}>
            <Text style={s`text-lg mt-1`}>Turn on notifications</Text>

            <Switch />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FormValidation;
