import React from "react"
import {View, Text, StyleSheet} from "react-native"

const message = {
	NOT_FOUND: "검색 결과가 없습니다.",
	EMPTY_KEYWORD: "검색어를 입력하세요."
}

const EmptySearchResult = ({type}) => {
	return(
		<View style={styles.block}>
			<Text style={styles.text}>{message[type]}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	block: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		color: "grey",
		fontSize: 16
	}
})

export default EmptySearchResult