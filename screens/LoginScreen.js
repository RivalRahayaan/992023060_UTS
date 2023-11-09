import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan password harus diisi");
      return;
    }

    if (password.length < 3) {
      Alert.alert("Error", "Password harus memiliki setidaknya 6 karakter");
      return;
    }

    try {
      // Ambil data registrasi dari penyimpanan lokal
      const userData = await AsyncStorage.getItem("userData");

      if (userData) {
        const parsedUserData = JSON.parse(userData);

        if (
          parsedUserData.email === email &&
          parsedUserData.password === password
        ) {
          // Data login sesuai dengan data registrasi yang ada
          // Redirect ke halaman utama
          navigation.navigate("HalamanHome");
          return;
        }
      }

      // Jika tidak ada data registrasi yang cocok atau data tidak tersedia
      Alert.alert("Error", "Email atau password salah");
    } catch (error) {
      console.error("Gagal mengambil data registrasi:", error);
    }
  };

  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex ">
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
            source={require("../assets/images/login.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        className="flex-1 bg-white px-8 pt-8"
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            placeholder="password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity className="flex items-end">
            <Text className="text-gray-700 mb-5">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-3 bg-yellow-400 rounded-xl"
            onPress={handleLogin}
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="font-semibold text-yellow-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
