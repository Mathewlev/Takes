import { Screen } from '@/library/Screen/Screen';
import { ThemedText } from '@/library/ThemedText/ThemedText';

/** Takes tab: open prompts to make takes on. */
export function TakesScreen() {
  return (
    <Screen title="Takes">
      <ThemedText themeColor="textSecondary">Open prompts to make your takes on.</ThemedText>
    </Screen>
  );
}
