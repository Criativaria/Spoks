import { ActivityIndicator, Image, Pressable, Text } from "react-native";
import { makeStyle } from "./style";

export type GoogleButtonType = {
  title: string;
  isLoading?: boolean;
  onPress: () => void;
};

export function GoogleButton({
  title,
  isLoading = false,
  onPress,
}: GoogleButtonType) {
  const style = makeStyle();

  return (
    <Pressable
      disabled={isLoading}
      style={style.buttonWrapper}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator size={"large"} color={"#E8E8E8"} />
      ) : (
        <>
          <Text style={style.text}>{title}</Text>
          <Image style={style.image}
            source={{ uri: 'https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png' }}
          />
        </>
      )}
    </Pressable>
  );
}
