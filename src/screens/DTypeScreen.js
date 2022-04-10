import React from "react";
import { Box } from "native-base";
import DTypeList from "../components/DTypeList";
import typeData from "../json/type.json";

const DTypeScreen = ({ navigation }) => {
  return (
    <Box>
      < DTypeList 
        list={typeData.typeList}
        navigation={navigation}
      />
    </Box>
  );
};

export default DTypeScreen;