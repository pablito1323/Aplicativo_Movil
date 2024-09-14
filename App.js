// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import CustomDrawerContent from './src/components/CustomDrawerContent';
import { styles } from './src/styles/styles';
import Suscripcion from './src/screens/Suscripcion';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack({ setIsLoggedIn }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{ title: 'Iniciar Sesión' }} >
        {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />} 
      </Stack.Screen>
      <Stack.Screen name="Register" options={{ title: 'Registro de Usuario' }}  component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function AppDrawer({ setIsLoggedIn }) {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} setIsLoggedIn={setIsLoggedIn} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Suscripcion" component={Suscripcion} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Estado de autenticación

  return (
    <NavigationContainer>
      {/* Si está logueado, mostrar el Drawer. Si no, mostrar las pantallas de autenticación */}
      {isLoggedIn ? (
        <AppDrawer setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <AuthStack setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
}
;