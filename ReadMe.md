# Simple Ecommerce System

## User Login

URL = https://ecom.karanpatil.xyz/login

- [User Registeration](https://ecom.karanpatil.xyz/signup)

- [Admin Login](https://ecom.karanpatil.xyz/ui/admin/login)

## Login Credentials

| User Type |  Username  | Password |
| --------- | :--------: | -------: |
| User      | 8169157715 |    12345 |
| Admin     | 1234567890 |    12345 |

## POSTMAN DOC LINK

URL = https://documenter.getpostman.com/view/11871540/UVkvKYFo

# Project: Simple-Ecom

# 📁 Collection: User

## End-point: User Signup

### Method: POST

> ```
> https://ecom.karanpatil.xyz/user/signup
> ```

### Body (**raw**)

```json
{
  "name": "karan patil",
  "email": "karan2000patil@gmail.com",
  "phoneNumber": 8169157715,
  "password": "12345",
  "address": [
    {
      "street": "Karve Nagar, Kanjurmarg East",
      "pincode": 40044,
      "selected": true
    }
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User Login

### Method: POST

> ```
> http://localhost:8001/user/login
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: User Refresh Tokens

### Method: POST

> ```
> https://ecom.karanpatil.xyz/user/refresh
> ```

### Body (**raw**)

```json
{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJyZWZyZXNoIiwiaWF0IjoxNjQ2NDIwNTc2LCJleHAiOjE2NDkwMTI1NzZ9.zcAQo34_tCAScBZxczz7wpngdFf7MiU_cMyuRejG9xg",
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NDY0MjA1NzYsImV4cCI6MTY0NjQ1MDU3Nn0.7lNEtg1e-ppNqtMGeCj9aAoo6JxpND7tRT0w6P-B2T8"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Admin

## End-point: Admin Signup

### Method: POST

> ```
> https://ecom.karanpatil.xyz/admin/signup
> ```

### Body (**raw**)

```json
{
  "name": "karan patil",
  "email": "karan@admin.com",
  "phoneNumber": 1234567890,
  "password": "12345",
  "address": [
    {
      "street": "Karve Nagar, Kanjurmarg East",
      "pincode": 40044,
      "selected": true
    }
  ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Admin Login

### Method: POST

> ```
> https://ecom.karanpatil.xyz/admin/login
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Admin Refresh Tokens

### Method: POST

> ```
> https://ecom.karanpatil.xyz/admin/refresh
> ```

### Body (**raw**)

```json
{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJyZWZyZXNoIiwiaWF0IjoxNjQ2NDIwNTc2LCJleHAiOjE2NDkwMTI1NzZ9.zcAQo34_tCAScBZxczz7wpngdFf7MiU_cMyuRejG9xg",
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NDY0MjA1NzYsImV4cCI6MTY0NjQ1MDU3Nn0.7lNEtg1e-ppNqtMGeCj9aAoo6JxpND7tRT0w6P-B2T8"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Product

## End-point: Add Product

### Method: POST

> ```
> https://ecom.karanpatil.xyz/product/add
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get ALL Product

### Method: GET

> ```
> https://ecom.karanpatil.xyz/product/getAll
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Product

### Method: POST

> ```
> https://ecom.karanpatil.xyz/product/update
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete product

### Method: DELETE

> ```
> https://ecom.karanpatil.xyz/product/delete/62231357c662780631de9f88
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Cart

## End-point: Add to Cart

### Method: POST

> ```
> https://ecom.karanpatil.xyz/cart/add
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                            | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NDY1Mzg0MTksImV4cCI6MTY0NjU2ODQxOX0.JUl-OozAWar9bJbVnlUgeNhmeBBqhPblFqjDN2mNx-I | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get All Cart

### Method: GET

> ```
> https://ecom.karanpatil.xyz/cart/getAll
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                            | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NDY1Mzg0MTksImV4cCI6MTY0NjU2ODQxOX0.JUl-OozAWar9bJbVnlUgeNhmeBBqhPblFqjDN2mNx-I | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get Cart By id

### Method: GET

> ```
> https://ecom.karanpatil.xyz/cart/62243001e902e314192980a3
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                            | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NDY1Mzg0MTksImV4cCI6MTY0NjU2ODQxOX0.JUl-OozAWar9bJbVnlUgeNhmeBBqhPblFqjDN2mNx-I | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Cart

### Method: POST

> ```
> https://ecom.karanpatil.xyz/cart/update
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                            | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NDY1Mzg0MTksImV4cCI6MTY0NjU2ODQxOX0.JUl-OozAWar9bJbVnlUgeNhmeBBqhPblFqjDN2mNx-I | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Remove from cart

### Method: DELETE

> ```
> https://ecom.karanpatil.xyz/cart/delete/62243001e902e314192980a3
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                            | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NDY1Mzg0MTksImV4cCI6MTY0NjU2ODQxOX0.JUl-OozAWar9bJbVnlUgeNhmeBBqhPblFqjDN2mNx-I | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Order

## End-point: place Order

### Method: GET

> ```
> https://ecom.karanpatil.xyz/order/place
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                            | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NDY1Mzg0MTksImV4cCI6MTY0NjU2ODQxOX0.JUl-OozAWar9bJbVnlUgeNhmeBBqhPblFqjDN2mNx-I | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get All Orders

### Method: GET

> ```
> https://ecom.karanpatil.xyz/order/getAll
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                            | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NDY1NzIzNzMsImV4cCI6MTY0NjYwMjM3M30.zgRFYeMJA0rjP5Gx1NtbtEbYzLxHVM96-G-WZor_fes | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get All Orders ADMIN

### Method: GET

> ```
> https://ecom.karanpatil.xyz/order/admin/getAll
> ```

### 🔑 Authentication bearer

| Param | value                                                                                                                                                                                            | Type   |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| token | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjI2MjVjMjQ4NmU4Nzk4NzgyZTkxMSIsInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2NDY1Mzg0MTksImV4cCI6MTY0NjU2ODQxOX0.JUl-OozAWar9bJbVnlUgeNhmeBBqhPblFqjDN2mNx-I | string |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
