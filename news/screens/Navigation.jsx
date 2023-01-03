// делаем Router - переход с главной страницы к отдельной статье
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FullPostScreen } from './FullPost';
import { HomeScreen } from './Home';


const Stack = createNativeStackNavigator();

// Stack.Navigator это аналог Routes в React
export const Navigation = () => {
  return (
    // NavigationContainer нужен для корректного отображения статьи
    <NavigationContainer>
      <Stack.Navigator>
      {/* "Home" - название главного экрана, должно быть уникальным */}
      {/* рендерим HomeScreen и получаем title: */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Новости' }} />
        {/* "FullPost" - название экрана в отдельной статье здесь рендерим FullPostScreen */}
        <Stack.Screen name="FullPost" component={FullPostScreen} options={{ title: 'Статья' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

