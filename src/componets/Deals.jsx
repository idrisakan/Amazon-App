import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import RecommendProduct from '../assets/recommend.jpg';

export default function Deals() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image source={RecommendProduct} style={styles.imgStyle} />
      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.ofDealBtn}>
            <Text style={styles.ofDeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.discountPrice}>1,599 ₺</Text>
          <Text style={styles.actualPrice}>1,900 ₺</Text>
        </View>
        <Text style={styles.productName}>
          Nykaa Face Wash Gentle Skin Cleanser for all skin type
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.allDeals}>See al deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 10,
  },
  imgStyle: {
    height: 250,
    width: '100%',
    marginVertical: 10,
  },
  bottomSection: {
    paddingHorizontal: 10,
  },
  ofDealBtn: {
    backgroundColor: '#be0201',
    width: 60,
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
  },
  ofDeal: {
    fontSize: 12,
    color: '#fff',
  },
  deal: {
    color: '#be0201',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountPrice: {
    color: '#000000',
    fontSize: 16,
    marginVertical: 5,
  },
  actualPrice: {
    fontSize: 10,
    marginLeft: 7,
    textDecorationLine: 'line-through',
  },
  productName: {
    color: '#000000',
    fontSize: 14,
  },
  allDeals: {
    color: '#017185',
    marginVertical: 10,
    fontSize: 14,
  },
});
