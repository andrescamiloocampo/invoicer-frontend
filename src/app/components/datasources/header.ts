interface HeaderOption {
  id: number;
  name: string;
  href: string;
}

export const options: HeaderOption[] = [
  {
    id: 1, 
    name: "Invoices",
    href: "/dashboard/invoices",
  },
  {
    id: 2,
    name: "Home",
    href: "/dashboard",
  },
];
