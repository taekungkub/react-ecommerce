import { Button, Flex, Group, ThemeIcon, Title } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import SortDropdown from "./SortDropdown";

interface Props {
  title: string;
}
function PageTitleCategory({ title }: Props) {
  const mockData = [
    { label: "ราคาต่ำไปสูง", value: "lowest_price" },
    { label: "ราคาสูงไปต่ำ", value: "hihgest_price" },
    { label: "ตามสินค้าที่มีในสต๊อก", value: "stock" },
  ];
  return (
    <>
      <Group position="apart" mb={12}>
        <Flex align={"center"}>
          <Title order={4} mt={4} ml={"md"}>
            {title}
          </Title>
        </Flex>
        <SortDropdown data={mockData} />
      </Group>
    </>
  );
}

export default PageTitleCategory;
