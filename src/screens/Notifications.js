import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.subContainer}>Notifications</Text>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: "center", alignItems: "center", },
  subContainer: { color: "black", fontSize: 20 }
})