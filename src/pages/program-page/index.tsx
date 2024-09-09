import { FlatList, View } from "react-native";
import { ItemList } from "../../components/item-list";
import { PageTitle } from "../../components/page-tittle";
import { useProgram } from "./use-program";
import { makeStyle } from "./style";
import { SearchBar } from "../../components/search-bar";
import { RouteProp, useRoute } from "@react-navigation/native";

export type ProgramsType = {
  channelCode: string;
};

export function ProgramsPage() {
  const route = useRoute<RouteProp<{ params: ProgramsType }>>();
  const { channelCode } = route.params;
  const style = makeStyle();

  const {
    searchFilter,
    setSearchFilter,
    filterPrograms,
    saveFavoriteProgram,
    isFavoriteProgram,
    toggleFavorites,
    showFavorites,
    formatProgram,
  } = useProgram({ channelCode });

  return (
    <View>
      <PageTitle
        arrow={false}
        heart={true}
        title={showFavorites ? "Programas Favoritos" : "Programas"}
        onFavoritesClick={() => toggleFavorites()}
        isFavorites={showFavorites}
      />

      <SearchBar onChangeText={setSearchFilter} value={searchFilter} />

      <View style={style.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterPrograms()}
          renderItem={({ item }) => (
            <ItemList
              title={formatProgram(item)}
              desc={item.category}
              onFavorite={() => saveFavoriteProgram(item)}
              isFavorite={isFavoriteProgram(item)}
            />
          )}
        />
      </View>
    </View>
  );
}