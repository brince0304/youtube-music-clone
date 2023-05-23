import {Animated, Dimensions, Easing, ScrollView, StyleSheet, View} from "react-native";
import {Box, Chip} from "@react-native-material/core";
import {useEffect, useRef, useState} from "react";
import AnimatedScrollView from "react-native-reanimated/lib/types/lib/reanimated2/component/ScrollView";
import AnimatedInterpolation = Animated.AnimatedInterpolation;


interface IButtons {
    label: string;
    onClick: () => void;
}

interface FlowButtonsProps {
    flowButtonsOpacity: Animated.AnimatedInterpolation<number | string>
}

export const FlowButtons = (props:FlowButtonsProps) => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const [buttons, setButtons] = useState<IButtons[]>([
        {
            label: "운동",
            onClick: () => {
            }
        }, {
            label: "휴식",
            onClick: () => {
            }
        }, {
            label: "출퇴근",
            onClick: () => {
            }
        },
        {
            label: "집중",
            onClick: () => {
            }
        }, {
            label: "에너지 충전",
            onClick: () => {
            }
        }
    ]);


    return (
        <Box  style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: 70,
            paddingTop: 10,
            zIndex: 110,
            backgroundColor: "transparent",
            paddingHorizontal: 20,
        }}>
        <ScrollView
            showsHorizontalScrollIndicator={false}
            alwaysBounceVertical={false}
            horizontal={true}>
                {buttons.map((button, index) => (
                    <Chip
                        pressEffect="ripple"
                        labelStyle={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "500",
                        }}
                        key={index}
                        style={styles.chip}
                        onPress={button.onClick}
                        label={button.label}
                    />
                ))}
        </ScrollView>
            <Animated.View style={{
                height:60,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: "#121212",
                zIndex: -1,
                opacity: props.flowButtonsOpacity,
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255,255,255,0.1)",
                borderTopColor: "rgba(255,255,255,0.1)",
                borderTopWidth: 1,
            }}>
            </Animated.View>
        </Box>
    );
};

const styles = StyleSheet.create({
        chip: {
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: 3,
            borderRadius: 10,
            borderColor: "rgba(255,255,255,0.1)",
            borderWidth: 1,
            marginRight: 10,
        }
    }
);