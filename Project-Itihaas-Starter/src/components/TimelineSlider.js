import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

const TimelineSlider = ({ minYear, maxYear, selectedYear, onYearChange, keyYears = [] }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>Time-Travel Timeline</Text>
        <Text style={styles.year}>{selectedYear}</Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={minYear}
        maximumValue={maxYear}
        step={1}
        value={selectedYear}
        onValueChange={onYearChange}
        minimumTrackTintColor="#d4af37"
        maximumTrackTintColor="#3a3d4a"
        thumbTintColor="#f9c74f"
      />

      <View style={styles.scaleRow}>
        <Text style={styles.scaleText}>{minYear}</Text>
        <Text style={styles.scaleText}>{maxYear}</Text>
      </View>

      <View style={styles.keyYearsRow}>
        {keyYears.map((year) => (
          <View key={year} style={styles.keyYearPill}>
            <Text style={styles.keyYearText}>{year}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#11131a',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#222530',
    marginTop: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: '#cbd2e3',
    fontSize: 14,
    letterSpacing: 0.4,
  },
  year: {
    color: '#f9c74f',
    fontSize: 20,
    fontWeight: '700',
  },
  slider: {
    width: '100%',
    height: 36,
  },
  scaleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -2,
  },
  scaleText: {
    color: '#8d93a6',
    fontSize: 12,
  },
  keyYearsRow: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  keyYearPill: {
    backgroundColor: '#1b1f2b',
    borderColor: '#2a2e3b',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  keyYearText: {
    color: '#d8def0',
    fontSize: 12,
  },
});

export default TimelineSlider;
