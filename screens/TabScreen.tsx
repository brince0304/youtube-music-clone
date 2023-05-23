import {Box, Text} from "@react-native-material/core";
import {Animated, Dimensions, SafeAreaView, ScrollView, StyleSheet, View} from "react-native";

import {FlowButtons} from "../ui/FlowButtons";
import React, {useRef} from "react";
import {SubTitleTitle} from "../ui/SubTitleTitle";
import {ReplaySec} from "../components/ReplaySec";
import {FastRecommendationSection} from "../components/FastRecommendationSection";
import {MyMusicStation} from "../components/MyMusicStation";
import {Header} from "../components/Header";
import {StatusBar} from "expo-status-bar";
import {GoodSongs} from "../components/GoodSongs";



export const Index = () =>{
	const width = Dimensions.get("window").width;
	const height = Dimensions.get("window").height;
	const styles = StyleSheet.create({
		container: {
			flexDirection: "column",
			backgroundColor: "#121212",
			alignItems: "flex-start",
			justifyContent: "flex-start",
			padding : 20,
			width : width,
			display : "flex",
		},
	})

	const scrollY = useRef(new Animated.Value(0)).current;
	const handleScroll = (event:any) => {
		const scrollPosition = event.nativeEvent.contentOffset.y;
		scrollY.setValue(scrollPosition);
	};

	const flowButtonsOpacity = scrollY.interpolate({
		inputRange: [70, 220],
		outputRange: [0, 1],
		extrapolate: 'clamp',
	});


	const headerOpacity = scrollY.interpolate({
		inputRange: [10, 50],
		outputRange: [1,0],
		extrapolate: 'clamp',
	} 			);

	return(
		<SafeAreaView
			style={{
				backgroundColor: "#121212",
				width : width,
				height : height,
			}}
		>
		<ScrollView
			scrollEventThrottle={16}
			onScroll={handleScroll}
			stickyHeaderIndices={[0,1]}
			style={{
				backgroundColor: "#121212",
				paddingVertical: 0,
				width : width,
			}}
			alwaysBounceVertical={false}
			horizontal={false}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false} >
			<Header headerOpacity = {headerOpacity}/>
			<FlowButtons flowButtonsOpacity={flowButtonsOpacity}/>
			<ReplaySec/>
		    <FastRecommendationSection/>
				<MyMusicStation/>
			<GoodSongs/>
			</ScrollView>
		</SafeAreaView>

	)
}
