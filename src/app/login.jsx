import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../theme';

export default function LoginScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  const [email, setEmail] = useState('Hassan.Designer@gmail.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.content}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={theme.text} />
        </TouchableOpacity>

        {/* Logo & Headline (Sketch: Login and get to work) */}
        <View style={styles.headerBox}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logoImg}
            resizeMode="contain"
          />
          <Text style={[styles.screenTitle, { color: colors.primary }]}>LogIn</Text>
          <Text style={[styles.subtitle, { color: theme.subText }]}>
            Login and get to work
          </Text>
        </View>

        {/* Input Fields */}
        <View style={styles.formContainer}>
          <Text style={[styles.inputLabel, { color: theme.text }]}>E-mail</Text>
          <View style={[styles.inputBox, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}>
            <Ionicons name="mail-outline" size={18} color={theme.subText} style={{ marginRight: 8 }} />
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={[styles.textInput, { color: theme.text }]}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <Text style={[styles.inputLabel, { color: theme.text, marginTop: 16 }]}>Password</Text>
          <View style={[styles.inputBox, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}>
            <Ionicons name="lock-closed-outline" size={18} color={theme.subText} style={{ marginRight: 8 }} />
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={[styles.textInput, { color: theme.text }]}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={18}
                color={theme.subText}
              />
            </TouchableOpacity>
          </View>

          {/* Forgot Password Link */}
          <TouchableOpacity
            style={styles.forgotBtn}
            onPress={() => router.push('/forgot-password')}
          >
            <Text style={[styles.forgotText, { color: colors.primary }]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Submit Login Action */}
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={[styles.submitBtn, { backgroundColor: colors.primary }]}
            onPress={() => router.replace('/(tabs)')}
            activeOpacity={0.85}
          >
            <Text style={styles.submitBtnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  backBtn: { width: 40, height: 40, justifyContent: 'center' },
  headerBox: { alignItems: 'center', marginTop: 10 },
  logoImg: { width: 56, height: 56, marginBottom: 16 },
  screenTitle: { fontSize: 32, fontWeight: '900', letterSpacing: -0.5 },
  subtitle: { fontSize: 14, fontWeight: '500', marginTop: 4 },
  formContainer: { marginVertical: 24 },
  inputLabel: { fontSize: 13, fontWeight: '700', marginBottom: 6 },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 14,
  },
  textInput: { flex: 1, fontSize: 15, fontWeight: '600' },
  forgotBtn: { alignSelf: 'flex-end', marginTop: 12 },
  forgotText: { fontSize: 13, fontWeight: '700' },
  bottomSection: { width: '100%', marginBottom: 12 },
  submitBtn: {
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 4,
  },
  submitBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
});
