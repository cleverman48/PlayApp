import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFee } from '../redux/reducers/feeSlice';
import { setPage } from '../redux/reducers/pageSlice';
import { RootState } from '../redux/store';

import Table from '../components/Table';
import { updateData } from '../redux/reducers/matrixSlice';

const getRandomColor = () => {
  const colors = ['green', 'blue']; // Blue and Green colors
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const InputPage = () => {
  const { playFee, maxFee, nurseFee } = useSelector((state: RootState) => state.fee);

  const matrix = useSelector((state: RootState) => state.matrix.data);

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

  const [randomColor, setRandomColor] = useState<string>('');

  const handleButtonClick = (isGreen: boolean) => {

    const newRandomColor = getRandomColor();
    setRandomColor(newRandomColor);

    const color = isGreen ? 'green' : 'blue';

    let isMatch = undefined;

    if (color === newRandomColor) {
      isMatch = true;
    } else {
      isMatch = false;
    }

    const newRow = [color, isMatch];

    const newMatrix = [...matrix, newRow];

    dispatch(updateData(newMatrix));
  };

  return (
    <View>
      <View style={styles.btContainer}>
        <Text style={styles.calStyle} >損益計算</Text>
        <TouchableOpacity onPress={handleSetPage0}>
          <Text style={styles.backStyle}>終了</Text>
        </TouchableOpacity>
      </View>
      <Table data={matrix} />
      <View style={styles.panContainer}>
        <TouchableOpacity onPress={handleSetPage3}>
          <View style={styles.tViewStyle}>
            <Text style={styles.ruleStyle}>データ</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.tViewStyle}>
          <Text style={styles.inputStyle}>
            {play.toString()}
          </Text>
        </View>
        <View style={styles.tViewStyle}>
          {randomColor ? (
            <Text style={[styles.nextCol, { backgroundColor: randomColor }]}>

            </Text>
          ) : (
            <Text style={styles.nextCol}>
              ?
            </Text>
          )}
        </View>
        <View style={styles.colPan}>
          <TouchableOpacity onPress={() => handleButtonClick(true)}>
            <View style={styles.gBt}></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonClick(false)}>
            <View style={styles.bBt}></View>
          </TouchableOpacity>
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
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: 'green',
  },
  bBt: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: 'blue',
  },
  nextCol: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#999',
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
  },
  inputStyle: {
    width: 150,
    borderWidth: 1,
    borderColor: '#999',
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
    borderColor: '#999',
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
    borderColor: '#999',
    color: 'white',
    paddingTop: 5,
    marginLeft: 5,
  },
  ruleStyle: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    width: 150,
    height: 40,
    backgroundColor: '#2f99b1',
    borderRadius: 10,
    color: 'white',
    paddingTop: 7,
  },
  table: {
    width: '95%',
    height: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: '#999',
  },
  tViewStyle: {
    marginTop: 15,
    marginBottom: 15,
  },
});

export default InputPage;
