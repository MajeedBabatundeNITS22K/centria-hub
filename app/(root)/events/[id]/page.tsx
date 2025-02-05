'use client'
import { useParams } from 'next/navigation'
import { events } from '@/app/data/events'; // Temporary implementation
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
import { Button, buttonVariants } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';
import DateFormat from '@/components/DateFormat';

type EventItem = {
  id: number;
  title: string;
  thumbnail: string;
  posted_date: string;
  event_start_date: string;
  event_end_date: string;
  text: string;
  tags: string[];
};

function addToGoogleCalendar(event: EventItem){
  const title = encodeURIComponent(event.title)
  const startDate = new Date(event.event_start_date).toISOString().replace(/-|:|\.\d+/g, '')
  const endDate = new Date(event.event_end_date).toISOString().replace(/-|:|\.\d+/g, '')

  const googleCalenderURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}`
    
  window.open(googleCalenderURL, "_blank")
}

const Page = () => {
  const { id } = useParams()
  const eventData: EventItem | undefined = events.find((item) => item.id === Number(id))

  if(!eventData){
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
            <BreadcrumbLink href="/events">Events</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{eventData.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Posted Date & Tags & AddToCalenderButton */}
      <div className='flex flex-col md:flex-row md:items-center gap-3 mb-5'>
        <p className='text-gray-500 text-sm'>{DateFormat(eventData?.posted_date)}</p>
        <div className="flex flex-wrap gap-3">
          {eventData.tags?.map((tag) => (
            <Badge key={tag} variant="outline" className="w-fit">{tag}</Badge>
          ))}
        </div>
        <Button variant='centriaRed' className="w-fit" onClick={() => addToGoogleCalendar(eventData)}>Add to Calender</Button>
      </div>

      {/* Title & Event Date & Image & Text */}
      <h1 className='text-3xl md:text-5xl font-bold mb-5'>{eventData.title}</h1>
      <div className='flex flex-row gap-3'>
        <CalendarDays />
        <h1 className='text-sm md:text-xl font-bold mb-5'>
          {eventData.event_start_date === eventData.event_end_date ? 
          `${DateFormat(eventData.event_start_date)}` : 
          `${DateFormat(eventData.event_start_date)} - ${DateFormat(eventData.event_end_date)}`}
        </h1>
      </div>
      <div className='flex justify-center max-w-[50vw] mx-auto'>
        <Image
          src={eventData.thumbnail}
          alt={eventData.title}
          width={600}
          height={400}
          className="rounded-lg shadow-md object-cover mb-5 w-full h-auto"
        />
      </div>
      <p className='lg:mx-40 mb-5 lg:text-lg'>{eventData.text}</p>

      {/* Back Button */}
      <div className='flex justify-center'>
        <Link href="/events" className={`${buttonVariants({variant: "centriaRed"})}`}>Back</Link>
      </div>
    </div>
  );
}
export default Page

