import { View, Image, Text, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';

const ProfileScreen = () => {

    const [isEditable, setIsEditable] = useState(false);
    const [username, setUsername] = useState('Gato_Gatito');
    const [password, setPassword] = useState('password123');

    const handleUnlockFields = () => {
        setIsEditable(true);
    };

    const handleSave = () => {
        // Lógica para guardar los cambios
        setIsEditable(false);
    };

    const handleCancel = () => {
        // Lógica para cancelar los cambios
        setIsEditable(false);
    };

    return (
        <SafeAreaView className='bg-white h-full w-full'>
            <Image
                className='h-full w-full absolute'
                source={require('../../assets/images/background.png')}
            />
            <View className='flex items-center space-y-3 h-full w-full py-16'>
                <View className='flex items-center space-y-3 h-1/3 w-full'>
                    <Image
                        className='w-36 h-36 rounded-full'
                        source={require('../../assets/images/profile_sample.png')} />
                    <Text className="font-bold text-xl text-white">Hola</Text>
                    <View className="rounded-lg overflow-hidden shadow-md bg-white px-4 py-1">
                        <Text className="font-bold text-xl mb-2 text-blue-950">Nombre del Usuario</Text>
                    </View>
                </View>
                <View className='flex space-y-1 h-2/3 w-full py-20'>
                    <View className="items-center mb-4">
                        <TouchableOpacity onPress={handleUnlockFields} className="bg-blue-500 p-2 rounded">
                            <Text className="text-white">Editar Datos de Acceso</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="mb-4 px-6">
                        <Text className="text-lg font-bold mb-2">Username</Text>
                        <TextInput
                            className="border border-gray-300 rounded p-2"
                            value={username}
                            onChangeText={setUsername}
                            editable={isEditable}
                        />
                    </View>

                    <View className="mb-4 px-6">
                        <Text className="text-lg font-bold mb-2">Password</Text>
                        <TextInput
                            className="border border-gray-300 rounded p-2"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            editable={isEditable}
                        />
                    </View>

                    {isEditable && (
                        <View className="mt-4 w-full flex flex-row px-16 justify-around h-auto">
                            <TouchableOpacity onPress={handleSave} className="bg-green-500 p-2 rounded mb-2 w-2/5 h-10">
                                <Text className="text-white text-center">Guardar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCancel} className="bg-red-500 p-2 rounded w-2/5 h-10">
                                <Text className="text-white text-center">Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

            </View>

        </SafeAreaView>
    )
}

export default ProfileScreen