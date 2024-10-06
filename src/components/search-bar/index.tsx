import { Search, X } from "lucide-react-native";
import { Pressable, TextInput, View } from "react-native";
import { makeStyle } from "./style";

export type SearchBarType = {
  onChangeText: (value: string) => void;
  value: string;
};

export function SearchBar({ onChangeText, value }: SearchBarType) {
  const style = makeStyle();
  return (
    <View style={style.searchBarWrapper}>
      <Search color={style.searchBar.color} />
      <TextInput
        placeholder="procurar em canais"
        style={style.searchBar}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={style.searchBar.color}
      />
      <Pressable onPress={() => onChangeText("")}>
        <View style={style.iconWrapper}>
          <X color={style.icon.color} />
        </View>
      </Pressable>
    </View>
  );
}
