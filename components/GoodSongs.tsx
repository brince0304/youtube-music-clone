import React from "react";
import {FlatList, ScrollView, TouchableOpacity, View, Text} from "react-native";
import {SubTitleTitle} from "../ui/SubTitleTitle";
import {AlbumImage, albums, AlbumTitle} from "./ReplaySec";
import {Avatar} from "@react-native-material/core";

export const GoodSongs = () => {
    return (
        <View style={{
            paddingHorizontal: 20,
            height: 400,
        }}>
            <SubTitleTitle subtitle={""} title={"잊고있던 좋은 음악"}/>
            <ScrollView
                style={{
                    marginTop: 20,
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                alwaysBounceVertical={false}
            >
                {albums.map((album) => (
                    <View style={{
                        marginRight: 15,
                        gap: 10,
                    }}>
                        <TouchableOpacity>
                            <Avatar image={{
                                uri: album.artwork,
                            }} imageStyle={{
                                borderRadius: 5,
                            }} size={175}/>
                        </TouchableOpacity>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 24,
                                fontWeight: "bold",
                            }}
                        >{album.title}</Text>
						<Text
							style={{
								color: "#BDBDBD",
								fontSize: 16,
							}}
						>노래ㆍ{album.artist}</Text>
                    </View>
                ))}

            </ScrollView>
        </View>
    );
};