import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import React from 'react';
import AmazonPay from '../assets/amazon-pay.png';
import SendMoney from '../assets/send-money.jpg';
import ScanQR from '../assets/scan-qr.jpeg';
import PayBills from '../assets/pay-bills.jpeg';
import {RecentSearchData} from '../data/ResentSearchData';
import ServicesCard from './ServicesCard';


export default function Services() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{paddingRight:20}}
      >
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={AmazonPay} style={styles.imgStyle} />
            <Text style={styles.title}>amazon pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={SendMoney} style={styles.imgStyle} />
            <Text style={styles.title}>send money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={ScanQR} style={styles.imgStyle} />
            <Text style={styles.title}>scan qr</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={PayBills} style={styles.imgStyle} />
            <Text style={styles.title}>pay bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map(item => (
        <ServicesCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -80,
    paddingHorizontal: 10,
  },
  serviceContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 10,
    color: '#000000',
    marginTop: 2,
  },
  
});
