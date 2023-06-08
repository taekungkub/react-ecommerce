import { Button, Menu } from "@mantine/core";
import { IconAlignJustified, IconChevronDown, IconSelector, IconSortDescending2 } from "@tabler/icons-react";
import { useSearchParams } from "react-router-dom";

interface Props {
  data: {
    label: string;
    value: string;
  }[];
}

function SortDropdown({ data }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const Items = data.map((v) => <Menu.Item key={v.value}>{v.label}</Menu.Item>);

  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button variant="light" rightIcon={<IconSortDescending2 />} color="gray.9">
            Filter
          </Button>
        </Menu.Target>

        <Menu.Dropdown>{Items}</Menu.Dropdown>
      </Menu>
    </>
  );
}

export default SortDropdown;
