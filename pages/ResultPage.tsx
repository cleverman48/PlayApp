import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFee } from '../redux/reducers/feeSlice';
import { setPage } from '../redux/reducers/pageSlice';
import { RootState } from '../redux/store';

const ResultPage = () => {
  const { playFee, maxFee, nurseFee } = useSelector((state: RootState) => state.fee);
  const dispatch = useDispatch();
  let play: number = playFee;
  let max: number = maxFee;
  let nurse: number = nurseFee;


  const handleSetPage0 = () => {
    dispatch(setPage("firstPage"));
  };
  const handleSetPage2 = () => {
    dispatch(setPage("inputPage"));
  };

  return (
    <View style={styles.panContainer} >
      <View style={styles.tViewStyle}>
        <Text style={styles.ruleStyle} >法則シート</Text>
      </View>
      <View style={styles.table}>
      </View>
      <View style={styles.table}>
      </View>
      <View style={styles.tViewStyle}>
        <Text style={styles.playStyle} onPress={handleSetPage2}>プレイ画面</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  panContainer: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  btContainer: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  ruleStyle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    width: 100,
    height: 40,
    backgroundColor: '#2f99b1',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'white',
    paddingTop: 7,
  },
  playStyle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    width: 100,
    height: 40,
    backgroundColor: '#94a44c',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'white',
    paddingTop: 7,
  },
  table: {
    width: '95%',
    height: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
    marginBottom: 15,
  },
  tViewStyle: {
    marginTop: 15,
    marginBottom: 15,
  },
});

export default ResultPage;
