import React from "react";

import { Box, Image, Pressable,Text,Center} from "native-base"




const HomeDetail = props => {
  let { album } = props;
  return (
    
    <Box flex={1} justifyContent="center" > 
    
    <Box  marginLeft={45}
          dark={{ borderColor: 'blueGray.500', borderWidth: 0.6 }}>
        <Image
          source={{uri: album.image}}
          borderRadius={7}
          height={407} width={277}
          alt="type"
        />
        <Text marginTop={4}>{album.description}</Text>
    </Box>
    <Center>
      <Pressable bgColor="#EA9C49" h={28} w={148} borderRadius={20} flex={1} alignItems="center" marginLeft={10}justifyContent="center" marginTop={66} marginBottom={12}>
        <Text color="#fff">編輯</Text>
      </Pressable>
    </Center>
    
    </Box>
  
  )
  // if(album.page==1){
  //   return (
    
  //     <Box flex={1} justifyContent="center" > 
      
  //     <Box  marginLeft={45}
  //           dark={{ borderColor: 'blueGray.500', borderWidth: 0.6 }}>
  //         <Image
  //           source={{uri: album.image}}
  //           borderRadius={7}
  //           height={407} width={277}
  //           alt="type"
  //         />
  //     </Box>
  //     <Center>
  //       <Pressable bgColor="#EA9C49" h={28} w={148} borderRadius={20} flex={1} alignItems="center" marginLeft={10}justifyContent="center" marginTop={66} marginBottom={12}>
  //         <Text color="#fff">編輯</Text>
  //       </Pressable>
  //     </Center>
      
  //     </Box>
    
  //   )
  // }

  
};






export default HomeDetail;
