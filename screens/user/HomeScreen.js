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
import TarjetaDeActividad from "../../components/TarjetaDeActividad";
import ListaDeTarjetas from "../../components/ListaDeTarjetas";
import ListaFiltros from "../../components/ListaFiltros";
import Buscador from "../../components/Buscador";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [SearchText, setSearchText] = useState("");

  const[distancia,setDistancia] = useState(0);
  const[sliding, setSliding] = useState('Inactive');

  const [duracion, setDuracion] = useState(0);

  const[mode, setMode] = useState('date')
  const[dateValue, setDateValue] = useState();
  const[text, setText] = useState('Vacío')
  const[show, setShow] = useState(false);

  const[isVisible, setIsVisible] = useState(false);
  const[isModalOpen, setIsModalOpen] = useState(false)

  const[categoriasActivas, setCategoriasActivas] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <TailwindProvider>
      <SafeAreaView className="h-full items-center">
        <Buscador
          valor={SearchText}
          setSearchText = {setSearchText}
          isModalOpen = {isModalOpen}
          setIsModalOpen = {setIsModalOpen}
          categoriasActivas = {categoriasActivas}
          setCategoriasActivas = {setCategoriasActivas}
          distancia = {distancia}
          setDistancia = {setDistancia}
          text = {text}
          setText = {setText}
          isVisible = {isVisible}
          duracion = {duracion}
          setDuracion = {setDuracion}
          sliding = {sliding}
          setSliding = {setSliding}
          mode = {mode}
          setMode = {setMode}
          dateValue = {dateValue}
          setDateValue = {setDateValue}
          show = {show}
          setShow = {setShow}
          setIsVisible = {setIsVisible}
        />
        <ListaDeTarjetas 
          searchText={SearchText}
          distancia={distancia}
          duracion={duracion}
          categoriasActivas= {categoriasActivas}
          fecha = {dateValue}
         />
      </SafeAreaView>
    </TailwindProvider>
  );
};

export default HomeScreen;
