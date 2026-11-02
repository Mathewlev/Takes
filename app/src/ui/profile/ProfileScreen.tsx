import { Screen } from '@/library/Screen/Screen';
import { ThemedText } from '@/library/ThemedText/ThemedText';

/** Profile tab: your takes, TBs, and account info. */
export function ProfileScreen() {
  return (
    <Screen title="Profile">
      <ThemedText themeColor="textSecondary">Your takes, TBs, and account info.</ThemedText>
    </Screen>
  );
}
