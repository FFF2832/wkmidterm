import React , { useState }from "react";

import { Box, Image, Pressable,Text,Center,useColorMode} from "native-base"
import {Alert,TouchableOpacity} from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeDetail = props => {
  const { colorMode } = useColorMode();
  let { album } = props;
  const [likenum,updatelikenum]=useState(0)
  const [like,updatelike]=useState(true)
  return (
    
    <Box flex={1} justifyContent="center" _light={{bg:"#E2D5C3"}} _dark={{bg:"#4F5B57"}}> 
    
    <Center  paddingLeft={50} paddingTop={2} paddingRight={10}
      >
      <Box width={277} height={0.5} bgColor="#4F5B57" marginBottom={10} _dark={{bg:"#fff"}}></Box> 
      <Box  flex="1"  >
      <Image
          source={{uri: album.image}}
          borderRadius={7}
          height={407} width={277}
          alt="type"
          
           />  
       <Center position= "absolute"  style={{elevation:3}} marginLeft={230}  marginTop={3} >
          <TouchableOpacity  
            onPress={()=>updatelike(!like)} 
            
          >
            {like?
              <MaterialCommunityIcons
              name={'heart-outline'}
              color={'#EA9C49'}
              size={30}
              
              />:<MaterialCommunityIcons
              name={'heart'}
              color={'#EA9C49'}
              size={30}
              
              />
            }
            
          </TouchableOpacity>
       </Center>
        
         
         
      </Box>
          {/* <MaterialCommunityIcons
          name={'chevron-right'}
          color={colorMode == 'light' ? '#8CA19B' : 'gray'}
          size={60}
          
          /> */}
          
          <Box width={277} height={0.5} bgColor="#4F5B57" marginTop={10} _dark={{bg:"#fff"}}></Box>   
          
        <Text marginTop={4}>{album.description}</Text>
    </Center>
    <Center>
      <Pressable bgColor="#EA9C49" h={28} w={148} borderRadius={20} flex={1} alignItems="center" justifyContent="center" 
      marginTop={66} marginBottom={12} marginRight={0} onPress={() => Alert.alert("編輯")}>
        <Text color="#fff">編輯</Text>
        
      </Pressable>
    </Center>
    
    </Box>
  
  )
 
  
};






export default HomeDetail;
