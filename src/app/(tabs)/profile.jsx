import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../../theme';
import { userProfile } from '../../data';

export default function ProfileScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={[styles.screenTitle, { color: colors.primary }]}>Candidate Profile</Text>
        <TouchableOpacity onPress={() => router.push('/invite')}>
          <Ionicons name="share-social-outline" size={22} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile Avatar Card (Sketch candidate profile: Hassan Shabbir) */}
        <View style={[styles.avatarCard, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}>
          <Image source={userProfile.avatar} style={styles.avatarImg} />
          <Text style={[styles.userName, { color: theme.text }]}>{userProfile.name}</Text>
          <Text style={[styles.userRole, { color: colors.primary }]}>{userProfile.role}</Text>
          <Text style={[styles.userLoc, { color: theme.subText }]}>{userProfile.location}</Text>
        </View>

        {/* Contact Information (Sketch: First Name, Last Name, Email, Mobile No) */}
        <Text style={[styles.sectionHeading, { color: theme.text }]}>Contact Details</Text>
        <View style={[styles.infoCard, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.subText }]}>First Name</Text>
            <Text style={[styles.infoValue, { color: theme.text }]}>{userProfile.firstName}</Text>
          </View>
          <View style={[styles.divider, { backgroundColor: theme.divider }]} />
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.subText }]}>Last Name</Text>
            <Text style={[styles.infoValue, { color: theme.text }]}>{userProfile.lastName}</Text>
          </View>
          <View style={[styles.divider, { backgroundColor: theme.divider }]} />
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.subText }]}>E-mail</Text>
            <Text style={[styles.infoValue, { color: theme.text }]}>{userProfile.email}</Text>
          </View>
          <View style={[styles.divider, { backgroundColor: theme.divider }]} />
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: theme.subText }]}>Mobile No</Text>
            <Text style={[styles.infoValue, { color: theme.text }]}>{userProfile.phone}</Text>
          </View>
        </View>

        {/* Profile Options (Sketch filter artboard: Change Profile Picture, Upload Intro Video, Logout) */}
        <Text style={[styles.sectionHeading, { color: theme.text, marginTop: 20 }]}>
          Profile Actions
        </Text>
        <View style={styles.actionsList}>
          <TouchableOpacity style={[styles.actionItem, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}>
            <Ionicons name="camera-outline" size={20} color={colors.primary} />
            <Text style={[styles.actionItemText, { color: theme.text }]}>Change Profile Picture</Text>
            <Ionicons name="chevron-forward" size={16} color={theme.subText} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionItem, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}>
            <Ionicons name="videocam-outline" size={20} color={colors.primary} />
            <Text style={[styles.actionItemText, { color: theme.text }]}>Upload Intro Video</Text>
            <Ionicons name="chevron-forward" size={16} color={theme.subText} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionItem, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}
            onPress={() => router.replace('/login')}
          >
            <Ionicons name="log-out-outline" size={20} color={colors.dark} />
            <Text style={[styles.actionItemText, { color: colors.dark, fontWeight: '800' }]}>Logout</Text>
            <Ionicons name="chevron-forward" size={16} color={theme.subText} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  screenTitle: { fontSize: 24, fontWeight: '900', letterSpacing: -0.4 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 24 },
  avatarCard: {
    padding: 20,
    borderRadius: 22,
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: 12,
  },
  avatarImg: { width: 84, height: 84, borderRadius: 42, marginBottom: 12, backgroundColor: '#E5E7EB' },
  userName: { fontSize: 20, fontWeight: '900' },
  userRole: { fontSize: 13, fontWeight: '700', marginTop: 4 },
  userLoc: { fontSize: 12, fontWeight: '500', marginTop: 4 },
  sectionHeading: { fontSize: 16, fontWeight: '800', marginBottom: 10, marginTop: 12 },
  infoCard: { padding: 16, borderRadius: 18, borderWidth: 1 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  infoLabel: { fontSize: 13, fontWeight: '600' },
  infoValue: { fontSize: 14, fontWeight: '800' },
  divider: { height: 1 },
  actionsList: { gap: 10 },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
  },
  actionItemText: { marginLeft: 12, flex: 1, fontSize: 14, fontWeight: '700' },
});
