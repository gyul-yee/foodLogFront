import React from "react"
import {
	View,
} from "react-native"
import TransparentStarGroupSvg from "../assets/images/transparentStarGroup.svg"

function StarRating (props) {
	return (
		<View>
			<View>
				<TransparentStarGroupSvg/>
			</View>
		</View>
	)
}

export default StarRating