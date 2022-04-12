import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center } from "native-base"

const AlbumDetail = ({ album, navigation }) => {
  return (
    <Box 
      marginX={0} marginBottom={2} marginTop={5}  shadow={2} flex={1}
      _dark={{  borderWidth: 0.6 }}
    >
      <Center>
      <VStack>
          <HStack>
            <Center  width="304" height="46"  bg="#fff"  >
            <Text position= "absolute"  elevation="2"   marginRight={50} >{album.title}</Text>
            <Image
              source={{ uri: album.image }}
              alt="album"
              width="10"
              height="10"
              flex={1}
              
              marginRight={264} 
            /> 
            
            
           
            
            
          
            </Center>
          </HStack>
          {/* <HStack></HStack>
          <HStack></HStack> */}
      </VStack>
      </Center>
      
      {/* <HStack 
        _dark={{ bg: "blueGray.900"}}
        _light={{ bg: "white" }}>
        <AspectRatio w="50" ratio={1}>
          <Image
            margin="1"
            source={{ uri: album.thumbnail_image }}
            alt="artist"
          />
        </AspectRatio>
        <VStack paddingLeft={2} justifyContent="space-around">
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
        </VStack>
      </HStack>
      <Box p={1} _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "white" }}>
        <Pressable 
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio w="100%" ratio={1}>
            <Image
              source={{ uri: album.image }}
              alt="album"
            />            
          </AspectRatio>
        </Pressable>
      </Box>    */}
    </Box>
  )};

export default AlbumDetail;
