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

export default function InviteScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  const [email, setEmail] = useState('Hassan.Designer@gmail.com');
  const [message, setMessage] = useState('Hey! Join Job Seeking App to explore verified tech opportunities.');

  const handleSendInvite = () => {
    Alert.alert('Invitation Sent! ✉️', `Invite link sent to ${email}.`, [
      { text: 'Done', onPress: () => router.back() },
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={theme.text} />
        </TouchableOpacity>

        <View style={styles.headerBox}>
          <View style={[styles.iconCircle, { backgroundColor: colors.primarySoft }]}>
            <Ionicons name="paper-plane" size={32} color={colors.primary} />
          </View>
          <Text style={[styles.screenTitle, { color: colors.primary }]}>Invite Friend</Text>
          <Text style={[styles.subtitle, { color: theme.subText }]}>
            Share opportunities and earn referral bonuses together
          </Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={[styles.inputLabel, { color: theme.text }]}>E-mail</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={[styles.inputBox, { backgroundColor: theme.surface, borderColor: theme.cardBorder, color: theme.text }]}
            keyboardType="email-address"
          />

          <Text style={[styles.inputLabel, { color: theme.text, marginTop: 14 }]}>Text area</Text>
          <TextInput
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
            style={[styles.textArea, { backgroundColor: theme.surface, borderColor: theme.cardBorder, color: theme.text }]}
          />
        </View>

        <TouchableOpacity
          style={[styles.submitBtn, { backgroundColor: colors.primary }]}
          onPress={handleSendInvite}
        >
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 28, paddingVertical: 20 },
  backBtn: { width: 40, height: 40, justifyContent: 'center' },
  headerBox: { alignItems: 'center', marginVertical: 20 },
  iconCircle: { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  screenTitle: { fontSize: 28, fontWeight: '900' },
  subtitle: { fontSize: 13, textAlign: 'center', marginTop: 4 },
  formContainer: { marginVertical: 20 },
  inputLabel: { fontSize: 13, fontWeight: '700', marginBottom: 6 },
  inputBox: { height: 50, borderRadius: 14, borderWidth: 1, paddingHorizontal: 14, fontSize: 15, fontWeight: '600' },
  textArea: { height: 100, borderRadius: 14, borderWidth: 1, padding: 14, fontSize: 14, textAlignVertical: 'top' },
  submitBtn: { height: 54, borderRadius: 27, justifyContent: 'center', alignItems: 'center' },
  submitBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
});
