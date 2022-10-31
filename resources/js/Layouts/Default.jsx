import React, { useState } from "react";
import Menu from "@/Components/partials/Menu";
import Header from "@/Components/partials/Header";
import { AppShell, Container, Paper } from "@mantine/core";

export default function Default({ children }) {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<Menu opened={opened} />}
      header={
        <Header opened={opened} onMenuToogle={() => setOpened((o) => !o)} />
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container size={1540} px={0}>
        <Paper
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark" ? "#0c111b" : theme.colors.gray[0],
            padding: theme.spacing.md,
            borderRadius: theme.radius.md,
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
              padding: 0,
            },
          })}
        >
          {children}
        </Paper>
      </Container>
    </AppShell>
  );
}
