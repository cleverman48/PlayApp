import React from 'react';
import { Input } from 'react-native-elements';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
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
    <View >
      <View style={styles.btContainer}>
        <Text style={styles.textStyle} onPress={handleSetFee}>完了</Text>
      </View>
      <View>

      </View>
      <TextInput
        style={styles.inputStyle}
        value={play.toString()}
        onChangeText={playInputChange}
        placeholder="Enter a value"
        keyboardType="numeric"
      />
      <TextInput
        value={max.toString()}
        onChangeText={maxInputChange}
        placeholder="Enter a value"
        keyboardType="numeric"
      />
      <TextInput
        value={nurse.toString()}
        onChangeText={nurseInputChange}
        placeholder="Enter a value"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  panContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
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
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
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
    borderColor: 'black',
    color: 'black',
    paddingTop: 5,
    paddingRight: 5,
    alignSelf: 'flex-end',
  }
});

export default FeePage;
