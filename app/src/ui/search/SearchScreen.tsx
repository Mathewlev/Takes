import { Screen } from '@/library/Screen/Screen';
import { ThemedText } from '@/library/ThemedText/ThemedText';

/** Search tab: find users to follow. */
export function SearchScreen() {
  return (
    <Screen title="Search">
      <ThemedText themeColor="textSecondary">Find other users and follow them.</ThemedText>
    </Screen>
  );
}
