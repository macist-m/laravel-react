import React from "react";
import {
  Input,
  Title,
  Group,
  SegmentedControl,
  SimpleGrid,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons";

const Header = ({
  title,
  search,
  searchField,
  searchVal,
  onSearchFieldChange,
  onSearchValChange,
}) => {
  return (
    <SimpleGrid
      cols={2}
      spacing={0}
      sx={{ width: "100%" }}
      breakpoints={[{ maxWidth: 600, cols: 1 }]}
    >
      <Title order={3}>{title}</Title>

      <Group position="right" spacing={5}>
        <SegmentedControl
          size="xs"
          data={search.fields}
          value={searchField}
          onChange={(val) => {
            onSearchFieldChange(val);
          }}
        />
        <Input
          size="xs"
          variant="filled"
          icon={<IconSearch size={14} />}
          placeholder="ara..."
          value={searchVal}
          onChange={(event) => {
            onSearchValChange(event.target.value);
          }}
        />
      </Group>
    </SimpleGrid>
  );
};

export default Header;
