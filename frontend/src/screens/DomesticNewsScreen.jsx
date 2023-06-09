import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  List,
  Box,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  CardHeader,
  StackDivider,
  HStack,
  Spinner,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { fetchTech, newsApiAction } from "../actions/newsActions";
import GridComponent from "../components/Grid";
import dayjs from "dayjs";
const DomesticNewsScreen = () => {
  const news_api = useSelector((state) => state.newsApi);
  const { news, loading, error } = news_api;
  const [image, setImage] = useState([]);
  const [data, setdata] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await axios.get(
      //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=9500a99b9aff4259b23997fd87c3a9e0"
      "https://gnews.io/api/v4/top-headlines?apikey=eb4a33f5bcd518f6cf3f8cea8c5f03ef&country=pk"
      // "https://newsdata.io/api/1/news?apikey=pub_187859473556247569161391d633964d2f723&language=en"
    );
    setImage(data.data.articles.map((data) => data.image));
    setdata(data.data.articles);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setLoading1(false);
      }, 1000);
    }
  }, []);

  return (
    <>
      <>
        {data.length !== 0 ? (
          <>
            <Stack display={{ base: "none", md: "flex" }}>
              <Box style={{ margin: "30px" }}>
                <Skeleton
                  gridTemplateColumns="repeat(8,1fr)"
                  gridTemplateRows="repeat(8,6.6vh)"
                  gap={4}
                  style={{ maxWidth: "90%", margin: "auto" }}
                  isLoaded={!loading1}
                >
                  <Grid
                    gridTemplateColumns="repeat(8,1fr)"
                    gridTemplateRows="repeat(8,6.6vh)"
                    gap={4}
                    style={{ maxWidth: "90%", margin: "auto" }}
                  >
                    <Box
                      style={{
                        gridRowStart: "1",
                        gridRowEnd: "9",
                        gridColumnStart: "1",
                        gridColumnEnd: "5",
                        position: "relative",
                      }}
                    >
                      <Image className="img" src={image[0]} alt="" />
                    </Box>

                    <GridItem
                      gridRowEnd={5}
                      gridRowStart={1}
                      gridColumnStart={5}
                      gridColumnEnd={9}
                      style={{ position: "relative" }}
                    >
                      <Image className="img" src={image[1]} alt="" />
                    </GridItem>

                    <GridItem
                      gridRowEnd={9}
                      gridRowStart={5}
                      gridColumnStart={5}
                      gridColumnEnd={7}
                      style={{ position: "relative" }}
                    >
                      <Image className="img" src={image[2]} alt="" />
                    </GridItem>
                    <GridItem
                      gridRowEnd={9}
                      gridRowStart={5}
                      gridColumnStart={7}
                      gridColumnEnd={9}
                      style={{ position: "relative" }}
                    >
                      <Image className="img" src={image[3]} alt="" />
                    </GridItem>
                  </Grid>
                </Skeleton>
              </Box>
              <SimpleGrid columns={4} gap={5} style={{ margin: "auto" }}>
                {data.map((news) => {
                  const B = ({ children }) => (
                    <span style={{ fontWeight: "bold" }}>{children}</span>
                  );

                  let date = news.publishedAt;
                  let id = dayjs(news.publishedAt).unix();
                  let newDate = dayjs(date).format("MMMM D, YYYY");
                  return (
                    <Skeleton isLoaded={!loading1}>
                      <Card maxW="xs">
                        <a href={`/news/${id}`}>
                          <CardBody>
                            <Image src={news.image} />
                            <Stack mt="6" spacing="3">
                              <Heading size="md">{news.title}</Heading>
                              <Text noOfLines={3}>{news.description}</Text>
                            </Stack>
                          </CardBody>
                        </a>
                        <Divider />
                        <CardFooter>
                          <Text>
                            Published At: <B>{newDate}</B>
                          </Text>
                        </CardFooter>
                      </Card>
                    </Skeleton>
                  );
                })}
                {/* {news.slice(4).map((item, index) => {
              // let date = item.publishedAt;
              // let newDate = dayjs(date).format("MMMM D, YYYY");

              return <NewsCard news={item} loading={loading1} />;
            })} */}
              </SimpleGrid>
            </Stack>

            <Stack display={{ md: "none" }}>
              <Box style={{ margin: "30px" }}>
                <Grid
                  // h="500px"
                  gridTemplateColumns="repeat(8,1fr)"
                  gridTemplateRows="repeat(18,6vh)"
                  gap={4}
                  // gridAutoFlow="dense"
                  // justifyContent="center"
                  // py="15px"
                  // display={{ lg: "none" }}
                  style={{ maxWidth: "90%", margin: "auto" }}
                >
                  <Box
                    style={{
                      gridRowStart: "1",
                      gridRowEnd: "5",
                      gridColumnStart: "1",
                      gridColumnEnd: "9",
                      position: "relative",
                    }}
                  >
                    <Image className="img" src={image[0]} alt="" />
                  </Box>
                  <GridItem
                    gridRowEnd={10}
                    gridRowStart={5}
                    gridColumnStart={1}
                    gridColumnEnd={9}
                    bg="tomato"
                    style={{ position: "relative" }}
                  >
                    <Image className="img" src={image[1]} alt="" />
                  </GridItem>

                  <GridItem
                    gridRowEnd={15}
                    gridRowStart={10}
                    gridColumnStart={1}
                    gridColumnEnd={9}
                    bg="tomato"
                    style={{ position: "relative" }}
                  >
                    <Image className="img" src={image[2]} alt="" />
                  </GridItem>
                  <GridItem
                    gridRowEnd={20}
                    gridRowStart={15}
                    gridColumnStart={1}
                    gridColumnEnd={9}
                    bg="tomato"
                    style={{ position: "relative" }}
                  >
                    <Image className="img" src={image[3]} alt="" />
                  </GridItem>
                  {/* <GridItem colSpan={2} bg="papayawhip" />
         <GridItem colSpan={2} bg="papayawhip" />
         <GridItem colSpan={4} bg="tomato" /> */}
                </Grid>
              </Box>
            </Stack>
          </>
        ) : (
          <>
            <Stack py={100} align="center">
              <Heading>Sorry The Limit Has Been Reached</Heading>
            </Stack>
          </>
        )}
      </>
    </>
  );
};

export default DomesticNewsScreen;
