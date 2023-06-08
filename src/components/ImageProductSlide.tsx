import { ProductTy } from "@/Typing/Typing";
import { Carousel } from "@mantine/carousel";
import { Box, Button, Flex, Group, Image, Modal, Paper, createStyles, rem } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  content: {
    background: "transparent",
  },
}));

interface Props {
  data: ProductTy | null;
}

function ImageProductSlide({ data }: Props) {
  const { classes } = useStyles();

  const [opened, setOpened] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const Items = data?.images.map((image, i) => (
    <Carousel.Slide key={image}>
      <Paper radius={"md"} h={"100%"} bg={"white"} sx={{ overflow: "hidden" }}>
        <Image src={image} fit="contain" height={500} />
      </Paper>
    </Carousel.Slide>
  ));
  const Items2 = data?.images.map((image, i) => (
    <Paper key={i} radius={"md"} h={"100%"} bg={"white"} sx={{ overflow: "hidden" }} onClick={() => setImageIndex(i)}>
      <Image src={image} fit="contain" width={100} height={100} bg={"white"} />
    </Paper>
  ));

  return (
    <>
      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open modal with carousel</Button>
      </Group>

      <Modal
        size="lg"
        centered
        opened={opened}
        withCloseButton={false}
        onClose={() => setOpened(false)}
        classNames={{ content: classes.content }}
      >
        <Carousel
          draggable={false}
          align={"center"}
          slideGap={"md"}
          loop
          initialSlide={imageIndex}
          onSlideChange={(index) => setImageIndex(index)}
        >
          {Items}
        </Carousel>

        <Flex wrap={"wrap"} justify={"center"} gap={10} mt={12}>
          {Items2}
        </Flex>
      </Modal>
    </>
  );
}

export default ImageProductSlide;
