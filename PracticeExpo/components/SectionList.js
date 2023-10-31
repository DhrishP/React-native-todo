import React from "react";
import GroupData from "../group-data.json";
import { SectionList, Text, View } from "react-native";
import {s} from 'react-native-wind'
const SectionListss = () => {
    if(!GroupData) return console.log("lol")
  return (
    <View style={s`flex items-center flex-col justify-center  `}>
      <Text>SectionList</Text>
      <SectionList
        sections={GroupData}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section})=>(
            <View>
                <Text style={s`text-red-400 text-xl`}>{section.title}</Text>
            </View>
        )}
      />
    </View>
  );
};

export default SectionListss;
