import Image from "next/image"
import centria1 from "../../assets/centria1.jpg"
import Logo from "../../assets/logo.svg"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { History, Tag, UserRoundPen } from 'lucide-react';
  
export default function AboutPage () {
    return (
        <div>
			{/* What is Centria Hub? */}
			<div className="grid grid-cols-2 my-20">
				<div className="flex flex-col justify-center gap-5 ml-20">
					<h1 className="text-5xl">What is Centria Hub?</h1>
					<p className="text-lg">Centria Hub is a platform that consolidates the latest university news, event information, and articles in one place, making it easily accessible for students, faculty, and stakeholders.</p>
				</div>
				<div className="flex justify-center items-center">
					<Image src={centria1} alt="Centria hub" className="rounded-full w-1/2"/>
					
				</div>
			</div>
			{/* Mission */}
			<div className="grid grid-cols-2 my-20 bg-gray-100 py-20">
				<div className="flex justify-center items-center">
					
					<Image src={Logo} alt="Centria hub" className="w-1/2" />
				</div>
				<div className="flex flex-col justify-center gap-5 mr-20">
					<h1 className="text-5xl">Mission</h1>
					<p className="text-lg">Our goal is to centralize university news and event information, which tends to be scattered, making it more easily accessible and enhancing the campus experience for students and faculty.</p>
				</div>
			</div>
			{/* Features & Value */}
			<div className="flex flex-col justify-center gap-5 my-20">
				<h1 className="text-5xl text-center mb-10">Features & Value</h1>
				<div className="flex flex-row gap-5 justify-center w-[80vw] mx-auto">
					<Card className="w-1/3">
						<CardHeader className="flex justify-center items-center">
							<History size={200} color="gray"/>
						</CardHeader>
						<CardContent>
							<CardTitle>Real-time Updates with the Latest Information</CardTitle>
						</CardContent>
						<CardFooter>
							<p>We provide the latest official announcements and important news from the university, always keeping the content up to date.</p>
						</CardFooter>
					</Card>
					<Card className="w-1/3">
						<CardHeader className="flex justify-center items-center">
							<Tag size={200} color="gray"/>
						</CardHeader>
						<CardContent>
							<CardTitle>Filtering Information with Tags</CardTitle>
						</CardContent>
						<CardFooter>
							<p>You can easily filter and display articles related to your interests by using the tags available on the site.</p>
						</CardFooter>
					</Card>
					<Card className="w-1/3">
						<CardHeader className="flex justify-center items-center">
							<UserRoundPen size={200} color="gray"/>
						</CardHeader>
						<CardContent>
							<CardTitle>Article Submission with an Editor Account</CardTitle>
						</CardContent>
						<CardFooter>
							<p>By creating an account and receiving approval from an administrator, you can submit articles. This feature also allows student organizations and club activities to share their information.</p>
						</CardFooter>
					</Card>
				</div>
			</div>
        </div>
    )
}