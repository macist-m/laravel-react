import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import route from "ziggy-js";
import { Link } from "@inertiajs/inertia-react";

import {
  createStyles,
  Navbar,
  AppShell,
  Header,
  Container,
  MediaQuery,
  Burger,
  Text,
  ScrollArea,
  Paper,
} from "@mantine/core";
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from "@tabler/icons";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

const data = [
  { link: "", label: "Notifications", icon: IconBellRinging },
  { link: "", label: "Billing", icon: IconReceipt2 },
  { link: "", label: "Security", icon: IconFingerprint },
  { link: "", label: "SSH Keys", icon: IconKey },
  { link: "", label: "Databases", icon: IconDatabaseImport },
  { link: "", label: "Authentication", icon: Icon2fa },
  { link: "", label: "Other Settings", icon: IconSettings },
];

export default function Authenticated({ auth, header, children }) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");
  const [opened, setOpened] = useState(false);

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const Nav = () => {
    return (
      <Navbar
        height={"calc(100vh - 75)"}
        p="md"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 200, lg: 300 }}
      >
        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          {links}
        </Navbar.Section>

        <Navbar.Section>Footer</Navbar.Section>
      </Navbar>
    );
  };

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<Nav />}
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            </MediaQuery>

            <Text>LOGO</Text>
          </div>
        </Header>
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

    // <div className="min-h-screen bg-gray-100">
    //   <nav className="bg-white border-b border-gray-100">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex justify-between h-16">
    //         <div className="flex">
    //           <div className="shrink-0 flex items-center">
    //             <Link href="/">
    //               <ApplicationLogo className="block h-9 w-auto text-gray-500" />
    //             </Link>
    //           </div>

    //           <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
    //             <NavLink
    //               href={route("dashboard")}
    //               active={route().current("dashboard")}
    //             >
    //               Dashboard
    //             </NavLink>
    //           </div>
    //         </div>

    //         <div className="hidden sm:flex sm:items-center sm:ml-6">
    //           <div className="ml-3 relative">
    //             <Dropdown>
    //               <Dropdown.Trigger>
    //                 <span className="inline-flex rounded-md">
    //                   <button
    //                     type="button"
    //                     className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
    //                   >
    //                     {auth.user.name}

    //                     <svg
    //                       className="ml-2 -mr-0.5 h-4 w-4"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       viewBox="0 0 20 20"
    //                       fill="currentColor"
    //                     >
    //                       <path
    //                         fillRule="evenodd"
    //                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                         clipRule="evenodd"
    //                       />
    //                     </svg>
    //                   </button>
    //                 </span>
    //               </Dropdown.Trigger>

    //               <Dropdown.Content>
    //                 <Dropdown.Link
    //                   href={route("logout")}
    //                   method="post"
    //                   as="button"
    //                 >
    //                   Log Out
    //                 </Dropdown.Link>
    //               </Dropdown.Content>
    //             </Dropdown>
    //           </div>
    //         </div>

    //         <div className="-mr-2 flex items-center sm:hidden">
    //           <button
    //             onClick={() =>
    //               setShowingNavigationDropdown(
    //                 (previousState) => !previousState
    //               )
    //             }
    //             className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
    //           >
    //             <svg
    //               className="h-6 w-6"
    //               stroke="currentColor"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 className={
    //                   !showingNavigationDropdown ? "inline-flex" : "hidden"
    //                 }
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M4 6h16M4 12h16M4 18h16"
    //               />
    //               <path
    //                 className={
    //                   showingNavigationDropdown ? "inline-flex" : "hidden"
    //                 }
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     <div
    //       className={
    //         (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"
    //       }
    //     >
    //       <div className="pt-2 pb-3 space-y-1">
    //         <ResponsiveNavLink
    //           href={route("dashboard")}
    //           active={route().current("dashboard")}
    //         >
    //           Dashboard
    //         </ResponsiveNavLink>
    //       </div>

    //       <div className="pt-4 pb-1 border-t border-gray-200">
    //         <div className="px-4">
    //           <div className="font-medium text-base text-gray-800">
    //             {auth.user.name}
    //           </div>
    //           <div className="font-medium text-sm text-gray-500">
    //             {auth.user.email}
    //           </div>
    //         </div>

    //         <div className="mt-3 space-y-1">
    //           <ResponsiveNavLink
    //             method="post"
    //             href={route("logout")}
    //             as="button"
    //           >
    //             Log Out
    //           </ResponsiveNavLink>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>

    //   {header && (
    //     <header className="bg-white shadow">
    //       <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    //         {header}
    //       </div>
    //     </header>
    //   )}

    //   <main>{children}</main>
    // </div>
  );
}
