import React from "react";
import Card from "./Card";

export default function Hero() {
  const data = [
    {
      url: "https://hblimg.mmtcdn.com/content/hubble/img/agra/mmt/activities/m_activities-agra-taj-mahal_l_400_640.jpg",
      title: "Taj Mahal",
      description:
        "Taj Mahal is a white marble mausoleum on the bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal.",
    },
    {
      url: "https://media.easemytrip.com/media/Blog/India/637033873695687971/637033873695687971mcodjL.jpg",
      title: "Qutub Minar",
      description:
        "Qutub Minar is a minaret and 'victory tower' in Delhi, India. It is part of the Qutub Complex, a UNESCO World Heritage Site, and is made of red sandstone and marble.",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mLKNGVEmqaL9dn-ATgK4cYywBabn2XGxbA&s",
      title: "India Gate",
      description:
        "India Gate is a war memorial located in New Delhi. It commemorates the soldiers of the British Indian Army who died during World War I.",
    },
    {
      url: "https://images.indianexpress.com/2024/07/Recognised-for-its-exceptional-beauty-and-cultural-significance-the-Taj-Mahal-a-UNESCO-World-Heritage-Site-in-Agra-India-has-also-been-featured-in-the-list-in-the-22nd-position.-Here-are-th.jpg",
      title: "Amber Fort",
      description:
        "Amber Fort, located in Jaipur, Rajasthan, is known for its artistic Hindu-style elements. The fort overlooks Maota Lake, its main source of water.",
    },
    {
      url: "https://assets-news.housing.com/news/wp-content/uploads/2022/06/28100601/15-worlds-best-places-to-visit-13.jpg",
      title: "Hawa Mahal",
      description:
        "Hawa Mahal, also known as the 'Palace of Winds,' is located in Jaipur, Rajasthan. It is made of red and pink sandstone and was built in 1799 by Maharaja Sawai Pratap Singh.",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRvNIzd_nk4FoiQFNQlJKMTC1zmK7LE9dxw&s",
      title: "Golden Temple",
      description:
        "The Golden Temple, also known as Harmandir Sahib, is a gurdwara located in Amritsar, Punjab. It is the holiest site in Sikhism.",
    },
    {
      url: "https://assets-news.housing.com/news/wp-content/uploads/2022/06/28095201/15-worlds-best-places-to-visit-03.jpg",
      title: "Gateway of India",
      description:
        "The Gateway of India is an arch-monument located in Mumbai, Maharashtra. It was built in the 20th century to commemorate the landing of King George V and Queen Mary in 1911.",
    },
    {
      url: "https://www.stayvista.com/blog/wp-content/uploads/2023/11/nature-photographer-29ezCWtMtnM-unsplash-1-scaled-1.jpg",
      title: "Mysore Palace",
      description:
        "Mysore Palace, also known as Amba Vilas Palace, is a historical palace located in Mysore, Karnataka. It was the residence of the Wodeyar dynasty.",
    },
    {
      url: "https://blog.thomascook.in/wp-content/uploads/2018/04/kerala-tours3.jpg",
      title: "Konark Sun Temple",
      description:
        "The Konark Sun Temple is a 13th-century CE sun temple at Konark, Odisha. It is designed in the shape of a colossal chariot.",
    },
    {
      url: "https://ihplb.b-cdn.net/wp-content/uploads/2021/09/kerala-in-october-kollam.jpg",
      title: "Charminar",
      description:
        "Charminar is a mosque and monument located in Hyderabad, Telangana. It was constructed in 1591 and is known for its iconic four minarets.",
    },
  ];

  return (
    <>
      <h1 className="text-center text-4xl font-extrabold mb-8">All Places</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {data.map((item, index) => (
          <Card
            key={index}
            url={item.url}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
