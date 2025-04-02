import Footer from "@/components/app/footer";
import Navbar from "@/components/app/navbar/navbar";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <>
      <Navbar /> 
      <main className="min-h-screen">
        Projects Details Page: {slug}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}