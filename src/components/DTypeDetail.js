import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center } from "native-base"
import { Flex, Spacer } from "native-base";
const DTypeDetail = ({ dtype, navigation }) => {
  return (
    <Box 
      marginX={1} marginBottom={2} borderRadius={0}   flex="1" p={1} marginTop={2} marginLeft={4}
      _dark={{ borderColor: 'blueGray.500', borderWidth: 0.6 }}
    >
      <HStack 
        _dark={{ bg: "blueGray.900"}}
        _light={{ bg: "white" }}>
        
        <AspectRatio w="171" ratio={1} >
          <Box>
              <Image
            margin="1"
            width="171"
            height="136"
            padding="1"
            borderRadius="7"
            source={{ uri: dtype.image }}
            alt="artist"
            />
            
            <Center width="171" height="10"   position= "absolute" zIndex= "999" elevation="3" flex="1"  margin="1"  marginTop={24}
             bg="#B9D2C8" opacity="0.7" borderRadius="7">
              <Text  color="white"  fontWeight="bold" opacity="2" >{dtype.title}</Text> 
            </Center>
            {/* <Image
            margin="1"
            width="171"
            height="40"
            padding="1"
            position= "absolute"
            zIndex= "999"
            elevation="3"
            alignItems="flex-end"
            source={{ uri: "https://github.com/FFF2832/wkmidterm/blob/master/src/images/Rectangle%2035.png?raw=true"}}
            alt="artist"
            /> */}
         
         </Box>
        </AspectRatio>
        <AspectRatio w="171" ratio={1} >
          <Box>
              <Image
            margin="1"
            width="171"
            height="136"
            padding="1"
            borderRadius="7"
            source={{ uri: dtype.image_2 }}
            alt="artist"
            />
            
            <Center width="171" height="10"   position= "absolute" zIndex= "999" elevation="3" flex="1"  margin="1"  marginTop={24}
             bg="#B9D2C8" opacity="0.7"borderRadius="7" >
              <Text  color="white"  fontWeight="bold" opacity="2" >{dtype.title2}</Text> 
            </Center>
           
         </Box>
        </AspectRatio>
   
       
        {/* <VStack paddingLeft={2} justifyContent="space-around">
          <Text>{dtype.title}</Text>
          <Text>{dtype.artist}</Text>
        </VStack> */}
      </HStack>
      
      {/* <Box p={1} flex="1"  _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "white" }}>
        <Pressable 
          onPress={() => navigation.navigate('Detail', dtype)}
        >
           
            <AspectRatio  width="200" ratio={1}>
          <Image
            // margin="1"
            source={{ uri: dtype.image_2 }}
            alt="artist"
          />
        </AspectRatio> 
          <AspectRatio width="100" ratio={1}>
          
                <Image
                source={{ uri: dtype.image }}
                alt="dtype"
                /> 

          </AspectRatio>
          
        </Pressable>
      </Box>    */}
    </Box>
  )};

export default DTypeDetail;
