import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

// subscribe for more videos like this :)
export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Semua kolom harus diisi");
      return;
    }

    if (password.length < 3) {
      Alert.alert("Error", "Password harus memiliki setidaknya 3 karakter");
      return;
    }

    // Simpan data registrasi ke penyimpanan lokal
    const userData = { name, email, password };
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      Alert.alert("Berhasil", "Data registrasi berhasil disimpan!");
      console.log("Data registrasi berhasil disimpan");
    } catch (error) {
      Alert.alert("Gagal", "Data registrasi gagal disimpan!");
      console.error("Gagal menyimpan data registrasi:", error);
    }

    // Redirect ke halaman login setelah registrasi berhasil
    navigation.navigate("Login");
  };

  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/signup.png")}
            style={{ width: 165, height: 110 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter Name"
          />
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter Email"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter Password"
          />
          <TouchableOpacity
            className="py-3 bg-yellow-400 rounded-xl"
            onPress={handleRegister}
          >
            <Text className="font-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
