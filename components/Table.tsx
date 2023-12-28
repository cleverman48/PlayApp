import React from "react";
import { StyleSheet, Text, View, Dimensions, Alert } from "react-native";

const showAlert = () => {
	Alert.alert(
		'注意',
		'もうクリックできません!',
		[
			{
				text: '確認',
				style: 'default',
			},
		],
	);
}

export const convertArray = (inputArray: any) => {
	let newArray = new Array;
	inputArray.map((row: any) => {
		if ((row[0] === "green" && row[1] == true) || (row[0] === "blue" && row[1] == false) == true) {
			newArray.push("green");
		} else {
			newArray.push("blue");
		}
	})

	return newArray;
}

const convertMatrix = (inputArray: any, rows: number, cols: number) => {
	const inputArrayLen = inputArray.length;

	for (let i = 0; i < rows * cols - inputArrayLen; i++) {
		inputArray.push("");
	}

	const outputMatrix = Array.from({ length: cols }, () =>
		Array(rows).fill("")
	);

	let x = 0;
	let y = 0;

	outputMatrix[x][y] = inputArray[0]
	for (let i = 1; i < inputArrayLen; i++) {
		if (inputArray[i - 1] === inputArray[i]) {
			if (x === 4) {
				showAlert();
				break;
			}
			x++;
		}
		else {
			if (y === 11) {
				showAlert();
				break;
			}
			y++;
			x = 0;
		}
		outputMatrix[x][y] = inputArray[i]
	}
	return outputMatrix;
};

const Table = (props: any) => {
	const clickedHistory = props.data;

	const matrix = convertMatrix(convertArray(clickedHistory), 12, 5);

	const screenWidth = Dimensions.get('window').width;

	const styles = StyleSheet.create({
		container: {
			width: "80%",
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			padding: 5,
			marginHorizontal: "10%"
		},
		row: {
			flexDirection: 'row',
		},
		cell: {
			width: screenWidth / 13,
			height: screenWidth / 13,
			borderWidth: 1,
			borderColor: 'black',
			justifyContent: 'center',
			alignItems: 'center',
		},
		circle: {
			padding: "30%"
		},
		bgGreen: {
			backgroundColor: "green"
		},
		bgBlue: {
			backgroundColor: "blue"
		}
	});

	return (
		<View style={styles.container}>
			{matrix.map((row, rowIndex) => (
				<View key={rowIndex} style={styles.row}>
					{row.map((cell, colIndex) => (
						<View key={colIndex} style={styles.cell}>
							{cell !== "" ? (
								(cell === "green") ? (
									<View style={[styles.circle, styles.bgGreen]} />
								) : (
									<View style={[styles.circle, styles.bgBlue]} />
								)
							) : (
								<View style={styles.circle} />
							)}
						</View>
					))}
				</View>
			))}
		</View>
	);
};

export default Table;