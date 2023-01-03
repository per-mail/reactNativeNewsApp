 // создаём индикатор загрузки при загрузки отдельных статей
import { Text, View, ActivityIndicator } from 'react-native';

 
  // условие если идёт загрузка, то выводим
  export const Loading = () => {
    return (    
      <View
        // делаем картинку по центру экрана
        style={{
          // flex: 1 чтобы было по всей ширине
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Загрузка...</Text>
      </View>
    );
  };