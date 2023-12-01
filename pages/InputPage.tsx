import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFee } from '../redux/reducers/feeSlice';
import { setPage } from '../redux/reducers/pageSlice';
import { RootState } from '../redux/store';

const InputPage = () => {
  const { playFee, maxFee, nurseFee } = useSelector((state: RootState) => state.fee);
  const dispatch = useDispatch();
  let play: number = playFee;
  let max: number = maxFee;
  let nurse: number = nurseFee;

  const handleSetPage0 = () => {
    dispatch(setPage("firstPage"));
  };
  const handleSetPage3 = () => {
    dispatch(setPage("resultPage"));
  };

  return (
    <View style={{backgroundColor: 'white',}} >
      <View style={styles.btContainer}>
        <Text style={styles.calStyle} >損益計算</Text>
        <Text style={styles.backStyle} onPress={handleSetPage0}>終了</Text>
      </View>
      <View style={styles.table}>
      </View>
      <View style={styles.panContainer}>
        <View style={styles.tViewStyle}>
          <Text style={styles.ruleStyle} onPress={handleSetPage3}>法則シート</Text>
        </View>
        <View style={styles.tViewStyle}>
          <Text style={styles.inputStyle}>
            {play.toString()}
          </Text>
        </View>
        <View style={styles.tViewStyle}>
          <Text style={styles.nextCol}>
            ?
          </Text>
        </View>
        <View style={styles.colPan}>
          <View style={styles.gBt}></View>
          <View style={styles.bBt}></View>
        </View>
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
  colPan: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  gBt: {
    width:80,
    height:80,
    borderRadius: 80,
    backgroundColor: 'green',
  },
  bBt: {
    width:80,
    height:80,
    borderRadius: 80,
    backgroundColor: 'blue',
  },
  nextCol: {
    width:80,
    height:80,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
  },
  inputStyle: {
    width: 150,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'yellow',
    color: 'black',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 30,
  },
  backStyle: {
    textAlign: 'center',
    fontSize: 20,
    width: 60,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'black',
    paddingTop: 5,
    marginRight: 5,
  },
  calStyle: {
    textAlign: 'center',
    fontSize: 20,
    width: 180,
    height: 40,
    backgroundColor: '#f00',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    color: 'white',
    paddingTop: 5,
    marginLeft: 5,
  },
  ruleStyle: {
    textAlign: 'center',
    fontSize: 17,
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
  table: {
    width: '95%',
    height: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: 'black',
  },
  tViewStyle: {
    marginTop: 15,
    marginBottom: 15,
  },
});

export default InputPage;
