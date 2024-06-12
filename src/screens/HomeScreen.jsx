import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../componets/Header';
import SubHeader from '../componets/SubHeader';
import Category from '../componets/Category';
import Carousel from '../componets/Carousel';
import Services from '../componets/Services';
import Deals from '../componets/Deals';
import Brands from '../componets/Brands';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <SubHeader />
        <Category />
        <Carousel />
        <Services />
        <Deals />
        <Brands />
      </ScrollView>
    </SafeAreaView>
  );
}
