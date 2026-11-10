import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, radius, useTheme } from '../../theme';
import { jobsList } from '../../data';

export default function JobsScreen() {
  const router = useRouter();
  const { theme, isDark, toggleTheme } = useTheme();

  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Full Time', 'Part Time', 'Remote'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      {/* Top Header */}
      <View style={styles.topHeader}>
        <View style={styles.titleCol}>
          <Text style={[styles.screenHeading, { color: colors.primary }]}>Explore Jobs</Text>
          <Text style={[styles.subHeading, { color: theme.subText }]}>
            Top vacancies for you
          </Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity
            style={[styles.iconBtn, { backgroundColor: theme.surface, marginRight: 8 }]}
            onPress={toggleTheme}
          >
            <Ionicons name={isDark ? 'sunny' : 'moon'} size={18} color={colors.primary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconBtn, { backgroundColor: theme.surface }]}
            onPress={() => router.push('/invite')}
          >
            <Ionicons name="person-add-outline" size={18} color={theme.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Input Bar (Sketch: Search jobs...) */}
      <View style={[styles.searchBox, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}>
        <Ionicons name="search-outline" size={18} color={theme.subText} style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search jobs..."
          placeholderTextColor={theme.subText}
          value={search}
          onChangeText={setSearch}
          style={[styles.searchInput, { color: theme.text }]}
        />
        {search ? (
          <TouchableOpacity onPress={() => setSearch('')}>
            <Ionicons name="close-circle" size={16} color={theme.subText} />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Employment Type Filter Chips (Sketch: Full Time / Part Time) */}
      <View style={styles.filterRow}>
        {filters.map((f) => {
          const active = selectedFilter === f;
          return (
            <TouchableOpacity
              key={f}
              style={[
                styles.filterChip,
                {
                  backgroundColor: active ? colors.primary : theme.surface,
                  borderColor: active ? colors.primary : theme.cardBorder,
                },
              ]}
              onPress={() => setSelectedFilter(f)}
            >
              <Text
                style={[
                  styles.filterText,
                  { color: active ? '#FFFFFF' : theme.text },
                ]}
              >
                {f}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Job Feed List */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.feedList}>
          {jobsList.map((job) => (
            <TouchableOpacity
              key={job.id}
              style={[
                styles.jobCard,
                { backgroundColor: theme.surface, borderColor: theme.cardBorder },
              ]}
              onPress={() =>
                router.push({
                  pathname: '/job-details',
                  params: {
                    id: job.id,
                    title: job.title,
                    company: job.company,
                    type: job.type,
                    salary: job.salary,
                  },
                })
              }
              activeOpacity={0.8}
            >
              <View style={styles.cardHeader}>
                <Image source={job.logo} style={styles.companyLogo} resizeMode="contain" />
                <View style={styles.cardHeaderTexts}>
                  <Text style={[styles.jobTitle, { color: theme.text }]}>{job.title}</Text>
                  <Text style={[styles.companyName, { color: theme.subText }]}>{job.company}</Text>
                </View>
                <View style={[styles.jobTypeBadge, { backgroundColor: colors.primarySoft }]}>
                  <Text style={[styles.jobTypeText, { color: colors.primary }]}>{job.type}</Text>
                </View>
              </View>

              <View style={styles.metaInfoRow}>
                <View style={styles.metaItem}>
                  <Ionicons name="location-outline" size={14} color={theme.subText} />
                  <Text style={[styles.metaText, { color: theme.subText }]}>{job.location}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Ionicons name="cash-outline" size={14} color={theme.subText} />
                  <Text style={[styles.metaText, { color: colors.primary, fontWeight: '700' }]}>
                    {job.salary}
                  </Text>
                </View>
              </View>

              {/* Skills Tags (Sketch: .Net Developer / SQL / PHP / C# / MVC.net) */}
              <View style={styles.skillsRow}>
                {job.skills.map((skill) => (
                  <View
                    key={skill}
                    style={[styles.skillTag, { backgroundColor: theme.surfaceSubtle }]}
                  >
                    <Text style={[styles.skillText, { color: theme.text }]}>{skill}</Text>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  titleCol: { flex: 1 },
  screenHeading: { fontSize: 26, fontWeight: '900', letterSpacing: -0.5 },
  subHeading: { fontSize: 13, fontWeight: '500', marginTop: 2 },
  headerRight: { flexDirection: 'row' },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 14,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 12,
  },
  searchInput: { flex: 1, fontSize: 14, fontWeight: '600' },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 16,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: radius.full,
    borderWidth: 1,
  },
  filterText: { fontSize: 12, fontWeight: '700' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 24 },
  feedList: { gap: 14 },
  jobCard: {
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  companyLogo: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#E5E7EB' },
  cardHeaderTexts: { marginLeft: 12, flex: 1 },
  jobTitle: { fontSize: 17, fontWeight: '800' },
  companyName: { fontSize: 13, fontWeight: '500', marginTop: 2 },
  jobTypeBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: radius.full },
  jobTypeText: { fontSize: 11, fontWeight: '800' },
  metaInfoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  metaText: { fontSize: 12 },
  skillsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  skillTag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  skillText: { fontSize: 11, fontWeight: '700' },
});
