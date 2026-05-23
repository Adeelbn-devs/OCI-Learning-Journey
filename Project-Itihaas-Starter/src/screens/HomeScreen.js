import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TimelineSlider from '../components/TimelineSlider';
import {
  getClosestSnapshot,
  vijayanagaraSnapshots,
  VIJAYANAGARA_TIMELINE_RANGE,
} from '../data/vijayanagaraData';

const SectionCard = ({ title, items }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    {items.map((item, idx) => (
      <Text key={`${title}-${idx}`} style={styles.bulletItem}>
        • {item}
      </Text>
    ))}
  </View>
);

const formatPinLabel = (pin) => {
  return `• ${pin.title} • ${pin.type.toUpperCase()} • ${pin.latitude.toFixed(4)}, ${pin.longitude.toFixed(4)}`;
};

const HomeScreen = () => {
  const [selectedYear, setSelectedYear] = useState(1520);

  const snapshot = useMemo(() => getClosestSnapshot(selectedYear), [selectedYear]);
  const keyYears = useMemo(
    () => vijayanagaraSnapshots.map((entry) => entry.year),
    []
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Project Itihaas</Text>
      <Text style={styles.subHeading}>Karnataka Phase • Vijayanagara Timeline</Text>

      <View style={styles.heroCard}>
        <Text style={styles.heroLabel}>Current Era</Text>
        <Text style={styles.heroTitle}>{snapshot.era}</Text>
        <Text style={styles.heroMeta}>Closest Historical Snapshot: {snapshot.year}</Text>
        <Text style={styles.heroMeta}>Ruler Focus: {snapshot.ruler}</Text>
      </View>

      <TimelineSlider
        minYear={VIJAYANAGARA_TIMELINE_RANGE.minYear}
        maxYear={VIJAYANAGARA_TIMELINE_RANGE.maxYear}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        keyYears={keyYears}
      />

      <SectionCard title="Wars (Step 3)" items={snapshot.wars} />
      <SectionCard title="Monuments Built / Impacted (Step 4)" items={snapshot.monuments} />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Map Pins (Preview)</Text>
        {snapshot.mapPins.map((pin) => (
          <Text key={pin.id} style={styles.pinText}>
            {formatPinLabel(pin)}
          </Text>
        ))}
        <Text style={styles.mapHint}>
          Next step: wire these pins + border layers into Mapbox/Google Maps with dynamic rendering by selected year.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 28,
    backgroundColor: '#090a0f',
    gap: 12,
  },
  heading: {
    color: '#f7f8fb',
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  subHeading: {
    color: '#9ea6bc',
    fontSize: 13,
  },
  heroCard: {
    backgroundColor: '#121521',
    borderRadius: 16,
    borderColor: '#262a3a',
    borderWidth: 1,
    padding: 14,
  },
  heroLabel: {
    color: '#d4af37',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  heroTitle: {
    color: '#edf0fa',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  heroMeta: {
    color: '#b8bfd4',
    fontSize: 13,
    marginTop: 2,
  },
  card: {
    backgroundColor: '#10131d',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#202536',
    padding: 14,
    gap: 8,
  },
  cardTitle: {
    color: '#e4e8f5',
    fontSize: 15,
    fontWeight: '700',
  },
  bulletItem: {
    color: '#c4cbe0',
    lineHeight: 20,
    fontSize: 13,
  },
  pinText: {
    color: '#bac2d9',
    lineHeight: 20,
    fontSize: 12,
  },
  mapHint: {
    color: '#8e96ad',
    marginTop: 6,
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default HomeScreen;
