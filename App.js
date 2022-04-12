// import 'react-native-gesture-handler';
// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NativeBaseProvider } from 'native-base';
// import LogIn from './src/components/LogIn'
// import Navigation from './src/navigation';
// import Intro from './src/screens/Home/index'
// import AppIntroSlider from 'react-native-app-intro-slider';
// const App = () => {

//   return (
//     <SafeAreaProvider>
      
//       <NativeBaseProvider>
//         {/* <LogIn/> */}
//         {/* <Intro/> */}
//         <Navigation />
//       </NativeBaseProvider>
//     </SafeAreaProvider>
//   );
// }

// export default App;
import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View,Text,Button,Image,StyleSheet} from 'react-native';
import { NativeBaseProvider,AspectRatio } from 'native-base';

import LogIn from './src/components/LogIn'
import Navigation from './src/navigation';
import Intro from './src/screens/Home/index'
import AppIntroSlider from 'react-native-app-intro-slider';
const App = () => {
  const [showRealApp,setshowRealApp]=useState(false)
  const onDone = () => {
    setshowRealApp(true)
    //this.setState({ showRealApp: true });
  }
  const onSkip = () => {
    setshowRealApp(true)
    
  }
  const  renderItem =({item})=> {
    return (
      <View style={{flex:1,alignContent:"center",justifyContent:"center" ,backgroundColor:'#E2D5C3'
      }}>
        <Image source={ item.logo }  style={styles.introLogoStyle}/>
        <Text   style={styles.introTextStyle}>{item.title}</Text>
        
        <Image source={ item.image }  style={styles.introImageStyle}/>
       
       
        
        
        <Text >{item.text}</Text>
      </View>
    );
  }
  return (
    <>
    {
      showRealApp?(
        <SafeAreaProvider>
            <View flex={1}>
              {/* <Text>this is app</Text>
              <Text>this is app</Text> */}
               <NativeBaseProvider>
          
             {/* <Intro/> */}
               <Navigation />
           </NativeBaseProvider>
           {/* <Button
              title="app"
              onPress={()=>showRealApp(false)}
              /> */}
                
            </View>

        </SafeAreaProvider>
      ):(
        < AppIntroSlider
        data={slides}
        renderItem ={renderItem }
        onDone={onDone}
        onSkip={onSkip}
        showSkipButton={true}
        bottomButton
        />
        // <SafeAreaProvider>
      
        // <NativeBaseProvider>
          
        //   {/* <Intro/> */}
        //   <Navigation />
        // </NativeBaseProvider>
        // </SafeAreaProvider>
      )
    }
    </>
  );
}

export default App;
const slides = [
  {
    key: 's1',
    text: '1232',
    title: '1232',
    image: {
      uri:
        
        'https://github.com/FFF2832/wkmidterm/blob/master/src/images/debby-hudson-zAJcnffG8xw-unsplash.png?raw=true',
    },
    logo: {
      uri:
        'https://github.com/FFF2832/wkmidterm/blob/master/assets/Persnote%20(1).png?raw=true',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_discount.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: ' Best Deals on all our services',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_best_deals.png',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Bus Booking',
    text: 'Enjoy Travelling on Bus with flat 100% off',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_bus_ticket_booking.png',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Train Booking',
    text: ' 10% off on first Train booking',
    image: {
      uri:
        'https://raw.githubusercontent.com/tranhonghan/images/main/intro_train_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
];
const styles= StyleSheet.create({
  introImageStyle:{
      width:390,
      height:840,
     marginLeft:0,
     position: "absolute" ,
     zIndex: 1
  },
  introTextStyle:{
      fontSize:20,
      elevation: 3,
      color:'black',
      fontWeight:'bold'
  },
  introLogoStyle:{
    width:191,
    height:60,
  }

})
