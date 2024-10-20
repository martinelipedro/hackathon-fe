import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Icons for the cards

export interface TipCardProps {
    dicaText: string;
    curiosityText: string;
}

const TipCard = (props: TipCardProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.tipCard]}>
        <View style={styles.cardHeaderYellow}>
          <Icon name="lightbulb-outline" size={18} color="#fff" />
          <Text style={styles.tipTitle}>Dica</Text>
        </View>
        <Text style={styles.cardText}>
          {props.dicaText}
        </Text>
      </View>

      <View style={[styles.card, styles.curiosityCard]}>
        <View style={styles.cardHeaderCurio}>
          <Icon name="help-circle-outline" size={18} color="#fff" />
          <Text style={styles.curiosityTitle}>Curiosidade</Text>
        </View>
        <Text style={styles.cardText}>
          {props.curiosityText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  cardHeaderYellow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignSelf: 'flex-start',
    padding: 6,
    paddingTop: 3,
    backgroundColor: '#ffaa00',
    paddingBottom: 3,
    borderRadius: 20
  },
  cardText: {
    fontSize: 16    ,
    color: '#4a4a4a',
    alignSelf: 'flex-start',
  },
  tipCard: {
    backgroundColor: '#fff5d9', 
  },
  curiosityCard: {
    backgroundColor: '#d8f0eb', 
  },
  tipTitle: {
    color: '#fff', 
    fontWeight: 'bold',
    marginLeft: 5,
  },
  curiosityTitle: {
    color: '#fff', 
    fontWeight: 'bold',
    marginLeft: 5,
  },
  cardHeaderCurio: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginBottom: 10,
    padding: 6,
    paddingTop: 3,
    backgroundColor: '#209da3',
    paddingBottom: 3,
    width: 'auto',
    borderRadius: 20
  },
});

export default TipCard;
