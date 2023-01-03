// главная страница
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

// делаем функцию для обрезания длинных заголовков
// если длина заголовка больше чем 50 символов обрезаем её и добавляем '...'
const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }
  // если меньше 50 то мы его ренденрим
  return str;
};

// получаем данные из App по props  (title, createdAt,imageUrl)
export const Post = ({ title, imageUrl, createdAt }) => {
  return (
    <PostView>
      <PostImage source={{ uri: imageUrl }} />
      <PostDetails>
        {/* вывод заголовка с функцией по обрезке */}
        {/* <PostTitle>{truncateTitle(title)}</PostTitle> */}
        <PostTitle>{title}</PostTitle>
        {/* <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate> */}
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
};
