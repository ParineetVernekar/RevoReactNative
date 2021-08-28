import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen'
import EnterPhoneNumberScreen from './EnterPhoneNumberScreen';
import OTPScreen from './OTPScreen';
import LandingScreen from './LandingScreen';
import AuthContext from './AuthContext';
import { View , Text } from 'react-native'
import CustomBarcodeScanner from './BarcodeScanner';
import AccountScreen from './AccountsScreen';
import WebViewModal from './WebViewModal';
import BottleDetailsScreen from './BottleDetailsScreen';
import FindRefillStationScreen from './FindRefillStationScreen';
import { LogBox } from 'react-native';

// Ignore log notification by message:
// LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);
const RootStack = createNativeStackNavigator();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function RootStackScreen() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <RootStack.Navigator>
        {state.isLoading ? (
          <RootStack.Group>
            <RootStack.Screen name="Splash" component={SplashScreen} />
            </RootStack.Group>
          ) : state.userToken == null ? (
            <RootStack.Group>

            <RootStack.Screen name="Landing" component={LandingScreen} options={{
              headerShown: false
            }} />
                 <RootStack.Screen name="EnterPhoneNumberModal" component={EnterPhoneNumberScreen} options={{
              // headerShown: false
              headerTitle:"Enter phone"
            }} />
                 <RootStack.Screen name="OTPModal" component={OTPScreen} options={{
              // headerShown: false
              headerTitle:"Enter OTP"

            }} />
            </RootStack.Group>
          ) : (
            <RootStack.Group>
            <RootStack.Screen name="Home" component={HomeScreen} options={{
              headerTitle: "My Bottles",
              headerLargeTitle: true
            }}
             />
              <RootStack.Screen name="BarcodeScanner" component={CustomBarcodeScanner} options={{
              headerTitle: "My Bottles",
              headerLargeTitle: true
            }}
             />
              <RootStack.Screen name="AccountScreen" component={AccountScreen} options={{
              headerTitle: "Account",
              headerLargeTitle: true
            }}
             />
               <RootStack.Screen name="FindRefillStation" component={FindRefillStationScreen} options={{
              headerTitle: "FindRefillStation",
              headerLargeTitle: true
            }}
             />
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
             <RootStack.Screen name="HelpModal" component={WebViewModal} options={{
              headerTitle: "Help",
              headerLargeTitle: true
            }}
             />
             <RootStack.Screen name="LegalModal" component={WebViewModal} options={{
              headerTitle: "Legal",
              headerLargeTitle: true
            }}
             />
             <RootStack.Screen name="LearnMoreModal" component={WebViewModal} options={{
              headerTitle: "Learn More",
              headerLargeTitle: true
            }}
             />
              <RootStack.Screen name="BottleDetailsModal" component={BottleDetailsScreen} options={{
              headerTitle: "Bottle Details",
              headerLargeTitle: true,

            }}
             />
      </RootStack.Group>
             </RootStack.Group>
          )}
        {/* <RootStack.Screen name="Home" component={HomeScreen} options={{
              headerTitle: "My Bottles",
              headerLargeTitle: true
            }}
             />
              <RootStack.Screen name="BarcodeScanner" component={BarcodeScanner} options={{
              headerTitle: "My Bottles",
              headerLargeTitle: true
            }}
             /> 
             <RootStack.Screen name="AccountScreen" component={AccountScreen} options={{
              headerTitle: "Account",
              headerLargeTitle: true
            }}
             /> */}
            
      </RootStack.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default function App() {

  return (

    RootStackScreen()
  );
}

