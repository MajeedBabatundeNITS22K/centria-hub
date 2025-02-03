"use client"
import { news } from "../page" // Temporary implementation
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
  } from "@/components/ui/select"
import { ArrowUpDown, Tag } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
  } from "@/components/ui/pagination"
  

export default function NewsPage () {
	const [selectedTags, setSelectedTags] = useState<string[]>([])
	const [selectedSort, setSelectedSort] = useState<string>()
	const [currentPage, setCurrentPage] = useState<number>(1)
	const itemsPerPage = 10

	const tags = [
		"engineering",
		"music",
		"business",
		"healthcare",
		"application",
		"research and development"
	]

	const handleSelectedTags = (tag: string) => {
		if(selectedTags.includes(tag)){
			setSelectedTags(selectedTags.filter((selectedTag) => selectedTag != tag))
		} else {
			setSelectedTags([...selectedTags,tag])
		}
	}

	const totalPages = Math.ceil(news.length / itemsPerPage);
	const start = (currentPage - 1) * 10;
	const end = start + itemsPerPage;
	const displayedNews = news.slice(start, end)

	return (
	  <div className="my-5 mx-10">
		{/* Filter */}
		<div className="flex flex-col md:flex-row gap-5">
			{/* Sort */}
			<div>
				<div className="flex flex-row gap-1 mb-3">
					<ArrowUpDown />
					<h1 className="font-bold">Sort</h1>
				</div>
				<div className="flex flex-row gap-3">
					<Select onValueChange={(value) => setSelectedSort(value)}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Publication date" />
						</SelectTrigger>
						<SelectContent className="bg-white">
							<SelectItem value="latest">Latest</SelectItem>
							<SelectItem value="oldest">Oldest</SelectItem>
						</SelectContent>
					</Select>
					<Button variant={"centriaRed"} onClick={() => console.log("Selected Sort:", selectedSort)}>Sort</Button>
				</div>
			</div>
			{/* Tags */}
			<div className="">
				<div className="flex flex-row gap-1 mb-3">
					<Tag />
					<h1 className="font-bold">Tags</h1>
				</div>
				<div className="flex flex-wrap gap-3 pb-5 ">
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select Tags" />
					</SelectTrigger>
					<SelectContent className="bg-white">
						{tags.map((tag) => (
							<div key={tag}>
								<Checkbox
									checked={selectedTags.includes(tag)}
									onCheckedChange={() => handleSelectedTags(tag)}
									className="mr-2"
								/>
								<span>{tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}</span>
							</div>
						))}
					</SelectContent>
				</Select>
				<Button variant="centriaRed" onClick={() => console.log("Selected Tags: ", selectedTags)}>Filter</Button>
				</div>
			</div>
		</div>
		
		{/* News Cards */}
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
			{displayedNews.map((item) => (
				<Card key={item.id}>
					<CardHeader>
						<CardTitle>{item.title}</CardTitle>
						<CardDescription>{item.posted_date}</CardDescription>
						<div className="flex flex-wrap gap-3">
							{item.tags?.map((tag) => (
								<Badge key={tag} variant="outline" className="w-fit">{tag}</Badge>
							))}
						</div>
					</CardHeader>
					<CardContent className='flex flex-col justify-content items-center'>
						<Image
							src={item.thumbnail}
							alt={item.title}
							width={200}
							height={200}
							className="rounded-lg shadow-md object-cover"
						/>
					</CardContent>
					<CardFooter className="flex flex-col gap-5">
						<p className='mt-5'>{item.text.length > 100 ? item.text.substring(0, 100) + "..." : item.text}</p>
						<Link href={`/news/${item.id}`} className={`${buttonVariants({variant:"centriaRed_outline", size:"lg"})}`}>Read More</Link>
					</CardFooter>
				</Card>
			))}
		</div>

		{/* Pagenation */}
		<Pagination className="mt-5">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious className={`${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
				</PaginationItem>
				{/* Page Number */}
				{[...Array(totalPages)].map((_, index) => (
					<PaginationItem key={index}>
						<PaginationLink
							isActive = {currentPage === index + 1}
							onClick={() => setCurrentPage(index + 1)}
						>
							{index + 1}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationNext
						className={`${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
						onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	  </div>
	)
}