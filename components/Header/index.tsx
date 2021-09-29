import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Right,
  Left,
  Date,
  Welcome,
  IconContainer,
  NotifyCount,
  Number,
} from './styles';

const Header: React.FC = () => {
  const {colors} = useTheme();

  const [date] = useState('Tuesday 28th September');

  return (
    <Container background={colors.background}>
      <Left>
        <Date color={colors.text}>{date}</Date>
        <Welcome color={colors.text}>Welcome</Welcome>
      </Left>
      <Right>
        <IconContainer background={colors.text}>
          <Icon name="bell" color={colors.background} size={16} />
          <NotifyCount background={colors.primary} color={colors.background}>
            <Number>3</Number>
          </NotifyCount>
        </IconContainer>
        <IconContainer background={colors.text}>
          <Icon name="user" color={colors.background} size={16} />
        </IconContainer>
      </Right>
    </Container>
  );
};

export default Header;
