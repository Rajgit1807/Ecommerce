import React, { useEffect, useState } from 'react'
import MainCarousel from '../Carousel/MainCarousel'
import HomeSectionCarousel from '../HomeSectionCarousel/HomeSectionCarousel'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../../State/Product/Action'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();

  const {products} = useSelector(store=>store)


  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const colorValue = searchParams.get("color");
  const sizeValue = searchParams.get("size");
  const priceValue = searchParams.get("price");
  const discount = searchParams.get("discount");
  const sortValue = searchParams.get("sort");
  const pageNumber = searchParams.get("page") || 1;
  const stock = searchParams.get("stock");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const [minPrice,maxPrice] = priceValue ===null?[0,10000]: priceValue.split("-").map(Number);
    const data ={
      category:param.levelThree,
      colors:colorValue || [],
      sizes:sizeValue | [],
      minPrice,
      maxPrice,
      minDiscount:discount || 0,
      sort : sortValue || "price_low",
      pageNumber : pageNumber,
      pageSize: 10,
      stock:stock
    }

    dispatch(findProducts(data))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));

  }, [param.levelThree,
    colorValue,
    sizeValue,
    priceValue,
    discount,
    sortValue,
    pageNumber,
    stock
  ])

  if (loading) {
    return <div>Loading...</div>; // Render a loading state while data is being fetched
  }

  if (!products?.products?.content || products.products.content.length === 0) {
    return <div>No products found</div>; // Handle case where no products are found
  }

  console.log("asdfafasf", products.products?.content)
  
  return (
    <div>
        <MainCarousel/>
        <div className='py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={products.products.content} sectionName={"Men's Kurta"}/>
        </div>

    </div>
  )
}

export default HomePage