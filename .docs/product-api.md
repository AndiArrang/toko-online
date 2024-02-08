# PRODUCT API

##  Get Products By Search API

Endpoint : GET /api/product/search

Request Body :
 ```json
 {
    "query": "kata kunci pencarian"
 }
 ```

Response Body Success : 

```json
{
    "data": {
        "products": [
            {
                "product_id" : 1,
                "category_id": 1,
                "seller_id": 1,
                "product_image_id": 1,
                "name": "Adidas",
                "name_lower": "adidas",
                "weight": 20,
                "price": 10000,
                "stock": 10,
                "categorys": [
                    {
                        "cotegory_id": 1,
                        "name": "Brand",
                    },
                    {
                        "cotegory_id": 2,
                        "name": "Clothes",
                    }
                ],
                "seller": {
                    "seller_id": 1,
                    "address_id": 1,
                    "name": "Original Clothes"
                }, 
                "product_image": [
                    {
                       "product_image_id": 1,
                       "image_url": "url image product" 
                    }
                ]

            },...
        ] 
    }
}
```

## Create Product API

Endpoint : POST /api/product

Headers: 
- Authorization : token

Request Body : 

```json
{
    "category_id": 1,
    "seller_id": 1,
    "product_image_id": 1,
    "name": "Adidas",
    "name_lower": "adidas",
    "weight": 20,
    "price": 10000,
    "stock": 10
}
```

Response Body Success :

```json
{
    "postdata": {
        "product_id" : 1,
        "category_id": 1,
        "seller_id": 1,
        "product_image_id": 1,
        "name": "Adidas",
        "name_lower": "adidas",
        "weight": 20,
        "price": 10000,
    }
}
```


## Update Product API

Endpoint : PATCH /api/product/:id

Headers: 
- Authorization : token

Request Body : 

```json
{
    "category_id": 1,
    "product_image_id": 1,
    "name": "nike",
    "name_lower": "Nike",
    "weight": 20,
    "price": 110000,
    "stock": 10,
}
```

Response Body Success :

```json
{
    "postdata": {
        "category_id": 1,
        "product_image_id": 2,
        "name": "nike",
        "name_lower": "Nike",
        "weight": 20,
        "price": 110000,
        "stock": 10,

    }
}
```

## Remove Product API

Endpoint : DELETE /api/product/:id

Headers: 
- Authorization : token

Response Body Success :

```json
{
    "data": "Ok"
}
```
