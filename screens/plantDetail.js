import { useNavigation } from "@react-navigation/native";
import React,{useState,useEffect} from "react";
import { View, Text,Image,TouchableOpacity,ImageBackground,StatusBar,StyleSheet } from "react-native";
import StatusPlant from "../components/statusPlant";
import StatusPlantRow from "../components/statusPlantRow";
import { COLORS, icons, images } from "../constants";

const PlantDetail = (props) => {
  const [sunSlider, setSunSlider] = useState(0);
  const [waterSlider, setWaterSlider] = useState(0);
  const [tempSlider, setTempSlider] = useState(0);
  const [soilSlider, setSoilSlider] = useState(0);
  const [fertilizerSlider, setFertilizerSlider] = useState(0);
  const maxSun = 100;
  const maxTemp = 50;
  const maxWater = 500;
  const maxSoil = 10;
  const maxFertilizer = 500;
  const listPlant = props.route.params.listPlant
  const navigate = useNavigation()
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSunSlider(+listPlant.sunlight / maxSun);
      setWaterSlider(+listPlant.water / maxWater);
      setTempSlider(+listPlant.roomTemp / maxTemp);
      setSoilSlider(+listPlant.soil / maxSoil);
      setFertilizerSlider(+listPlant.fertilizer / maxFertilizer);
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
        <StatusBar barStyle="light-content" />
        <ImageBackground 
          source={images.bannerBg}
          style={{
            flex:0.4
              }}>
                  <View style={{
                      flex:0.4,
                      flexDirection:'row',
                      justifyContent:"space-between",
                      paddingTop:50,
                      paddingHorizontal:15
                      }}>
                      <TouchableOpacity
                        onPress={() => navigate.goBack()}
                      >
                        <Image style={{width:20,height:20}} source={icons.back}/>
                      </TouchableOpacity>
                      <Image style={{width:20,height:20}} source={icons.focus}/>
                  </View>
                  <View style={{paddingHorizontal:15}}>
                    <Text style={styles.txtNamePlant}>{listPlant.name}</Text>
                  </View>
        </ImageBackground>
        <View style={{
          backgroundColor:COLORS.lightBg,
          flex:0.6,
          borderRadius:30,
          marginTop:-50,
          paddingHorizontal:15,
          }}>
            <View style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
              paddingVertical:20
              }}>
              <Text style={styles.txtTitle}>Requirments</Text>
              <View style={{width:35,height:2,backgroundColor:COLORS.secondary}}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <StatusPlant
                icons = {icons.sun}
                sliderPoint={sunSlider}
              />
              <StatusPlant
                icons = {icons.drop}
                sliderPoint={waterSlider}
              />
              <StatusPlant
                icons = {icons.temperature}
                sliderPoint={tempSlider}
              />
              <StatusPlant
                icons = {icons.garden}
                sliderPoint={soilSlider}
              />
              <StatusPlant
                icons = {icons.seed}
                sliderPoint={fertilizerSlider}
              />
            </View>
            <View style={{paddingVertical:15}}>
              <StatusPlantRow
                name = {'Sun light'}
                icon = {icons.sun}
                status = {listPlant.sunlight + "°C"}
              />
              <StatusPlantRow
                name = {'Water'}
                icon = {icons.drop}
                status = {listPlant.water+" ML Daily"}
              />
              <StatusPlantRow
                name = {'Room Temp'}
                icon = {icons.temperature}
                status = {listPlant.roomTemp + "°C"}
              />
              <StatusPlantRow
                name = {'Soil'}
                icon = {icons.sun}
                status = {listPlant.soil+ " Kg"}
              />
              <StatusPlantRow
                name = {'Sun light'}
                icon = {icons.sun}
                status = {listPlant.fertilizer+" Mg"}
              />
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtNamePlant:{
    fontSize:32,
    fontWeight:'600',
    color:COLORS.white,
    width:180,
    letterSpacing:3
  },
  txtTitle:{
    fontSize:22,
    fontWeight:'600',
    color:COLORS.secondary
  },
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

export default PlantDetail;
