# ADONINTERNET CODE ASSESSEMENT

* Package-manager : NPM
* Database : Atlas (db.js)
* NODE_ENV : development
* SERVER_PORT : 8082

# DB Credentials 
* HOST :  mongodb+srv://cluster0-vyrr1.mongodb.net/
* USER : userx
* PASSWORD : pass
* Shell connection string (LINUX) :  > mongo "mongodb+srv://cluster0-vyrr1.mongodb.net/test"  --username user
* DB name : ProdCat
* Collections : users, products, files, categories

# Project Installation

**STEP1**
> **Clone project** :  git clone https://github.com/goutham001/adon.git

**STEP2**
> **Install/Update node_modules** : npm install

**STEP3**
> **START NODE SERVER** : node adminer.js
(from project root directory)


# API Documents

**Existing Users**

**username** : goutham ||
**password** : password ||
**role** : EDITOR

**username** : aashiq ||
**password** : password ||
**role** : ADMIN
> **(password for the above user has been encrypted using bycrypt library and stored in DB)**

**User table query**
> db.users.find().pretty()

**Category table query**
> db.categories.find().pretty()

**File table query**
> db.files.find().pretty()


**User Registration (no auth)**

* API: localhost:8082/register
* METHOD : POST
* CONTENT-TYPE : application/json
* SAMPLE BODY : 
{
    "username": "aashiq",
    "password": "password",
    "gender": "male",
    "role": "ADMIN"
}
 

**Login**

* API: localhost:8082/login
* METHOD : POST
* CONTENT-TYPE : application/json
* SAMPLE BODY: 
{
    "username": "aashiq",
    "password": "password",
    "role": "ADMIN"
}

> Return JWT token as response for successfull login.

**The below Header should be added to every http request from client**
Where value is the token return after successfull login for each user. 

* HEADERS :
* > key   : Authorization
* > value : eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.   eyJ1c2VybmFtZSI6ImFhc2hpcSIsImdlbmRlciI6Im1hbGUiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE1ODE3ODUwMTksImV4cCI6MTU4MTg3MTQxOSwiYXVkIjoiZ291dGhhbTAwNUBnbWFpbC5jb20iLCJpc3MiOiJHb3V0aGFtIiwic3ViIjoidGVzdCJ9.JBYSD7tXS6o_mbxGikXZyBOWPQkIbfmGjrqHk1PYBjh1xka3WVVKExoRxQ7o4XvMU6tegJkfDLVYb9TB9vQj5htHqlRf0LL_T8L_8EM-0JQzRO0hxotbYwzQu5v_SM9x8nxZE1IjLXwnOPRPwaR_pyIKJ0gr_niqIAT8y2weN3I

**Create_Category** (Admin Only)

* API: localhost:8082/create_category
* METHOD : POST
* CONTENT-TYPE : application/json
* HEADERS : Authorization
* SAMPLE BODY: 
[
	{
		"cat_id": 1,
		"cat_name": "footwear"
	},
	{
		"cat_id": 2,
		"cat_name": "electronics"
	},
	{
		"cat_id": 3,
		"cat_name": "food"
	},
	{
		"cat_id": 4,
		"cat_name": "clothing"
	}
]


**FetchAll_Category** (Admin, Editor, Viewer)


* API: localhost:8082/fetch_all_category
* METHOD : GET


**Create_Products** (Admin Only)


* API: localhost:8082/create_products
* METHOD : POST
* CONTENT-TYPE : application/json
* HEADERS : Authorization
* SAMPLE BODY: 
[
        {
             "product_id": 2345,
             "title": "bottle",
             "description": "glass",
             "images": "shoe1.jpg",
             "brochure": "imgs01.jpg",
             "category": "goods"
        }
]


**Update_Products** (Editor only)


* API: localhost:8082/update_products
* METHOD : PUT
* CONTENT-TYPE : application/json
* PARAMS : id (5e47a70b6be5f03f6c961e5e)
* HEADERS : Authorization
* SAMPLE BODY: 
[
        {
             "title": "glass-bottle"
        }   
]


**FetchAll_Products** (Everyone)

* API: localhost:8082/fetch_all
* METHOD : GET
* HEADERS : Authorization

**Fetch_All_Products_by_Category** (Admin)

* API: localhost:8082/fetch_products_by_category
* METHOD : GET
* PARAMS : category ("goods")
* HEADERS : Authorization

**Fetch_All_Products_by_id** (Admin)

* API: localhost:8082/fetch_product_by_id
* METHOD : GET
* PARAMS : product_id (1020)
* HEADERS : Authorization

**Delete_All_Products_by_id** (Admin Only)


* API: localhost:8082/delete_product_by_id
* METHOD : GET
* PARAMS : id (5e47a70b6be5f03f6c961e5f)
* HEADERS : Authorization

**Product table query**
> db.products.find().pretty()

**File_Upload**

* API: localhost:8082/upload
* METHOD : POST
* BODY (form-data) : file (choose files)
* HEADERS : Authorization


