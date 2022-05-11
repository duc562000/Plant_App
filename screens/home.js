import React,{useState,useEffect} from "react";
import { View, Text,Image,StyleSheet,FlatList,ImageBackground,TouchableOpacity } from "react-native";
import { COLORS } from "../constants/theme";
import images from "../constants/images"
import icons from "../constants/icons"
import { dataFriends, plantData } from "../apis/apis";
import { dataTodayShare } from "../apis/apis";
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from "@react-navigation/native";



const Home = (props) => {
    function renderFriendsComponent() {
        if (friend.length == 0) {
            return (
                <View></View>
            )
        } else if (friend.length <= 3) {
            return (
                friend.map((item, index) => (
                    <View
                        key={`friend-${index}`}
                        style={index == 0 ? { flexDirection: 'row' } : { flexDirection: 'row', marginLeft: -20 }}
                    >
                        <Image
                            source={item.img}
                            resizeMode="cover"
                            style={{
                                width:56,
                                height:56,
                                borderRadius:56,
                                borderWidth:3,
                                borderColor:COLORS.primary,
                            }}
                        />
                    </View>
                ))
            )
        } else {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {friend.map((item, index) => {
                        if (index <= 2) {
                            return (
                                <View
                                    key={`friend-${index}`}
                                    style={index == 0 ? {} : { marginLeft: -20 }}
                                >
                                    <Image
                                        source={item.img}
                                        resizeMode="cover"
                                        style={{
                                            width:56,
                                            height:56,
                                            borderRadius:56,
                                            borderWidth:3,
                                            borderColor:COLORS.primary,
                                        }}
                                    />
                                </View>
                            )
                        }
                    })}

                    <Text style={[styles.txtGray,{paddingHorizontal:10}]}>+{friend.length - 3} More</Text>
                </View>
            )
        }
    }
    const navigate = useNavigation()
    const [dataPlant,setDataPlant] = useState(plantData)
    const [clickHeart,setClickHeart] = useState([])
    const [customList,setCustomList] = useState([])
    const [friend,setFriend] = useState(dataFriends)
    useEffect(() => {
        setDataPlant(plantData)
    },[plantData]);
    useEffect(() => {
        if (dataPlant) {
            let newDataPlant = dataPlant;
            newDataPlant.map(item => {
                item.favourite = false;
            });
            setCustomList(newDataPlant)
        }
    },[dataPlant])

    const onPressHeart = id => {
        let customNewList = [...customList];
        for (const item in customNewList) {
            if (customNewList[item].id === id ){
                if(customNewList[item].favourite === false) {
                    customNewList[item].favourite = true;
                    let itemClick = customNewList[item];
                    setClickHeart([...clickHeart,itemClick]);
                } else {
                    customNewList[item].favourite = false;
                    let clickNewList = clickHeart.filter(item => item.id)
                    setClickHeart(clickNewList);
                }
            }
        }
        setCustomList(customNewList);
    };
    // console.log(dataTodayShare.simplePlant)
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
        <View style={{
            flex:0.35,
            backgroundColor:COLORS.primary,
            borderRadius:25,
            }}>
                <View style={{
                    flex:0.4,
                    flexDirection:'row',
                    justifyContent:"space-between",
                    paddingTop:50,
                    paddingHorizontal:15
                    }}>
                    <Text style={styles.txtnewPlant}>New Plants</Text>
                    <Image style={{width:20,height:20}} source={icons.focus}/>
                </View>
                <View style={{flex:1}}>
                    <FlatList
                        data={customList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor= {item => item.id}
                        renderItem = {({item,index}) => (
                            <View style={{
                                flex:1,
                                paddingHorizontal:5,
                                paddingLeft:10
                                }}>
                                <ImageBackground
                                    borderRadius={20}
                                    source={item.img}
                                    style={{width:100,height:130}}
                                >
                                    <TouchableOpacity
                                        onPress={() => onPressHeart(item.id)}
                                    >
                                        <Image 
                                        style={styles.icom} 
                                        source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
                                        />
                                    </TouchableOpacity>
                                    <View style={styles.name}>
                                        <Text style={styles.txtName}>{item.name}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        )}
                    />
                </View>
        </View>
        <View style={{flex:0.45}}>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingHorizontal:15,
                alignItems:'center',
                paddingVertical:20,
                }}>
                <Text style={styles.txtTitle}>Today's Share</Text>
                <TouchableOpacity>
                    <Text style={styles.txtGray}>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',paddingHorizontal:15}}>
                <FlatList
                    scrollEnabled={false}
                    data={dataTodayShare.listPlant}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor= {item => item.id}
                    renderItem = {({item,index}) => (
                            <TouchableOpacity
                                onPress={() => navigate.navigate('PlantDetail',{listPlant : item})}
                            >
                                <Image source={item.img} style={styles.imgList}/>
                            </TouchableOpacity>
                    )}
                />
                <TouchableOpacity
                    onPress={() => navigate.navigate('SimplePlantDetail',{simplePlant: dataTodayShare.simplePlant})}
                >
                    <Image 
                        source={dataTodayShare.simplePlant.img}
                        style={styles.imgSimplePlant}
                    />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{
            flex:0.2,
            backgroundColor:COLORS.lightBg,
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            paddingHorizontal:15
            }}>
                <View style={{paddingVertical:10}}>
                    <Text style={styles.txtTitle}>Added Friends</Text>
                    <Text style={styles.txtGray}>{friend.length} total</Text>
                </View>
                <View style={[styles.row,{justifyContent:'space-between'}]}>
                    {renderFriendsComponent()}
                    <View style={styles.row}>
                        <Text style={styles.txtAdd}>Add new</Text>
                        <View style={{
                            width:60,
                            height:60,
                            borderRadius:15,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:COLORS.gray,
                        }}>
                            <Image style={styles.imgAdd} source={icons.plus}/>
                        </View>
                    </View>
                </View>
                
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    txtnewPlant:{
        fontSize:22,
        fontWeight:'600',
        color:COLORS.white
    },
    icom:{
        width:20,
        height:20,
        marginHorizontal:10,
        marginVertical:10,
    },
    name:{
        width:70,
        height:30,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        backgroundColor:COLORS.primary,
        position:'absolute',
        right:0,
        bottom:15,
        alignItems:'center',
        justifyContent:'center'
    },
    txtName:{
        fontSize:15,
        fontWeight:'500',
        color:COLORS.white
    },
    txtTitle:{
        fontSize:22,
        fontWeight:'600',
        color:COLORS.secondary
    },
    txtGray:{
        fontSize:15,
        color:COLORS.gray,
        fontWeight:'500'
    },
    imgList:{
        width:160,
        height:120,
        marginVertical:6,
        borderRadius:20
    },
    imgSimplePlant:{
        width:160,
        height:250,
        borderRadius:20,
        marginVertical:6,
    },
    imgFr:{
        width:56,
        height:56,
        borderRadius:56,
        borderWidth:3,
        borderColor:COLORS.primary,
        marginHorizontal:-10
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    imgAdd:{
        width:25,
        height:25,
    },
    txtAdd:{
        fontSize:16,
        fontWeight:'600',
        color:COLORS.secondary,
        paddingHorizontal:10
    }
})

export default Home;
