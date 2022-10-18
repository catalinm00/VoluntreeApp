import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import React, { useLayoutEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TailwindProvider } from "tailwindcss-react-native";
import TarjetaDeActividad from "../components/TarjetaDeActividad";
import ListaDeTarjetas from "../components/ListaDeTarjetas";
import ListaFiltros from "../components/ListaFiltros";
import Buscador from "../components/Buscador";
import ActivityScreen from "./ActivityScreen";
import FixedHeader from "../components/FixedHeader";

const HomeScreen = () => {
  const navigation = useNavigation();
  const[SearchText, setSearchText] = useState("");

  const handleSearchTextChange = (text) => {
      console.log(text)
      setSearchText(text)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <TailwindProvider>
      {/* <FixedHeader/> */}
      <SafeAreaView className="h-full items-center">
          <Buscador 
          onSearchTextChange = {handleSearchTextChange}
          valor = {SearchText}
          />
          <ListaFiltros/>
          <ListaDeTarjetas 
          valor = {SearchText}
          />
      </SafeAreaView>
    </TailwindProvider>
  );
};

export default HomeScreen;
