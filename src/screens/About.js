import React from 'react';
import { View } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';

import { Section, SectionContent,SectionImage } from 'react-native-rapi-ui';



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
			
						<Section>
    <SectionContent>
        <Text>This is a Section</Text>
    </SectionContent>
</Section>

<Section>
    <SectionImage source={require('../../assets/login.png')} />
    <SectionContent>
        <Text>This is a Section with an image</Text>
    </SectionContent>
</Section>


			</View>
	
		</Layout>
	);
}
