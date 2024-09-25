import { useState } from "react";
import { useRouter, Stack } from "expo-router";
import { View, ScrollView, SafeAreaView } from "react-native";

import {COLORS, icons, images, SIZES} from '../constants';
import {NearbyJobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

const Home = () => {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerTitle: '',
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimensions='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.user} dimensions='70%' />
                    ),
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,

                    }}
                >
                    <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if(searchTerm)
                                router.push(`/search/${searchTerm}`)
                        }}
                    />
                    <Popularjobs />
                    <NearbyJobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;