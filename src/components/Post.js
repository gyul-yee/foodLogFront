import React, {useState} from "react"
import { Pressable, View, Image, StyleSheet, Text } from "react-native"
import { Location } from "../assets/icons/Location"

const Post = ({item:{profileUrl, username, date, postPhotoUrl,store, address, contents, rating},onProfilePress, onPostPress}) => {
	const defaultRating = rating
	const [maxRating, setMaxRating] = useState([1,2,3,4,5])
	const starImgFilled =  "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png"
	const starImgCorner = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png"
	
	const CustomRatingBar = () => {
		return (
			<View style={styles.customRatingBarStyle}>
				{
					maxRating.map((item, key)=>{
						return (
							<View
								activeOpacity={0.7}
								key= {item}
							>
								<Image
									style={styles.starImgStyle} 
									source={
										item <= defaultRating
											? {uri: starImgFilled}
											: {uri: starImgCorner}
									}
								/>
							</View>
						)						
					})
				}
			</View>
		)
	}
	
	return(
		<View style={{width: "100%", backgroundColor: "rgba(165, 212, 233, 0.3)", marginBottom: 15, paddingBottom: 5, paddingHorizontal: 5}}>
			<View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 5}}>   
				<Pressable onPress={() => onProfilePress()}>
					<View style={{flexDirection: "row", alignItems: "center"}}>
						<Image style={styles.profile} source={{uri: profileUrl}}/>
						<Text>{username}</Text> 
					</View>
				</Pressable>
				<Text>{date}</Text>
			</View>
			<Pressable onPress={() => onPostPress()}>
				<Image style={{width: "100%", height: 350, backgroundColor: "white", marginBottom: 5}} source={{uri: postPhotoUrl}}/>
				<View style={{flexDirection: "row", alignItems: "center", justifyContent:"space-between"}}>
					<Text style={{fontSize: 16}}>{store}</Text>
					<CustomRatingBar/>
				</View>
				
				<View style={{flexDirection: "row", alignItems: "center", marginBottom: 10}}>
					<Location name="location-outline" size={14}/>
					<Text>{address}</Text>
				</View>
				<Text numberOfLines={3}>
					{contents}
				</Text>
			</Pressable>
		</View>
	)
}
    

const styles = StyleSheet.create({
	profile: {
		width: 40,
		height: 40,
		borderRadius: 50,
		backgroundColor: "black",
		alignItems: "center",
		marginRight: 5
	},
	customRatingBarStyle : {
		justifyContent: "flex-end",
		flexDirection: "row",
		marginTop: 3,
	},
	starImgStyle : {
		padding: 8,
		width: 10,
		height: 10,
		resizeMode: "cover"
	},
})

export default Post