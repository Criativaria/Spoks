import { Heart } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { makeStyle } from "./styles";
import { useThemeContext } from "../../context/theme/hooks/use-theme-context";

type ItemListType = {
  onFavorite: () => void;
  isFavorite: boolean;
  title: string;
  desc: string;
  onClick?: () => void;
};

type ResumeTextType = {
  text: string;
  limit: number;
};

const truncateText = (text: string, limit: number) => {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

export function ItemList({
  title,
  desc,
  onFavorite,
  isFavorite,
  onClick,
}: ItemListType) {
  const style = makeStyle();
  const { theme } = useThemeContext();

  const truncatedTitle = truncateText(title, 55);  // Limite de caracteres para o título
  const truncatedDesc = truncateText(desc, 30);    // Limite de caracteres para a descrição

  return (
    <View style={style.wrapper}>
      <Pressable onPress={onClick}>
        <View style={style.textWrapper}>
          <Text style={style.tittle}>
            {truncatedTitle}
          </Text>
          <Text style={style.desc}>
            {truncatedDesc}
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={() => onFavorite()}>
        <Heart
          color={isFavorite ? theme.primary : theme.text}
          strokeWidth={2}
          size={25}
          fill={isFavorite ? theme.primary : theme.light_grey}
        />
      </Pressable>
    </View>
  );
}