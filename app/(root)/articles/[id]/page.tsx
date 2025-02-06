'use client'
import { useParams } from 'next/navigation'
import { articles } from '@/app/data/articles'; // Temporary implementation
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import DateFormat from '@/components/DateFormat';

type ArticleItem = {
  id: number;
  title: string;
  thumbnail: string;
  posted_date: string;
  text: string;
  tags: string[];
};

const Page = () => {
  const { id } = useParams()
  const articleData: ArticleItem | undefined = articles.find((item) => item.id === Number(id))

  if(!articleData){
    return <p>No Event Data.</p>
  }

  return (
    <div className="my-5 mx-10 min-h-[100vh]">
      <Breadcrumb className='mb-5'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/articles">Articles</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{articleData.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Published Date & Tags */}
      <div className='flex flex-col md:flex-row md:items-center gap-3 mb-5'>
        <p className='text-gray-500 text-sm'>{DateFormat(articleData?.posted_date)}</p>
        <div className="flex flex-wrap gap-3">
          {articleData.tags?.map((tag) => (
            <Badge key={tag} variant="outline" className="w-fit">{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Title & Image & Text */}
      <h1 className='text-3xl md:text-5xl font-bold mb-5'>{articleData.title}</h1>
      <div className='flex justify-center max-w-[50vw] mx-auto'>
        <Image
          src={articleData.thumbnail}
          alt={articleData.title}
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover mb-5 w-full h-auto"
        />
      </div>
      <p className='lg:mx-40 mb-5 lg:text-lg'>{articleData.text}</p>

      {/* Back Button */}
      <div className='flex justify-center'>
        <Link href="/articles" className={`${buttonVariants({variant: "centriaRed"})}`}>Back</Link>
      </div>
    </div>
  );
}
export default Page

