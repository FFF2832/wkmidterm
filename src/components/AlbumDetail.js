// import React from "react";
// import { StyleSheet } from "react-native";
// import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center } from "native-base"

// const AlbumDetail = ({ album, navigation }) => {
//   return (
//     <Box 
//       marginX={0} marginBottom={2} marginTop={5}  shadow={2} flex={1}
//       // _dark={{  borderWidth: 0.6 }}
//     >
//       <Center>
//       <VStack>
//           <HStack>
//             <Center  width="304" height="46"  bg="#fff" borderRadius={7} _dark={{  bg:"#000"}} >
//             <Text position= "absolute"    marginRight={50} >{album.title}</Text>
//             <Image
//               source={{ uri: album.image }}
//               alt="album"
//               width="10"
//               height="10"
//               flex={1}
              
//               marginRight={264} 
//             /> 
//             </Center>
//           </HStack>
//           {/* <HStack></HStack>
//           <HStack></HStack> */}
//       </VStack>
//       </Center>
      
     
//     </Box>
//   )};

// export default AlbumDetail;
import React from "react";
import { StyleSheet } from "react-native";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center } from "native-base"

const AlbumDetail = ({ album, navigation }) => {
  return (
    <Box 
      marginX={0} marginBottom={2} marginTop={5}  shadow={2} flex={1}
      // _dark={{  borderWidth: 0.6 }}
    >
      
      <Center>
      <VStack>
          <HStack>
            <Center  width="304" height="167"  bg="#B9D2C8" borderRadius={7}  >
            
            <Image
              source={{ uri: album.image }}
              alt="album"
              width="304" height="167" 
              flex={1}
              borderRadius={7}
             
            /> 
             <Center  width="304" height="46"  bg="#B9D2C8" borderRadius={7}   >
             <Text position= "absolute"  fontWeight="bold"  marginRight={50} _dark={{  color:"#4F5B57"}} color="#4F5B57">{album.title}</Text>
             </Center>
            </Center>
          </HStack>
         
      </VStack>
      </Center>
      
     
    </Box>
  )};

export default AlbumDetail;