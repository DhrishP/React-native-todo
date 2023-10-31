import React from "react";
import { ScrollView, Text, View,FlatList} from "react-native";
import {s} from 'react-native-wind'

const FlattList = () => {
  const arr = [
    { id: 1, name: "Item 1", price: 10.99, quantity: 5 },
    { id: 2, name: "Item 2", price: 19.99, quantity: 8 },
    { id: 3, name: "Item 3", price: 7.49, quantity: 3 },
    { id: 4, name: "Item 4", price: 15.0, quantity: 2 },
    { id: 5, name: "Item 5", price: 25.99, quantity: 10 },
    { id: 6, name: "Item 6", price: 14.5, quantity: 7 },
    { id: 7, name: "Item 7", price: 9.99, quantity: 4 },
    { id: 8, name: "Item 8", price: 12.75, quantity: 6 },
    { id: 9, name: "Item 9", price: 18.25, quantity: 9 },
    { id: 10, name: "Item 10", price: 22.5, quantity: 12 },
  ];
  return( 
  
  
<View style={s`flex justify-center mt-10 flex-col items-center`}>

    <FlatList data={arr} renderItem={({item})=>(
      <View key={item.id}>
        <Text style={s`text-xl mt-20 text-red-500`}>{item.price}</Text>
        </View>
    )}/>
     
</View>

  );
};

export default FlattList;
