import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { images } from './imageList';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    console.log("Current Index:", currentIndex);
    console.log("Current Image Object:", images[currentIndex]);
    console.log("Current Image URL:", images[currentIndex].url);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={images[currentIndex].url}
        style={styles.image}
        onError={(error) => console.log("Image Load Error:", error.nativeEvent.error)}
      />
      <Text style={styles.description}>
        {images[currentIndex].description}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Previous"
          onPress={handlePrevious}
          disabled={currentIndex === 0}
        />
        <Button
          title="Next"
          onPress={handleNext}
          disabled={currentIndex === images.length - 1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300, // Adjusting height to match width
    marginBottom: 10,
    backgroundColor: '#ccc',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default Gallery;