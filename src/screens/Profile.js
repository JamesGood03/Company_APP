import React from 'react';
import { View } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';

import { Avatar } from 'react-native-rapi-ui';



export default function ({ navigation }) {
	return (
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>

			<Avatar
    source={{ uri: 'https://i.pravatar.cc/300' }}
    size="lg"
    shape="round"
/>

				<Text>This is the Profile tab</Text>
			</View>
		</Layout>
	);
}
