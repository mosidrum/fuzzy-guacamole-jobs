import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native';
import styles from './welcome.style';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';

const JobTypes = ['Full-time', 'Part-time', 'Contractor'];

const Welcome = () => {
	const [activeJobType, setActiveJobType] = useState('Full-time');
	const router = useRouter();
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Mosi!</Text>
				<Text style={styles.welcomeMessage}>Find your perfect job!</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						value=""
						onChange={() => {}}
						placeholder="Search for a job"
					/>
				</View>
				<TouchableOpacity
					style={styles.searchBtn}
					onPress={() => {}}
				>
					<Image
						source={icons.search}
						resizeMode="contain"
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.tabsContainer}>
				{JobTypes.map((item) => (
					<TouchableOpacity
						key={item}
						style={styles.tab(activeJobType, item)}
					>
						<Text>{item}</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

export default Welcome;
