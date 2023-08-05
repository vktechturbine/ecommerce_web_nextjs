import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import "../styles/menu.css";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { access } from 'fs';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Menu = () => {
  const router = useRouter();
  const [aactive, setActive] = useState(0);
  const [menu, setMenu] = useState([
    {
      foodCategoryId: 1,
      icon: FreeBreakfastIcon,
      foodStatus: "Popular",
      foodTye: "BreakFast",
      foodItems: [
        {
          foodID: 1,
          foodName: "Tea",
          foodPrice: 20,
          foodImage: "https://media.istockphoto.com/id/1210900885/photo/tea-in-cup-with-saucer-on-wooden-table.jpg?s=612x612&w=0&k=20&c=XDWcOvBI8aPVePCPCh3umwkxi3CJWtCZ5JHQfSa8Qag=",
          foodQuantity: 1,

        },
        {
          foodID: 2,
          foodName: "vada Pav",
          foodPrice: 30,
          foodImage: "https://media.istockphoto.com/id/1257507120/photo/vada-pav-or-wada-pav-indian-desi-burger-is-a-street-food-dish-from-mumbai-maharashtra-indian.jpg?s=1024x1024&w=is&k=20&c=5ek0eiMJ86X7c_SWyQL1JVqssS4LoUXqLc47tpd5G8c=",
          foodQuantity: 1,

        },
        {
          foodID: 3,
          foodName: "Misal Pav",
          foodPrice: 50,
          foodImage: "https://media.istockphoto.com/id/1483187456/photo/spicy-e-g-pav-or-usal-pav.jpg?s=612x612&w=0&k=20&c=OB7ACtRsMVKNhCE-gUEysZadq9_L7ZgiHYfDVqGFbgs=",
          foodQuantity: 1,

        },
        {
          foodID: 4,
          foodName: "Vada Sambar",
          foodPrice: 30,
          foodImage: "https://media.istockphoto.com/id/1250638945/photo/vada-medu-vadai-with-sambar.jpg?s=612x612&w=0&k=20&c=IiKRfbD_QJLKeACf7I2UY--dQYXOWNQmlRQigngvfwQ=",
          foodQuantity: 1,

        },
        {
          foodID: 5,
          foodName: "Edli",
          foodPrice: 30,
          foodImage: "https://media.istockphoto.com/id/1418100739/photo/idli-chutney.jpg?s=612x612&w=0&k=20&c=tYfysHCQpNgdWUcoTTMvKu6ZKjMKRGssqRW70fv-aok=",
          foodQuantity: 1,

        },
        {
          foodID: 6,
          foodName: "Masala Dosa",
          foodPrice: 50,
          foodImage: "https://media.istockphoto.com/id/909906350/photo/masala-dosa-south-indian-food.jpg?s=612x612&w=0&k=20&c=3CI-bw2NhYaX_t0-CZIXIIXsOygFcUaoGSmzbnVB-fU=",
          foodQuantity: 1,

        },
        {
          foodID: 7,
          foodName: "Poha",
          foodPrice: 20,
          foodImage: "https://media.istockphoto.com/id/501425188/photo/poha-popular-indian-breakfast.jpg?s=612x612&w=0&k=20&c=nqZpRUKEnRpKhBThiG0l1j1UzLIyq5HvysW6nRBf55w=",
          foodQuantity: 1,

        },
        {
          foodID: 8,
          foodName: "Coffe",
          foodPrice: 25,
          foodImage: "https://media.istockphoto.com/id/1442009345/photo/mocha-with-latte-art-served-in-a-cup-isolated-on-dark-grey-background-top-view-of-hot-coffee.jpg?s=612x612&w=0&k=20&c=XG-HPKKWqarVjOslQZVE8767BTrMNVNwNXqbMQ80k5I=",
          foodQuantity: 1,

        },
      ]
    },
    {
      foodCategoryId: 2,
      icon: LunchDiningIcon,
      foodStatus: "Special",
      foodTye: "Lunch",
      foodItems: [
        {
          foodID: 10,
          foodName: "Veg Thali",
          foodPrice: 120,
          foodImage: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y=",
          foodQuantity: 1,

        },
        {
          foodID: 11,
          foodName: "Dal Khichadi",
          foodPrice: 100,
          foodImage: "https://media.istockphoto.com/id/1254226641/photo/dalia-khichdi-or-daliya-khichadi-is-a-delicious-one-pot-meal-made-from-broken-wheat-and.jpg?s=612x612&w=0&k=20&c=nC6X5-5zFW0w7KjG8oTlPu4fzBYG1SFz_R0NNOs1N20=",
          foodQuantity: 1,

        },
        {
          foodID: 12,
          foodName: "Paneer Masala",
          foodPrice: 150,
          foodImage: "https://media.istockphoto.com/id/669312136/photo/paneer-butter-masala-or-cheese-cottage-curry-popular-indian-lunch-dinner-menu-in-weddings-or.jpg?s=612x612&w=0&k=20&c=3zO6gLjIgAfdPrLjeAlHSTiylqGwgQBDfhgGpxeoq_s=",
          foodQuantity: 1,

        },

        {
          foodID: 13,
          foodName: "Veg Biryani",
          foodPrice: 150,
          foodImage: "https://media.istockphoto.com/id/495188382/photo/indian-pulav-vegetable-rice-veg-biryani-basmati-rice.jpg?s=612x612&w=0&k=20&c=KQUBQt3PY-9IF31C0gvjrLFb9jZvp5mmLG6Vcxe1e7Q=",
          foodQuantity: 1,

        },

        {
          foodID: 15,
          foodName: "Dal tadaka",
          foodPrice: 150,
          foodImage: "https://media.istockphoto.com/id/1222519134/photo/indian-cuisine-daal.jpg?s=612x612&w=0&k=20&c=e5O5mpeM5xMECJGRXZhPQW86Zj4MAGwEBVtOqS2OwLU=",
          foodQuantity: 1,

        },
        {
          foodID: 16,
          foodName: "Paneer Palak",
          foodPrice: 225,
          foodImage: "https://media.istockphoto.com/id/851889508/photo/palak-paneer.jpg?s=612x612&w=0&k=20&c=5xcTOeOYTnihYzSG4OYaLVkhgn1EOgehU73aiZnhhNA=",
          foodQuantity: 1,

        },
      ]
    },
    {
      foodCategoryId: 3,
      icon: RestaurantIcon,
      foodStatus: "Lovely",
      foodTye: "Dinner",
      foodItems: [
        {
          foodID: 17,
          foodName: "Veg Thali",
          foodPrice: 120,
          foodImage: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y=",
          foodQuantity: 1,

        },
        {
          foodID: 18,
          foodName: "Dal Khichadi",
          foodPrice: 100,
          foodImage: "https://media.istockphoto.com/id/1254226641/photo/dalia-khichdi-or-daliya-khichadi-is-a-delicious-one-pot-meal-made-from-broken-wheat-and.jpg?s=612x612&w=0&k=20&c=nC6X5-5zFW0w7KjG8oTlPu4fzBYG1SFz_R0NNOs1N20=",
          foodQuantity: 1,

        },
        {
          foodID: 19,
          foodName: "Paneer Masala",
          foodPrice: 150,
          foodImage: "https://media.istockphoto.com/id/669312136/photo/paneer-butter-masala-or-cheese-cottage-curry-popular-indian-lunch-dinner-menu-in-weddings-or.jpg?s=612x612&w=0&k=20&c=3zO6gLjIgAfdPrLjeAlHSTiylqGwgQBDfhgGpxeoq_s=",
          foodQuantity: 1,

        },

        {
          foodID: 21,
          foodName: "Veg Biryani",
          foodPrice: 150,
          foodImage: "https://media.istockphoto.com/id/495188382/photo/indian-pulav-vegetable-rice-veg-biryani-basmati-rice.jpg?s=612x612&w=0&k=20&c=KQUBQt3PY-9IF31C0gvjrLFb9jZvp5mmLG6Vcxe1e7Q=",
          foodQuantity: 1,

        },

        {
          foodID: 23,
          foodName: "Dal tadaka",
          foodPrice: 150,
          foodImage: "https://media.istockphoto.com/id/1222519134/photo/indian-cuisine-daal.jpg?s=612x612&w=0&k=20&c=e5O5mpeM5xMECJGRXZhPQW86Zj4MAGwEBVtOqS2OwLU=",
          foodQuantity: 1,

        },
        {
          foodID: 24,
          foodName: "Paneer Palak",
          foodPrice: 22,
          foodImage: "https://media.istockphoto.com/id/851889508/photo/palak-paneer.jpg?s=612x612&w=0&k=20&c=5xcTOeOYTnihYzSG4OYaLVkhgn1EOgehU73aiZnhhNA=",
          foodQuantity: 1,

        },
      ]
    },
  ])

  const handleIncrement = (foodCategry, foodID, foodPrices, foodQuantite) => {
    foodPrices = foodPrices / foodQuantite;
    console.log(foodPrices + " " + foodQuantite);
    // console.log(foodPrices)
    setMenu((prevData) => {
      console.log(prevData);
      return prevData.map((category) => {
        console.log(category);
        if (category.foodCategoryId === foodCategry) {
          console.log(foodCategry);
          // return category;
        }
        return {
          ...category,
          foodItems: category.foodItems.map((product) => {
            if (product.foodID !== foodID) {
              return product;
            }
            return {
              ...product,
              foodPrice: foodPrices + foodQuantite * foodPrices,
              foodQuantity: product.foodQuantity + 1
            };
          }),
        };
      });
      console.log(prevData);
    });
  }
  useEffect(() => {
    setActive(menu[0]);
  }, [])

  console.log(aactive);
  return (
    <div>
      <div className="menu__header">
        <Header />
      </div>
      <div className="menu__body">
        <div className="menu__body__section1">
          <h5>Food Menu</h5>
          <h1>Most Popular Items <ShoppingCartIcon/></h1>
        </div>
        <div className="menu__body__section2">
          <ul className="justify-center flex ">
            {menu?.map((item) => {
              return (
                <li>
                  <a href="#1" onClick={() => setActive(item.foodCategoryId)} className={`justify-center flex pl-2  ${aactive == item && 'aactive'}`}>
                    <item.icon className="menu__body__section2__icon" />
                    <div className="menu__body__section2__text">
                      <small>{item.foodStatus}</small>
                      <h6>{item.foodTye}</h6>
                    </div>
                  </a>
                </li>
              )
            })}

          </ul>
          <div className="menu__body__section2__items">
            {menu?.map(items => {
              if (items.foodCategoryId === aactive) {
                return (
                  items?.foodItems?.map((item) => {
                    return (
                      <div className="menu__body__section2__item">
                        <Image className="menu__image" src={item.foodImage} width={100} height={100} alt='food_image' />
                        <div className="menu__body__section2__item__text">
                          <h5>
                            <span className="foodName">{item.foodName}</span>
                            <span className="foodQuant"><button onClick={() => handleIncrement(aactive.foodCategoryId, item.foodID, item.foodPrice, item.foodQuantity)}>+</button>{item.foodQuantity}<button onClick={() => { if (item.foodQuantity > 0) { item.foodQuantity - 1 } else { item.foodQuantity } }}>-</button></span>
                            <span className="foodPrice">₹{item.foodPrice}</span>
                          </h5>
                          <div className="menu__body__section2__item__buttons">
                            <button>Add to cart</button>
                            <button onClick={()=> my_modal_2.showModal()}>view</button>
                            <dialog id="my_modal_2" className="modal">
                              <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click outside to close</p>
                              </form>
                              <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                              </form>
                            </dialog>
                          </div>
                        </div>
                      </div>
                    );
                  }))
              }
            })}
          </div>
        </div>
      </div>
      <div className="menu__footer">
        <Footer />
      </div>

    </div>
  );
}

export default Menu;
