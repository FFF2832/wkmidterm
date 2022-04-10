import React from "react";
import { Box ,Image,Center,Text,HStack} from "native-base";
import ListItem from "../components/ListItem"

const SettingsScreen = ({ navigation }) => {
    return (
        <Box 
            flex={1}
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "#E2D5C3" }}        
        >
            <Center>
                <Image
                 margin="1"
                 width="140"
                 height="140"
                 padding="2"
                 borderRadius="7"
                 paddingRight={4}
            //   flex="1"
            //   justifyContent="center"
                marginTop={19}
              source={{ uri: "https://github.com/FFF2832/wkmidterm/blob/master/src/images/Group%2054.png?raw=true" }}
              alt="artist"
            />
            <Text color="#4F5B57" fontSize={20} fontWeight="bold">Jennifer Lin</Text>
            <HStack>
                <Text color="#4F5B57" fontSize={12} fontWeight="bold" marginRight={3}>已收藏次數</Text>
                <Text color="#4F5B57" fontSize={12} fontWeight="bold"  marginRight={3}>已寫文章數</Text>
                <Text color="#4F5B57" fontSize={12} fontWeight="bold"  marginRight={2}>已加入時間</Text>
            </HStack>
            <HStack>
                <Text color="#4F5B57" fontSize={12} fontWeight="bold" marginRight={20}>5</Text>
                <Text color="#4F5B57" fontSize={12} fontWeight="bold"  marginRight={20}>5</Text>
                <Text color="#4F5B57" fontSize={12} fontWeight="bold"  marginRight={13}>5</Text>
            </HStack>
            </Center>

            <Box 
                mt="12" borderBottomWidth={1} borderColor="lightgray"
                _dark={{ borderColor: 'blueGray.500', borderButtomWidth: 0.6 }}
            >

                <ListItem title="主題設定"   navigation={navigation} destination="DisplaySetting" />
                {/* <ListItem title="Account" navigation={navigation} destination="AccountSetting"/> */}
            </Box>            
        </Box>

    );
};

export default SettingsScreen;
