import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, useTheme } from '../theme';

export default function ItemCard({ item, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.card,
        { backgroundColor: theme.surface || theme.card || '#FFFFFF', borderColor: theme.cardBorder || theme.border || '#E5E7EB' },
      ]}
    >
      <View style={styles.header}>
        {item.logo ? (
          <Image source={typeof item.logo === 'string' ? { uri: item.logo } : item.logo} style={styles.logo} resizeMode="contain" />
        ) : (
          <View style={[styles.logoPlaceholder, { backgroundColor: colors.primarySoft || '#EEF2FF' }]}>
            <Ionicons name="business" size={22} color={colors.primary} />
          </View>
        )}
        <View style={styles.headerText}>
          <Text style={[styles.title, { color: theme.text }]}>{item.title}</Text>
          <Text style={[styles.subtitle, { color: theme.subText }]}>{item.company || item.category || 'Company'}</Text>
        </View>
        {item.type && (
          <View style={[styles.badge, { backgroundColor: colors.primarySoft || '#EEF2FF' }]}>
            <Text style={[styles.badgeText, { color: colors.primary }]}>{item.type}</Text>
          </View>
        )}
      </View>

      <View style={styles.metaRow}>
        {item.location && (
          <View style={styles.metaItem}>
            <Ionicons name="location-outline" size={14} color={theme.subText} />
            <Text style={[styles.metaText, { color: theme.subText }]}>{item.location}</Text>
          </View>
        )}
        {item.salary && (
          <View style={styles.metaItem}>
            <Ionicons name="cash-outline" size={14} color={theme.subText} />
            <Text style={[styles.metaText, { color: colors.primary, fontWeight: '700' }]}>{item.salary}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: radius.lg || 16,
    borderWidth: 1,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
  },
  logoPlaceholder: {
    width: 42,
    height: 42,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
  },
});
