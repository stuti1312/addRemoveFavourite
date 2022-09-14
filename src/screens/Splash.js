import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = ({ navigation }) => {
  const [apiData, setApiData] = useState([])
  useEffect(() => {
    setTimeout(() => { navigation.replace("drawer") }, 1000)
    fetchAPI();
  }, [])

  const fetchAPI = () => {
    axios.get("https://api.publicapis.org/entries")
      .then(res => {
        const response = res.data;
        setApiData(response)
        AsyncStorage.setItem("APIData", JSON.stringify(res.data))
        console.log("API RESPONSE", response);
      }
      )
      .catch(err => console.log("error :", err))
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>ASSESSMENT</Text>
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  mainContainer: { backgroundColor: "gray", flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" },
  subContainer: { borderWidth: 10, borderColor: "#ffffff", padding: 20 },
  text: { color: "#ffffff", fontSize: 50, fontWeight: "bold" }
})
