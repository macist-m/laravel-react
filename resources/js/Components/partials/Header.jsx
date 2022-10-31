import React from "react";
import {
  Header as TopBar,
  MediaQuery,
  Burger,
  Text,
  Group,
  Menu,
  ActionIcon,
  Avatar,
} from "@mantine/core";

import { IconUser, IconLogout } from "@tabler/icons";
import { formatDateFull } from "@/utils/helpers";
import { Link, usePage } from "@inertiajs/inertia-react";

const Header = ({ opened, onMenuToogle }) => {
  const { auth } = usePage().props;

  return (
    <TopBar height={70} p="md">
      <Group position="apart" sx={{ height: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => onMenuToogle()}
              size="sm"
              mr="xl"
            />
          </MediaQuery>

          <Text>LOGO</Text>
        </div>

        <div className="">
          <Menu position="bottom-end">
            <Menu.Target>
              <ActionIcon variant="filled">
                <Avatar radius="xl" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconUser size={16} />}>
                {auth.user.email}
              </Menu.Item>
              <Menu.Item
                icon={<IconLogout size={16} />}
                component={Link}
                href="/logout"
                method="post"
                as="button"
                type="button"
              >
                Çıkış Yap
              </Menu.Item>
              <Menu.Divider />
              <Menu.Label>{formatDateFull(new Date())}</Menu.Label>
            </Menu.Dropdown>
          </Menu>
        </div>
      </Group>
    </TopBar>
  );
};

export default Header;
