import React, {useEffect, useState} from 'react';
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import MainNavigator from './src/navigators/MainNavigator';
import { StatusBar } from 'react-native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const App = () => {
  //sử dụng usétate để lưu thời gian 1.5 giây
  const [isShowSplash, setIsShowSplash] = useState(true);
  //muốn lưu liền thì dùng Store redux toolkit
  const [accessToken, setAccessToken] = useState('');
  //kiểm tra đăng nhập
  const {getItem, setItem} = useAsyncStorage('assetToken');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  //chạy 01 lần thì dùng useEfect không tham số []
  useEffect(() => {
    checkLogin();
  }, []);
  //khu vực các hàm
  const checkLogin = async () => {
    const token = await getItem();
    console.log(token);
    //check token
    token && setAccessToken(token);
  }

  //dùng dấu ! để phủ định điều kiện
  //background nằm dưới thanh StatusBar

  return (
  <> 
    <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
    {
      !isShowSplash ? (
        <SplashScreen/>
      ) : (
        <NavigationContainer>
          {/* kiểm tra token nếu có thì trả về main không thì trả về auth*/}
          {accessToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
  </>
  );
};

export default App;
