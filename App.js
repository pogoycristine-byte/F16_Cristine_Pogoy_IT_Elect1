import ColorChangerApp from './ColorChangerApp';
import CounterApp from './CounterApp'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
   return (
     <View style={styles.container}>
       <ColorChangerApp/>
       <CounterApp/>
     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
