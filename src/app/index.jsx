import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../theme';
import { appInfo } from '../data';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.content}>
        {/* Top Logo (Sketch logo) */}
        <View style={styles.topHeader}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logoImg}
            resizeMode="contain"
          />
        </View>

        {/* Hero Illustration (Sketch onboarding photo) */}
        <View style={styles.heroWrapper}>
          <View style={[styles.heroCircle, { backgroundColor: colors.primarySoft }]}>
            <Image
              source={require('../assets/images/onboarding_person.png')}
              style={styles.heroPerson}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Headline & Welcome (Sketch: Don't wait for Opportunity / Welcome) */}
        <View style={styles.textContainer}>
          <Text style={[styles.mainHeadline, { color: colors.primary }]}>
            {"Don't wait for\nOpportunity"}
          </Text>
          <Text style={[styles.welcomeTitle, { color: theme.text }]}>Welcome</Text>
          <Text style={[styles.description, { color: theme.subText }]}>
            {appInfo.welcomeDesc}
          </Text>
        </View>

        {/* Action Buttons: SignIn & SignUp (Sketch SignIn & SignUp) */}
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={[styles.signInBtn, { backgroundColor: colors.primary }]}
            onPress={() => router.push('/login')}
            activeOpacity={0.85}
          >
            <Text style={styles.signInText}>SignIn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.signUpBtn, { backgroundColor: theme.surface, borderColor: colors.primary }]}
            onPress={() => router.push('/wizard')}
            activeOpacity={0.85}
          >
            <Text style={[styles.signUpText, { color: colors.primary }]}>SignUp</Text>
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
  topHeader: { alignItems: 'center', marginTop: 8 },
  logoImg: { width: 52, height: 52 },
  heroWrapper: { alignItems: 'center', marginVertical: 12 },
  heroCircle: {
    width: width * 0.65,
    height: width * 0.65,
    borderRadius: (width * 0.65) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heroPerson: { width: '85%', height: '85%' },
  textContainer: { alignItems: 'center', paddingHorizontal: 12 },
  mainHeadline: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 8,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    fontWeight: '400',
  },
  buttonsRow: { flexDirection: 'row', gap: 14, width: '100%', marginBottom: 12 },
  signInBtn: {
    flex: 1,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  signInText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
  signUpBtn: {
    flex: 1,
    height: 52,
    borderRadius: 26,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: { fontSize: 16, fontWeight: '800' },
});
