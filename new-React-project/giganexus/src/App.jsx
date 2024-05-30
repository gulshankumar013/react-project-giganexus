import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Customize from './Component/Customize';
import Categories from './Component/Categories';
import About from './Component/About';
import Landing from './Component/Landing';
import Customizehedder from './Component/Customizehedder';
import Customize1 from './Component/Customize1';
import Customize2 from './Component/Customize2';
import Customize3 from './Component/Customize3';
import Cart from './Component/Cart';



const App = () => {

  const [product, setProduct] = useState([
    {
      url: "cardimage1.png",
      name: 'Cabinate',
      brand:'cabinate',
      description: 'Grey white Smoduler',
      about:"This the Cabinate for gammer or workstation",
      price: 1999
    },
    {
      url: 'cardimage2.png',
      name: 'Graphics card',
      brand:'Nvidia',
      description: 'Nvidia Geforce RTX 2080',
      about:"This the Cabinate for gammer or workstation",
      price: 30000
    },
    {
      url: 'monitor.png',
      name: 'Gaming Monitor',
      brand:'SAMSUNG',
      description: 'Samsung Odyssey G5',
      about:"This the Cabinate for gammer or workstation",
      price: 44499
    },
    {
      url: 'ps5.svg',
      name: 'Play Station5',
      brand:'SONY',
      description: 'Sony PS5 Husky White',
      about:"Brace yourself for a whole new world of possibilities as the PS5 unleashes unparalleled power and innovation Get ready to elevate your gaming experience to new heights with the Sony PlayStation 5 Console Unleash the power of play immerse yourself in stunning visuals and explore a world of endless possibilities With the PS5 gaming will never be the same again ",
      price: 66990,
      Specifications:'Model Number-PlayStation 5 console Sales Package-Gaming Console, Wireless Controller, Manual, AC Power Cord, USB Cable, HDMI Cable Console Type-Console HDMI-1 USB-3 Motion Controller Included-No',
    },
    {
      url: 'xbox.png',
      name: 'X box',
      brand:'X-Box',
      description: 'Xbox Starter Bundle',
      about:"This the Cabinate for gammer or workstation",
      price: 39990
    },
    {
      url: 'remoteplay.png',
      name: 'PSP Remote play',
      brand:'SONY',
      description: 'Sony PSP Husky White',
      about:"This the Cabinate for gammer or workstation",
      price: 28777
    },
    {
      url: 'razer.png',
      name: 'Gaming Mouse',
      brand:'Razer',
      description: 'Razer DeathAdder White',
      about:"This the Cabinate for gammer or workstation",
      price: 1349
    },
  ])

  const [trending, setTrending] = useState([
    {
      url: "ssd.png",
      name: 'SSD M.2',
      brand:'Corsair',
      description: 'Corsair MP600',
      about:"This the Cabinate for gammer or workstation",
      price: 10917
    },
    {
      url: 'dellmonitor.png',
      name: 'Dell Monitor',
      description: 'Dell S3221QS 32',
      about:"This the Cabinate for gammer or workstation",
      price: 37899
    },
    {
      url: 'cpu1.png',
      name: 'HP CPU Z8 G5',
      description: 'HP CPU Z8 G5 Workstation',
      about:"This the Cabinate for gammer or workstation",
      price: 466672
    },
    {
      url: 'cpu2.png',
      name: 'HP CPU Z4 G5',
      description: 'HP CPU Z4 G5 Workstation',
      about:"This the Cabinate for gammer or workstation",
      price: 366672
    },
    {
      url: 'laptop1.png',
      name: 'Asus ZenBook ',
      description: 'ASUS Zenbook Pro 14 Duo',
      about:"This the Cabinate for gammer or workstation",
      price: 239000
    },
    {
      url: 'laptop2.png',
      name: 'HP spector',
      description: 'Hp spector x360',
      about:"This the Cabinate for gammer or workstation",
      price: 145490
    },
    {
      url: 'gammingkey.png',
      name: 'Keyboard',
      description: 'Redragon K617',
      about:"This the Cabinate for gammer or workstation",
      price:2890
    },
  ])

  const [brand, setBrand] = useState([
    {
      url:'pr1.png',
      name:'Nvidia',
      discount:'Up to 30% off',
    },
    {
      url:'pr2.png',
      name:'Razer',
      discount:'Up to 20% off',
    },
    {
      url:'pr3.png',
      name:'X-Box',
      discount:'Up to 22% off',
    },
    {
      url:'sony.png',
      name:'Sony Play Station',
      discount:'Up to 35% off',
    },
    {
      url:'hp.png',
      name:'HP Workstation',
      discount:'Up to 35% off',
    },
    {
      url:'asus.png',
      name:'Asus Laptop & Pc',
      discount:'Up to 20% off',
    },
    {
      url:'Dell.png',
      name:'Dell',
      discount:'Up to 20% off',
    },
  ])

  const [cart,setCart] = useState([])

  const addToCart = (data)=>{
   console.log(cart)
    setCart([...cart,{...data,quantity:1}])
  }


  const router = createBrowserRouter([

  
    {
      path:"/",
      element: <Home count={cart.length}/>,
      children:[
        {
          path:"/",
          element:<Landing product={product} trending={trending} brand={brand} addToCart={addToCart} />
        },
        {
          path: "/about",
          element: <About/>
        },
    
        {
          path:"/customize",
          element:<Customize/>,
          children:[
            {
              path:"/customize/hedder",
              element:<Customizehedder/>
            },
            {
                path:"/customize/hedder/customize1",
                element:<Customize1/>
            },
            {
                 path:"/customize/hedder/customize2",
                element:<Customize2/>
            },
            {
                path:"/customize/hedder/customize3",
                element:<Customize3/>,
            }
          ]
        },
        {
          path:"/categories",
          element: <Categories/>
        },
       
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element: <Signup/>
        },
        {
          path:"/cart",
          element:<Cart cart={cart} setCart={setCart} />
        }

      ]
    },

    

  ])
  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
