import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";
import Link from "next/link";
import React from "react";

function Store() {
  const daat = [
    {
      id: "1",
      image:
        "https://media.istockphoto.com/id/2192134048/photo/python-programming-language-concept-with-computer-code-and-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=AX1ukBoJi_qPGuun3YTOLSCheXgTlJQpihpblwhWdgw=",
      title: "field 1",
      description: "",
      price: 10,
    },
    {
      id: "2",
      image:
        "https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
      title: "field 2",
      description: "",
      price: 20,
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
      title: "field 3",
      description: "",
      price: 30,
    },
    {
      id: "4",
      image:
        "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
      title: "field 4",
      description: "",
      price: 40,
    },
  ];

  return (
    <Container>
      <h1 className="py-4">Store</h1>

      <div className="gap-4 grid grid-cols-4">
        {daat.map((item) => (
          <Link key={item.id} href={`/store/ ${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Store;
