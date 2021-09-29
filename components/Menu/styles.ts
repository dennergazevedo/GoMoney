import styled from 'styled-components';
import {View, TouchableOpacity, Text} from 'react-native';

interface IContainerProps {
  background: string;
}

interface IText {
  color: string;
}

export const Container = styled(View)<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  background-color: ${props => props.background};
  padding: 4px 16px;
  position: absolute;
  border-radius: 24px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 16px;
`;

export const Button = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 56px;
  height: 56px;
`;

export const ButtonCenter = styled(TouchableOpacity)<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.background};
  width: 56px;
  height: 56px;
  border-radius: 16px;
  margin-top: -48px;
`;

export const ButtonLabel = styled(Text)<IText>`
  color: ${props => props.color};
  font-size: 12px;
`;
