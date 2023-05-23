import {Animated, Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useRef} from "react";
import {Avatar, Box, Chip} from "@react-native-material/core";
import * as url from "url";
import { Foundation } from '@expo/vector-icons';
import {SubTitleTitle} from "../ui/SubTitleTitle";
import {opacity} from "react-native-reanimated/lib/types/lib";

export interface IAlbum {
    title: string;
    artist: string;
    artwork: string;
}

export const AlbumImage = (
    props: {
        artwork: string,
        title: string,
        size: number,
    }
) => {
    return (
        <Box
            style={{
                position: "relative",
            }}
        >
            <Avatar image={{
                uri: props.artwork,
            }}
                    imageStyle={{
                        borderRadius: 5,
                    }}
                    size={props.size}
            />

        </Box>
    );
};


export const AlbumTitle = (
    props: {
        title: string,
        artwork: string,

    }
) => {
    return (
        <Box style={{
            marginTop: 20,
            flexDirection: "column",
            gap: 10,
            position:"relative",
            marginRight: 15,
            height: 130
        }} >
            <AlbumImage title={props.title} artwork={props.artwork} size={95}/>
            <Text
                style={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: 20,
                }}
            >
                {props.title}
            </Text>
            <Box
                style={{
                    width: 35,
                    height: 35,
                    borderRadius: 50,
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "25%",
                    left:  "30%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Foundation name="play" size={24} color="black" style={{
                    marginLeft: 5,
                }} />
            </Box>
        </Box>
    );
};

export const albums: IAlbum[] = [
    {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },{
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },{
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },{
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    }, {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  {
        title: "좋은날",
        artist: "아이유",
        artwork: "https://image.bugsm.co.kr/album/images/original/2499/249930.jpg?version=undefined",
    },  ];
export const ReplaySec = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const opacityValue = useRef(new Animated.Value(1)).current;

    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(opacityValue, {
                toValue: 0.80,
                duration: 50,
                useNativeDriver: true,
            }),
            Animated.timing(opacityValue, {
                toValue: 1,
                duration: 50,
                useNativeDriver: true,
            }),
        ]).start(() => {
        });
    };
    const width = Dimensions.get('window').width - 40;
    return (
        <Box style={{
            padding:20,
            height: 430,
        }}>
            <Box
                style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    width :  width,
                    gap: 10,
                }}
            >
         <Avatar image={{uri: "https://image.bugsm.co.kr/artist/images/1000/800109/80010974.jpg?version=20210913120000.0"}}
                 size={50}/>
            <SubTitleTitle
                subtitle={"이름"}
                title={"다시 듣기"}/>
            <Chip color={"#424242"}
                  style={{
                      marginTop: "auto",
                        marginBottom: 5,
                      marginLeft: "auto",

                  }}
                  contentContainerStyle={{
                      paddingHorizontal: 9,
                      height: 27,
                  }}
                  pressEffect={"ripple"}
                  variant={"outlined"} label={"더보기"}
                  labelStyle={{
                      fontSize: 12,
                      color: "white",
                      fontWeight: "bold",

                  }}

            />
            </Box>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                alwaysBounceVertical={false}>
                <FlatList
                    data={albums}
                          style={{
                              height: 350,

                          }}
                          numColumns={10}
                          alwaysBounceVertical={false}
                            showsHorizontalScrollIndicator={false}
                            columnWrapperStyle={styles.columnWrapper}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={
                    ({item}) => (
                        <AlbumTitle title={item.title} artwork={item.artwork}/>
                    )
                }/>
            </ScrollView>

        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gridItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        height: 100,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
});

