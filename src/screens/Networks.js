import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Networks = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.subContainer}>Networks</Text>
    </View>
  )
}

export default Networks

const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: "center", alignItems: "center", },
  subContainer: { color: "black", fontSize: 20 }
})