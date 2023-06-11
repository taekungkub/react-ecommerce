import ModalProductSlide from "@/components/ModalProductSlide";
import SlideImageDetail from "@/components/SlideImageDetail";
import { addtoCart } from "@/store/slices/cartSlice";
import { fetchOneProducts, getProduDataStatus } from "@/store/slices/productSlice";
import { getOneProduct } from "@/store/slices/productSlice";
import { useAppDispatch } from "@/store/store";
import { Button, Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const productData = useSelector(getOneProduct);
  const productStatus = useSelector(getProduDataStatus);

  const [isModalImageSlide, setIsModalImageSlide] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchOneProducts(id as string));
  }, [id, dispatch]);
  return (
    <>
      <Grid>
        <Grid.Col md={6}>
          <SlideImageDetail
            data={productData}
            onToggle={() => setIsModalImageSlide(!isModalImageSlide)}
            onIndexChange={(imageIndex: number) => setImageIndex(imageIndex)}
            index={imageIndex}
          />
        </Grid.Col>
        <Grid.Col md={6}>
          <Button
            onClick={() => {
              if (productData) {
                dispatch(
                  addtoCart({
                    id: productData?.id,
                    title: productData?.title,
                    price: productData?.price,
                    quantity: 1,
                    total: productData?.stock,
                    discountPercentage: productData?.discountPercentage,
                  })
                );
              }
            }}
            color="pink"
          >
            Add to cart
          </Button>

          <ModalProductSlide data={productData} opened={isModalImageSlide} setOpened={setIsModalImageSlide} index={imageIndex} />
        </Grid.Col>
      </Grid>
    </>
  );
}

export default ProductDetailPage;
