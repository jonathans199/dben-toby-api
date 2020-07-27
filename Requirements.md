## Sales App DBen-toby 



## Blueprint

1. Front-End - Admin Back Office
  1. Views
    1. Orders Dashboard
    1. Products(CRU)
    1. Stores(CRU)
    1. Users(CRUD)
    1. Orders (R)
  1. State Management
    -  Context API
    -  useState
  1. HTTP Requests
    -  Axios
    -  Get All orders
    -  Get All Users
    -  Post New Users
    -  Put Update Users
    -  Delete Users
    -  Get All Stores
    -  Post New Stores
    -  Put Update Store
    -  Get All Products
    -  Post New Products
    -  Put Update Products
  1. CSS Library
    -  Bootstrap
1. Backend 
  1. Routes
    1. Orders
      - CreateOrder
      - GetAllOrders
    1. Products
      - CreateProduct
      - UpdateProduct
      - GetProduct
      - GetProducts
    1. Stores
      - CreateStore
      - UpdateStore
      - GetStore
      - GetAllStores
    1. Users
      - CreateUser
      - UpdateUser
      - GetUser
      - GetAllUsers
  1. Database Communication
    - Mongoose
  1. Models
    1. Order
      1. Properties
        - Invoice No
        - User
        - Store / sold to
        - Date
        - Order PO
        - Units Delivered
        - Cases Delivered
        - Total Invoice
        - Terms
        - Products
    1. Product
      1. Properties
        - Item Number 
        - UPC
        - CVS no
        - Product Type
        - Brand
        - Category
        - Price
        - Pack
        - Image
    1. Store
      1. Properties
        - Store Number
        - Store Address
        - District Manager
        - Forklift? 
        - Store Phone
        - Contact1
        - Contact2
        - Delivery Hours
        - Delivery Days
    1. User
      1. Properties
        - Email
        - FirstName
        - LastName
        - Password
        - CreatedDate
        - UserType
    1. userType
      1. Properties
      

        
    
