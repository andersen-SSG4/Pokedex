import HomeRow from '@/components/HomeRow';
import { usePokemons } from '@/hooks/pokemonHooks';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const { error, isLoading, pokemons, loadMore } = usePokemons();

  return (
    <View style={styles.container}>
      {
        isLoading
          ? (
              <ActivityIndicator size="large" />
            )
          : error
            ? (
                <Text>Error!</Text>
              )
            : pokemons && (
              <FlatList
                data={pokemons}
                onEndReached={loadMore}
                renderItem={({ item }) => (
                  <HomeRow item={item} />
                )}
              />
            )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
