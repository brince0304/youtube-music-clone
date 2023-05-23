import {Box, Icon, Pressable} from "@react-native-material/core";
import {SubTitleTitle} from "../ui/SubTitleTitle";
import {Animated, Dimensions, Image} from "react-native";
import { Feather } from '@expo/vector-icons';
import {useRef} from "react";

export const MyMusicStation = () => {
    const scaleValue = useRef(new Animated.Value(1)).current;

    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 0.98,
                duration: 50,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start(() => {
        });
    };
    return (
        <Box
            style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",

                gap: 20,
                padding:20,
                height: 350,
            }}
        >
            <SubTitleTitle subtitle={"뮤직 스테이션 만들기"} title={"나만의 뮤직 스테이션"}/>
            <Pressable onPress={startAnimation}
                style={{
                    position: "relative",
                }}

            >
                <Animated.View
                    style={{
                        transform: [{scale: scaleValue}],
                    }}
                >
                <Image source={require("../assets/images/youtube_music_station.jpg")}
                          style={{
                                width: Dimensions.get('window').width - 40,
                                height: 200,
                          }}
                />
                <Box style={{
                    position: "absolute",
                    top: "40%",
                    left: "43%",
                    width: 50,
                    height: 50,
                    backgroundColor: "#fff",
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Feather name="plus" size={24} color="black" />
                </Box>
                </Animated.View>
            </Pressable>
        </Box>
    );
};