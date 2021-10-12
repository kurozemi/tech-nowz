import React from 'react'
import styles from './Category.style';
import { Container, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import ProductItem from '../ProductItem/ProductItem';

const Category = ({ categoryName, productList }) => {
    if (productList.length === 0) return <></>;
    return (
        <Container maxWidth="lg" sx={{ marginTop: '60px' }}>
            <Box sx={styles.category}>
                <Typography gutterBottom variant="h5" component="div" sx={styles.categoryTitle}>{categoryName}</Typography>
                <Button size="small" sx={styles.viewMoreBtn}>View more</Button>
            </Box>
            <Grid container spacing={{ xs: 1, md: 3, lg: 3.5 }}>
                {productList.map(product => (
                    <Grid item xs={6} md={4} lg={3} key={product.productID}>
                        <ProductItem
                            product={product}
                            key={product.productID}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Category