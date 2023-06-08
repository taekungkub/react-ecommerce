import { ProductTy } from "@/Typing/Typing";
import { Carousel } from "@mantine/carousel";
import { Image, createStyles } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles({
  image: {
    border: "2px solid transparent ",
  },
  imageActive: {
    border: "2px solid tomato",
  },
});

interface Props {
  data?: ProductTy | null;
}

function SlideImageDetail({ data }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const { classes, cx } = useStyles();

  const Items = data?.images.map((image, i) => (
    <Carousel.Slide key={image}>
      <Image src={image} fit="contain" mah={500} height={500} />
    </Carousel.Slide>
  ));

  const Items2 = data?.images.map((image, i) => (
    <Carousel.Slide key={image}>
      <Image
        src={image}
        fit="contain"
        mah={250}
        height={100}
        onClick={() => setImageIndex(i)}
        className={cx(classes.image, { [classes.imageActive]: imageIndex === i })}
        bg={"white"}
        h={"100%"}
      />
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel
        mah={500}
        height={"500"}
        withControls={false}
        initialSlide={imageIndex}
        onSlideChange={(index) => setImageIndex(index)}
        bg={"white"}
      >
        {Items}
      </Carousel>
      <Carousel
        draggable={false}
        mah={250}
        height={"auto"}
        slideSize="20%"
        slideGap="md"
        align={"start"}
        slidesToScroll={"auto"}
        withControls={false}
        initialSlide={imageIndex}
        mt={12}
      >
        {Items2}
      </Carousel>
    </>
  );
}

export default SlideImageDetail;
