import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const Card = ({ data, OnFavourite, OnUnFavourite, FavouriteList }) => {
    const { item, index } = data;

    const exist = (index) => {
        if (FavouriteList.filter(i => i.index === index).length > 0) {
            return true;
        }
        return false;
    }

    return (
        <View style={styles.card}>
            <View style={{
                marginBottom: 5
            }}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardCategory}>{item.Category}</Text>
                    <TouchableOpacity
                        onPress={exist(index) ? OnUnFavourite : OnFavourite} >
                        <Icon
                            name={exist(index) ? "favorite" : "favorite-border"}
                            size={30}
                            color={exist(index) ? "red" : "black"} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.cardAPI}>{item.API}</Text>
                <Text style={styles.cardDescription}>{item.Description}</Text>
                <Text style={styles.cardLink}>{item.Link}</Text>
                <Text style={{ color: 'blue' }}
                    onPress={() => Linking.openURL(item.link)}>
                    About me
                </Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: { margin: 20, padding: 15, shadowColor: "lightgray", backgroundColor: "#ffffff", borderRadius: 10, elevation: 6, marginBottom: 10 },
    cardHeader: { fontSize: 15, justifyContent: "space-between", flexDirection: "row", alignItems: "center" },
    cardCategory: { fontSize: 30, color: "#000000", fontWeight: "bold" },
    cardAPI: { fontSize: 17, color: "gray", fontWeight: "600" },
    cardDescription: { fontSize: 17, color: "gray", fontWeight: "600" },
    cardLink: { fontSize: 15, color: "blue", fontWeight: "bold" },
})


