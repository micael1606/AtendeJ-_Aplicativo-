import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Cores dinâmicas baseadas na identidade do AtendeJá
  const activeColor = '#FF9F00'; // Laranja para o item selecionado
  const inactiveColor = colorScheme === 'dark' ? '#5A728A' : '#A0AEC0'; // Cinza azulado para inativos
  const backgroundColor = colorScheme === 'dark' ? '#001A36' : '#FFFFFF';

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: backgroundColor,
          borderTopWidth: 0, 
          elevation: 15, 
          shadowColor: '#002B5B', 
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.08,
          shadowRadius: 12,
          height: Platform.OS === 'ios' ? 90 : 70, 
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          marginTop: 4,
        },
      }}>
      
      {/* 1. TELA PRINCIPAL (Início) */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="house.fill" color={color} />,
        }}
      />

      {/* 2. TELA DE ENTRADA (Login/Boas-vindas) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Conta',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="person.crop.circle.fill" color={color} />,
          // O SEGREDO ESTÁ AQUI: Esconde a barra nesta tela!
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
}