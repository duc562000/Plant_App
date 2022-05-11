import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text,Image,TouchableOpacity,ImageBackground,StatusBar,StyleSheet } from "react-native";
import { COLORS, icons, images } from "../constants";

const StatusPlantRow = (props) => {
    const {status,name,icon} = props
  return (
    <View style={{
        flexDirection:'row',
        paddingVertical:20,
        alignItems:'center',
        justifyContent:'space-between'
        }}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={{
            width:30,
            height:30,
            tintColor:COLORS.gray,
            marginRight:10
            }} source={icon}/>
          <Text style={styles.txtName}>{name}</Text>
        </View>
        <Text style={styles.txtGray}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    txtName:{
        fontSize:16,
        fontWeight:'500',
        color:COLORS.black
      },
      txtGray:{
        fontSize:16,
        fontWeight:"700",
        color:COLORS.gray
      }
})

export default StatusPlantRow;
