import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text,Image,TouchableOpacity,ImageBackground,StatusBar,StyleSheet } from "react-native";
import { COLORS, icons, images } from "../constants";
import ProgressBar from "react-native-progress/Bar";

const StatusPlant = (props) => {
    const {sliderPoint,icons} = props
  return (
            <View style={{width:60}}>
              <View style={{alignItems:'center'}}>
                <View
                  style={{
                    width:60,
                    height:60,
                    alignItems:'center',
                    justifyContent:'center',
                    borderWidth:1,
                    borderColor:COLORS.gray,
                    borderRadius:15,
                    marginBottom:10
                  }}
                >
                  <Image style={{width:30,height:30,tintColor:COLORS.gray}} source={icons}/>
                </View>
                <ProgressBar
                  progress={sliderPoint}
                  height={5}
                  color={COLORS.primary}
                  unfilledColor={COLORS.gray}
                  borderWidth={0}
                  animated={true}
                  width={60}
                />
              </View>
            </View>
  );
};

const styles = StyleSheet.create({
  
})

export default StatusPlant;
