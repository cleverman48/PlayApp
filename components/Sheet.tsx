import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { convertArray } from "./Table"

const Sheet = (props: any) => {

	const winColor = convertArray(props.data);

	const winColorLen = winColor.length;

	let greenArray = [];
	let greenOneWinCnt1 = 0;
	let greenOneWinCnt2 = 0;
	let greenOneOverWinCnt = 0;
	let greenContinueArray = [];

	let blueArray = [];
	let blueOneWinCnt1 = 0;
	let blueOneWinCnt2 = 0;
	let blueOneOverWinCnt = 0;
	let blueContinueArray = [];

	for (let i = 1; i < winColorLen; i++) {
		if (winColor[i] === winColor[i - 1]) {
			if (winColor[i] === "green") {
				greenOneOverWinCnt++;
				if(i == winColorLen - 1){
					greenArray.push([++greenOneWinCnt1, "nocircle"]);
					greenContinueArray.push(greenOneWinCnt1);
				}
			} else {
				blueOneOverWinCnt++;
				if(i == winColorLen - 1){
					blueArray.push([++blueOneWinCnt1, "nocircle"]);
					blueContinueArray.push(blueOneWinCnt1);
				}
			}
		} else {
			if (winColor[i] === "blue") {
				if (greenOneOverWinCnt >= 1) {
					greenArray.push([++greenOneWinCnt1, "nocircle"]);
					greenContinueArray.push(greenOneWinCnt1);
					greenOneOverWinCnt = 0;
				}
				else {
					greenArray.push([++greenOneWinCnt2, "circle"]);
				}
			} else {
				if (blueOneOverWinCnt >= 1) {
					blueArray.push([++blueOneWinCnt1, "nocircle"]);
					blueContinueArray.push(blueOneWinCnt1);
					blueOneOverWinCnt = 0;
				}
				else {
					blueArray.push([++blueOneWinCnt2, "circle"]);
				}
			}
		}
	}
	const screenWidth = Dimensions.get('window').width;

	const styles = StyleSheet.create({
		rows: {
			width: "100%",
			borderWidth: 1,
			borderColor: "black",
			flexDirection: "row",
			alignItems: "center"
		},
		left: {
			width: (screenWidth - 50) / 12,
			padding: 5,
			alignItems: "center",
			justifyContent: "center"
		},
		circle: {
			width: 18,
			height: 18,
			borderRadius: 50,
			borderWidth: 1,
			alignItems: "center",
			justifyContent: "center"
		},
		bgGreen: {
			backgroundColor: "green"
		},
		bgBlue: {
			backgroundColor: "blue"
		},
		right: {
			width: (screenWidth - 50) / 12 * 11,
		},
		top: {
			flexDirection: "row"
		},
		bottom: {
			flexDirection: "row"
		},
		cell: {
			borderWidth: 1,
			borderColor: "black",
			width: (screenWidth - 50) / 12,
			height: (screenWidth - 50) / 12,
			alignItems: "center",
			justifyContent: "center"
		},
		bTop_0: {
			borderTopWidth: 0
		},
		bBottom_0: {
			borderBottomWidth: 0
		},
		bLeft_0: {
			borderLeftWidth: 0
		},
		bRight_0: {
			borderRightWidth: 0
		},
		textCenter: {
			textAlign: "center"
		}
	});

	return (
		<View>
			<View style={styles.rows}>
				<View style={styles.left}>
					<View style={[styles.circle, styles.bgGreen]} />
				</View>
				<View style={styles.right}>
					<View style={styles.top}>
						{greenArray.map((item, itemIdex) => (
							(item[1] == "circle") ? (
								<View style={[styles.cell, styles.bTop_0]} key={itemIdex}>
									<Text style={[styles.circle, styles.textCenter]}>{item[0]}</Text>
								</View>
							) : (
								<View style={[styles.cell, styles.bTop_0]} key={itemIdex}>
									<Text>{item[0]}</Text>
								</View>
							)
						))}
						{[...Array(Math.max(0, 11 - greenArray.length))].map((_, index) => (
							<View style={[styles.cell, styles.bTop_0]} key={index}>
								<Text></Text>
							</View>
						))}
					</View>
					<View style={styles.bottom}>
						{greenContinueArray.map((item, itemIdex) => (
							<View style={[styles.cell, styles.bTop_0, styles.bBottom_0]} key={itemIdex}>
								<Text style={[styles.circle, styles.textCenter]}>{item}</Text>
							</View>
						))}
						{[...Array(Math.max(0, 11 - greenContinueArray.length))].map((_, index) => (
							<View style={[styles.cell, styles.bTop_0]} key={index}>
								<Text></Text>
							</View>
						))}
					</View>
				</View>
			</View>
			<View style={styles.rows}>
				<View style={styles.left}>
					<View style={[styles.circle, styles.bgBlue]} />
				</View>
				<View style={styles.right}>
					<View style={styles.top}>
						{blueArray.map((item, itemIdex) => (
							(item[1] == "circle") ? (
								<View style={[styles.cell, styles.bTop_0]} key={itemIdex}>
									<Text style={[styles.circle, styles.textCenter]}>{item[0]}</Text>
								</View>
							) : (
								<View style={[styles.cell, styles.bTop_0]} key={itemIdex}>
									<Text>{item[0]}</Text>
								</View>
							)
						))}
						{[...Array(Math.max(0, 11 - blueArray.length))].map((_, index) => (
							<View style={[styles.cell, styles.bTop_0]} key={index}>
								<Text></Text>
							</View>
						))}
					</View>
					<View style={styles.bottom}>
						{blueContinueArray.map((item, itemIdex) => (
							<View style={[styles.cell, styles.bTop_0, styles.bBottom_0]} key={itemIdex}>
								<Text style={[styles.circle, styles.textCenter]}>{item}</Text>
							</View>
						))}
						{[...Array(Math.max(0, 11 - blueContinueArray.length))].map((_, index) => (
							<View style={[styles.cell, styles.bTop_0]} key={index}>
								<Text></Text>
							</View>
						))}
					</View>
				</View>
			</View>
			<View style={[styles.rows, styles.bTop_0, styles.bBottom_0]}>
				<View style={[styles.cell, styles.bTop_0, styles.bLeft_0]}>
					<Text>A</Text>
				</View>
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
			</View>
			<View style={[styles.rows, styles.bTop_0, styles.bBottom_0]}>
				<View style={[styles.cell, styles.bTop_0, styles.bLeft_0]}>
					<Text>G</Text>
				</View>
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
				<View style={[styles.cell, styles.bTop_0]} />
			</View>
		</View>
	)
}

export default Sheet;