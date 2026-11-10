import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { colors, radius, useTheme } from '../theme';
import { jobsList } from '../data';

export default function JobDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { theme } = useTheme();

  const [isSaved, setIsSaved] = useState(false);
  const [applied, setApplied] = useState(false);

  const job = jobsList.find((j) => j.id === params.id) || jobsList[0];

  const handleApply = () => {
    setApplied(true);
    Alert.alert(
      'Application Submitted! 🎉',
      `Your resume has been forwarded to ${job.company} for the ${job.title} role.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* Top Header Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.roundBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={theme.text} />
        </TouchableOpacity>

        <Text style={[styles.topTitle, { color: theme.text }]}>Job Detail</Text>

        <TouchableOpacity style={styles.roundBtn} onPress={() => setIsSaved(!isSaved)}>
          <Ionicons
            name={isSaved ? 'bookmark' : 'bookmark-outline'}
            size={22}
            color={isSaved ? colors.primary : theme.text}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Company Header Box */}
        <View style={[styles.headerCard, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}>
          <Image source={job.logo} style={styles.largeLogo} resizeMode="contain" />
          <Text style={[styles.detailTitle, { color: theme.text }]}>{job.title}</Text>
          <Text style={[styles.detailCompany, { color: theme.subText }]}>{job.company}</Text>

          <View style={styles.badgesRow}>
            <View style={[styles.badgePill, { backgroundColor: colors.primarySoft }]}>
              <Text style={[styles.badgeText, { color: colors.primary }]}>{job.type}</Text>
            </View>
            <View style={[styles.badgePill, { backgroundColor: theme.surfaceSubtle }]}>
              <Text style={[styles.badgeText, { color: theme.text }]}>{job.salary}</Text>
            </View>
          </View>
        </View>

        {/* Skills Section (Sketch: Skills / SQL, PHP, C#, MVC.net) */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Skills</Text>
        <View style={styles.skillsWrapper}>
          {job.skills.map((s) => (
            <View key={s} style={[styles.skillBadge, { backgroundColor: colors.primarySoft }]}>
              <Text style={[styles.skillBadgeText, { color: colors.primary }]}>{s}</Text>
            </View>
          ))}
        </View>

        {/* Education & Experience */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Education & Experience:</Text>
        <View style={[styles.infoBox, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}>
          <Text style={[styles.infoParagraph, { color: theme.text }]}>
            • Bachelor's Degree in Computer Science, Software Engineering or equivalent experience.
          </Text>
          <Text style={[styles.infoParagraph, { color: theme.text, marginTop: 6 }]}>
            • 3+ years experience with C#, SQL databases, and enterprise architecture.
          </Text>
        </View>

        {/* Job Description (Exact text from Sketch AST) */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Job Discription</Text>
        <View style={[styles.descBox, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}>
          <Text style={[styles.descText, { color: theme.text }]}>
            Design and write efficient, complicated modules or complex programs to meet customer requirements.
          </Text>
          <Text style={[styles.descText, { color: theme.text, marginTop: 8 }]}>
            Interact with analysts, users, and business stakeholders to gather, understand, and develop technical requirements.
          </Text>
          <Text style={[styles.descText, { color: theme.text, marginTop: 8 }]}>
            Coordinate systems analysis, systems development and implementation activities to ensure customer requirements are met.
          </Text>
          <Text style={[styles.descText, { color: theme.text, marginTop: 8 }]}>
            Organize and prepare program and system documentation according to established procedures to facilitate ongoing support and maintenance.
          </Text>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Sticky Action: Apply for this Job (Sketch: Apply for this Job) */}
      <View style={[styles.bottomBar, { backgroundColor: theme.surface, borderTopColor: theme.cardBorder }]}>
        <TouchableOpacity
          style={[
            styles.applyBtn,
            { backgroundColor: applied ? colors.success : colors.primary },
          ]}
          onPress={handleApply}
          activeOpacity={0.85}
        >
          <Text style={styles.applyBtnText}>
            {applied ? 'Applied ✓' : 'Apply for this Job'}
          </Text>
        </TouchableOpacity>
      </View>
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
  roundBtn: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
  topTitle: { fontSize: 18, fontWeight: '800' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 24 },
  headerCard: {
    padding: 20,
    borderRadius: 22,
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: 12,
  },
  largeLogo: { width: 64, height: 64, borderRadius: 16, marginBottom: 12 },
  detailTitle: { fontSize: 22, fontWeight: '900', textAlign: 'center' },
  detailCompany: { fontSize: 14, fontWeight: '500', marginTop: 4, marginBottom: 12 },
  badgesRow: { flexDirection: 'row', gap: 8 },
  badgePill: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: radius.full },
  badgeText: { fontSize: 12, fontWeight: '800' },
  sectionTitle: { fontSize: 16, fontWeight: '800', marginTop: 18, marginBottom: 10 },
  skillsWrapper: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  skillBadge: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 10 },
  skillBadgeText: { fontSize: 13, fontWeight: '800' },
  infoBox: { padding: 16, borderRadius: 16, borderWidth: 1 },
  infoParagraph: { fontSize: 13, lineHeight: 20 },
  descBox: { padding: 16, borderRadius: 16, borderWidth: 1 },
  descText: { fontSize: 13, lineHeight: 20 },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
  },
  applyBtn: {
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' },
});
