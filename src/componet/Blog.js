import React from 'react'
import Titels from './Titels'
import Nav from './Nav'
import Footer from './Footer'
import { Box, Container, Grid, Typography } from '@mui/material'
import Carddata from './Card'

function Blog() {
    return (
        <>
            <Box sx={{ backgroundColor: "black" }}>
                <Nav />
                <Titels Name={"Blog"} url={"https://wordpress.themeholy.com/fitkit/wp-content/themes/fitkit/assets/img/breadcumb-thumb.png"} />

                <Box sx={{paddingTop:"90px"}}>
                    <Container sx={{ border: "1px solid #3e3b3b", padding: "10px", }}>
                        <Grid container sx={{ alignItems: "center", textAlign: "center" }}>
                            <Grid item xs={3}  >
                                <img src="https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/blog-detials-top-1-2.png" alt="" style={{
                                    width: "175px",
                                    height: "125px"
                                }} />

                            </Grid>
                            <Grid item xs={7}>
                                <Typography sx={{
                                    fontSize: "28px",
                                    fontFamily: "teko",
                                    fontWeight: "600",
                                    transition: "color 0.1s ease-in-out",
                                    lineHeight: "100%",
                                    marginBottom: "6px",
                                    color: "white",
                                    ":hover": { color: "#F67A45" },
                                    transition: "all 0.5s"
                                }}>
                                    MIND OVER MATTER: THE IMPORTANCE OF HEALTH IN FITNESS
                                </Typography>
                                <Typography sx={{
                                    margin: "0px",
                                    padding: "0px",
                                    fontWeight: "400",
                                    lineheight: "24px",
                                    color: "#E7E7E7",
                                    fontFamily: "sans-serif"
                                }}>Consistency is key when it comes to reaching your fitness goals. Our blog is here to provide you with tips,…</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <button className='button'>Read More</button>
                            </Grid>
                        </Grid>


                    </Container>



                </Box>


                {/* 222222222222222222222222 */}

                <Box sx={{paddingTop:"70px"}}>
                    <Container sx={{ border: "1px solid #3e3b3b", padding: "10px", }}>
                        <Grid container sx={{ alignItems: "center", textAlign: "center" }}>
                            <Grid item xs={3}  >
                                <img src="https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/blog-detials-top-1-4.png" alt="" style={{
                                    width: "175px",
                                    height: "125px"
                                }} />

                            </Grid>
                            <Grid item xs={7}>
                                <Typography sx={{
                                    fontSize: "28px",
                                    fontFamily: "teko",
                                    fontWeight: "600",
                                    transition: "color 0.1s ease-in-out",
                                    lineHeight: "100%",
                                    marginBottom: "6px",
                                    color: "white",
                                    ":hover": { color: "#F67A45" },
                                    transition: "all 0.5s"
                                }}>
                                   STRATEGIES FOR OVERCOMING FITNESS PLATEAUS AND ACHIEVING
                                </Typography>
                                <Typography sx={{
                                    margin: "0px",
                                    padding: "0px",
                                    fontWeight: "400",
                                    lineheight: "24px",
                                    color: "#E7E7E7",
                                    fontFamily: "sans-serif"
                                }}>Cardio is essential for heart health and burning calories. Explore our blog for exciting cardio workouts that can be done…</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <button className='button'>Read More</button>
                            </Grid>
                        </Grid>


                    </Container>
                </Box>




                {/* 3333333333333333 */}


                <Box sx={{paddingTop:"90px"}}>
                    <Container sx={{ border: "1px solid #3e3b3b", padding: "10px", }}>
                        <Grid container sx={{ alignItems: "center", textAlign: "center" }}>
                            <Grid item xs={3}  >
                                <img src="https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/blog-detials-top-1-5.png " alt="" style={{
                                    width: "175px",
                                    height: "125px"
                                }} />

                            </Grid>
                            <Grid item xs={7}>
                                <Typography sx={{
                                    fontSize: "28px",
                                    fontFamily: "teko",
                                    fontWeight: "600",
                                    transition: "color 0.1s ease-in-out",
                                    lineHeight: "100%",
                                    marginBottom: "6px",
                                    color: "white",
                                    ":hover": { color: "#F67A45" },
                                    transition: "all 0.5s"
                                }}>
                                    FUEL YOUR WORKOUT: A GUIDE TO PRE- AND POST-WORKOUT
                                </Typography>
                                <Typography sx={{
                                    margin: "0px",
                                    padding: "0px",
                                    fontWeight: "400",
                                    lineheight: "24px",
                                    color: "#E7E7E7",
                                    fontFamily: "sans-serif"
                                }}>Recovery is just as important as your workouts. Dive into our blog to learn about the best practices for muscle…</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <button className='button'>Read More</button>
                            </Grid>
                        </Grid>


                    </Container>
                </Box>



                {/* 444444444444444444444444 */}

                <Box sx={{paddingTop:"90px"}}>
                    <Container sx={{ border: "1px solid #3e3b3b", padding: "10px", }}>
                        <Grid container sx={{ alignItems: "center", textAlign: "center" }}>
                            <Grid item xs={3}  >
                                <img src="https://wpriverthemes.com/gymfito/wp-content/uploads/2024/08/blog-detials-top-1.png" alt="" style={{
                                    width: "175px",
                                    height: "125px"
                                }} />

                            </Grid>
                            <Grid item xs={7}>
                                <Typography sx={{
                                    fontSize: "28px",
                                    fontFamily: "teko",
                                    fontWeight: "600",
                                    transition: "color 0.1s ease-in-out",
                                    lineHeight: "100%",
                                    marginBottom: "6px",
                                    color: "white",
                                    ":hover": { color: "#F67A45" },
                                    transition: "all 0.5s"
                                }}>
                                  FITNESS POTENTIAL: EXPERT TIPS FOR MAXIMIZING EXPERIENCE
                                </Typography>
                                <Typography sx={{
                                    margin: "0px",
                                    padding: "0px",
                                    fontWeight: "400",
                                    lineheight: "24px",
                                    color: "#E7E7E7",
                                    fontFamily: "sans-serif"
                                }}>Welcome to our gym’s official blog! We’re thrilled to have you here as we embark on a journey towards better…</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <button className='button'>Read More</button>
                            </Grid>
                        </Grid>


                    </Container>

                                

                </Box>

                            <Carddata/>
                <Footer />
            </Box>
        </>
    )
}

export default Blog