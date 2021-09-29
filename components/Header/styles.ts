import styled from 'styled-components';
import {View, Text} from 'react-native';

interface IContainerProps {
  background: string;
}

interface IText {
  color: string;
  size?: string;
}

interface INotifyCount {
  background: string;
  color: string;
}

export const Container = styled(View)<IContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: ${props => props.background};
  padding: 4px 16px;
`;

export const Right = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
  margin-right: 4px;
`;

export const Left = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 80px;
`;

export const Date = styled(Text)<IText>`
  color: ${props => props.color};
  font-size: ${props => (props.size ? props.size : 12)}px;
`;

export const Welcome = styled(Text)<IText>`
  color: ${props => props.color};
  font-size: ${props => (props.size ? props.size : 24)}px;
  font-weight: bold;
`;

export const IconContainer = styled(View)<IContainerProps>`
  background-color: ${props => props.background};
  border-radius: 16px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  position: relative;
`;

export const NotifyCount = styled(View)<INotifyCount>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background-color: ${props => props.background};
  color: ${props => props.color};
  border-radius: 50px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Number = styled(Text)`
  font-size: 12px;
  font-weight: bold;
`;
