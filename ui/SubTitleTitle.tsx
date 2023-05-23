import {ScrollView, StyleSheet, View} from "react-native";
import {Avatar, Box, Chip, Text} from "@react-native-material/core";
import {Dimensions} from "react-native";

export const SubTitleTitle = (
    props: {
        subtitle: string;
        title: string;
    }
) => {
    const {width, height} = Dimensions.get("window");
    const styles = StyleSheet.create(
        {
            topContainer: {
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
            },
            topContainerText: {
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
            },
            topContainerTitle: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",

            },
            topContainerTitleText: {
                color: "white",
                fontSize: 30,
                fontWeight: "bold",
            },
        });
    return (
        <Box style={styles.topContainer}>

            <Box style={styles.topContainerText}>
                <Text style={{color: "#BDBDBD"}}>{props.subtitle}</Text>
                <Box style={styles.topContainerTitle}>
                    <Text style={styles.topContainerTitleText}>
                        {props.title}
                    </Text>
                </Box>
            </Box>
        </Box>

    );
};

