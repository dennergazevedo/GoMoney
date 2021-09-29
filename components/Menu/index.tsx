import React from 'react';
import {Container, Button, ButtonLabel, ButtonCenter} from './styles';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu: React.FC = () => {
  const {colors} = useTheme();

  return (
    <Container background={colors.notification}>
      <Button>
        <Icon name="credit-card" color={colors.background} size={16} />
        <ButtonLabel color={colors.background}>Cards</ButtonLabel>
      </Button>
      <Button>
        <Icon name="line-chart" color={colors.background} size={16} />
        <ButtonLabel color={colors.background}>Activity</ButtonLabel>
      </Button>
      <ButtonCenter background={colors.background}>
        <Icon name="line-chart" color={colors.primary} size={16} />
        <ButtonLabel color={colors.primary}>Home</ButtonLabel>
      </ButtonCenter>
      <Button>
        <Icon name="bookmark-o" color={colors.background} size={16} />
        <ButtonLabel color={colors.background}>Payments</ButtonLabel>
      </Button>
      <Button>
        <Icon name="ellipsis-h" color={colors.background} size={16} />
        <ButtonLabel color={colors.background}>More</ButtonLabel>
      </Button>
    </Container>
  );
};

export default Menu;
