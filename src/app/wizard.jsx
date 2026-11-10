import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../theme';

export default function WizardScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const [selectedRole, setSelectedRole] = useState('Candidate');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={theme.text} />
        </TouchableOpacity>

        {/* Logo & Headline (Sketch: Who are You?) */}
        <View style={styles.headerBox}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logoImg}
            resizeMode="contain"
          />
          <Text style={[styles.screenTitle, { color: colors.primary }]}>
            Who are You?
          </Text>
          <Text style={[styles.subtitle, { color: theme.subText }]}>
            Choose whether you are looking for jobs or hiring talent
          </Text>
        </View>

        {/* Selection Cards (Sketch: Company / Candidate) */}
        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={[
              styles.roleCard,
              {
                backgroundColor: theme.surface,
                borderColor: selectedRole === 'Candidate' ? colors.primary : theme.cardBorder,
                borderWidth: selectedRole === 'Candidate' ? 2 : 1,
              },
            ]}
            onPress={() => setSelectedRole('Candidate')}
          >
            <View style={[styles.iconCircle, { backgroundColor: colors.primarySoft }]}>
              <Ionicons name="person" size={28} color={colors.primary} />
            </View>
            <Text style={[styles.roleTitle, { color: theme.text }]}>Candidate</Text>
            <Text style={[styles.roleDesc, { color: theme.subText }]}>
              I want to discover opportunities, apply to jobs, and track my applications.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleCard,
              {
                backgroundColor: theme.surface,
                borderColor: selectedRole === 'Company' ? colors.primary : theme.cardBorder,
                borderWidth: selectedRole === 'Company' ? 2 : 1,
              },
            ]}
            onPress={() => setSelectedRole('Company')}
          >
            <View style={[styles.iconCircle, { backgroundColor: colors.primarySoft }]}>
              <Ionicons name="business" size={28} color={colors.primary} />
            </View>
            <Text style={[styles.roleTitle, { color: theme.text }]}>Company</Text>
            <Text style={[styles.roleDesc, { color: theme.subText }]}>
              I want to post vacancies, review resumes, and recruit verified talent.
            </Text>
          </TouchableOpacity>
        </View>

        {/* Continue Action */}
        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={[styles.continueBtn, { backgroundColor: colors.primary }]}
            onPress={() => router.replace('/(tabs)')}
            activeOpacity={0.85}
          >
            <Text style={styles.continueText}>Continue as {selectedRole}</Text>
            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
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
  screenTitle: { fontSize: 30, fontWeight: '900', letterSpacing: -0.5 },
  subtitle: { fontSize: 13, textAlign: 'center', fontWeight: '500', marginTop: 6, paddingHorizontal: 16 },
  cardsContainer: { gap: 16, marginVertical: 20 },
  roleCard: {
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  roleTitle: { fontSize: 18, fontWeight: '800', marginBottom: 4 },
  roleDesc: { fontSize: 12, textAlign: 'center', lineHeight: 18 },
  bottomSection: { width: '100%', marginBottom: 12 },
  continueBtn: {
    height: 54,
    borderRadius: 27,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  continueText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
});
