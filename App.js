import { View, Button } from 'react-native';
import * as Updates from 'expo-updates';

function App() {
  async function onFetchUpdateAsync() {
    
  }

  return (
    <View>
      <Button title="aaaaaaaa" onPress={onFetchUpdateAsync} />
    </View>
  );
}
