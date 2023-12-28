import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFee } from '../redux/reducers/feeSlice';
import { setPage } from '../redux/reducers/pageSlice';
import { RootState } from '../redux/store';

const FeePage = () => {
  const { playFee, maxFee, nurseFee } = useSelector((state: RootState) => state.fee);
  const dispatch = useDispatch();
  let play: number = playFee;
  let max: number = maxFee;
  let nurse: number = nurseFee;

  const playInputChange = (value: string): void => {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      play = 0;
    }
    else {
      play = parsedValue;
    }
    dispatch(setFee({ playFee: play, maxFee: max, nurseFee: nurse }));
  };
  const maxInputChange = (value: string): void => {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      max = 0;
    }
    else {
      max = parsedValue;
    }
    dispatch(setFee({ playFee: play, maxFee: max, nurseFee: nurse }));
  };
  const nurseInputChange = (value: string): void => {
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      nurse = 0;
    }
    else {
      nurse = parsedValue;
    }
    dispatch(setFee({ playFee: play, maxFee: max, nurseFee: nurse }));
  };

  const handleSetFee = () => {
    dispatch(setPage("firstPage"));
  };

  return (
    <View>
      <View style={styles.btContainer}>
        <TouchableOpacity onPress={handleSetFee}>
          <Text style={styles.textStyle}>完了</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.panContainer}>
        <View style={styles.tViewStyle}>
          <Text style={styles.titleStyle}>プレイ金額</Text>
          <TextInput
            style={styles.inputStyle}
            value={play.toString()}
            onChangeText={playInputChange}
            placeholder="Enter a value"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.tViewStyle}>
          <Text style={styles.titleStyle}>上限金額</Text>
          <TextInput
            style={styles.inputStyle}
            value={max.toString()}
            onChangeText={maxInputChange}
            placeholder="Enter a value"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.tViewStyle}>
          <Text style={styles.titleStyle}>ナース金額</Text>
          <TextInput
            style={styles.inputStyle}
            value={nurse.toString()}
            onChangeText={nurseInputChange}
            placeholder="Enter a value"
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  panContainer: {
    width: '100%',
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  btContainer: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
  },
  inputStyle: {
    width: 300,
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  textStyle: {
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
    alignSelf: 'flex-end',
  },
  tViewStyle: {
    marginTop: 50,
    marginBottom: 50,
  },
  titleStyle: {
    marginBottom: 5,
    fontSize: 15,
  }
});

export default FeePage;
