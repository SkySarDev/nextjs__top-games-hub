import { IconType } from 'react-icons'
import {
  SiWindows,
  SiPlaystation,
  SiXbox,
  SiLinux,
  SiApple,
  SiD3Dotjs,
  SiAtari,
  SiSega,
  SiAndroid,
  SiIos,
  SiNintendo,
  SiInternetexplorer,
  SiApplearcade,
} from 'react-icons/si'
import { BiGame } from 'react-icons/bi'

type PlatformsIcons = {
  [key: string]: IconType
}

export const platformsIcons: PlatformsIcons = {
  pc: SiWindows,
  playstation: SiPlaystation,
  xbox: SiXbox,
  linux: SiLinux,
  mac: SiApple,
  android: SiAndroid,
  ios: SiIos,
  nintendo: SiNintendo,
  atari: SiAtari,
  sega: SiSega,
  '3do': SiD3Dotjs,
  web: SiInternetexplorer,
  'neo-geo': BiGame,
  'commodore-amiga': SiApplearcade,
}
