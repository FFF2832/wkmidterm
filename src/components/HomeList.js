import React from "react";
import {SectionList }from "react-native";
import { Text, FlatList,Center,Pressable} from "native-base";
import HomeDetail from "./HomeDetail";
import sections from "../json/type_section.json";
// import { ImageBackground } from "react-native-web";


const Homelist = () => {
  const renderSectionHeader = ({section}) => (
    <>
      <Text fontSize={20} marginTop={35} marginBottom={35} marginLeft={34} color="#4F5B57" fontWeight="bold">
        {section.title} 
      </Text>
      {section.horizontal ? (
        <FlatList
          horizontal={true}
          data={section.data}
          renderItem={({ item }) => <HomeDetail album={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={ item => item.title }
        />
      ) : null}
    </>
  );
  const renderItem = ({ item, section }) => {
    if (section.horizontal) {
      return null;
    }
    return <HomeDetail album={item} />
    
  };

  return (
  
    <SectionList 
      backgroundColor="#E2D5C3"
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


