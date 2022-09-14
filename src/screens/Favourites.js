import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Favourites = ({ navigation }) => {
  const [favourite, setFavourite] = useState([])

  useEffect(() => {
    const unSubscribe = navigation.addListener("focus", () => { getFavouriteData() })
    return unSubscribe
  }, [navigation])

  const getFavouriteData = () => {
    AsyncStorage.getItem("FavouriteItem")
      .then(res => {
        if (JSON.parse(res) !== null) {
          setFavourite(JSON.parse(res))
          console.log("RES", res);
        }
      })
      .catch(err => console.log("E R R O R", err))
  }

  const renderItem = ({ item, index }) => {
    console.log("I T E M", item);
    return (
      <View style={styles.card}>
        <View style={{
          marginBottom: 5
        }}>
          <Text style={styles.itemCategory}>{item.item.Category}</Text>
          <Text style={styles.itemApi}>{item.item.API}</Text>
          <Text style={styles.itemDescription}>{item.item.Description}</Text>
          <TouchableOpacity onPress={() => { console.log("Navigate to web screen of link"); }}>
            <Text style={styles.itemLink}>{item.item.Link}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      {favourite.length > 0 ?
        <FlatList
          data={favourite}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        /> :
        <View style={styles.noFavouriteItem}>
          <Text style={styles.noFavouriteItemText}>No items yet!!</Text>
        </View>
      }
    </View>
  )
}

export default Favourites

const styles = StyleSheet.create({
  card: { margin: 20, padding: 15, shadowColor: "lightgray", backgroundColor: "#ffffff", borderRadius: 10, elevation: 6, marginBottom: 10 },
  itemCategory: { fontSize: 30, color: "#000000", fontWeight: "bold" },
  itemApi: { fontSize: 17, color: "gray", fontWeight: "600" },
  itemDescription: { fontSize: 17, color: "gray", fontWeight: "600" },
  itemLink: { fontSize: 15, color: "blue", fontWeight: "bold" },
  noFavouriteItem: { flex: 1, justifyContent: "center", alignItems: "center", },
  noFavouriteItemText: { color: "black", fontSize: 20 },
})