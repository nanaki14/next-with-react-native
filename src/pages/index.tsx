import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>next-with-react-native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
})

export default Home
