


interface DataType {
  id: number;
  img: string;
  category: string;
  date: string;
  title: string;
} 

const blog_data:DataType[] = [
	{
		id: 1,
		img: "/assets/img/banner/1.jpg",
		category: "Workshop",
		date: "16 Desember 2025",
		title: `Workshop Pelatihan Khatib Muhammadiyah Berjalan Lancar Penuh Semangat`,
	},
	{
		id: 2,
		img: "/assets/img/banner/2.jpg",
		category: "Wakaf",
		date: "12 Desember 2025",
		title: `Keutamaan Wakaf menurut Tarjih Muhammadiyah`,
	},
	{
		id: 3,
		img: "/assets/img/banner/3.jpg",
		category: "Lazismu",
		date: "19 Desember 2025",
		title: `Lazismu Bantu Korban Banjir Sumatra dengan total 20 Milyar Rupiah`,
	},
	{
		id: 4,
		img: "/assets/img/banner/4.jpg",
		category: "Artikel",
		date: "19 Desember 2025",
		title: `Tips Masjid memilih Khatib Jum'at`,
	},
]

const blog_data2:DataType[] = [
	{
		id: 1,
		img: "/assets/img/bg-img/22.jpg",
		category: "Business",
		date: "16 Dec",
		title: `A collection of textile samples lay spread out on the table`,
	},
	{
		id: 2,
		img: "/assets/img/bg-img/23.jpg",
		category: "Agency",
		date: "13 Dec",
		title: `One morning, when Gregor Samsa woke from troubled dreams`,
	},
	{
		id: 3,
		img: "/assets/img/bg-img/24.jpg",
		category: "Info",
		date: "11 Dec",
		title: `He lay on his armour-like back`,
	},
	{
		id: 4,
		img: "/assets/img/bg-img/25.jpg",
		category: "World",
		date: "6 Dec",
		title: `The 5 best review in Affan`,
	},
	{
		id: 5,
		img: "/assets/img/bg-img/26.jpg",
		category: "Fashion",
		date: "1 Dec",
		title: `It was not a dream. His room, a proper human room although`,
	},
	{
		id: 6,
		img: "/assets/img/bg-img/27.jpg",
		category: "Sports",
		date: "25 Nov",
		title: `The 5 best review in Affan`,
	},

	// repite data 
	{
		id: 1,
		img: "/assets/img/bg-img/22.jpg",
		category: "Business",
		date: "16 Dec",
		title: `A collection of textile samples lay spread out on the table`,
	},
	{
		id: 2,
		img: "/assets/img/bg-img/23.jpg",
		category: "Agency",
		date: "13 Dec",
		title: `One morning, when Gregor Samsa woke from troubled dreams`,
	},
	{
		id: 3,
		img: "/assets/img/bg-img/24.jpg",
		category: "Info",
		date: "11 Dec",
		title: `He lay on his armour-like back`,
	},
	{
		id: 4,
		img: "/assets/img/bg-img/25.jpg",
		category: "World",
		date: "6 Dec",
		title: `The 5 best review in Affan`,
	},
	{
		id: 5,
		img: "/assets/img/bg-img/26.jpg",
		category: "Fashion",
		date: "1 Dec",
		title: `It was not a dream. His room, a proper human room although`,
	},
	{
		id: 6,
		img: "/assets/img/bg-img/27.jpg",
		category: "Sports",
		date: "25 Nov",
		title: `The 5 best review in Affan`,
	},
];

export default blog_data;
