import React from 'react';
import axios from 'axios';
import { Alert, Text, View, ActivityIndicator, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';

// передаём  параметр navigation
export const HomeScreen = ({ navigation }) => {

  // состояние для загрузки, изначально значение true
  const [isLoading, setIsLoading] = React.useState(true);

  // [] - ставим в скобках пустой массив по умолчанию, чтобы не было ошибки
  const [items, setItems] = React.useState([]);

  const fetchPosts = () => {
    setIsLoading(true);
    // при помощи axios делаем запрос на бэкенд получаем данные из проекта на mockapi.io 
    axios
      .get('https://63ad6df33e4651691659dd38.mockapi.io/article')
      // вынимаем из пришедшего axios data
      .then(({ data }) => {
        // помещаем data в setItems
        setItems(data);
      })
      //  отлавливаем ошибку
      .catch((err) => {
        console.log(err);
        // alert('Ошибка', 'Не удалось получить статьи')
        Alert.alert('Ошибка2')
      }).finally(() => {
        setIsLoading(false);
      });
  };

  // выполняем функцию fetchPosts в useEffect
  React.useEffect(fetchPosts, []);

  // создаём индикатор загрузки
  // условие если идёт загрузка, то выводим
  if (isLoading) {
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
    )
  }
  return (
    <View>
      {/* делаем скролинг     */}
      <FlatList
        // делаем обновление страницы при свайпе вниз , как только мы отпускаем свайп запускается функция fetchPosts
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
          // TouchableOpacity - реакция на клик 
          <TouchableOpacity
            // делаем переход с помощью navigation.navigate на FullPost и вторым параметром передаём в FullPost из item id и title
            onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.title })}>
            <Post
              title={item.title}
              createdAt={item.createdAt}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
// scrcpy