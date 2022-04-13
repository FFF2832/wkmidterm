import React from "react";
import {SectionList }from "react-native";
import { Text, FlatList,Center,Pressable,Box} from "native-base";
import HomeDetail from "./HomeDetail";
import sections from "../json/type_section.json";

const Homelist = () => {
  const renderSectionHeader = ({section}) => (
    <Center _light={{bg:"#E2D5C3"}} _dark={{bg:"#4F5B57"}}>
      <Text fontSize={20} marginTop={5} marginBottom={0}  color="#4F5B57" fontWeight="bold"  _dark={{ color:"#fff"}}>
        {section.title} 
      </Text>
      {/* <Box width={277} height={0.5} bgColor="#4F5B57" marginBottom={10} marginLeft={60}></Box>   */}
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
         
          renderItem={({ item }) => <HomeDetail album={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      ) : null}
    </Center>
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }

    return <HomeDetail album={item} />
    
    
  };

  return (
  
    <SectionList 
     _dark={{bg:"#4F5B57"}}
     _light={{bg:"#E2D5C3"}}
      sections={sections}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={ item => item.title }
    />
  
  );
};



export default Homelist;


