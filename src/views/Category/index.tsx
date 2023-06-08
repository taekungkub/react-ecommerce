import { useEffect } from "react";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { fetchCategoryProducts, getAllCategoryProduct } from "../../store/slices/categorySlice";
import { useParams } from "react-router-dom";
import CardProduct from "../../components/CardProdct";
import { Grid } from "@mantine/core";
import PageTitleCategory from "../../components/PageTitleCategory";

function CategoryPage() {
  const categoryProducts = useSelector(getAllCategoryProduct);

  const { name } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategoryProducts(name as string));
  }, [dispatch, name]);

  const Items = categoryProducts.map((v) => (
    <Grid.Col xs={6} sm={4} key={v.id}>
      <CardProduct data={v} />
    </Grid.Col>
  ));

  return (
    <>
      <PageTitleCategory title={name as string} />
      <Grid>{Items}</Grid>
    </>
  );
}

export default CategoryPage;
