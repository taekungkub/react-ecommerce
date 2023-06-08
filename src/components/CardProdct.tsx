import { AspectRatio, Badge, Card, Group, Image, Paper, Text, createStyles, getStylesRef, rem } from "@mantine/core";
import { ProductTy } from "../Typing/Typing";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "hidden",
    [`&:hover .${getStylesRef("image")}`]: {
      scale: "1.1",
    },
  },

  section: {
    borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  image: {
    ref: getStylesRef("image"),
    transition: "scale 500ms ease",
  },
}));

interface Props {
  data: ProductTy;
}
function CardProduct({ data }: Props) {
  const navigate = useNavigate();

  const { classes } = useStyles();

  return (
    <>
      <Card shadow="md" radius={"md"} onClick={() => navigate("/product/" + data.id)} className={classes.card}>
        <Card.Section>
          <Image src={data.thumbnail} fit="cover" height={250} className={classes.image} />
        </Card.Section>
        <Card.Section className={classes.section} mt="lg">
          <Text>{data.title}</Text>
          <Text color="dark" fz={"bold"} mt={5}>
            $ {data.price}
          </Text>
        </Card.Section>
      </Card>
    </>
  );
}

export default CardProduct;
