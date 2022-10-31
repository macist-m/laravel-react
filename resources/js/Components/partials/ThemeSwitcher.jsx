import React from "react";
import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

const ThemeSwitcher = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Switch
      ml={-16}
      checked={colorScheme === "dark"}
      onChange={() => toggleColorScheme()}
      size="md"
      onLabel={<IconSun color={theme.white} size={17} stroke={1.5} />}
      offLabel={
        <IconMoonStars color={theme.colors.gray[6]} size={17} stroke={1.5} />
      }
    />
  );
};

export default ThemeSwitcher;
