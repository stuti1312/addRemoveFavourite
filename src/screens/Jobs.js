import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Jobs = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.subContainer}>Jobs</Text>
    </View>
  )
}

export default Jobs

const styles = StyleSheet.create({
  mainContainer: { flex: 1, justifyContent: "center", alignItems: "center", },
  subContainer: { color: "black", fontSize: 20 }
})