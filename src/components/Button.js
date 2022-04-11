import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center } from "native-base"
import { Flex, Spacer } from "native-base";
const Button = ({ dtype, navigation }) => {
  return (
    

        <AspectRatio w="180" ratio={5} >
          <Box  >
          <Pressable 
          onPress={() => navigation.navigate('Detail', dtype)}
          >
          
             <Image
            margin="1"
            width="167"
            height="191"
            padding="2"
            borderRadius="7"
            paddingRight={4}
            
            source={{ uri: dtype.image }}
            alt="artist"
            />
            
            <Center width="167" height="10"   position= "absolute" zIndex= "999" elevation="2" flex="1"  margin="1"  marginTop={155} 
             bg="#B9D2C8" opacity="0.8" borderRadius="7">
              <Text  color="#495551"  fontWeight="bold" opacity="2"   >{dtype.title}</Text> 
            </Center>
          </Pressable>   
             
            
         
         </Box>
        </AspectRatio>
       
  )};

export default DTypeDetail;
