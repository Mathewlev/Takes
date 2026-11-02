import { Screen } from '@/library/Screen/Screen';
import { ThemedText } from '@/library/ThemedText/ThemedText';

/** Home tab: feed of other users' takes. */
export function HomeScreen() {
  return (
    <Screen title="Home">
      <ThemedText themeColor="textSecondary">Takes from around the league will show up here.</ThemedText>
    </Screen>
  );
}
