// import { elysia } from '@/elysia/client'
import Image from 'next/image'
import { CircleChevronDown } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';

export default async function Home() {
  // const { data } = await elysia.api.index.get()
  return (
    <div className=''>
      <main className=''>
        {/* Hero section */}
        <div className='relative h-full'>
          <div className=''>
            <Image width={100} height={80} src='/hero.jpg' alt='hero' className='h-[70vh] w-full object-cover brightness-50'/>
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
            <h1 className='text-center text-5xl mb-2 font-semibold'>Centria Hub</h1>
            <p className='text-center text-lg mb-2'>A platform for all Centria news, events, and articles</p>
            <a
              href="#news"
              className='m-2 scroll-smooth group flex justify-center items-center'
            >
              <CircleChevronDown color='#E40038' size={48} className='group-hover:scale-125 transition-transform duration-300'/>
            </a>
          </div>
        </div>
        {/* News Section */}
        <div id='news' className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl text-center my-20 font-semibold'>News</h1>
          <Carousel className='w-[80vw] flex justify-center items-center mx-auto'>
            <CarouselContent>
              {news.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.posted_date}</CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-col justify-content items-center'>
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={200}
                        height={200}
                        className="rounded-lg shadow-md object-cover"
                      />
                      <p className='mt-5'>{item.text.length > 100 ? item.text.substring(0, 100) + "..." : item.text}</p>
                    </CardContent>
                    <CardFooter>
                      <p></p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Link href="/news" className={`${buttonVariants({variant:"centriaRed", size:"lg"})} hover:scale-110 transition-transform duration-300 my-20`}>More News</Link>
        </div>
        {/* Events Section */}
        <div id='news' className='flex flex-col justify-center items-center bg-gray-100'>
          <h1 className='text-4xl text-center my-20 font-semibold'>Events</h1>
          <Carousel className='w-[80vw] flex justify-center items-center mx-auto'>
            <CarouselContent>
              {news.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className='bg-white'>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.posted_date}</CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-col justify-content items-center'>
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={200}
                        height={200}
                        className="rounded-lg shadow-md object-cover"
                      />
                      <p className='mt-5'>{item.text.length > 100 ? item.text.substring(0, 100) + "..." : item.text}</p>
                    </CardContent>
                    <CardFooter>
                      <p></p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Link href="/events" className={`${buttonVariants({variant:"centriaRed", size:"lg"})} hover:scale-110 transition-transform duration-300 my-20`}>More Events</Link>
        </div>

        {/* Articles Section */}
        <div id='news' className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl text-center my-20 font-semibold'>Articles</h1>
          <Carousel className='w-[80vw] flex justify-center items-center mx-auto'>
            <CarouselContent>
              {news.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.posted_date}</CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-col justify-content items-center'>
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={200}
                        height={200}
                        className="rounded-lg shadow-md object-cover"
                      />
                      <p className='mt-5'>{item.text.length > 100 ? item.text.substring(0, 100) + "..." : item.text}</p>
                    </CardContent>
                    <CardFooter>
                      <p></p>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Link href="/articles" className={`${buttonVariants({variant:"centriaRed", size:"lg"})} hover:scale-110 transition-transform duration-300 my-20`}>More Articles</Link>
        </div>
      </main>
    </div>
  )
}

//Mock Data
export const news = [
  {
    id: 1,
    title: "News Title 1",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "engineering",
      "research and development"
    ]
  },
  {
    id: 2,
    title: "News Title 2",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "business",
      "application"
    ]
  },
  {
    id: 3,
    title: "News Title 3",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "music",
    ]
  },
  {
    id: 4,
    title: "News Title 4",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "healthcare",
    ]
  },
  {
    id: 5,
    title: "News Title 5",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "engineering",
      "research and development"
    ]
  },
  {
    id: 6,
    title: "News Title 6",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "business",
      "application"
    ]
  },
  {
    id: 7,
    title: "News Title 7",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "music",
    ]
  },
  {
    id: 8,
    title: "News Title 8",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "healthcare",
    ]
  },
  {
    id: 9,
    title: "News Title 9",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "engineering",
      "research and development"
    ]
  },
  {
    id: 10,
    title: "News Title 10",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "business",
      "application"
    ]
  },
  {
    id: 11,
    title: "News Title 11",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "music",
    ]
  },
  {
    id: 12,
    title: "News Title 12",
    thumbnail: '/thumbnail.jpg',
    posted_date: "01-01-2025",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique dolore quae deleniti cupiditate pariatur eveniet, libero animi! Dignissimos dolorem non autem ab molestias? Ipsa amet labore optio veritatis pariatur?",
    tags: [
      "healthcare",
    ]
  }
]