import {
    Dimensions,
    FlatList,
    StyleSheet,
    TouchableHighlight,
    TouchableHighlightBase,
    TouchableOpacity
} from "react-native";
import {Avatar, Box, Chip, IconButton, Text} from "@react-native-material/core";
import {SubTitleTitle} from "../ui/SubTitleTitle";
import {albums, IAlbum} from "./ReplaySec";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const AlbumListWithArtistName = (props: { data: IAlbum[] }) => {
    return (
        <FlatList data={props.data}
                  alwaysBounceVertical={false}
                    showsHorizontalScrollIndicator={false}
                  numColumns={5}
                  decelerationRate={"fast"}
                  snapToInterval={Dimensions.get('window').width - 44}
                  pagingEnabled={true}
                  style={{
                      marginTop: 20,
                  }}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={
                      ({item}) => (
                          <TouchableOpacity
                              activeOpacity={0.6}
                          >
                          <Box style={styles.boxWrapper}>
                              <Avatar
                                  image={{
                                      uri: item.artwork,
                                  }}
                                  imageStyle={{
                                      borderRadius: 5,
                                  }}
                                  size={50}
                              />
                              <Box
                                  style={styles.columnWrapper}>
                                  <Box style={styles.titleArtist}>
                                  <Text
                                      style={styles.title}
                                  >
                                      {item.title}
                                  </Text>
                                    <Text
                                        style={styles.artistName}
                                    >
                                        {item.artist}
                                    </Text>
                                  </Box>
                                    <IconButton
                                        style={{
                                            marginLeft: "auto",
                                        }}
                                        contentContainerStyle={{
                                            paddingHorizontal: 0,
                                        }}
                                        icon={<MaterialCommunityIcons name="dots-vertical" size={24} color="white" />}
                                        color={"#999"}
                                    />

                              </Box>
                          </Box>
                          </TouchableOpacity>

                      )
                  }/>
    );
};

const styles = StyleSheet.create({
    artistName: {
        fontSize: 12,
        fontWeight: "500",
        color: "#999",
    },
    title:{
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
    },
    titleArtist: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 5,
    },
    columnWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: Dimensions.get('window').width - 100,
        gap: 5,
    },
    boxWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        width: Dimensions.get('window').width - 44,
        marginBottom: 15,
    }

} as const);


export const FastRecommendationSection = () => {
    return (
        <Box
            style={{
                padding:20,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                height: 380,
            }}
        >
            <SubTitleTitle subtitle={"이 노래로 뮤직 스테이션 시작하기"} title={"빠른 선곡"}
            />
            <AlbumListWithArtistName data={albums}/>
        </Box>
    );
};