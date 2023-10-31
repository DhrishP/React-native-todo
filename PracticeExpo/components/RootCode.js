import {
    ActivityIndicator,
    Button,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import { s } from "react-native-wind";
  const Imagebg = require("./assets/splash.png");
const RootCode = () => {
  return (
    <View style={s`bg-pink-500 h-full  `}>
    <ScrollView>
      <Text style={s`text-center mt-20  `}>
        This is my first React Native App
      </Text>
      <Pressable onPressOut={()=>{console.log("Pressed image out")}} onLongPress={()=>console.log("Pressed image")}>
        <Image source={Imagebg} style={s`w-96 h-96 `} />
      </Pressable>
      <View style={s` flex items-center  `}>
        <Button
          title="Press me"
          onPress={() => {
            console.log("Pressed");
          }}
        />
      </View>
      <View>
        <Text>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam minima
          excepturi corporis, odit nulla odio quasi itaque sit doloribus
          consequatur at quia impedit veritatis corrupti, sapiente dolorum!
          Nisi eum voluptatem tenetur sit? Reiciendis, facilis? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Blanditiis suscipit
          officia eveniet ducimus sint, temporibus omnis rerum, dolores
          reprehenderit sed hic soluta quos sunt numquam voluptates laboriosam
        
        </Text>
        <ActivityIndicator color={'blue'}  />
      </View>
    </ScrollView>
  </View>
  )
}

export default RootCode

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });