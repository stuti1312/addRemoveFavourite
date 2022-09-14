import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Card from './Card';

const Dashboard = () => {
  const [apiData, setApiData] = useState([])
  const [favourite, setFavourite] = useState([])

  useEffect(() => {
    getLocalData();
    getFavouriteData();
  }, [])

  useEffect(() => {
    setFavouriteData()
  }, [favourite])

  const getLocalData = () => {
    AsyncStorage.getItem("APIData")
      .then(res => {
        if (JSON.parse(res)) {
          setApiData(JSON.parse(res).entries);
        }
      })
      .catch(err => console.log("ERROR", err))
  }

  const setFavouriteData = () => {
    console.log("in set", favourite);
    AsyncStorage.setItem("FavouriteItem", JSON.stringify(favourite))
  }

  const getFavouriteData = () => {
    AsyncStorage.getItem("FavouriteItem")
      .then(res => {
        if (JSON.parse(res)) {
          setFavourite(JSON.parse(res));
        }
      })
      .catch(err => console.log("E R R O R", err))
  }

  const AddToFavorites = (item) => {
    console.log("ADD TO FAVOURITE", item)
    setFavourite([...favourite, item])
    setFavouriteData()
  }

  const RemoveFromFavorites = (item) => {
    let idx = favourite.filter(i => i.index !== item.index)
    setFavourite(idx);
    setFavouriteData()
  }

  const renderItem = ({ item, index }) => {
    return (
      <Card
        data={{ item, index }}
        OnUnFavourite={() => RemoveFromFavorites({ item, index })}
        OnFavourite={() => AddToFavorites({ item, index })}
        FavouriteList={favourite}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={apiData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  )
}

export default Dashboard