import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";

const mainRoutes = [
  {
    name: {
      en: "Home",
      ua: "Головна",
      ru: "Главная",
    },
    path: "/",
    component: HomePage,
    exact: true,
    icon: "",
  },
  {
    name: {
      en: "Product",
      ua: "Продукти",
      ru: "Продукты",
    },
    path: "/products",
    component: ProductPage,
    exact: false,
    icon: "",
  },
  {
    name: {
      en: "Cart",
      ua: "Кошик",
      ru: "Корзина",
    },
    path: "/cart",
    component: CartPage,
    exact: true,
    icon: "",
  },
  {
    name: {
      en: "Administration",
      ua: "Адміністрування",
      ru: "Администрирование",
    },
    path: "/admin",
    component: AdminPage,
    exact: true,
    icon: "",
  },
  {
    name: {
      en: "Registration",
      ua: "Реєстрація",
      ru: "Регистрация",
    },
    path: "/registration",
    component: AuthPage,
    exact: true,
    icon: "",
  },
  {
    name: {
      en: "Login",
      ua: "Увійти",
      ru: "Войти",
    },
    path: "/login",
    component: AuthPage,
    exact: true,
    icon: "",
  },
];

export default mainRoutes;
