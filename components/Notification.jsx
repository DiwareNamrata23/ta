import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const Notification = () => {
  return (
    <ScrollView style={styles.container}>
      {/* First Notification */}
      <View style={styles.notification}>
        <Text style={styles.time}>Today, 10:20</Text>
        <Text style={styles.title}>LIMITED-TIME PROMO - UP TO 50% OFF!</Text>
        <Text style={styles.description}>
          Don’t miss out on this special opportunity! Get up to 50% off on all our sports shoes. Check out our latest collection now!
        </Text>
      </View>

      {/* Second Notification */}
      <View style={[styles.notification, styles.urgent]}>
        <Text style={styles.time}>Today, 09:05</Text>
        <Text style={styles.title}>FLASH SALE ALERT - SAVE BIG TODAY!</Text>
        <Text style={styles.description}>
          Hurry, our flash sale is live now! Grab your favorite sports shoes at unbeatable prices. This offer won't last long!
        </Text>
      </View>

      {/* Third Notification */}
      <View style={styles.notification}>
        <Text style={styles.time}>Yesterday, 08:10</Text>
        <Text style={styles.title}>GOOD MORNING, RUNNER!</Text>
        <Text style={styles.description}>
          It’s time to step out and run. Give your best to your body today. Find comfort in every step.
        </Text>
      </View>

      {/* Fourth Notification */}
      <View style={styles.notification}>
        <Text style={styles.time}>July 13, 2023, 17:30</Text>
        <Text style={styles.title}>EXCLUSIVE DISCOUNT JUST FOR YOU</Text>
        <Text style={styles.description}>
          Hello loyal customers! We want to reward you with an exclusive 15% discount on all our shoe products. Use the code 'EXCLUSIVE15' at checkout.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  notification: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  urgent: {
    backgroundColor: '#FFF4E1', // Light orange for the urgent notification
  },
  time: {
    color: '#888',
    fontSize: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default Notification;
