import products from "../data/dataProduct.json"; // Import JSON ข้อมูลสินค้า
import ProductCard from "../components/ProductCard"; // Import Component สำหรับสินค้า

const Home = () => (
  <div className="container mx-auto py-8">
    {/* ส่วนคำอธิบายเกี่ยวกับเว็บไซต์ */}
    <div className="flex flex-col lg:flex-row gap-6">
      {/* กล่องคำอธิบาย */}
      <div className="bg-gray-200 p-6 rounded-lg flex-1 h-full">
        <h2 className="text-lg font-bold mb-4">คำอธิบายเกี่ยวกับเว็บไซต์</h2>
        <div className="bg-white p-4 rounded-md shadow-md h-full flex flex-col">
          <p className="text-gray-700">
            ระบบแนะนำโฆษณาของเราถูกออกแบบมาเพื่อปรับแต่งคำแนะนำให้เหมาะสมกับความสนใจของคุณโดยเฉพาะ โดยใช้ข้อมูลที่คุณระบุ เช่น หมวดหมู่แฟชั่นที่ชื่นชอบ ช่วงราคา หรือความสนใจเฉพาะด้าน ระบบจะคัดเลือกโฆษณาและสินค้าแฟชั่นที่ตรงกับความต้องการของคุณมากที่สุด เพื่อให้คุณได้รับประสบการณ์ที่ตอบโจทย์และสะดวกสบายที่สุด ทุกคำแนะนำปรับเปลี่ยนได้ทันทีตามการตอบสนอง เช่น การกด "Like" หรือ "Dislike" เพื่อให้ระบบเรียนรู้และปรับปรุงผลลัพธ์ให้ดียิ่งขึ้นในครั้งถัดไป ทั้งหมดนี้ทำได้โดยไม่ต้องลงทะเบียนหรือล็อกอิน ให้คุณใช้งานได้ง่ายและปลอดภัยในทุกแพลตฟอร์ม
          </p>
        </div>
      </div>


      {/* กล่องสินค้าแนะนำ- */}
      <div className="bg-gray-200 p-6 rounded-lg w-full lg:w-1/3">
        <h2 className="text-lg font-bold mb-4">สินค้าแนะนำ</h2>
        <div className="flex flex-col gap-5">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  </div>
); 

export default Home;
