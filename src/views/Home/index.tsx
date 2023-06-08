import { useSelector } from "react-redux";
import { fetchProducts, getLaptops, getProductStatus, getSkincares, getSmarthphones } from "../../store/slices/productSlice";
import { Carousel } from "@mantine/carousel";
import { useAppDispatch } from "../../store/store";
import { useEffect } from "react";
import CardProduct from "../../components/CardProdct";
import SlideProducts from "../../components/SlideProduct";
import PageTitleProduct from "../../components/PageTitleProdut";

function HomePage() {
  const products = useSelector(getSmarthphones);
  const laptops = useSelector(getLaptops);
  const skincares = useSelector(getSkincares);

  const productStatus = useSelector(getProductStatus);
  const isLoading = productStatus === "loading";
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <PageTitleProduct title="Smarthphones" />
      <SlideProducts data={products} isLoading={isLoading} />
      <PageTitleProduct title="Laptops" />
      <SlideProducts data={laptops} isLoading={isLoading} />
      <PageTitleProduct title="Skincares" />
      <SlideProducts data={skincares} isLoading={isLoading} />
    </>
  );
}

export default HomePage;
