
import {Avatar, Box, Text} from "@react-native-material/core";
import React from "react";
import {Image} from "react-native";

export const Logo = () => {

	return (
		<Image source={require("../logo.png")} style={{
			marginLeft: 20,
		}}
		/>
	)
}