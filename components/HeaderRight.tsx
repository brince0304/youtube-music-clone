import {View} from "react-native";
import {Avatar, Button, IconButton, Pressable} from "@react-native-material/core";
import {MaterialIcons} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";

export default function HeaderRight() {
    return (
        <View
            style={
                {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginRight: 10,
                }
            }
        >
            <IconButton

                icon={<MaterialIcons name="cast" size={24} color="white"/>}/>
            <IconButton icon={<Ionicons name="search-outline" size={24} color="white"/>}/>
            <IconButton icon={   <Avatar
                size={24}
                image={{
                    uri: "https://avatars.githubusercontent.com/u/55923773?v=4",
                }}
            />}/>
        </View>
    );
}
