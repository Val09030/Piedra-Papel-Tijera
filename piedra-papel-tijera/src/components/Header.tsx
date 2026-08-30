import { StyleSheet, Text, View } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>PPT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 54,
    backgroundColor: '#5f067f',
    justifyContent: 'center',
    paddingHorizontal: 16,
    elevation: 4,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});