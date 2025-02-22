import Footer from "@/components/modules/Footer/Footer";
import Navbar from "@/components/modules/Navbar/Navbar";
import Articles from "@/components/template/home/Articles/Articles";
import Coaches from "@/components/template/home/Coaches/Coaches";
import Header from "@/components/template/home/Header/Header";
import Services from "@/components/template/home/Services/Services";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Coaches/>
    <Services/>
    <Articles/>
    <Footer/>
    </>
  );
}
