import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../theme';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  const [step, setStep] = useState(1); // 1 = OTP, 2 = New Password
  const [pin, setPin] = useState(['9', '2', '1', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleVerify = () => {
    setStep(2);
  };

  const handleSubmitNewPassword = () => {
    Alert.alert('Success', 'Your new password has been set. Please login.', [
      { text: 'Go to Login', onPress: () => router.replace('/login') },
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={theme.text} />
        </TouchableOpacity>

        {step === 1 ? (
          <View style={styles.stepBox}>
            <Text style={[styles.screenTitle, { color: colors.primary }]}>
              Enter 4 Digit Code
            </Text>
            <Text style={[styles.subtitle, { color: theme.subText }]}>
              We have sent you a code to verify your phone number +92 3127764515
            </Text>

            {/* 4 Digit Boxes (Sketch pin code: 9 2 1 ...) */}
            <View style={styles.pinBoxesRow}>
              {pin.map((digit, idx) => (
                <View
                  key={idx}
                  style={[styles.pinBox, { backgroundColor: theme.surface, borderColor: colors.primary }]}
                >
                  <Text style={[styles.pinDigit, { color: theme.text }]}>
                    {digit || '•'}
                  </Text>
                </View>
              ))}
            </View>

            <View style={styles.resendRow}>
              <Text style={{ color: theme.subText, fontSize: 13 }}>Didn't receive OPT ? </Text>
              <TouchableOpacity onPress={() => Alert.alert('OTP Sent', 'New code sent to +92 3127764515')}>
                <Text style={{ color: colors.primary, fontSize: 13, fontWeight: '800' }}>
                  Send Again
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[styles.actionBtn, { backgroundColor: colors.primary }]}
              onPress={handleVerify}
            >
              <Text style={styles.actionBtnText}>Verify</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.stepBox}>
            <Text style={[styles.screenTitle, { color: colors.primary }]}>
              Enter New Password
            </Text>
            <Text style={[styles.subtitle, { color: theme.subText }]}>
              Please enter your new secure password
            </Text>

            <View style={styles.formContainer}>
              <Text style={[styles.inputLabel, { color: theme.text }]}>Password</Text>
              <TextInput
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
                placeholder="Enter password"
                placeholderTextColor={theme.subText}
                style={[styles.inputBox, { backgroundColor: theme.surface, borderColor: theme.cardBorder, color: theme.text }]}
              />

              <Text style={[styles.inputLabel, { color: theme.text, marginTop: 14 }]}>Confirm Password</Text>
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholder="Confirm password"
                placeholderTextColor={theme.subText}
                style={[styles.inputBox, { backgroundColor: theme.surface, borderColor: theme.cardBorder, color: theme.text }]}
              />
            </View>

            <TouchableOpacity
              style={[styles.actionBtn, { backgroundColor: colors.primary }]}
              onPress={handleSubmitNewPassword}
            >
              <Text style={styles.actionBtnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 28, paddingVertical: 20 },
  backBtn: { width: 40, height: 40, justifyContent: 'center', marginBottom: 20 },
  stepBox: { flex: 1, justifyContent: 'center' },
  screenTitle: { fontSize: 28, fontWeight: '900', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, textAlign: 'center', lineHeight: 22, marginBottom: 28, paddingHorizontal: 16 },
  pinBoxesRow: { flexDirection: 'row', justifyContent: 'center', gap: 14, marginBottom: 24 },
  pinBox: {
    width: 60,
    height: 60,
    borderRadius: 16,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinDigit: { fontSize: 24, fontWeight: '900' },
  resendRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 32 },
  actionBtn: {
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
  formContainer: { marginVertical: 24 },
  inputLabel: { fontSize: 13, fontWeight: '700', marginBottom: 6 },
  inputBox: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    paddingHorizontal: 14,
    fontSize: 15,
    fontWeight: '600',
  },
});
