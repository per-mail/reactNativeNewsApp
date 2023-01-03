// открываем статью 

import React from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Loading } from '../components/Loading';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;
// передаём в функцию route, нужно для получения id и title из Home.jsx и navigation - сборник методов навигации из которого мы берём setOptions
export const FullPostScreen = ({ route, navigation }) => {
  // загрузка
  const [isLoading, setIsLoading] = React.useState(true);
  // хранение статьи 
  const [data, setData] = React.useState();
  // получаем из route.params из Home.jsx id и title 
  const { id, title } = route.params;

  React.useEffect(() => {
  // передаём в setOptions title
    navigation.setOptions({
      title,
    });
    axios
  // получаем нужную статью по id)
      .get('https://63ad6df33e4651691659dd38.mockapi.io/article/' + id)
  //  помещаем статью в data
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статью');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* выводим загрузку */}
        <Loading />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      {/* выводим картинку статьи из data */}
      <PostImage source={{ uri: data.imageUrl }} />
      {/* выводим текст статьи из data */}
      <PostText>{data.text}</PostText>
    </View>
  );
};
