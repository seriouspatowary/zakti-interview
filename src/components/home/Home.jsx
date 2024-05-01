import { useEffect, useState,} from "react";


import { ModalMd } from "../modal/CustomModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';


export default function Home() {



 
 
 
  const [products, setProducts] = useState([]);
  

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty((prevQty) => prevQty - 1);
    }
  };
 


  
  
 


  useEffect(() => {
 
    fetchProducts();
   
    
   }, []); 

   
    


  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };

  
  const [productForm, setProductForm] = useState({
    name: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductForm({ ...productForm, [name]: value });
  };






 

 

 




  const fetchProducts = async () => {
   
    try {
      const response = await fetch(`http://localhost:5000/products`,{
      
      method:"GET",
      headers: {
        "Content-Type": "application/json",
      
         
      },  
      })
      
      let data = await response.json();
      
      console.log(data)

      setProducts(data);
      setQty(data.quantity)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  const addProduct = async () => {
   
    try {
      const response = await fetch(`http://localhost:5000/addproduct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...productForm
        })
      });
  
      if (response.status === 200) {
        console.log('Product Added Successfully')
        setCreateModalOpen(false);

     
        fetchProducts();
        setProductForm({})
      }
      else {
        console.log("Error adding product")
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }
  

  


     
 





  

  
 
  return (
    <>
     
      <div className="container  my-8 mx-auto px-10">
       
 





        <div className="dropcontainer absolute w-[72vw] border-1 bg-purple-200 rounded-md">
          
        </div>
      </div>

      <div className="container my-8  mx-auto px-10 mt-10">

       
      <button onClick={openCreateModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"><FontAwesomeIcon icon={faPlus} />Add Product</button>
        <ModalMd
        isOpen={isCreateModalOpen}
        closeModal={closeCreateModal}
        title='Add New Product'
        >
        <form className="mb-8 max-w-md w-ful">
          <div className="mb-4">
           
            <input onChange={handleChange} value={productForm?.name|| ""} name="name" type="text" id="productName" className="border rounded px-4 py-2 w-full" placeholder="Enter product name" />
          </div>
          <div className="mb-4">
            
            <input onChange={handleChange} value={productForm?.quantity || ""} name="quantity" type="number" id="quantity" className="border rounded px-4 py-2 w-full" placeholder="Enter Quantity" />
          </div>
          <div className="mb-4">
           
            <input onChange={handleChange} value={productForm?.price || ""} name="price" type="text" id="price" className="border rounded px-4 py-2 w-full" placeholder="Enter Price"/>
          </div>
        
        
          <div className="flex flex-row justify-between">
          <button onClick={() => {
                  addProduct();
                  closeCreateModal();
                }} type="submit" className="w-1/3 h-1/3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add Product</button>
                </div>
        </form>
        </ModalMd>
        
      </div>

      <div className="container my-8 mx-auto px-10 ">
        <h1 className="text-3xl font-bold mb-6">Display Current stock</h1>

        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Product Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Add to cart</th>
            </tr>
          </thead>
          <tbody >
            {products?.map(item => {
              return <tr key={item._id} className="table-auto border-collapse w-full">
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">₹{item.price}</td>
                <td className="border px-4 py-2">
                <span className="inline-block mr-1"></span>
                    <button className="mx-4" onClick={handleIncrement} >
                        -
                         
                      </button>

    
                  <button className="mx-5" onClick={handleDecrement} >
                     +
                  </button>
                </td>
                
              </tr>
            })}


          </tbody>
        </table>

      </div>
    </>

  );
}
