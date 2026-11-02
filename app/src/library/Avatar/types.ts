import { type ImageSource } from 'expo-image';

export type AvatarProps = {
  /** Initials shown when there is no image. */
  fallback: string;
  source?: ImageSource | number;
  size?: number;
};
