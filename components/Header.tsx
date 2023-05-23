import React from "react";
import {Box} from "@react-native-material/core";
import {Animated, Dimensions, StyleSheet} from "react-native";
import {Logo} from "../ui/Logo";
import HeaderRight from "./HeaderRight";
import AnimatedView from "react-native-reanimated/lib/types/lib/reanimated2/component/View";

interface HeaderProps {
	headerOpacity: Animated.AnimatedInterpolation<number | string>
}

export const Header = ({headerOpacity}: HeaderProps) => {
	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			paddingVertical: 10,
			paddingBottom: 20,
		}
	})

	return (
		<Animated.View style={[styles.container,{
			opacity: headerOpacity,
		}]}>
		   <Logo/>
			<HeaderRight/>
		</Animated.View>
	)
}
